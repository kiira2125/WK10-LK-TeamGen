const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("BOOBOO", 1, "luna@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("BOOBOO", 1, "luna@test.com", 100);
  expect(e.getRole()).toBe(testValue);
  //return Manager;
   //testValue is declaring the value "manager"
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("BOOBOO", 1, "luna@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
