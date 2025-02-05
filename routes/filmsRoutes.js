import express from "express";
import { getFilms, addFilm } from "../controllers/filmsController.js";

const router = express.Router();

router.get("/", getFilms);
router.post("/", addFilm);

export default router;
