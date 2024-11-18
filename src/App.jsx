import React, { useState, useEffect, useRef } from "react";
import "./background.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [currentSection, setCurrentSection] = useState(
    localStorage.getItem("currentSection") || "Home"
  );

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const experienceRef = useRef(null);

  const sections = [
    { name: "Home", ref: homeRef },
    { name: "About", ref: aboutRef },
    { name: "Work", ref: workRef },
    { name: "Experience", ref: experienceRef },
  ];

  const scrollToSection = (section) => {
    const sectionObj = sections.find((s) => s.name === section);
    if (sectionObj?.ref?.current) {
      sectionObj.ref.current.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(section);
      localStorage.setItem("currentSection", section);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const savedSection = localStorage.getItem("currentSection") || "Home";
    const sectionObj = sections.find((s) => s.name === savedSection);
    if (sectionObj?.ref?.current) {
      sectionObj.ref.current.scrollIntoView({ behavior: "auto" });
    }
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.35,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const visibleSection = sections.find((s) => s.ref.current === entry.target)?.name;
          if (visibleSection) {
            setCurrentSection(visibleSection);
            localStorage.setItem("currentSection", visibleSection);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, []);

  return (
    <main className={theme}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onScrollTo={scrollToSection}
        currentSection={currentSection}
      />
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
  );
};

export default App;