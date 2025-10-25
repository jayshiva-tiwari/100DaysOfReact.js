import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0); // Initial state = 0

  function increment() {
    if (count < 10) {
    setCount(count + 1);
  }else{
    alert("Counter cannot exceed 10");
  }
}



  function decrement() {
    if(count > 0){
    setCount(count - 1);
  }else{
    alert("Counter cannot be less than 0");
  }
}

  function restart(){
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", margin: "30px" }}>
      <h2>Counter Value: {count}</h2>
      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ marginRight: "10px" }}>
        Decrement
      </button>
      <button onClick={restart}>
        Restart
      </button>
    </div>
  );
}

export default CounterApp;
