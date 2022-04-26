const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function starterQuestions(){
    const questionsArr = [{
        type: "input",
        message: "What is the employee's full name?",
        name: "fullname"
    }, {
        type: "input",
        message: "What is the employee's ID?",
        name: "id"
    }, {
        type: "input",
        message: "What is the employee's email address?",
        name: "email"
    }, {
        type: "list",
        message: "what is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role"
    }];

    inquirer
        .prompt(questionsArr)
}

function mangrQuestions() {
    const mngrQuestionsArr = [{
        type: "input",
        message: "What is the office number?",
        name: "office"
    }]

    inquirer
        .prompt(mngrQuestionsArr)
        .then()
}

function engQuestions() {
    const engQuestionsArr = [{
        type: "input",
        message: "What is the engineer's github username?",
        name: "github"
    }]

    inquirer
        .prompt(engQuestionsArr)
        .then()
}


function intQuestions() {
    const intQuestionsArr = [{
        type: "input",
        message: "What is the intern's school name?",
        name: "school"
    }]

    inquirer
        .prompt(intQuestionsArr)
        .then()
}

function handleResponses() {
    let newEmployee;


}

function getTeam() {
    const employeeArr = [];

    starterQuestions()
        .then(function() {
            if(role === "Manager") {
                mangrQuestions()
                    .then(function(){
                        let newMngr = new Manager(fullname, id, email, role, office);
                        employeeArr.push(newMngr);
                        console.log(employeeArr);
                    })
            } else if(role === "Engineer") {
                engQuestions()
                .then(function(){
                    let newEng = new Engineer(fullname, id, email, role, github);
                    employeeArr.push(newEng);
                    console.log(employeeArr);
                })
            } else if(role === "Intern") {
                intQuestions()
                .then(function(){
                    let newInt = new Intern(fullname, id, email, role, school);
                    employeeArr.push(newInt);
                    console.log(employeeArr);
                })
            }
        })

}

getTeam();

