import express from 'express';
const router = express.Router();

import DataProcessor from "../services/dataProcessor.js";
const dp = new DataProcessor();

router.get('/', ((req, res) => {
    const eventCount = dp.getEventTypeCount();
    // res.json(eventCount);
    res.send(eventCount);
}));

export default router;
