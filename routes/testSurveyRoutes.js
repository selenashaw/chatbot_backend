const express = require("express");

const testSurvey = require("../controllers/testSurvey");

const router = express.Router();

// Routes

router.get("/", testSurvey.getTestSurveys);

router.post("/", testSurvey.createTestSurvey);

module.exports = router;