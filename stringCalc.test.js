console.log('test cases shoild be writtern here')

const stringCalcAddFunc = require('./stringCalc')

describe('String Calculator', ()=> {
    test('empty string will return 0', () => {
        expect(stringCalcAddFunc('')).toBe(0)
    })

    test('throw an error when negative number is passed as string',() => {
        expect(() =>stringCalcAddFunc('1,-2,-3,-4')).toThrow('Negative number is not allowed')
    })
})
console.log('empty test cases is passed')