console.log('test cases shoild be writtern here')

const stringCalcAddFunc = require('./stringCalc')

describe('String Calculator', ()=> {
    test('empty string will return 0', () => {
        expect(stringCalcAddFunc('')).toBe(0)
    })

    test('throw an error when negative number is passed as string',() => {
        expect(() =>stringCalcAddFunc('1,-2,-3,-4')).toThrow('Negative number is not allowed')
    })

    test('handling new line in between numbers',() => {
        expect(stringCalcAddFunc('1\n2,3\n4')).toBe(10)
    })

    test('handle new delimeters in the string',() => {
        expect(stringCalcAddFunc('//;\n1;2;3')).toBe(6)
    })

    test('returns the sum of number for a single number string', () => {
        expect(stringCalcAddFunc('5')).toBe(5);
    });

    test('returns the sum of two numbers passed in string and separated by a commas', () => {
        expect(stringCalcAddFunc('1,2')).toBe(3);
    });

    test('returns the sum of multiple numbers passed in string and separated by a commas', () => {
        expect(stringCalcAddFunc('1,2,3')).toBe(6);
    });

})
console.log('empty test cases is passed')