import express from 'express';
const router = express.Router();

import { dp } from '../services/dataStreamer.js';

router.get('/', ((req, res) => {
    const last60Sec = dp.getDataCountLast60Sec();
    // res.json(last60Sec);
    res.send(last60Sec);
}));

export default router;
