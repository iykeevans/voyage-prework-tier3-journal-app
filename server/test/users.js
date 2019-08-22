import chai from 'chai'
import chaiHttp from 'chai-http';

import server from '../index';
import Users from '../models/users';

const { expect } = chai;
chai.use(chaiHttp);

let userId;

after(async () => {
  await Users.findByIdAndRemove(userId)
});

const signup = {
  username: 'good',
  email: 'good@test.com',
  password: 'rosemary'
}

const signupv1 = {
  username: 'good',
  email: 'good123@test.com',
  password: 'rosemary'
}

const goodLogin = {
  email: 'good@test.com',
  password: 'rosemary'
};

const badLogin = {
  email: 'bad@test.com',
  password: 'rosemary'
};

const invalidLogin = {
  email: 'good@test.com',
  password: 'rosery'
}

describe('route: post signup', () => {
  it('should return user created successfully', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/signup')
      .send(signup)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.status).to.equal(201);
        expect(res.body.data).to.be.an('object');
        userId = res.body.data.id;
        expect(res.body.message).to.equal('User successfully created');
        done();
      });
  });

  it('should handle case of email does not exists', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/signup')
      .send(signup)
      .end((err, res) => {
        expect(res.status).to.equal(409);
        expect(res.body.status).to.equal(409);
        expect(res.body.error).to.equal('Email already exists');
        done();
      });
  });

  it('should handle case of username does not exists', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/signup')
      .send(signupv1)
      .end((err, res) => {
        expect(res.status).to.equal(409);
        expect(res.body.status).to.equal(409);
        expect(res.body.error).to.equal('Username already exists');
        done();
      });
  });
});

describe('route: post signin', () => {
  it('should return user created successfully', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/signin')
      .send(goodLogin)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal(200);
        expect(res.body.data).to.be.an('object');
        expect(res.body.message).to.equal('successfully logged in');
        done();
      });
  });

  it('should handle case of wrong email and password', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/signin')
      .send(badLogin)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body.status).to.equal(401);
        expect(res.body.error).to.equal('the credentials you provided are not valid');
        done();
      });
  });

  it('should handle case of wrong password', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/signin')
      .send(invalidLogin)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body.status).to.equal(401);
        expect(res.body.error).to.equal('the credentials you provided are not valid');
        done();
      });
  });
});
