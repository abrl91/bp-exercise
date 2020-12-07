import {exec} from 'child_process';
import DataProcessor from '../services/dataProcessor.js';

export const dp = new DataProcessor();

export function dataStreamer(path) {
    const child = exec(path);
    let result = '';

    child.stdout.on('data', data => {
        result += data;
        const splitData = data.split('\n');
        splitData.forEach(row => {
            try {
                const jsonData = JSON.parse(row);
                console.log(jsonData);
                dp.countEventType(jsonData['event_type']);
                dp.countWords(jsonData['data']);
                dp.updateDataLast60Sec(jsonData['data'], jsonData['event_type'], jsonData['timestamp']);
            } catch (err) {
                console.log('err, cannot read the type of data');
            }
        });
    });
}
