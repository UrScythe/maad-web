"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black grid-bg">
      {/* Background Image with Dark Vignette */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-10000 ease-out"
        style={{ backgroundImage: "url('/images/hero_bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-black/60 z-10" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#030303]/90 z-10 pointer-events-none" />

      {/* Grid line accent at bottom of Hero */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-900 z-20" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-end h-full pb-20 md:pb-24">
        <div className="max-w-4xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center space-x-3 mb-6"
          >
            <span className="h-[1px] w-8 bg-neutral-500" />
            <span className="text-[10px] tracking-[0.3em] font-medium text-neutral-400">EST. 2026 / ECUADOR</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] uppercase"
          >
            Diseño Industrial <br />
            <span className="text-neutral-400">Hecho en Ecuador</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-sm md:text-lg text-neutral-400 max-w-xl font-light tracking-wide leading-relaxed"
          >
            Mobiliario metálico a medida, iluminación estructural y objetos industriales fabricados con absoluta precisión.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <a
              href="#products"
              className="group inline-flex items-center justify-between bg-white text-black font-semibold text-xs tracking-[0.2em] px-8 py-4 uppercase rounded-sm border border-white hover:bg-black hover:text-white transition-all duration-500 glow-effect-hover"
            >
              <span>Ver Productos</span>
              <ArrowDownRight size={14} className="ml-3 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute right-12 bottom-20 hidden lg:flex flex-col items-center space-y-4"
        >
          <span className="text-[9px] tracking-[0.3em] font-light text-neutral-400 [writing-mode:vertical-lr]">DESLIZAR PARA EXPLORAR</span>
          <div className="w-[1px] h-12 bg-neutral-800 relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute left-0 top-0 w-full h-1/2 bg-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
