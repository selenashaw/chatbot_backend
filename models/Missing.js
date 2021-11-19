const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const missingSchema = new Schema({
  err_msg: String,
  log: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "log"
  }
});

const missing = mongoose.model("missing", missingSchema);

module.exports = missing;