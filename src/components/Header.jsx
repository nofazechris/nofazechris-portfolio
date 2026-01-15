export default function Header({ activeSection, setActiveSection }) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-white/10 z-50 animate-slideDown">
      <nav className="container mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl md:text-2xl font-bold tracking-widest animate-pulse-slow">
          ◈ NOFAZECHRIS
        </div>
        <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
          {['home', 'projects', 'skills', 'contact'].map((section, i) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`uppercase tracking-wider transition-all text-sm md:text-base animate-fadeIn ${
                activeSection === section 
                  ? 'text-white border-b-2 border-white pb-1' 
                  : 'text-white/50 hover:text-white'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
