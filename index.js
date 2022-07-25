// The required and  unchangeable variables will use 'const'
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');
const cardGen = required('./src/cardTemplates.js');

// need to store employees in an array
const allEmployees = [];
const allIDs = [];


// Creating the first question function
 const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: `Enter Manager's Name:`,
        //default name Bond
        validate: (name) => {
            if (answer !== '') {
                return true;
            }
            return 'Please enter at least three characters';
    },

},

{

    type: 'input',
    name: 'id',
    message: `Enter Manager's ID Number please`,
    // default: '007',
    validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
            return true;
        }
        return 'Please enter a valid ID number greater than 000.0';
    },

},

{

    type: 'input',
    name: 'email',
    message: `Enter Manager's email address:`,
// will use for manager email 'Bond-007@gmail.com',
    validate: (answer) => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass) {
            return true;
        }
        return 'Please enter a valid email address.';
    },
},

{

    type: 'input',
    name: 'office No.',
    message: `Enter Manager's office number:`,
// default office number 714-007-0007'

    validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
            return true;
        }
        return 'Please enter a valid office number greater than 000.0';
    },

},
]
      
// The engineer  Questions
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: `Enter Engineer's Name`,
        // default name  Kiira 
        validate: (answer) => {
            if (answer !== '') {
                return true;
            }
            return 'Please enter at least one character.';
        },
    },
    {
        type: 'input',
        name: 'id',
        message: `Enter the Engineer's ID Number`,
        // default: '007.1',
        validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
                if (allIDs.includes(answer)) {
                    return 'This ID is already taken. Please enter a different number.';
                } else {
                    return true;
                }
            }
            return 'Please enter a positive number greater than zero.';
        },
    },

    {
        type: 'input',
        name: 'email',
        message: `Enter the Engineer's Email Address`,
        // default: 'lunakiira0911@gmail.com,
        validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
                return true;
            }
            return 'Please enter a valid email address.';
        },
    },

    {
        type: 'input',
        name: 'github',
        message: `Enter Engineer's Github Username`,
        // default will be my own name
        validate: (answer) => {
            if (answer !== '') {
                return true;
            }
            return 'Please enter at least three character.';
        },
    },
]

// Intern Questions
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: `Enter Intern's Name`,
        // going to default here James,
        validate: (answer) => {
            if (answer !== '') {
                return true;
            }
            return 'Please enter at least three character.';
        },
    },
    {
        type: 'input',
        name: 'id',
        message: `Enter the Intern's ID Number`,
        //going to start with default number 007.2 ' james bond lol '
        validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
                if (allIDs.includes(answer)) {
                    return 'This ID is already taken. Please enter a different number.';
                } else {
                    return true;
                }
            }
            return 'Please enter a positive number greater than zero.';
        },

    },
    {
        type: 'input',
        name: 'email',
        message: `Enter the Intern's Email Address`,
        // using email address jamesbond007@bond.com
        validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
                return true;
            }
            return 'Please enter a valid email address.';
        },

    },
    {
        type: 'input',
        name: 'school',
        message: `Enter Intern's School Name`,
       // for school will use the Irvine University
        validate: (answer) => {
            if (answer !== '') {
                return true;
            }
            return 'Please enter at least three character.';
        },
    },
]



// Create Manager function
function createManager() {
    inquirer
        .prompt(managerQuestions)
        .then(data => {
        // Create a manager and a class manager
            const manager = new Manager(
                data.name.toUpperCase(),
                data.id,
                data.email,
                data.officeNo
                );
        // Need to push manager info to allEmployees
          allEmployees.push(manager);
          allIDs.push(data.id);
          choice();
        });
}
// create engineer function            
 function createEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then(data => {
       // create a engineer w/a class engineer
            const engineer = new Engineer(
                data.name.toUpperCase(),
                data.id,
                data.email,
                data.github
                );
        //  push engineer data to allEmployees
          allEmployees.push(engineer);
          allIDs.push(data.id);
          choice();
        });
};         
 // create an Intern function            
 function createIntern(){
    inquirer
        .prompt(engineerQuestions)
        .then(data => {
     // create a intern w/a class inter 
            const intern = new Intern(
                data.name.toUpperCase(),
                data.id,
                data.email,
                data.school
            );
            allEmployees.push(intern);
            allIDs.push(data.id);
            choice();
            });             
            // last Question
const choiceQuestion = [
    {
        type: 'list',
        message: 'What would you like to do next?',
        name: 'choice',
        choices: ['Add a new Engineer', 'Add a new Intern', 'Exit'],
        default: ['Add a new Engineer']
    },
]

 };
 
 function choice() {
    inquirer
        .prompt(choiceQuestion)
        .then((data) =>{
            console.log(data);
            switch (data.choice) {
                case 'Add a new Engineer':
                    createEngineer();
                    break;
                case 'Add a new Intern':
                    createIntern();
                    break;
                default:
                    console.log(`All employees have been created... web page will generated.`);
                    cards();
                    break;
            };
        });
};
      
// begin the program
function init() {
    createManager();
}

function cards(){
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    };
    fs.writeFileSync(distPath, cardGen(allEmployees));
};

// being the program
init();






 