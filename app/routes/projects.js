'use strict';

// Defines routes for handling projects

var express = require('express');
var router = express.Router();
var ProjectController = require('../controllers/ProjectController');

router.get('/', ProjectController.listProjects);

module.exports = router;
