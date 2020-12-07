import express from 'express';
import eventsCount from './api/api.events-count.js';
import wordsCount from './api/api.words-count.js';
import last60Sec from './api/api.last-60-sec.js';
import { dataStreamer } from './services/dataStreamer.js';

dataStreamer('./generator-macosx-amd64');

const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', (req, res) => {
    res.send(`
            <h1>Hi</h1>
            <p>To get the events count go to: 
                <a href="http://localhost:8081/events-count">events-count</a>
            </p>
            <p>To get the words count go to: 
                <a href="http://localhost:8081/words-count">words-count</a>
            </p>
            <p>To get the events and the words that came on he last 60sec go to:
                <a href="http://localhost:8081/last-60-sec">last-60-sec</a>
            </p>
        `);
});

app.use('/events-count', eventsCount);
app.use('/words-count', wordsCount);
app.use('/last-60-sec', last60Sec);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
