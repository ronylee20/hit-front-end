import React, { useState } from "react";
import { useDatabase } from "./database";

export default function Form() {
  // Create state variables to store the form data
  const [sum, setSum] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const { addCostItem } = useDatabase();  // Use the addCostItem function from the database module

  // Create an event handler for the button click
  const handleClick = () => {
    // Use the addCostItem function to add a new cost item to the database
    addCostItem({ sum, description, name });
    console.log({ sum, description, name });
    // Reset the form fields
    setSum("");
    setDescription("");
    setName("");
  };

  return (
    <div>
      {/* Sum field */}
      <label>
        <br />
        Sum:
        <input
          type="number"
          value={sum}
          onChange={(e) => setSum(e.target.value)}
        />
      </label>

      {/* Description field */}
      <label>
      <br />

        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      {/* Name field */}
      <label>
      <br />
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
      </label>

      {/* Button to submit the form */}
      <br />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
