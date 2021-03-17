import React, { Component } from 'react';

class Puntaje extends Component {

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.point !== this.props.point) {
            return this.props.point
        }
    }

    render() {
        return (
            <div>
                <p>
                    Puntaje: {this.props.point}
                </p>
            </div>
        )
    }
}



export default Puntaje