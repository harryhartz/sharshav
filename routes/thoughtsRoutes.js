// routes/thoughtsRoutes.js
import express from "express";
import { getThoughts, addThought, updateThought, deleteThought } from "../controllers/thoughtsController.js";

const router = express.Router();

router.get("/", getThoughts);
router.post("/", addThought);
router.put("/:id", updateThought);
router.delete("/:id", deleteThought);

export default router;