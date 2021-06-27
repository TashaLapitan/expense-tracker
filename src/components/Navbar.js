import React from 'react';
import {Nav} from 'react-bootstrap';

function Navbar() {
    return (
        <Nav variant="tabs" style={{maringBottom: "50px"}}>
            <Nav.Item>
                <Nav.Link href="/">All Expenses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/new-expense">Add Expense</Nav.Link>                
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/chart">Overview</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar