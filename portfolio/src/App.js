import React from 'react'
import HeaderSection from './component/header/HeaderSection'
import Navbar from './component/navbaar/Navbar'
import Project from './component/project/projects'
import Skills from './component/skills/Skills'
function App() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <Project />
      <Skills />
    </>
  );
}

export default App;
