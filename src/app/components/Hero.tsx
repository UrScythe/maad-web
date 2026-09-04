"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";

export default function Hero() {
  const featuredProducts = products.slice(0, 3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === featuredProducts.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  const handleNext = () => setCurrentIndex((prev) => (prev === featuredProducts.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? featuredProducts.length - 1 : prev - 1));

  return (
    <section className="relative w-full h-[600px] md:h-[700px] bg-[#050505] overflow-hidden pt-24 border-b border-neutral-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full max-w-7xl mx-auto px-12 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between"
        >
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 pb-12 md:pb-0">
            <span className="text-xs font-bold tracking-widest text-[#FF8000] uppercase bg-[#FF8000]/10 px-4 py-1.5 rounded-full border border-[#FF8000]/20 mb-6">
              {featuredProducts[currentIndex].soon ? "Nuevos" : "Destacado"}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight text-white mb-4 leading-[1.1]">
              {featuredProducts[currentIndex].name}
            </h1>
            <p className="text-base text-neutral-400 mb-8 max-w-md line-clamp-2 md:line-clamp-none font-medium">
              {featuredProducts[currentIndex].description}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="#products"
                className="bg-[#FF8000] text-black font-bold text-sm px-8 py-3.5 rounded-full hover:bg-[#E67300] transition-colors duration-300 w-full sm:w-auto shadow-[0_0_15px_rgba(255,128,0,0.3)]"
              >
                {featuredProducts[currentIndex].soon ? "Pre-comprar ahora" : "Comprar ahora"}
              </a>
              {featuredProducts[currentIndex].originalPrice ? (
                <div className="flex flex-col items-center sm:items-start hidden sm:flex">
                  <span className="text-xs text-neutral-500 font-medium line-through">{featuredProducts[currentIndex].originalPrice}</span>
                  <span className="text-lg font-bold text-[#FF8000]">{featuredProducts[currentIndex].price}</span>
                </div>
              ) : (
                <div className="flex flex-col items-center sm:items-start hidden sm:flex">
                  <span className="text-xs text-neutral-500 font-medium uppercase">Precio estimado</span>
                  <span className="text-lg font-bold text-white">{featuredProducts[currentIndex].price}</span>
                </div>
              )}
            </div>
          </div>

          {/* Product Image */}
          <div className="w-full md:w-1/2 h-[300px] md:h-full flex items-center justify-center p-4 relative">
             <div className="w-full h-[80%] max-w-[500px] bg-[#111] rounded-[2rem] p-8 flex items-center justify-center shadow-2xl border border-neutral-800 relative overflow-hidden">
               {/* Decorative light glow matching the amber theme */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#FF8000] to-transparent opacity-50"></div>
               <img
                 src={featuredProducts[currentIndex].image}
                 alt={featuredProducts[currentIndex].name}
                 className="w-full h-full object-contain drop-shadow-2xl brightness-110"
               />
             </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-[60%] md:top-1/2 -translate-y-1/2 bg-[#111] hover:bg-[#1a1a1a] text-white p-3 rounded-full border border-neutral-800 transition-all z-20 group"
      >
        <ChevronLeft size={20} className="group-hover:text-[#FF8000] transition-colors" />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-[60%] md:top-1/2 -translate-y-1/2 bg-[#111] hover:bg-[#1a1a1a] text-white p-3 rounded-full border border-neutral-800 transition-all z-20 group"
      >
        <ChevronRight size={20} className="group-hover:text-[#FF8000] transition-colors" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {featuredProducts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-[3px] transition-all duration-300 ${
              currentIndex === idx ? "w-10 bg-[#FF8000]" : "w-10 bg-neutral-800"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
