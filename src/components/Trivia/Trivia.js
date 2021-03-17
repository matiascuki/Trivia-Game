import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addPoint } from '../../redux/actions/puntajeActions';
import Puntaje from '../Puntaje/Puntaje'

class Trivia extends Component {

    handleClick = (item, resCorrecta, e) => {
        if (item === resCorrecta) {
            console.log('ganaste')
            this.props.addPoint();
            this.props.render()
        } else {
            console.log('perdiste')
            this.props.render()
        }
    }





    render() {
        const { pregunta, respuestas, resCorrecta,puntaje } = this.props
        return (
            <div>
                <h1>{pregunta}</h1>
                <ul>
                    {respuestas.map(res => {

                        return (
                            <li key={res}
                                onClick={(e) => this.handleClick(res, resCorrecta, e)}>
                                {res}
                            </li>)
                    })
                    }
                </ul>
                <Puntaje point={puntaje}/>
                
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
       puntaje: state.puntaje
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPoint: () => dispatch(addPoint()),   
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Trivia);


