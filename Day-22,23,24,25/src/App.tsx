import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Section from "./components/Section/Section";
// import About from "./components/About/About";
// import Skills from "./components/Skills/Skills";
// import ProjectsList from "./components/Projects/ProjectsList";
// import { skills } from "./data/Skills.ts";
// import Contact from "./pages/Contact.tsx";
// import { projects } from "./data/Projects.ts";
// import Header from "./components/Header.tsx";
// import Footer from "./components/Footer.tsx";
// import MainHome from "./pages/MainHome";
import MainPage from "./pages/MainPage";

// const bio =
//   "I'm a React developer and MBA student, with a passion for web interfaces, research, and blending tech with business strategy. I volunteer, design, analyze data and build products for impact.";

const Home: React.FC = () => (
  // <Router>
  //   <main>
  //     <Header />
  //     <Route path="/" element={<Home />} />
  //     <Section>
  //       <About
  //         fullName="Shiva Tiwari"
  //         bio={bio}
  //         avatarUrl="https://i.pinimg.com/1200x/bd/60/28/bd60280b725148a153be71b31ea2de51.jpg"
  //       />
  //     </Section>

  //     <Section title="Skills & Tools">
  //       <Skills skills={skills} />
  //     </Section>

  //     <Section title="My Projects">
  //       <ProjectsList projects={projects} />
  //     </Section>

  //     <Section title="Contact Me">
  //     <Contact />
  //   </Section>
  //     <Route path="/projects" element={<Projects />} />
  //     <Routes>
  //       <Route path="/contact" element={<Contact />} />
  //     </Routes>
  //     <Footer />
  //   </main>
  // </Router>
  <>
    <MainPage />
    {/* <MainHome /> */}
  </>
);

export default Home;
