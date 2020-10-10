import {DIRECTIONS, OBJECT_TYPE} from './setup.js'

//pimitive ghodt move func

export function randomMovement(position, direction,objectExist){
    let dir = direction
    let nextMovePos = position + dir.movement
    //create a direction array object keys
    const keys = Object.keys(DIRECTIONS)

    while(objectExist(nextMovePos, OBJECT_TYPE.WALL) || objectExist(nextMovePos, OBJECT_TYPE.GHOST)){
        //get a random key from the array
        const key = keys[Math.floor(Math.random() * keys.length)]
        //set the next move
        dir = DIRECTIONS[key]
        nextMovePos = position + dir.movement
    }
    return {nextMovePos, direction: dir}
}