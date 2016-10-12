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

var direction = ["You head North over the steep peak.","You head North West through the climbing forest.","You head North East through the winding crags."]

function randomNumber(range){
    return (Math.random(Math.round) * range);
}

alert(direction[randomNumber(direction -1)]);


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



function Enemy(name, health, magic, tenacity, damage) {

    this.name = name
    this.health = health
    this.magic = magic
    this.tenacity = tenacity
    this.damage = damage

}

var mrTroll = new Enemy("Troll", 60, 10, 20, 60);
var mrReaper = new Enemy("Reaper", 60, 45, 40, 35);
var mrDragon = new Enemy("Dragon", 80, 35, 40, 40);

var startWeapons = prompt("What weapon do you start with? A blade wand, a razor axe or a flute of legend?").toLowerCase;

switch (startWeapons){
    case "blade wand":
        alert("You equip the blade wand");
        playerOne.magic + 5;
    case "razor axe":
        alert("You equip the razor axe");
        playerOne.damage + 5;
    case "flute of legend":
        alert("You equip the flute of legend");
        playerOne.tenacity + 5;
    default:
        alert("You equip a shiv")
        playerOne.damage + 1;

}

var newItems = ["magic acorn","boggard map","breaker ball","golden scarf","gilded leaf"];

function startItems() {
    for(var i = 0; i < 5; i++){
        alert("You gain " + newItems[i]);
    }
}

startItems()

alert("You find a treasure chest");

var chest = ["magic branch","scrying orb","panda token", "bag of sugar","small dagger"];

function chestItems(){
do {
    var i = 0;
    i++;
    alert("You gain" + chest[i]);
} while(i < 5);

}

chestItems()

console.log("You reach the peak");
console.log("You find a dragon");
console.log("He teaches you dragon language");








