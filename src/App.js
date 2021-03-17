import React, { Component } from 'react'
import QuizzGameContainer from './components/QuizzGame/QuizzGameContainer'
import { connect } from 'react-redux'
import {startGame} from './redux/actions/gameActions'
import {resetPoint} from './redux/actions/puntajeActions'
import './index.css'


class App extends Component {

  resPoint = () => {
    this.props.startGame()
    this.props.resetPoint()
  }

  start = () => {
    if(this.props.puntaje > 0){
      return(
        <div>
        <button onClick={this.resPoint}>Start</button>
        <p>Puntaje anterior: {this.props.puntaje}</p>
        </div>)
        }

    return (<button onClick={this.props.startGame}>Start</button>)
  }

  render() {
    return (
      // <Navbar />
      // <Sidebar />
      <div> 
        {this.props.gameStarted ?
          (<QuizzGameContainer />) :
          (this.start())}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
return {
     ...state,
     gameStarted: state.gameStarted
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      startGame: () => dispatch(startGame()), 
      resetPoint: () => dispatch(resetPoint())
        
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


