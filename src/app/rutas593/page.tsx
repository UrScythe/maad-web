"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { products, Product } from "@/data/products";
import {
  ArrowLeft,
  MessageSquare,
  Bike,
  Mountain,
  Waves,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  MapPin,
  CheckCircle2,
  Images
} from "lucide-react";
import WhatsAppBtn from "@/app/components/WhatsAppBtn";

const rutasProducts = products.filter((p) => p.category === "Rutas 593");

const categoryIcons: Record<string, React.ReactNode> = {
  "MAPA 3D RUTA CALLES": <Bike size={18} />,
  "MAPA 3D RUTA MONTAÑA": <Mountain size={18} />,
  "MAPA 3D RUTA GIGANTE": <Layers size={18} />,
  "MAPA 3D RUTA CICLISMO": <Bike size={18} />,
  "RELIEVE 3D MONTAÑA": <Mountain size={18} />,
  "MAPA 3D RUTA NATACIÓN": <Waves size={18} />,
};

export default function Rutas593Page() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = selectedProduct && selectedProduct.images && selectedProduct.images.length > 0
    ? selectedProduct.images
    : selectedProduct ? [selectedProduct.image] : [];

  const getWhatsAppLink = (productName?: string) => {
    const text = productName
      ? `Hola! Quiero cotizar el ${encodeURIComponent(productName)} de Rutas 593.`
      : `Hola! Quiero información sobre los mapas 3D de Rutas 593.`;
    return `https://wa.me/593980798205?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00B4D8] selection:text-black flex flex-col relative overflow-x-hidden">
      {/* Topographic Background Texture */}
      <div
        className="fixed inset-0 opacity-[0.035] pointer-events-none"
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

      {/* Subtle Cyan Glows */}
      <div className="fixed -top-48 -left-48 w-[600px] h-[600px] bg-[#00B4D8] rounded-full blur-[200px] opacity-10 pointer-events-none" />
      <div className="fixed -bottom-48 -right-48 w-[600px] h-[600px] bg-[#00B4D8] rounded-full blur-[220px] opacity-10 pointer-events-none" />

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#070707]/90 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo & Sub-brand badge */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center group">
              <span className="text-white text-2xl font-bauhaus lowercase tracking-normal group-hover:text-neutral-300 transition-colors">
                maad
              </span>
            </Link>
            <span className="text-neutral-700 text-lg">/</span>
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-black tracking-tight text-white">
                RUTAS<span className="text-[#00B4D8]">593</span>
              </span>
              <span className="hidden sm:inline-block bg-[#00B4D8]/10 text-[#00B4D8] border border-[#00B4D8]/20 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full">
                Submarca
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-neutral-400 hover:text-white hover:bg-neutral-900 px-4 py-2.5 rounded-full border border-neutral-800 transition-all duration-200"
            >
              <ArrowLeft size={16} />
              <span>Volver a MAAD</span>
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00B4D8] text-black font-bold text-xs md:text-sm px-5 py-2.5 rounded-full hover:bg-[#00C8F0] transition-all duration-300 shadow-[0_0_20px_rgba(0,180,216,0.3)] hover:shadow-[0_0_30px_rgba(0,180,216,0.5)]"
            >
              <MessageSquare size={16} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content: Products ONLY */}
      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 relative z-10 w-full">
        {/* Header Title */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00B4D8]/10 border border-[#00B4D8]/30 text-[#00B4D8] text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles size={14} />
            Catálogo Exclusivo · Impresión 3D
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
            RUTAS <span className="text-[#00B4D8]">593</span>
          </h1>
          <p className="text-neutral-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Mapas topográficos y relieves 3D de tus rutas, volcanes y lagunas favoritas en Ecuador.
            Personalizados a partir de datos GPS y Strava, fabricados con precisión por MAAD.
          </p>
        </div>

        {/* Rutas 593 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rutasProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => {
                setSelectedProduct(product);
                setCurrentImageIndex(0);
              }}
              className="group bg-[#0c0c0c] border border-neutral-800/80 rounded-3xl overflow-hidden cursor-pointer hover:border-[#00B4D8]/50 hover:shadow-[0_0_35px_rgba(0,180,216,0.12)] transition-all duration-300 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-[4/3] bg-[#111] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-60" />

                {/* Badge Category */}
                <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-[#00B4D8]/40 text-[#00B4D8] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  {categoryIcons[product.name] ?? <MapPin size={16} />}
                  Rutas 593
                </span>

                {/* Multiple Images Badge */}
                {product.images && product.images.length > 1 && (
                  <span className="absolute top-4 right-4 bg-black/75 backdrop-blur-md border border-neutral-700 text-neutral-300 text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <Images size={13} className="text-[#00B4D8]" />
                    {product.images.length} fotos
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 md:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#00B4D8] transition-colors leading-tight">
                    {product.name}
                  </h2>
                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 mb-6">
                    {product.description}
                  </p>

                  {/* Highlights Specs (First 3) */}
                  <div className="space-y-2 mb-6 border-t border-neutral-800/60 pt-4">
                    {product.specs.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex items-center text-xs text-neutral-400">
                        <CheckCircle2 size={13} className="text-[#00B4D8] mr-2 shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between gap-3">
                  <span className="text-xs font-bold text-[#00B4D8] uppercase tracking-widest">
                    Personalizable
                  </span>
                  <a
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 bg-[#00B4D8]/15 hover:bg-[#00B4D8] text-[#00B4D8] hover:text-black border border-[#00B4D8]/40 hover:border-[#00B4D8] font-bold text-xs px-4 py-2.5 rounded-full transition-all duration-200"
                  >
                    <MessageSquare size={14} />
                    Cotizar
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clean Info Banner */}
        <div className="mt-16 bg-[#0a0a0a] border border-neutral-800/60 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/30 flex items-center justify-center shrink-0 text-[#00B4D8]">
              <Layers size={22} />
            </div>
            <div>
              <h3 className="text-white font-bold text-base">¿Tienes una ruta específica o track GPX?</h3>
              <p className="text-neutral-400 text-sm">
                Envíala a nuestro equipo y la modelamos en relieve 3D a la escala que prefieras.
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppLink("Ruta Personalizada con archivo GPX/Strava")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-neutral-900 hover:bg-neutral-800 text-white hover:text-[#00B4D8] border border-neutral-700 font-bold text-xs px-6 py-3 rounded-full transition-colors flex items-center gap-2"
          >
            <span>Enviar Track por WhatsApp</span>
            <ChevronRight size={14} />
          </a>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-neutral-900 bg-[#050505] py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
          <p>
            © {new Date().getFullYear()} RUTAS 593 · Submarca de{" "}
            <Link href="/" className="text-white hover:text-[#FF8000] underline-offset-4 hover:underline">
              MAAD Studio
            </Link>{" "}
            · Ecuador
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
              Ir a MAAD Principal
            </Link>
            <a
              href="https://wa.me/593980798205"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00B4D8] hover:underline"
            >
              WhatsApp Directo
            </a>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
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
              className="bg-[#0e0e0e] rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative shadow-[0_0_60px_rgba(0,180,216,0.15)] border border-neutral-800"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 bg-neutral-900 hover:bg-neutral-800 text-white p-2.5 rounded-full transition-colors border border-neutral-700"
                aria-label="Cerrar"
              >
                <X size={18} />
              </button>

              {/* Image Column & Gallery */}
              <div className="w-full md:w-1/2 bg-[#080808] relative flex flex-col items-center justify-center p-6 md:p-8 min-h-[300px] md:min-h-[440px] border-b md:border-b-0 md:border-r border-neutral-800">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#00B4D8] rounded-full blur-[120px] opacity-15 pointer-events-none" />
                
                {/* Main Preview */}
                <div className="relative w-full h-[260px] sm:h-[320px] flex items-center justify-center">
                  <img
                    src={productImages[currentImageIndex] || selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain max-h-[320px] relative z-10 drop-shadow-2xl transition-all duration-300"
                  />

                  {/* Previous / Next buttons */}
                  {productImages.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
                        }}
                        className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-[#00B4D8] text-white hover:text-black border border-neutral-700 hover:border-[#00B4D8] p-2 rounded-full transition-all z-20 shadow-lg"
                        aria-label="Foto anterior"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
                        }}
                        className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-[#00B4D8] text-white hover:text-black border border-neutral-700 hover:border-[#00B4D8] p-2 rounded-full transition-all z-20 shadow-lg"
                        aria-label="Foto siguiente"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {productImages.length > 1 && (
                  <div className="flex items-center justify-center gap-2.5 mt-4 z-20 overflow-x-auto max-w-full px-2 py-1">
                    {productImages.map((img, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(i);
                        }}
                        className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                          currentImageIndex === i
                            ? "border-[#00B4D8] shadow-[0_0_12px_rgba(0,180,216,0.6)] scale-105"
                            : "border-neutral-800 opacity-50 hover:opacity-100 hover:border-neutral-600"
                        }`}
                      >
                        <img src={img} alt={`Miniatura ${i + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Details Column */}
              <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#00B4D8] uppercase mb-2 block">
                    RUTAS 593 · SUBMARCA MAAD
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>

                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                    Especificaciones Técnicas
                  </h4>
                  <ul className="space-y-2.5 mb-8">
                    {selectedProduct.specs.map((spec, i) => (
                      <li key={i} className="text-neutral-300 text-xs flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#00B4D8] rounded-full mt-1.5 mr-2.5 shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-sm font-bold text-[#00B4D8] uppercase tracking-wider">
                    Fabricación a pedido
                  </span>
                  <a
                    href={getWhatsAppLink(selectedProduct.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center bg-[#00B4D8] hover:bg-[#00C8F0] text-black font-bold text-sm px-6 py-3 rounded-full transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,180,216,0.3)]"
                  >
                    <MessageSquare size={16} />
                    Cotizar por WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <WhatsAppBtn />
    </div>
  );
}
