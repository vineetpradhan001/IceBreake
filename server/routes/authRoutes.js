import { Router } from "express";
import {
  login,
  logout,
  signup,
  verifyJWT,
} from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.get("/verifyjwt", verifyJWT);

export default authRouter;
