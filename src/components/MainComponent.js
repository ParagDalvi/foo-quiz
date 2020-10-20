import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import firebase from '../firebase/firebase.js';
import NoUserHomeComponent from './NoUserHomeComponent/NoUserHomeComponent.js';
import UserHomeComponent from './UserHomeComponent/UserHomeComponent.js';

class MainComponent extends Component {

    constructor() {
        super();
        this.state = {
            user: null,
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(function (user) {
            this.setState({
                user: user,
            });

        }.bind(this));
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/">
                        {this.state.user ? <UserHomeComponent user={this.state.user} /> : <NoUserHomeComponent />}
                    </Route>
                </Switch>
            </Router>
        );
    }
}


export default MainComponent;