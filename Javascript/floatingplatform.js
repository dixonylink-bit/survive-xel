class FloatingPlatform {
    constructor(y) {
        this.gameScreen = document.querySelector(".game-screen")
        this.element = document.createElement("div")
        this.width = 80
        this.height = 28
        this.x = Math.floor(Math.random() * (this.gameScreen.clientWidth - this.width))
        this.y = y
        const direction = Math.random() < 0.5 ? -1 : 1 
        this.speed = 5 * direction
        this.moving = true
        this.image = "../assets/pan.png"

        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`
        this.element.style.backgroundImage = `url("${this.image}")`
        this.element.style.backgroundSize = "80%"
        this.element.style.backgroundRepeat= "no-repeat"
        this.element.style.backgroundPosition = "center"
        this.element.style.imageRendering = "pixelated"

        this.gameScreen.appendChild(this.element)
    }

    move() {
        if (!this.moving) return
        this.x += this.speed
        
        if (this.x + this.width >= this.gameScreen.clientWidth) {
            this.x = this.gameScreen.clientWidth - this.width
            this.speed = -this.speed
        }

        if (this.x <= 0){
            this.x = 0
            this.speed = -this.speed
        }
         this.element.style.left = `${this.x}px`
    }

}