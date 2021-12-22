const mongoose = require("mongoose");

const FriendSchema1 = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  jobtitle: {
    type: String,
    required: true,
  },
  ename: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const FriendModel1 = mongoose.model("Resume", FriendSchema1);
module.exports = FriendModel1;
