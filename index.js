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
        message:"PLease enter the usage information for the assignment.",
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

// function to ask the user questions//
function promptUser() {
    return inquirer.prompt([questions]);
}

// function to initialize program//
async function init() {
    try {
        const data = await promptUser();
        const md = generateMarkdown(data);

    }
    catch (err) {
        console.log(err);
    }     
}

// function call to initialize program//
init();
