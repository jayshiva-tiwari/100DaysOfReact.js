// src/components/Projects/ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  repoUrl?: string;
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  repoUrl,
  imageUrl,
}) => (
  <div style={{
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: "#fff",
    marginBottom: "20px",
    maxWidth: "350px",
  }}>
    {imageUrl && (
      <img src={imageUrl} alt={title} style={{ width: "100%", borderRadius: "6px" }} />
    )}
    <h4>{title}</h4>
    <p>{description}</p>
    {repoUrl && (
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        View Repo
      </a>
    )}
  </div>
);

export default ProjectCard;
