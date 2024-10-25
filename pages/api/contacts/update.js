import Contact from '../../../models/contact';
import db from '../../../utils/db';
import Joi from 'joi';

// Define schema validation using Joi
const updateContactSchema = Joi.object({
  name: Joi.string().min(3),
  email: Joi.string().email(),
  phone: Joi.string().min(10),
  address: Joi.string(),
  timezone: Joi.string(),
});

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Connect to the database
    await db.connect();

    const { id } = req.query; // Get the contact ID from the query parameters
    const { error, value } = updateContactSchema.validate(req.body);

    // Validation for the request body
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Find the contact by ID
    const contact = await Contact.findByPk(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    // Update contact details with the provided fields
    await contact.update({
      ...value,
      updatedAt: new Date().toISOString(),
    });

    return res.status(200).json({ message: 'Contact updated successfully', contact });
  } catch (error) {
    console.error('Error updating contact:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
