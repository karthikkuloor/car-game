class Player{
    constructor(){
      this.index=null;
      this.distance=0;
      this.name=null;  
    }
//players- player1 - distance   :0
                  // - name :0

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name : this.name,
          distance:this.distance

        })
    }
static getPlayerInfo(){
  var playerInforef=database.ref('players')
  playerInforef.on("value",(data)=>{
allplayers=data.val()
  })
}

    updateCount(count){
      database.ref('/').update({
          playerCount:count    
      })

    }
    getCount()
    {
     var countRef =  database.ref('playerCount')
      countRef.on("value",(data)=>{
playerCount=data.val()
      }) 
    }
}  
// player.update(Name);

