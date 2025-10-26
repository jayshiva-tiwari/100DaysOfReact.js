import React from "react";

// Receives theme & function from parent
function ThemeToggle({ theme, onToggle }) {
    return (
        <div style={{ margin: "40px auto", textAlign: "center" }}>
            <p>Current theme: <b>{theme}</b></p>
            <button onClick={onToggle}>
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
        </div>
    );
}

export default ThemeToggle;
