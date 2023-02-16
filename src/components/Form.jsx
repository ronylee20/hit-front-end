/*
Authors: Sergey Aremieve ID: 320689789, Rony Levy ID: 206918419
*/

import React, { useState } from "react";
import Database from "./Database"; // Import the Database component

const Form = ({ setExpenses }) => {
  // State to store the form input values
  const [formData, setFormData] = useState({
    cost: "",
    name: "",
    description: "",
    time: "",
  });

  // Function to handle input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the addExpense function from the imported Database component
      await Database.addExpense(formData);
      // Update the expenses state with the new expense
      setExpenses((prevExpenses) => [...prevExpenses, formData]);
    } catch (e) {
      console.log("error handling");
    } finally {
      // Reset the form input values
      setFormData({
        cost: "",
        name: "",
        description: "",
        time: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cost">Cost:</label>
      <input
        type="number"
        name="cost"
        value={formData.cost}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="date">date:</label>
      <input
        type="date"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit" disabled={!formData.time}>
        Submit
      </button>
    </form>
  );
};

export default Form;
