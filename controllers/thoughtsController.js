import Thought from "../models/thought.js";

export const getThoughts = async (req, res) => {
  const thoughts = await Thought.find();
  res.json(thoughts);
};

export const addThought = async (req, res) => {
  const { title, content } = req.body;
  const thought = new Thought({ title, content });
  await thought.save();
  res.json(thought);
};
