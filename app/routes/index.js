var express = require('express');
var router = express.Router();
var Project = require('../models/project');
var Skill = require('../models/skill');
var Interest = require('../models/interest');
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {

  // TODO: This method sucks. Use ember(?) instead :)
  Project.find({}, function(err, projects) {
    Interest.find({}, function(err, interests) {
      Skill.find({}, function(err, skills) {

        languages = skills.filter(function(el) { return el.type === 'programming language'; });
        frameworks = skills.filter(function(el) { return el.type === 'framework'; });

        res.render('index', {
          title: 'NJDup',
          projects: projects,
          interests: interests,
          skills: {'languages': languages, 'frameworks': frameworks}
        });
      });
    });
  });

});

router.get('/resume', function(req, res) {
  // Route for requesting a copy of my resume
  var resumePath = '../../public/docs/resume.pdf';
  fs.readFile(path.join(__dirname, resumePath), function(err, data) {
    if (err) { console.log(err); }
    res.contentType('application/pdf');
    res.send(data);
  });
});

router.get('/comingsoon', function(req, res) {
  res.render('comingsoon');
});

module.exports = router;
