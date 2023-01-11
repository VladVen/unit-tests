import {getCounterValue} from "./getCounterValue";

describe('getCounter', function () {
    test('working with empty state', () => {
        expect(getCounterValue({})).toBe(0)
    })
    test('working with filled state', () => {
        expect(getCounterValue({
            counter: {
                value: 12
            }
        })).toBe(12)
    })
});