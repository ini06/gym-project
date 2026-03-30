// Simple auth middleware stub
const authMiddleware = (req, res, next) => {
  // In a real app, check JWT or session
  console.log('Auth check passed');
  next();
};

module.exports = authMiddleware;