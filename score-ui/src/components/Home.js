import React, { Component } from 'react';
import { Button, Container, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

class Home extends Component {
    render() {

        return (
            <div>
                <Header />
                <Container fluid>
                    <Jumbotron>
                        <h1 className="display-3">Welcome to Credita!</h1>
                        <p className="lead">Enter your name and see your projected credit score immediately. It is free!</p>
                        <hr className="my-2" />
                        <p>This will help see you how likely banks and other lending institutions are to give you that credit card, personal loan or mortgage you need!</p>
                        <div className="float-right">
                            <Button color="primary" tag={Link} to="/enter-name">Dive In</Button>
                        </div>
                    </Jumbotron>
                </Container>
                <div className="footerPadding"></div>
                <Footer />
            </div>
        );
    }
}

export default Home;
