import React from "react";

interface CounterInfoProps {
  count: number;
}

const CounterInfo: React.FC<CounterInfoProps> = ({ count }) => {
  const isEven = count % 2 === 0;
  const isPositive = count > 0;
  const isNegative = count < 0;

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        border: "1px solid #ddd",
        margin: "20px 0",
      }}
    >
      <h3>Counter Information</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          Type: <strong>{isEven ? "Even" : "Odd"}</strong>
        </li>
        <li>
          Sign:{" "}
          <strong>
            {count === 0 ? "Zero" : isPositive ? "Positive" : "Negative"}
          </strong>
        </li>
        <li>
          Absolute Value: <strong>{Math.abs(count)}</strong>
        </li>
        <li>
          Squared: <strong>{count * count}</strong>
        </li>
      </ul>
    </div>
  );
};

export default CounterInfo;
