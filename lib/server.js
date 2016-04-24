'use strict';
const routes = require(__dirname + '/../routes/PF_Router');
const Hapi = require('hapi');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/pf_db');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 5000
});

// Start server
server.start((err) => {

  if (err) {
    throw err;
  }

  console.log('Server running at: ', server.info.uri);
});
server.route(routes);
