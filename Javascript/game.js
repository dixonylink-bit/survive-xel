class Game {
    constructor() {
        this.gameScreen = document.querySelector(".game-screen")
        this.endScreen = document.querySelector(".end-screen")
        this.startScreen = document.querySelector(".start-screen")
        this.player = null
        this.gameInterval = null
        this.platforms = []
        this.floatingPlatforms = []
    }

startGame() {
    this.startScreen.style.display = "none"
    this.gameScreen.style.display = "flex"
    this.player = new player()

    this.spawnPlatform()
    
    this.gameInterval = setInterval(() =>{
        this.jump()

        this.platforms.forEach((platform, floatingPlatform) => {
            if (this.collisionDetection(this.player, platform) && this.player.velocityY > 0) {
                this.player.bounce(platform, floatingPlatform)

            }
        })

        if (this.player.y > this.gameScreen.clientHeight) {
            this.gameOver()
        }
    }, 1000 / 60)


}

jump() {
    this.player.jump()
}

spawnPlatform() {
  this.platforms.push(new Platform())
  this.platforms.push(new FloatingPlatform())
}

collisionDetection(player, platform) {
    if(
        player.x + player.width < platform.x ||
        player.x > platform.x + platform.width ||
        player.y + player.height < platform.y ||
        player.y > platform.y + platform.height) {
         return false   
        }
        return true
}


gameOver(){
    clearInterval(this.gameInterval)
      this.player.remove()  
     this.gameScreen.style.display = "none"
    this.endScreen.style.display = "flex"

}
}