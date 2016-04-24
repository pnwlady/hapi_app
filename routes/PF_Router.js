'use strict';
const Pf = require(__dirname + '/../model/pf');

// const Hapi = require('hapi');

module.exports = [
  // Add the route
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
  // Delete
  {
    method: 'DELETE',
    path: '/{name}',
    handler: function(request, reply) {
      reply('goodbye, ' + encodeURIComponent(request.params.name) + '!\n');
    }
  },
  // API Routes
  {
    method: 'GET',
    path: '/api/pf',
    handler: function(request, reply) {
      Pf.find({}, (err, data) => {
      if (err) {
        console.log(err);
        return reply('Error on Get!');
      }

      return reply({
        statusCode: 200,
        message: 'Here are all the family members',
        data: data
        });
      });
    }
  },
  {
    method: ['PUT', 'POST'],
    path: '/api/put',
    handler: function(request, reply) {
      var newPf = new Pf(request.payload);
      newPf.save((err, data) => {
        if (err) {
          console.log(err);
          return reply('Error on Post/Put!');
        }
        reply(request.payload.name + ' added to the family!\n');
      });
    }
  },
  {
    method: 'DELETE',
    path: '/api/delete/{id}',
    handler: function(request, reply) {
      Pf.remove({ _id: request.params.id }, (err) => {
        if (err) {
          console.log(err);
          return reply('Error on delete!');
        }
        reply('Deleted!');
      });
    }
  }
];
