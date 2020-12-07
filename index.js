import express from 'express';
import eventsCount from './api/api.events-count.js';
import wordsCount from './api/api.words-count.js';
import last60Sec from './api/api.last-60-sec.js';
import { dataStreamer } from './services/dataStreamer.js';

dataStreamer('./generator-macosx-amd64');

const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/eventsCount', eventsCount);
app.use('/wordsCount', wordsCount);
app.use('/last60Sec', last60Sec);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
