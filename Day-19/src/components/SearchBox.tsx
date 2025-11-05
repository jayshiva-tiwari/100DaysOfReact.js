import React from "react";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search products..."
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

export default SearchBar;
