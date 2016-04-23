'use strict'

// const Hapi = require('hapi');

var PFRouter = module.exports = Router();

//Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: function (request, reply) {
    return reply('hello world');
  }
});

add second route
server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
    reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
  }
});

//put, post
server.route({
  method: ['PUT', 'POST'],
  path: '/put',
  handler: function (request, reply) {
    reply('I did something');
  }
});
