const fs = require("fs");

// sanity check for project file setup
const test = function () {
    console.log("Generator here");
}

function generateReadme(userInput, profileInfo) {
    // populate readme template with user-specific response
    const readme = populateTemplate(userInput, profileInfo);

    // save the result in a readme file with github repository in the filename
    fs.writeFile(`README_${userInput.repo}.md`, readme, function (err) {
        if (err) {
            return console.log(err);
        }
        return console.log("README written!");
    });
}

function populateTemplate(userInput, profileInfo) {
    const highlighter = "```";

    // only show deployed url if one exists, otherwise show empty string
    let deployedUrl = userInput.url.length > 0 ? `[Deployed application](${userInput.url})`: "";
    
    const template =
    `# ${userInput.repo}
    
<img src="https://img.shields.io/badge/Look-I made this!-purple" alt="I Made This badge"></img>
<img src="https://img.shields.io/github/package-json/v/${userInput.github}/${userInput.repo}" alt="package-json">
<img src="https://img.shields.io/github/last-commit/${userInput.github}/${userInput.repo}" alt="last commit">
<img src="https://img.shields.io/github/issues-raw/${userInput.github}/${userInput.repo}" alt="issues">
<img src="https://img.shields.io/github/followers/${userInput.github}?label=Follow" alt="followers">
## Project Description
${highlighter}
${userInput.description}
${highlighter}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
### Installation
${highlighter}
${userInput.installation}
${highlighter}
${deployedUrl}
### Usage
${highlighter}
${userInput.usage}
${highlighter}
### License
${highlighter}
${userInput.license}
${highlighter}
### Contributing
${highlighter}
${userInput.contributing}
${highlighter}
### Tests
${highlighter}
${userInput.tests}
${highlighter}
### Questions
${highlighter}
For questions or comments, please contact ${userInput.github}:
${userInput.email}
${highlighter}
<img src="${profileInfo.avatar_url}" alt="profile pic" width="200px" height="200px">`;

    return template;
}

// make these methods available
module.exports = {
    test: test,
    generateReadme: generateReadme
};