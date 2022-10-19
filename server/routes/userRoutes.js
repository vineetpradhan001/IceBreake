import { Router } from "express";
import { getUser, getUsers } from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.get("/:id", getUser);
userRouter.get("/", getUsers);

export default userRouter;
