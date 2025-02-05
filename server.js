import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import filmsRoutes from "./routes/filmsRoutes.js";
import thoughtsRoutes from "./routes/thoughtsRoutes.js";
import songsRoutes from "./routes/songsRoutes.js";


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/films", filmsRoutes);
app.use("/api/thoughts", thoughtsRoutes);
app.use("/api/songs", songsRoutes);
app.get("/", (req, res) => {
    res.send("Server is running");
  });

// Middleware
app.use(express.json()); // To parse JSON
app.use(cors());

import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));


  app.get("/api/items/:id", async (req, res) => {
    const { id } = req.params;
  
    // Check if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid item ID" });
    }
  
    try {
      const item = await Item.findById(id);
      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });
  

// Define a simple schema
const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Item = mongoose.model("Item", ItemSchema);

// ✅ POST Route - Create an Item
app.post("/api/items", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ GET Route - Fetch All Items
app.get("/api/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// ✅ GET Route - Fetch Single Item
app.get("/api/items/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
});

// ✅ PUT Route - Update an Item
app.put("/api/items/:id", async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
});

// ✅ DELETE Route - Delete an Item
app.delete("/api/items/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted successfully" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






