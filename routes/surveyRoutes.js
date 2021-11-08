const express = require("express");

const Survey = require("../controllers/survey");

const router = express.Router();

// Routes

router.get("/", Survey.getAllSurveys);

router.get("/:id", Survey.getSurveyWithLog);

router.get("/class", Survey.getClassSurveys);

router.get("/semester", Survey.getSemesterClassSurveys);

router.get("/assignment", Survey.getAssignmentSemesterSurveys);

router.post("/", Survey.createSurvey);

module.exports = router;