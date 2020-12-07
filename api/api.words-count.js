import express from 'express';
const router = express.Router();

import DataProcessor from "../services/dataProcessor.js";
const dp = new DataProcessor();


router.get('/', ((req, res) => {
    const wordsCount = dp.getWordCount();
    // res.json(wordsCount);
    res.send(wordsCount);
}));

export default router;
