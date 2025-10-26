import React, { useState } from "react";

function ToggleMessage() {
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility() {
        setIsVisible(!isVisible);
    }

    return (
        <div style={{ textAlign: "center", margin: "30px" }}>
            <h2>Conditional Rendering Demo</h2>

            <button onClick={toggleVisibility}>
                {isVisible ? "Hide Message" : "Show Message"}
            </button>

            {/* Method 1: Using && operator */}
            {isVisible && (
                <div
                    style={{
                        marginTop: "20px",
                        padding: "20px",
                        backgroundColor: "#00000070",
                        border: "2px solid #007bff48",
                        borderRadius: "8px",
                        maxWidth: "400px",
                        margin: "20px auto",
                    }}
                >
                    <h3>🎉 Hello from React!</h3>
                    <p>This message is conditionally rendered.</p>
                </div>
            )}
        </div>
    );
}

export default ToggleMessage;
