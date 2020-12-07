import express from 'express';
const router = express.Router();

import { dp } from '../services/dataStreamer.js';

router.get('/', ((req, res) => {
    const eventCount = dp.getEventTypeCount();
    res.send(eventCount);
}));

export default router;
