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
    }

};

export default service;