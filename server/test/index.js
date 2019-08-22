import chai from 'chai'
import chaiHttp from 'chai-http';

import server from '../index';
import './journals';

const { expect } = chai;
chai.use(chaiHttp);

describe('route: index', () => {
  it('should return welcome to journal app', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.be.a('string');
        expect(res.text).to.equal('Welcome to the journal app');
        done();
      });
  });

  it('should return welcome to journal app API', (done) => {
    chai
      .request(server)
      .get('/api/v1')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('Welcome to the journal app API');
        done();
      });
  });
});