import React, { Component } from 'react';
import { connect } from 'react-redux';
import LiderBoard from '../LiderBoard/LiderBoard';

import {endGame} from '../../redux/actions/gameActions'

import Trivia from '../Trivia/Trivia'

class Trivias extends Component {

    // indexPregunta, se utiliza p/iterar lista de preguntas q llega de props
    state = {
        pasarSig: false,
        indexPregunta: 0,
        resCorrecta: '',
        puntaje: 0
    }



    sigPregunta = () => {
        this.setState({
            indexPregunta: this.state.indexPregunta + 1,
            pasarSig: true
        })
    }

    jugarDeNuevo = () =>{
        this.props.endGame()
    }

    dibujarTrivia = (trivia) => {
        //agarra la pregunta segun el index actual
        if (trivia) {
            return (
                < Trivia
                    pregunta={trivia.pregunta}
                    resCorrecta={trivia.respuestaCorrecta}
                    respuestas={trivia.respuestas}
                    id={trivia.id}
                    puntaje={this.state.puntaje}
                    //este render, es una funcion q se configura desde este componente
                    // pero se ejecuta en el componente hijo
                    render={() => (this.sigPregunta())}
                />)
        }

        return (<div>
            <h1>Fin del juego</h1>
                <p>Puntaje Total: {this.props.puntaje}</p> 
                <button onClick= {this.jugarDeNuevo} > JUGAR DE NUEVO </button>
                <LiderBoard point={this.props.puntaje}/>  
            </div>)
          
    }
    

    componentDidUpdate(prevProps, prevState) {
        const index = this.state.indexPregunta

        if (prevState.indexPregunta !== index) {
            return this.dibujarTrivia(this.props.preguntas[index])
        }
    }

    render() {
        console.log(this.props.preguntas.length - 1)
        const index = this.state.indexPregunta
        const pregunta = this.props.preguntas[index]
        console.log(index)
        console.log(this.state.puntaje)

        return (
            this.dibujarTrivia(pregunta)
            
        )
        

    }
    
}

const mapStateToProps = (state) => {
    return {
        ...state,
       gamesStarted: state.gamesStarted,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        endGame: () => dispatch(endGame())
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Trivias);
