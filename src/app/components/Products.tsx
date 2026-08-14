"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, Product } from "@/data/products";
import { X, ArrowRight, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

function getDiscountLabel(product: Product): string | null {
  if (product.discount) return product.discount;
  if (!product.originalPrice) return null;
  
  const clean = (val: string) => {
    const cleaned = val.replace(/[^0-9]/g, "");
    return parseFloat(cleaned);
  };
  
  const origVal = clean(product.originalPrice);
  const currVal = clean(product.price);
  
  if (!origVal || !currVal || origVal <= currVal) return "Oferta";
  
  const pct = Math.round(((origVal - currVal) / origVal) * 100);
  return pct > 0 && pct < 100 ? `-${pct}%` : "Oferta";
}

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
    <section id="products" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Lo más destacado</h2>
          <p className="text-neutral-400 font-medium text-lg max-w-2xl mx-auto">
            Descubre nuestra colección de mobiliario y objetos industriales.
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center overflow-x-auto pb-4 mb-12 scrollbar-none gap-3 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 shrink-0 border ${
                selectedCategory === category
                  ? "bg-[#FF8000] text-black border-[#FF8000]"
                  : "bg-[#111] text-white border-neutral-800 hover:bg-[#1a1a1a]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                onClick={() => {
                  setSelectedProduct(product);
                  setCurrentImageIndex(0);
                }}
                className="group bg-[#0a0a0a] border border-neutral-900 rounded-3xl overflow-hidden cursor-pointer hover:border-neutral-700 hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Image Area */}
                <div className="relative w-full aspect-square bg-[#111] flex items-center justify-center p-8 overflow-hidden rounded-t-3xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out drop-shadow-xl brightness-110"
                  />
                  
                  {product.soon ? (
                    <span className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Próximamente
                    </span>
                  ) : product.originalPrice ? (
                    <span className="absolute top-4 left-4 bg-[#FF8000] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(255,128,0,0.3)]">
                      {getDiscountLabel(product)}
                    </span>
                  ) : null}
                </div>

                {/* Info Area */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-neutral-400 line-clamp-2">{product.description}</p>
                  </div>

                  <div className="mt-6 flex items-end justify-between">
                    <div>
                      {product.soon ? (
                        <span className="text-lg font-bold text-neutral-600">Pronto</span>
                      ) : (
                        <div className="flex flex-col">
                          {product.originalPrice && (
                            <span className="text-sm text-neutral-500 line-through mb-1">{product.originalPrice}</span>
                          )}
                          <span className="text-xl font-bold text-white">{product.price}</span>
                        </div>
                      )}
                    </div>
                    <button className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#FF8000] transition-colors duration-300 shadow-md">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-[#111] rounded-3xl border border-neutral-900">
            <p className="text-neutral-500 font-medium">No se encontraron productos en esta categoría.</p>
          </div>
        )}
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
              className="bg-[#111] rounded-[2rem] w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-neutral-800"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 bg-neutral-900 hover:bg-neutral-800 text-white p-2 rounded-full transition-colors duration-200 border border-neutral-700"
              >
                <X size={20} />
              </button>

              {/* Left Column: Carousel */}
              <div className="w-full md:w-1/2 bg-[#050505] relative flex items-center justify-center p-8 min-h-[300px]">
                {/* Glow behind image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#FF8000] rounded-full blur-[100px] opacity-10"></div>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={productImages[currentImageIndex]}
                    alt={selectedProduct.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain max-h-[500px] relative z-10 drop-shadow-2xl brightness-110"
                  />
                </AnimatePresence>

                {productImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#1a1a1a] border border-neutral-800 shadow-md hover:bg-neutral-800 text-white p-2 rounded-full transition-colors z-20"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#1a1a1a] border border-neutral-800 shadow-md hover:bg-neutral-800 text-white p-2 rounded-full transition-colors z-20"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-6 flex space-x-2 z-20">
                      {productImages.map((_, i) => (
                         <button
                           key={i}
                           onClick={() => setCurrentImageIndex(i)}
                           className={`h-2 rounded-full transition-all duration-300 ${
                             currentImageIndex === i ? "w-6 bg-[#FF8000]" : "w-2 bg-neutral-700"
                           }`}
                         />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Right Column: Details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
                <div className="flex-grow">
                  <span className="text-xs font-bold tracking-widest text-[#FF8000] uppercase mb-2 block">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-neutral-400 text-base leading-relaxed mb-8">
                    {selectedProduct.description}
                  </p>

                  <h4 className="text-sm font-bold text-white uppercase mb-4">Especificaciones</h4>
                  <ul className="space-y-3 mb-8">
                    {selectedProduct.specs.map((spec, i) => (
                      <li key={i} className="text-neutral-400 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#FF8000] rounded-full mt-1.5 mr-3 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8 border-t border-neutral-800">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col">
                      {selectedProduct.soon ? (
                         <span className="text-2xl font-bold text-neutral-600 uppercase">Próximamente</span>
                      ) : (
                         <div className="flex flex-col">
                           {selectedProduct.originalPrice && (
                             <span className="text-sm text-neutral-500 line-through">{selectedProduct.originalPrice}</span>
                           )}
                           <span className="text-3xl font-bold text-white">{selectedProduct.price}</span>
                         </div>
                      )}
                    </div>
                    
                    <a
                      href={
                        selectedProduct.soon
                          ? `https://wa.me/593995285153?text=Hola%20MAAD,%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20el%20pr%C3%B3ximo%20lanzamiento%20de:%20${encodeURIComponent(selectedProduct.name)}`
                          : `https://wa.me/593995285153?text=Hola%20MAAD,%20estoy%20interesado%20en%20el%20producto:%20${encodeURIComponent(selectedProduct.name)}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center bg-[#FF8000] text-black font-bold text-sm px-8 py-4 rounded-full hover:bg-[#E67300] transition-colors duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,128,0,0.3)]"
                    >
                      <MessageSquare size={18} />
                      {selectedProduct.soon ? "Consultar" : "Comprar Ahora"}
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
