const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logSchema = new Schema({
  queries: [{
    err_msg: String,
    category: String,
    helful: Boolean,
  }]
});

const log = mongoose.model("log", logSchema);

module.exports = log;