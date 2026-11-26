class Platform {
    constructor() {
           this.gameScreen = document.querySelector(".game-screen")
        this.element = document.createElement("div")
        this.width = 80
        this.height = 30
        this.x = 80
        this.y = this.gameScreen.clientHeight - 30
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

}