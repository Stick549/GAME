var gameState = 0
var player;
var game;
var button;
var player1, player2, playerCount
var database
function preload() {
 

  
}

function setup() {
  createCanvas(700, 700)
  database = firebase.database()
  game = new Game()
  player = new Player()
  player1 = createSprite(100, 100, 50, 50)
player2 = createSprite(200, 200, 50, 50)
playerCount = 0
button = createButton("play")
button.position(350, 350)
  game.start()
}

function draw() {
  background("red");
  

/*if(gameState === 0 && mousePressedOver(button)){
  player.getCount()
  button.destroy()
 playerCount += 1

  console.log(playerCount)
player.updateCount(playerCount)*/
//}
if(playerCount === 2){
  gameState = 1
}
if(gameState === 1){
  button.hide()
  game.play()
}
  drawSprites()
}