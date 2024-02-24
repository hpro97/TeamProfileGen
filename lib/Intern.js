// git add . && git commit -m "msg" && git push

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// * The other three classes will extend `Employee`.

// * In addition to `Employee`'s properties and methods, `Intern` will also have the following:
// * `school`
// * `getSchool()`
// * `getRole()`&mdash;overridden to return `'Intern'`


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}