// git add . && git commit -m "msg" && git push

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// * The other three classes will extend `Employee`.

// * In addition to `Employee`'s properties and methods, `Intern` will also have the following:
// * `school`
// * `getSchool()`
// * `getRole()`&mdash;overridden to return `'Intern'`
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;