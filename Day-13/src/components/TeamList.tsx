import React from "react";
import TeamMember from "./TeamMember";

const TeamList: React.FC = () => {
    return (
        <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
            <h1>Our Team</h1>

            <TeamMember name="Aarav Patel" role="Frontend Developer" status="active" />

            <TeamMember
                name="Nisha Shah"
                role="UI/UX Designer"
                avatar="https://i.pravatar.cc/100?img=45"
                status="away"
            />

            <TeamMember name="Rohan Kumar" role="Backend Engineer" />
            {/* Uses default avatar and status */}

            <TeamMember
                name="Priya Singh"
                role="Project Manager"
                avatar="https://i.pravatar.cc/100?img=32"
                status="offline"
            />
        </div>
    );
};

export default TeamList;
