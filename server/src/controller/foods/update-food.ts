import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const updateFood = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, foodCategoryId } = req.body;
  const categoryId = Number(foodCategoryId);
  const trimmedName = typeof name === "string" ? name.trim() : name;
  const trimmedPrice = typeof price === "string" ? price.trim() : price;

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

  const food = await prisma.food.update({
    where: {
      id: Number(id),
    },
    data: {
      name: trimmedName,
      price: trimmedPrice,
      foodCategoryId: categoryId,
    },
  });

  res.json(food);
};
