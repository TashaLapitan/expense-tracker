import React from 'react';
import {Card, Container} from 'react-bootstrap';

function ExpenseCard(props) {

    const {title, amount, date} = props.expense;
    return (
        <Container>
            <Card>
                <Card.Header as="h5">{title}</Card.Header>
                <Card.Body>
                    <Card.Title>{amount}</Card.Title>
                    <Card.Text>{date}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ExpenseCard