

const generateSvg = (shapeInput, textInput) => `<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='300' height='200'>${shapeInput}${textInput}</svg>`
module.exports = generateSvg;