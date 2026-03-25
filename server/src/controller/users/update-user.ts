import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma";

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, password, age, phoneNumber } = req.body;
  const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;

  const user = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      email,
      password: hashedPassword,
      age,
      phoneNumber,
    },
  });

  res.json(user);
};
