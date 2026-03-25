import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const updateOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  const order = await prisma.foodOrder.update({
    where: { id: Number(id) },
    data: { status },
  });

  res.json(order);
};
