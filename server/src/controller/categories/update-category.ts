import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const trimmedName = typeof name === "string" ? name.trim() : name;

  const category = await prisma.foodCategory.update({
    where: {
      id: Number(id),
    },
    data: {
      name: trimmedName,
    },
  });

  res.json(category);
};
