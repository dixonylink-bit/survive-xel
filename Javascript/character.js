class player {
    constructor() {
        this.gameScreen = document.querySelector(".game-screen")
        this.element = document.createElement("div")
        this.width = 10
        this.height = 10
        this.x = 180
        this.groundY = this.gameScreen.clientHeight - this.height
        this.y = this.groundY
        this.image = "../assets/blackbox (1).jpeg"
        
        this.velocityY = 0
        this.gravity = 0.9
        this.jumpStrength = -15
        this.speed = 18

        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.backgroundImage = `url("${this.image}")`
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