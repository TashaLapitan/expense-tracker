const service = {

    addNewExpense: (newExpense) => {
        const allExpenses = JSON.parse(localStorage.getItem('expensesDB'));
        newExpense.id = allExpenses.length + 1;
        allExpenses.push(newExpense);
        localStorage.setItem('expensesDB', JSON.stringify(allExpenses));
    },

    getAllExpenses: () => {
        const allExpenses = JSON.parse(localStorage.getItem('expensesDB'));
        allExpenses.reverse();
        return allExpenses === null ? [] : allExpenses;
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
    }

};

export default service;