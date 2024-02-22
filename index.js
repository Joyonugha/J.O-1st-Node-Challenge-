const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'location',
    message: 'Where are you from?',
  },
  {
    type: 'input',
    name: 'hobby',
    message: 'What is your favorite hobby?',
  },
  {
    type: 'input',
    name: 'food',
    message: 'What is your favorite food?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
  },
  {
    type: 'input',
    name: 'location',
    message: 'Where do you live?',
  },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => { //Ref Link: https://www.geeksforgeeks.org/node-js-fs-writefile-method/
        if (err) throw err;
        console.log('README file has been created!');
      });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => { //Ref Link: https://www.geeksforgeeks.org/node-js-fs-writefile-method/
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
      });

}

// function call to initialize program
init();
