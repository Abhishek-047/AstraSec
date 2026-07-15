import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Legacy Secured | AstraSec — SOCS Cybersecurity Tech Fest",
  description: "Legacy Secured — a Heritage × Cybersecurity Tech Fest by AstraSec (SOCS). 25–27 July 2025, Technology Block Auditorium, Jaipur.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Global ambient cyber layer */}
        <div className="hex-overlay" aria-hidden="true" />
        <div className="page-scanline" aria-hidden="true" />
        {/* Binary columns — 6 of them at different positions/speeds */}
        <div className="cyber-ambient" aria-hidden="true">
          {[
            { left:"5%",  delay:"0s",   dur:"18s", txt:"01001\n11010\n00101\n10110\n01011\n11001\n00110" },
            { left:"15%", delay:"4s",   dur:"22s", txt:"10110\n01001\n11010\n00101\n10110\n01011" },
            { left:"75%", delay:"2s",   dur:"20s", txt:"00101\n10110\n01011\n11001\n00110\n01001" },
            { left:"85%", delay:"7s",   dur:"16s", txt:"11010\n00101\n10110\n01011\n11001\n00110" },
            { left:"92%", delay:"1s",   dur:"24s", txt:"01011\n11001\n00110\n01001\n11010\n00101" },
            { left:"55%", delay:"11s",  dur:"19s", txt:"11001\n00110\n01001\n11010\n00101\n10110" },
          ].map((c, i) => (
            <div key={i} className="binary-col" style={{ left:c.left, animationDelay:c.delay, animationDuration:c.dur }}>
              {c.txt}
            </div>
          ))}
        </div>

        {/* Desktop sidebar — hidden on mobile via CSS (see sidebar component) */}
        <Sidebar />
        
        {/* Main column — full width on mobile, offset on desktop */}
        <div
          id="main-col"
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "#0a0f1e",
            position: "relative",
          }}
        >
          {/* Vignette overlay */}
          <div style={{
            position:"absolute", inset:0, pointerEvents:"none", zIndex:0,
            background:"radial-gradient(ellipse at 20% 0%, rgba(14,165,233,0.04) 0%, transparent 60%)",
          }} />

          <MobileNav />

          <main style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            padding: "0 0 80px",
            position: "relative",
            zIndex: 1,
          }}>
            {children}
          </main>

          <Footer />
        </div>

        {/* KEY FIX: Remove sidebar from flex flow. Use position:fixed on sidebar (already set).
            Main col takes full width, then offset on desktop only. */}
        <style>{`
          body { margin: 0; overflow-x: hidden; }
          #main-col {
            margin-left: 0;
            width: 100%;
            overflow-x: hidden;
            padding-top: 60px; /* Space for MobileNav */
          }
          @media (min-width: 1024px) {
            #main-col {
              margin-left: 260px;
              width: calc(100% - 260px);
              padding-top: 0; /* Sidebar instead of top nav */
            }
          }
        `}</style>
      </body>
    </html>
  );
}
