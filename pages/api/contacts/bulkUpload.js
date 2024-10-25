import formidable from 'formidable';
import fs from 'fs';
import csv from 'csv-parser';
import exceljs from 'exceljs';
import Contact from '../../../models/contact';
import db from '../../../utils/db';

// Enable formidable to parse incoming form data
export const config = {
  api: {
    bodyParser: false,
  },
};

async function parseCSV(filePath) {
  const results = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        fs.unlinkSync(filePath); // Remove file after processing
        resolve(results);
      })
      .on('error', (error) => reject(error));
  });
}

async function parseExcel(filePath) {
  const results = [];
  const workbook = new exceljs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.worksheets[0];

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber !== 1) { // Skip header row
      const contact = {
        name: row.getCell(1).value,
        email: row.getCell(2).value,
        phone: row.getCell(3).value,
        address: row.getCell(4).value,
        timezone: row.getCell(5).value,
      };
      results.push(contact);
    }
  });

  fs.unlinkSync(filePath); // Remove file after processing
  return results;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Connect to the database
    await db.connect();

    // Use formidable to parse the uploaded file
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ message: 'Error parsing file' });
      }

      const file = files.file[0]; // Get the uploaded file
      const fileExtension = file.originalFilename.split('.').pop().toLowerCase();

      let contacts;
      if (fileExtension === 'csv') {
        contacts = await parseCSV(file.filepath);
      } else if (fileExtension === 'xlsx' || fileExtension === 'xls') {
        contacts = await parseExcel(file.filepath);
      } else {
        return res.status(400).json({ message: 'Invalid file format' });
      }

      // Validate and insert contacts
      const createdContacts = [];
      for (const contactData of contacts) {
        const { name, email, phone, address, timezone } = contactData;

        // Simple validation for each contact
        if (!name || !email || !phone || !address || !timezone) {
          return res.status(400).json({ message: 'All fields are required' });
        }

        // Check for existing contacts with the same email
        const existingContact = await Contact.findOne({ where: { email } });
        if (!existingContact) {
          const newContact = await Contact.create({
            name,
            email,
            phone,
            address,
            timezone,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          });
          createdContacts.push(newContact);
        }
      }

      return res.status(201).json({ message: 'Contacts uploaded successfully', contacts: createdContacts });
    });
  } catch (error) {
    console.error('Error uploading contacts:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
