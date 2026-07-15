"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer() {
  // EVENT DATE — 31 October 2025 00:00:00 IST
  const EVENT_DATE = new Date("2025-10-31T00:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({ days:0, hours:0, minutes:0, seconds:0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const now = Date.now();
      const diff = EVENT_DATE - now;
      if (diff <= 0) {
        setTimeLeft({ days:0, hours:0, minutes:0, seconds:0 });
        return;
      }
      setTimeLeft({
        days:    Math.floor(diff / (1000*60*60*24)),
        hours:   Math.floor((diff % (1000*60*60*24)) / (1000*60*60)),
        minutes: Math.floor((diff % (1000*60*60)) / (1000*60)),
        seconds: Math.floor((diff % (1000*60)) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  return (
    <section style={{
      width:"100%", backgroundColor:"#060b14",
      borderTop:"1px solid rgba(14,165,233,0.2)",
      borderBottom:"1px solid rgba(14,165,233,0.2)",
      padding:"32px 24px",
      position:"relative", overflow:"hidden",
    }}>
      {/* Subtle circuit bg */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cpath d='M10 60h20M30 60V40M30 40h30M60 40v40M60 80h20' stroke='%230ea5e9' stroke-width='0.4' fill='none' opacity='0.06'/%3E%3Ccircle cx='30' cy='60' r='2' fill='%230ea5e9' opacity='0.08'/%3E%3C/svg%3E")`,
      }}/>
      
      {/* Label */}
      <div style={{ textAlign:"center", marginBottom:24, position:"relative" }}>
        <div style={{
          display:"inline-flex", alignItems:"center", gap:8,
          fontFamily:"'Cinzel',serif", fontSize:10, letterSpacing:"4px",
          color:"#0ea5e9", textTransform:"uppercase", opacity:0.8,
        }}>
          {/* Blinking dot */}
          <span style={{
            width:6, height:6, borderRadius:"50%", backgroundColor:"#0ea5e9",
            display:"inline-block",
            animation:"pulseGlow 1.5s ease-in-out infinite, blinkCursor 1.5s step-end infinite",
          }}/>
          EVENT STARTS IN
        </div>
      </div>

      {/* Timer boxes */}
      <div style={{
        display:"flex", justifyContent:"center", gap:"clamp(12px, 3vw, 32px)",
        position:"relative",
      }}>
        {[
          { val: timeLeft.days,    label:"DAYS" },
          { val: timeLeft.hours,   label:"HRS" },
          { val: timeLeft.minutes, label:"MIN" },
          { val: timeLeft.seconds, label:"SEC" },
        ].map(({ val, label }, i) => (
          <div key={label} style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
            {/* Number box */}
            <div style={{
              width:"clamp(64px, 15vw, 90px)", height:"clamp(64px, 15vw, 90px)",
              backgroundColor:"#0f172a",
              border:"1px solid rgba(14,165,233,0.3)",
              display:"flex", alignItems:"center", justifyContent:"center",
              position:"relative", overflow:"hidden",
            }}>
              {/* Inner gold corner ornaments */}
              {["tl","tr","bl","br"].map(c=>(
                <div key={c} style={{
                  position:"absolute",
                  top:c.startsWith("t")?3:"auto", bottom:c.startsWith("b")?3:"auto",
                  left:c.endsWith("l")?3:"auto", right:c.endsWith("r")?3:"auto",
                  width:8, height:8,
                  borderTop:c.startsWith("t")?"1px solid rgba(201,168,76,0.3)":"none",
                  borderBottom:c.startsWith("b")?"1px solid rgba(201,168,76,0.3)":"none",
                  borderLeft:c.endsWith("l")?"1px solid rgba(201,168,76,0.3)":"none",
                  borderRight:c.endsWith("r")?"1px solid rgba(201,168,76,0.3)":"none",
                }}/>
              ))}
              {/* Scan line on box */}
              <div style={{
                position:"absolute", left:0, right:0, height:1,
                background:"linear-gradient(to right, transparent, rgba(14,165,233,0.3), transparent)",
                top:"50%",
              }}/>
              <span style={{
                fontFamily:"'Cinzel',serif", fontWeight:900,
                fontSize:"clamp(22px, 5vw, 36px)",
                color:"#0ea5e9",
                textShadow:"0 0 20px rgba(14,165,233,0.5)",
                letterSpacing:"2px",
                position:"relative", zIndex:1,
              }}>
                {String(val).padStart(2,"0")}
              </span>
            </div>
            {/* Separator colon (except last) */}
            {i < 3 && (
              <div style={{ position:"absolute", marginTop:"clamp(18px, 4vw, 27px)", marginLeft:"clamp(76px, 18vw, 106px)", fontSize:"clamp(18px, 4vw, 28px)", color:"rgba(14,165,233,0.4)", fontFamily:"monospace", animation:"blinkCursor 1s step-end infinite" }}>:</div>
            )}
            <span style={{
              fontFamily:"'Cinzel',serif", fontSize:9, letterSpacing:"3px",
              color:"#475569", marginTop:8, textTransform:"uppercase",
            }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Bottom gold rule */}
      <div style={{ height:1, background:"linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)", marginTop:28 }}/>
    </section>
  );
}
