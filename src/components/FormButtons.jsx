/*
Authors: Sergey Aremieve ID: 320689789, Rony Levy ID: 206918419
*/
import React from "react";

// Function component to render two buttons, "Submit" and "Reset"
export default function FormButtons({ onSubmit, onReset }) {
  return (
    <div>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
