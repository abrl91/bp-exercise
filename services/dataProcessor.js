import pkg from 'mnemonist';
const {Queue} = pkg;

export default class DataProcessor {

    eventCount = {};
    wordsCount = {};

    dataLast60Sec = new Queue();

    countEventType (eventType) {
        this.countInAggregatingObject(this.eventCount, eventType);
    }

     getEventTypeCount() {
        return this.eventCount;
    }

    countWords (word) {
        this.countInAggregatingObject(this.wordsCount, word);
    }

    getWordCount() {
        return this.wordsCount;
    }

    updateDataLast60Sec(word, event, timestamp)  {
        this.dataLast60Sec.enqueue({word, event, timestamp});
        setTimeout(() => {
            this.clearElementsFromMoreThan60Sec();
        }, 0);
    }

    clearElementsFromMoreThan60Sec() {
        let now = Date.now() / 1000;
        while (true) {
            const lastElm = this.dataLast60Sec.peek();
            if (now - lastElm.timestamp > 60) {
                this.dataLast60Sec.dequeue();
            } else {
                break;
            }
        }
    }

    getDataCountLast60Sec() {
        let copy = Queue.from(this.dataLast60Sec);
        let wordsCount = {};
        let eventCount = {};
        copy.forEach(elm => {
            this.countInAggregatingObject(wordsCount, elm.word);
            this.countInAggregatingObject(eventCount, elm.event);
        });
        return {
            wordsCount,
            eventCount
        };
    }

    countInAggregatingObject(obj, fieldName) {
        if (!obj[fieldName]) {
            obj[fieldName] = 1;
        } else {
            obj[fieldName]++;
        }
    }
}
