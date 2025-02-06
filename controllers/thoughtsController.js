// controllers/thoughtsController.js
import Thought from "../models/thoughtModel.js";

export const getThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addThought = async (req, res) => {
    try {
        const newThought = new Thought(req.body);
        await newThought.save();
        res.status(201).json(newThought);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateThought = async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedThought);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteThought = async (req, res) => {
    try {
        await Thought.findByIdAndDelete(req.params.id);
        res.json({ message: "Thought deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
