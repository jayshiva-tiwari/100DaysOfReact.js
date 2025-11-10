import React from 'react'
import ProjectsList from './ProjectsList';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <>
        <ProjectsList projects={projects} />
        <ProjectCard />
    </>
  )
}

export default Projects