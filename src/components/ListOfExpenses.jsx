import React, { useState, useEffect } from "react";
import { useRef } from "react";
import Database from "./Database";
import DateRange from "./DateRange";

const today = new Date();
const ListOfExpenses = ({ expenses, setExpenses }) => {
  const [editedIndex, setEditedIndex] = useState(-1);
  const nameRef = useRef();
  const costRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  // State for the list of expenses
  // State for the start and end dates of the date range to display
  const [dateRange, setDateRange] = useState({
    // make start the beginning of the day and end the end of the day
    start: new Date(today.getFullYear(), today.getMonth(), 1),
    end: new Date().getTime() + 86400000,
  });
  // State for the selected expenses
  const [selectedExpenses, setSelectedExpenses] = useState([]);

  // Use the useEffect hook to load the expenses from the local storage when the component mounts
  useEffect(() => {
    const storedExpenses = Database.getExpensesByDate(dateRange);
    console.log("storedExpenses: ", storedExpenses);
    if (typeof storedExpenses === "string") {
      console.log("storedExpenses: ", JSON.parse(storedExpenses));

      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  // Function to delete an expense
  const handleDelete = (index) => {
    // Delete the expense from the database
    Database.deleteExpense(index);
    // Update the list of expenses in state with the updated list from the database
    setExpenses(Database.getExpensesByDate(dateRange));
  };

  const handleUpdate = (index) => {
    const updatedCost = {
      name: nameRef.current.value,
      cost: costRef.current.value,
      description: descriptionRef.current.value,
      time: dateRef.current.value,
    };

    Database.updateExpense(index, updatedCost);
    setExpenses(Database.getExpensesByDate(dateRange));
    setEditedIndex(-1);
  };

  // Function to delete all expenses
  const handleDeleteAll = () => {
    // Delete all expenses from the database
    Database.deleteAllExpenses();
    // Update the list of expenses in state with the updated list from the database
    setExpenses(Database.getExpensesByDate(dateRange));
  };

  // Function to handle changes to the date range
  const handleDateRangeChange = (dateRange) => {
    console.log("dateRange: ", dateRange);
    setDateRange(dateRange);
  };

  // Function to handle expense selection
  const handleSelect = (index) => {
    // Add or remove the expense from the selected expenses list
    if (selectedExpenses.includes(index)) {
      setSelectedExpenses(selectedExpenses.filter((i) => i !== index));
    } else {
      setSelectedExpenses([...selectedExpenses, index]);
    }
  };

  const date_test = () => {
    const allEx = Database.getExpensesByDate(dateRange);
    console.log("all expenses: ", allEx);
    console.log("current date: ", dateRange.start);
    console.log("current date: ", dateRange.end);
  };
  return (
    <div>
      <h2>List of Expenses</h2>
      <div className="center">
        <DateRange
          start={dateRange.start}
          end={dateRange.end}
          setDateRange={setDateRange}
        />
      </div>
      {expenses
        .filter((expense) => {
          const expenseDate = new Date(expense.time);
          return expenseDate >= dateRange.start && expenseDate <= dateRange.end;
        })

        .map((expense, index) => {
          console.log(expense);
          if (index === editedIndex) {
            return (
              <div id="edited" key={index}>
                <input ref={nameRef} type="text" defaultValue={expense.name} />
                <input
                  ref={costRef}
                  type="number"
                  defaultValue={expense.cost}
                />
                <input
                  ref={descriptionRef}
                  type="text"
                  defaultValue={expense.description}
                />
                <input ref={dateRef} type="date" defaultValue={expense.Date} />
                <button onClick={() => handleUpdate(index)}>Update</button>
                <button onClick={() => setEditedIndex(-1)}>Cancel</button>
              </div>
            );
          }
          return (
            <div key={index} className="expense container">
              <p className="expense">
                {expense.name}: {expense.cost}: {expense.description}
              </p>
              <button onClick={() => setEditedIndex(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>&times;</button>
            </div>
          );
        })}
      <div className="total-expenses">
        Total expenses:{" "}
        {expenses.reduce((total, expense) => total + Number(expense.cost), 0)}$
        <button onClick={handleDeleteAll}>Delete All</button>
      </div>
    </div>
  );
};

export default ListOfExpenses;
