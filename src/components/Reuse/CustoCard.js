import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CustomCard = ({ title, subtitle, someCrap }) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{subtitle}</CardSubtitle>
                    <CardText>{someCrap}</CardText>
                    <Button>Start</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default CustomCard;