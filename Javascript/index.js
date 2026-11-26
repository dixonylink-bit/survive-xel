const startScreen = document.querySelector(".start-screen")
const gameScreen = document.querySelector(".game-screen")
const winScreen = document.querySelector(".win-screen")
const endScreen = document.querySelector(".end-screen")
const startButton = document.querySelector(".start-btn")
const replayButton = document.querySelector(".replay-btn")
const restartButton = document.querySelector(".restart-btn")

let game

window.addEventListener("load", () => {
startButton.addEventListener("click", () => {
    game = new Game()
    game.startGame()
})
document.addEventListener("keydown", (e) =>{
    console.log(e.key)
    
    if(e.key === "ArrowRight"){
        game.player.moveRight()
    }
    if(e.key === "ArrowLeft"){
        game.player.moveLeft()
    }
})

replayButton.addEventListener("click", () => {
    game = new Game()
    game.startGame()
})

restartButton.addEventListener("click", () => {
    game = new Game()
    game.startGame()
})

}) 