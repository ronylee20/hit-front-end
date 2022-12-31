import React, { useState } from 'react';

const DateRange = () => {
  // State for the start and end dates
  const [dates, setDates] = useState({
    start: new Date(),
    end: new Date()
  });

  // Function to handle start date changes
  const handleStartDateChange = (event) => {
    // Convert the date string to a Date object
    console.log('start',new Date( event.target.value).getTime());
    const date = new Date(event.target.value);
    setDates({
      ...dates,
      start: date
    });
  };

  // Function to handle end date changes
  const handleEndDateChange = (event) => {
    // Convert the date string to a Date object
    console.log('end', new Date(event.target.value).getTime());
    const date = new Date(event.target.value);
    setDates({
      ...dates,
      end: date
    });
  };

  // Function to parse and format the date string for the input field
  const formatDate = (date) => {
    // Format the date using the toISOString method and the substr method
    return date.toISOString().substr(0, 10);
  };

  return (
    <div>
      <label htmlFor="startDate">Start Date:</label>
      <input type="date" name="startDate" value={formatDate(dates.start)} onChange={handleStartDateChange} />
      <br />
      <label htmlFor="endDate">End Date:</label>
      <input type="date" name="endDate" value={formatDate(dates.end)} onChange={handleEndDateChange} />
    </div>
  );
};

export default DateRange;
