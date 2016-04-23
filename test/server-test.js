const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request;
const mongoose = require('mongoose');
var PF = require(__dirname + '/../model/pf.js');

var PORT = 5000;
// process.env.MONGO_URI = 'mongodb://localhost/pf_test_db';
require(__dirname + '/../lib/server');

describe('testing the GET', () => {
  it('should do a proper GET request');
  request('localhost:' + PORT)
  .get('/hello')
  .end((err, res)  => {
    expect(err).to.eql(null);
    expect(res.body).to.eql('hello world');
  })
});
