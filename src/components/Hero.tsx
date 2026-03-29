"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const text = "Explore the World with Us";
  const words = text.split(" ");

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2940&auto=format&fit=crop"
          alt="Beautiful travel destination"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 w-full max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 flex flex-wrap justify-center gap-x-3 sm:gap-x-4"
        >
          {words.map((word, wordIndex) => (
            <div key={wordIndex} className="flex">
              {word.split("").map((char, charIndex) => {
                const globalIndex = words.slice(0, wordIndex).join("").length + charIndex;
                return (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                    transition={{ duration: 0.3, delay: globalIndex * 0.2 }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </div>
          ))}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-base sm:text-lg md:text-2xl text-white/90 mb-10 max-w-2xl px-4"
        >
          Discover premium travel experiences tailored just for you. From pristine beaches to historic cities, your next adventure starts here.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 px-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-accent text-primary font-bold rounded-full text-lg transition-transform hover:scale-105 hover:bg-white shadow-lg"
          >
            Plan Your Trip
          </a>
          <a
            href="#destinations"
            className="w-full sm:w-auto px-8 py-4 bg-white/20 backdrop-blur-md border border-white/50 text-white font-bold rounded-full text-lg transition-transform hover:scale-105 hover:bg-white/30"
          >
            Explore Destinations
          </a>
        </motion.div>
      </div>
    </section>
  );
}
