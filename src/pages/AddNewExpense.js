import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';

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

        <div>
            <Form onSubmit={e => handleSubmit(e)}>

                <Form.Group controlId="expenseTitle">
                    <Form.Label>Expense title</Form.Label>
                    <Form.Control required type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="expenseAmount">
                    <Form.Label>Expense amount</Form.Label>
                    <Form.Control required type="number" value={amount} onChange={e => setAmount(parseFloat(e.target.value))} />
                </Form.Group>

                <Form.Group controlId="expenseDate">
                    <Form.Label>Expense date</Form.Label>
                    <Form.Control required type="date" value={date} onChange={e => setDate(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="secondary" onClick={cancelSubmit}>
                    Cancel
                </Button>

            </Form>

        </div>
    )
}

export default AddNewExpense
