import client from './client';

export function signup(data) {
  return client.post('/auth/signup', data);
}

export function signin(data) {
  return client.post('/auth/signin', data)
}
