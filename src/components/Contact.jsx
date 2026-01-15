import { personalInfo } from '../data/content';

export default function Contact() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-wider animate-slideInLeft">CONNECT</h2>
      
      <div className="border border-white/20 p-6 md:p-8 backdrop-blur-sm bg-black/40 space-y-6">
        {[
          { label: 'Email', value: personalInfo.email, link: `mailto:${personalInfo.email}` },
          { label: 'GitHub', value: personalInfo.github, link: `https://${personalInfo.github}` },
          { label: 'Twitter', value: personalInfo.twitter, link: `https://twitter.com/${personalInfo.twitter.replace('@', '')}` },
          { label: 'Linkedin', value: personalInfo.Linkedin, link: '#' }
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-white/10 pb-4 hover:border-white/30 transition-all animate-fadeInUp group"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className="text-white/50 text-sm md:text-base">{item.label}</span>
            <span className="text-white font-mono text-sm md:text-base break-all group-hover:text-white/80 transition-colors">
              {item.value}
            </span>
          </a>
        ))}
      </div>
      
      <div className="border border-white/20 p-6 backdrop-blur-sm bg-black/40 animate-fadeInUp delay-4">
        <p className="text-sm md:text-base text-white/70 mb-4">
          Available for freelance projects and collaborations
        </p>
        <button className="w-full border border-white/40 py-3 text-white hover:bg-white hover:text-black transition-all font-bold tracking-wider text-sm md:text-base animate-pulse-slow">
          SEND MESSAGE
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4 animate-fadeInUp delay-5">
        <div className="border border-white/20 p-6 backdrop-blur-sm bg-black/40 text-center">
          <div className="text-3xl font-bold text-white/90 mb-2">10+</div>
          <div className="text-white/50 text-sm">Projects Completed</div>
        </div>
        <div className="border border-white/20 p-6 backdrop-blur-sm bg-black/40 text-center">
          <div className="text-3xl font-bold text-white/90 mb-2">4+</div>
          <div className="text-white/50 text-sm">Years Experience</div>
        </div>
        <div className="border border-white/20 p-6 backdrop-blur-sm bg-black/40 text-center">
          <div className="text-3xl font-bold text-white/90 mb-2">15+</div>
          <div className="text-white/50 text-sm">Technologies</div>
        </div>
      </div>
    </div>
  );
}
