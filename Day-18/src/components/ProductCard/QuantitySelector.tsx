import React from "react";

interface QuantitySelectorProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrement,
  onDecrement,
}) => {
  const buttonStyle: React.CSSProperties = {
    width: "32px",
    height: "32px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    backgroundColor: "white",
    cursor: "pointer",
    fontSize: "18px",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <button onClick={onDecrement} style={buttonStyle}>
        −
      </button>
      <span style={{ fontSize: "16px", fontWeight: "500", minWidth: "30px", textAlign: "center" }}>
        {quantity}
      </span>
      <button onClick={onIncrement} style={buttonStyle}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
