
var mongodb = require('mongodb');
var projectData = require('../config/data').projects

exports.up = function(db, next){
  var projects = mongodb.Collection(db, 'projects');
  projects.insert(projectData, next);
};

exports.down = function(db, next){
  var projects = mongodb.Collection(db, 'projects');
  projects.remove({}, next);
};
