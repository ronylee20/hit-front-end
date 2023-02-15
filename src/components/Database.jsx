
const Database = {
  // Function to add an expense to the database
  addExpense: async (expense) => {
    return new Promise((resolve) => {
      // Get the current list of expenses from the local storage
      const storedExpenses = localStorage.getItem("expenses");
      let expenses;
      if (storedExpenses) {
        expenses = JSON.parse(storedExpenses);
      } else {
        expenses = [];
      }
      // Add the new expense to the list
      expenses.push(expense);
      // Update the local storage with the new list of expenses
      localStorage.setItem("expenses", JSON.stringify(expenses));
      resolve();
    });
  },

  // Function to delete an expense from the database
  deleteExpense: async (index) => {
    return new Promise((resolve) => {
      // Get the current list of expenses from the local storage
      const storedExpenses = localStorage.getItem("expenses");
      if (storedExpenses) {
        const expenses = JSON.parse(storedExpenses);
        // Remove the expense at the given index
        expenses.splice(index, 1);
        // Update the local storage with the new list of expenses
        localStorage.setItem("expenses", JSON.stringify(expenses));
      }
      resolve();
    });
  },

  // Function to update an expense in the database
  updateExpense: async (index, updatedExpense) => {
    return new Promise((resolve) => {
      // Get the current list of expenses from the local storage
      const storedExpenses = localStorage.getItem("expenses");
      if (storedExpenses) {
        const expenses = JSON.parse(storedExpenses);
        console.log("stored exp", expenses)
        // Update the expense at the given index
        expenses[index] = updatedExpense;
        // Update the local storage with the new list of expenses
        localStorage.setItem("expenses", JSON.stringify(expenses));
      }
      resolve();
    });
  },

  // Function to get all expenses from the database
  getExpenses: async () => {
    return new Promise((resolve) => {
      // Get the current list of expenses from the local storage
      const storedExpenses = localStorage.getItem("expenses");
      if (storedExpenses) {
        resolve(JSON.parse(storedExpenses));
      }
      resolve([]);
    });
  },

  // Function to delete all expenses from the database
  deleteAllExpenses: async () => {
    return new Promise((resolve) => {
      localStorage.removeItem("expenses");
      resolve();
    });
  },

  // Function to get expenses within a given date range from the database
  getExpensesByDate: async (dateRange) => {
    return new Promise((resolve) => {
      // Get the current list of expenses from the local storage
      const storedExpenses = localStorage.getItem("expenses");
      if (storedExpenses) {
        const expenses = JSON.parse(storedExpenses);
        // Filter the expenses to include only those within the given date range
        const filteredExpenses = expenses.filter(
          (expense) =>
            expense.time >= dateRange.start && expense.time <= dateRange.end
        );
        resolve(filteredExpenses);
      }
      resolve([]);
    });
  },
};

export default Database;

