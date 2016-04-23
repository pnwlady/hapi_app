'use strict'

// const Hapi = require('hapi');

module.exports = [
  //Add the route
  {
    method: 'GET',
    path: '/hello',
    handler: function(request, reply) {
      return reply('hello world\n');
    }
  },
  // add second route
  {
    method: 'GET',
    path: '/{name}',
    handler: function(request, reply) {
      reply('Hello, ' + encodeURIComponent(request.params.name) + '!\n');
    }
  },
  //put, post
  {
    method: ['PUT', 'POST'],
    path: '/put',
    handler: function(request, reply) {
      reply('I did something\n');
    }
  }
];
