"use client";

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Products from "@/app/components/Products";
import About from "@/app/components/About";
import Gallery from "@/app/components/Gallery";
import CustomForm from "@/app/components/CustomForm";
import Footer from "@/app/components/Footer";
import WhatsAppBtn from "@/app/components/WhatsAppBtn";

export default function Home() {
  const playTick = () => {
    // Función para reproducir efectos de sonido (se puede conectar a un archivo .mp3 en el futuro)
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Products />
        <About />
        <Gallery playTick={playTick} />
        <CustomForm playTick={playTick} />
      </main>
      <Footer playTick={playTick} />
      <WhatsAppBtn />
    </>
  );
}

