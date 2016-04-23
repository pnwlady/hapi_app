const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request;

require(__dirname + '/../lib/server');

describe('Server Tests!', () => {
  it('should accept GET requests to /hello', (done) => {
    request('localhost:5000')
    .get('/hello')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('hello world\n')
      done();
    });
  });

  it('should accept a name', (done) => {
    request('localhost:5000')
    .get('/maverick')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.text).to.eql('Hello, maverick!\n');
      done();
    });
  });

  it('should do a PUT method', (done) => {
    request('localhost:5000')
    .put('/put')
    .send('You can be my wingman anytime')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.text).to.eql('I did something\n');
      done();
    })
  });
  it('should do a POST method', (done) => {
    request('localhost:5000')
    .put('/put')
    .send('I feel the need')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.text).to.eql('I did something\n');
      done();
    })
  });
});
