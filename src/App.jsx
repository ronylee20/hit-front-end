import React from "react";
import Form from "./components/Form";
import ListOfExpenses from "./components/ListOfExpenses";
import Database from "./components/Database";

const App = () => {
  return (
    <div>
      <h1>Expenses</h1>
      <Form />
      <ListOfExpenses />
    </div>
  );
};

export default App;
