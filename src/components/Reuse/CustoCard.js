import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useHistory } from "react-router-dom";

const CustomCard = ({ title, subtitle, someCrap, url }) => {

    const history = useHistory();

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle><h6>{title}</h6></CardTitle>
                    <CardSubtitle>{subtitle}</CardSubtitle>
                    <CardText>{someCrap}</CardText>
                    {
                        url ?
                            <Button color="primary" onClick={() => history.push(url)}>Start</Button>
                            :
                            <Button color="primary" disabled>Start</Button>
                    }
                </CardBody>
            </Card>
        </div>
    );
};

export default CustomCard;