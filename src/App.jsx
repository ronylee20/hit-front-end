import React from 'react';
import Total from './components/Total';
import Form from './components/Form';
import { useEffect } from 'react';

const App = () => {
  return (
    <div>
      <h1>Expenses</h1>
      <Total />
      <Form />
    </div>
  );
};

export default App;