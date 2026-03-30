import { useState } from "react";

export default function Apply() {
  const [form, setForm] = useState({ name: "", email: "", goal: "", phone: "" });

  const submit = () => {
    const msg = `New Application:\nName: ${form.name}\nEmail: ${form.email}\nGoal: ${form.goal}\nPhone: ${form.phone}`;
    window.open(`https://wa.me/919444606215?text=${encodeURIComponent(msg)}`, "_blank");
    alert("Sent to WhatsApp!");
  };

  return (
    <div style={{ padding: "50px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Apply Now</h1>
      <p>Fill the form to start your fitness journey.</p>
      <input 
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({...form, name: e.target.value })}
        style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
      />
      <input 
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({...form, email: e.target.value })}
        style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
      />
      <input 
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({...form, phone: e.target.value })}
        style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
      />
      <textarea 
        placeholder="Fitness Goal"
        value={form.goal}
        onChange={(e) => setForm({...form, goal: e.target.value })}
        style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px", height: "100px" }}
      />
      <button onClick={submit} style={{ padding: "10px 20px", background: "black", color: "white", border: "none" }}>
        Submit Application
      </button>
    </div>
  );
}
