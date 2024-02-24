// git add . && git commit -m "msg" && git push

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// * The other three classes will extend `Employee`.

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}