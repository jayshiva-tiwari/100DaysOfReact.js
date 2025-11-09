// src/components/Projects/ProjectsList.tsx
import React from "react";
import ProjectCard from "./ProjectCard";

export interface Project {
  title: string;
  description: string;
  repoUrl?: string;
  imageUrl?: string;
}

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => (
  <section>
    <h3>Projects</h3>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "20px",
    }}>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);

export default ProjectsList;
