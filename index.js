import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

import * as stream from './services/dataStreamer.js';
stream.default('./generator-macosx-amd64');


app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
