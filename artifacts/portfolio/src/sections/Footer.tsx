import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-12 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold font-display text-gradient mb-2">Rounak Harugire</h2>
          <p className="text-muted-foreground text-sm">Built with passion for AI & Code.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Rounak-Harugire" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#00d4ff] transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/rounak-harugire-a1a6502b7/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#7c3aed] transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:rounakharugire3435@gmail.com" className="text-muted-foreground hover:text-[#00d4ff] transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-sm text-muted-foreground text-center md:text-right">
          <p>© {new Date().getFullYear()} Rounak Harugire.</p>
          <p>All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
