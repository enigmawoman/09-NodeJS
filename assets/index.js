// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require("fs");
const { title } = require("process");
const { generate } = require("rxjs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the title for your README document",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of your project",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the steps required to install your project",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples for use",
    },
    {
        type: "list",
        name: "license",
        message: "Please choose the approprite license for this project",
        choices: [
            "None",
            "Apache License 2.0",
            "Creative Commons Zero v1.0 Universal",
            "GNU General Public License v2.0",
            "MIT License",
            "Mozilla Public License 2.0"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who has contributed to this project?",
    },
    {
        type: "input",
        name: "tests",
        message: "Are there tests included for this project?",
    },
    {
        type: "input",
        name: "username",
        message: "Please provide your github username",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email address",
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
  .prompt(questions)
  
    .then((answers) => {
        const readMe = generateMarkdown(answers);
        fs.writeFile('README.md', readMe, (err) =>
    err ? console.log(err) : console.log('Success!'))
      });
    
}

// TODO: Create a function to initialize app
function init() {
    writeToFile()
}

// Function call to initialize app
init();
