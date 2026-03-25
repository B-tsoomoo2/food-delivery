import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;

  const category = await prisma.foodCategory.delete({
    where: {
      id: Number(id),
    },
  });

  res.json(category);
};
