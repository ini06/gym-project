import FadeUp from "../components/FadeUp";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 5vw", textAlign: "center" }}>
      <FadeUp delay={0.1}>
        <h2 style={{ fontSize: "3rem", fontWeight: "900", marginBottom: "1rem" }}>
          READY TO TRANSFORM?
        </h2>
      </FadeUp>

      <FadeUp delay={0.3}>
        <p style={{ marginBottom: "2rem", color: "#777", fontSize: "1.2rem" }}>
          Message me directly on WhatsApp and start your journey.
        </p>
      </FadeUp>

      <FadeUp delay={0.5}>
        <a href="https://wa.me/919444606215">
          <button style={{
            padding: "1rem 2rem",
            background: "#25D366",
            color: "#fff",
            fontWeight: "700",
            fontSize: "1.1rem",
            borderRadius: "5px"
          }}>
            Chat on WhatsApp
          </button>
        </a>
      </FadeUp>
    </section>
  );
}
