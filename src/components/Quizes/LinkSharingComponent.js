import React from 'react';
import { Button, Card, CardBody, Col, Container, Input, Row, Alert } from 'reactstrap';
import CustomNavbar from '../Reuse/CustomNavbar';
import { FaCopy, FaWhatsapp } from 'react-icons/fa';
import BasicQuizQuestions from '../Questions/basic';
import CustomFooter from '../Reuse/CustomFooter';

const LinkSharing = ({ name, user, data }) => {

    const copyValue = 'Hey there, I challenge you to take this test. This test has a few simple questions, your task is to guess what my answer would have to the same question. This way I will know, how well you know me? Follow this link to take the quiz foo-quiz.web.app/answer/' + name + '-' + user.uid;

    return (
        <div>
            <CustomNavbar />
            <Container>

                <br></br>

                <ListOfScores data={data} />

                <br></br>

                <Card>
                    <CardBody>
                        <p>Thanks for saving your answers, your answers are saved in our database. Now share the below link with your beloved people to see who knows you better.</p>
                        <p>Share the below message.</p>
                        <div style={{ display: 'flex' }}>
                            <Input style={{ flex: '1' }} type="textarea" disabled value={copyValue} />
                            <Button color="primary" onClick={() => { navigator.clipboard.writeText(copyValue) }} className="ml-1"><FaCopy /></Button>
                        </div>

                        <br></br>

                        <div className="d-flex justify-content-center mb-4">
                            <Button color="success" onClick={() => window.open('https://wa.me/?text=' + copyValue)}><FaWhatsapp /></Button>
                            <Button className="ml-1" color="primary" onClick={() => { navigator.clipboard.writeText(copyValue) }}><FaCopy /></Button>
                        </div>

                        <p>Simple link for you need to share.</p>
                        <div style={{ display: 'flex' }}>
                            <Input style={{ flex: '1' }} type="text" disabled value={'foo-quiz.web.app/answer/' + name + '-' + user.uid} />
                            <Button color="primary" className="ml-1" onClick={() => { navigator.clipboard.writeText('foo-quiz.web.app/answer/' + name + '-' + user.uid) }}><FaCopy /></Button>
                        </div>

                        <br></br>

                        <div className="d-flex justify-content-center mb-4">
                            <Button color="success" onClick={() => window.open('https://wa.me/?text=https://foo-quiz.web.app/answer/' + name + '-' + user.uid)}><FaWhatsapp /></Button>
                            <Button className="ml-1" color="primary" onClick={() => { navigator.clipboard.writeText('foo-quiz.web.app/answer/' + name + '-' + user.uid) }}><FaCopy /></Button>
                        </div>

                    </CardBody>
                </Card>
            </Container>
            <CustomFooter />
        </div>
    );
}


const ListOfScores = ({ data }) => {

    return (
        <div >

            <h6>Below will the scores of the people who have taken your quiz.</h6>
            <p><small>You need to share the below link for people to take the quiz. Later come back to same link and referesh to see all the results.</small></p>
            {
                Object.entries(data['friends']).map(([key, value], i) => {
                    return (
                        <div>
                            {
                                value > 7 ?
                                    <Alert color="primary">
                                        {i + 1}. {key} scored {value}/{BasicQuizQuestions.length} &#10084;
                                </Alert>
                                    : value > 5 ?
                                        <Alert color="success">
                                            {i + 1}. {key} scored {value}/{BasicQuizQuestions.length} &#128406;
                                    </Alert>
                                        :
                                        <Alert color="warning">
                                            {i + 1}. {key} scored {value}/{BasicQuizQuestions.length} &#128530;
                                    </Alert>
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default LinkSharing;