import { useState } from "react";

export default function Booking() {
  const [date, setDate] = useState("");

  const book = () => {
    if (date) {
      alert(`Session booked for ${date}! Confirmation sent to WhatsApp.`);
      window.open(`https://wa.me/919444606215?text=Booked session on ${date}`, "_blank");
    }
  };

  return (
    <div style={{ padding: "50px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Book Session</h1>
      <p>Select a date:</p>
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)}
        style={{ display: "block", width: "100%", padding: "10px", margin: "10px 0" }}
      />
      <button onClick={book} style={{ padding: "10px 20px", background: "black", color: "white", border: "none" }}>
        Book Now
      </button>
    </div>
  );
}
