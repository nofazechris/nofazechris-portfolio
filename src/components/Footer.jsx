export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-xs md:text-sm">
        <div className="animate-typing">© 2025 NOFAZECHRIS</div>
        <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
          <span className="animate-fadeIn delay-1">BUILT WITH THREE.JS</span>
          <span className="animate-pulse">◈</span>
          <span className="animate-fadeIn delay-2">WEB3 READY</span>
        </div>
      </div>
    </footer>
  );
}