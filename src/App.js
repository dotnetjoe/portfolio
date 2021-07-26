import React from 'react'
import HeaderSection from './component/header/HeaderSection'
import Navbar from './component/navbaar/Navbar'
import Project from './component/project/projects'
import Skills from './component/skills/Skills'
import SocialLink from './component/socialLink/SocialLink'
import Contact from './component/contact/Contact'
function App() {
  return (
    <>
      <Navbar />
        <HeaderSection />
        <Project />
        <Skills />
        <SocialLink />
        <Contact />
    </>
  );
}

export default App;
