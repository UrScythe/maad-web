"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, Product } from "@/data/products";
import { X, MessageSquare, Mountain, Bike, Waves, ChevronRight } from "lucide-react";

const rutas593Products = products.filter((p) => p.category === "Rutas 593");

const categoryIcons: Record<string, React.ReactNode> = {
  "MAPA 3D RUTA CICLISMO": <Bike size={18} />,
  "RELIEVE 3D MONTAÑA": <Mountain size={18} />,
  "MAPA 3D RUTA NATACIÓN": <Waves size={18} />,
};

export default function Rutas593() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="rutas593" className="py-28 bg-[#060606] relative overflow-hidden">
      {/* Topographic grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 38px,
            #ffffff 38px,
            #ffffff 40px
          ), repeating-linear-gradient(
            90deg,
            transparent,
            transparent 38px,
            #ffffff 38px,
            #ffffff 40px
          )`,
        }}
      />

      {/* Glow accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#00B4D8] rounded-full blur-[180px] opacity-5 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#00B4D8] rounded-full blur-[180px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] text-[#00B4D8] uppercase mb-4 block">
              Submarca · Impresión 3D
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-none mb-4">
              RUTAS<span className="text-[#00B4D8]">593</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
              Tu ruta, tu montaña, tu lago — inmortalizados en relieve 3D.
              Mapas topográficos personalizados impresos en Ecuador.
            </p>
          </div>
          <a
            href="https://wa.me/593995285153?text=Hola!%20Quiero%20encargar%20un%20mapa%203D%20personalizado%20de%20Rutas%20593"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#00B4D8] text-black font-bold text-sm px-7 py-4 rounded-full hover:bg-[#00C8F0] transition-all duration-300 shadow-[0_0_25px_rgba(0,180,216,0.3)] hover:shadow-[0_0_40px_rgba(0,180,216,0.5)]"
          >
            <MessageSquare size={16} />
            Cotiza tu Mapa Personalizado
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rutas593Products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              onClick={() => setSelectedProduct(product)}
              className="group bg-[#0c0c0c] border border-neutral-800/60 rounded-3xl overflow-hidden cursor-pointer hover:border-[#00B4D8]/40 hover:shadow-[0_0_30px_rgba(0,180,216,0.07)] transition-all duration-400 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-square bg-[#111] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-50" />

                {/* Badge */}
                <span className="absolute top-4 left-4 bg-[#00B4D8]/15 border border-[#00B4D8]/40 text-[#00B4D8] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                  {categoryIcons[product.name]}
                  Rutas 593
                </span>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">{product.name}</h3>
                  <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">{product.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#00B4D8] uppercase tracking-widest">Próximamente</span>
                  </div>
                  <button className="bg-[#00B4D8]/10 border border-[#00B4D8]/30 text-[#00B4D8] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#00B4D8] group-hover:text-black group-hover:border-[#00B4D8] transition-all duration-300">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-neutral-600 text-sm mt-12 tracking-wide">
          100% personalizables · Envíos a todo Ecuador · Fabricación local
        </p>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0e0e0e] rounded-[2rem] w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative shadow-[0_0_60px_rgba(0,180,216,0.1)] border border-neutral-800"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 bg-neutral-900 hover:bg-neutral-800 text-white p-2 rounded-full transition-colors border border-neutral-700"
              >
                <X size={20} />
              </button>

              {/* Image panel */}
              <div className="w-full md:w-1/2 bg-[#080808] relative flex items-center justify-center p-8 min-h-[300px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#00B4D8] rounded-full blur-[120px] opacity-10" />
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain max-h-[500px] relative z-10 drop-shadow-2xl"
                />
              </div>

              {/* Detail panel */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
                <div className="flex-grow">
                  <span className="text-xs font-bold tracking-widest text-[#00B4D8] uppercase mb-2 block">
                    RUTAS 593
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedProduct.name}</h3>
                  <p className="text-neutral-400 text-base leading-relaxed mb-8">{selectedProduct.description}</p>

                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Especificaciones</h4>
                  <ul className="space-y-3 mb-8">
                    {selectedProduct.specs.map((spec, i) => (
                      <li key={i} className="text-neutral-400 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#00B4D8] rounded-full mt-1.5 mr-3 shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8 border-t border-neutral-800">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-[#00B4D8] uppercase tracking-wider">Próximamente</span>
                    </div>
                    <a
                      href={`https://wa.me/593995285153?text=Hola!%20Quiero%20cotizar%20un%20${encodeURIComponent(selectedProduct.name)}%20de%20Rutas%20593`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center bg-[#00B4D8] text-black font-bold text-sm px-8 py-4 rounded-full hover:bg-[#00C8F0] transition-colors duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,180,216,0.3)]"
                    >
                      <MessageSquare size={18} />
                      Cotizar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
