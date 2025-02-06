import Film from "../models/filmModel.js";

export const getFilms = async (req, res) => {
  try {
    const films = await Film.find();
    console.log("Fetched films:", films); // 🔹 Add this log to see what's being retrieved
    res.json(films);
  } catch (error) {
    console.error("Error fetching films:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
