import React from "react";

interface StockBadgeProps {
  inStock: boolean;
}

const StockBadge: React.FC<StockBadgeProps> = ({ inStock }) => {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: "4px",
        fontSize: "14px",
        fontWeight: "500",
        backgroundColor: inStock ? "#d4edda" : "#f8d7da",
        color: inStock ? "#155724" : "#721c24",
      }}
    >
      {inStock ? "✓ In Stock" : "✗ Out of Stock"}
    </span>
  );
};

export default StockBadge;
