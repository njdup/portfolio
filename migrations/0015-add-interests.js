
var mongodb = require('mongodb');
var interestsData = require('../config/data').interests

exports.up = function(db, next){
  var interests = mongodb.Collection(db, 'interests');
  interests.insert(interestsData, next);
};

exports.down = function(db, next){
  var interests = mongodb.Collection(db, 'interests');
  interests.remove(next);
};
