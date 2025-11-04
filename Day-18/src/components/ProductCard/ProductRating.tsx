import React from "react";

interface ProductRatingProps {
  rating: number;
  reviews: number;
}

const ProductRating: React.FC<ProductRatingProps> = ({ rating, reviews }) => {
  const fullStars = Math.floor(rating);
  
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <span style={{ fontSize: "18px" }}>{"⭐".repeat(fullStars)}</span>
      <span style={{ color: "#666", fontSize: "14px" }}>
        {rating.toFixed(1)} ({reviews} reviews)
      </span>
    </div>
  );
};

export default ProductRating;
