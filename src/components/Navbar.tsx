import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Menu as MenuIcon, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Start', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-bg-primary/90 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(255,45,120,0.1)]' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-display text-2xl font-black tracking-tighter flex items-center">
          <span className="text-neon-pink drop-shadow-[0_0_5px_#FF2D78] relative z-10">K</span>
          <span className="text-chrome">UCH</span>
          <span className="text-neon-blue drop-shadow-[0_0_5px_#00F0FF] relative z-10">N</span>
          <span className="text-chrome">IA</span>
          <span className="ml-2 text-neon-purple drop-shadow-[0_0_5px_#BF00FF] relative z-10">S</span>
          <span className="text-chrome">ZEFÓW</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-subtitle text-lg uppercase tracking-widest text-white/80 hover:text-neon-pink transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-pink transition-all group-hover:w-full shadow-[var(--shadow-glow-pink)]" />
            </a>
          ))}
          <div className="flex items-center gap-4 ml-6 border-l border-white/20 pl-6">
            <SocialIcon icon={<Facebook size={20} />} href="https://www.facebook.com/profile.php?id=61571424975385" color="neon-blue" />
            <SocialIcon icon={<Instagram size={20} />} href="https://www.instagram.com/kuchniaszefow?fbclid=IwY2xjawRxB79leHRuA2FlbQIxMABicmlkETFkdEVRRnlSQk55Q280MXpYc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHo1yvb7ocvUyqaU7YneEYUGqbr-RwdHIR8vrWTtWISNx4rUjcxSf0F2iXmPA_aem_cfSbCGzGHDC04K0PVPc8Aw" color="neon-pink" />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-neon-pink transition-colors"
          onClick={() => setMobileMenuOpen(true)}
        >
          <MenuIcon size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-bg-primary z-[200] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display text-2xl font-black tracking-tighter">
                <span className="text-neon-pink drop-shadow-[0_0_5px_#FF2D78]">K</span>
                <span className="text-chrome">-</span>
                <span className="text-neon-purple drop-shadow-[0_0_5px_#BF00FF]">S</span>
              </span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-neon-pink">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-4xl uppercase tracking-wider text-white hover:text-neon-pink transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-8">
              <a href="tel:+48507004033" className="flex items-center gap-4 text-neon-yellow">
                <Phone />
                <span className="font-subtitle text-2xl">507 004 033</span>
              </a>
              <div className="flex gap-6">
                <SocialIcon icon={<Facebook size={32} />} href="https://www.facebook.com/profile.php?id=61571424975385" color="neon-blue" />
                <SocialIcon icon={<Instagram size={32} />} href="https://www.instagram.com/kuchniaszefow?fbclid=IwY2xjawRxB79leHRuA2FlbQIxMABicmlkETFkdEVRRnlSQk55Q280MXpYc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHo1yvb7ocvUyqaU7YneEYUGqbr-RwdHIR8vrWTtWISNx4rUjcxSf0F2iXmPA_aem_cfSbCGzGHDC04K0PVPc8Aw" color="neon-pink" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SocialIcon = ({ icon, href, color }: { icon: React.ReactNode, href: string, color: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className={`p-2 border border-${color}/30 text-${color} rounded-full hover:bg-${color} hover:text-black transition-all hover:shadow-[0_0_15px_rgba(var(--color-${color}))]`}
    style={{ borderColor: `var(--color-${color})44` }}
  >
    {icon}
  </a>
);
