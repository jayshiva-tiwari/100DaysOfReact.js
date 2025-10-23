// import React from "react";

function UserList() {
    const users = [
        { id: 1, name: "Aarav Patel", role: "Frontend Developer" },
        { id: 2, name: "Nisha Shah", role: "UI Designer" },
        { id: 3, name: "Rohan Kumar", role: "Backend Engineer" },
        { id: 4, name: "narayan tiwari", role: "Full stack" },
        { id: 4, name: "ravi bhai", role: "Full stack" },
        { id: 4, name: "kaushik tiwari", role: "CEO" },
        { id: 4, name: "vipul tiwari", role: "Devops Engineer" },
        { id: 4, name: "ashish tiwari", role: "Tester" },
    ];
    return (
        <div className="con">
        <div style={{ textAlign: "center" }}>
            <h2>User Directory</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {users.map((user) => (
                    <li
                        key={user.id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "6px",
                            padding: "10px",
                            margin: "8px auto",
                            width: "250px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                        }}
                    >
                        <h3>{user.name}</h3>
                        <p>{user.role}</p>
                    </li>   
                ))}
            </ul>
        </div>
        </div>
    );
}

export default UserList;
