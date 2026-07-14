import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export function Education() {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Education */}
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
              Artificial Intelligence & Machine Learning
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
        <div className="space-y-6">
          <h3 className="text-2xl font-bold font-display flex items-center gap-3 mb-6">
            <Award className="text-[#7c3aed]" size={28} />
            Achievements
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <GlassCard hoverEffect className="flex flex-col justify-center p-6 text-center">
              <Award className="w-8 h-8 text-[#7c3aed] mx-auto mb-3" />
              <h4 className="font-semibold text-sm mb-1">Deep Learning</h4>
              <p className="text-xs text-muted-foreground">Issued by IIT Ropar</p>
            </GlassCard>

            <GlassCard hoverEffect className="flex flex-col justify-center p-6 text-center">
              <CheckCircle2 className="w-8 h-8 text-[#00d4ff] mx-auto mb-3" />
              <h4 className="font-semibold text-sm mb-1">Cloud Career Launchpad</h4>
              <p className="text-xs text-muted-foreground">Google Certification</p>
            </GlassCard>

            <GlassCard hoverEffect className="flex flex-col justify-center p-6 text-center">
              <GraduationCap className="w-8 h-8 text-[#7c3aed] mx-auto mb-3" />
              <h4 className="font-semibold text-sm mb-1">State-level Buildathon</h4>
              <p className="text-xs text-muted-foreground">Participant</p>
            </GlassCard>

            <GlassCard hoverEffect className="flex flex-col justify-center p-6 text-center">
              <Award className="w-8 h-8 text-[#00d4ff] mx-auto mb-3" />
              <h4 className="font-semibold text-sm mb-1">Best Project Award</h4>
              <p className="text-xs text-muted-foreground">Received 2026</p>
            </GlassCard>
          </div>
        </div>

      </div>
    </Section>
  );
}
