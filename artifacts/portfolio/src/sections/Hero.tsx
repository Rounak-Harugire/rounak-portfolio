import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// @ts-ignore
import profilePhoto from '@assets/profile_1784011182488.jpg';

const TITLES = [
  "AI/ML Engineer",
  "Backend Developer",
  "GenAI & LLM Builder",
  "Python Engineer"
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
      } else {
        setText(currentTitle.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, titleIndex]);

  return (
    <section id="home" className="min-h-[100dvh] flex items-center justify-center pt-20 pb-12 px-6 md:px-12 overflow-hidden relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7c3aed]/20 rounded-full blur-[120px] -z-10 opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#00d4ff]/10 rounded-full blur-[100px] -z-10 opacity-40" />

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
        
        {/* Left: Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 text-[#00d4ff] text-sm font-medium mb-8"
          >
            <Terminal size={16} />
            <span>Available for opportunities</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-4"
          >
            Hi, I'm <br />
            <span className="text-gradient">Rounak Rafik Harugire</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-8 md:h-12 mb-6"
          >
            <h2 className="text-xl md:text-3xl text-muted-foreground font-medium flex items-center justify-center md:justify-start">
              <span className="mr-2">I am a</span>
              <span className="text-foreground border-r-2 border-[#00d4ff] pr-1 animate-pulse">
                {text}
              </span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            AI/ML graduate building intelligent systems — from RAG pipelines to LLM-powered apps. Turning real-world problems into AI-driven software.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10"
          >
            <a href="#projects" className="group px-8 py-4 rounded-xl bg-gradient-glow text-background font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-xl glass hover:bg-white/10 font-semibold transition-colors border border-white/10">
              Contact Me
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-6"
          >
            <SocialLink href="https://github.com/Rounak-Harugire" icon={<FaGithub size={24} />} />
            <SocialLink href="https://www.linkedin.com/in/rounak-harugire-a1a6502b7/" icon={<FaLinkedin size={24} />} />
            <SocialLink href="mailto:rounakharugire3435@gmail.com" icon={<Mail size={24} />} />
            <SocialLink href="tel:+917840942613" icon={<Phone size={24} />} />
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10"
        >
          {/* Animated rings */}
          <div className="absolute inset-0 rounded-full border border-[#00d4ff]/30 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-[#7c3aed]/30 animate-[spin_15s_linear_infinite_reverse]" />
          
          <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-transparent bg-clip-padding" style={{ padding: '2px', background: 'linear-gradient(#0a0a0f, #0a0a0f) padding-box, linear-gradient(to right, #00d4ff, #7c3aed) border-box' }}>
            <img 
              src={profilePhoto} 
              alt="Rounak Rafik Harugire" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-[#00d4ff] hover:-translate-y-1 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
