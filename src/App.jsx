import React, { useEffect, useState } from "react";
import Database from "./components/Database";
import Form from "./components/Form";
import ListOfExpenses from "./components/ListOfExpenses";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const expenses = await Database.getExpenses();
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
