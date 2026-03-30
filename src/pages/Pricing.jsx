export default function Pricing() {
  return (
    <div style={{ padding: "50px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Pricing Plans</h1>
      <p>Choose the perfect plan for your fitness goals.</p>
      {/* Mock plans */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ border: "1px solid #ccc", padding: "20px", flex: 1 }}>
          <h2>Basic</h2>
          <p>$29/month</p>
          <ul>
            <li>Weekly sessions</li>
            <li>Nutrition advice</li>
          </ul>
        </div>
        <div style={{ border: "1px solid #ccc", padding: "20px", flex: 1 }}>
          <h2>Pro</h2>
          <p>$59/month</p>
          <ul>
            <li>Daily training</li>
            <li>Custom diet</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
