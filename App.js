var express = require('express');
var app = express();

// Routes
const logRoute = require('./routes/logRoutes');
const surveyRoute = require('./routes/surveyRoutes');
const testSurveyRoute = require('./routes/testSurveyRoutes');

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Routes
app.use('/log', logRoute);
app.use('/survey', surveyRoute);
// app.use('/testSurvey', testSurveyRoute);

module.exports=app;