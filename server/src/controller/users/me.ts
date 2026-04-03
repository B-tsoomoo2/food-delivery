import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const me = async (req: Request, res: Response) => {
  if (req.user?.userId) return res.status(404).json({});

  const user = await prisma.user.findUnique({
    where: {
      id: req?.user?.userId,
    },
    select: {
      email: true,
      phoneNumber: true,
    },
  });

  if (!user) return res.status(400).json({ message: "not found" });

  return res.status(200).json(user);
};
