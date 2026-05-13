import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-[#050510] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl text-chrome mb-2">KUCHNIA SZEFÓW</h3>
            <p className="text-sm text-text-muted">© 2026 Wszystkie prawa zastrzeżone.</p>
          </div>
          
          <div className="flex gap-8 font-subtitle text-sm uppercase tracking-widest text-text-muted">
            <a href="#" className="hover:text-neon-pink transition-colors">Start</a>
            <a href="#menu" className="hover:text-neon-pink transition-colors">Menu</a>
            <a href="#kontakt" className="hover:text-neon-pink transition-colors">Kontakt</a>
          </div>

          <div className="text-center md:text-right">
          </div>
        </div>
      </div>
    </footer>
  );
};
