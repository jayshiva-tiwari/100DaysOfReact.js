import React from 'react';

function ProfileCard({ name, role, image }) {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            width: '200px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            margin: '20px',
            padding: '15px'
        }}>
            <img
                src={image}
                alt={name}
                style={{ width: '50%', borderRadius: '50%' }}
            />
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    );
}

export default ProfileCard;
