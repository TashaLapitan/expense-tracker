import React, {useRef, useEffect, useState} from 'react';

import service from './../lib/expense.service';
import ExpenseCard from '../components/ExpenseCard';

function ExpensesList() {

    const expenses = useRef([]);
    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
        expenses.current = service.getAllExpenses();
        setIsLoading(false);
    }, [])

    if (isLoading) {
        return <div><h1>Page loading, please wait...</h1></div>
    };

    return (
        <div>
            <h1>My Expenses</h1>
            {expenses.current.map(ex => {return <ExpenseCard key={ex.id} expense={ex}/>})}            
        </div>
    )
}

export default ExpensesList
