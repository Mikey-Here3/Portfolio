import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingHireButton } from './components/FloatingHireButton';

function App() {
  return (
    <ThemeProvider>
      <div className="font-inter">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <FloatingHireButton />
      </div>
    </ThemeProvider>
  );
}

export default App;