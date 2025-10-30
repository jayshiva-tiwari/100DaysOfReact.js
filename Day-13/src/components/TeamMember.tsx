import React from "react";

interface TeamMemberProps {
    name: string;
    role: string;
    avatar?: string;
    status?: "active" | "away" | "offline";
}

const TeamMember: React.FC<TeamMemberProps> = ({
    name,
    role,
    avatar = "https://i.pravatar.cc/100?img=1",
    status = "active",
}) => {
    const statusColor = {
        active: "#28a745",
        away: "#ffc107",
        offline: "#6c757d",
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                margin: "10px 0",
                backgroundColor: "#f9f9f986",
            }}
        >
            <img
                src={avatar}
                alt={name}
                style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                }}
            />
            <div style={{ flex: 1 }}>
                <h3 style={{ color: "#1b242dff", margin: 0 }}>{name}</h3>
                <p style={{ margin: "5px 0", color: "#000000a7" }}>{role}</p>
            </div>
            <div
                style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: statusColor[status],
                }}
                title={status}
            />
        </div>
    );
};

export default TeamMember;
