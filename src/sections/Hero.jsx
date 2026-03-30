import FadeUp from "../components/FadeUp";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="about" style={{ minHeight: "100vh", padding: "10rem 5vw 5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <FadeUp>
        <motion.h1
          style={{
            fontSize: "clamp(3rem,8vw,8rem)",
            fontWeight: "900",
            lineHeight: "1",
            marginBottom: "1rem"
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          NO FLUFF.<br />
          JUST<br />
          <span style={{ WebkitTextStroke: "1px #fff", color: "transparent" }}>
            STRENGTH
          </span>
        </motion.h1>
      </FadeUp>

      <FadeUp delay={0.3}>
        <a href="/apply">
          <motion.button
            style={{
              marginTop: "2rem",
              padding: "1rem 2rem",
              background: "#fff",
              color: "#000",
              fontWeight: "700",
              fontSize: "1.1rem",
              borderRadius: "5px"
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Training
          </motion.button>
        </a>
      </FadeUp>
    </section>
  );
}
