// routes/filmsRoutes.js
import express from "express";
import { getFilms, addFilm, updateFilm, deleteFilm } from "../controllers/filmsController.js";

const router = express.Router();

router.get("/", getFilms);
router.post("/", addFilm);
router.put("/:id", updateFilm);
router.delete("/:id", deleteFilm);

export default router;