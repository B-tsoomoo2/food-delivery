import express from "express";
import { addCategory } from "../controller/categories/add-category";
import { deleteCategory } from "../controller/categories/delete-category";
import { getCategories } from "../controller/categories/get-categories";
import { updateCategory } from "../controller/categories/update-category";

const router = express.Router();

router.get("/", getCategories);
router.post("/", addCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
