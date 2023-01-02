const { User } = require("../models");

exports.createUser = async (req, res) => {
  const body = req.body;
  const result = await new User(body).save();
  res.send(result);
};

exports.getUser = async (req, res) => {
  const playlistId = req.query.playlistId;

  if (playlistId) {
    const result = await User.find({ playlistId });
    res.send(result);
    return;
  }

  const result = await User.find({});
  res.send(result);
};

exports.deleteUser = async (req, res) => {
  const _id = req.params.id;
  await User.deleteOne({ _id });
  res.send("deleted");
};
