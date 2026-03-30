// Mock model for Application
class Application {
  constructor(name, email, goal, phone) {
    this.name = name;
    this.email = email;
    this.goal = goal;
    this.phone = phone;
  }

  // In a real app, this would save to DB
  save() {
    console.log('Saving application:', this);
  }
}

module.exports = Application;