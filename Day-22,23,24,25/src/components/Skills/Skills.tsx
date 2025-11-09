// src/components/Skills/Skills.tsx
import React from "react";

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <section>
    <h3>Skills</h3>
    <ul style={{ display: "flex", flexWrap: "wrap", gap: "10px", listStyle: "none", padding: 0 }}>
      {skills.map((skill) => (
        <li
          key={skill}
          style={{
            background: "#007bff",
            color: "white",
            padding: "6px 14px",
            borderRadius: "16px",
            fontWeight: "500",
          }}
        >
          {skill}
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
