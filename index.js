// below are the packages required for this application

const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./assets/generateMarkdown");

// This is an array containing the questions that when the code and inquirer runs, will propmt the user to answer the questions
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
                value: "None",
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


// file name and data passed in from the init function
function writeToFile(fileName, data) {
  // this will write the file using the fs package
        fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!'))
      };
    

//The init function runs the inquirer package and prompts the questions array to be displayed one question at a time to the user
function init() {
    inquirer
    .prompt(questions)
    // the answers are then passed into the generateMarkdown function in the generateMarkdown.js file to add the answers to the document structure
    .then((answers) => {
        const readMe = generateMarkdown(answers);
        // the write to file function is called, with the README.md file name and location stipulated and the data from const readMe passed into the fucntion 
        writeToFile("./assets/README.md", readMe);
    });    
}

// Function call to initialize app
init();
