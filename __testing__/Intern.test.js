const Intern = require("./Intern.test");

test("Can set school via constructor", () => {
  const testValue = "UCSC";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("BOOBOO", 1, "luna@test.com", "UCSC");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCSC";
  const e = new Intern("BOOBOO", 1, "luna@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
