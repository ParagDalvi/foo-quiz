import React from 'react';
import { Button, Card, CardBody, Col, Container, Input, Row } from 'reactstrap';
import CustomNavbar from '../Reuse/CustomNavbar';
import { FaCopy, FaWhatsapp } from 'react-icons/fa';

const LinkSharing = ({ name, user }) => {
    return (
        <div>
            <CustomNavbar />
            <Container>
                <br></br>
                <Card>
                    <CardBody>
                        <p>/{name}-{user.uid}</p>
                        <p>Thanks for saving your answers, now share the below link with your beloved people to see who knows you better.</p>

                        <div style={{ display: 'flex' }}>
                            <Input style={{ flex: '1' }} type="text" disabled value={'foo-quiz.web.app/answer/' + name + '-' + user.uid} />
                            <Button color="primary" className="ml-1"><FaCopy /></Button>
                        </div>

                        <br></br>
                        <Button color="success"><FaWhatsapp /></Button>


                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default LinkSharing;