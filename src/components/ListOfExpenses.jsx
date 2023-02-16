/*
Authors: Sergey Aremieve ID: 320689789, Rony Levy ID: 206918419
*/

import React, { useState, useEffect } from "react";
import { useRef } from "react";
import Database from "./Database";
import DateRange from "./DateRange";

const today = new Date(); // Get today's date

const ListOfExpenses = ({ expenses, setExpenses }) => {
  // State for the edited expense's index
  const [editedIndex, setEditedIndex] = useState(-1);

  // Refs for the input values
  const nameRef = useRef();
  const costRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  // State for the date range
  const [dateRange, setDateRange] = useState({
    start: new Date(today.getFullYear(), today.getMonth(), 1), // Start date is the first day of this month
    end: new Date().getTime() + 86400000, // End date is tomorrow
  });

  // Use the useEffect hook to load the expenses from the local storage when the component mounts
  useEffect(() => {
    const storedExpenses = Database.getExpensesByDate(dateRange);
    // Update the expenses in state with the data from the local storage
    if (typeof storedExpenses === "string") {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  // Function to delete an expense
  const handleDelete = async (index) => {
    // Delete the expense from the database
    await Database.deleteExpense(index);
    // Update the list of expenses in state with the updated list from the database
    const updatedExpenses = await Database.getExpensesByDate(dateRange);
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense, i) => i !== index)
    );
  };

  const handleUpdate = async (index) => {
    // Get the updated expense data
    const updatedCost = {
      name: nameRef.current.value,
      cost: costRef.current.value,
      description: descriptionRef.current.value,
      time: dateRef.current.value,
    };
    // Update the expense in the database
    await Database.updateExpense(index, updatedCost);

    const expenses = await Database.getExpenses();

    // Update the expenses in state with the updated list from the database

    setExpenses(expenses);
    // Reset the editedIndex state

    setEditedIndex(-1);
  };

  // Function to delete all expenses test
  const handleDeleteAll = async () => {
    // Delete all expenses from the database
    await Database.deleteAllExpenses();
    // Update the list of expenses in state with the updated list from the database
    const expenses = await Database.getExpensesByDate(dateRange);
    setExpenses(expenses);
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
          //Map through the expenses that are within the selected date range
          const expenseDate = new Date(expense.time);
          return expenseDate >= dateRange.start && expenseDate <= dateRange.end;
        })

        .map((expense, index) => {
          // If the expense is being edited, render the input fields with its current values
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
                <input ref={dateRef} type="date" defaultValue={expense.time} />
                <button onClick={() => handleUpdate(index)}>Update</button>
                <button onClick={() => setEditedIndex(-1)}>Cancel</button>
              </div>
            );
          }
          return (
            // If the expense is not being edited, render the expense information and edit/delete buttons
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
