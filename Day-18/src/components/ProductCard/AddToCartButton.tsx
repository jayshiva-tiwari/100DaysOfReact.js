import React from "react";

interface AddToCartButtonProps {
  inStock: boolean;
  onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ inStock, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={!inStock}
      style={{
        width: "100%",
        padding: "12px",
        backgroundColor: inStock ? "#007bff" : "#ccc",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: inStock ? "pointer" : "not-allowed",
        fontSize: "16px",
        fontWeight: "500",
      }}
    >
      {inStock ? "Add to Cart" : "Out of Stock"}
    </button>
  );
};

export default AddToCartButton;
