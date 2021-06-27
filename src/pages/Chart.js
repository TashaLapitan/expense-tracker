import React, {useRef, useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';
import service from './../lib/expense.service';

function Chart() {

    const chartDates = useRef([]);
    const chartExpenses = useRef([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const expenses = service.getAllExpenses();
        const uniqueDates = service.getUniqueDates(expenses);
        chartDates.current = [...uniqueDates];
        const expensesPerDate = service.getExpensesPerDate(chartDates.current, expenses);
        chartExpenses.current = [...expensesPerDate];
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <div><h1>Page loading, please wait...</h1></div>
    };

    return (
        <div>
            <Bar
                width={600}
                height={400}
                data={{ 
                    labels: chartDates.current,
                    datasets: [{
                        label: 'total € per day',
                        data: chartExpenses.current,
                        backgroundColor: 'lightblue'
                    }]
                }}
                options={{
                    maintainAspectRatio: false
                }} />
            
        </div>
    )
}

export default Chart
