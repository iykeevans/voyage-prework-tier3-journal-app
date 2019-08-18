import express from 'express';
import journals from './journals';

const router = express.Router();

router.all('/', (req, res) => {
  res.send('Welcome to the journal app')
});

router.all('/api/v1', (req, res) => {
  res.json({ status: 200, message: 'Welcome to the journal app API'})
});

router.use('/api/v1/journals', journals);

export default router;
