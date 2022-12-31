const Database = {
    // Function to add an expense to the database
    addExpense: (expense) => {
      // Get the current list of expenses from the local storage
      const storedExpenses = localStorage.getItem('expenses');
      let expenses;
      if (storedExpenses) {
        expenses = JSON.parse(storedExpenses);
      } else {
        expenses = [];
      }
      // Add the new expense to the list
      expenses.push(expense);
      // Update the local storage with the new list of expenses
      localStorage.setItem('expenses', JSON.stringify(expenses));
    },
  
    // Function to delete an expense from the database
    deleteExpense: (index) => {
      // Get the current list of expenses from the local storage
      const storedExpenses = localStorage.getItem('expenses');
      if (storedExpenses) {
        const expenses = JSON.parse(storedExpenses);
        // Remove the expense at the given index
        expenses.splice(index, 1);
        // Update the local storage with the new list of expenses
        localStorage.setItem('expenses', JSON.stringify(expenses));
      }
    },
  
    // Function to update an expense in the database
    updateExpense: (index, updatedExpense) => {
      // Get the current list of expenses from the local storage
      const storedExpenses = localStorage.getItem('expenses');
      if (storedExpenses) {
        const expenses = JSON.parse(storedExpenses);
        // Update the expense at the given index
        expenses[index] = updatedExpense;
        // Update the local storage with the new list of expenses
        localStorage.setItem('expenses', JSON.stringify(expenses));
      }
    },
    getExpenses: () => {
        // Get the current list of expenses from the local storage
        const storedExpenses = localStorage.getItem('expenses');
        if (storedExpenses) {
            return JSON.parse(storedExpenses);
        }
        return [];
    },
    deleteAllExpenses: () => {
        console.log('Deleting all expenses');
        localStorage.removeItem('expenses');
        console.log('------deleted all expenses')
    },

    getExpensesByDate: (dateRange) => {
      console.log('dateRange: ', dateRange);
        // Get the current list of expenses from the local storage
        const storedExpenses = localStorage.getItem('expenses');
        console.log('debug: ', storedExpenses)
        if (storedExpenses) {
            const expenses = JSON.parse(storedExpenses);
            let filteredExpenses = [];
            for(let expense of expenses)
            {
              console.log('start: ', dateRange.start);
              console.log('end: ', dateRange.end);
              console.log('expense.time: ', expense.time);
              if (expense.time >= dateRange.start && expense.time <= dateRange.end) {
                filteredExpenses.push(expense);
              }
              console.log('filteredExpenses: ', filteredExpenses);
            return filteredExpenses;
        }
        return [];
    }
  }
}
  export default Database;
  