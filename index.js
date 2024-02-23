const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const promptUser = () =>
  inquirer.prompt([
  {
    type: 'input',
    title: 'title',
    questions: 'What is the title of your project?',
  },
  {
    type: 'input',
    sections: 'sections entitled',
    questions: 'Are you able to list the questions entitled(Yes or No)?',
  },
  {
    type: 'input',
    description: 'description',
    questions: 'Can you please describe your project?',
  },
  {
    type: 'input',
    tableOfContents: 'table of content',
    questions: 'Could you please list the table of contents in the order that it appears?',
  },
  {
    type: 'input',
    installation: 'installation',
    questions: 'How do you install it',
  },
  {
    type: 'input',
    usage: 'usage',
    questions: 'How do you use it?',
  },
  {type: 'list',
    license: 'license',
    questions: 'What license would you like to use for this project?',
    choices: ['MIT', 'Apache  2.0', 'GPL v3', 'Other'],
  },
  {
    type: 'input',
    contributing: 'contributing',
    questions: 'If you would like to contrubute please follow these steps',
  },
  {
    type: 'input',
    tests: 'tests',
    message: 'How can your project be tested?',
  },
  {
    type: 'input',
    questions: 'questions',
    message: 'if you have any questions please follow these steps and',
  },
  
]);

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
        writeToFile('README.md', generateMarkdown);
      });

}

// function call to initialize program
init();

generateMarkdown()

//function to call the prompt code
promptUser()
inquirer.prompt()

// .then((answers) => writeFileAsync('', generateMarkdown(answers)))
 
  
  
  

//function to call the generatemarkdown and answers
