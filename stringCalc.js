console.log('code is written here')

const addFunction = (value) => {
    if(value === '') return 0

    const splitStrings = value.split()
    const arrayNum = splitStrings.map(num => parseInt(num))
    console.log('arrayNum', arrayNum)

    const negativeNumbers = arrayNum.filter(num => num < 0)
    console.log('negative', negativeNumbers)
}
console.log('empty string passes',addFunction('1,2,3'))
console.log('empty string passes1',addFunction('1,-2,-3'))


module.exports = addFunction