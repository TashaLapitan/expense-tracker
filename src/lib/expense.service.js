const service = {

    addNewExpense: (newExpense) => {
        const allExpenses = JSON.parse(localStorage.getItem('expensesDB'));
        newExpense.id = allExpenses.length + 1;
        allExpenses.push(newExpense);
        localStorage.setItem('expensesDB', JSON.stringify(allExpenses));
    },

    getAllExpenses: (component='any') => {
        const allExpenses = JSON.parse(localStorage.getItem('expensesDB'));
        return component === 'any' 
        ? allExpenses.reverse()
        : allExpenses.sort((a,b) => {return new Date(a.date) - new Date(b.date)});
    },

    getUniqueDates: (allExpenses) => {
        let uniqueDates = [];
        allExpenses.forEach(ex => {
            if (uniqueDates.indexOf(ex.date) === -1) {
                uniqueDates.push(ex.date)
            }
        });
        return uniqueDates;
    },

    getExpensesPerDate: (uniqueDates, allExpenses) => {
        let expensesPerDate = [];
        uniqueDates.forEach(date => {
            let daySum = 0;
            allExpenses.forEach(ex => {
                if (ex.date === date) {
                    daySum += ex.amount;
                }
            })
            expensesPerDate.push(daySum);
        })   
        return expensesPerDate;     
    },

    prettifyDate: (date, component='any') => {
        const utcDate = new Date(date);
        const utcStr = utcDate.toUTCString();
        return component === 'chart' ? utcStr.slice(5,11) : utcStr.slice(5,16);
    }

};

export default service;