import { skills, experience } from '../data/content';

export default function Skills() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-wider animate-slideInLeft">SKILLS</h2>
      
      {skills.map((skillSet, i) => (
        <div 
          key={i} 
          className="border border-white/20 p-6 backdrop-blur-sm bg-black/40 animate-fadeInUp"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <h3 className="text-lg md:text-xl font-bold mb-4 text-white/90 animate-pulse">{skillSet.cat}</h3>
          <div className="flex flex-wrap gap-3">
            {skillSet.items.map((skill, j) => (
              <span 
                key={j} 
                className="px-3 md:px-4 py-2 border border-white/30 text-xs md:text-sm text-white/70 hover:bg-white/10 hover:border-white/50 transition-all animate-fadeIn cursor-pointer"
                style={{ animationDelay: `${0.3 + j * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className="border border-white/20 p-6 md:p-8 backdrop-blur-sm bg-black/40 animate-fadeInUp delay-4">
        <h3 className="text-2xl font-bold mb-6 text-white/90">Experience</h3>
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div key={i} className="border-l-2 border-white/20 pl-4 hover:border-white/50 transition-colors">
              <h4 className="text-lg font-bold text-white/90">{exp.role}</h4>
              <p className="text-white/60 text-sm mb-2">{exp.company} • {exp.period}</p>
              <p className="text-white/50 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
