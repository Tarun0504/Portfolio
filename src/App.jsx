import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Training from './components/Training'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import './App.css'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.fade-in');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Training />
        <Projects />
      </main>
      <Contact />
    </div>
  )
}

export default App
