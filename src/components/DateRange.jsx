/*
Authors: Sergey Aremieve ID: 320689789, Rony Levy ID: 206918419
*/
import React, { useState } from "react";

// Component for rendering the date range picker
const DateRange = ({ start, end, setDateRange }) => {
  // Function to handle changes to the start date
  const handleStartDateChange = (event) => {
    console.log("start", new Date(event.target.value).getTime());
    const date = new Date(event.target.value);
    setDateRange((prevDates) => ({
      ...prevDates,
      start: date,
    }));
  };

  // Function to handle end date changes
  const handleEndDateChange = (event) => {
    console.log("end", new Date(event.target.value).getTime());
    // Convert the date string to a Date object
    const date = new Date(event.target.value);
    setDateRange((prevDates) => ({
      ...prevDates,
      end: date,
    }));
  };

  // Function to format the date for display in the input field
  const formatDate = (date) => {
    return new Date(date).toISOString().substr(0, 10);
  };

  return (
    <div>
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        name="startDate"
        value={formatDate(start)}
        onChange={handleStartDateChange}
      />
      <br />
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        name="endDate"
        value={formatDate(end)}
        onChange={handleEndDateChange}
      />
    </div>
  );
};

export default DateRange;
