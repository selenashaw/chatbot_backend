const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const testSurveySchema = new Schema({
  responses: [String] 
});

const testSurvey = mongoose.model("testSurvey", testSurveySchema);

module.exports = testSurvey;