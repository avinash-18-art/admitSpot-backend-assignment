import db from '../../../utils/db';
import Contact from '../../../models/contact';
import Joi from 'joi';

// Define schema validation using Joi
const contactSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).required(),
  address: Joi.string().required(),
  timezone: Joi.string().required(),
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate incoming data
    const { error, value } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Extract fields from validated data
    const { name, email, phone, address, timezone } = value;

    // Ensure email is unique in the database
    const existingContact = await Contact.findOne({ where: { email } });
    if (existingContact) {
      return res.status(409).json({ message: 'Contact with this email already exists' });
    }

    // Create the contact
    const contact = await Contact.create({
      name,
      email,
      phone,
      address,
      timezone,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return res.status(201).json({ message: 'Contact created successfully', contact });
  } catch (error) {
    console.error('Error creating contact:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
