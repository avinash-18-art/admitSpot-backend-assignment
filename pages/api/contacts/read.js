import Contact from '../../../models/contact';
import db from '../../../utils/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Connect to the database
    await db.connect();

    // Extract query parameters for filtering and sorting
    const { name, email, timezone, sortField = 'createdAt', sortOrder = 'DESC' } = req.query;

    // Build where condition for filtering
    const filters = {};
    if (name) filters.name = name;
    if (email) filters.email = email;
    if (timezone) filters.timezone = timezone;

    // Fetch contacts with filters and sorting options
    const contacts = await Contact.findAll({
      where: filters,
      order: [[sortField, sortOrder]],
    });

    return res.status(200).json({ contacts });
  } catch (error) {
    console.error('Error retrieving contacts:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
