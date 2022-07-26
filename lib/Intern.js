const Employee = require('./Employee');

class Intern extends Employee{
// need to code intern class to satisfy the text case which i will run in npm run test
 constructor(name, id, email, school){
    super(name, id, email);
    this.school = school;
}

  getSchool() {
    return this.school;
  }

  getRole() {
    return `Intern`;
  }
};