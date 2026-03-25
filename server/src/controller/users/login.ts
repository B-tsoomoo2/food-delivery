import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma";
import jwt from "jsonwebtoken";

const secretKey = process.env.secretKey!;

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) return res.status(404).json({ message: "user not found" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.send("invalid credentials");
  }

  try {
    const accesToken = jwt.sign(
      {
        data: {
          userId: user.id,
          email: user.email,
          role: "user",
        },
      },
      secretKey,
      { expiresIn: "1h" },
    );

    res.json({ accesToken });
  } catch (error) {
    res.send("invalid credentials");
  }
};
