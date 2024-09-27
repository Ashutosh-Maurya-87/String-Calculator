console.log('code is written here')

const addFunction = (value) => {
    if (value === '') return 0

    let arrayNum = []
    let newArray = []
    const splitStrings = value.split(',')
    splitStrings.map(num => arrayNum.push(parseInt(num)))

    let delimeters = /,|\n/
    if (value.startsWith('//')) {
        delimetersEndIndex = value.indexOf('\n')
        delimeters = value.substring(2, delimetersEndIndex)
        value = value.substring(delimetersEndIndex + 1)
        console.log('value', value)

    }
    arrayNum = value.split(delimeters)
    arrayNum.map(num => newArray.push(parseInt(num)))
    console.log('arrayNum', arrayNum, splitStrings, newArray)

    const negativeNumbers = arrayNum.filter(num => num < 0)
    if (negativeNumbers.length > 0) {
        throw new Error("Negative number is not allowed")
    }

    return newArray.reduce((acc, curr) => acc + curr, 0)
    console.log('negative', negativeNumbers)
}
console.log('empty string passes', addFunction('1,8,3'))
console.log('empty string passes', addFunction('1\n2,3'))
// console.log('empty string passes1', addFunction('1,-2,-3'))


module.exports = addFunction