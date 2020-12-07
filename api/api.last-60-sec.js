import express from 'express';
const router = express.Router();

import DataProcessor from "../services/dataProcessor.js";
const dp = new DataProcessor();

router.get('/', ((req, res) => {
    const last60Sec = dp.getDataCountLast60Sec();
    // res.json(last60Sec);
    res.send(last60Sec);
}));

export default router;
