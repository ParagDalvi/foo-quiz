import React, { Component } from 'react';
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
        // console.log(this.state.user?.displayName);
        if (this.state.user)
            return <UserHomeComponent user={this.state.user} />
        return <NoUserHomeComponent />


        // return <UserHomeComponent user={this.state.user} />
        // return <NoUserHomeComponent/>
    }
}


export default MainComponent;