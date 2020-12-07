import {exec} from 'child_process';
import DataProcessor from '../services/dataProcessor.js';


export default function (path) {
    const dp = new DataProcessor();
    const child = exec(path);
    let result = '';

    child.stdout.on('data', data => {
        result += data;
        const splitData = data.split('\n');
        splitData.forEach(row => {
            try {
                const json = JSON.parse(row);
                console.log(json);
                dp.countEventType(json['event_type']);
                dp.countWords(json['data']);
                dp.updateDataLast60Sec(json['data'], json['event_type'], json['timestamp']);
            } catch (err) {
                console.log('err, cannot read the type of data');
            }
        });
    });

    child.on('close', function () {
        console.log('done');
        console.log(result);
    });
}

