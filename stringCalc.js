console.log('code is written here')

const addFunction = (value) => {
    if (value === '') return 0

    let arrayNum = []
    const splitStrings = value.split(',')
    splitStrings.map(num => arrayNum.push(parseInt(num)))
    console.log('arrayNum', arrayNum, splitStrings)

    const negativeNumbers = arrayNum.filter(num => num < 0)
    if (negativeNumbers.length > 0) {
        throw new Error("Negative number is not allowed")
    }

    return arrayNum.reduce((acc,curr) => acc + curr, 0)
console.log('negative', negativeNumbers)
}
console.log('empty string passes',addFunction('1,2,3'))
// console.log('empty string passes1', addFunction('1,-2,-3'))


module.exports = addFunction