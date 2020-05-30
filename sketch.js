var canvas,playerCount;
var database,form;

var player,game;
var allPlayers;

var car1,car2,car3,car4;
var cars;

var gamestate = 0;

var track,car1_image,car2_image;
var car3_image,car4_image,ground;

function preload(){
  track = loadImage("images/track.jpg")
   car1_image = loadImage("images/car1.png")
   car2_image = loadImage("images/car2.png")
   car3_image = loadImage("images/car3.png")
   car4_image = loadImage("images/car4.png")
   ground = loadImage ("images/ground.png")
}

function setup(){
    database = firebase.database();
    canvas = createCanvas(displayWidth-20,displayHeight-30);      
  game = new Game ()
  game.getState() 
  game.start()
}     

function draw(){
  
if(playerCount === 4){
  game.update(1)
}

 if(gamestate === 1){
  clear()
  game.play()
 }
   if(gamestate === 2){
     game.end()
   }
}
