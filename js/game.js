class Game{
    constructor(){
        
    }

    getState()  // reading game state from database
    {
var stateref =database.ref('gameState')
stateref.on("value",function(abc){
    gamestate=abc.val()
})
    }

    update(state){  //writing game state from database
database.ref('/').update({
    gameState:state
})
}
start(){
if(gamestate === 0){
    player = new Player();
    player.getCount();
    form=new Form();
    form.display();
}
}



play(){
  form.hide()
  text("Game started ",120,100) 
  Player.getPlayerInfo() 
  
  if(allplayers !== undefined){
    var yPos = 130;
    for(var plr in allplayers){
        if(plr==="player"+player.index)
            fill("red");
        else
            fill("black");

            yPos = yPos +20;
            textSize(15);
           text(allplayers[plr].name + " : " +  allplayers[plr].distance,120,yPos ) 
         }

    }

    if(keyIsDown(UP_ARROW) && player.index !==null){
        player.distance +=50;
        player.update();

    }

  }

}