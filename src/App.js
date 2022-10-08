import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const disableReset = count === 0 ? true : false;

  const handleIncrement = ({ EventTarget }) => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = ({ EventTarget }) => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="container-grid">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div className="button-container">
        <button id="increment" onClick={handleIncrement}>
          Increment
        </button>
        <button id="decrement" onClick={handleDecrement}>
          Decrement
        </button>
        <button id="reset" onClick={() => setCount(0)} disabled={disableReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
