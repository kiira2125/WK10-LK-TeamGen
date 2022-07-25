# WK11-LK-TeamGen (aka OOP-HW)

## License for this homework:
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
We were ask to build an app using Node.js command-line application. Our task was to take the information about employees on a software engineering team. We were then ask to generates an HTML webpage to display the contact information of each employee. This application would ask a setup of question to answer for each employee. We are to test the program and video type out results of the program.

## List of Contents:

* [Description](#description)
* [Application Preview](#application-preview)
* [Installation](#installation)
* [Usage](#usage)
* [Test](#test)
* [Links](#links)
* [Criteria](#criteria)
* [Questions](#questions)
* [License](#license

## Links:
* Github Repository:
    * https://github.com/kiira2125
    * [![image:](.//Dist/Assets/assets/images/Capture.JPG)](http://127.0.0.1:5501/Dist/Assets/index.html)  
    
## Installation list:
* Sopy the repository to one's system
* Run npm install
* Create node index.js
* Create .gitignore
* Create package.json

## Test:
  * npm run test



## Application Preview

## Criteria
* Test (Tests)
    * https://www.npmjs.com/package/jest
* Inquirer 
    * https://www.npmjs.com/package/inquirer
* HTML generated from CLI inputs
    * Card for each Employee
    * Email link works correctly
    * GitHub username links works correctly 
* Start of Application
    * Prompt to enter Manager's Info
        * Name
        * Employee ID
        * Email address
        * Office Number
        * You are prompt to add Engineer, Intern, or Finish
        * You are prompt for Engineer's Information 
        * Name
        * Employee ID
        * Email address
        * Github Username
        * When it takes you back to the main section  for Engineer, Intern, or Finish
    * Prompt for Intern
        * Name
        * Employee ID
        * Email address
        * School
        * When it takes you back to the main section for Engineer, Intern, or Finish
        * When you select finish 
        * HTML is generated with all the info provided from Prompts
* CSS Styling is up to you
* Classes
    * Employee
        * Parent Class
        * name
        * id
        * email
        * getName()
        * getEmail()
        * getRole()
        - Returns Employee
    * Manager
        * Extend Employee Class
        * officeNumber
        * getRole()
        - overriden, returns Manager
    * Engineer
        * Extend Employee Class
        * github
        * getGithub()
        * getRole()
        - overriden, returns Engineer
    * Intern
        * Extend Employee Class
        * school
        * getSchool()
        * getRole()
        *- overriden, returns Intern



## Questions
Questions? Concerns?  Contact Me Below:
- Github Username: lunakiira
- Github Link: https://github.com/lunakiira 
- Email: lunakiira0911@gmail.com

## License
* Licensed under the: [MIT License](https://opensource.org/licenses/MIT) 
