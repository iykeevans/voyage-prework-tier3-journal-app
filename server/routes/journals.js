import express from 'express';

import { addJournal, getJournal, getJournals, deleteJournal, updateJournal } from '../controllers/journals';
import verifyToken from '../middlewares';

const router = express.Router()

router.get('/', getJournals);
router.get('/:id', getJournal);
router.post('/', verifyToken, addJournal);
router.patch('/:id', verifyToken, updateJournal);
router.delete('/:id', verifyToken, deleteJournal);

export default router;
