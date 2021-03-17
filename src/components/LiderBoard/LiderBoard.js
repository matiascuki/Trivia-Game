import React,{ Component } from "react";
import { connect } from 'react-redux';

import {showBoard, addNewLider } from '../../redux/actions/liderBoardActions'


class LiderBoard extends Component{

    state = {
        change: false
    }

    componentDidMount(){
        const { liderBoard , point, addNewLider, showBoard } = this.props

        let isANewLider = liderBoard.usersPoints
            .some( user => point > user.point )

        if(isANewLider){
            let user = prompt('Felicidades! \n Logro un nuevo rank \n Ingrese su nombre:');
            let rank = liderBoard.usersPoints
                .findIndex(user => point > user.point)
            
            addNewLider(user,rank,point);
            showBoard()
            this.setState({
                change: true
            })
        }
    }

    shouldComponentUpdate(prevProps, prevState){
        const {change} = this.state

        if(prevState.change !== change){
           
            return true
        }

        return false
    }

    showUpdatedBoard = (usersPoints) => {
        return(
            usersPoints.map( (usr,index) =>{
                return(
                <li key=
                {`${index} - ${usr.user} - ${usr.point}`}>
                   N*{index + 1} - {usr.user} - {usr.point}
                </li>)
                })
        )
    }


    render(){
        const { usersPoints } = this.props.liderBoard
        return(
            <div>
            <ul>
                {this.showUpdatedBoard(usersPoints)}
            </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        liderBoard: state.liderBoard
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewLider: (user,numRank,point) => dispatch(addNewLider(user,numRank,point)),
        showBoard: () => dispatch(showBoard())
    }

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LiderBoard);
