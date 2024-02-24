// git add . && git commit -m "msg" && git push

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// * The other three classes will extend `Employee`.
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
}