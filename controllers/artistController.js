const { Artist } = require("../models/artistModel");

exports.createArtist = async (req, res) => {
  const body = req.body;
  const result = await new Artist(body).save(body);
  res.send(result);
};

exports.getArtists = async (req, res) => {
  try {
    const result = await Artist.find({});
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

exports.getArtist = async (req, res) => {
  const _id = req.params.id;
  const result = await Artist.findById({ _id });
  res.send(result);
};

exports.deleteArtist = async (req, res) => {
  const _id = req.params.id;
  await Artist.deleteOne({ _id });
  res.send("deleted");
};
