import React, { useState } from 'react';
import { Container, Alert, Card, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import CustomNavbar from '../Reuse/CustomNavbar';
import BasicQuizQuestions from '../Questions/basic';
import { signUp } from '../../firebase/auth';
import { useHistory } from 'react-router-dom';

const AfterAnsweringComponent = ({ score, initialName }) => {

    const [name, setName] = useState(initialName);
    const [disableButton, setDisableButton] = useState(false);
    const [error, setError] = useState(null);

    let history = useHistory();

    const newUserSignUp = async () => {
        setDisableButton(true);
        if (name.trim().length > 0 && name.trim().length < 30) {
            signUp(name).then(() => {
                history.push('/', { name });
            }).catch((error) => {
                setError('Failed to sign you up, please try again.');
            });
        } else {
            setError('Please enter a valid name.');
        }
        setDisableButton(false);
    }


    return (
        <div>
            <CustomNavbar />
            <Container>
                <br></br>
                <h6>Thank you {name}, you got <strong>{score} correct out of {BasicQuizQuestions.length}.</strong></h6>
                {
                    score > 7 ?
                        <Alert color="primary">
                            {score}/{BasicQuizQuestions.length} Great! &#10084;
                        </Alert>
                        : score > 5 ?
                            <Alert color="success">
                                {score}/{BasicQuizQuestions.length} Noice! &#128406;
                            </Alert>
                            :
                            <Alert color="warning">
                                {score}/{BasicQuizQuestions.length} Hmm, did not expect this &#128530;
                            </Alert>
                }
                <br></br>
                <p>Want to create one for youreself? Just enter your name and get started..</p>
                <Card>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Full Name</Label>
                                <Input type="text" name="email" id="name" placeholder="Tony Stark" value={name} onChange={(e) => setName(e.target.value)} />
                            </FormGroup>
                            {
                                error ?
                                    <Alert color="danger">
                                        {error}
                                    </Alert>
                                    :
                                    <div></div>
                            }
                            <Button disabled={disableButton} color="primary" onClick={() => newUserSignUp()}>Start</Button>
                        </Form>
                    </CardBody>
                </Card>


            </Container>
        </div>
    );
}

export default AfterAnsweringComponent;