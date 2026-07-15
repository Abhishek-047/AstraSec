"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer() {
  // ✅ UPDATED EVENT DATE — change this to actual event date
  // Format: "YYYY-MM-DDTHH:MM:SS+05:30" (IST)
  const EVENT_DATE = new Date("2026-10-31T09:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState<{days:number;hours:number;minutes:number;seconds:number} | null>(null);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const tick = () => {
      const diff = EVENT_DATE - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days:0, hours:0, minutes:0, seconds:0 });
        setIsOver(true);
        return;
      }
      setIsOver(false);
      setTimeLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Don't render until client hydrates (prevents SSR mismatch)
  if (timeLeft === null) return null;

  const units = [
    { val: timeLeft.days,    label: "DAYS" },
    { val: timeLeft.hours,   label: "HRS"  },
    { val: timeLeft.minutes, label: "MIN"  },
    { val: timeLeft.seconds, label: "SEC"  },
  ];

  return (
    <section style={{
      width: "100%", backgroundColor: "#060b14",
      borderTop: "1px solid rgba(14,165,233,0.2)",
      borderBottom: "1px solid rgba(14,165,233,0.2)",
      padding: "40px 24px", position: "relative", overflow: "hidden",
    }}>
      {/* Circuit bg texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cpath d='M10 60h20M30 60V40M30 40h30M60 40v40M60 80h20' stroke='%230ea5e9' stroke-width='0.4' fill='none' opacity='0.06'/%3E%3Ccircle cx='30' cy='60' r='2' fill='%230ea5e9' opacity='0.08'/%3E%3C/svg%3E")`,
      }} />

      {/* Label */}
      <div style={{ textAlign: "center", marginBottom: 28, position: "relative" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: "5px",
          color: "#0ea5e9", textTransform: "uppercase",
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%", backgroundColor: "#0ea5e9",
            display: "inline-block", flexShrink: 0,
            boxShadow: "0 0 8px #0ea5e9",
            animation: "blinkCursor 1.2s step-end infinite",
          }} />
          {isOver ? "EVENT IS LIVE" : "EVENT STARTS IN"}
        </div>
      </div>

      {/* Timer units */}
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center",
        gap: "clamp(8px, 2vw, 20px)", position: "relative",
      }}>
        {units.map(({ val, label }, i) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 2vw, 20px)" }}>
            {/* Box */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{
                width: "clamp(68px, 14vw, 96px)", height: "clamp(68px, 14vw, 96px)",
                backgroundColor: "#0f172a",
                border: "1px solid rgba(14,165,233,0.35)",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
                boxShadow: "inset 0 0 20px rgba(14,165,233,0.04)",
              }}>
                {/* Corner ornaments — gold */}
                {["tl","tr","bl","br"].map(c => (
                  <div key={c} style={{
                    position: "absolute",
                    top: c.startsWith("t") ? 4 : "auto",
                    bottom: c.startsWith("b") ? 4 : "auto",
                    left: c.endsWith("l") ? 4 : "auto",
                    right: c.endsWith("r") ? 4 : "auto",
                    width: 9, height: 9,
                    borderTop:    c.startsWith("t") ? "1px solid rgba(201,168,76,0.4)" : "none",
                    borderBottom: c.startsWith("b") ? "1px solid rgba(201,168,76,0.4)" : "none",
                    borderLeft:   c.endsWith("l")   ? "1px solid rgba(201,168,76,0.4)" : "none",
                    borderRight:  c.endsWith("r")   ? "1px solid rgba(201,168,76,0.4)" : "none",
                  }} />
                ))}
                {/* Horizontal scan line */}
                <div style={{
                  position: "absolute", left: 0, right: 0, height: 1, top: "50%",
                  background: "linear-gradient(to right, transparent, rgba(14,165,233,0.25), transparent)",
                }} />
                {/* Number */}
                <span style={{
                  fontFamily: "'Cinzel',serif", fontWeight: 900,
                  fontSize: "clamp(24px, 5vw, 40px)",
                  color: "#0ea5e9",
                  textShadow: "0 0 24px rgba(14,165,233,0.6)",
                  letterSpacing: "2px", position: "relative", zIndex: 1,
                  fontVariantNumeric: "tabular-nums",
                }}>
                  {String(val).padStart(2, "0")}
                </span>
              </div>
              {/* Label */}
              <span style={{
                fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "3px",
                color: "#475569", marginTop: 10, textTransform: "uppercase",
              }}>{label}</span>
            </div>
            {/* Colon separator */}
            {i < 3 && (
              <span style={{
                fontSize: "clamp(20px, 4vw, 32px)",
                color: "rgba(14,165,233,0.5)",
                fontFamily: "monospace", fontWeight: 700,
                marginBottom: 22,
                animation: "blinkCursor 1s step-end infinite",
              }}>:</span>
            )}
          </div>
        ))}
      </div>

      {/* Bottom rule */}
      <div style={{
        height: 1,
        background: "linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)",
        marginTop: 32,
      }} />
    </section>
  );
}
