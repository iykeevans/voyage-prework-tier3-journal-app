import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';

export const hashPassword = (password) => hashSync(password, genSaltSync(10));

export const comparePasswords = (inputPassword, password) => {
  return compareSync(inputPassword, password);
}

export const generateToken = (id) => {
  return sign({id}, process.env.SECRET, { expiresIn: '1h'});
}

export const checkToken = (token, secret) => {
  return verify(token, secret);
}
