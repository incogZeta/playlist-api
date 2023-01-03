const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const { playlistRoutes, songRoutes, artistRoutes } = require("./routes");
require("dotenv").config();

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());

connect();

app.use(playlistRoutes);
app.use(songRoutes);
app.use(artistRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("Server running at:", port);
});
