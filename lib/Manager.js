// git add . && git commit -m "msg" && git push

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// * The other three classes will extend `Employee`.

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}