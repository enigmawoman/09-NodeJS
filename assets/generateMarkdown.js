// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
   return `![badge](https://img.shields.io/badge/license-${license}-orange)</br>`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None" ) {
    return '\n * [License](#license) \n'
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
    
    This project is covered under the ${license} license.`;
  }
  return 'This project is not covered under a license';
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
