import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import firebase from '../firebase/firebase.js';
import AnswerPage from './AnswerPageComponent/AnswerPageComponent.js';
import NoUserHomeComponent from './NoUserHomeComponent/NoUserHomeComponent.js';
import BasicQuiz from './Quizes/BasicQuizComponent.js';
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

        if (!this.state.user)
            return (
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <NoUserHomeComponent />
                        </Route>
                        <Route exact path="/answer/:answerURL">
                            <AnswerPage />
                        </Route>
                    </Switch>
                </Router>
            );

        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <UserHomeComponent user={this.state.user} />
                    </Route>
                    <Route exact path="/basic">
                        <BasicQuiz user={this.state.user} />
                    </Route>
                    <Route exact path="/answer/:answerURL">
                        <AnswerPage />
                    </Route>
                </Switch>
            </Router>
        );
    }
}


export default MainComponent;