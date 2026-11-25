class player {
    constructor() {
        this.gameScreen = document.querySelector(".game-screen")
        this.element = document.createElement("div")
        this.width = 30
        this.height = 20
        this.x = 180
        this.y = 460
        this.image = "../assets/fish.png"
        
        this.velocityY = 0
        this.gravity = 0.9
        this.jumpStrength = -15
        this.speed = 18

        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.backgroundImage = `url("${this.image}")`
        this.element.style.backgroundSize = "150%"
        this.element.style.backgroundRepeat= "no-repeat"
        this.element.style.backgroundPosition = "center"
        this.element.style.imageRendering = "pixelated"
        this.updatePosition()
    

        this.gameScreen.appendChild(this.element)
    }

    updatePosition() {
         this.element.style.top = `${this.y}px`
         this.element.style.left = `${this.x}px`
    }

    jump() {
        this.velocityY += this.gravity
        this.y += this.velocityY
        this.updatePosition()
    }

    bounce(platform) {
        this.y = platform.y - this.height
        this.velocityY = this.jumpStrength
        this.updatePosition()

    }

    bounce(floatingPlatform) {
        this.y = floatingPlatform.y - this.height
        this.velocityY = this.jumpStrength
        this.updatePosition()

    }

     remove() {
            this.element.remove()
        }

    moveRight() {
        if (this.x + this.speed <= this.gameScreen.clientWidth - this.width){
        this.x += this.speed
        this.element.style.left = `${this.x}px`
    }
    }

    moveLeft() {
       this.x = Math.max(0, this.x - this.speed)
        this.element.style.left = `${this.x}px`
    }
    }