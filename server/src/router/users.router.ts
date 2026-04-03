import express from "express";
import { getUsers } from "../controller/users/get-users";
import { addUser } from "../controller/users/add-user";
import { updateUser } from "../controller/users/update-user";
import { deleteUser } from "../controller/users/delete-user";
import { login } from "../controller/users/login";
import { me } from "../controller/users/me";
import { authMiddleWare } from "../middleware/auth-middleware";
const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);
router.post("/login", login);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/me", authMiddleWare, me);

export default router;
