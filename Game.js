class Game{
    contructor(){
        this.players = []

    }
    display(object){
        if(keyDown("RIGHT_ARROW"))
        object.x += 10

       if(keyDown("LEFT_ARROW"))
       object.x -= 10


       if(keyDown("UP_ARROW"))
       object.y -= 10

       if(keyDown("DOWN_ARROW"))
        object.y += 10

        player.x = object.x
        player.y = object.y
    }
    start(){
        button.mousePressed(()=>{
            player.getCount()
            button.hide()
           playerCount += 1
          player.index = playerCount
            console.log(playerCount)
          player.updateCount(playerCount)
          })
    }
    play(){
        console.log("hello")

        this.players = [player1, player2]
        this.display(player1)
        player.update()
    }
}