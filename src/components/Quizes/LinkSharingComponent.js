import React from 'react';
import { Card, Container } from 'reactstrap';
import CustomNavbar from '../Reuse/CustomNavbar';

const LinkSharing = ({ name, user }) => {
    return (
        <div>
            <CustomNavbar />
            <Container>
                <Card>

                    <p>/answer-{name}-{user.uid} &#129305;</p>
                </Card>
            </Container>
        </div>
    );
}

export default LinkSharing;