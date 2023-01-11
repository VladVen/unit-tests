const mapArrToString = require('./mapArrToString');


describe('Array Map', () => {
    test('Correct arr', () => {
        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    test('incorrect arr', () => {
        expect(mapArrToString([1, 2, 3, null, undefined, true, 'weqweq'])).toEqual(['1', '2', '3']);
    })
    test('empty arr', () => {
        expect(mapArrToString([])).toEqual([]);
    })
    test('not', () => {
        expect(mapArrToString([])).not.toEqual(['1']);
    })
})
