import { personalInfo, techStack } from '../data/content';

export default function Home() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="border border-white/20 p-6 md:p-8 backdrop-blur-sm bg-black/40">
        <div className="text-4xl md:text-6xl font-bold mb-4 tracking-wider overflow-hidden">
          <span className="inline-block animate-slideInLeft text-white">NOFAZE</span>
          <span className="inline-block animate-slideInRight text-white/50">CHRIS</span>
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
          I'm a passionate full-stack developer with a deep focus on Web3 technologies and decentralized applications. 
          With over 5 years of experience in building scalable web and mobile solutions, I specialize in creating 
          seamless user experiences that bridge traditional web development with blockchain technology.
        </p>
        <p className="text-white/60 leading-relaxed">
          My expertise spans from frontend frameworks like React and React Native to backend systems using Javascript, Node.js, and Python. 
          I'm particularly excited about the intersection of AI, blockchain, and mobile development, constantly exploring 
          new ways to push the boundaries of what's possible in decentralized ecosystems.
        </p>
      </div>
    </div>
  );
}
