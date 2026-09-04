"use client";

import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tienda", href: "/#products" },
    { name: "Rutas 593", href: "/rutas593", isSubbrand: true },
    { name: "Soporte", href: "/#contact" },
  ];

  return (
    <>
      <a
        href="https://wa.me/593980798205?text=Hola%20MAAD,%20estoy%20interesado%20en%20realizar%20una%20consulta."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-0 left-0 right-0 bg-[#FF8000] text-black text-[11px] font-bold tracking-wider uppercase text-center py-2 z-50 hover:bg-[#ff9424] transition-colors block cursor-pointer"
      >
        ¿Dudas o cotizaciones? Escríbenos directo a nuestro WhatsApp
      </a>
      <nav
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-md shadow-sm border-b border-neutral-900 py-4" : "bg-transparent py-6"
        }`}
      >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <span className="text-white text-2xl md:text-3xl font-bauhaus lowercase tracking-normal">maad</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold hover:bg-neutral-900/50 px-4 py-2 rounded-full transition-colors duration-200 inline-flex items-center ${
                link.isSubbrand
                  ? "text-white hover:text-[#00B4D8]"
                  : "text-white hover:text-[#FF8000]"
              }`}
            >
              <span>{link.name}</span>
              {link.isSubbrand && (
                <span className="ml-2 text-[9px] font-bold uppercase tracking-wider bg-[#00B4D8]/20 text-[#00B4D8] border border-[#00B4D8]/30 px-1.5 py-0.5 rounded-full">
                  Submarca
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center space-x-6 text-white">
           <button className="hover:text-[#FF8000] hover:bg-neutral-900/50 p-2 rounded-full transition-colors"><Search size={20} /></button>
           <button className="hover:text-[#FF8000] hover:bg-neutral-900/50 p-2 rounded-full transition-colors"><ShoppingCart size={20} /></button>
           <button className="hover:text-[#FF8000] hover:bg-neutral-900/50 p-2 rounded-full transition-colors"><User size={20} /></button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden space-x-2 text-white">
           <button className="hover:text-[#FF8000] hover:bg-neutral-900/50 p-2 rounded-full transition-colors"><Search size={20} /></button>
           <button className="hover:text-[#FF8000] hover:bg-neutral-900/50 p-2 rounded-full transition-colors"><ShoppingCart size={20} /></button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-[#FF8000] hover:bg-neutral-900/50 p-2 rounded-full transition-colors focus:outline-none ml-1"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] shadow-md flex flex-col items-start py-4 px-6 space-y-4 transition-all duration-300 border-b border-neutral-900 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-white hover:text-[#FF8000] w-full border-b border-neutral-900 pb-4 flex items-center justify-between"
          >
            <span>{link.name}</span>
            {link.isSubbrand && (
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#00B4D8]/20 text-[#00B4D8] border border-[#00B4D8]/30 px-2 py-0.5 rounded-full">
                Submarca 3D
              </span>
            )}
          </a>
        ))}
        <a href="#" className="text-base font-semibold text-white hover:text-[#FF8000] w-full pt-2">Iniciar Sesión</a>
      </div>
    </nav>
    </>
  );
}
