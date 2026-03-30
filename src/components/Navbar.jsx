import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        width: "100%",
        top: 0,
        padding: "1rem 5vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled ? "rgba(0,0,0,0.95)" : "transparent",
        backdropFilter: "blur(20px)",
        zIndex: 100,
        transition: "background 0.3s"
      }}
    >
      <h3 style={{ fontWeight: "900", fontSize: "1.5rem" }}>GymPro</h3>

      <div style={{ display: "flex", gap: "2rem", fontSize: "1rem" }}>
        <a href="/about" style={{ color: "white", opacity: scrolled ? 1 : 0.8 }}>About</a>
        <a href="/" style={{ color: "white", opacity: scrolled ? 1 : 0.8 }}>Home</a>
        <a href="/pricing" style={{ color: "white", opacity: scrolled ? 1 : 0.8 }}>Pricing</a>
        <a href="/contact" style={{ color: "white", opacity: scrolled ? 1 : 0.8 }}>Contact</a>
        <a href="/apply" style={{ 
          padding: "0.5rem 1.5rem", 
          background: "#fff", 
          color: "#000", 
          borderRadius: "25px", 
          fontWeight: "600",
          textDecoration: "none",
          opacity: scrolled ? 1 : 0.8 
        }}>Apply Now</a>
      </div>
    </nav>
  );
}
