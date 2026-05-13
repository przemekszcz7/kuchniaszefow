import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Reviews } from './components/Reviews';
import { Info } from './components/Info';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Stars/Noise */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      <Navbar />
      
      <main className="will-change-scroll">
        <Hero />
        
        {/* Transitional Section - Neon Vibes */}
        <section className="bg-bg-primary h-24 flex items-center justify-center overflow-hidden border-y border-neon-pink/20">
          <div className="flex gap-20 animate-marquee whitespace-nowrap will-change-transform">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="font-display text-2xl text-transparent stroke-neon-pink stroke-1 uppercase tracking-[0.5em] opacity-30">
                Fresh • Tasty • Fast • Street Food • Police • 
              </span>
            ))}
          </div>
        </section>

        <Menu />

        <Reviews />
        
        <section className="bg-bg-secondary py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-5xl text-chrome mb-8 italic px-2 py-1 leading-tight">
              Idealne miejsce na lunch, spotkanie ze znajomymi albo chwile przyjemności
            </h2>
          </div>
        </section>

        <Info />
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .stroke-neon-pink {
          -webkit-text-stroke: 1px var(--color-neon-pink);
        }
      `}} />
    </div>
  );
}

