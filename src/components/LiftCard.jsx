import { motion } from "framer-motion";

export default function LiftCard({ lift, weight, unit }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={{
        borderTop: "2px solid #333",
        padding: "2rem",
        background: "#111",
        borderRadius: "10px",
        flex: 1,
      }}
    >
      <p style={{ color: "#777", fontSize: "0.8rem" }}>{lift}</p>

      <h2 style={{ fontSize: "3rem", fontWeight: "900" }}>
        {weight}
        <span style={{ fontSize: "1rem", marginLeft: "5px" }}>{unit}</span>
      </h2>
    </motion.div>
  );
}
