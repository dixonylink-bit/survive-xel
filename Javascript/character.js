class player {
    constructor() {
        this.gameScreen = document.querySelector(".game-screen")
        this.element = document.createElement("div")
        this.x = 50
        this.y = 50
        this.width = 30
        this.height = 30
        this.image = "../assets/blackbox (1).jpeg"

        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.top = `${this.y}%`
        this.element.style.left = `${this.x}%`
        this.element.style.backgroundImage = `url("${this.image}")`

        this.gameScreen.appendChild(this.element)
    }

    moveUp(){
        if(this.y >= 1){
        this.y -= 1
        this.element.style.top = `${this.y}%`
    }
    }

    moveDown() {
        if (this.y <= 94){
        this.y += 1
         this.element.style.top = `${this.y}%`
        }
    }

    moveRight() {
        if (this.x <= 96){
        this.x += 1
        this.element.style.left = `${this.x}%`
    }
    }

    moveLeft() {
        if(this.x >= 1){
        this.x -= 1
        this.element.style.left = `${this.x}%`
    }
    }
}