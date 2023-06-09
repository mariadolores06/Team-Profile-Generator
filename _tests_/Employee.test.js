const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Maria";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 3;
    const employeeInstance = new Employee("Maria", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "mrodriguez@gmail.com";
    const employeeInstance = new Employee("Maria", 3, email);
    expect(employeeInstance.email).toBe(email);
})


test("Gets name through getName method.", () => {
    const testName = "Maria";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 3;
    const employeeInstance = new Employee("Maria", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "mrodriguez@gmail.com";
    const employeeInstance = new Employee("Maria", 3, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Maria", 3, "mrodriguez@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})