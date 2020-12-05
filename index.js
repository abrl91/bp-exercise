import express from 'express';
import api from './api/api.js';

const app = express();
const PORT = process.env.PORT || 8081;

import * as stream from './services/dataStreamer.js';
stream.default('./generator-macosx-amd64');


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/wordsCount', api);
app.get('/eventsCount', api);
app.get('/last60Sec', api);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
