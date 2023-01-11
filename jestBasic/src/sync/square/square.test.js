const square = require('./square');


describe('square test', () => {
    beforeEach(() => {

    })
    beforeAll(() => {

    })
    test('correct value', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).not.toBeUndefined();
    })
    test('math pow calling', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(2)
        expect(spyMathPow).toBeCalledTimes(1);
    })
    test('math pow not called', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(1)
        expect(spyMathPow).not.toBeCalled();
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
    afterAll(() => {

    })
})
