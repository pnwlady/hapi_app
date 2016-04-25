'use strict';

const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const mongoose = require('mongoose');
const request = chai.request;
const Pf = require(__dirname + '/../model/pf');
const port = process.env.PORT = 1234;
process.env.MONGO_URI = 'mongodb://localhost/pf_test_db';
const Server = require(__dirname + '/../lib/server');

describe('Server Tests!', () => {
  it('should accept GET requests to /api/pf', (done) => {
    request('localhost:' + port)
      .get('/api/pf')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.include('Here are all the family members');
        done();
      });
  });
  it('should do a POST method', (done) => {
    after((done) => {
      mongoose.connection.db.dropDatabase(() => {
        done();
      });
    });
    Server.inject({
      url: '/api/put',
      method: 'POST',
      payload: {
        name: 'Ranger Rick'
      }
    }, (res) => {
      expect(res.payload).to.include('Ranger Rick');
    });
    done();
  });
  describe('routes that need to be a Patridge Family member in the DB', () => {
    beforeEach((done) => {
      var newPf = new Pf({
        name: 'testshoe'
      });
      newPf.save((err, data) => {
        if (err) return;
        this.pf = data;
        done();
      });
    });
    afterEach((done) => {
      this.pf.remove((err) => {
        if (err) return;
        done();
      });
    });
    after((done) => {
      mongoose.connection.db.dropDatabase(() => {
        done();
      });
    });
    it('should change the family member\'s name a PUT request', (done) => {
  request('localhost:' + port)
    .put('/api/put/' + this.pf._id)
    .send({
      name: 'sketchers'
    })
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.text).to.include('stays in the family for another season!');
      done();
    });
});
    it('should do a DELETE method', (done) => {
      request('localhost:' + port)
        .delete('/api/delete/' + this.pf._id)
        .end((err, res) => {
          expect(err).to.eql(null);
          expect(res.text).to.eql('You\'re outta the family!');
          done();
        });
    });
  });
});
