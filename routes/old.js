// // logRoutes.js
// const express = require("express");

// const Log = require("../controllers/log");

// const router = express.Router();

// // Routes

// router.get("/", Log.getAllLogs);

// router.get("/class", Log.getClassLogs);

// router.get("/semester", Log.getSemesterClassLogs);

// router.get("/assignment", Log.getAssignmentSemesterLogs);

// router.get("/part", Log.getAssignmentPartLogs);

// router.get("/question", Log.getLogsByQuestion);

// router.get("/:id", Log.getLogById);

// router.post("/", Log.createLog);

// module.exports = router;



// // surveyRoutes.js
// const express = require("express");

// const Survey = require("../controllers/survey");

// const router = express.Router();

// // Routes

// router.get("/", Survey.getAllSurveys);

// router.get("/:id", Survey.getSurveyWithLog);

// router.get("/class", Survey.getClassSurveys);

// router.get("/semester", Survey.getSemesterClassSurveys);

// router.get("/assignment", Survey.getAssignmentSemesterSurveys);

// router.post("/", Survey.createSurvey);

// module.exports = router;


// // testSurveyRoutes.js
// const express = require("express");

// const testSurvey = require("../controllers/testSurvey");

// const router = express.Router();

// // Routes

// router.get("/", testSurvey.getTestSurveys);

// router.post("/", testSurvey.createTestSurvey);

// module.exports = router;