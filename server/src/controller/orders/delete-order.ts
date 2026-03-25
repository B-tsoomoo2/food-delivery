import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const deleteOrder = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.foodOrderItem.deleteMany({
      where: {
        orderId: Number(id),
      },
    });

    const order = await prisma.foodOrder.delete({
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
