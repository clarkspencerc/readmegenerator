// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  // else if {

  // }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  # Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [Test](#test)
6. [License](#license)
7. [Questions](#questions)

## Description 
${data.description}

## Installation 
${data.installation}

## Usage 
${data.usage}

## Contributions 
${data.contribution}

## Test
${data.test}

## License
${data.license}

## Questions
For any questions please contact me at ${data.email} or find me on github at ${data.username}

`;
}

module.exports = generateMarkdown;
