import React, { Component } from 'react';
import { Container, Media } from 'reactstrap';
import '../App.css';

class Score extends Component {
    render() {
        const score = this.props.passedInScore;
        const displayText = <b>{score !== null ? "Your credit score is:" : ''}</b>;

        return (
            <Container className="mainItem" fluid>
                <Media heading>
                    <span>{displayText}</span>
                    <br />
                    <b>{score}</b>
                </Media>
            </Container>
        );
    }
}

export default Score;
