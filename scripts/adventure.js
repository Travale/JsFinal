alert("panda");

/* What we need

    1. Player
    2. 3 different enemies
    3. Battle prompts
    4. stats(health)
    5. items(weapons etc.)
    6. Story prompts and alerts

How are we going to do this?

Create a player object
Create enemy object constructor
include stats of health tenacity damage and magic

create a starting weapons
create potions, spell books and glass artifacts
*/
alert("You are looking for the grand castle of mount boggard.  This adventure will test your mettle. Will you find gorious success or miserable failure?")

var direction = ["You head North"]

function randomNumber(range){
    return (Math.random(Math.round) * range);
}

alert(randomNumer[])

var distance = math.round(math.random() * 100);

var playerOne = {

    health: 40,
    magic: 20,
    tenacity: 25,
    damage: 40,

    special: function charge() {
        if(distance >= 20 && distance <= 30){
            distance === 0;
        }
    },
    playerType: prompt("You have traveled far and wide to get here.  What makes you special?  Are you a Magician, a Songmaster or a Tactician?").toLowerCase()

};

if(playerOne.playerType = "magician"){
    playerOne.magic = 60
}

if(playerOne.playerType = "songmaster"){
    playerOne.tenacity = 40
}

if(playerOne.playerType = "tactician") {
    playerOne.damage = 60
}



function enemy(name, health, magic, tenacity, damage) {

    this.name = name
    this.health = health
    this.magic = magic
    this.tenacity = tenacity
    this.damage = damage

}

switch {
    case (magic = 60):
        window.alert("You equip your blade wand");
        break;
    case (tenacity = 40):
        window.alert("You equip your flute of legend");
        break;
    case (damage = 60)
        window.alert("You equip your razor cutter");
    default:
        window.alert("You equip your letter opener");
}









