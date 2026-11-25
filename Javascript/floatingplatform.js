class FloatingPlatform {
    constructor(y) {
        this.gameScreen = document.querySelector(".game-screen")
        this.element = document.createElement("div")
        this.width = 70
        this.height = 10
        this.x = Math.floor(Math.random() * (this.gameScreen.clientWidth - this.width))
        this.y = y
        const direction = Math.random() < 0.5 ? -1 : 1 
        this.speed = 5 * direction
        this.moving = true
        this.image = "../assets/yester-30-matt-powder-coating-20kg-box--1396-p.jpg"

        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`
        this.element.style.backgroundImage = `url("${this.image}")`

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