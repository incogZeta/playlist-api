const { ObjectID } = require("bson");
const { Schema, model } = require("mongoose");

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  creator: [{ type: Schema.Types.ObjectId, ref: "user" }],
  createdAt: { type: Date, default: Date.now() },
});

const Playlist = model("artist", artistSchema);

exports.artist = artist;
