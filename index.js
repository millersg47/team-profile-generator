const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const starterHtml = require("./src/starter_html");
const managerHtml = require("./src/manager_html");
const engineerHtml = require("./src/engineer_html");
const internHtml = require("./src/intern_html");
const closingHtml = require("./src/closing_html");

const employeeArr = [];

getTeam();

function starterQuestions(){
    const questionsArr = [
    {
        name: "fullname",
        message: "What is the employee's full name?",
        type: "input",
    }, {
        name: "id",
        message: "What is the employee's ID?",
        type: "input",
    }, {
        name: "email",
        message: "What is the employee's email address?",
        type: "input",
    }, {
        name: "role",
        message: "what is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
        type: "list",
    }];

    return inquirer
        .prompt(questionsArr)
}

function checkRole(role) {
    if(role === "Manager") {
        mngrQuestions()
            .then(addNewMngr(answers))
            .then(addAnother())
    } else if(role === "Engineer") {
        engQuestions()
        .then(addNewEng(answers))
        .then(addAnother())
    } else if(role === "Intern") {
        intQuestions()
        .then(addNewInt(answers))
        .then(addAnother())
    }
}

function addAnother() {
    const lastQuestionArr = [{
        name: "teambuilder",
        message: "Would you like to add another team member?",
        type: "confirm"
    }]
    return inquirer
        .prompt(lastQuestionArr)
        .then((confirmed) => {
            starterQuestions();
        },
        (cancelled) => {
            renderTeam();
        })
}

function mngrQuestions() {
    const mngrQuestionsArr = [{
        type: "input",
        message: "What is the office number?",
        name: "office"
    }]

    return inquirer
        .prompt(mngrQuestionsArr)
}

function engQuestions() {
    const engQuestionsArr = [{
        type: "input",
        message: "What is the engineer's github username?",
        name: "github"
    }]

    return inquirer
        .prompt(engQuestionsArr)
}


function intQuestions() {
    const intQuestionsArr = [{
        type: "input",
        message: "What is the intern's school name?",
        name: "school"
    }]

    return inquirer
        .prompt(intQuestionsArr)
}

function addNewMngr(data) {
    let name = (answers["fullname"]);
    let id = (answers["id"]);
    let email = (answers["email"]);
    let office = (answers["office"]);
    let newMngr = new Manager(name, id, email, office);
    employeeArr.push(newMngr);
    console.log(employeeArr);
}

function addNewInt (data) {
    let name = (answers["fullname"]);
    let id = (answers["id"]);
    let email = (answers["email"]);
    let school = (answers["school"]);
    let newInt = new Intern(name, id, email, school);
    employeeArr.push(newInt);
    console.log(employeeArr);
}

function addNewEng (data) {
    let name = (answers["fullname"]);
    let id = (answers["id"]);
    let email = (answers["email"]);
    let github = (answers["github"]);
    let newEng = new Engineer(name, id, email, github);
    employeeArr.push(newInt);
    console.log(employeeArr);
}

function renderTeam() {
    
}

function getTeam() {
    starterQuestions()
        .then(answers => {
            let role = (answers["role"]);
            checkRole(role);
        })

}
