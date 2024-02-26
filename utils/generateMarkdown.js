// function to generate markdown for README
function generateMarkdown(answers) {

  // This generates license badge URL based on user's license choice
  const licenseBadgeUrl = `https://img.shields.io/badge/License-${answers.license}-blue`;

   // This would generate GitHub profile link
   const githubProfileLink = `${answers.githubUsername}`;


  // This would generate README content
  return `
# ${answers.title}

![License Badge](${licenseBadgeUrl})

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} License.

## Questions
* If you have any questions about the project, you can please contact me at ${answers.email} 
* Please feel free to also visit my [GitHub profile](${githubProfileLink}) for more information.
  `;
}

module.exports = generateMarkdown;
