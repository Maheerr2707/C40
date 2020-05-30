class Game {
   constructor(){}

 getState(){
    var gamestateref = database.ref('gamestate');
    gamestateref.on('value',function(data){
       gamestate = data.val()
    })
 }
   update(state){
database.ref('/').update({
   gamestate:state
})
   }
async start(){
   if(gamestate === 0){
   player = new Player()
   
   var playerCountref = await database.ref('playerCount').once("value")

   if(playerCountref.exists()){
      playerCount = playerCountref.val()
      player.getCount()
   }

   form = new Form ()
   form.display()
 }

   car1 = createSprite(100,200)
   car1.addImage("car1",car1_image)

   car2 = createSprite(300,200)
   car2.addImage("car2",car2_image)

   car3 = createSprite(500,200)
   car3.addImage("car3",car3_image)

   car4 = createSprite(700,200)
   car4.addImage("car4",car4_image)
  
   cars = [car1,car2,car3,car4]


   }

play(){
 form.hide()
 textSize(30)
 text("Game Start",120,100)
 Player.getPlayerinfo()
 player.getCarsAtEnd()
 
console.log("allPlayers "+allPlayers)

   if(allPlayers !== undefined){
      background("blue")
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
      var index = 0
      var x = 175
      var y 
   for(var plr in allPlayers){
     index = index + 1
     x = x + 200
     y = displayHeight - allPlayers[plr].distance

   cars[index - 1].x = x
   cars[index - 1].y = y
    if(index === player.index){
       stroke(10)
       fill("red")
       ellipse(x,y,60,60)
       cars[index - 1].shapeColor ="red"
       camera.position.x = displayWidth/2
       camera.position.y = cars[index - 1].y      
     }
    }  
   }
   if(keyIsDown(UP_ARROW)&&(player.index!==null)){
      player.distance = player.distance + 50;
      player.update ()
    } 

if(player.distance>3860){
   gamestate = 2;
   player.rank += 1
   player.updateCarsAtEnd(player.rank)
}

   drawSprites() 
  }

end(){
   console.log("gameEnded")
   console.log("playerRank"+player.rank)
}

 }
