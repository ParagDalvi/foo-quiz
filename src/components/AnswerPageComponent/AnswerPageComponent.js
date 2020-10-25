import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, Container, Card, Form, FormGroup, Label, Input, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col, Alert } from 'reactstrap';
import { signUp } from '../../firebase/auth';
import { checkIfDocumentExists, updateDoc } from '../../firebase/db';
import _404Component from '../404/_404Component';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import BasicQuizQuestions from '../Questions/basic';
import CustomNavbar from '../Reuse/CustomNavbar';
import AfterAnsweringComponent from './AfterAnsweringComponent';

const AnswerPage = () => {
    let { answerURL } = useParams();

    const [_404, set404] = useState(false);
    const [loading, setLoading] = useState(true);

    const [score, setScore] = useState(null);

    const [data, setData] = useState(null);

    const [mainError, setMainError] = useState(null);
    const [error, setError] = useState(null);
    const [disableButton, setDissableButton] = useState(false);


    const [name, setName] = useState('');
    const [answers, setAnswers] = useState({
        _1: '',
        _2: '',
        _3: '',
        _4: '',
        _5: '',
        _6: '',
        _7: '',
        _8: '',
        _9: '',
        _10: '',
    });

    var quizName, uid;

    const foo = answerURL.split('-');
    quizName = foo[0];
    uid = foo[1];

    useEffect(() => {

        async function init() {
            if (quizName !== 'basic') {
                set404(true);
                setLoading(false);
                return;
            }

            if (data === null) {
                let document = await checkIfDocumentExists(uid, 'basic-quiz');

                if (document === 'Error in loading, please try again') {
                    setMainError(document);
                    setLoading(false);
                    return;
                }

                if (document.exists) {
                    let data = document.data();
                    setData(data);
                } else {
                    set404(true);
                }
            }
            setLoading(false);
        }

        init();

    }, []);


    const handleChange = (e) => {
        const name = e.target.name;

        let temp = answers;
        temp[name] = e.target.value;

        setAnswers(temp);
    }

    const checkIfAllAreSelected = () => {

        if (name.trim() === '' || name === null || name === undefined) {
            return false;
        }

        console.log(answers);

        var foo = 0;
        for (var key in answers) {
            var value = answers[key];
            if (value === '' || value === null || value === undefined) {
                foo = 1;
                break;
            }
        }
        if (foo === 0) return true;
        return false;
    }

    const handleSubmit = async () => {

        setDissableButton(true);

        if (!checkIfAllAreSelected()) {
            setError('Please answer all the questions');
            setDissableButton(false);
            return;
        }


        let marks = 0;
        for (const key in answers) {
            var ans = answers[key];
            var friendsAns = data['answers'][key.replace('_', '')];

            if (friendsAns === ans)
                marks++;
        }

        let friends = data['friends'];
        friends[name] = marks;

        var result = await updateDoc(uid, 'basic-quiz', friends);
        if (result != 'done')
            setMainError('Failed to save your answers, sorry. Please try again.');

        setScore(marks);
        setDissableButton(false);


    }


    if (loading)
        return (
            <div style={{ height: '100%' }}>
                <CustomNavbar />
                <br></br>
                <br></br>
                <div className="d-flex justify-content-center">
                    <Spinner />
                </div>
            </div>
        );

    if (_404)
        return <_404Component />

    if (mainError)
        return <ErrorComponent errorMessage={mainError} />

    if (score)
        return <AfterAnsweringComponent score={score} initialName={name} />



    if (data)
        return (
            <div>
                <CustomNavbar />
                <Container>
                    <br></br>
                    <p>Your friend <strong>{data['name']}</strong> has asked you to take this small quiz to see how well you know them. Enter your name and start guessing what <strong>{data['name']}'s</strong> answers will be..</p>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Name</Label>
                            <Input type="text" name="email" id="name" placeholder="Harry Potter" onChange={(e) => setName(e.target.value)} />
                        </FormGroup>

                        {
                            BasicQuizQuestions.map((foo, i) => {
                                return (
                                    <div key={i}>
                                        <Card>
                                            <CardBody>
                                                <CardTitle>{i + 1}. {foo.question}</CardTitle>
                                                <Row>
                                                    <Col>
                                                        <FormGroup check>
                                                            <Label check>
                                                                <Input type="radio" name={'_' + (i + 1)} value="a" onChange={(e) => handleChange(e)} />
                                                                {foo.a}
                                                            </Label>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                            <Label check>
                                                                <Input type="radio" name={'_' + (i + 1)} value="c" onChange={(e) => handleChange(e)} />
                                                                {foo.c}
                                                            </Label>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col>
                                                        <FormGroup check>
                                                            <Label check>
                                                                <Input type="radio" name={'_' + (i + 1)} value="b" onChange={(e) => handleChange(e)} />
                                                                {foo.b}
                                                            </Label>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                            <Label check>
                                                                <Input type="radio" name={'_' + (i + 1)} value="d" onChange={(e) => handleChange(e)} />
                                                                {foo.d}
                                                            </Label>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                        <br></br>
                                    </div>
                                );
                            })
                        }
                    </Form>

                    {
                        error
                            ?
                            <Alert color="danger">
                                {error}
                            </Alert>
                            :
                            <p></p>
                    }
                    <div className="d-flex justify-content-center mb-4">
                        <Button disabled={disableButton} color="primary" onClick={() => handleSubmit()}>Submit</Button>
                    </div>
                </Container>
            </div>
        );


    //below will be shown 'if at all' there is an error    
    return (
        <div>
            <CustomNavbar />
            <Container>
                <br></br>
                <p>Failed, please try again</p>
            </Container>
        </div>

    );
}

export default AnswerPage;