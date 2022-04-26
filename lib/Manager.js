const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNo) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNo = officeNo;
    }

    getOfficeNo() {
        return this.officeNo;   
    }

    getRole() {
        return "Manager";
    }

}

module.exports = Manager