const startScreen = document.querySelector(".start-screen")
const gameScreen = document.querySelector(".game-screen")
const winScreen = document.querySelector(".win-screen")
const endScreen = document.querySelector(".end-screen")
const startButton = document.querySelector(".start-btn")
const replayButton = document.querySelector(".replay-btn")
const restartButton = document.querySelector(".restart-btn")
const musicButton = document.querySelector(".music-btn")

const gameMusic = new Audio("./music/01-Beans on Toes.ogg");
gameMusic.loop = true;
gameMusic.volume = 0.2;

const overMusic = new Audio("./music/GameOver.wav");
overMusic.volume = 0.2;

const winMusic = new Audio("./music/crowd_small_chil_ec049202_9klCwI6.mp3");
winMusic.volume = 0.1;

let currentMusic = gameMusic

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


musicButton.addEventListener("click", () => {
    if (currentMusic.paused) {
        currentMusic.play();
    } else {
        currentMusic.pause()
    }
    musicButton.blur()
})
}) 
