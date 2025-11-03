// App.tsx
import React, { useState } from "react";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";
import CounterInfo from "./components/CounterInfo";

const App: React.FC = () => {
  // State lifted to parent - single source of truth
  const [count, setCount] = useState<number>(0);

  // Handler functions passed to children
  const handleIncrement = () => setCount(count + 1);
  
  const handleDecrement = () => setCount(count - 1);
  
  const handleReset = () => setCount(0);
  
  const handleIncrementBy = (value: number) => setCount(count + value);

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>🔢 Multi-Component Counter</h1>
      
      {/* Pass state as prop */}
      <CounterDisplay count={count} />
      
      {/* Pass callback functions as props */}
      <CounterControls
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
        onIncrementBy={handleIncrementBy}
      />
      
      {/* Pass state as prop */}
      <CounterInfo count={count} />
    </div>
  );
};

export default App;
