"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  span: string; // Tailwind grid span
}

interface GalleryProps {
  playTick: () => void;
}

export default function Gallery({ playTick }: GalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Detalle de Soldadura",
      category: "FABRICACIÓN",
      image: "/images/about_workshop.png",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      id: 2,
      title: "Ensamblaje de Engranajes Expuestos",
      category: "MECANIZADO",
      image: "/images/clock_machine.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 3,
      title: "Cuerpo Anodizado de Lámpara Helix",
      category: "ACABADO",
      image: "/images/helix_lighting.png",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      id: 4,
      title: "Alineación de Estructuras de Acero",
      category: "CONSTRUCCIÓN",
      image: "/images/hero_bg.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 5,
      title: "Gabinete con Perforación Hexagonal",
      category: "CORTE LÁSER",
      image: "/images/console_furniture.png",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      id: 6,
      title: "Patas de Acero Estructural de Mesa",
      category: "MOBILIARIO",
      image: "/images/table_furniture.png",
      span: "md:col-span-1 md:row-span-1"
    }
  ];

  const handleImageClick = (img: string) => {
    playTick();
    setActiveImage(img);
  };

  const handleClose = () => {
    playTick();
    setActiveImage(null);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#030303] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div>
            <span className="text-[10px] tracking-[0.4em] text-neutral-500 font-semibold uppercase">03 / MUESTRA DE PORTAFOLIO</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase mt-4">Bitácora del Taller</h2>
          </div>
          <p className="text-neutral-400 font-light text-sm max-w-xs mt-4 md:mt-0 leading-relaxed">
            Una documentación visual de metales en bruto, procesos de ensamblaje y objetos terminados.
          </p>
        </div>

        {/* Grid Masonry-style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleImageClick(item.image)}
              onMouseEnter={playTick}
              className={`group relative overflow-hidden rounded-sm border border-neutral-900 bg-neutral-950 cursor-pointer ${item.span} transition-all duration-500 hover:border-neutral-700`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />

              {/* Overlay details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[8px] tracking-[0.25em] font-semibold text-white/50 mb-1">{item.category}</span>
                <h4 className="text-xs tracking-[0.15em] font-bold text-white uppercase">{item.title}</h4>
                <div className="absolute top-4 right-4 text-white/40 group-hover:text-white transition-colors duration-300">
                  <Maximize2 size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors duration-300 focus:outline-none p-1.5 border border-neutral-900 hover:border-neutral-800 rounded-full z-50"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt="Enlarged gallery view"
                className="max-w-full max-h-full object-contain rounded-sm border border-neutral-900"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
