export const SHOW_BOARD = 'SHOW_BOARD';
export const ADD_NEW_LIDER = 'ADD_NEW_LIDER'


export let showBoard = () => {
    return {
        type: SHOW_BOARD
    }
}

export let addNewLider = (user,numRank,point) => {
    return {
        type: ADD_NEW_LIDER,
        payload:{
            user,
            numRank,
            point
        }
    }
}

