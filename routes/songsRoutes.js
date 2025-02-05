import express from "express";
import { getSongs, addSong } from "../controllers/songsController.js";

const router = express.Router();

router.get("/", getSongs);
router.post("/", addSong);

export default router;
