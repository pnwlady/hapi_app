'use strict';
const Pf = require(__dirname + '/../model/pf');


module.exports = [{
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
}, {
  method: 'POST',
  path: '/api/put',
  handler: function(request, reply) {
    var newPf = new Pf(request.payload);
    newPf.save((err) => {
      if (err) {
        console.log(err);
        return reply('Error on Post/Put!');
      }
      reply(request.payload.name + ' added to the family!\n');
    });
  }
}, {
  method: 'PUT',
  path: '/api/put/{pfId}',
  handler: function(request, reply) {
    console.log(request.params.pfId);
    Pf.findOne({
      '_id': request.params.pfId
    }, (err, member) => {
      if (!err) {
        console.log(member);
        member = request.payload;
        Pf.update({
          _id: request.params.pfId
        }, member, (err) => {
          if (!err) {
            reply(request.payload.name + ' stays in the family for another season!\n');
          } else {
            return reply('The contract says we can\'t change that!');
          }
        });
      } else {
        reply.status(500);
      }
    });
  }
}, {
  method: 'DELETE',
  path: '/api/delete/{id}',
  handler: function(request, reply) {
    Pf.remove({
      _id: request.params.id
    }, (err) => {
      if (err) {
        console.log(err);
        return reply('Error on delete!');
      }
      reply('You\re outta the family!');
    });
  }
}];
