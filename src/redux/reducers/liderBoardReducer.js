import { SHOW_BOARD, ADD_NEW_LIDER} from '../actions/liderBoardActions';
import '../actions/liderBoardActions'


const initialState = {
    cantMostrar: 5,
    userPoint: {
        user: 'AAA',
        numRank: '',
        point: 0
    },
    getUsersPoints:
    function(){
        let array = [];

        for(let i = 0; i < this.cantMostrar; i++){
            array.push(this.userPoint)
        }

        return array
    }
}
initialState.usersPoints = initialState.getUsersPoints()



function liderBoard(state = initialState, action){
    switch(action.type){

        case SHOW_BOARD:

        state.usersPoints =
         state.usersPoints
            .map((user, index) => {
                user.numRank = index + 1
                return user
            })

        return state

        case ADD_NEW_LIDER:
        let newUser = action.payload
        let position = newUser.numRank
        newUser.numRank = action.payload.numRank + 1

        state.usersPoints
            .splice(position, 0, newUser);
        
        state.usersPoints.pop()

        return state
          
        default:
            return state
    }
}


export default liderBoard