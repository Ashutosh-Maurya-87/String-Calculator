console.log('test cases shoild be writtern here')

const stringCalcAddFunc = require('./stringCalc')

describe('String Calculator', ()=> {
    test('empty string will return 0', () => {
        expect(stringCalcAddFunc('')).toBe(0)
    })
})
console.log('empty test cases is passed')