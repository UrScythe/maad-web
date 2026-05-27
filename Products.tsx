"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, Product } from "@/data/products";
import { X, ArrowRight, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["Todos", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === "Todos"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const productImages = selectedProduct && selectedProduct.images && selectedProduct.images.length > 0
    ? selectedProduct.images
    : selectedProduct ? [selectedProduct.image] : [];

  return (
    <section id="products" className="py-24 md:py-32 bg-[#030303] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div>
            <span className="text-[10px] tracking-[0.4em] text-neutral-500 font-semibold uppercase">01 / NUESTROS PRODUCTOS</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase mt-4">Catálogo</h2>
          </div>
          <p className="text-neutral-400 font-light text-sm max-w-xs mt-4 md:mt-0 leading-relaxed">
            Diseño estructural minimalista y metalmecánica de alta precisión. Cada pieza hecha a medida.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex overflow-x-auto pb-4 mb-12 scrollbar-none gap-2 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-medium border transition-all duration-300 shrink-0 ${selectedCategory === category
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-500"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={product.id}
                onClick={() => {
                  setSelectedProduct(product);
                  setCurrentImageIndex(0);
                }}
                className="group relative brushed-metal border border-neutral-900 hover:border-neutral-700 p-6 rounded-sm cursor-pointer transition-all duration-500 flex flex-col justify-between h-[450px] glow-effect"
              >
                <div>
                  {/* Category & Price */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[9px] tracking-[0.25em] font-medium text-neutral-500 uppercase">
                      {product.category}
                    </span>
                    <span className="text-xs font-semibold tracking-wider text-white">
                      {product.price}
                    </span>
                  </div>

                  {/* Image Frame */}
                  <div className="relative w-full h-[220px] mb-6 overflow-hidden bg-black/50 rounded-sm flex items-center justify-center border border-neutral-900/50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>

                  {/* Info */}
                  <h3 className="text-base tracking-[0.15em] font-bold text-white uppercase group-hover:text-neutral-300 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Card CTA */}
                <div className="mt-6 flex items-center text-[10px] tracking-[0.2em] font-semibold text-white group-hover:text-neutral-300 transition-colors duration-300">
                  <span>VER DETALLES</span>
                  <ArrowRight size={12} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 border border-dashed border-neutral-900 rounded-sm">
            <p className="text-neutral-500 text-xs tracking-wider">NO SE ENCONTRARON PRODUCTOS EN ESTA CATEGORÍA</p>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0c0c0c] border border-neutral-800 p-8 md:p-12 rounded-sm max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors duration-300 focus:outline-none p-1 border border-neutral-900 hover:border-neutral-800 rounded-full"
              >
                <X size={16} />
              </button>

              {/* Left Column: Product Image Carousel */}
              <div className="relative bg-black/50 border border-neutral-900 p-4 rounded-sm flex flex-col items-center justify-center h-[300px] md:h-full min-h-[300px] overflow-hidden group/carousel">
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={productImages[currentImageIndex]}
                      alt={`${selectedProduct.name} vista ${currentImageIndex + 1}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover rounded-sm opacity-80"
                    />
                  </AnimatePresence>
                </div>

                {/* Navigation arrows (only if more than 1 image) */}
                {productImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1))}
                      className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/75 border border-neutral-800 hover:border-neutral-500 text-white p-2 rounded-full transition-all duration-300 z-10 focus:outline-none hover:scale-105 cursor-pointer"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1))}
                      className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/75 border border-neutral-800 hover:border-neutral-500 text-white p-2 rounded-full transition-all duration-300 z-10 focus:outline-none hover:scale-105 cursor-pointer"
                      aria-label="Siguiente imagen"
                    >
                      <ChevronRight size={16} />
                    </button>
                    
                    {/* Dots indicator */}
                    <div className="absolute bottom-6 flex space-x-1.5 z-10 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-neutral-900/50">
                      {productImages.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentImageIndex === i ? "w-6 bg-white" : "w-1.5 bg-neutral-600 hover:bg-neutral-400"
                          }`}
                          aria-label={`Ir a la imagen ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Right Column: Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.25em] font-medium text-neutral-500 uppercase">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase mt-2 mb-4">
                    {selectedProduct.name}
                  </h3>
                  <div className="h-[1px] w-full bg-neutral-900 my-4" />
                  <p className="text-neutral-400 font-light text-xs leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>

                  <h4 className="text-[10px] tracking-[0.2em] font-semibold text-white uppercase mb-3">ESPECIFICACIONES</h4>
                  <ul className="space-y-2">
                    {selectedProduct.specs.map((spec, i) => (
                      <li key={i} className="text-neutral-400 text-xs font-light flex items-start">
                        <span className="h-1.5 w-1.5 bg-neutral-500 rounded-full mt-1.5 mr-3 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-[9px] tracking-widest text-neutral-500">PRECIO ESTIMADO</span>
                    <span className="text-xl font-bold text-white mt-1">{selectedProduct.price}</span>
                  </div>
                  <a
                    href={`https://wa.me/593995285153?text=Hola%20MAAD,%20estoy%20interesado%20en%20el%20producto:%20${encodeURIComponent(selectedProduct.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center bg-white text-black font-semibold text-xs tracking-[0.15em] px-6 py-3.5 uppercase rounded-sm hover:bg-black hover:text-white border border-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={14} />
                    Pedir por WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
