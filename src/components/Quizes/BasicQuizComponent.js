import React from 'react';
import { Card, CardText, Container, CardBody, CardTitle, CardSubtitle, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import CustomCard from '../Reuse/CustoCard';
import CustomNavbar from '../Reuse/CustomNavbar';

const basicQuizQuestions = [
    {
        question: 'Best superhero',
        options1: 'Iron man',
        options2: 'Captain',
        options3: 'Superman',
        options4: 'Thor',
    },
    {
        question: 'Best superhero',
        options1: 'Iron man',
        options2: 'Captain',
        options3: 'Superman',
        options4: 'Thor',
    },
    {
        question: 'Best superhero',
        options1: 'Iron man',
        options2: 'Captain',
        options3: 'Superman',
        options4: 'Thor',
    },
    {
        question: 'Best superhero',
        options1: 'Iron man',
        options2: 'Captain',
        options3: 'Superman',
        options4: 'Thor',
    },
    {
        question: 'Best superhero',
        options1: 'Iron man',
        options2: 'Captain',
        options3: 'Superman',
        options4: 'Thor',
    },
    {
        question: 'Best superhero',
        options1: 'Iron man',
        options2: 'Captain',
        options3: 'Superman',
        options4: 'Thor',
    },
    {
        question: 'Best superhero',
        options1: 'Iron man',
        options2: 'Captain',
        options3: 'Superman',
        options4: 'Thor',
    },
    {
        question: 'Best superhero',
        options1: 'Iron man',
        options2: 'Captain',
        options3: 'Superman',
        options4: 'Thor',
    },
    {
        question: 'Best superhero',
        options1: 'Iron man',
        options2: 'Captain',
        options3: 'Superman',
        options4: 'Thor',
    },
    {
        question: 'Best superhero',
        options1: 'Iron man',
        options2: 'Captain',
        options3: 'Superman',
        options4: 'Thor',
    },
];

const BasicQuiz = () => {
    return (
        <div>
            <CustomNavbar />
            <Container>
                <br></br>
                <p>Below are a few basic questions answer them and later ask your friends to guess your answers &#129305;</p>
                {
                    basicQuizQuestions.map((foo, i) => {
                        return (
                            <div key={i}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>{i + 1}. {foo.question}</CardTitle>
                                        <Row>
                                            <Col>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name={i} />
                                                        {foo.options1}
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name={i} />
                                                        {foo.options3}
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name={i} />
                                                        {foo.options2}
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name={i} />
                                                        {foo.options4}
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                                <br></br>
                            </div>
                        );
                    })
                }
                <div className="d-flex justify-content-center mb-4">
                    <Button>Submit</Button>
                </div>

            </Container>
        </div>
    );
}

export default BasicQuiz;