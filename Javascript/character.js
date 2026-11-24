class player {
    constructor() {
        this.gameScreen = document.querySelector(".game-screen")
        this.element = document.createElement("div")
        this.width = 30
        this.height = 50
        this.x = 300
        this.groundY = this.gameScreen.clientHeight - this.height
        this.y = this.groundY
        this.image = "../assets/blackbox (1).jpeg"
        
        this.velocityY = 0
        this.gravity = 0.6
        this.jumpStrength = -22
        this.speed = 10

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