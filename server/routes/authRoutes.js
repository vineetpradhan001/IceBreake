import { Router } from "express";
import {
  currentUser,
  login,
  logout,
  signup,
} from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.get("/currentuser", currentUser);

export default authRouter;
