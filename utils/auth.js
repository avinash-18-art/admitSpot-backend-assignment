import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Ensure to set a strong secret in your environment variables

// Function to hash passwords
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Function to verify passwords
export const verifyPassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

// Function to generate JWT tokens
export const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: '1h', // Token expiration time
  });
};

// Function to register a new user
export const registerUser = async (email, password, name) => {
  const hashedPassword = await hashPassword(password);
  const newUser = await User.create({ email, password: hashedPassword, name });
  return newUser;
};

// Function to login a user
export const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || !(await verifyPassword(password, user.password))) {
    throw new Error('Invalid email or password');
  }
  return user;
};

// Function to send email verification code (implement email sending logic here)
export const sendVerificationEmail = (user) => {
  // Generate a verification code and send an email
  // Example: user.verificationCode = generateVerificationCode();
  // Send email logic (use nodemailer or any other email service)
};

// Function to verify user email
export const verifyUserEmail = async (userId, verificationCode) => {
  const user = await User.findByPk(userId);
  if (user.verificationCode !== verificationCode) {
    throw new Error('Invalid verification code');
  }
  user.isVerified = true;
  user.verificationCode = null; // Clear verification code after successful verification
  await user.save();
};

// Function to reset password (implement logic to send a one-time code)
export const resetPassword = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('User not found');
  // Generate a one-time reset code and send it via email
};

// Function to change password
export const changePassword = async (userId, newPassword) => {
  const user = await User.findByPk(userId);
  user.password = await hashPassword(newPassword);
  await user.save();
};

export default {
  registerUser,
  loginUser,
  sendVerificationEmail,
  verifyUserEmail,
  resetPassword,
  changePassword,
  generateToken,
};
