import React, { Component } from 'react';
import Preguntas from '../Preguntas/Preguntas.js'
class QuizzGame extends Component {

    render() {
        return (
            <div>
                {this.props.isFetching ?
                    (<Preguntas trivia={this.props.trivia} />) :
                    (<h1>Cargando..</h1>)}
            </div>
        )
    }
}

export default QuizzGame