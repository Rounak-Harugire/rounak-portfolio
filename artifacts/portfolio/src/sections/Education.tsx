import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';
import { GraduationCap, Award, ExternalLink, Trophy, BookOpen } from 'lucide-react';

const certifications = [
  {
    title: 'Deep Learning',
    issuer: 'IIT Ropar',
    icon: <BookOpen className="w-7 h-7 text-[#7c3aed]" />,
    link: 'https://www.linkedin.com/posts/rounak-harugire-a1a6502b7_deep-learning-iit-ropar-activity-7398195460810776576-4O4M',
  },
  {
    title: 'Google Cloud Career Launchpad',
    issuer: 'Google Certification',
    icon: <Award className="w-7 h-7 text-[#00d4ff]" />,
    link: 'https://www.linkedin.com/posts/rounak-harugire-a1a6502b7_google-cloud-career-launchpad-certificate-activity-7293651064988332033-zqaI',
  },
  {
    title: 'Generative AI Mastery Workshop',
    issuer: 'Workshop Certification',
    icon: <Award className="w-7 h-7 text-[#7c3aed]" />,
    link: 'https://www.linkedin.com/posts/rounak-harugire-a1a6502b7_generative-ai-mastery-workshop-activity-7378669239869784064-omqa',
  },
  {
    title: 'Google Cloud Career Launchpad',
    issuer: 'GenAI Track',
    icon: <Award className="w-7 h-7 text-[#00d4ff]" />,
    link: 'https://www.linkedin.com/posts/rounak-harugire-a1a6502b7_google-cloud-career-launchpad-generative-activity-7349060186180857859-o57g',
  },
  {
    title: 'Java Training',
    issuer: 'Completion Certificate',
    icon: <BookOpen className="w-7 h-7 text-[#7c3aed]" />,
    link: 'https://www.linkedin.com/posts/rounak-harugire-a1a6502b7_completion-of-java-training-activity-7254875431810584576-GFaq',
  },
  {
    title: 'Python Training',
    issuer: 'Completion Certificate',
    icon: <BookOpen className="w-7 h-7 text-[#00d4ff]" />,
    link: 'https://www.linkedin.com/posts/rounak-harugire-a1a6502b7_completion-of-python-343-training-activity-7254873737903149057-nGa1',
  },
  {
    title: 'C++ Training',
    issuer: 'Completion Certificate',
    icon: <BookOpen className="w-7 h-7 text-[#7c3aed]" />,
    link: 'https://www.linkedin.com/posts/rounak-harugire-a1a6502b7_certificate-for-the-completion-cpp-training-activity-7231187184819580928-hFdR',
  },
];

const hackathons = [
  {
    title: 'NxtWave State-Level Buildathon',
    role: 'Participant',
    link: 'https://www.linkedin.com/posts/rounak-harugire-a1a6502b7_state-level-nxtwave-buildathon-activity-7430837353885265920-5wP8',
  },
  {
    title: 'Adobe Hackathon',
    role: 'Participant',
    link: 'https://www.linkedin.com/posts/rounak-harugire-a1a6502b7_adobe-hackathon-activity-7359229430319202332-YICu',
  },
];

const achievements = [
  {
    title: 'Best Project Award',
    detail: 'Received 2026',
    link: 'https://www.linkedin.com/posts/rounak-harugire-a1a6502b7_bestprojectaward-artificialintelligence-machinelearning-activity-7470120846494191616-BGi3',
    icon: <Award className="w-7 h-7 text-[#00d4ff]" />,
  },
  {
    title: 'Neuropulse Research Paper',
    detail: 'Publication — AI Screen Addiction Detection',
    link: 'https://www.linkedin.com/posts/rounak-harugire-a1a6502b7_neuro-pulse-research-paper-activity-7449460743680217088-LPZq',
    icon: <BookOpen className="w-7 h-7 text-[#7c3aed]" />,
  },
];

export function Education() {
  return (
    <Section id="education" title="Education & Certifications">

      {/* Education + Certifications row */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">

        {/* Academic Background */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold font-display flex items-center gap-3 mb-6">
            <GraduationCap className="text-[#00d4ff]" size={28} />
            Academic Background
          </h3>

          <GlassCard className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/10 blur-[50px] -z-10 rounded-full" />

            <div className="mb-2">
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20">
                2022 - 2026
              </span>
            </div>

            <h4 className="text-xl font-bold text-foreground mt-4 mb-1">
              B.Tech in CSE
            </h4>
            <p className="text-lg text-muted-foreground font-medium mb-4">
              Artificial Intelligence &amp; Machine Learning
            </p>

            <div className="space-y-2 text-sm text-muted-foreground border-t border-white/10 pt-4 mt-4">
              <p className="flex justify-between items-center">
                <span>Institution:</span>
                <span className="text-foreground text-right max-w-[200px] md:max-w-none">DKTE's Textile and Engineering Institute, Ichalkaranji</span>
              </p>
              <p className="flex justify-between items-center">
                <span>CGPA:</span>
                <span className="text-[#00d4ff] font-bold text-base">7.03</span>
              </p>
              <p className="flex justify-between items-center">
                <span>Status:</span>
                <span className="text-foreground">Passed Out</span>
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Certifications */}
        <div id="certifications" className="space-y-6">
          <h3 className="text-2xl font-bold font-display flex items-center gap-3 mb-6">
            <Award className="text-[#7c3aed]" size={28} />
            Certifications
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <GlassCard key={cert.title + cert.issuer} hoverEffect className="flex flex-col items-center p-5 text-center">
                <div className="mb-3">{cert.icon}</div>
                <h4 className="font-semibold text-sm mb-1 leading-snug">{cert.title}</h4>
                <p className="text-xs text-muted-foreground mb-4">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-1.5 text-xs font-medium text-[#00d4ff] hover:text-[#7c3aed] transition-colors"
                >
                  View Certificate <ExternalLink size={12} />
                </a>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      {/* Hackathons */}
      <div id="hackathons" className="mb-12">
        <h3 className="text-2xl font-bold font-display flex items-center gap-3 mb-6">
          <Trophy className="text-[#00d4ff]" size={28} />
          Hackathons
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {hackathons.map((h) => (
            <GlassCard key={h.title} hoverEffect className="flex flex-col items-center p-6 text-center">
              <Trophy className="w-8 h-8 text-[#00d4ff] mb-3" />
              <h4 className="font-semibold text-sm mb-1 leading-snug">{h.title}</h4>
              <p className="text-xs text-muted-foreground mb-4">{h.role}</p>
              <a
                href={h.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-1.5 text-xs font-medium text-[#00d4ff] hover:text-[#7c3aed] transition-colors"
              >
                View Post <ExternalLink size={12} />
              </a>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div id="achievements">
        <h3 className="text-2xl font-bold font-display flex items-center gap-3 mb-6">
          <Award className="text-[#7c3aed]" size={28} />
          Achievements
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((a) => (
            <GlassCard key={a.title} hoverEffect className="flex flex-col items-center p-6 text-center">
              <div className="mb-3">{a.icon}</div>
              <h4 className="font-semibold text-sm mb-1 leading-snug">{a.title}</h4>
              <p className="text-xs text-muted-foreground mb-4">{a.detail}</p>
              <a
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-1.5 text-xs font-medium text-[#00d4ff] hover:text-[#7c3aed] transition-colors"
              >
                View Post <ExternalLink size={12} />
              </a>
            </GlassCard>
          ))}
        </div>
      </div>

    </Section>
  );
}
