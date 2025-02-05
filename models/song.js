import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  year: Number,
});

export default mongoose.model("Song", songSchema);
