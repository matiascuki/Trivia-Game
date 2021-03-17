import { combineReducers } from 'redux';
import puntaje from './puntajeReducer'
import gameStarted from './gameReducer'
import liderBoard from './liderBoardReducer'


export default combineReducers({
    puntaje,
    gameStarted,
    liderBoard
});