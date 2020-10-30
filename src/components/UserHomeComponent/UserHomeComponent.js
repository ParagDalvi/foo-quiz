import userEvent from '@testing-library/user-event';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CustomCard from '../Reuse/CustoCard';
import CustomFooter from '../Reuse/CustomFooter';
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
                                <h5>Hey, {user.displayName}</h5>
                                : <h5>Hey there</h5>
                        }
                    </div>
                </Row>

                <br></br>

                <CustomCard url="/basic" title="Basic Quiz" subtitle="Simple questions for anyone who knows you even a little bit." someCrap="This quiz contains general questions." />

                <br></br>

                <CustomCard title="Lifestyle Quiz" subtitle=".." someCrap="Coming Soon.." />

                <br></br>

                <CustomCard title="Fantasies Quiz" subtitle=".." someCrap="Coming Soon.." />

                <br></br>

                <CustomCard title="Dirt Quiz" subtitle=".." someCrap="Coming Soon.." />

            </Container>
            <CustomFooter />
        </div>
    );
}

export default UserHomeComponent;