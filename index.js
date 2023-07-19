// Packages required.

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Array of questions for user input.

inquirer.prompt([
    {
        type: 'input',
        message: 'Project name: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Briefly describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What steps are required to complete your project? (Optional)',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide examples for its intended use.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose your license for your project.',
        name: 'license',
        choices: [
            { value: 'Apache' },   // Apache License
            { value: 'BSD3' },  // BSD3 Clause License
            { value: 'LGPL' },  // GNU LGPL
            { value: 'MIT' },  // The MIT License
            { value: 'MPL' }, // Mozilla Public License
            { value: 'None' }, // Nothing
        ]
    },
    {
        type: 'input',
        message: 'Explain how users can contribute to your project. (Optional).',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Explain how to test this project. (Optional).',
        name: 'test',
    },
    {
        type: "input",
        message: "Enter your GitHub Username: ",
        name: "username",
    },
    {
        type: "input",
        message: "Enter your E-mail: ",
        name: "email",
    }

])
    .then((data) => {
        // Function to write README file; proves successful generation.
        const filename = data.title.replace(' ', "").toLowerCase()
        fs.writeFile(`${filename}.md`, generateMarkdown(data), (err) =>
            err ? console.error(err) : console.log("Thanks! Your Professional Readme is successfully generated."))
    })



// Function to initialize application.
function init() { }

// Function call to initialize application.
init();
