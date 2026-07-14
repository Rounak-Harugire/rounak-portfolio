import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';
import { BrainCircuit, Code, Database, Globe, Layers, Server, Terminal, Wrench } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: "AI/ML Concepts",
    icon: <BrainCircuit className="text-[#00d4ff]" />,
    skills: ["Deep Learning", "Reinforcement Learning", "Neural Networks", "NLP", "Generative AI", "RAG", "Prompt Engineering", "LLM Integration", "Computer Vision", "Transfer Learning"]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers className="text-[#7c3aed]" />,
    skills: ["FastAPI", "TensorFlow", "PyTorch", "Scikit-Learn", "LangChain", "Streamlit", "OpenCV", "Hugging Face", "NumPy", "Pandas"]
  },
  {
    title: "Languages",
    icon: <Code className="text-[#00d4ff]" />,
    skills: ["Python", "SQL", "Java", "HTML", "CSS", "JavaScript", "PHP", "Bash"]
  },
  {
    title: "AI/LLM Platforms",
    icon: <Globe className="text-[#7c3aed]" />,
    skills: ["Gemini AI", "Groq (Llama 3)", "OpenAI API", "Hugging Face Hub"]
  },
  {
    title: "Databases",
    icon: <Database className="text-[#00d4ff]" />,
    skills: ["MongoDB Atlas (Vector Search)", "MySQL", "PostgreSQL", "ChromaDB"]
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="text-[#7c3aed]" />,
    skills: ["Git", "GitHub", "VS Code", "Railway", "Docker", "Google Colab", "Jupyter", "Linux"]
  }
];

export function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => (
          <GlassCard key={idx} hoverEffect className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                {category.icon}
              </div>
              <h3 className="text-xl font-display font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map(skill => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:border-[#00d4ff]/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
