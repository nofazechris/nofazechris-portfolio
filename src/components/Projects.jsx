import { projects } from '../data/content';

export default function Projects() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-wider animate-slideInLeft">PROJECTS</h2>
      {projects.map((project, i) => (
        <a 
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-white/20 p-6 backdrop-blur-sm bg-black/40 hover:border-white/40 hover:bg-white/5 transition-all group animate-fadeInUp cursor-pointer"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-white/80 transition-colors">
              {project.name}
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-xs px-2 py-1 border border-white/30 text-white/60 rounded">
                {project.status}
              </span>
              <span className="text-white/30">0{i + 1}</span>
            </div>
          </div>
          <p className="text-white/50 mb-3 text-xs md:text-sm">{project.tech}</p>
          <p className="text-sm md:text-base text-white/70 mb-2">{project.desc}</p>
          <p className="text-xs text-white/40">{project.year}</p>
          <div className="mt-4 flex items-center text-white/50 group-hover:text-white/80 transition-colors">
            <span className="text-sm">View Project →</span>
          </div>
        </a>
      ))}
    </div>
  );
}
