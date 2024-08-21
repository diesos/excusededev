const mongoose = require("mongoose");

const excuseSchema = new mongoose.Schema({
  http_code: {
    type: Number,
    unique: true,
    required: true,
    maxlength: 3,
  },
  tag: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 760,
  },
  message: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 760,
  },
});

const Excuse = mongoose.model("Excuse", excuseSchema);

module.exports = Excuse;
