import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const HeroComponent = ({toggleModal}) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">FOO-Quiz</h1>
                    <p className="lead">Create foo quizs and share it with your friends, and get to know who knows you better.</p>
                    <p className="lead">'FOO' is just a placeholder and not the naughty thing you think of.</p>
                    <hr className="my-2" />
                    <p className="lead">Now get started and create a Foo quiz</p>
                    <p className="led">
                        <Button color="primary" onClick={toggleModal}>Create Quiz</Button>
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default HeroComponent;