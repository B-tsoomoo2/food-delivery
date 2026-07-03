import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";
import { CartContextProvider } from "./_contexts/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "NomNom | Swift delivery",
  description: "Order fresh food with fast delivery from NomNom.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", inter.variable, bebasNeue.variable)}
    >
      <body className="min-h-full flex flex-col bg-[#404040] font-sans text-zinc-50">
        <CartContextProvider>
          <Header />
          {children}
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
