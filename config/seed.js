'use strict';

// Loads data into the database

var Project = require('../app/models/project');
var mongoose = require('mongoose');


module.exports = function seedDatabase(db) {

  // Drop data currently in database
  Project.remove({}, function(err) {
    if (err) {console.log(err);};
  });

  console.log("Seeding projects collection...");
  var projectData = require('./data').projects;

  projectData.forEach(function(data) {
    var project = new Project(data);
    project.save(function(err) {
      if(err) { console.log('Error occurred seeding database!'); }
    });
  });

};
