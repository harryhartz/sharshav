import Song from "../models/songModel.js";

export const getSongs = async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
};

export const addSong = async (req, res) => {
  const { title, artist, album, year } = req.body;
  const song = new Song({ title, artist, album, year });
  await song.save();
  res.json(song);
};
