import { Router } from "express";
import {
  currentUser,
  login,
  logout,
  signup,
  updateUser,
} from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.get("/currentuser", currentUser);
authRouter.post("/updateuser", updateUser);

export default authRouter;
