# Contact Management System

This project is a simple contact management system built using HTML, CSS, and JavaScript. It allows users to manage their contacts directly in the browser using local storage.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Database Schema](#database-schema)
- [API Documentation](#api-documentation)
- [Database Setup](#database-setup)
- [Additional Information](#additional-information)

## Features
- Add, view, update, and delete contacts.
- Contacts are stored in the browser's local storage.
- User-friendly interface for managing contacts.

## Technologies Used
- HTML
- CSS
- JavaScript
- Local Storage (for data persistence)

## Setup Instructions
1. **Clone the Repository**
   ```bash
   https://github.com/avinash-18-art/admitSpot-backend-assignment.git
   cd contact-management-system

2. File Structure Your directory should look like this: 
├── pages
│   ├── api
│   │   ├── auth
│   │   │   ├── register.js
│   │   │   └── login.js
│   │   ├── contacts
│   │   │   ├── create.js
│   │   │   ├── read.js
│   │   │   ├── update.js
│   │   │   ├── delete.js
│   │   │   └── bulkUpload.js
├── models
│   ├── user.js
│   └── contact.js
├── utils
│   ├── auth.js
│   └── db.js
└── middlewares
    ├── authMiddleware.js
    ├── rateLimit.js
    └── validate.js 

## Database Schema
This project uses local storage for data management. Below is a representation of the data structure. 
+--------------+     +--------------+
|    Contact   |     |    User      |
+--------------+     +--------------+
| id           |     | id           |
| name         |     | email        |
| email        |     | password     |
| phone        |     | verified     |
| address      |     +--------------+
| isDeleted    |
| createdAt    |
| updatedAt    |
+--------------+
# API Documentation
This project does not include a backend server or RESTful API since it operates entirely on the client side using local storage.

However, if you were to extend this project with a backend, you might consider using a RESTful API with the following endpoints:

* POST /api/contacts - Add a new contact.
* GET /api/contacts - Retrieve all contacts.
* GET /api/contacts/
- Retrieve a specific contact.
* PUT /api/contacts/
 - Update a contact.
* DELETE /api/contacts/
- Delete a contact. 

# Example Requests :
* Add Contact :
POST /api/contacts
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123-456-7890",
  "address": "123 Main St"
}

* Get Contacts:
GET /api/contacts

# Database Setup
This project does not use a traditional database, as it relies on local storage to manage contacts.

If you wish to set up a backend database, consider the following:

* Use a SQL database like PostgreSQL or MySQL.
* Create tables for users and contacts as shown in the ER diagram.
* Implement migrations using a tool like Prisma or Sequelize.

# Additional Information
* Local Storage Limitations: Local storage is limited to 5-10MB, which may not be suitable for larger applications.
* Security: Since this is a front-end application, sensitive data (like passwords) should not be stored in local storage in a real application.
* Deployment: This project can be hosted on platforms like GitHub Pages, Vercel, or Netlify.


### Summary of Sections

- **Features**: Lists the key functionalities of the project.
- **Technologies Used**: Outlines the technologies employed in the project.
- **Setup Instructions**: Provides a step-by-step guide on how to clone the repository and set up the project locally.
- **Running the Application**: Explains how to open and use the application.
- **Database Schema**: Includes an ER diagram representation.
- **API Documentation**: Offers an outline of potential API endpoints, should you choose to implement a backend in the future.
- **Database Setup**: Discusses the absence of a traditional database and mentions how to implement one if needed.
- **Additional Information**: Shares insights on limitations and potential deployment strategies.


"# admitSpot-backend-assignment" 
