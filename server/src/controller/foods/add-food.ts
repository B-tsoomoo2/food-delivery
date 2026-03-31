import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const addFood = async (req: Request, res: Response) => {
  try {
    const { name, price, foodCategoryId } = req.body;
    console.log(req.body);

    const food = await prisma.food.create({
      data: {
        name,
        price,
        foodCategoryId,
      },
    });

    res.json({ message: "Success", data: food });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Error", data: err });
  }
};
