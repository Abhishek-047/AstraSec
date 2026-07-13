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
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <Sidebar />
          {/* Main scrollable column */}
          <div
            id="main-col"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              backgroundColor: "#e8d9b0",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
              position: "relative",
            }}
          >
            {/* Vignette */}
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
              background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(30,18,4,0.45) 100%)",
            }} />

            <MobileNav />
            <Header />

            <main style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              maxWidth: "none",
              margin: "0 auto",
              padding: "16px 0 80px",
              position: "relative",
              zIndex: 1,
            }}>
              {children}
            </main>

            <Footer />
          </div>
        </div>

        {/* Sidebar margin on desktop */}
        <style>{`
          @media (min-width: 1024px) {
            #main-col { margin-left: 260px; }
          }
        `}</style>
      </body>
    </html>
  );
}
