// class Computer {
//   constructor(name, health){
//     this.name= name;
//     this.health = health;
//   }
//    generateAttackDamage(){
//     return getRandom(5)
//   }
// }
//
// class Character extends Computer{
//   constructor (name, health, healsRemaining){
//     super (name,health);
//     this.healsRemaining = healsRemaining;
//     this.wins = 0;
//   }
//  generateAttackDamage(){
//     return getRandom(3);
//   }
//   heal(){
//     this.health += getRandom(10);
//     this.healsRemaining--;
//   }
//  }
//
// var TOTAL_WINS = 5;
// var COMPUTER_STARTING_HEALTH = 10;
//
// startGame();
//
// function startGame(){
//   var question = prompt("Do you want to play a game?");
//   if (question.toLowerCase() === 'yes' || 'y'){
//     var userName = prompt("What is your name?");
//     startCombat(userName);
//   }
// }
//
// function startCombat(userName){
//
//   var grant = new Computer('Grant', COMPUTER_STARTING_HEALTH);
//   var user = new Character(userName, 40, 2);
//
//   while (user.wins < TOTAL_WINS && user.health > 0){
//     var shouldAttack = prompt("attack, heal or quit");
//
//     if (shouldAttack === 'quit'){
//       console.log('thanks for playing')
//       return;
//     }
//     if (shouldAttack === 'attack'){
//       user.health -= grant.generateAttackDamage();
//       grant.health -= user.generateAttackDamage();
//     }
//     if (shouldAttack === "heal"){
//       user.heal();
//       // grant.health -= user.generateAttackDamage();
//       console.log(`${user.name} has healed and has ${user.health}`);
//     }
//     console.log(user.name + ' has ' + user.health + ' health left');
//     console.log(`${grant.name} has ${grant.health} health left`);
//
//     if (grant.health < 1){
//       user.wins++;
//       grant.health = COMPUTER_STARTING_HEALTH;
//       console.log(`${user.name} has ${user.wins}  win(s)`);
//     }
//
//     if (user.healsRemaining === 0){
//       grant.generateAttackDamage();
//       user.generateAttackDamage();
//       console.log(`${user.name}  has ${user.health} health left`);
//       console.log(`Grant has ${grant.health} health left`);
//     }
//
//   }
//
//   if (user.wins === TOTAL_WINS){
//     console.log(`${user.name} has ${user.wins}  wins`);
//   } else {
//     console.log('Grant Wins');
//   }
// }
//
// function getRandom (max) {
//   return Math.floor(Math.random() * max) + 1;
// }



//Globals
var userHealth = 40;
var grantHealth = 10;
var wins = 0;
var playerHealCount = 2;
var user;

// Hook up the start button - could use an 'add event listener'
var startButton = document.getElementById("startButton");
startButton.onclick = function () {
  document.getElementById("game-wrapper").style.display = "block";
  document.getElementById("start-wrapper").style.display = "none";
  startGame();
}

// Define a function to update the player name
var playerName = document.getElementById("playerName");
function setPlayerName(user) {
  playerName.innerText = user;

}

// Hook up the attack button
var attackButton=document.getElementById("attackButton");
attackButton.onclick=attack;
function attack() {
  userHealth -= getDamage(5);
  grantHealth -= getDamage(3);

  document.getElementById("text").innerText= `${user} has ${userHealth} health remaining. Grant has ${grantHealth} health remaining.`;

  // console.log(`The user has ${userHealth} health remaining`);
  // console.log(`Grant has ${grantHealth} health remaining`);

  var playerHeathProgressBar = document.getElementsByClassName("playerHealth")[0];
  playerHeathProgressBar.value = userHealth;

  var enemyHealthProgressBar = document.getElementsByClassName("enemyHealth") [0];
  enemyHealthProgressBar.value = grantHealth;

// Hook up Wins

  if (grantHealth <= 0) {
    wins++;
    grantHealth = 10;

    var playerWinsProgressBar = document.getElementsByClassName("playerWins") [0];
    playerWinsProgressBar.value = wins;

    // var message = `The user has a victory`
    // document.getElementById("text").innerText=`${user} has a victory`;
    if (wins > 1) {
    // var message = `The user has another victory`
    document.getElementById("text").innerText=`${user} has another victory`;

  }if (wins === 5){
      console.log(`The user has ${wins} wins`);
      document.getElementById("text").innerText=`${user} has ${wins} wins`;
      quit('user wins');
  }
    }else if (userHealth <=0 ){
      document.getElementById("text").innerText='Grant Wins';
      console.log('Grant Wins');
      quit('Grant Wins');
    };


  }


// Hook up heal
var healButton = document.getElementById("healButton");
healButton.onclick = heal;

  function heal() {
    if (playerHealCount >0){
    userHealth += getRandom(10);
    playerHealCount --;

    document.getElementById("text").innerText=`${user} has healed and has ${userHealth} health.`;
    // console.log(`The user has healed and has ${userHealth}`);

    var playerHealCountProgressBar = document.getElementsByClassName('HealCount') [0];
    playerHealCountProgressBar.value = playerHealCount;
  }}


  // Quit button
  var quitButton = document.getElementById("quitButton");
  quitButton.onclick = function(){
    quit("You have quit the game. Thanks for playing!  Happy Gaming :)");
  }
  function quit(message){
   alert(message);
   document.getElementById("game-wrapper").style.display = "none";
   document.getElementById("start-wrapper").style.display = "block";
  }

function startGame() {
  user = prompt('Please enter your name');
  setPlayerName(user);
  // startCombat(user);
}

function getDamage(max) {
 return getRandom(max)
}
function getRandom(max) {
 return Math.floor(Math.random() * max) + 1;
}



  // function getRandom (max){
  //     return Math.floor(Math.random() * max) + 1;
  // }

  // function startCombat(userName){
  //   user.health -= grant.generateAttackDamage();
  //   grant.health -= user.generateAttackDamage();
  // }

    // var grant = new Computer('Grant', COMPUTER_STARTING_HEALTH);
    // var user = new Character(userName, 40, 2);

    // if (user.wins < TOTAL_WINS && user.health > 0){
      // var shouldAttack = prompt("attack, heal or quit");

  //     if (shouldAttack === 'quit'){
  //       console.log('thanks for playing')
  //       return;
  //     }
  //     if (shouldAttack === 'attack'){
  //       user.health -= grant.generateAttackDamage();
  //       grant.health -= user.generateAttackDamage();
  //     }
  //     if (shouldAttack === "heal"){
  //       user.heal();
  //       // grant.health -= user.generateAttackDamage();
  //       console.log(`${user.name} has healed and has ${user.health}`);
  //     }
  //     console.log(user.name + ' has ' + user.health + ' health left');
  //     console.log(`${grant.name} has ${grant.health} health left`);
  //
  //     if (grant.health < 1){
  //       user.wins++;
  //       grant.health = COMPUTER_STARTING_HEALTH;
  //       console.log(`${user.name} has ${user.wins}  win(s)`);
  //     }
  //
  //     if (user.healsRemaining === 0){
  //       grant.generateAttackDamage();
  //       user.generateAttackDamage();
  //       console.log(`${user.name}  has ${user.health} health left`);
  //       console.log(`Grant has ${grant.health} health left`);
  //     }
  //
  //   }
  //
  //   if (user.wins === TOTAL_WINS){
  //     console.log(`${user.name} has ${user.wins}  wins`);
  //   } else {
  //     console.log('Grant Wins');
  //   }
  // // }
  //
  // function getRandom (max) {
  //   return Math.floor(Math.random() * max) + 1;
  // }
  //
  //
  //
  //
  //
  //
  //



//
// class Computer {
//   constructor(name, health){
//     this.name = name;
//     this.health = health;
//   }
//   generateAttackDamage(){
//    return getRandom(5);
//   }
//
// }
//
// class Character extends Computer {
//   constructor(name, health, healsRemaining){
//     super (name, health);
//     this.healsRemaining = healsRemaining;
//     this.wins = 0;
//   }
//   generateAttackDamage(){
//     return getRandom(3);
//   }
//   heal(){
//     this.health += getRandom(10);
//     this.healsRemaining--;
//   }
// }
//
//
//
//
//
// startGame();
// function startGame (){
//   var play = prompt( 'do you want to play?');
//   if (play.toLowerCase() === 'yes'){
//     var userName = prompt ('enter your name');
//     startCombat(userName);
//   }else {
//     console.log('Game Over');
//   }
// }
//
//
//
// function startCombat (userName){
//   var user = new Character(userName, 40, 2);
//   var grant = new Computer('grant', 10 );
//   while (user.wins < 5 && user.health > 0) {
//     var attack = prompt('Do you want to attack, heal, or quit?');
//     if(attack === 'quit'){
//       console.log('Game Over');
//       return;
//     }
//
//     if(attack === 'attack'){
//     user.health  -= grant.generateAttackDamage();
//     grant.health -= user.generateAttackDamage();
//     console.log(`${user.name} has ${user.health} health remaining`);
//     console.log(`Grant has ${grant.health} health remaining`);
// }
//   if (attack === 'heal'){
//     user.heal();
//     console.log(`${user.name} has healed and has ${user.health}`);
//   }
//   if (grant.health < 1){
//       user.wins++;
//       grant.health = 10;
//       var message = `${user.name} has 1 victory`;
//     }
//       if (user.wins > 1){
//         message = `${user.name} has ${user.wins} victories`;
//       console.log(message);
//     }
//     if (user.healsRemaining === 0){
//       grant.generateAttackDamage();
//       user.generateAttackDamage();
//       console.log(`${user.name} has ${user.health} health remaining`);
//       console.log(`Grant has ${grant.health} health remaining`);
//     }
//
// }
//
// if (user.wins === 5){
//     console.log(`${user.name} won`);
//   }else {
//     console.log('Grant won');
//   }
//   }
//   else {
//     console.log('Game not started, you must type "yes" to begin the game.');
//   }
//
// getRandom();
// startCombat();
