// git add . && git commit -m "msg" && git push

// Importing necessary libraries and modules for the application
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Importing custom Employee classes for creating team members
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Defining the output directory and file path for the generated HTML
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Importing the render function for generating HTML from employee data
const render = require("./src/page-template.js");

// Initializing an empty array to store team member objects
const team = [];

// Function to gather information about the development team members and render the HTML file

// The application currently prompts the user for manager, engineer, and intern details

// Function to add a manager to the team
async function addManager() { //async lets use await
    // Prompting the user for manager details using inquirer
    const managerAnswers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ]);
  
    // Creating a Manager object with the provided details and adding it to the team array
    const manager = new Manager(
      managerAnswers.name,
      managerAnswers.id,
      managerAnswers.email,
      managerAnswers.officeNumber
    );
    team.push(manager);
  
    // After adding a manager, prompt the user again
    await promptUser();
  }
  
  // Function to add an engineer to the team
  async function addEngineer() {
    // Prompting the user for engineer details using inquirer
    const engineerAnswers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      },
    ]);
  
    // Creating an Engineer object with the provided details and adding it to the team array
    const engineer = new Engineer(
      engineerAnswers.name,
      engineerAnswers.id,
      engineerAnswers.email,
      engineerAnswers.github
    );
    team.push(engineer);
  
    // After adding an engineer, prompt the user again
    await promptUser();
  }
  
  // Function to add an intern to the team
  async function addIntern() {
    // Prompting the user for intern details using inquirer
    const internAnswers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
      },
    ]);
  
    // Creating an Intern object with the provided details and adding it to the team array
    const intern = new Intern(
      internAnswers.name,
      internAnswers.id,
      internAnswers.email,
      internAnswers.school
    );
    team.push(intern);
  
    // After adding an intern, prompt the user again
    await promptUser();
  }
  
  // Function to prompt the user with a menu for adding an engineer, adding an intern, or finishing the team building
  async function promptUser() {
    const userChoice = await inquirer.prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: ["Add an engineer", "Add an intern", "Finish building the team"],
      },
    ]);
  
    // Depending on the user's choice, call the corresponding function or generate the HTML
    if (userChoice.menu === "Add an engineer") {
      await addEngineer();
    } else if (userChoice.menu === "Add an intern") {
      await addIntern();
    } else if (userChoice.menu === "Finish building the team") {
      generateHTML(); // Call the function to generate HTML
    }
  }
  
  // Starting the application by prompting the user to enter the team manager's details
  addManager();
  
  // Function to generate HTML using the render function and write it to a file
  function generateHTML() {
    const html = render(team); // Generating HTML from the team data
    fs.writeFileSync(outputPath, html); // Writing HTML to a file named team.html in the output folder
    console.log("HTML generated successfully!");