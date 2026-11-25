class Game {
    constructor() {
       this.startScreen = document.querySelector(".start-screen")
        this.gameScreen = document.querySelector(".game-screen")
        this.winScreen = document.querySelector(".win-screen")
        this.endScreen = document.querySelector(".end-screen")
        this.player = null
        this.winPlatform = null
        this.platforms = []
        this.gameInterval = null
        this.animationInterval = null
    }

startGame() {
    this.startScreen.style.display = "none"
    this.gameScreen.style.display = "flex"
    this.player = new player()

    this.spawnPlatform()
    
    this.gameInterval = setInterval(() =>{
        this.jump()

        this.platforms.forEach((platform) => {
            if (this.collisionDetection(this.player, platform) && this.player.velocityY > 0) {
                this.player.bounce(platform)
                platform.moving = false

            }
        })

        if (this.collisionDetection(this.player, this.winPlatform)) {
            this.win()
            return
        } 

        if (this.player.y > this.gameScreen.clientHeight) {
            this.gameOver()
        }
    }, 1000 / 60)

          this.animationInterval = setInterval(() => {
            this.animate()
        }, 60)

}

jump() {
    this.player.jump()
}

animate() {
    this.platforms.forEach((platform) => {
        if (platform.move) platform.move()
    })
}

spawnPlatform() {
  this.platforms.push(new Platform())

  const rows = 6
  const topGap = 120
  const groundTop = this.gameScreen.clientHeight - 20
  const gap = (groundTop - topGap) / rows

  for (let i = 1; i <= rows; i++){
  this.platforms.push(new FloatingPlatform(groundTop - i * gap))
  }
  this.winPlatform = new WinPlatform()
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

win() {
    clearInterval(this.gameInterval)
    clearInterval(this.animationInterval)
    this.player.remove()
    this.gameScreen.style.display = "none"
    this.winScreen.style.display = "flex"
}

gameOver(){
    clearInterval(this.gameInterval)
    clearInterval(this.animationInterval)
      this.player.remove()  
     this.gameScreen.style.display = "none"
    this.endScreen.style.display = "flex"

}
}