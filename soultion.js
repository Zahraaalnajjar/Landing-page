// "VE" = "Very Easy"
// "EA" = "Easy"
// "ME" = "Medium"
// "HA" = "Hard"
// "VH" = "Very Hard"
// "EX" = "Expert"


const obj = {
    "VE": 5,
    "EA": 10,
    "ME": 20,
    "HA": 40,
    "VH": 80,
    "EX": 120
}
class user{
    constructor (name,xp,log){
    this.name=name;
    this.xp=xp;
    this.log=log;
    }
    newSolvedChallenge(object2){   
        this.xp += obj[object2.level]
        this.log.push(object2.id)
         }
}
class Challenges{
    constructor(id,level){
        this.id=id;
        this.level=level;
        }
}
var user1 = new user("JAD",0,[]);
console.log(user1);
var ch = new Challenges (1,"VE")
user1.newSolvedChallenge(ch)
var ch1 = new Challenges (2,"ME")
user1.newSolvedChallenge(ch1)
console.log(user1.xp);
console.log(user1.log);

