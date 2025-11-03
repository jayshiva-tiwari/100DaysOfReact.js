import React from "react";

interface CounterDisplayProps {
  count: number;
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ count }) => {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f0f8ff",
        borderRadius: "12px",
        textAlign: "center",
        margin: "20px 0",
        border: "2px solid #007bff",
      }}
    >
      <h1 style={{ fontSize: "72px", margin: "0", color: "#007bff" }}>
        {count}
      </h1>
      <p style={{ fontSize: "18px", color: "#666", marginTop: "10px" }}>
        Current Count
      </p>
    </div>
  );
};

export default CounterDisplay;
