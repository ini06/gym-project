const Booking = require('../models/Booking');

const bookSession = (req, res) => {
  const { date } = req.body;
  const booking = new Booking(date);
  booking.save();
  res.status(200).json({ message: 'Session booked successfully' });
};

module.exports = {
  bookSession
};