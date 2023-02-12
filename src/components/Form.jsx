import React, { useState } from "react";
import Database from "./Database"; // Import the Database component

const Form = ({ setExpenses }) => {
  // State for the form input values
  const [formData, setFormData] = useState({
    //time will be timestapm
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
      await Database.addExpense(formData);
      console.log("formData", formData)
      setExpenses((prevExpenses) => [...prevExpenses, formData]);
      // Reset the form
      setFormData({
        cost: "",
        name: "",
        description: "",
        time: "",
      });
    } catch (e) {
      console.log("error handling")
    }
  };

  // Function to handle form submission
  // const handleSubmit = async (e) => {
  //   try {

  //     console.log("form", formData);
  //     // Add the new expense to the database
  //     await Database.addExpense(formData);


  //     const temp = Database.getExpenses();
  //     // console.log("----------");
  //     // console.log(temp);
  //   }
  //   catch (e) {
  //     console.log(e)
  //   } finally {
  //     // Reset the form
  //     setFormData({
  //       cost: "",
  //       name: "",
  //       description: "",
  //       time: "",
  //     });
  //   }
  // };

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
        value={formData.date}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit" disabled={!formData.time}>Submit</button>
    </form>
  );
};

export default Form;
