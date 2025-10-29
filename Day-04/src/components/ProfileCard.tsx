import React from 'react';
import { useState } from 'react';

function ProfileCard({ name, role, image, profileUrl }) {
    // Experiment with different card styles or background colors using props.
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const users = [
        { id: 1, image: "https://i.pinimg.com/736x/0c/e4/64/0ce4644b519c77ac82c5656f1828c9d5.jpg", name: "Aarav Patel", role: "Frontend Developer" },
        { id: 2, image: "https://i.pinimg.com/736x/dd/21/62/dd2162191c6f673225c29ccae52962cb.jpg", name: "Nisha Shah", role: "UI Designer" },
        { id: 3, image: "https://i.pinimg.com/736x/0c/e4/64/0ce4644b519c77ac82c5656f1828c9d5.jpg", name: "Rohan Kumar", role: "Backend Engineer" },
        { id: 4, image: "https://i.pinimg.com/736x/0c/e4/64/0ce4644b519c77ac82c5656f1828c9d5.jpg", name: "narayan tiwari", role: "Full stack" },
        { id: 5, image: "https://i.pinimg.com/736x/0c/e4/64/0ce4644b519c77ac82c5656f1828c9d5.jpg", name: "Shiva Tiwari", role: "Full stack" },
        { id: 6, image: "https://i.pinimg.com/1200x/98/d1/47/98d147dbac4c8545ae7330c92d9ca113.jpg", name: "kaushik Tiwari", role: "CEO" },
        { id: 7, image: "https://i.pinimg.com/736x/87/5b/4f/875b4fb82c44a038466807b0dcf884cc.jpg", name: "vipul Tiwari", role: "Devops Engineer" },
        { id: 8, image: "https://i.pinimg.com/736x/23/57/24/235724d60503e6429c4a621f35a42fbe.jpg", name: "ashish Tiwari", role: "Tester" },
    ]

    // - Add conditional rendering: if image is not provided, display a default placeholder.
    if (!image) {
        image = 'https://i.pinimg.com/736x/dd/21/62/dd2162191c6f673225c29ccae52962cb.jpg';
    }

    return (
        <div 
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}
        
        >
            {users.map((user) => (
                <div
                    key={user.id}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        width: '200px',
                        textAlign: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        margin: '20px',
                        padding: '15px',
                        backgroundColor: '#2e2834ff',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease-in-out',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                >
                    <img
                        src={user.image}
                        alt={image}
                        style={{ width: '50%', borderRadius: '50%', cursor: 'pointer',
                        transition: 'transform 0.3s ease-in-out',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)', }}
                        
                    />
                    <h2
                        style={{
                            fontSize: '1.5rem',
                            margin: '1px 0',
                            color: '#ff73005b'
                        }}
                    >{user.name}</h2>
                    <p
                        style={{
                            fontSize: '1rem',
                            margin: '1px 0 15px 0',
                            color: '#ffffffaa'
                        }}
                    >{user.role}</p>
                    <a
                        href={profileUrl}
                        style={{
                            border: "1px solid #ffffffaa",
                            padding: "5px",
                            borderRadius: "5px",
                            color: "#ffffffb7",
                            textDecoration: "none",
                            margin: "10px 0"
                        }}
                    >View Profile</a>
                </div>
            ))
            }
        </div>
    );
}

export default ProfileCard;
