export const START_GAME = 'START_GAME'

export const END_GAME = 'END_GAME'

export let startGame = () => {
    return {
        type: START_GAME
    }
}

export let endGame = () => {
    return {
        type: END_GAME
    }
}