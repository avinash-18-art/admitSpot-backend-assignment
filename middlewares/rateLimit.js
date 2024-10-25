import rateLimit from 'express-rate-limit';

// Create a rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    message: 'Too many requests from this IP, please try again later.',
  },
});

// Middleware to apply the rate limiter to specific routes
export const applyRateLimit = (req, res, next) => {
  limiter(req, res, next);
};

export default applyRateLimit;
