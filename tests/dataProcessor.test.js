import DataProcessor from "../services/dataProcessor";
import { describe, it } from '@jest/globals';

const mockData = [
    { event_type:  'baz', data: 'lorem', timestamp: 1607170526 },
    { event_type:  'baz', data: 'sit',   timestamp: 1607170526 },
    { event_type:  'baz', data: 'lorem', timestamp: 1607170526 },
    { event_type:  'foo', data: 'lorem', timestamp: 1607170526 },
]

describe("bazCount", () => {
    const dp = new DataProcessor();

    it('should return 3',  () => {
        mockData.forEach(item => {
            dp.countEventType(item['event_type'])
        });
        const testEventTypeCount = dp.getEventTypeCount();
        expect(testEventTypeCount['baz']).toBe(3);
    });
});

describe("fooCount", () => {
    const dp = new DataProcessor();

    it('should return 1',  () => {
        mockData.forEach(item => {
            dp.countEventType(item['event_type'])
        });
        const testEventTypeCount = dp.getEventTypeCount();
        expect(testEventTypeCount['foo']).toBe(1);
    });
});

describe("loremWordCount", () => {
    const dp = new DataProcessor();

    it('should return 3',  () => {
        mockData.forEach(item => {
            dp.countWords(item['data'])
        });
        const testWordsTypeCount = dp.getWordCount();
        expect(testWordsTypeCount['lorem']).toBe(3);
    });
});

describe("sitWordCount", () => {
    const dp = new DataProcessor();

    it('should return 1',  () => {
        mockData.forEach(item => {
            dp.countWords(item['data'])
        });
        const testWordsTypeCount = dp.getWordCount();
        expect(testWordsTypeCount['sit']).toBe(1);
    });
});
