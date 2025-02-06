// controllers/filmsController.js
import Film from "../models/filmModel.js";

export const getFilms = async (req, res) => {
    try {
        const films = await Film.find();
        res.json(films);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addFilm = async (req, res) => {
    try {
        const newFilm = new Film(req.body);
        await newFilm.save();
        res.status(201).json(newFilm);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateFilm = async (req, res) => {
    try {
        const updatedFilm = await Film.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedFilm);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteFilm = async (req, res) => {
    try {
        await Film.findByIdAndDelete(req.params.id);
        res.json({ message: "Film deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};