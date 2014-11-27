'use strict';

// Loads data into the database

var Project = require('../app/models/project');
var Skill = require('../app/models/skill');
var mongoose = require('mongoose');


module.exports = function seedDatabase(db) {

  // Drop data currently in database
  Project.remove({}, function(err) {
    if (err) { console.log(err); };
  });
  Skill.remove({}, function(err) {
    if (err) { console.log(err); };
  });

  console.log("Seeding projects collection...");
  var projectData = require('./data').projects;

  projectData.forEach(function(data) {
    var project = new Project(data);
    project.save(function(err) {
      if(err) { console.log('Error occurred seeding database!'); }
    });
  });

  console.log("Seeding skills collection...");
  var skillData = require('./data').skills;

  skillData.forEach(function(data) {
    var skill = new Skill(data);
    skill.save(function(err) {
      if (err) { console.log('Error occurred seeding database!'); }
    });
  });

};
