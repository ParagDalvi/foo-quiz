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
                        <p>Hey, {user.displayName}</p>
                    </div>
                </Row>

                <Row>
                    <Col>
                        <CustomCard title="Basic Quiz" subtitle="F" someCrap="OOO Bhai" />
                    </Col>
                    <Col>
                        <CustomCard title="Basic Quiz" subtitle="F" someCrap="OOO Bhai" />
                    </Col>
                </Row>
                <br></br>
                <Row >
                    <Col>
                        <CustomCard title="Basic Quiz" subtitle="F" someCrap="OOO Bhai" />
                    </Col>
                    <Col>
                        <CustomCard title="Basic Quiz" subtitle="F" someCrap="OOO Bhai" />
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default UserHomeComponent;