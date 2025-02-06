import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  year: { type: Number, required: true },
});

const Film = mongoose.model("Film", filmSchema);

export default Film;
