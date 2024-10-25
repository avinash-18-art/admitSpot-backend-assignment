import Joi from 'joi';

// User registration validation schema
const userRegistrationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// User login validation schema
const userLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// Contact creation validation schema
const contactCreationSchema = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().optional(), // Optional field
  address: Joi.string().optional(), // Optional field
  timezone: Joi.string().optional(), // Optional field
});

// Middleware function to validate user input based on schema
export const validateUserRegistration = (req, res, next) => {
  const { error } = userRegistrationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export const validateUserLogin = (req, res, next) => {
  const { error } = userLoginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export const validateContactCreation = (req, res, next) => {
  const { error } = contactCreationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export default {
  validateUserRegistration,
  validateUserLogin,
  validateContactCreation,
};
