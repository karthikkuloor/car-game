class Form{
    constructor(){
        this.input=createInput("Name")
        this.button=createButton("Play")
        this.greeting=createElement('h3')
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()  
    }
    display(){
     var title=createElement('h2')
     title.html("Car racing game")
     title.position(130,0);

     
     this.input.position(130,160);

     
     this.button.position(130,180)

     
     this.button.mousePressed(()=>{
     
        playerCount=playerCount+1
        this.input.hide()
        this.button.hide()
        player.name=this.input.value()
        player.index=playerCount
        this.greeting.html("Hello "+ player.name)
       this.greeting.position(130,160);
        player.update();
player.updateCount(playerCount)
     })
    }
    
}