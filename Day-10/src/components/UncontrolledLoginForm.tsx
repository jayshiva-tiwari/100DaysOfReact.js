import React, { useRef } from "react";

function UncontrolledLoginForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Username: ${usernameRef.current.value}\nPassword: ${passwordRef.current.value}`);
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "2rem auto", textAlign: "center" }}>
      <h2>Uncontrolled Login</h2>
      <input type="text" placeholder="Username" ref={usernameRef} style={{ padding: "8px", margin: "10px 0", width: "100%" }} />
      <input type="password" placeholder="Password" ref={passwordRef} style={{ padding: "8px", margin: "10px 0", width: "100%" }} />
      <button type="submit" style={{ padding: "8px 22px" }}>Login</button>
    </form>
  );
}

export default UncontrolledLoginForm;
