'use strict';

module.exports = {
  db: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/portfolio-dev'
};
