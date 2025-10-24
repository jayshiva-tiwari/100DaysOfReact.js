import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0); // Initial state = 0

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div style={{ textAlign: "center", margin: "30px" }}>
      <h2>Counter Value: {count}</h2>
      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default CounterApp;
