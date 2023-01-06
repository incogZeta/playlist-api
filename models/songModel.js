const { Schema, model } = require("mongoose");
const { ObjectID } = require("bson");

const songScheme = new Schema({
  name: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
  },
  duration: Number,
  createdAt: { type: Date, default: Date.now() },
  url: String,
});

const Song = model("Song", songScheme);
exports.Song = Song;
