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
};

function writeFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Created Logo');
    });
}
async function init() {
    let svgString = '';
    let svg-file = 'logo.svg';

    const answers = await inquirer.prompt(questions);

    let user-answers = '';

    if(answers.text.length > 0 && answers.text.length < 4) {
        user-answers = answers.text;
    } else {
        console.log('logo can only be 1-3 characters');

        return;
    }
}
user-font-color = answers['text-color'];

user-shape-color = answers['shape-color'];

user-shape-type = answers['logo-shape'];

let user-shape;
if(user-shape-type === 'square') {
    user-shape = new square();
} else if(user-shape-type === 'circle') {
    user-shape = new circle();
} else if(user-shape-type === 'triangle') {
    user-shape = new triangle();
} 
user-shape.setColor(user-shape-color);

let svg


