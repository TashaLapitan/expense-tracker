import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to="/">All Expenses</Link></li>
                <li><Link to="/new-expense">Add Expense</Link></li>
                <li><Link to="/chart">Overview</Link></li>
            </ul>
        </div>
    )
}

export default Navbar