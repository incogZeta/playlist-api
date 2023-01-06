const { Song } = require("../models/songModel");

exports.createSong = async (req, res) => {
  const body = req.body;
  const result = await new Song(body).save();
  res.send(result);
};

exports.getSongs = async (req, res) => {
  const { max } = req.query;
  const result = await Song.find({}).limit(max);
  res.send(result);
};

exports.getSong = async (req, res) => {
  const _id = req.params.id;
  const result = await Song.findById({ _id });
  res.send(result);
};

exports.deleteSong = async (req, res) => {
  const _id = req.params.id;
  await Song.deleteOne({ _id });
  res.send("deleted");
};
