const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now() },
});

const User = model("User", userSchema);

module.exports = User;
