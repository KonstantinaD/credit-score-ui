import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const imgStyle = {
            maxHeight: 150,
            maxWidth: 100
        };

        return (
            <Navbar color="dark" dark expand="md">
                <Nav tag={Link} to="/">
                    <img style={imgStyle} src='https://i.imgur.com/HosOSxk.png' alt='Credita Home' />
                </Nav>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink
                                href="/enter-name">Get Your Credit Score
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
