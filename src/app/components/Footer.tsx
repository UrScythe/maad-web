"use client";

import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  playTick: () => void;
}

export default function Footer({ playTick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neutral-950 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative vertical grid line */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-neutral-900/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-neutral-900">

          {/* Brand Info */}
          <div className="md:col-span-5">
            <a href="#" className="flex flex-col tracking-[0.25em] font-bold text-2xl mb-6">
              <span className="text-white">MAAD</span>
              <span className="text-[7px] tracking-[0.6em] text-neutral-500 -mt-1 font-light">STUDIO</span>
            </a>
            <p className="text-neutral-500 font-light text-xs max-w-sm leading-relaxed mb-6">
              Mobiliario industrial, iluminación estructural y objetos mecánicos. Hecho en Ecuador.
            </p>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playTick}
                onMouseEnter={playTick}
                className="text-neutral-500 hover:text-white transition-colors duration-300 border border-neutral-900 hover:border-neutral-700 p-2.5 rounded-full flex items-center justify-center w-[38px] h-[38px]"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playTick}
                onMouseEnter={playTick}
                className="text-neutral-500 hover:text-white transition-colors duration-300 border border-neutral-900 hover:border-neutral-700 p-2.5 rounded-full flex items-center justify-center w-[38px] h-[38px]"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playTick}
                onMouseEnter={playTick}
                className="text-neutral-500 hover:text-white transition-colors duration-300 border border-neutral-900 hover:border-neutral-700 p-2.5 rounded-full flex items-center justify-center w-[38px] h-[38px]"
                title="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.06-1.45-.01 2.42 0 4.83-.01 7.24-.13 2.44-1.39 4.87-3.56 6.02-2.24 1.25-5.11 1.35-7.47.26-2.33-1.03-4.14-3.28-4.52-5.84-.52-3.15.82-6.52 3.53-8.15 1.57-.96 3.44-1.31 5.25-1.02v4.08c-1.25-.33-2.65-.04-3.64.79-.98.79-1.47 2.15-1.25 3.39.2 1.3 1.17 2.46 2.41 2.87 1.25.43 2.72.15 3.7-.68.74-.6 1.12-1.52 1.11-2.48.01-4.82.01-9.64.01-14.46v.05z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.2em] font-bold text-white uppercase mb-6">DIRECTORIO</h4>
            <ul className="space-y-4">
              {[
                { name: "PRODUCTOS", href: "#products" },
                { name: "TALLER", href: "#about" },
                { name: "BITÁCORA", href: "#gallery" },
                { name: "PROYECTOS A MEDIDA", href: "#custom" }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={playTick}
                    className="text-neutral-500 hover:text-white text-xs tracking-wider transition-colors duration-300 uppercase font-light"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] tracking-[0.2em] font-bold text-white uppercase mb-6">CONTACTO Y TALLER</h4>
            <ul className="space-y-4 text-xs font-light text-neutral-500">
              <li className="flex flex-col">
                <span className="text-[9px] tracking-widest text-neutral-600 uppercase mb-1">DIRECTORIO DE CORREOS</span>
                <a href="mailto:info@maad.design" className="text-neutral-400 hover:text-white transition-colors duration-300">info@maad.design</a>
              </li>
              <li className="flex flex-col">
                <span className="text-[9px] tracking-widest text-neutral-600 uppercase mb-1">LABORATORIO DE INGENIERÍA</span>
                <span className="text-neutral-400">Quito / Ecuador // Zona Industrial de Metalmecánica 4</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[9px] tracking-widest text-neutral-600 uppercase mb-1">SOLICITUDES DE WHATSAPP</span>
                <a href="tel:+593999999999" className="text-neutral-400 hover:text-white transition-colors duration-300">+593 99 999 9999</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Tech Credits */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[9px] tracking-widest text-neutral-600 font-mono gap-4">
          <p>© {currentYear} MAAD STUDIO. TODOS LOS DERECHOS RESERVADOS.</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-white transition-colors duration-300"
          >
            <span>DESARROLLADO POR MAAD</span>
            <ArrowUpRight size={10} className="ml-1" />
          </a>
        </div>

      </div>
    </footer>
  );
}
