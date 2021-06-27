import React, {useRef, useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';
import {Container} from 'react-bootstrap';

import service from './../lib/expense.service';
import LoadingPage from './../components/LoadingPage';

function Chart() {

    const chartDates = useRef([]);
    const chartExpenses = useRef([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const expenses = service.getAllExpenses('chart');
        const uniqueDates = service.getUniqueDates(expenses);
        chartDates.current = [...uniqueDates];
        const expensesPerDate = service.getExpensesPerDate(chartDates.current, expenses);
        chartExpenses.current = [...expensesPerDate];
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <LoadingPage/>
    };

    return (
        <div>
            <h1>Expenses Chart</h1>
            <Container className='chart-container'>
                <Bar
                    width={600}
                    height={400}
                    data={{ 
                        labels: chartDates.current.map(d => {return service.prettifyDate(d, 'chart')}),
                        datasets: [{
                            label: 'total € per day',
                            data: chartExpenses.current,
                            backgroundColor: 'lightblue'
                        }]
                    }}
                    options={{
                        maintainAspectRatio: false
                    }} />
            </Container>       
        </div>
    )
}

export default Chart
