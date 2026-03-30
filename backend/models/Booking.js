// Mock model for Booking
class Booking {
  constructor(date) {
    this.date = date;
  }

  save() {
    console.log('Saving booking:', this);
  }
}

module.exports = Booking;