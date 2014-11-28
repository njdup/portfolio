'use strict';

// Defines interest model, stores info about my interests

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var interestSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'All interests must be given a name'
  },
  description: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Interest', interestSchema);
