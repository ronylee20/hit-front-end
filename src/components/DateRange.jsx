import React, { useState } from "react";

const DateRange = ({ start, end, setDateRange }) => {
  // Function to handle start date changes
  const handleStartDateChange = (event) => {
    // Convert the date string to a Date object
    console.log("start", new Date(event.target.value).getTime());
    const date = new Date(event.target.value);
    setDateRange((prevDates) => ({
      ...prevDates,
      start: date,
    }));
  };

  // Function to handle end date changes
  const handleEndDateChange = (event) => {
    // Convert the date string to a Date object
    console.log("end", new Date(event.target.value).getTime());
    const date = new Date(event.target.value);
    setDateRange((prevDates) => ({
      ...prevDates,
      end: date,
    }));
  };

  // Function to parse and format the date string for the input field
  const formatDate = (date) => {
    // Format the date using the toISOString method and the substr method
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
