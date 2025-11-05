import React from "react";
import { CategoryFilter as CategoryType } from "../types";

interface CategoryFilterProps {
  activeCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const categories: { value: CategoryType; label: string }[] = [
    { value: "all", label: "All" },
    { value: "electronics", label: "Electronics" },
    { value: "clothing", label: "Clothing" },
    { value: "books", label: "Books" },
    { value: "home", label: "Home" },
  ];

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onCategoryChange(cat.value)}
          style={{
            padding: "8px 16px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            backgroundColor: activeCategory === cat.value ? "#007bff" : "white",
            color: activeCategory === cat.value ? "white" : "#333",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
