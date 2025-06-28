// Placeholder middleware for authentication
const auth = (req, res, next) => {
  // In real app, verify token, check user role, etc.
  next();
};

module.exports = auth;
