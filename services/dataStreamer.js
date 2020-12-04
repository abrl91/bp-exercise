import {exec} from 'child_process';
import DataProcessor from '../services/dataProcessor.js';


export default function (path) {
    let result = '';

    const child = exec(path);

    child.stdout.on('data', data => {
        result += data;
        let split = data.split('\n');
        split.forEach(row => {
            try {
                console.log(row);
                let json = JSON.parse(row);
                console.log(json);
                const dp = new DataProcessor();
                dp.countEventType(json['event_type']);
                dp.countWords(json['data']);
                dp.updateDataLast60Sec(json['data'], json['timestamp']);
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

