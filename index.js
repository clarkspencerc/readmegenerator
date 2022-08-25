// TODO: Include packages needed for this application
const inquierer = require('inquirer'); 
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown'); 
const { default: Choices } = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "title", 
        message: "Input Project Title"
    }, 
    {
        type: "input",
        name: "description",
        message: "Input Project description"
    }, 
    {
        type: "input",
        name: "installation",
        message: "How should this be installed?"
    },
    {
        type: "input",
        name: "usage",
        message: "How should this be used?"
    },
     {
        type: "input",
        name: "contribution",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "How should this be tested?"
    }, 
    {
        type: "list",
        name: "license",
        message: "Select your License type",
        choices: [
            "MIT", "Mozilla", "Eclipse", "Zlib"
        ]
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }

];


// TODO: Create a function to initialize app
function init() {
    inquierer.prompt(questions).then(data =>{
        fs.writeFileSync("README1.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
