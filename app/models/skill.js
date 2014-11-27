'use strict';

// Defines a skills model for storing info about my abilities/talents/skills

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skillSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'All skills must be given a name'
  },
  type: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Skill', skillSchema);
