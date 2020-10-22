import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useHistory } from "react-router-dom";

const CustomCard = ({ title, subtitle, someCrap }) => {

    const history = useHistory();

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{subtitle}</CardSubtitle>
                    <CardText>{someCrap}</CardText>
                    <Button color="primary" onClick={() => history.push('/basic')}>Start</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default CustomCard;