import { useState } from 'react';
import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate slight delay before opening mailto
    setTimeout(() => {
      const formData = new FormData(e.currentTarget);
      const name = formData.get('name');
      const subject = `Portfolio Contact from ${name}`;
      const body = formData.get('message');
      
      window.location.href = `mailto:rounakharugire3435@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body as string)}`;
      
      toast({
        title: "Redirecting to email client",
        description: "Your message is ready to be sent.",
      });
      
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 500);
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid lg:grid-cols-5 gap-12">
        
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-muted-foreground text-lg mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-4">
            <ContactInfoItem 
              icon={<Mail />} 
              title="Email" 
              value="rounakharugire3435@gmail.com" 
              href="mailto:rounakharugire3435@gmail.com" 
            />
            <ContactInfoItem 
              icon={<Phone />} 
              title="Phone" 
              value="+91 7840942613" 
              href="tel:+917840942613" 
            />
            <ContactInfoItem 
              icon={<MapPin />} 
              title="Location" 
              value="Ichalkaranji, Maharashtra, India" 
              href="#" 
            />
          </div>

          <div className="flex gap-4 pt-4">
            <SocialButton icon={<FaGithub size={20} />} href="https://github.com/Rounak-Harugire" />
            <SocialButton icon={<FaLinkedin size={20} />} href="https://www.linkedin.com/in/rounak-harugire-a1a6502b7/" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <GlassCard>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all resize-none"
                  placeholder="Hello Rounak, I'd like to discuss..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full group py-4 rounded-xl bg-gradient-glow text-background font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Opening Email Client..." : "Send Message"}
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </GlassCard>
        </div>

      </div>
    </Section>
  );
}

function ContactInfoItem({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href: string }) {
  return (
    <a href={href} className="flex items-center gap-4 group p-2 -ml-2 rounded-lg hover:bg-white/5 transition-colors w-fit">
      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00d4ff] group-hover:bg-[#00d4ff]/10 group-hover:border-[#00d4ff]/30 transition-all">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="font-semibold text-foreground">{value}</p>
      </div>
    </a>
  );
}

function SocialButton({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-[#7c3aed] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all"
    >
      {icon}
    </a>
  );
}
