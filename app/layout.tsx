import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
  <body className="relative h-screen overflow-y-scroll snap-y snap-mandatory bg-[#05010a] text-white overflow-x-hidden antialiased">
        {/* GLOBAL ATMOSPHERIC CANVAS */}
        <div className="fixed inset-0 -z-10 pointer-events-none">

          {/* Top glow */}
          <div className="absolute inset-0 
            bg-[radial-gradient(ellipse_at_50%_-10%,rgba(124,58,237,0.35),transparent_70%)]" />

          {/* Bottom subtle depth */}
          <div className="absolute inset-0 
            bg-[radial-gradient(ellipse_at_50%_120%,rgba(80,0,160,0.15),transparent_70%)]" />

          {/* Very subtle vertical blend */}
          <div className="absolute inset-0 
            bg-[linear-gradient(to_bottom,rgba(10,5,20,0.3),transparent_30%,transparent_70%,rgba(10,5,20,0.3))]" />
        </div>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}