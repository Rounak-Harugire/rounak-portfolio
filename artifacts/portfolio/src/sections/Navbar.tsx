import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold font-display text-gradient tracking-tight">
          RH.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="hover:text-foreground hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <a href="https://github.com/Rounak-Harugire" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyan-400 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rounak-harugire-a1a6502b7/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyan-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a 
              href="#" 
              className="group relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium overflow-hidden gradient-border-glow bg-white/5 hover:bg-white/10 transition-colors text-foreground"
            >
              <Download size={16} className="text-cyan-400" />
              <span>Resume</span>
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0f] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-cyan-400 transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <div className="flex items-center gap-4 pb-2">
                <a href="https://github.com/Rounak-Harugire" className="text-muted-foreground hover:text-cyan-400 p-2"><FaGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/rounak-harugire-a1a6502b7/" className="text-muted-foreground hover:text-cyan-400 p-2"><FaLinkedin size={24} /></a>
                <a href="#" className="flex flex-1 justify-center items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground">
                  <Download size={18} className="text-cyan-400" /> Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
