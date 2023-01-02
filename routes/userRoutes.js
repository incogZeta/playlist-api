const express = require("express");
const {
  createUser,
  getUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router
  .get("/users", getUser)
  .post("/users", createUser)
  .put("/user/:id", () => {})
  .delete("/user/:id", deleteUser);

exports.userRoutes = router;
