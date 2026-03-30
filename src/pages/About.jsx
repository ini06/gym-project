import FadeUp from "../components/FadeUp";
import { lifts } from "../data/lifts";

export default function About() {
  return (
    <div style={{ paddingTop: "100px", paddingBottom: "50px" }}>
      <section style={{ padding: "6rem 5vw", textAlign: "center" }}>
        <FadeUp>
          <h1 style={{ fontSize: "3rem", fontWeight: "900", marginBottom: "2rem" }}>
            About GymPro
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p style={{ maxWidth: "600px", margin: "0 auto 3rem", color: "#ccc", fontSize: "1.2rem", lineHeight: "1.6" }}>
            Professional strength training with proven results. No gym-bro nonsense - just science-backed 
            programming and relentless progression. Transform your physique with personalized coaching.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "2rem", color: "#ccc" }}>
            My Personal Bests
          </h2>
        </FadeUp>

        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          {lifts.map((l, i) => (
            <div key={i} style={{
              borderTop: "2px solid #333",
              padding: "2rem",
              background: "#111",
              borderRadius: "10px",
              flex: "1 1 200px",
              minWidth: "200px"
            }}>
              <p style={{ color: "#777", fontSize: "0.9rem", marginBottom: "0.5rem" }}>{l.lift}</p>
              <h3 style={{ fontSize: "2.5rem", fontWeight: "900" }}>
                {l.weight}<span style={{ fontSize: "1rem", marginLeft: "5px" }}>{l.unit}</span>
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "6rem 5vw", background: "#111" }}>
        <FadeUp delay={0.1}>
          <h2 style={{ fontSize: "3rem", fontWeight: "900", textAlign: "center", marginBottom: "3rem" }}>
            Proven Results
          </h2>
        </FadeUp>
        <p style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", color: "#ccc", fontSize: "1.1rem" }}>
          100+ clients transformed. From beginners to advanced lifters. Consistent progression 
          guaranteed. Ready to join them?
        </p>
      </section>
    </div>
  );
}
