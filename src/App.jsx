// ==================== 1. src/App.jsx ====================
import React, { useState } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      <ThreeBackground />
      
      <div className="relative z-10 h-full overflow-y-auto">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main className="container mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-16 min-h-screen">
          {renderContent()}
        </main>

        <Footer />
      </div>
    </div>
  );
}
