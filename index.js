console.log('Working!');

import {LEVEL, OBJECT_TYPE} from './setup.js'

import GameBoard from './GameBoard.js' 

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

}

function startGame(){
    
}