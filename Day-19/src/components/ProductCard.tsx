import React from "react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "#fff",
      }}
    >
      <h3 style={{ margin: "0 0 8px", fontSize: "18px" }}>{product.name}</h3>
      <p style={{ color: "#666", fontSize: "14px", margin: "8px 0" }}>
        {product.description}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
        <span style={{ fontSize: "20px", fontWeight: "bold", color: "#007bff" }}>
          ₹{product.price}
        </span>
        <span
          style={{
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            backgroundColor: product.inStock ? "#d4edda" : "#f8d7da",
            color: product.inStock ? "#155724" : "#721c24",
          }}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>
      <span
        style={{
          display: "inline-block",
          marginTop: "8px",
          padding: "4px 8px",
          backgroundColor: "#f0f0f0",
          borderRadius: "4px",
          fontSize: "12px",
          color: "#666",
        }}
      >
        {product.category}
      </span>
    </div>
  );
};

export default ProductCard;
