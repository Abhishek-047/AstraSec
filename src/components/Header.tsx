import Link from "next/link";

const GOLD = "#c9a84c";
const GOLD_DIM = "#8b6914";

const navLinks = [
  { name: "Home",      href: "/" },
  { name: "About",     href: "/about" },
  { name: "Events",    href: "/events" },
  { name: "Schedule",  href: "/schedule" },
  { name: "Gallery",   href: "/gallery" },
  { name: "Sponsors",  href: "/sponsors" },
  { name: "Contact",   href: "/contact" },
];

export default function Header() {
  return (
    <header style={{
      display: "none",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 40px",
      borderBottom: `1px solid ${GOLD_DIM}`,
      position: "sticky", top: 0, zIndex: 40,
      backgroundColor: "rgba(232,217,176,0.92)",
      backdropFilter: "blur(4px)",
    }}
    className="lg-flex"
    >
      <nav style={{ display:"flex", gap:32 }}>
        {navLinks.map(link => (
          <Link key={link.name} href={link.href} style={{
            fontFamily:"'Cinzel',serif", fontSize:12, fontWeight:600,
            letterSpacing:"2px", color: GOLD_DIM, textDecoration:"none",
            textTransform:"uppercase", transition:"color 0.2s",
          }}
          className="header-link"
          >{link.name}</Link>
        ))}
      </nav>
      <button className="btn-gold" style={{ fontSize:11, padding:"10px 22px", letterSpacing:"2px" }}>
        Register Now
      </button>
      <style>{`
        .lg-flex { display: none; }
        @media (min-width: 1024px) { .lg-flex { display: flex !important; } }
        .header-link:hover { color: ${GOLD} !important; }
      `}</style>
    </header>
  );
}
