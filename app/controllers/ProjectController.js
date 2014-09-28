'use strict';

// Defines logic for working with projects

var Project = require('../models/project');

exports.listProjects = function(req, res) {
  Project.find(function(err, projects) {
    if(err) {
      res.send({'success': false, 'error': err });
    } else {
      res.send({'success': true, 'projects': projects });
    }
  });
};
