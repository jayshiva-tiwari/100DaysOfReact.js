import React from 'react'

function ListDyn() {
    const user = [
        { id: 1, name: "Aarav Patel", age: 29 },
        { id: 2, name: "Nisha Shah", age: 25 },
        { id: 3, name: "Rohan Kumar", age: 32 },
        { id: 4, name: "narayan tiwari", age: 28 }
    ]

    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                width: "300px",
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            <h2>User Directory</h2>
            <ul
                style={{
                    listStyle: "none",
                    padding: 0,
                    textAlign: "left",
                    marginLeft: "50px",
                }}
            >
                {user.map((user) => (
                    <li key={user.id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "6px",
                            padding: "10px",
                            margin: "8px auto",
                            width: "200px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                        }}
                    >
                        <h6>{user.name}</h6>
                        <p>Age: {user.age}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ListDyn