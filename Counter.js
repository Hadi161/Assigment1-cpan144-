"use client";
import React, { useState } from "react";
// componet to increment and decrement the value
const Counter = ({initalValue}) => {
  const [value, setValue] = useState(0);
 // increment function
  const increment = () => {
    setValue(value + 1);
  };
  // decrement function
  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div style={{ padding: "18px", border: "1px solid #ccc", margin: "12px" }}>
      <h2>Counter Feature</h2>
      <p>Current Value: {value}</p>
      {value > 0 && <p>positive value</p>}
      {value< 0 && <p>negative value</p>}
      {value=== 0 && <p>value is zero!</p>}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;