import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    title: "NutriMind AI",
    subtitle: "Diet Specialist Bot",
    description: "AI nutrition assistant delivering personalized diet recommendations. Built with FastAPI, LangChain, Groq Llama 3; MongoDB Atlas for persistent chat memory; optimized for real-time responses.",
    tech: ["Python", "FastAPI", "Streamlit", "LangChain", "Llama 3", "MongoDB"],
    live: "https://ai-diet-specialist-production.up.railway.app/",
    repo: "#",
    color: "#00d4ff"
  },
  {
    title: "Neuropulse",
    subtitle: "AI Screen Addiction Detector",
    description: "Android AI application analyzing screen usage patterns to detect addictive behavior; deep learning models predict dopamine spikes and assess addiction risk levels.",
    tech: ["Python", "TensorFlow", "PyTorch", "Pandas", "Java"],
    live: "",
    repo: "#",
    color: "#7c3aed"
  },
  {
    title: "AI Data Analysis Agent",
    subtitle: "Interactive CSV/XLSX Analyzer",
    description: "LLM-powered agent that analyzes uploaded datasets and answers user questions via an interactive ChatGPT-style chat interface. Built end-to-end data pipeline.",
    tech: ["Python", "Streamlit", "LLM APIs", "Pandas", "Railway"],
    live: "https://data-analysis-ai-agent-production.up.railway.app/",
    repo: "#",
    color: "#00d4ff"
  },
  {
    title: "Attendance Manager",
    subtitle: "Face Recognition System",
    description: "Automated attendance system using face recognition to identify and log attendance in real time, removing manual/proxy attendance.",
    tech: ["Python", "OpenCV", "Face Recognition"],
    live: "",
    repo: "#",
    color: "#7c3aed"
  },
  {
    title: "Gig Finder",
    subtitle: "Part-Time Job Portal",
    description: "Full-stack web app connecting employers and job seekers. Features: auth, resume upload, category-based filtering, real-time AJAX listings, secure hashing.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    live: "",
    repo: "#",
    color: "#00d4ff"
  },
  {
    title: "HairCare",
    subtitle: "Ayurvedic Wellness Platform",
    description: "Platform delivering personalized hair care recommendations based on Ayurvedic dosha type via a multi-step quiz, plus user dashboard and appointment booking.",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    live: "",
    repo: "#",
    color: "#7c3aed"
  }
];

export function Projects() {
  return (
    <Section id="projects" title="Personal Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <GlassCard key={idx} hoverEffect className="flex flex-col h-full group">
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold font-display text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00d4ff] group-hover:to-[#7c3aed] transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider mt-1 mb-4" style={{ color: project.color }}>
                {project.subtitle}
              </p>
              
              <p className="text-sm text-muted-foreground mb-6 line-clamp-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tech.map(tech => (
                  <span key={tech} className="text-[11px] font-medium px-2 py-1 bg-white/5 rounded border border-white/5 text-foreground/70">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-[#00d4ff] transition-colors"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
              {project.repo && (
                <a 
                  href={project.repo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors ml-auto"
                >
                  <Github size={16} /> Source Code
                </a>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
