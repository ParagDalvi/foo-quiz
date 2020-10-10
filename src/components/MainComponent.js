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

    render() {
        if (this.state.user)
            return <p>logged in</p>
        return <NoUserHomeComponent />
    }
}


export default MainComponent;