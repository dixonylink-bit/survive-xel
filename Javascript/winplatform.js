class WinPlatform {
    constructor() {
           this.gameScreen = document.querySelector(".game-screen")
        this.element = document.createElement("div")
        this.width = 90
        this.height = 76
        this.x = 500
        this.y = 40
        this.image = "../assets/Untitled_Artwork.png"

        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`
        this.element.style.backgroundImage = `url("${this.image}")`
        this.element.style.backgroundSize = "contain"
        this.element.style.backgroundRepeat= "no-repeat"
        this.element.style.backgroundPosition = "center"
        this.element.style.imageRendering = "pixelated"

        this.gameScreen.appendChild(this.element)
    }

}