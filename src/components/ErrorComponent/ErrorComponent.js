import React from 'react';
import { Container } from 'reactstrap';
import CustomFooter from '../Reuse/CustomFooter';
import CustomNavbar from '../Reuse/CustomNavbar';

const ErrorComponent = ({ errorMessage }) => {
    console.log('here');
    return (
        <div>
            <CustomNavbar />
            <Container>
                <br></br>
                <div className="d-flex justify-content-center mb-4">
                    <p>{errorMessage}</p>
                </div>
            </Container>
        </div>

    );
}

export default ErrorComponent;