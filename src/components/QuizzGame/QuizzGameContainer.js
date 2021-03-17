import React, { Component } from 'react'
import QuizzGame from './QuizzGame'

class QuizzGameContainer extends Component {
    state = {
        trivias: {},
        isFetching: false
    }



    componentDidMount() {
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple'

        fetch(url)
            .then(res => res.json())
            .then(data => {
                const res = Object.values(data);
                this.setState({
                    trivias: res[1],
                    isFetching: true
                })
            })
    }


    render() {
        return (
            <QuizzGame
                trivia={this.state.trivias}
                isFetching={this.state.isFetching}
            />
        )
    }
}


export default QuizzGameContainer