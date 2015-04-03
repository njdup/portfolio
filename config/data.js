'use strict';

// Data to be inserted in the database

module.exports = {
  projects: [
    { 'title': 'SheSays',
      'tagline': 'An anonymous review platform for women in technology',
      'description': 'Initially built at DubHacks 2014 and presented at AngelHack Global Demo Day 2014. SheSays is an anonymous forum to rate and review tech companies based on women’s experiences. By focusing on these voices, we provide a service to those entering tech and use often overlooked stories to take inclusive workspaces from voluntary to essential.',
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
      'skills': ['python', 'javascript', 'node.js', 'mongodb', 'express.js', 'machine learning']
    },
    {
      'title': 'Wellness',
      'tagline': 'An application to better people\'s lives',
      'description': 'Towards the end of this past summer, I had a thought: "It would be really nice if I had a way of tracking my mood from day to day and the activities I did each day, with the end goal of identifying trends in my mood and how certain activities affect it..." That\'s where Wellness came in. While its a personal project currently on hiatus, the end goal is to create a system with which people can track their moods and learn what upsets them or uplifts them. I also plan to apply some machine learning techniques I\'ve picked up in recent courses to make suggestions on what activities seem to improve a user\'s mood when that user seems down.',
      'links': [
        {'name': 'github', 'url': 'https://github.com/njdup/wellness'}
      ],
      'skills': ['javascript', 'node.js', 'mongodb', 'express.js']
    }
  ],
  skills: [
    { 'name': 'python',
      'type': 'programming language',
      'description': 'Like a star-crossed lover, I\'ve given my heart to python and haven\'t regretted it once. It was my first programming language, and while others have since stolen me away for bits of time, I\'ve always come back to it. I guess I\'ll never be able to resist such beautiful syntax and elegant design.'
    },
    { 'name': 'javascript',
      'type': 'programming language',
      'description': 'As far as languages go, javascript is just plain fun. I keep it in my toolbelt as a sort of swiss army knife, versatile enough to be whipped out in a variety of situations and powerful enough to always get the job done.'
    },
    { 'name': 'django',
      'type': 'framework',
      'description': 'Most of my full stack web dev experience has been spent in django-land. I\'ve grown to love its power and ease, but lately have been put off by some of its bloated qualities as I\'ve shifted further towards an appreciation of lightweight applications.'
    },
    { 'name': 'node.js/express.js',
      'type': 'framework',
      'description': 'When it\'s time to get down to business and serve up a reliable, simple web application, I turn to the node.js + express.js. My experience with it is still pretty elementary, but I\'ve enjoyed it a lot in the work that I have done with it, including the development of this site.'
    },
    {
      'name': 'golang',
      'type': 'programming language',
      'description': 'Such a fun new language with one hell of a cute mascot. I\'ve been wanting to pick up Go for a while now - ever since I got a chance to learn about it from some Paypal engineers who seemed absolutely infatuated with it - and finally got around to it recently. I\'ve immediately grown to love the completeness of its standard libraries, and I find its syntax and conventions easy to work with. The more I use the language, the more I understand its allure for use on new web applications.'
    },
    {
      'name': 'mongoDB',
      'type': 'technology',
      'description': 'Mongo is my go-to datastore for personal projects. The usual allures have drawn me to it (its ease of use, the ability to throw JSON straight from the client into the database, and its schemaless design to name a few), but the more I\'ve used it, the more I\'ve realized that its approach to storing data and information just seems to be a better match with my mental model of storing information than the alternatives.'
    }
  ],
  interests: [
    {
      'name': 'Open Source',
      'description': 'I really like open source stuff. I\'m incredibly intrigued by the Open Source model of software development and the way in which it can spread knowledge, provide powerful tools accessible to all, and foster strong communities of developers united to work for a common cause. I\'ve made contributions to open source projects such as the EdX platform, and hope to continue contributing to the world of open source, both as an active developer on projects and as a creator of new open source technology.'
    },
    {
      'name': 'Graphic Novels/Manga',
      'description': 'I\'m a HUGE fan of graphic mediums of story-telling. I think my love of graphic novels and Japanese manga can be described as a downright addiciton at times. Right now, my obsession is focused on The Walking Dead and Welcome to the N.H.K. If you haven\'t read (or watched the televison/anime adapations) of either, I highly recommend that you do!'
    },
    {
      'name': 'Art',
      'description': 'Sketching was a huge passion of mine growing up, and I\'m happy to say that its a passion that has been rekindled recently. I\'ve started and completed several sketches, and hope to build an online portfolio of them soon. Stay tuned for more!'
    },
    {
      'name': 'InfoSec',
      'description': 'Description coming soon!'
    },
    {
      'name': 'Virtual Reality',
      'description': 'Description coming soon!'
    }
  ]
};
