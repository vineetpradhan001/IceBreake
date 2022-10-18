import { Router } from "express";
import {
  createConvo,
  deleteConvo,
  getConvo,
  getConvos,
  updateConvo,
} from "../controllers/convoControllers.js";

const convoRouter = Router();

convoRouter.get("/", getConvos);
convoRouter.get("/:id", getConvo);
convoRouter.post("/", createConvo);
convoRouter.delete("/:id", deleteConvo);
convoRouter.patch("/:id", updateConvo);

export default convoRouter;
