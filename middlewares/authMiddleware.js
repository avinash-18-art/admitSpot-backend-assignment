import jwt from 'jsonwebtoken';

// Middleware to protect routes
export const authenticate = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Authorization header
  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied.' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token is not valid.' });
    }
    // Attach user information to the request object for use in the route handler
    req.user = { id: decoded.id, email: decoded.email };
    next(); // Proceed to the next middleware or route handler
  });
};

export default authenticate;
