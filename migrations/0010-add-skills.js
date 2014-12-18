
var mongodb = require('mongodb');
var skillsData = require('../config/data').skills

exports.up = function(db, next){
  var skills = mongodb.Collection(db, 'skills');
  skills.insert(skillsData, next);
};

exports.down = function(db, next){
  var skills = mongodb.Collection(db, 'skills');
  skills.remove(next);
};
