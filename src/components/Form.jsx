import React, { useState } from 'react';
import Database from './Database'; // Import the Database component

const Form = () => {
  // State for the form input values
  const [formData, setFormData] = useState({
    //time will be timestapm
    cost: '',
    name: '',
    description: '',
    time: (new Date()).getTime()
  });

  // Function to handle input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  // Function to handle form submission
  const handleSubmit = () => {
    console.log(formData);
    // Add the new expense to the database
    Database.addExpense(formData);
    // Reset the form
    setFormData({
      cost: '',
      name: '',
      description: '',
      time: (new Date()).getTime()
    });
    const temp = Database.getExpenses();
    console.log('----------');
    console.log(temp);
  };

  return (
    <form>
      <label htmlFor="cost">Cost:</label>
      <input type="number" name="cost" value={formData.cost} onChange={handleChange} />
      <br />
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <br />
      <label htmlFor="description">Description:</label>
      <input type="text" name="description" value={formData.description} onChange={handleChange} />
      <br />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Form;