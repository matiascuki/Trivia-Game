import { START_GAME, END_GAME } from '../actions/gameActions'

const initialState = false

const gameStarted = (state = initialState, action) => {
    switch(action.type){
        case START_GAME:
            state = true
        return state

        case END_GAME:
            state = false
        return state

        default:
        return state
    }

}

export default gameStarted