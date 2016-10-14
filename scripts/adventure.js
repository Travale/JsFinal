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


console.log("Let the adventure begin");

alert(direction[randomNumber(direction -1)]);

var orientation = prompt("What direction do you choose? North, North West or North East?").toLowerCase;

if(orientation = "north"){
    alert("You head through the climbing forest.");
} else if(orientation = "north east"){
    alert("You head up the steep peaks");
} else if (orientation = "north west"){
    alert("You head through the winding crags");
}


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




if(playerOne.playerType == "magician"){
    playerOne.magic = 60
   
}

if(playerOne.playerType == "songmaster"){
    playerOne.tenacity = 40
    console.log(playerOne.tenacity);
}

if(playerOne.playerType == "tactician") {
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

var item = {
    health: playerOne.health ++,
    magic: playerOne.magic ++,
    tenacity: playerOne.tenacity ++,
    damage: playerOne.damage ++,
}

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

console.log("Roll the dice");

alert("Let's roll the dice to see how far you travel");


var dice = Math.round(Math.random() * 6);
if(dice <= 2 && dice >= 1){
   alert("You move 1 space");  
} else if(dice <= 4 && dice >= 3){
    alert("You move 2 spaces");
} else if(dice <= 6 && dice >= 5){
    alert("You move 3 spaces");
}   
        
     
        
alert("You travel 2 miles");        


alert("You find a treasure chest");

var chest = ["magic branch","scrying orb","panda token", "bag of sugar","small dagger"];

console.log("You reach the peak");
console.log("You find a dragon");
console.log("He teaches you dragon language");

var choose = prompt("Which monster do you fight?  The dragon the troll or the reaper?")

if(choose == "dragon"){
    console.log("dragon")
    console.log(playerOne.tenacity)
    if(playerOne.tenacity >= 40){
        alert("You do 10 damage to the dragon");
    } else if(playerOne.tenacity == 25){
        alert("You do 5 damgae to the dragon");
    }
}



function chestItems(){
do {
    var i = 0;
    i++;
    alert("You gain" + chest[i]);
} while(i < 5);

}

chestItems()


    










