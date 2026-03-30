const Application = require('../models/Application');

const submitApplication = (req, res) => {
  const { name, email, goal, phone } = req.body;
  const application = new Application(name, email, goal, phone);
  application.save();
  res.status(200).json({ message: 'Application submitted successfully' });
};

module.exports = {
  submitApplication
};