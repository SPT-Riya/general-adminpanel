const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: { type: String, required: false },
});

const projectDb = mongoose.model("projectDb", schema);

module.exports = projectDb;
