import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: "Marek W.",
    text: "Najlepszy kurczak szarpany jakiego jadłem! Sos mango-curry to jest po prostu mistrzostwo świata. Klimat lokalu też robi robotę.",
    rating: 5
  },
  {
    name: "Ania K.",
    text: "Pysznie, szybko i świeżo. Box Szefów to idealna porcja na lunch. Na pewno będę wracać regularnie!",
    rating: 5
  },
  {
    name: "Tomasz Nowak",
    text: "Prawdziwy street food w Policach. Ceny bardzo uczciwe jak na taką jakość. Polecam każdemu fany intensywnych smaków.",
    rating: 5
  }
];

export const Reviews = () => {
  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl mb-4 text-neon-blue"
            style={{ textShadow: 'var(--shadow-glow-blue)' }}
          >
            OPINIE GOŚCI
          </motion.h2>
          <p className="font-subtitle text-lg text-text-muted uppercase tracking-widest">Co o nas mówią w sieci</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {REVIEWS.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-card p-8 rounded-lg border border-white/5 relative group hover:border-neon-blue/50 transition-colors"
            >
              <Quote className="absolute top-4 right-4 text-neon-blue/10 group-hover:text-neon-blue/20 transition-colors w-12 h-12" />
              
              <p className="text-white/80 italic mb-6 leading-relaxed mt-4">"{rev.text}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-neon-blue" />
                <span className="font-display text-sm text-neon-blue uppercase tracking-tighter">{rev.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.a 
            href="https://www.facebook.com/profile.php?id=61571424975385&sk=reviews" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex flex-col items-center gap-2 group"
          >
            <div className="px-10 py-4 bg-neon-blue/5 border-2 border-neon-blue text-neon-blue font-display tracking-[0.2em] rounded-sm group-hover:bg-neon-blue group-hover:text-black transition-all shadow-[var(--shadow-glow-blue)]">
              ZOBACZ WSZYSTKIE OPINIE NA FACEBOOKU
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
