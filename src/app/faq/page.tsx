"use client";
import { useState } from "react";
import { PageHero, SectionHeading } from "@/lib/design";

const faqs = [
  {
    q: "Who can participate in Legacy Secured?",
    a: "Legacy Secured is open to all students — undergraduate and postgraduate — from any college or university. Individual participants and teams of up to 4 members are welcome.",
  },
  {
    q: "Is there a registration fee?",
    a: "Basic event access is free. Some specialized workshops and competitions may have a nominal entry fee, which will be announced at the time of registration.",
  },
  {
    q: "Do I need to have prior cybersecurity experience?",
    a: "No prior experience is required for most events. We have beginner-friendly workshops and talks. The CTF and advanced competitions are suited for experienced participants.",
  },
  {
    q: "What should I bring to the event?",
    a: "Bring your laptop with your preferred security tools pre-installed, a valid student ID, and your curiosity. Specific tool requirements will be shared in event-wise briefings.",
  },
  {
    q: "How do I register for specific events or workshops?",
    a: "After completing general registration, you can sign up for individual events, workshops, and competitions through the event portal. Slots are limited and filled on a first-come basis.",
  },
  {
    q: "Will certificates be provided?",
    a: "Yes. All participants will receive digital certificates of participation. Competition winners will additionally receive merit certificates and prizes.",
  },
  {
    q: "Is accommodation available for outstation participants?",
    a: "Limited on-campus accommodation may be available. Please contact us at contact@astrasec.in well in advance to check availability and make arrangements.",
  },
  {
    q: "Can I participate in the CTF remotely?",
    a: "The CTF qualifiers may be held online, but the finals will be conducted on-site only. More details will be shared closer to the event date.",
  },
  {
    q: "How will winners be determined?",
    a: "Each event has its own scoring rubric. For CTF — points per flag. Workshops — participation-based. Tech Talks — judged by expert panel. Details are published per event.",
  },
  {
    q: "How can I contact the organizing team?",
    a: "Reach us at contact@astrasec.in or through our social media channels on GitHub, LinkedIn, and Instagram. We aim to respond within 24–48 hours.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      border:`1px solid ${open ? "#0ea5e9" : "rgba(14,165,233,0.2)"}`,
      marginBottom:12,
      backgroundColor: open ? "rgba(14,165,233,0.04)" : "transparent",
      transition:"border-color 0.2s ease, background-color 0.2s ease",
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width:"100%", background:"none", border:"none", cursor:"pointer",
          padding:"18px 20px", display:"flex", justifyContent:"space-between", alignItems:"center",
          textAlign:"left",
        }}
      >
        <div style={{ display:"flex", gap:14, alignItems:"center" }}>
          <span style={{ fontFamily:"'Cinzel',serif", fontSize:10, color: open ? "#0ea5e9" : "rgba(14,165,233,0.4)", letterSpacing:"1px", flexShrink:0 }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span style={{ fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:12, color: open ? "#0ea5e9" : "#94a3b8", letterSpacing:"1px", transition:"color 0.2s" }}>
            {q}
          </span>
        </div>
        <span style={{ color: open ? "#0ea5e9" : "#c9a84c", fontSize:20, flexShrink:0, marginLeft:12, fontWeight:300, lineHeight:1, transition:"transform 0.2s ease", transform: open ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block" }}>
          +
        </span>
      </button>
      {open && (
        <div style={{ padding:"0 20px 18px 44px", borderTop:`1px solid rgba(14,165,233,0.15)` }}>
          <p style={{ fontFamily:"'EB Garamond',serif", fontSize:15, color:"#94a3b8", lineHeight:1.75, marginTop:14 }}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <PageHero title="FAQ" subtitle="Questions Answered. Mysteries Solved." />

      <section className="px-6 py-10 md:px-8 md:py-12" style={{ width:"100%", backgroundColor:"#0d1424", borderTop:`1px solid rgba(14,165,233,0.15)` }}>
        <SectionHeading text="Frequently Asked Questions" variant="gold" />
        <div style={{ maxWidth:780, margin:"0 auto" }}>
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-10 md:px-8 md:py-12" style={{
        width:"100%", backgroundColor:"#060b14",
        borderTop:`1px solid rgba(14,165,233,0.2)`, textAlign:"center"
      }}>
        <p style={{ fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"3px", color:"#0ea5e9", marginBottom:10, textTransform:"uppercase" }}>
          Still have questions?
        </p>
        <p style={{ fontFamily:"'EB Garamond',serif", fontSize:16, color:"#94a3b8", maxWidth:400, margin:"0 auto 20px" }}>
          Our team is happy to help. Reach out and we will get back to you within 24 hours.
        </p>
        <a href="/contact" style={{
          display:"inline-block", fontFamily:"'Cinzel',serif", fontSize:11, fontWeight:700,
          letterSpacing:"2px", textTransform:"uppercase", padding:"12px 28px",
          border:`1.5px solid #0ea5e9`, color:"#0ea5e9", backgroundColor:"rgba(14,165,233,0.08)",
          textDecoration:"none",
        }}>
          CONTACT US →
        </a>
      </section>
    </>
  );
}
