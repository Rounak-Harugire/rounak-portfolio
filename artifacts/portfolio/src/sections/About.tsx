import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';
import { Brain, Code2, Database } from 'lucide-react';

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I am a B.Tech CSE (AI & ML) graduate from DKTE's Textile and Engineering Institute, Ichalkaranji (Class of 2026, CGPA: 7.03). I specialize in translating complex machine learning concepts into functional, production-ready software systems.
          </p>
          <p>
            My expertise lies at the intersection of AI modeling and backend engineering. I have hands-on experience with Deep Learning, NLP, Generative AI, RAG systems, and integrating LLMs into full-stack applications. I don't just train models; I build the pipelines and interfaces that make them useful to end-users.
          </p>
          <p>
            From building AI-powered diet bots to enterprise document assistants and automated extension generators, I am deeply passionate about solving real-world problems through intelligent software.
          </p>
        </div>

        <GlassCard className="flex flex-col gap-6">
          <h3 className="text-xl font-display font-semibold text-foreground mb-2">Target Roles</h3>
          <ul className="space-y-4">
            <RoleItem icon={<Brain />} title="AI/ML Engineer" />
            <RoleItem icon={<Code2 />} title="Backend Developer" />
            <RoleItem icon={<Database />} title="Data Engineer" />
            <RoleItem icon={<Code2 />} title="Software Engineer" />
          </ul>
        </GlassCard>
      </div>
    </Section>
  );
}

function RoleItem({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <li className="flex items-center gap-3 text-sm font-medium">
      <div className="w-8 h-8 rounded-full bg-gradient-glow/10 text-[#00d4ff] flex items-center justify-center">
        {icon && <div className="w-4 h-4">{icon}</div>}
      </div>
      <span className="text-foreground">{title}</span>
    </li>
  );
}
