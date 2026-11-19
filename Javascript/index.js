const startScreen = document.querySelector(".start-screen")
const gameScreen = document.querySelector(".game-screen")
const endScreen = document.querySelector(".end-screen")
const startButton = document.querySelector(".start-btn")

let game

window.addEventListener("load", () => {
startButton.addEventListener("click", () => {
    game = new Game()
    game.startGame()
})
document.addEventListener("keydown", (e) =>{
    console.log(e.key)
})

}) 