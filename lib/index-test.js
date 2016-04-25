'use strict'
const Hapi = require('hapi');
const mongoose = require('mongoose');
const server = new Hapi.Server();
const routes = require(__dirname + '/../routes/PF_Router');
const PF = require(__dirname + '/../model/PF');

exports.register = function (plugins, options, next) {
  mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/PF_db');

  //Create a server with a host and port

  server.connection({
    host: 'localhost',
    port: 5000
  });

  //Start server
  server.start((err) => {

    if (err) {
      throw err;
    }

    console.log('Server running at: ', server.info.uri);
  });

  // server.route(routes);

  server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
      reply('hello world\n');
    }
  });

  server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
      reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
  });

  server.route({
    method: 'POST',
    path: '/post',
    handler: function(request, reply) {
      reply('I did something\n');
    }
  });

  server.start(function () {
    console.log('Server running at:', server.info.uri);
  });

}
