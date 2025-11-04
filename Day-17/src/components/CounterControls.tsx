import React from "react";

interface CounterControlsProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
  onIncrementBy: (value: number) => void;
}

const CounterControls: React.FC<CounterControlsProps> = ({ 
  onIncrement,
  onDecrement,
  onReset,
  onIncrementBy,
}) => {
  const buttonStyle: React.CSSProperties = {
    padding: "12px 24px",
    margin: "5px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.2s",
  };

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <div style={{ marginBottom: "15px" }}>
        <button
          onClick={onIncrement}
          style={{
            ...buttonStyle,
            backgroundColor: "#28a745",
            color: "white",
          }}
        >
          + Increment
        </button>
        <button
          onClick={onDecrement}
          style={{
            ...buttonStyle,
            backgroundColor: "#dc3545",
            color: "white",
          }}
        >
          - Decrement
        </button>
        <button
          onClick={onReset}
          style={{
            ...buttonStyle,
            backgroundColor: "#6c757d",
            color: "white",
          }}
        >
          🔄 Reset
        </button>
      </div>
      
      <div>
        <button
          onClick={() => onIncrementBy(5)}
          style={{
            ...buttonStyle,
            backgroundColor: "#007bff",
            color: "white",
          }}
        >
          +5
        </button>
        <button
          onClick={() => onIncrementBy(10)}
          style={{
            ...buttonStyle,
            backgroundColor: "#007bff",
            color: "white",
          }}
        >
          +10
        </button>
      </div>
    </div>
  );
};

export default CounterControls;

