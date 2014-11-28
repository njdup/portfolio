'use strict';

// Loads data into the database

var Project = require('../app/models/project');
var Skill = require('../app/models/skill');
var Interest = require('../app/models/interest');
var mongoose = require('mongoose');


module.exports = function seedDatabase(db) {

  // Drop data currently in database
  Project.remove({}, function(err) {
    if (err) { console.log(err); };
  });

  Skill.remove({}, function(err) {
    if (err) { console.log(err); };
  });

  Interest.remove({}, function(err) {
    if (err) { console.log(err); };
  });

  // Proceed once everything in database dropped

  var data = require('./data');
  var projectData = data.projects;
  var skillData = data.skills;
  var interestData = data.interests;

  console.log("Seeding projects collection...");
  projectData.forEach(function(data) {
    var project = new Project(data);
    project.save(function(err) {
      if(err) { console.log('Error occurred seeding database!'); }
    });
  });

  console.log("Seeding skills collection...");
  skillData.forEach(function(data) {
    var skill = new Skill(data);
    skill.save(function(err) {
      if (err) { console.log('Error occurred seeding database!'); }
    });
  });

  console.log('Seeding interests collection...');
  interestData.forEach(function(data) {
    var interest = new Interest(data);
    interest.save(function(err) {
      if (err) { console.log('Error occurred while seeding database!'); }
    });
  });

};
