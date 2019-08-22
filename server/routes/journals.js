import express from 'express';

import { addJournal, getJournal, getJournals, deleteJournal, updateJournal } from '../controllers/journals';
import verifyToken from '../middlewares';

const router = express.Router()

router.get('/', getJournals);
router.get('/:id', getJournal);
router.post('/', addJournal);
router.patch('/:id', updateJournal);
router.delete('/:id', deleteJournal);

export default router;
