import React, { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}`);
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "2rem auto", textAlign: "center" }}>
            <h2>Login Form</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                style={{ padding: "8px", margin: "10px 0", width: "100%" }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{ padding: "8px", margin: "10px 0", width: "100%" }}
            />
            <button type="submit" style={{ padding: "8px 22px" }}>Login</button>
        </form>
    );
}

export default LoginForm;
