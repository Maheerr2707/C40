class Player {
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null
        this.rank = null
    } 

  getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
          playerCount = data.val()
      })  
  }

  updateCount(count){
     database.ref('/').update({
         playerCount : count
     })
   } 
  
  update(){
      var playerIndex = "players/player"+this.index
      database.ref(playerIndex).set({
          Name : this.name,
          distance : this.distance
      })
  }

static getPlayerinfo(){
    var playerinforef = database.ref('players')
    playerinforef.on("value",(data)=>{
        allPlayers = data.val()
      console.log("getPlayerinfo" +allPlayers) 
    })
}
 
getCarsAtEnd(){
    database.ref('carsAtEnd').on("value",(data)=>{
        this.rank = data.val()
    })
}

updateCarsAtEnd(rank){
    database.ref('/').update({
        carsAtEnd : rank
    })
}

 }