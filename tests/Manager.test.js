const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialize", () => {
        it("should return an object with containing a 'name', 'id', 'email', and 'officeNo' property when called with the 'new' keyword", () => {
            //arrange and act
            const obj = new Manager();
      
            //assert
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("officeNo" in obj).toEqual(true);
          });

        it("should set the values for 'name', 'id','email', and 'officeNo' to the values passed into the new instance", () => {
            //arrange
            const newName = "Susie";
            const newId = "1234";
            const newEmail = "susie@email.com";
            const newOfficeNo = "45555";

            //act
            const newManager = new Manager(newName, newId, newEmail, newOfficeNo);

            //assert
            expect(newManager.name).toEqual(newName);
            expect(newManager.id).toEqual(newId);
            expect(newManager.email).toEqual(newEmail);
            expect(newManager.officeNo).toEqual(newOfficeNo);
        });
    });

    describe("manager", () => {
        it("should return 'Manager' when getRole is called", () => {

            //arrange
            const roleStr = "Manager";

            //act
            const newManagerRole = new Manager().getRole();

            expect(newManagerRole).toEqual(roleStr);
        });
    })


});