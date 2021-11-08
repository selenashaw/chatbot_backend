const express = require("express");

const Log = require("../controllers/log");

const router = express.Router();

// Routes

router.get("/", Log.getAllLogs);

router.get("/class", Log.getClassLogs);

router.get("/semester", Log.getSemesterClassLogs);

router.get("/assignment", Log.getAssignmentSemesterLogs);

router.get("/part", Log.getAssignmentPartLogs);

router.get("/question", Log.getLogsByQuestion);

router.get("/:id", Log.getLogById);

router.post("/", Log.createLog);

module.exports = router;