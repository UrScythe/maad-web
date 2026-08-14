"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#030303] relative border-b border-neutral-900 overflow-hidden">
      {/* Light accent lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-neutral-950 pointer-events-none" />
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-neutral-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6">
            <span className="text-[10px] tracking-[0.4em] text-neutral-500 font-semibold uppercase">02 / ARTESANÍA</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase mt-4 mb-8">
              Diseño <br />
              Con Precisión.
            </h2>

            <div className="space-y-6 text-neutral-400 font-light text-base md:text-lg leading-relaxed">
              <p>
                Con sede en Ecuador, <strong className="text-white font-medium">MAAD</strong> es un estudio de diseño industrial y fabricación de metal. Fusionamos la estética arquitectónica con la ingeniería de alta gama, especializándonos en mobiliario metálico a medida, iluminación estructural y piezas de ingeniería de precisión.
              </p>
              <p>
                Nuestros procesos de producción se basan en corte láser CNC de última generación, soldaduras de alta precisión y acabados premium. Cada objeto que creamos está construido con acero estructural, acero inoxidable y láminas de metal en bruto, diseñados para resaltar la belleza de los materiales industriales sin refinar.
              </p>
              <p>
                Creemos en el minimalismo puro, la mecánica expuesta y la integridad estructural absoluta. No ocultamos las uniones, las soldaduras o las marcas de las herramientas; las celebramos como pruebas de ingeniería de precisión.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-neutral-900">
              <div>
                <div className="text-xl md:text-2xl font-bold text-white tracking-wider">100%</div>
                <div className="text-[9px] tracking-widest text-neutral-500 mt-1 uppercase font-semibold">PRODUCCIÓN ECUATORIANA</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-white tracking-wider">CNC</div>
                <div className="text-[9px] tracking-widest text-neutral-500 mt-1 uppercase font-semibold">PRECISIÓN LÁSER</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-white tracking-wider">304/316</div>
                <div className="text-[9px] tracking-widest text-neutral-500 mt-1 uppercase font-semibold">GRADOS DE ACERO</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-1.5 brushed-metal border border-neutral-900 rounded-sm overflow-hidden aspect-[4/3] w-full flex items-center justify-center glow-effect"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10" />
              <img
                src="/images/about_workshop.png"
                alt="MAAD Taller de fabricación industrial"
                className="w-full h-full object-cover rounded-sm opacity-85 hover:opacity-100 transition-opacity duration-700"
              />

              {/* Overlay crosshair graphic for industrial tech theme */}
              <div className="absolute top-6 left-6 text-[9px] tracking-widest text-white/40 font-mono z-20">SISTEMA.ACTIVO // 098</div>
              <div className="absolute bottom-6 right-6 text-[9px] tracking-widest text-white/40 font-mono z-20">TOLERANCIA 0.005mm</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
