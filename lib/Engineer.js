const Employee = require("./Employee");
// do the same think as for employee and will do the same for the others.
class Engineer extends Employee{

  constructor(name, id, email, github){ 
    super(name, id, email)
    this.github = github  
  };

  getGithub(){
    return this.github
  };

  getRole(){
    return "Engineer"

  };
};

module.exports = Engineer;

