import express from 'express';
const router = express.Router();

import { dp } from '../services/dataStreamer.js';

router.get('/', ((req, res) => {
    const wordsCount = dp.getWordCount();
    // res.json(wordsCount);
    res.send(wordsCount);
}));

export default router;
