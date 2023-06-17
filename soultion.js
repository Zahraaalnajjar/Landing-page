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
var user1 = new user("JAD",0,[]);
console.log(user1);
user1.newSolvedChallenge({
    id:1,
    level : 'VE'
});
let object2 = {
    id: 2,
    level:'ME'
};
user1.newSolvedChallenge(object2);
console.log(user1.xp);
console.log(user1.log);