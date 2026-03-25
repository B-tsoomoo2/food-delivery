import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await prisma.foodOrder.findMany({
      include: {
        foodOrderItems: {
          include: {
            food: true,
          },
        },
      },
    });

    res.json(orders);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
