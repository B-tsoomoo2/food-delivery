import express from "express";
import { addFood } from "../controller/foods/add-food";
import { deleteFood } from "../controller/foods/delete-food";
import { getFoods } from "../controller/foods/get-foods";
import { updateFood } from "../controller/foods/update-food";

const router = express.Router();

router.get("/", getFoods);
router.post("/", addFood);
router.put("/:id", updateFood);
router.delete("/:id", deleteFood);

export default router;
