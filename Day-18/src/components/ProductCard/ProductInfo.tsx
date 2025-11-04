import React from "react";

interface ProductInfoProps {
  name: string;
  price: number;
  description: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ name, price, description }) => {
  return (
    <div>
      <h2 style={{ margin: "12px 0 8px", fontSize: "20px" }}>{name}</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff", margin: "8px 0" }}>
        ₹{price.toLocaleString()}
      </p>
      <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6" }}>
        {description}
      </p>
    </div>
  );
};

export default ProductInfo;
