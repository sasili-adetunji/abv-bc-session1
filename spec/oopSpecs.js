
/* The test cases for the OOP work

Programmed by Sasiliyu Adetunji
Andela Abuja Bootcamp Home study Session Day 1
Date: 16 May, 2017.
 
*/  


const myApp = require('../src/oop.js')


    describe("Games Class: Create a game", function() {
        it("The game should be a type of `object`, and an instance of the `Games` class", function() {
            let football = new myApp.Games('Football');
            expect(typeof football).toEqual(typeof {});
            expect(football instanceof myApp.Games).toBeTruthy();
        });

        it("The game name and team should be a property of the game", function() {
            let football  = new myApp.Games('Football', 11);
            expect(football.name).toBe('Football');
            expect(football.team).toBe(11);
        });

        it("The game should be a teamsport except its has only one player", function() {
            let tennis  = new myApp.Games('Tennis', 1);
            expect(tennis.team).toBe(1);

            let basketball = new myApp.Games('Basketball', 5);
            expect(basketball.team).toBe(5);

            expect((function(){return new myApp.Games('Basketball', 5, 'basketball court');}()).gamingArena).toBe('basketball court');
        });


    });
