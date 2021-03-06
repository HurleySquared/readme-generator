// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if('MIT' === license) {
     return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  };
  if('Mozilla' === license) {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  };
  if('WTFPL' === license) {
    return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
  };
};
// 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if('MIT' === license) {
    return '[License: MIT](https://opensource.org/licenses/MIT)'
 };
 if('Mozilla' === license) {
   return '[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)'
 };
 if('WTFPL' === license) {
   return '[License: WTFPL](http://www.wtfpl.net/about/)'
 };
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { 
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  - [Descriptions](#description)
  - [Installation](#usage)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  [${data.license}](${renderLicenseLink(data.license)})
  
  ## Contributions
  ${data.contributions}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions please reach out to me at:
  - ${data.username}
  - ${data.email}
`;
}

module.exports = generateMarkdown;
