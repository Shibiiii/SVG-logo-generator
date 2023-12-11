const inquirer = require('inquirer');
const fs = require('fs');

inquirer.createPromptModule([
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
]).then((data) => {
    
});