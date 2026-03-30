import { lifts } from "../data/lifts";
import LiftCard from "../components/LiftCard";
import FadeUp from "../components/FadeUp";

export default function PRs() {
  return (
    <section id="prs" style={{ padding: "6rem 5vw", background: "#111" }}>
      <FadeUp>
        <h2 style={{ fontSize: "3rem", fontWeight: "900", textAlign: "center", marginBottom: "3rem" }}>
          THE NUMBERS DON'T LIE
        </h2>
      </FadeUp>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        {lifts.map((l, i) => (
          <LiftCard key={i} {...l} />
        ))}
      </div>
    </section>
  );
}
