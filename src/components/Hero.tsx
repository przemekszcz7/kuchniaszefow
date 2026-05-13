import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20">
      {/* Gradient Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1A] via-[#12122A] to-[#FF2D7822]" />
      
      {/* Pulsing Radial Glows */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FF2D7822] blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#00F0FF11] blur-[80px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grid Floor */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 grid-floor animate-grid" 
          style={{ 
            height: '200%', 
            top: '-50%',
            backgroundImage: `
              linear-gradient(to right, #FF2D7833 1px, transparent 1px),
              linear-gradient(to bottom, #FF2D7833 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Palm Tree Silhouettes */}
      <div className="absolute bottom-0 left-[-50px] w-[300px] opacity-80 z-20 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 400" className="w-full h-full fill-black">
          <path d="M100 400 Q105 250 110 0" stroke="black" strokeWidth="8" fill="none" />
          {/* Leaves */}
          <path d="M100 50 Q50 80 20 150 Q50 100 100 50" />
          <path d="M100 50 Q150 80 180 150 Q150 100 100 50" />
          <path d="M100 70 Q40 100 10 180 Q40 120 100 70" />
          <path d="M100 70 Q160 100 190 180 Q160 120 100 70" />
          <path d="M100 90 Q30 130 5 220 Q30 150 100 90" />
          <path d="M100 90 Q170 130 195 220 Q170 150 100 90" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-[-50px] w-[350px] opacity-80 z-20 pointer-events-none hidden lg:block transform scale-x-[-1]">
        <svg viewBox="0 0 200 400" className="w-full h-full fill-black">
          <path d="M100 400 Q105 250 110 0" stroke="black" strokeWidth="10" fill="none" />
          <path d="M100 50 Q50 80 20 150 Q50 100 100 50" />
          <path d="M100 50 Q150 80 180 150 Q150 100 100 50" />
          <path d="M100 70 Q40 100 10 180 Q40 120 100 70" />
          <path d="M100 70 Q160 100 190 180 Q160 120 100 70" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-30 text-center px-4 max-w-4xl">
        <motion.h1 
          className="font-display text-6xl md:text-8xl mb-4 tracking-tighter text-chrome relative group"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ filter: 'drop-shadow(var(--shadow-glow-pink))' }}
        >
          KUCHNIA SZEFÓW
          <span className="absolute inset-0 text-[#00F0FF] opacity-0 group-hover:opacity-50 group-hover:animate-glitch-1 pointer-events-none" aria-hidden="true" style={{ clipPath: 'inset(40% 0 61% 0)' }}>KUCHNIA SZEFÓW</span>
          <span className="absolute inset-0 text-[#FF2D78] opacity-0 group-hover:opacity-50 group-hover:animate-glitch-2 pointer-events-none" aria-hidden="true" style={{ clipPath: 'inset(10% 0 81% 0)' }}>KUCHNIA SZEFÓW</span>
        </motion.h1>
        
        <motion.p 
          className="font-subtitle text-xl md:text-3xl text-neon-blue uppercase tracking-[0.2em] mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ textShadow: 'var(--shadow-glow-blue)' }}
        >
          Miami Vibes Street Food
        </motion.p>
        
        <motion.div 
          className="space-y-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="font-subtitle text-xl md:text-2xl text-white/90 leading-relaxed tracking-wide">
            Wpadnij do <span className="text-neon-pink font-bold">Kuchnia Szefów</span> i poczuj klimat prawdziwego street foodu! 
            Świeże składniki, intensywne smaki i jedzenie, które robi robotę od pierwszego kęsa.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Badge text="Szybko" color="neon-pink" shadow="glow-pink" />
            <Badge text="Pysznie" color="neon-blue" shadow="glow-blue" />
            <Badge text="Na miejscu" color="neon-purple" shadow="glow-purple" />
          </div>
        </motion.div>
      </div>

      {/* Scanlines Overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-20 z-50 overflow-hidden" />
    </section>
  );
};

const Badge = ({ text, color, shadow }: { text: string; color: string; shadow: string }) => (
  <div className={`
    px-4 py-2 border-2 rounded-sm font-display text-sm uppercase tracking-widest
    border-${color} text-${color}
    shadow-[var(--shadow-${shadow})]
  `}>
    {text}
  </div>
);
