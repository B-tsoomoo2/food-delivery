import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getOrder = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "id required" });
  }

  try {
    const order = await prisma.foodOrder.findUnique({
      include: {
        foodOrderItems: {
          include: {
            food: true,
          },
        },
      },
      where: {
        id: Number(id),
      },
    });

    res.json(order);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
