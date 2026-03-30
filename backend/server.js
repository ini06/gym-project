const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic routes
app.get('/', (req, res) => {
  res.json({ message: 'Gym Backend API Running!' });
});

// Routes
app.use('/api', require('./routes/leadRoutes'));

// Lead endpoint (example)
app.post('/api/leads', require('./middleware/loadModels'), async (req, res) => {
  try {
    const Lead = req.Lead;
    const lead = new Lead(req.body);
    await lead.save();
    res.json({ success: true, message: 'Lead saved to DB!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/api/bookings', (req, res) => {
  const { date, name, phone } = req.body;
  console.log('New booking:', { date, name, phone });
  res.json({ success: true, message: 'Booking confirmed!' });
});

// MongoDB (use .env MONGO_URI)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/gym')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Models example
const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  goal: String,
  date: { type: Date, default: Date.now }
});
const Lead = mongoose.model('Lead', LeadSchema);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

