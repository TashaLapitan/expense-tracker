import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';

import service from './../lib/expense.service';

function ExpenseCard(props) {

    const {title, amount, date} = props.expense;
    return (
        <Container>
            <Card className="expense-card">
                <Card.Header as="h5">{title}</Card.Header>
                <Card.Body>
                    <Row>
                        <Col><Card.Title><span>€</span>{amount.toFixed(2)}</Card.Title></Col>
                        <Col><Card.Text>{service.prettifyDate(date)}</Card.Text></Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ExpenseCard