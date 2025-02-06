// controllers/songsController.js
import Song from "../models/Song.js";

export const getSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addSong = async (req, res) => {
    try {
        const newSong = new Song(req.body);
        await newSong.save();
        res.status(201).json(newSong);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateSong = async (req, res) => {
    try {
        const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedSong);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteSong = async (req, res) => {
    try {
        await Song.findByIdAndDelete(req.params.id);
        res.json({ message: "Song deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};