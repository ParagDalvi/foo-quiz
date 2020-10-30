import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

const CustomFooter = () => {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
                <div class="container text-center">
                    <p>Foo-Quiz | Built to kill time</p>
                    <Row>
                        <Col>
                            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>Home</Link>
                        </Col>
                        <Col>
                            <Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit' }}>About</Link>
                        </Col>
                        <Col>
                            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit' }}>Contact</Link>
                        </Col>
                        <Col>
                            <Link to="/faq" style={{ color: 'inherit', textDecoration: 'inherit' }}>FAQ</Link>
                        </Col>
                        <Col>
                            <Link to="/help" style={{ color: 'inherit', textDecoration: 'inherit' }}>Help</Link>
                        </Col>
                    </Row>
                </div>
            </footer>
        </div>
    );
}

export default CustomFooter;