import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Name from './components/Name';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/enter-name' component={Name} />
                    <Route exact path='/about-us' component={AboutUs} />
                    <Route exact path='/contact-us' component={ContactUs} />
                </Switch>
            </Router>
        )
    }
}

export default App;