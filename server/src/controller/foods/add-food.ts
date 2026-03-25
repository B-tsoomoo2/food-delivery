import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const addFood = async (req: Request, res: Response) => {
  const { name, price, foodCategoryId } = req.body;
  const categoryId = Number(foodCategoryId);

  const category = await prisma.foodCategory.findUnique({
    where: {
      id: categoryId,
    },
  });

  if (!category) {
    return res.status(404).json({
      message: "food baihkue",
    });
  }

  const food = await prisma.food.create({
    data: {
      name,
      price,
      foodCategoryId: categoryId,
    },
  });

  res.json(food);
};
