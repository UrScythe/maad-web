"use client";

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Products from "@/app/components/Products";
import Footer from "@/app/components/Footer";
import WhatsAppBtn from "@/app/components/WhatsAppBtn";

export default function Home() {
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
