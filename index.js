//Dependencies//
const inquirer =("inquirer");
const fs = require("fs");
const util = requirer("util");
const generateMarkdown = requirer("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);


//array of questions for user//
const questions = [
    {
        type: "input",
        name: "title",
        message: "title of assignment?"
    },
    {
        type: "input",
        name: "description",
        message:"Please describe your assignment.",
    },
    {
        type: "input",
        name: "installation",
        message:"Please describe the installation process for your assignment.",
    },
    {
        type: "input",
        name: "usage",
        message:"Please describe the contributions guidelines needed for your assignment.",
    },
    {
        type: "list",
        name: "license",
        message:"Please choose a license for the assignment.",
        choices: ["AGPL", "Apache", "GNU", "LGPL", "MIT", "Unlicensed", "None"]
    },
    {
        type: "input",
        name: "testing",
        message:"Please enter the testing instructions for the assignment",
    },
    {
        type: "input",
        name: "username",
        message:"Please enter your github user name.",
    },
    {
        type: "input",
        name: "email",
        message:"Please enter your email address.",
    },















];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
