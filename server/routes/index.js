import express from 'express';
import journals from './journals';
import users from './users';

const router = express.Router();

router.all('/api/v1', (req, res) => {
  res.json({ status: 200, message: 'Welcome to the journal app API' });
});

router.use('/api/v1/journals', journals);
router.use('/api/v1/auth', users);

export default router;
