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
  description: {
    type: String,
    default: ''
  },
  start: {
    type: Date,
    default: Date.now,
    required: 'Start date must be provided.'
  },
  end: {
    type: Date,
    default: null
  },
  links: {
    type: [String],
    default: null
  }
});

module.exports = mongoose.model('Project', projectSchema);
