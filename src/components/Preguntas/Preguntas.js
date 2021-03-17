import React, { Component } from 'react'
import Trivias from '../Trivias/Trivias'

let triviasMap = (listObj) => {
    let trivias = listObj.map((obj, index) => {
        let trivia = {};
        let arrayRespuestas = obj.incorrect_answers;
        trivia.id = index + " - " + obj.question;
        trivia.pregunta = obj.question;
        trivia.respuestaCorrecta = obj.correct_answer;
        trivia.respuestas = shuffle(arrayRespuestas.concat(trivia.respuestaCorrecta))

        return trivia;
    })

    return trivias;
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array
}


class Preguntas extends Component {

    state = {
        preguntas: triviasMap(this.props.trivia),
    }

    render() {
        // map this.state.preguntas... 
        console.log(this.state.preguntas)
        return (
            <Trivias
                preguntas={this.state.preguntas}
            />
        )
    }
}

export default Preguntas


