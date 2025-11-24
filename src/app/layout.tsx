import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Birazdan oluşturacağız
import Footer from "@/components/Footer"; // Birazdan oluşturacağız

const cinzel = Cinzel({ 
  subsets: ["latin"], 
  variable: "--font-cinzel",
  display: "swap" 
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  display: "swap" 
});

export const metadata: Metadata = {
  title: "Yatırım Koç | Ultra Lüks Emlak",
  description: "Ankara'nın en prestijli mülkleri ve yatırım fırsatları.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${montserrat.variable} ${cinzel.variable} font-sans bg-cream text-dark antialiased selection:bg-primary selection:text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}