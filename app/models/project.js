'use strict';

// Defines projects model for storing information about
// projects, both current and past, I've done

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  title: {
    type: String,
    default: '',
    required: 'Project title must be provided'
  },
  tagline: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  links: {
    type: [String],
    default: null
  },
  skills: {
    type: [String],
    default: null
  }
});

module.exports = mongoose.model('Project', projectSchema);
