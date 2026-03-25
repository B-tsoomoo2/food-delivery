import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const orders = await prisma.foodOrder.findMany({
      where: {
        userId: Number(id),
      },
      select: {
        id: true,
      },
    });

    const orderIds = orders.map((order) => order.id);

    if (orderIds.length > 0) {
      await prisma.foodOrderItem.deleteMany({
        where: {
          orderId: {
            in: orderIds,
          },
        },
      });
    }

    await prisma.foodOrder.deleteMany({
      where: {
        userId: Number(id),
      },
    });

    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    res.json(user);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
