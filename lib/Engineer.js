// git add . && git commit -m "msg" && git push

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// * The other three classes will extend `Employee`.

// * In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
//       * `github`&mdash;GitHub username
//       * `getGithub()`
//       * `getRole()`&mdash;overridden to return `'Engineer'`

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}