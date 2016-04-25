const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const mongoose = require('mongoose');
const request = chai.request;
const Pf = require(__dirname + '/../model/pf');
const port = process.env.PORT = 1234;
process.env.MONGO_URI = 'mongodb://localhost/pf_test_db';
require(__dirname + '/../lib/server');
const route = require(__dirname + '/../routes/PF_router');

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
  // it('should accept a name', (done) => {
  //   request('localhost:' + port)
  //   .get('/api/pf')
  //   .end((err, res) => {
  //     expect(err).to.eql(null);
  //     expect(res.text).to.eql('Hello, maverick!\n');
  //     done();
  //   });
  // });
  it('should do a POST method', (done) => {
    after((done) => {
      mongoose.connection.db.dropDatabase(() => {
        done();
      });
    });
    request('localhost:' + port)
      .post('/api/put')
      .send({
        name: 'Ranger Rick',
        instrument: 'Racoon',
        actor: 'mustache-filtered-microbrews'
      })
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(route.name).to.eql('Ranger Rick');
        // expect(res.body.instrument).to.eql('Racoon');
        // expect(res.body.actor).to.eql('mustache-filtered-microbrews');
        done();
      });
  });
  // it('should do a POST method', (done) => {
  //   request('localhost:' + port)
  //   .put('/put')
  //   .send('I feel the need')
  //   .end((err, res) => {
  //     expect(err).to.eql(null);
  //     expect(res.text).to.eql('I did something\n');
  //     done();
  //   });
  // });
  // it('should do a DELETE mehtod', (done) => {
  //   request('localhost:' + port)
  //   .delete('/goose')
  //   .end((err, res) => {
  //     expect(err).to.eql(null);
  //     expect(res.text).to.eql('goodbye, goose!\n');
  //     done();
  //   });
  // });
});
