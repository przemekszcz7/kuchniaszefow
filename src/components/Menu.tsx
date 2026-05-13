import React from 'react';
import { motion } from 'motion/react';

const MENU_DATA = [
  {
    title: "KURCZAK Z ROŻNA",
    items: [
      { name: "KLASYK 1/2", price: "25,-" },
      { name: "ZIOŁOWY 1/2", price: "25,-" },
    ]
  },
  {
    title: "BAGIETTA",
    items: [
      { name: "KURCZAK SZARPANY CURRY", price: "21,-", desc: "mango cheddar mango-curry" },
      { name: "KURCZAK SZARPANY ZIOŁOWY", price: "21,-", desc: "ogórek cheddar mozzarella musztardowo-miodowy" },
      { name: "KURCZAK SZARPANY PEPERONI", price: "24,-", desc: "kurczak spicy papryczki peperoni chutney ostry mix" },
    ]
  },
  {
    title: "SAŁATKI",
    subtitle: "KAŻDA SAŁATKA PODAWANA Z PIECZYWKIEM",
    items: [
      { name: "KURCZAK SZARPANY", price: "25,-", desc: "kurczak szarpany w ziołach sałata lodowa pomidor ogórek cebula karmelizowana kapusta czerwona z granatem vinegret" },
      { name: "KURCZAK MANGO", price: "25,-", desc: "kurczak szarpany sałata lodowa pomidor ogórek cebula kapusta czerwona z grantem mango vinegret mango-curry" },
      { name: "ŁOSOŚ", price: "30,-", desc: "łosoś wędzony 100g sałata lodowa pomidor ogórek cebula czerwona kapusta ogórek konserwowy cytryna cezar vinegret" },
    ]
  },
  {
    title: "CHOOSE YOUR FIGHTER",
    subtitle: "BUŁKA LUB LAWASZ",
    items: [
      { name: "Z SURÓWKĄ", price: "28,- / 29,-" },
      { name: "Z FRYTKAMI", price: "25,- / 26,-" },
      { name: "XXL (SURÓWKA + FRYTKI)", price: "32,- / 33,-" },
    ],
    note: "Lewa cena: BUŁKA | Prawa cena: LAWASZ. Dodatkowe mięso +10,- Dodatkowy sos + 6,-"
  },
  {
    title: "BOXY",
    items: [
      { name: "BOX SZEFÓW", price: "32,-", desc: "kurczak szarpany frytki świeże warzywa, sos" },
      { name: "BOX KURCZAK", price: "37,-", desc: "kurczak z rożna frytki coleslaw sos" },
      { name: "MAŁY BOX", price: "20,-", desc: "kurczak szarpany frytki sos" },
      { name: "BOX BAGIETTA", price: "34,-", desc: "bagieta frytki dwa sosy" },
      { name: "PIEROGI Z KURCZAKIEM", price: "26,-", desc: "świeże warzywa vinegret sos czosnkowy" },
    ]
  }
];

const SOSY = [
  "czosnkowy", "musztardowo-miodowy", "słodko-kwaśny", "mango-curry",
  "ketchup", "cezar", "ostry", "bardzo ostry"
];

export const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-bg-secondary relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 45, 120, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 45, 120, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-neon-pink" style={{ textShadow: 'var(--shadow-glow-pink)' }}>
            MENU
          </h2>
          <div className="h-1 w-24 bg-neon-pink mx-auto rounded-full shadow-[var(--shadow-glow-pink)]" />
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {MENU_DATA.map((section, idx) => (
            <div key={idx} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md lg:max-w-none">
              <MenuSection section={section} delay={idx * 0.1} />
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 border-2 border-neon-yellow rounded-lg bg-bg-card/50 shadow-[var(--shadow-glow-yellow)]">
          <h3 className="font-display text-2xl text-neon-yellow mb-6 uppercase">SOSY</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SOSY.map((sos, i) => (
              <span key={i} className="font-subtitle text-lg text-white/80 hover:text-neon-yellow transition-colors cursor-default">
                {sos}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuSection = ({ section, delay }: { section: any; delay: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-lg bg-bg-card border-l-4 border-neon-blue hover:shadow-[var(--shadow-glow-blue)] transition-all duration-300 group"
    >
      <h3 className="font-display text-2xl mb-4 text-white group-hover:text-neon-blue transition-colors">
        {section.title}
      </h3>
      {section.subtitle && (
        <p className="text-neon-yellow text-xs font-bold mb-4 tracking-tighter">
          {section.subtitle}
        </p>
      )}
      <div className="space-y-6">
        {section.items.map((item: any, i: number) => (
          <div key={i} className="flex flex-col border-b border-white/5 pb-2 last:border-0">
            <div className="flex justify-between items-baseline gap-4">
              <span className="font-subtitle text-xl text-white/90">{item.name}</span>
              <span className="font-display text-neon-pink shrink-0">{item.price}</span>
            </div>
            {item.desc && (
              <p className="text-sm text-text-muted mt-1 leading-tight">{item.desc}</p>
            )}
          </div>
        ))}
      </div>
      {section.note && (
        <p className="mt-4 text-xs italic text-neon-purple font-bold">
          {section.note}
        </p>
      )}
    </motion.div>
  );
};
