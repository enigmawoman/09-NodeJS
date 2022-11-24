// A function that returns a license badge based on which license is passed in fron the users answers
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
   return `![badge](https://img.shields.io/badge/license-${license}-orange)</br>`;
  }
  return '';
}

// A function that returns the license link for the table of contents
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license !== "None" ) {
    return '\n * [License](#license) \n'
  }
  return '';
}

// A function that returns the license section of README using the answers provided by the user
// If there is no license, returns a message to say the project is not covered under a license
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
    
    This project is covered under the ${license} license.`;
  }
  return 'This project is not covered under a license';
}

// This function generates markdown for README and inputs the data taken from the questions the user answers to populate the file
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ${renderLicenseBadge(answers.license)}

 ## Description

 ${answers.description}

 ## Table of Contents
 
 * [Description](#description)
 * [Installation](#installation)
 * [Usage](#usage)
 ${renderLicenseLink(answers.license)}
 * [Contributing](#contributing)
 * [Testing](#testing)
 * [Questions](#questions)

 ## Installation

 ${answers.installation}

 ## Usage

 ${answers.usage}

 ## License
 ${renderLicenseSection(answers.license)}

 ## Contributing

 The following people have contributed to this project: \n
 ${answers.contributing}

 ## Testing

${answers.tests}

## Questions

If you have any questions, reach out at [${answers.username}(https://github.com/${answers.username})</br>
Alternativlely, send your questions to ${answers.email}
`;
}

module.exports = generateMarkdown;
