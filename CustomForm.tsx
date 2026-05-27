"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface CustomFormProps {
  playTick: () => void;
}

export default function CustomForm({ playTick }: CustomFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    idea: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playTick();
    setIsSubmitting(true);

    // Formatear el mensaje de WhatsApp con los datos ingresados
    const message = `Hola MAAD Studio, mi nombre es *${formData.name}* (WhatsApp de contacto: ${formData.whatsapp}). Tengo una propuesta para un proyecto a medida:\n\n${formData.idea}`;
    const whatsappUrl = `https://wa.me/593995285153?text=${encodeURIComponent(message)}`;

    // Esperar un breve momento para dar sensación de procesamiento antes de abrir WhatsApp
    setTimeout(() => {
      // Abrir WhatsApp en una pestaña nueva
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", whatsapp: "", idea: "" });
      
      // Auto reset success message after 5s
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };


  return (
    <section id="custom" className="py-24 md:py-32 bg-[#030303] border-b border-neutral-900 grid-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Heading and info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] tracking-[0.4em] text-neutral-500 font-semibold uppercase">04 / COTIZACIÓN PERSONALIZADA</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase mt-4 mb-6">
                Solicitar un <br />
                Proyecto a Medida
              </h2>
              <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
                ¿Tienes una idea para un mueble metálico personalizado, una solicitud de iluminación estructural o un prototipo que necesite fabricación industrial de alta precisión?
              </p>
              <p className="text-neutral-400 font-light text-sm leading-relaxed">
                Completa el formulario de requerimiento técnico. Nuestro equipo revisará tus especificaciones y te contactará directamente vía WhatsApp para discutir estimaciones de costos y detalles de ingeniería.
              </p>
            </div>

            <div className="hidden lg:block mt-12 p-6 border border-neutral-900 bg-neutral-950/50 rounded-sm">
              <span className="text-[9px] tracking-widest text-neutral-500 uppercase font-semibold">PROTOCOLO DE TOLERANCIA</span>
              <p className="text-[10px] text-neutral-500 mt-2 leading-relaxed font-mono">
                Las piezas metálicas estándar se cortan con tolerancias de ±0.1mm. La consultoría de diseño incluye modelado 3D CAD completo antes del ensamblaje.
              </p>
            </div>
          </div>

          {/* Right Column: Sleek Form */}
          <div className="lg:col-span-7">
            <div className="brushed-metal border border-neutral-900 p-8 md:p-12 rounded-sm glow-effect">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 size={48} className="text-white mb-6 animate-bounce" />
                  <h3 className="text-lg tracking-[0.2em] font-bold text-white uppercase mb-2">SOLICITUD ENVIADA</h3>
                  <p className="text-neutral-400 text-xs font-light max-w-sm leading-relaxed">
                    Tu requerimiento ha sido registrado en el sistema. Nuestro equipo técnico te contactará vía WhatsApp para iniciar el proceso de diseño y modelado CAD.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-[9px] tracking-[0.25em] text-neutral-400 font-semibold uppercase mb-2">
                      TU NOMBRE
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={playTick}
                      className="bg-black/40 border border-neutral-900 focus:border-neutral-500 rounded-sm px-4 py-3 text-sm text-white font-light focus:outline-none transition-colors duration-300 placeholder:text-neutral-700"
                      placeholder="ej. Alejandro Mendoza"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="flex flex-col">
                    <label htmlFor="whatsapp" className="text-[9px] tracking-[0.25em] text-neutral-400 font-semibold uppercase mb-2">
                      NÚMERO DE WHATSAPP
                    </label>
                    <input
                      required
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      onFocus={playTick}
                      className="bg-black/40 border border-neutral-900 focus:border-neutral-500 rounded-sm px-4 py-3 text-sm text-white font-light focus:outline-none transition-colors duration-300 placeholder:text-neutral-700"
                      placeholder="ej. +593 99 999 9999"
                    />
                  </div>

                  {/* Idea */}
                  <div className="flex flex-col">
                    <label htmlFor="idea" className="text-[9px] tracking-[0.25em] text-neutral-400 font-semibold uppercase mb-2">
                      IDEA DE PRODUCTO / ESPECIFICACIONES RESUMIDAS
                    </label>
                    <textarea
                      required
                      rows={4}
                      id="idea"
                      name="idea"
                      value={formData.idea}
                      onChange={handleInputChange}
                      onFocus={playTick}
                      className="bg-black/40 border border-neutral-900 focus:border-neutral-500 rounded-sm px-4 py-3 text-sm text-white font-light focus:outline-none transition-colors duration-300 resize-none placeholder:text-neutral-700 leading-relaxed"
                      placeholder="Describe lo que deseas que construyamos, dimensiones aproximadas, materiales y acabados..."
                    />
                  </div>


                  {/* Submit Button */}
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    onMouseEnter={playTick}
                    className="w-full bg-white text-black font-semibold text-xs tracking-[0.2em] py-4 uppercase rounded-sm border border-white hover:bg-black hover:text-white transition-all duration-500 flex items-center justify-center gap-2 glow-effect-hover disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "TRANSMITIENDO..." : "ENVIAR REQUERIMIENTO"}</span>
                    {!isSubmitting && <Send size={12} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
