import Users from '../models/users';
import { hashPassword, comparePasswords, generateToken } from '../helpers';

export async function createUser(req, res) {
  try {
    const { username, email, password } = req.body;
    const dbEmail = await Users.findOne({ email });
    const dbUser = await Users.findOne({ username });

    if (dbEmail) {
      res.status(409).json({
        status: 409,
        error: 'Email already exists'
      });
    } else if (dbUser) {
      res.status(409).json({
        status: 409,
        error: 'Username already exists'
      });
    } else {
      const newPassword = hashPassword(password);
      const user = new Users({ username, password: newPassword, email });
  
      const data = await user.save();
      const token = await generateToken(data._id, username);
  
      res.status(201).json({
        status: 201,
        message: 'User successfully created',
        token,
        data: {
          id: data._id,
          username: data.username,
          email: data.email
        }
      });
    }
  } 
  catch(error) {
    console.log('==========>', error);
    res.status(500).json({
      status: 500,
      error
    })
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if(!user) {
      res.status(401).json({
        status: 401,
        error: 'the credentials you provided are not valid',
      })
    } else if(!comparePasswords(password, user.password)) {
      res.status(401).json({
        status: 401,
        error: 'the credentials you provided are not valid',
      })
    } else {
      const { _id: id } = user;
      const token = await generateToken(id, user.username);

      res.status(200).json({
        status: 200,
        message: 'successfully logged in',
        token,
        data: {
          id,
          username: user.username,
          email: user.email
        }
      })
    }
  } 
  catch(error) {
    console.log('=========>', error);
    res.status(500).json({
      status: 500,
      error
    });
  }
}
