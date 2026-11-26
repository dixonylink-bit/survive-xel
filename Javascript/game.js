class Game {
    constructor() {
       this.startScreen = document.querySelector(".start-screen")
        this.gameScreen = document.querySelector(".game-screen")
        this.winScreen = document.querySelector(".win-screen")
        this.endScreen = document.querySelector(".end-screen")
        this.player = null
        this.movingPlatform = null
        this.winPlatform = null
        this.platforms = []
        this.gameInterval = null
        this.animationInterval = null
    }

startGame() {
    this.startScreen.style.display = "none"
    this.winScreen.style.display = "none"
    this.endScreen.style.display = "none"
    this.gameScreen.style.display = "flex"
    this.changeMusic(gameMusic)
    this.player = new player()

    this.spawnPlatform()
    
    this.gameInterval = setInterval(() =>{
        this.jump()

        this.platforms.forEach((platform) => {
            if (this.collisionDetection(this.player, platform) && this.player.velocityY > 0) {
                this.player.bounce(platform)

                if( this.movingPlatform && this.movingPlatform !== platform){
                    this.movingPlatform.moving = true
                }

                platform.moving = false
                this.movingPlatform = platform

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

  const rows = 5
  const topGap = 100
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
    this.platforms.forEach((platform) => platform.element.remove())
    this.winPlatform.element.remove()
    this.changeMusic(winMusic)
    this.gameScreen.style.display = "none"
    this.winScreen.style.display = "flex"
}

gameOver(){
    clearInterval(this.gameInterval)
    clearInterval(this.animationInterval)
    this.player.remove()  
    this.platforms.forEach((platform) => platform.element.remove())
    this.winPlatform.element.remove()
    this.gameScreen.style.display = "none"
    this.endScreen.style.display = "flex"
    this.changeMusic(overMusic)

}

changeMusic(newMusic) {
    if (currentMusic === newMusic) return
    
    const wasPlaying = !currentMusic.paused
    currentMusic.pause()
    currentMusic.currentTime = 0
    currentMusic = newMusic

    if (wasPlaying) currentMusic.play()
}
}