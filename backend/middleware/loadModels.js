// Load models to req
const Lead = require('../models/Lead');

module.exports = (req, res, next) => {
  req.Lead = Lead;
  next();
};

