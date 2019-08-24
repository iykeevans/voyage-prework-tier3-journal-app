import users from '../models/users';
import { checkToken } from '../helpers';

export default async function (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = await checkToken(token, process.env.SECRET);
    const user = await users.findOne({ _id: decoded.id });

    if(!user) {
      res.status(401).json({
        status: 401,
        error: 'user does not exist'
      });
    } else {
      req.user = decoded;
      next();
    }
  } catch(error) {
    if (error.message.includes('split')) {
      res.status(400).json({
        status: 400,
        error: 'Please include your token in the header',
      })
    } else if (error.name === 'TokenExpiredError') {
      res.status(401).json({
        statusCode: 401,
        message: 'You have been logged out pls try log in again',
      });
    } else {
      res.status(500).json({
        statusCode: 500,
        error,
      });
    }
  }
}
