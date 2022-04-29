const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialize", () => {
        it("should return an object with containing a 'name', 'id', 'email', and 'github' property when called with the 'new' keyword", () => {
            //arrange and act
            const obj = new Engineer();
      
            //assert
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("github" in obj).toEqual(true);
          });

        it("should set the values for 'name', 'id','email', and 'github' to the values passed into the new instance", () => {
            //arrange
            const newName = "Susie";
            const newId = "1234";
            const newEmail = "susie@email.com";
            const newGithub = "susiegithub";

            //act
            const newEngineer = new Engineer(newName, newId, newEmail, newGithub);

            //assert
            expect(newEngineer.name).toEqual(newName);
            expect(newEngineer.id).toEqual(newId);
            expect(newEngineer.email).toEqual(newEmail);
            expect(newEngineer.github).toEqual(newGithub);
        });
    });

    describe("engineer", () => {
        it("should return 'Engineer' when getRole is called", () => {

            //arrange
            const roleStr = "Engineer";

            //act
            const newEngineerRole = new Engineer().getRole();

            expect(newEngineerRole).toEqual(roleStr);
        });
    })


});