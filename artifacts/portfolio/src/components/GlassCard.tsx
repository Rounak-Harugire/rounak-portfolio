import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className = '', hoverEffect = false }: GlassCardProps) {
  return (
    <div 
      className={`glass rounded-2xl p-6 md:p-8 ${hoverEffect ? 'glass-hover hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
