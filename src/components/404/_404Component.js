import React from 'react';
import CustomNavbar from '../Reuse/CustomNavbar';
import {Jumbotron, Container} from 'reactstrap';

const _404Component = () => {
    return (
        <div>
            <CustomNavbar/>
            <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">404 Page not found</h1>
                    <p className="lead">You have come to a wrong place, seems like the page has been deleted or you have the wrong url.</p>
                    <hr className="my-2" />
                </Container>
            </Jumbotron>
        </div>
        </div>
    );
}

export default _404Component;