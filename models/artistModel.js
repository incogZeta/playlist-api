const { ObjectID } = require("bson");
const { Schema, model } = require("mongoose");

const ArtistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  creator: [{ type: Schema.Types.ObjectId, ref: "user" }],
  createdAt: { type: Date, default: Date.now() },
  url: String,
});
const Artist = model("Artist", ArtistSchema);
exports.Artist = Artist;
