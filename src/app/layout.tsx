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
        {/* Desktop sidebar — hidden on mobile via CSS (see sidebar component) */}
        <Sidebar />
        
        {/* Main column — full width on mobile, offset on desktop */}
        <div
          id="main-col"
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "#e8d9b0",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
            position: "relative",
          }}
        >
          {/* Vignette overlay */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(30,18,4,0.45) 100%)",
          }} />

          <MobileNav />

          <main style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            padding: "16px 0 80px",
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
          body { margin: 0; }
          #main-col {
            margin-left: 0;
            width: 100%;
          }
          @media (max-width: 1023px) {
            #main-col {
              padding-top: 60px;
            }
          }
          @media (min-width: 1024px) {
            #main-col {
              margin-left: 260px;
              width: calc(100% - 260px);
            }
          }
        `}</style>
      </body>
    </html>
  );
}
