import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../../utils/db';
import User from '../../models/user';

export default async function register(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const hashedPassword = await hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(201).json({ message: 'User registered. Please verify email.', token });
}
