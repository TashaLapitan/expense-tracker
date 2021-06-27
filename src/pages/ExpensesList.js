import React, {useRef, useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';

import service from './../lib/expense.service';
import ExpenseCard from '../components/ExpenseCard';
import LoadingPage from '../components/LoadingPage';

function ExpensesList() {

    const expenses = useRef([]);
    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
        expenses.current = service.getAllExpenses();
        setIsLoading(false);
    }, [])

    if (isLoading) {
        return <LoadingPage/>
    };

    return (
        <Container className="w-75 p-3">
            <h1>My Expenses</h1>
            {expenses.current.map(ex => {return <ExpenseCard key={ex.id} expense={ex}/>})}            
        </Container>
    )
}

export default ExpensesList;
