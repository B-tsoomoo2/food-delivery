import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma";

export const addUser = async (req: Request, res: Response) => {
  const { email, password, age, phoneNumber } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      age,
      phoneNumber,
    },
  });

  res.json(user);
};
