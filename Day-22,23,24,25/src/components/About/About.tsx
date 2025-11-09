// src/components/About/About.tsx
import React from "react";

interface AboutProps {
  fullName: string;
  bio: string;
  avatarUrl?: string;
}

const About: React.FC<AboutProps> = ({ fullName, bio, avatarUrl }) => (
  <section>
    <img
      src={avatarUrl ?? "https://i.pravatar.cc/150?img=56"}
      alt={fullName}
      width={120}
      style={{
        borderRadius: "50%",
        marginBottom: "20px",
      }}
    />
    <h2>{fullName}</h2>
    <p>{bio}</p>
  </section>
);

export default About;
