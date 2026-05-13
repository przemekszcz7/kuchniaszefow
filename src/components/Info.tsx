import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, Phone, Mail, Navigation } from 'lucide-react';

const HOURS = [
  { day: "Poniedziałek", time: "13:00 - 20:00" },
  { day: "Wtorek", time: "ZAMKNIĘTE", closed: true },
  { day: "Środa", time: "ZAMKNIĘTE", closed: true },
  { day: "Czwartek", time: "13:00 - 20:00" },
  { day: "Piątek", time: "13:00 - 20:00" },
  { day: "Sobota", time: "13:00 - 20:00" },
  { day: "Niedziela", time: "13:00 - 20:00" },
];

export const Info = () => {
  return (
    <section id="kontakt" className="py-24 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Hours & Contact */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-bg-card rounded-lg border border-neon-purple shadow-[var(--shadow-glow-purple)]"
            >
              <div className="flex items-center gap-3 mb-8">
                <Clock className="text-neon-purple w-8 h-8" />
                <h2 className="font-display text-3xl text-white uppercase tracking-wider">Godziny Otwarcia</h2>
              </div>
              <div className="space-y-4">
                {HOURS.map((h, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="font-subtitle text-lg text-white/80">{h.day}</span>
                    <span className={`font-display tracking-tighter ${h.closed ? 'text-neon-pink' : 'text-neon-blue'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="font-display text-2xl text-neon-yellow mb-6 uppercase flex items-center gap-3">
                <Navigation className="text-neon-yellow w-6 h-6" />
                Kontakt i Lokalizacja
              </h3>
              
              <div className="space-y-4">
                <ContactItem icon={<Phone />} label="Zadzwoń" value="507 004 033" href="tel:+48507004033" />
                <ContactItem icon={<Mail />} label="Napisz" value="kuchniaszefow@gmail.com" href="mailto:kuchniaszefow@gmail.com" />
                <ContactItem icon={<MapPin />} label="Adres" value="Wyszyńskiego 11, Police 72-010" />
              </div>
            </motion.div>
          </div>

          {/* Right: Map */}
          <div className="h-full min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-full min-h-[500px] w-full rounded-lg overflow-hidden border-4 border-bg-card shadow-2xl relative"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.8570798994365!2d14.550125877164238!3d53.542466060030605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa0cb25db26d51%3A0x80a08596bf5a2258!2sWyszy%C5%84skiego%2011%2C%2072-010%20Police!5e0!3m2!1spl!2spl!4v1778657375090!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 pointer-events-none border-2 border-neon-blue opacity-30" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) => {
  const content = (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-neon-blue group-hover:border-neon-blue group-hover:bg-neon-blue/10 transition-all">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase text-text-muted font-subtitle tracking-widest">{label}</p>
        <p className="text-xl font-subtitle text-white group-hover:text-neon-blue transition-colors">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : <div>{content}</div>;
};
