import React from 'react';

export default function FormButtons({ onSubmit, onReset }) {
  return (
    <div>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
