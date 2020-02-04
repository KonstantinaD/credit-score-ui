import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Input, Label, Media, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from './Header';
import Score from './Score';
import Footer from './Footer';

class Name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                name: ''
            },
            score: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            item: Object.assign({}, this.state.item, { name: event.target.value })
        });
    }


    handleSubmit(event) {
        const regex = /^([a-zA-Z]+[ .'-]?)+([ ,]?)+[a-zA-Z]+\.?$/;
        event.preventDefault()

        if (this.state.item.name === '') {
            this.setState({
                score: null
            });
            alert('Please enter a name');
            return;
        }

        if (!this.state.item.name.match(regex)) {
            this.setState({
                score: null
            });
            alert('Please enter a valid name');
            return;
        }

        fetch('/score', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.item)
        })
            .then(response => response.json())
            .then(data =>
                this.setState({
                    score: data
                })
            );
    }

    render() {

        return (
            <div>
                <Header />
                <Container className="mainItem" fluid>
                    <Media heading>
                        <b>Enter your name to see your credit score</b>
                    </Media>
                    <br />
                    <Form onSubmit={this.handleSubmit}>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <FormGroup>
                                <Label for="name">Name<span style={{ color: 'red' }}> *</span></Label>
                                <Input type="text" name="name" id="name" value={this.state.item.name || ''}
                                    onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <FormGroup>
                            <Button color="primary" type="submit">Get Score</Button>{' '}
                        </FormGroup>
                    </Form>
                </Container>
                <Score passedInScore={this.state.score} />
                <Footer />
            </div>
        );
    }
}

export default Name;