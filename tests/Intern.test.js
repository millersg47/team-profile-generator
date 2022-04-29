const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialize", () => {
        it("should return an object with containing a 'name', 'id', 'email', and 'school' property when called with the 'new' keyword", () => {
            //arrange and act
            const obj = new Intern();
      
            //assert
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("school" in obj).toEqual(true);
          });

        it("should set the values for 'name', 'id','email', and 'school' to the values passed into the new instance", () => {
            //arrange
            const newName = "Susie";
            const newId = "1234";
            const newEmail = "susie@email.com";
            const newSchool = "University of Washington";

            //act
            const newIntern = new Intern(newName, newId, newEmail, newSchool);

            //assert
            expect(newIntern.name).toEqual(newName);
            expect(newIntern.id).toEqual(newId);
            expect(newIntern.email).toEqual(newEmail);
            expect(newIntern.school).toEqual(newSchool);
        });
    });

    describe("school", () => {
        it("should return 'Intern' when getRole is called", () => {

            //arrange
            const roleStr = "Intern";

            //act
            const newInternRole = new Intern().getRole();

            expect(newInternRole).toEqual(roleStr);
        });
    })


});