import Film from "../models/filmModel.js"; // Ensure you have a Film model

// ✅ GET all films
export const getFilms = async (req, res) => {
  try {
    const films = await Film.find();
    res.json(films);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ POST a new film
export const addFilm = async (req, res) => {
  try {
    const { title, director, year } = req.body;
    const newFilm = new Film({ title, director, year });
    const savedFilm = await newFilm.save();
    res.status(201).json(savedFilm);
  } catch (error) {
    res.status(500).json({ message: "Error adding film", error: error.message });
  }
};
