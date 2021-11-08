const testSurvey = require("../models/TestSurvey");

// creates a test survey and stores it in the database
exports.createTestSurvey = async (req, res) => {
  try {
    await testSurvey.create({responses: req.body.responses})
    .then(result => {
      res.sendStatus(200);
    });
  }
  catch {
    console.log(err);
    res.sendStatus(500);
  }
};

// retrieves all of the test surveys from the database
exports.getTestSurveys = async (req,res) => {
  try {
    await testSurvey.find()
    .then(result => {
      res.status(200).send(result);
    });
  }
  catch {
    console.log(err);
    res.sendStatus(500);
  }
};