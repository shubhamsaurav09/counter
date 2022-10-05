import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const disableIncrement = count === 10 ? true : false;
  const disableDecrement = count === 0 ? true : false;

  const handleIncrement = ({ EventTarget }) => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = ({ EventTarget }) => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <h2>{count}</h2>
        <button
          id="increment"
          onClick={handleIncrement}
          disabled={disableIncrement}
        >
          Increment
        </button>
        <button
          id="decrement"
          onClick={handleDecrement}
          disabled={disableDecrement}
        >
          Decrement
        </button>
        <button
          id="reset"
          onClick={() => setCount(0)}
          disabled={disableDecrement}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
