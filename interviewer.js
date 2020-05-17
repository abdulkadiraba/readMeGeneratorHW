const inquirer = require("inquirer");

// sanity check for project file setup
const test = function () {
    console.log("Interviewer here");
}

// wrapping getUserInput in a Promise layer so the caller (index.js) does not try to move to
// it's next step before inquirer is done
function getUserInput() {
    return new Promise(function (resolve, reject) {
        // prompt user for input needed top complete README
        inquirer
            .prompt([
                {   //TODO: an array of prompts...
                    type: "input",
                    message: "Hi! Let's build a README.md for your project! First, what is your github username?",
                    name: "github"
                },
                {
                    type: "input",
                    message: "What is the name of the github repository of the project?",
                    name: "repo",
                },
                {
                    type: "input",
                    message: "Provide a description of what the application is used for:",
                    name: "description",
                },
                {
                    type: "input",
                    message: "Include any installation details needed:",
                    name: "installation",
                },
                {
                    type: "input",
                    message: "Include the url of the deployed application, if it applies:",
                    name: "url",
                },
                {
                    type: "input",
                    message: "Describe how to use the application:",
                    name: "usage",
                },
                {   // TODO: checklist of possible licensing badges available
                    type: "input",
                    message: "License details:",
                    name: "license",
                },
                {
                    type: "input",
                    message: "Details on contributing:",
                    name: "contributing",
                },
                {
                    type: "input",
                    message: "Testing details:",
                    name: "tests",
                },
                {
                    type: "input",
                    message: "Finally, what is your contact email address?",
                    name: "email"
                }
            ])
            .then(function (response, err) {
                if (err) {
                    return reject(`An error occurred in interview: ${err}`);
                }

                // console.log(`within interviewer, response: ${JSON.stringify(response)}`);
                resolve(response);
            });
    })
}

// make these methods available
module.exports = {
    test: test,
    getUserInput: getUserInput
};