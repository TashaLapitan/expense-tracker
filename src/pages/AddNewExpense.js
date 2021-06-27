import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Form, Button, Container} from 'react-bootstrap';

import service from './../lib/expense.service';

function AddNewExpense() {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {title, amount, date};
        service.addNewExpense(newExpense);
        setIsSubmitted(true);
    };

    const cancelSubmit = () => {
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return <Redirect to="/"/>
    };

    return (

        <Container className="w-75 p-3">
            <h1>Add New Expense</h1>
            <Form onSubmit={e => handleSubmit(e)}>

                <Form.Group controlId="expenseTitle" className="expense-input-group">
                    <Form.Label>Expense title</Form.Label>
                    <Form.Control required type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g.: Groceries, Taxi, etc.."/>
                </Form.Group>

                <Form.Group controlId="expenseAmount" className="expense-input-group">
                    <Form.Label>Expense amount, €</Form.Label>
                    <Form.Control required type="number" step=".01" value={amount} onChange={e => setAmount(parseFloat(e.target.value))} />
                </Form.Group>

                <Form.Group controlId="expenseDate" className="expense-input-group">
                    <Form.Label>Expense date</Form.Label>
                    <Form.Control required type="date" value={date} onChange={e => setDate(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" className="expense-form-btn">
                    Submit
                </Button>
                <Button variant="secondary" onClick={cancelSubmit} className="expense-form-btn">
                    Cancel
                </Button>
            </Form>
        </Container>
    )
}

export default AddNewExpense
