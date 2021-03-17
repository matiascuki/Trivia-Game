import { SUM_POINT, RESET_POINT } from '../actions/puntajeActions'

const initialState = 0;

function puntaje(state = initialState, action){
    switch(action.type){
        case RESET_POINT:
            state = 0;
            return state;
        case SUM_POINT:
            return state + 1;
        default:
            return state;
    }
}

export default puntaje;