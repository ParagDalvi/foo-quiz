import userEvent from '@testing-library/user-event';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CustomCard from '../Reuse/CustoCard';
import CustomNavbar from '../Reuse/CustomNavbar';

const UserHomeComponent = ({user}) => {

    
    return (
        <div>
            <CustomNavbar />
            <Container>

                <div className="row">
                    <div className="m-auto">
                        <p>Hey, {user.displayName}</p>
                    </div>
                </div>

                <Row>
                    <div className="col-3">
                        <CustomCard title="Basic Quiz" subtitle="F" someCrap="OOO Bhai"/>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default UserHomeComponent;