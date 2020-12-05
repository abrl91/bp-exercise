import express from 'express';
const router = express.Router();

import DataProcessor from "../services/dataProcessor.js";
const dp = new DataProcessor();


router.get('/wordsCount', ((req, res) => {
    const wordsCount = dp.getWordCount();
    console.log(wordsCount, 'wordsCount');
    res.send('hi from wordsCount');
}));
router.get('/eventsCount', ((req, res) => {
    const eventCount = dp.getEventTypeCount();
    console.log(eventCount, 'eventCount');
    res.send('hi from eventCount');
}));
router.get('/last60Sec', ((req, res) => {
    const last60Sec = dp.getDataCountLast60Sec();
    console.log(last60Sec, 'last60Sec');
    res.send('hi from last60Sec');
}));

export default router;
