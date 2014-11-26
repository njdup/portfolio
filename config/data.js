'use strict';

// Data to be inserted in the database

module.exports = {
  projects: [
    { 'title': 'SheSays',
      'tagline': 'An awesome startup',
      'description': 'My kickass startup',
      'links': [
        {'name': 'website', 'url':'https://shesays.co'}
      ],
      'skills': ['python', 'django', 'postgresql']
    },
    { 'title': 'Personal Knowledgebase',
      'tagline': 'A treasure-trove of all my worldly knowledge',
      'description': 'I\'m a strong advocate for open source software, and recently made the decision to apply the same principles to my life as a whole. The Open Source Life, as I call it, is built around the idea that all knowledge should be free and accessible. One should do all that they can to share the knowledge he or she learned through his or her experiences. To embody this philosophy, I\'ve built my own system for saving and publicly releasing all my knowledge that I think is of worth.',
      'links': [
        {'name':'github', 'url':'https://github.com/njdup/PersonalKnowledgeBase'}
      ],
      'skills': ['python', 'javascript', 'node.js', 'mongodb', 'express.js']
    },
    {
      'title': 'Wellness',
      'tagline': 'An application to better people\'s lives',
      'description': 'Work in progress',
      'links': [
        {'name': 'github', 'url': 'https://github.com/njdup/wellness'}
      ],
      'skills': ['javascript', 'node.js', 'mongodb', 'express.js']
    }
  ]
};
