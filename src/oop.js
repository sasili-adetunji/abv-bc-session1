
/* An OOP work

Programmed by Sasiliyu Adetunji
Andela Abuja Bootcamp Home study Session Day 1
Date: 16 May, 2017.
 
*/

function Games(name, team, gamingArena){
    if (name === null) {
        return "Invalid input"
    } else {
        this.name = name;
        this.team = team;
        this.gamingArena = gamingArena;
    }
}

Games.prototype = {
    teamGames: function(){
        if (this.name === "") {
            return "Invalid input";
        } else {
            if (this.team >= 2) {
                return this.name + " is a team sport involving " + this.team + " players!";
            } else if (this.team === 1) {
                return this.name + " is a sport involving 1 player!";
            } else {
                return "Invalid input";
            }
        }
    },

    whatToUse: function(equipment){
        if ((this.name === "") || (equipment === null)) {
            return "Invalid input"
        } 
        else if ((this.name === "Football") || (this.name === "Basketball") || (this.name === "Rugby")){
                return this.name + " is a sport played using a " + this.name + ".";
            } 
        else {
                return this.name + " is a sport played using " + " " + equipment + ".";
            }
        
    },

    whereItsPlayed: function() {
        if (this.name === "")  {
            return "Invalid input"
        } else  {
            return this.name + " is a sport played " + " " + this.gamingArena + ".";
        }
    },

    
};

let football = new Games("Football", "11", "football pitch");
let rugby = new Games("Rugby", "11", "pitch");
let basketball = new Games("Basketball", "5", "basketball court");
let tennis = new Games("Tennis", "1", "tennis court");
let swimming = new Games("Swimming", "1", "swimming pool");
let ludo = new Games("Ludo", "1", "indoors");

console.log(football.teamGames());
console.log(tennis.teamGames());
console.log(basketball.teamGames());
console.log(ludo.teamGames());
console.log(swimming.whatToUse("water"));
console.log(tennis.whatToUse("racket and tennis ball"));
console.log(rugby.whereItsPlayed());