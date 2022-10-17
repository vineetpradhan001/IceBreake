import { Router } from "express";
import {
  createConvo,
  deleteConvo,
  getConvo,
  updateConvo,
} from "../controllers/convoControllers.js";

const convoRouter = Router();

convoRouter.get("/", getConvo);
convoRouter.post("/", createConvo);
convoRouter.delete("/:id", deleteConvo);
convoRouter.patch("/:id", updateConvo);

export default convoRouter;
