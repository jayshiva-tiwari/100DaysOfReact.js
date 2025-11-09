import React from "react";
import Section from "./components/Section/Section";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import ProjectsList, { Project } from "./components/Projects/ProjectsList";
import { skills } from "./data/Skills.ts";
import { projects } from "./data/Projects.ts";

const bio =
  "I'm a React developer and MBA student, with a passion for web interfaces, research, and blending tech with business strategy. I volunteer, design, analyze data and build products for impact.";

const Home: React.FC = () => (
  <main>
    <Section>
      <About
        fullName="Shiva Tiwari"
        bio={bio}
        avatarUrl="https://i.pinimg.com/1200x/bd/60/28/bd60280b725148a153be71b31ea2de51.jpg"
      />
    </Section>

    <Section title="Skills & Tools">
      <Skills skills={skills} />
    </Section>

    <Section title="My Projects">
      <ProjectsList projects={projects} />
    </Section>
  </main>
);

export default Home;
