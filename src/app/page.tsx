"use client";

import { useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Products from "@/app/components/Products";
import Footer from "@/app/components/Footer";
import WhatsAppBtn from "@/app/components/WhatsAppBtn";

export default function Home() {
  useEffect(() => {
    // Evita que la página inicie scrolleada abajo por el modo de animación o un hash antiguo
    if (typeof window !== "undefined") {
      if (window.location.hash === "#products") {
        window.history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Products />
      </main>
      <Footer />
      <WhatsAppBtn />
    </>
  );
}
