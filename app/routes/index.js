var express = require('express');
var router = express.Router();
var Project = require('../models/project');
var Skill = require('../models/skill');

/* GET home page. */
router.get('/', function(req, res) {
  // TODO: This method sucks. Use angular instead :)
  Project.find({}, function(err, projects) {
    Skill.find({}, function(err, skills) {
      res.render('index', {
        title: 'NJDup',
        projects: projects,
        skills: skills
      });
    });
  });

});

module.exports = router;
