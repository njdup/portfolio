var express = require('express');
var router = express.Router();
var Project = require('../models/project');

/* GET home page. */
router.get('/', function(req, res) {
  // TODO: This method sucks. Use angular instead :)
  Project.find({}, function(err, projects) {
    res.render('index', {
      title: 'NJDup',
      projects: projects
    });
  });

});

module.exports = router;
