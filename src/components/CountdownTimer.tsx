"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const EVENT_DATE = new Date("2026-10-31T09:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number; hours: number; minutes: number; seconds: number;
  } | null>(null);
  const [isOver, setIsOver] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const update = () => {
      const diff = EVENT_DATE - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days:0, hours:0, minutes:0, seconds:0 });
        setIsOver(true);
      } else {
        setIsOver(false);
        setTimeLeft({
          days:    Math.floor(diff / 86400000),
          hours:   Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        });
      }
      setTick(t => t + 1);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (timeLeft === null) return null;

  const units = [
    { val: timeLeft.days,    label: "DAYS",  accent: "#0ea5e9" },
    { val: timeLeft.hours,   label: "HRS",   accent: "#22d3ee" },
    { val: timeLeft.minutes, label: "MIN",   accent: "#a78bfa" },
    { val: timeLeft.seconds, label: "SEC",   accent: "#c9a84c" },
  ];

  const nowStr = new Date().toLocaleTimeString("en-IN", {
    hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit",
  });

  return (
    <section style={{
      width: "100%", backgroundColor: "#060b14",
      borderTop: "1px solid rgba(14,165,233,0.2)",
      borderBottom: "1px solid rgba(14,165,233,0.2)",
      padding: "44px 16px 36px",
      position: "relative", overflow: "hidden",
    }}>

      {/* ── Top accent bar ── */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(to right, transparent, #0ea5e9 25%, #a78bfa 50%, #c9a84c 75%, transparent)",
        opacity: 0.5,
      }} />

      {/* ── Circuit bg ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cpath d='M20 80h30M50 80V50M50 50h40M90 50v60M90 110h30M130 40h20M130 40v40M130 80H110M110 80v40' stroke='%230ea5e9' stroke-width='0.5' fill='none' opacity='0.06'/%3E%3Ccircle cx='50' cy='80' r='2' fill='%230ea5e9' opacity='0.08'/%3E%3Ccircle cx='90' cy='50' r='2' fill='%230ea5e9' opacity='0.08'/%3E%3Ccircle cx='130' cy='80' r='2' fill='%230ea5e9' opacity='0.08'/%3E%3C/svg%3E")`,
      }} />

      {/* ── Terminal header ── */}
      <div style={{ textAlign: "center", marginBottom: 28, position: "relative" }}>
        
        {/* Sys log line */}
        <div style={{
          fontFamily: "monospace", fontSize: "clamp(9px, 2vw, 11px)",
          color: "rgba(14,165,233,0.35)", marginBottom: 10, letterSpacing: "1px",
        }}>
          <span style={{ color: "#c9a84c", opacity: 0.6 }}>&gt;</span>
          {" "}event.timer.start() — target: <span style={{ color: "rgba(14,165,233,0.6)" }}>ASTRAsec_2026::31_Oct</span>
        </div>

        {/* Main status badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 12,
          backgroundColor: "rgba(14,165,233,0.06)",
          border: "1px solid rgba(14,165,233,0.25)",
          padding: "8px clamp(12px, 4vw, 24px)",
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
            backgroundColor: isOver ? "#22c55e" : "#0ea5e9",
            boxShadow: isOver ? "0 0 10px #22c55e" : "0 0 10px #0ea5e9",
            animation: "blinkCursor 1.2s step-end infinite",
            display: "inline-block",
          }} />
          <span style={{
            fontFamily: "'Cinzel',serif",
            fontSize: "clamp(9px, 2.5vw, 12px)",
            letterSpacing: "clamp(2px, 1vw, 5px)",
            color: isOver ? "#22c55e" : "#0ea5e9",
            textTransform: "uppercase",
          }}>
            {isOver ? "// EVENT IS LIVE" : "EVENT STARTS IN"}
          </span>
          <span style={{
            width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
            backgroundColor: isOver ? "#22c55e" : "#0ea5e9",
            boxShadow: isOver ? "0 0 10px #22c55e" : "0 0 10px #0ea5e9",
            animation: "blinkCursor 1.2s 0.6s step-end infinite",
            display: "inline-block",
          }} />
        </div>
      </div>

      {/* ── Timer units ── */}
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center",
        gap: "clamp(4px, 1.5vw, 16px)",
        flexWrap: "nowrap", padding: "0 8px",
      }}>
        {units.map(({ val, label, accent }, i) => (
          <div key={label} style={{
            display: "flex", alignItems: "center",
            gap: "clamp(4px, 1.5vw, 16px)",
          }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

              {/* Unit label ABOVE box — monospace terminal style */}
              <div style={{
                fontFamily: "monospace",
                fontSize: "clamp(7px, 1.5vw, 9px)",
                color: `${accent}60`,
                letterSpacing: "1px", marginBottom: 5,
              }}>[ {label} ]</div>

              {/* Box */}
              <div style={{
                width: "clamp(58px, 18vw, 100px)",
                height: "clamp(58px, 18vw, 100px)",
                backgroundColor: "#0a0f1e",
                border: `1px solid ${accent}50`,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
                boxShadow: `0 0 20px ${accent}08, inset 0 0 24px ${accent}04`,
              }}>
                {/* Gold corner ornaments */}
                {(["tl","tr","bl","br"] as const).map(c => (
                  <div key={c} style={{
                    position: "absolute",
                    top: c.startsWith("t") ? 4 : "auto",
                    bottom: c.startsWith("b") ? 4 : "auto",
                    left: c.endsWith("l") ? 4 : "auto",
                    right: c.endsWith("r") ? 4 : "auto",
                    width: 8, height: 8,
                    borderTop:    c.startsWith("t") ? "1px solid rgba(201,168,76,0.45)" : "none",
                    borderBottom: c.startsWith("b") ? "1px solid rgba(201,168,76,0.45)" : "none",
                    borderLeft:   c.endsWith("l")   ? "1px solid rgba(201,168,76,0.45)" : "none",
                    borderRight:  c.endsWith("r")   ? "1px solid rgba(201,168,76,0.45)" : "none",
                  }} />
                ))}

                {/* Flip-card mid-line */}
                <div style={{
                  position: "absolute", left: 8, right: 8, height: 1, top: "50%",
                  background: `rgba(14,165,233,0.12)`,
                }} />

                {/* Top half glow */}
                <div style={{
                  position: "absolute", left: 0, right: 0, top: 0, height: "50%",
                  background: `linear-gradient(to bottom, ${accent}06, transparent)`,
                }} />

                {/* Animated scan line */}
                <div style={{
                  position: "absolute", left: 0, right: 0, height: 1,
                  background: `linear-gradient(to right, transparent, ${accent}40, transparent)`,
                  animation: "scanLine 3s linear infinite",
                }} />

                {/* Number */}
                <span style={{
                  fontFamily: "'Cinzel',serif", fontWeight: 900,
                  fontSize: "clamp(20px, 4.5vw, 44px)",
                  color: accent,
                  textShadow: `0 0 20px ${accent}80, 0 0 40px ${accent}30`,
                  letterSpacing: "2px", position: "relative", zIndex: 1,
                  fontVariantNumeric: "tabular-nums",
                }}>
                  {String(val).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Colon — two dots */}
            {i < 3 && (
              <div style={{
                display: "flex", flexDirection: "column",
                gap: "clamp(4px, 1vw, 8px)",
                marginBottom: "clamp(16px, 3.5vw, 26px)",
                flexShrink: 0,
              }}>
                <div style={{
                  width: "clamp(4px, 1vw, 6px)", height: "clamp(4px, 1vw, 6px)",
                  borderRadius: "50%", backgroundColor: "#0ea5e9",
                  boxShadow: "0 0 6px #0ea5e9",
                  animation: "blinkCursor 1s step-end infinite",
                }} />
                <div style={{
                  width: "clamp(4px, 1vw, 6px)", height: "clamp(4px, 1vw, 6px)",
                  borderRadius: "50%", backgroundColor: "#0ea5e9",
                  boxShadow: "0 0 6px #0ea5e9",
                  animation: "blinkCursor 1s 0.5s step-end infinite",
                }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Bottom terminal status ── */}
      <div style={{ marginTop: 28, textAlign: "center", position: "relative" }}>
        <div style={{
          height: 1,
          background: "linear-gradient(to right, transparent, rgba(14,165,233,0.15) 30%, rgba(201,168,76,0.15) 70%, transparent)",
          marginBottom: 12,
        }} />
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontFamily: "monospace",
          fontSize: "clamp(8px, 1.8vw, 10px)",
          color: "rgba(14,165,233,0.25)", letterSpacing: "1px",
        }}>
          <span style={{ color: "#c9a84c", opacity: 0.4 }}>[OK]</span>
          timer.running — sys_clock: <span style={{ color: "rgba(14,165,233,0.4)" }}>{nowStr}_IST</span>
          <span style={{
            display: "inline-block", width: 2, height: "1em",
            backgroundColor: "#0ea5e9", opacity: 0.4, verticalAlign: "middle",
            animation: "blinkCursor 1s step-end infinite",
          }} />
        </div>
      </div>

      {/* ── Bottom accent bar ── */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(to right, transparent, #c9a84c 25%, #a78bfa 50%, #0ea5e9 75%, transparent)",
        opacity: 0.3,
      }} />
    </section>
  );
}
