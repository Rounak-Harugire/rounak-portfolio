import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      
      {/* Main Internship */}
      <GlassCard className="relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#7c3aed]/10 blur-[80px] -z-10 rounded-full" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h3 className="text-2xl font-bold font-display text-foreground">AI Engineering & Web Development Intern</h3>
            <p className="text-[#00d4ff] font-medium text-lg flex items-center gap-2 mt-1">
              <Briefcase size={18} /> Zaalima Development Pvt. Ltd.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">
            <Calendar size={16} /> Completed
          </div>
        </div>

        <div className="space-y-3 text-muted-foreground">
          <p className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 mt-0.5 text-[#7c3aed] shrink-0" />
            <span>Worked as the AI Engineer in a 5-member team, responsible for developing and integrating AI components.</span>
          </p>
          <p className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 mt-0.5 text-[#7c3aed] shrink-0" />
            <span>Built AI functionalities using Gemini AI, including prompt-based content generation and automation.</span>
          </p>
          <p className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 mt-0.5 text-[#7c3aed] shrink-0" />
            <span>Developed AI modules for document understanding, search, and question-answering features.</span>
          </p>
          <p className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 mt-0.5 text-[#7c3aed] shrink-0" />
            <span>Connected AI features with backend APIs, databases, and web applications.</span>
          </p>
        </div>
      </GlassCard>

      <h4 className="text-xl font-semibold mb-6 flex items-center gap-3">
        <div className="w-1.5 h-6 bg-gradient-to-b from-[#00d4ff] to-[#7c3aed] rounded-full" />
        Internship Projects
      </h4>

      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard hoverEffect>
          <div className="text-xs font-bold uppercase tracking-wider text-[#00d4ff] mb-2">Internship Project</div>
          <h3 className="text-xl font-bold mb-3">Extensio.ai</h3>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            AI-powered Chrome Extension generator using Gemini API. Converts natural language prompts into fully functional Manifest V3 Chrome extensions, packaged as downloadable ZIPs.
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {['Node.js', 'Express.js', 'Gemini API', 'JavaScript'].map(tech => (
              <span key={tech} className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10 text-foreground/80">{tech}</span>
            ))}
          </div>
        </GlassCard>

        <GlassCard hoverEffect>
          <div className="text-xs font-bold uppercase tracking-wider text-[#7c3aed] mb-2">Internship Project</div>
          <h3 className="text-xl font-bold mb-3">OpsMind AI</h3>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            Enterprise RAG-powered document assistant. Lets users query PDF documents and get answers with verifiable source citations. Uses MongoDB Atlas Vector Search (HNSW).
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {['React', 'Node.js', 'MongoDB Atlas', 'Gemini Flash', 'Docker'].map(tech => (
              <span key={tech} className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10 text-foreground/80">{tech}</span>
            ))}
          </div>
        </GlassCard>
      </div>

    </Section>
  );
}
