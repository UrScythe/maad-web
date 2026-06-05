import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MAAD | Diseño Industrial Hecho en Ecuador",
  description: "Mobiliario metálico a medida, iluminación estructural y objetos industriales fabricados con precisión en Ecuador.",
  keywords: [
    "MAAD", 
    "Diseño Industrial", 
    "Ecuador", 
    "Mobiliario Metálico", 
    "Muebles de Metal", 
    "Iluminación Industrial", 
    "Decoración Industrial"
  ],
  authors: [{ name: "MAAD Studio" }],
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} scroll-smooth dark`}>
      <body className="font-sans bg-metal-bg text-foreground antialiased selection:bg-white selection:text-black min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
