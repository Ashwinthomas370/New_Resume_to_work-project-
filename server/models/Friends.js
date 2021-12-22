const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const FriendModel = mongoose.model("friends", FriendSchema);

module.exports = FriendModel;
