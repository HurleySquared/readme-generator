// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
inquirer
  .prompt([
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Description of your project',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Are there any installation procedures?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'How do you use this project?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What licenses are associated with your project?',
    name: 'license',
  },
  {
    type: 'input',
    message: 'Are there any contributions to this project?',
    name: 'contributions',
  },
  {
    type: 'input',
    message: 'What tests are for this project?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'Link to your GitHub',
    name: 'link',
  },
])
.then((data) => {
  fs.writeFile('ProjectREADME.md', generateReadMe(data), (error) => {
    if (error) return console.log(error);
  })
});

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
