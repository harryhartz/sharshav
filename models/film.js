import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({
  title: String,
  director: String,
  year: Number,
  description: String,
});

export default mongoose.model("Film", filmSchema);
