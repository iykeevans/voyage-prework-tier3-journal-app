import chai from 'chai'
import chaiHttp from 'chai-http';

import server from '../index';
import Journals from '../models/journals'

const { expect } = chai;
chai.use(chaiHttp);

let data;

before(async () => {
  const mockData = {
    title: 'My first journal',
    body: 'just the regular lorem ipsum stuff',
  }

  const journal = new Journals(mockData);
  const response = await journal.save();
  data = response;
})

describe('route: get journals', () => {
  it('should return all journals', (done) => {
    chai
      .request(server)
      .get('/api/v1/journals')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal(200);
        expect(res.body.data).to.be.an('array');
        done();
      });
  });
});

describe('route: get journal', () => {
  it('should return a journal', (done) => {
    chai
      .request(server)
      .get(`/api/v1/journals/${data._id}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal(200);
        expect(res.body.data).to.be.an('object');
        done();
      });
  });
});

describe('route: post journal', () => {
  it('should add a journal', (done) => {
    const journal = {
      title: 'My second journal',
      body: 'Still the regular lorem ipsum stuff'
    }

    chai
      .request(server)
      .post('/api/v1/journals')
      .send(journal)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.status).to.equal(201);
        expect(res.body.data).to.be.an('object');
        done();
      });
  });
});

describe('route: patch journal', () => {
  it('should update a journal', (done) => {
    const update = {
      body: 'sorry the lorem ipsum stuff is so outdated'
    }

    chai
      .request(server)
      .patch(`/api/v1/journals/${data._id}`)
      .send(update)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal(200);
        expect(res.body.data).to.be.an('object');
        done();
      });
  });
});

describe('route: delete journal', () => {
  it('should delete a journal', (done) => {
    chai
      .request(server)
      .delete(`/api/v1/journals/${data._id}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal(200);
        expect(res.body.data).to.be.an('object');
        done();
      });
  });
});
