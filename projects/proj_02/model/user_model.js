const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  jogTitle: {
    type: String,
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
