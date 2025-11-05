import React, { useState, useMemo } from "react";
import { products } from "./data";
import { CategoryFilter as CategoryType } from "./types";
import SearchBar from "./components/searchBox";
import CategoryFilter from "./components/CategoryFilter";
import ProductCard from "./components/ProductCard";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");

  // Filter logic using useMemo for performance optimization
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Filter by search query
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      // Filter by category
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        🛍️ Product Store
      </h1>

      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div style={{ marginBottom: "20px", color: "#666" }}>
        Showing {filteredProducts.length} of {products.length} products
      </div>

      {filteredProducts.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            color: "#999",
            fontSize: "18px",
          }}
        >
          <p>😕 No products found</p>
          <p style={{ fontSize: "14px", marginTop: "10px" }}>
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
