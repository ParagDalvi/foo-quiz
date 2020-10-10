import React, { Component } from 'react';
import firebase from '../firebase/firebase.js';
import NoUserHomeComponent from './NoUserHomeComponent/NoUserHomeComponent.js';

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

    handleLogin() {
        firebase.auth().signInAnonymously().then((cred) => {
            console.log('then done/n ');
            console.log(cred);
        });
    }



    render() {
        console.log(this.state.user);
        if (this.state.user)
            return <button onClick={this.handleLogin}>login</button>
        return <NoUserHomeComponent />
    }
}


export default MainComponent;