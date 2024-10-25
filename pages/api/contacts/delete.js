import Contact from '../../../models/contact';
import db from '../../../utils/db';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Connect to the database
    await db.connect();

    const { id } = req.query; // Get the contact ID from the query parameters

    // Find the contact by ID
    const contact = await Contact.findByPk(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    // Soft delete: set a "deletedAt" timestamp instead of deleting the record
    await contact.update({
      deletedAt: new Date().toISOString(),
    });

    return res.status(200).json({ message: 'Contact soft-deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
