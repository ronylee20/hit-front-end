/*
Authors: Sergey Aremieve ID: 320689789, Rony Levy ID: 206918419
*/

import React, { useEffect, useState } from "react";
import Database from "./components/Database";
import Form from "./components/Form";
import ListOfExpenses from "./components/ListOfExpenses";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  // Use the useEffect hook to load the expenses from the database when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const expenses = await Database.getExpenses();
      // Update the state with the fetched expenses
      setExpenses(expenses);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Expenses</h1>
      <Form setExpenses={setExpenses} />
      <ListOfExpenses expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
};
export default App;
