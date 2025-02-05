import Film from "../models/film.js";

export const getFilms = async (req, res) => {
  const films = await Film.find();
  res.json(films);
};

export const addFilm = async (req, res) => {
  const { title, director, year, description } = req.body;
  const film = new Film({ title, director, year, description });
  await film.save();
  res.json(film);
};
