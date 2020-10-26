import userEvent from '@testing-library/user-event';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CustomCard from '../Reuse/CustoCard';
import CustomNavbar from '../Reuse/CustomNavbar';

const UserHomeComponent = ({ user }) => {


    return (
        <div>
            <CustomNavbar />
            <Container>

                <br></br>
                <Row>
                    <div className="m-auto">
                        {
                            user.displayName ?
                                <p>Hey, {user.displayName}</p>
                                : <p>Hey there</p>
                        }
                    </div>
                </Row>

                <Row>
                    <Col>
                        <CustomCard url="/basic" title="Basic Quiz" subtitle="Simple questions for anyone who knows you even a little bit." someCrap="This quiz contains general questions." />
                    </Col>
                    <Col>
                        <CustomCard title="Lifestyle Quiz" subtitle=".." someCrap="Coming Soon.." />
                    </Col>
                </Row>
                <br></br>
                <Row >
                    <Col>
                        <CustomCard title="Fantasies Quiz" subtitle=".." someCrap="Coming Soon.." />
                    </Col>
                    <Col>
                        <CustomCard title="Dirt Quiz" subtitle=".." someCrap="Coming Soon.." />
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default UserHomeComponent;