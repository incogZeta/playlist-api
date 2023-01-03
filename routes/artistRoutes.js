const express = require("express");
const {
  createArtist,
  deleteArtist,
  getArtist,
  getArtists,
} = require("../controllers/artistController");

const router = express.Router();

router
  .get("/artists", getArtists)
  .get("/artist/:id", getArtist)
  .post("/artists", createArtist)
  .put("/artist/:id", () => {})
  .delete("/artist/:id", deleteArtist);

exports.artistRoutes = router;
