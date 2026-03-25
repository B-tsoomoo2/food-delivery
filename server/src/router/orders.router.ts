import express from "express";
import { addOrder } from "../controller/orders/add-order";
import { getOrders } from "../controller/orders/get-orders";
import { getOrder } from "../controller/orders/get-order";
import { deleteOrder } from "../controller/orders/delete-order";
import { updateOrder } from "../controller/orders/update-order";

const router = express.Router();

router.get("/", getOrders);
router.get("/:id", getOrder);
router.post("/", addOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;
