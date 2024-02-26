const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// Define questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  // {
  //   type: 'input',
  //   name: 'sectionsEntitled',
  //   message: 'Could you please list the sections entitled?',
  // },
  {
    type: 'input',
    name: 'description',
    message: 'Can you please describe your project?',
  },
  // {
  //   type: 'input',
  //   name: 'tableOfContents',
  //   message: 'Could you please list the table of contents in the order that it appears?',
  // },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install it?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use it?',

  },
  {
    type: 'list',
    name: 'license',
    message: 'What license would you like to use for this project?',
    choices: ['MIT', 'Apache 2.0', 'GPL v3', 'Other'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'If you would like to contribute please follow these steps',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can your project be tested?',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'If you have any questions you can please contact me at the email address I shall provide or visit my GitHub profile'
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Could you please enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Could you please enter your email address:',
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('README file has been created!');
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

// function call to initialize program
init();









// const fs = require("fs");
// const path = require('node:path');
// const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

// // const writeFileAsync = util.promisify(fs.writeFile);

// const promptUser = () =>
//   inquirer.prompt([

// // array of questions for user
    
//   {
//     type: 'input',
//     name: 'title',
//     message: 'What is the title of your project?',
//   },
//   {
//     type: 'input',
//     name: 'sections entitled',
//     message: 'Could you please list the sections entitled?',
//   },
//   {
//     type: 'input',
//     name: 'description',
//     message: 'Can you please describe your project?',
//   },
//   {
//     type: 'input',
//     name: 'table of content',
//     message: 'Could you please list the table of contents in the order that it appears?',
//   },
//   {
//     type: 'input',
//     name: 'installation',
//     message: 'How do you install it',
//   },
//   {
//     type: 'input',
//     name: 'usage',
//     message: 'How do you use it?',
//   },
//   {
//     type: 'list',
//     name: 'license',
//     message: 'What license would you like to use for this project?',
//     choices: ['MIT', 'Apache  2.0', 'GPL v3', 'Other'],
//   },
//   {
//     question: 'input',
//     name: 'contributing',
//     message: 'If you would like to contribute please follow these steps',
//   },
//   {
//     type: 'input',
//     name: 'tests',
//     message: 'How can your project be tested?',
//   },
//   {
//     type: 'input',
//     name: 'questions',
//     message: 'if you have any questions please follow these steps and',
//   },
//   {
//     type: 'input',
//     name: 'githubUsername',
//     message: 'Could you please enter your GitHub username:',
//   },
//   {
//     type: 'input',
//     name: 'email',
//     message: 'Could you please enter your email address:',
//   },
  
// ]);

// // function to write README file
// function writeToFile(fileName, data) {
//   return
//     // fs.writeFile(fileName, data, (err) => { //Ref Link: https://www.geeksforgeeks.org/node-js-fs-writefile-method/
//     //     if (err) throw err;
//     //     console.log('README file has been created!');
//     //   });
// }

// // function to initialize program
// function init() {
//     inquirer.prompt(questions).then((answers) => { //Ref Link: https://www.geeksforgeeks.org/node-js-fs-writefile-method/
//         const markdown = generateMarkdown(answers);
//         writeToFile('README.md', generateMarkdown);
//       });

// }

// // function call to initialize program
// init();
// promptUser()
//   .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
//   .then(() => console.log('Successfully wrote readMe file'))

// // generateMarkdown()

// // .then((answers) => writeFileAsync('', generateMarkdown(answers)))
 
  
  
  

// //function to call the generatemarkdown and answers
