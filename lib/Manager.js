const Employee = require("./Employee");

class Manager extends Employee {
  // I need to write manager class so it satisfies the text case which i will run in npm run test
    constructor(id, name, email, officeNumber) {
     super(id, name, email);
     this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole(){
    return 'Manager';
  }
}

module.exports = Manager;