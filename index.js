const inquirer = require('inquirer');
const fs = require('fs');
const {circle, square, triangle} = require('./library/shapes');

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for your logo',
    },
    {
        type: 'input',
        name: 'text-color',
        messgae: 'What color would you like the text of the logo?',
    },
    {
        type: 'list',
        name: 'logo-shape',
        message: 'What shape would you like the logo?',
        choices: ['square', 'circle', 'triangle'],
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'What color would you like the shape of your logo?',
    },
]); 

class svg {
    constructor() {
        this.textInput = ''
        this.shapeInput = ''
    } render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeInput}${this.textInput}</svg>`
    } setTextInput(text,color) {
        this.textInput = `<text x = '150' y = '125' font-size = '60' text-anchor = 'middle' fill = '${color}'>${text}</text>`
    } setShapeInput(shape) {
        this.shapeInput = shape.render()
    }
}