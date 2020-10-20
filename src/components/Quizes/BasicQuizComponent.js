import React from 'react';
import { Card, CardText, Container, CardBody, CardTitle, CardSubtitle, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import CustomCard from '../Reuse/CustoCard';
import CustomNavbar from '../Reuse/CustomNavbar';

const basicQuizQuestions = [
    {
        question: 'Best superhero',
        a: 'Iron man',
        b: 'Captain',
        c: 'Superman',
        d: 'Thor',
    },
    {
        question: 'Best superhero',
        a: 'Iron man',
        b: 'Captain',
        c: 'Superman',
        d: 'Thor',
    },
    {
        question: 'Best superhero',
        a: 'Iron man',
        b: 'Captain',
        c: 'Superman',
        d: 'Thor',
    },
    {
        question: 'Best superhero',
        a: 'Iron man',
        b: 'Captain',
        c: 'Superman',
        d: 'Thor',
    },
    {
        question: 'Best superhero',
        a: 'Iron man',
        b: 'Captain',
        c: 'Superman',
        d: 'Thor',
    },
    {
        question: 'Best superhero',
        a: 'Iron man',
        b: 'Captain',
        c: 'Superman',
        d: 'Thor',
    },
    {
        question: 'Best superhero',
        a: 'Iron man',
        b: 'Captain',
        c: 'Superman',
        d: 'Thor',
    },
    {
        question: 'Best superhero',
        a: 'Iron man',
        b: 'Captain',
        c: 'Superman',
        d: 'Thor',
    },
    {
        question: 'Best superhero',
        a: 'Iron man',
        b: 'Captain',
        c: 'Superman',
        d: 'Thor',
    },
    {
        question: 'Best superhero',
        a: 'Iron man',
        b: 'Captain',
        c: 'Superman',
        d: 'Thor',
    },
];

const BasicQuiz = () => {

    var answers = {
        _1: '',
        _2: '',
        _3: '',
        _4: '',
        _5: '',
        _6: '',
        _7: '',
        _8: '',
        _9: '',
        _10: '',
    }

    const handleChange = (e) => {
        const name = e.target.name;
        answers[name] = e.target.value;
    }

    const handleSubmit = () => {
        console.log(answers);
    }

    return (
        <div>
            <CustomNavbar />
            <Container>
                <br></br>
                <p>Below are a few basic questions, answer them and later ask your friends to guess your answers &#129305;</p>
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
                                                        <Input type="radio" name={'_' + (i + 1)} value="a" onChange={(e) => handleChange(e)} />
                                                        {foo.a}
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name={'_' + (i + 1)} value="c" onChange={(e) => handleChange(e)} />
                                                        {foo.c}
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name={'_' + (i + 1)} value="b" onChange={(e) => handleChange(e)} />
                                                        {foo.b}
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name={'_' + (i + 1)} value="d" onChange={(e) => handleChange(e)} />
                                                        {foo.d}
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
                    <Button onClick={() => handleSubmit()}>Submit</Button>
                </div>

            </Container>
        </div>
    );
}

export default BasicQuiz;