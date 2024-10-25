import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/user';

export default async function login(req, res) {
  const { email, password } = req.body;
  
  const user = await User.findOne({ where: { email } });
  if (!user || !(await compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.status(200).json({ message: 'Logged in', token });
}
