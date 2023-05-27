const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "mariadolores06";
    const employeeInstance = new Engineer("Maria", 3, "mrodriguez@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "mariadolores06";
    const employeeInstance = new Engineer("Maria", 3, "mrodriguez@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Maria", 3, "mrodriguez@gmail.com", "mariadolores06");
    expect(employeeInstance.getRole()).toBe(returnValue);
});