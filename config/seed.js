'use strict';

// Loads data into the database

var Project = require('../app/models/project');


module.exports = function seedDatabase() {

  var projectData = require('./data').projects;

  projectData.forEach(function(data) {
    var project = new Project(data);
    project.save(function(err) {
      if(err) { console.log('Error occurred seeding database!'); }
    });
  });

};
