import React, { useEffect, useState } from 'react';
import { Card, CardText, Container, CardBody, CardTitle, CardSubtitle, FormGroup, Label, Input, Row, Col, Button, Alert } from 'reactstrap';
import { checkIfDocumentExists, writeNewDoc } from '../../firebase/db';
import CustomCard from '../Reuse/CustoCard';
import CustomNavbar from '../Reuse/CustomNavbar';
import LinkSharing from './LinkSharingComponent';
import BasicQuizQuestions from '../Questions/basic.js';
import CustomFooter from '../Reuse/CustomFooter';

const BasicQuiz = ({ user }) => {

    var answers = {
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
    }

    const [error, setError] = useState('');
    const [disableButton, setDissableButton] = useState(false);
    const [showSharingPage, setShowSharingPage] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        async function init() {
            return await checkIfDocumentExists(user.uid, 'basic-quiz');
        }

        init().then((doc) => {
            if (!data && doc.exists) {
                setData(doc.data());
                setShowSharingPage(true);
            }
        });

    });

    const handleChange = (e) => {
        const name = e.target.name;
        answers[name] = e.target.value;
    }

    const checkIfAllAreSelected = () => {
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

        var result = await writeNewDoc(user.uid, 'basic-quiz', answers, user.displayName);
        if (result !== 'done')
            setError('Failed to save your answers, sorry :(');

        setDissableButton(false);
        setShowSharingPage(true);
    }


    if (showSharingPage) {
        return <LinkSharing name="basic" user={user} data={data} />
    }

    return (
        <div>
            <CustomNavbar />
            <Container>
                <br></br>
                <p>Below are a few basic questions, answer them and later ask your friends to guess your answers &#129305;</p>
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
                    <Button disabled={disableButton} color="primary" onClick={() => handleSubmit()}>Save</Button>
                </div>

            </Container>

            <CustomFooter />
        </div>
    );
}

export default BasicQuiz;