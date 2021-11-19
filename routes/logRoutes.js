const express = require("express");

const Log = require("../controllers/log");

const router = express.Router();

// Routes

router.get("/", Log.getAllLogs);

router.get("/query", Log.getLogsByQuery);

router.get("/:id", Log.getLogById);

router.post("/", Log.createLog);

module.exports = router;