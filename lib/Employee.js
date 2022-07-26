 class Employee{
  // todo: need to write employee calss so it satisfies the text case which i will run in npm run test
  constructor(name, id, email){
    this.name = name,
    this.id= id,
    this.email = email
 };

    getName() {
      return this.name;
 };

    getID(){
        return this.id;
 };

    getEmail() {
        return this.email;
    };
  };

  module.exports = Employee;