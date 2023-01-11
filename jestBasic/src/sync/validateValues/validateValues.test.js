const validateValues = require('./validateValues');


describe('Validate Values', () => {
    test('Average Value', () => {
        expect(validateValues(50)).toBe(true);
    })
    test('corner 1', () => {
        expect(validateValues(0)).toBe(true);
    })
    test('corner 2', () => {
        expect(validateValues(100)).toBe(true);
    })
    test('falsy corner 1', () => {
        expect(validateValues(-1)).toBeFalsy();
    })
    test('falsy corner 2', () => {
        expect(validateValues(101)).toBeFalsy();
    })
})
