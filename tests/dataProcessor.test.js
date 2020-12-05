import DataProcessor from "../services/dataProcessor";
import { describe, it } from '@jest/globals';

const dp = new DataProcessor();

const mockData = [
    { event_type: 'baz', data: 'lorem', timestamp: 1607170526 },
    { event_type: 'baz', data: 'sit', timestamp: 1607170526 },
    { event_type: 'baz', data: 'lorem', timestamp: 1607170526 },
    { event_type: 'foo', data: 'lorem', timestamp: 1607170526 },
]

describe("eventsTypeCount", () => {
    it('should return 3',  () => {
        dp.countEventType(mockData);
        const testEventTypeCount = dp.getEventTypeCount();
        console.log(testEventTypeCount);
        expect(testEventTypeCount['baz']).toEqual(3);
    });
});

describe("eventsTypeCount", () => {
    it('should return 1',  () => {
        dp.countEventType(mockData);
        const testEventTypeCount = dp.getEventTypeCount();
        // console.log(testEventTypeCount);
        expect(testEventTypeCount['foo']).toEqual(1);
    });
});

describe("wordsTypeCount", () => {
    it('should return 3',  () => {
        dp.countEventType(mockData);
        const testWordsTypeCount = dp.getEventTypeCount();
        // console.log(testWordsTypeCount);
        expect(testWordsTypeCount['lorem']).toEqual(3);
    });
});

describe("wordsTypeCount", () => {
    it('should return 1',  () => {
        dp.countEventType(mockData);
        const testWordsTypeCount = dp.getEventTypeCount();
        // console.log(testWordsTypeCount);
        expect(testWordsTypeCount['sit']).toEqual(1);
    });
});
