const express = require("express");
const {
  createPlaylist,
  deletePlaylist,
  addtoplaylist,
  getPlaylist,
  getPlaylists,
} = require("../controllers/playlistController");

const router = express.Router();

router
  .get("/playlists", getPlaylists)
  .get("/playlist/:id", getPlaylist)
  .post("/playlists", createPlaylist)
  .put("/playlist/:id", addtoplaylist)
  .delete("/playlist/:id", deletePlaylist);

exports.playlistRoutes = router;
