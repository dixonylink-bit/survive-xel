class winPlatform {
    constructor() {
           this.gameScreen = document.querySelector(".game-screen")
        this.element = document.createElement("div")
        this.width = 80
        this.height = 10
        this.x = 500
        this.y = 50
        this.image = "../assets/yester-30-matt-powder-coating-20kg-box--1396-p.jpg"

        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`
        this.element.style.backgroundImage = `url("${this.image}")`

        this.gameScreen.appendChild(this.element)
    }

}