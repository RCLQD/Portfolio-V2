import React, { useState, useEffect, useRef } from 'react';
import './background.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from './pages/About';
import Work from './pages/Work';
import Experience from './pages/Experience';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToSection = (section) => {
    const sections = {
      Home: homeRef,
      About: aboutRef,
      Work: workRef,
      Experience: experienceRef
    };
  sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <main className={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} onScrollTo={scrollToSection} />
      <div ref={homeRef}>
        <Home theme={theme} />
      </div>
      <div ref={aboutRef}>
        <About theme={theme} />
      </div>
      <div ref={workRef}>
        <Work theme={theme} />
      </div>
      <div ref={experienceRef}>
        <Experience theme={theme} />
      </div>
      <Footer theme={theme} />
    </main>
  )
}

export default App;