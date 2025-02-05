import mongoose from "mongoose";

const thoughtSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Thought", thoughtSchema);
