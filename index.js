console.log('Working!');

import {LEVEL, OBJECT_TYPE} from './setup.js'

import GameBoard from './GameBoard.js'
import Pacman from './Pacman.js'

const gameGrid = document.querySelector("#game")
const scoreTable = document.querySelector("#score")
const StartButton = document.querySelector("#startButton")

const POWER_PILL_TIME = 10000
const GLOBAL_SPEED = 80
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL)

let score = 0
let timer = null
let gameWin = false
let powerPillActive = false
let powerPillTimer = null

function GameOver(pacman, grid ){

}
function checkCollision (pacman , ghosts){} 

function GameLoop(pacman, ghosts){
    gameBoard.moveCharacter(pacman)
}

function startGame(){
    gameWin = false
    powerPillActive = false

    StartButton.classList.add('hide')

    gameBoard.createGrid(LEVEL)

    const pacman = new Pacman(2, 287)
    gameBoard.addObject(287, [OBJECT_TYPE.PACMAN])
    document.addEventListener('keydown', e => 
    pacman.handleKeyInput(e, gameBoard.objectExist)
    )

    timer = setInterval(() => GameLoop(pacman), GLOBAL_SPEED)
}

//init Game

StartButton.addEventListener('click', startGame)