import { personalInfo, techStack } from '../data/content';

// Home Component
export default function Home() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="border border-white/20 p-6 md:p-8 backdrop-blur-sm bg-black/40">
        <div className="text-4xl md:text-6xl font-bold mb-4 tracking-wider overflow-hidden">
          <span className="inline-block animate-slideInLeft text-white">Chris</span>
          <span className="inline-block animate-slideInRight text-white/50">EGUAOBA</span>
        </div>
        <div className="h-px bg-gradient-to-r from-white/0 via-white/50 to-white/0 mb-6 animate-expandWidth"></div>
        <p className="text-lg md:text-xl text-white/70 mb-6 animate-fadeInUp delay-1">
          {personalInfo.title}
        </p>
        <p className="text-sm md:text-base text-white/50 max-w-2xl leading-relaxed animate-fadeInUp delay-2">
          {personalInfo.bio}
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {techStack.map((tech, i) => (
          <div 
            key={i} 
            className="border border-white/20 p-4 text-center backdrop-blur-sm bg-black/40 hover:bg-white/5 transition-all animate-fadeInUp cursor-pointer"
            style={{ animationDelay: `${0.3 + i * 0.1}s` }}
          >
            <div className="text-2xl mb-2 animate-pulse">◈</div>
            <div className="text-sm md:text-base text-white/80">{tech}</div>
          </div>
        ))}
      </div>

      <div className="border border-white/20 p-6 md:p-8 backdrop-blur-sm bg-black/40 animate-fadeInUp delay-3">
        <h3 className="text-2xl font-bold mb-4 text-white/90">About Me</h3>
        <p className="text-white/60 leading-relaxed mb-4">
          I'm a full-stack developer with 3+ years of experience building scalable web and mobile applications. 
          I specialize in React, React Native, backend API architecture, and PostgreSQL database design. 
          I enjoy shipping features end-to-end — from UI implementation to backend logic and deployment.
        </p>
        <p className="text-white/60 leading-relaxed">
          My background includes startup environments, freelance product builds, and production deployments. 
          While my primary focus is modern web and mobile systems, I also have experience integrating 
          blockchain technologies and smart contracts into real-world applications when required. 
          I value clean architecture, performance, and building products that solve practical problems.
        </p>
      </div>
    </div>
  );
}
