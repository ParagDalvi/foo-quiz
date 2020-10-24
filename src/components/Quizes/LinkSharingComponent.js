import React from 'react';
import { Button, Card, CardBody, Col, Container, Input, Row } from 'reactstrap';
import CustomNavbar from '../Reuse/CustomNavbar';
import { FaCopy, FaWhatsapp } from 'react-icons/fa';

const LinkSharing = ({ name, user }) => {

    const copyValue = 'Hey there, I challenge you to take this test. This test has a few simple questions, your task is to guess what my answer would have to the same question. This way I will know, how well you know me? Follow this link to take the quiz foo-quiz.web.app/answer/' + name + '-' + user.uid;

    return (
        <div>
            <CustomNavbar />
            <Container>
                <br></br>
                <Card>
                    <CardBody>
                        <p>Thanks for saving your answers, your answers are saved in our database. Now share the below link with your beloved people to see who knows you better.</p>
                        <div style={{ display: 'flex' }}>
                            <Input style={{ flex: '1' }} type="textarea" disabled value={copyValue} />
                            <Button color="primary" onClick={() => { navigator.clipboard.writeText(copyValue) }} className="ml-1"><FaCopy /></Button>
                        </div>

                        <br></br>

                        <div className="d-flex justify-content-center mb-4">
                            <Button color="success" onClick={() => window.open('https://wa.me/?text=' + copyValue)}><FaWhatsapp /></Button>
                            <Button className="ml-1" color="primary" onClick={() => { navigator.clipboard.writeText(copyValue) }}><FaCopy /></Button>
                        </div>


                        <p>Just copy the link.</p>
                        <div style={{ display: 'flex' }}>
                            <Input style={{ flex: '1' }} type="text" disabled value={'foo-quiz.web.app/answer/' + name + '-' + user.uid} />
                            <Button color="primary" className="ml-1" onClick={() => { navigator.clipboard.writeText('foo-quiz.web.app/answer/' + name + '-' + user.uid) }}><FaCopy /></Button>
                        </div>

                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default LinkSharing;