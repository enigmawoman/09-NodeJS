// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./assets/generateMarkdown");

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
            { 
                name: "None",
                value: "none",
            },
            {
                name: "Apache License 2.0",
                value: "ApacheLicense2.0",
            },
            {
                name: "Creative Commons Zero v1.0 Universal",
                value:"CreativeCommonsZerov1.0Universal",
            },
            {
                name: "GNU General Public License v2.0",
                value: "GNUGeneralPublicLicensev2.0",
            },
            {
                name: "MIT License",
                value: "MITLicense",
            },
            {
                name: "Mozilla Public License 2.0",
                value: "MozillaPublicLicense2.0",
            },
        ]},

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
  
        fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!'))
      };
    

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const readMe = generateMarkdown(answers);
        writeToFile("README.md", readMe);
    });    
}

// Function call to initialize app
init();
