const Employee = require("../lib/Employee");

describe("Employee", () => {

    describe("Initialization", () => {
        it("should return an object containing a 'name', 'id', and 'email' property when called with the 'new' keyword", () => {

            //arrange and act
            const obj = new Employee();
      
            //assert
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
          });

        it("should set the values for 'name', 'id', and 'email' to the values passed into the new instance", () => {

            //arrange
            const newName = "Susie";
            const newId = "1234";
            const newEmail = "susie@email.com";
            //act
            const newEmployee = new Employee(newName, newId, newEmail);

            //assert
            expect(newEmployee.name).toEqual(newName);
            expect(newEmployee.id).toEqual(newId);
            expect(newEmployee.email).toEqual(newEmail);
        })
    });

    describe("name", () => {
        it("show return the value of 'name' when getName is called", () => {

            //arrange
            const newName = "Harold";

            //act
            const newEmployeeName = new Employee(newName).getName();

            //assert
            expect(newEmployeeName).toEqual(newName);
        });
    })

    describe("id", () => {
        it("show return the value of 'id' when getId is called", () => {

            //arrange
            const newId = "456";

            //act
            const newEmployeeId = new Employee("placeholder", newId).getId();

            //assert
            expect(newEmployeeId).toEqual(newId);
        });
    })

    describe("email", () => {
        it("show return the value of 'email' when getEmail is called", () => {

            //arrange
            const newEmail = "email@address.com";

            //act
            const newEmployeeEmail = new Employee("placeholder", "placeholder", newEmail).getEmail();

            //assert
            expect(newEmployeeEmail).toEqual(newEmail);
        });
    })

    describe("role", () => {
        it("should return 'Employee' when getRole is called", () => {

            //arrange
            const roleStr = "Employee";

            //act
            const newEmployeeRole = new Employee().getRole();

            expect(newEmployeeRole).toEqual(roleStr);
        });
    })

});