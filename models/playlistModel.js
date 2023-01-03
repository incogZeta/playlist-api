const { ObjectID } = require("bson");
const { Schema, model } = require("mongoose");

const PlaylistSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  createdAt: { type: Date, default: Date.now() },
  isPrivate: Boolean,
  songs: [{ type: Schema.Types.ObjectId, ref: "Song" }],
});

const Playlist = model("Playlist", PlaylistSchema);

exports.Playlist = Playlist;
