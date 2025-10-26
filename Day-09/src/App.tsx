import React, { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  // State for theme
  const [theme, setTheme] = useState("light");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Style changes with theme
  const appStyle = {
    background: theme === "dark" ? "#282c34" : "#f5f6fa",
    color: theme === "dark" ? "#fff" : "#222",
    minHeight: "100vh",
    transition: "background 0.3s, color 0.3s",
  };

  return (
    <div style={appStyle}>
      <h1>Day 9: Theme Toggler Demo</h1>
      {/* Pass data & function to child */}
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </div>
  );
}

export default App;
