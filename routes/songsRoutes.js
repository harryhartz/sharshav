// routes/songsRoutes.js
import express from "express";
import { getSongs, addSong, updateSong, deleteSong } from "../controllers/songsController.js";

const router = express.Router();

router.get("/", getSongs);
router.post("/", addSong);
router.put("/:id", updateSong);
router.delete("/:id", deleteSong);

export default router;