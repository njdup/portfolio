'use strict';

// Quick script to seed the database

var mongoose = require('mongoose');
var config = require('./config/config');
var db = mongoose.connect(config.db);

require('./config/seed')(db);
mongoose.disconnect();
