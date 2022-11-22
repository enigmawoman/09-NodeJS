// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
   return `![badge](https://img.shields.io/badge/license${license}-orange)</br>`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
    ## License
    
    This project is written under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ${renderLicenseBadge(answers.license)}

 ## Description
 ${answers.description}

 ## Table of Contents
 * [Description](#description)

 ## Installation
 ${answers.installation}

 ## Usage
 ${answers.usage}

 ${renderLicenseSection(answers.license)}

 ## Contributing
 The following have contributed to this project:
 ${answers.contributing}

 ## Testing
${answers.tests}

## Questions
If you have any questions, reach out at [${answers.username}(https://github.com/${answers.username})</br>
Alternativlely, send your questions to ${answers.email}
`;
}

module.exports = generateMarkdown;
