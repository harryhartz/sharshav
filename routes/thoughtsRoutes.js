import express from "express";
import { getThoughts, addThought } from "../controllers/thoughtsController.js";

const router = express.Router();

router.get("/", getThoughts);
router.post("/", addThought);

export default router;
