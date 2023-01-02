const express = require("express");
const {
  createSong,
  getSongs,
  deleteSong,
  getSong,
} = require("../controllers/songController");

const router = express.Router();

router
  .get("/songs", getSongs)
  .get("/song/:id", getSong)
  .post("/songs", createSong)
  .put("/song/:id", () => {})
  .delete("/song/:id", deleteSong);

exports.songRoutes = router;
