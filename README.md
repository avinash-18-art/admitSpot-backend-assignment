# Contact Management System API

## Overview

This is a RESTful API for a Contact Management System built with Next.js, featuring user authentication, contact management, data validation, date-time handling with timezones, file handling, and CSV/Excel parsing.

## Features

- User registration and login with JWT authentication
- Email verification upon registration
- Password reset functionality
- Manage contacts (add, retrieve, update, delete)
- Advanced filtering and sorting of contacts
- Bulk upload of contacts via CSV/Excel
- Download contact lists in CSV/Excel format
- Comprehensive data validation
- Rate limiting to prevent abuse

## Technologies Used

- **Backend**: Next.js with Express
- **Database**: PostgreSQL (or your choice of SQL database)
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Joi
- **File Handling**: Multer for file uploads
- **Date Handling**: Moment.js (or native Date API)
- **Rate Limiting**: express-rate-limit

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- PostgreSQL (or your choice of SQL database)
- An email service for sending verification emails (optional)

### Installation

1. Clone the repository:

   ```bash
   https://github.com/avinash-18-art/admitSpotJunior-Backend-Assignment.git
   cd contact-management-system

## project structure :
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


2. Install dependencies:

npm install

3. Set up environment variables:

Create a .env file in the root directory and add the following:

plaintext

DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=your_email_service (if using email verification)

4. Set up the database:

Run migrations to create the necessary tables in your database.
Ensure the database schema follows the provided structure.
Running the Application
Start the development server:


npm run dev
The API will be available at http://localhost:3000/api.

Database Schema

6. API Documentation
You can test the API endpoints using tools like Postman or Swagger. Below are some key endpoints:

User Authentication
POST /api/auth/register

Register a new user.
Request Body: { "email": "user@example.com", "password": "yourpassword" }

POST /api/auth/login
Login a user and return a JWT.
Request Body: { "email": "user@example.com", "password": "yourpassword" }

POST /api/auth/reset-password
Request a password reset code.

Contact Management
POST /api/contacts/create

Add a new contact.
Request Body: { "name": "John Doe", "email": "john@example.com", "phone": "1234567890", "address": "123 Main St", "timezone": "UTC" }
GET /api/contacts/read

Retrieve all contacts with filtering and sorting options.
PUT /api/contacts/update/

Update contact details by ID.
DELETE /api/contacts/delete/


Soft delete a contact by ID.

POST /api/contacts/bulk-upload

Upload a CSV or Excel file for bulk contact creation.

Rate Limiting

7. Rate limiting is applied to sensitive endpoints like login and registration to prevent abuse.

Deployment
Heroku
Create a new Heroku application.
Set up environment variables in the Heroku dashboard.
Deploy the application using Git or Heroku CLI.
Vercel
Connect your GitHub repository to Vercel.
Set up environment variables in the Vercel dashboard.
Vercel will automatically deploy your application on push.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.



### Summary of Sections

- **Overview**: Brief description of the project and its features.
- **Technologies Used**: Technologies and libraries used in the project.
- **Setup Instructions**: Steps for installing and running the project locally.
- **Database Schema**: Placeholder for an ER diagram showing your database structure.
- **API Documentation**: Key endpoints for user authentication and contact management.
- **Deployment**: Instructions for deploying the application on platforms like Heroku or Vercel.
- **Contributing**: Encouragement for others to contribute to the project.
- **License**: Information about the project license.

### Next Steps

1. **Update the ER Diagram**: Replace the placeholder with the actual path to your ER diagram.
2. **API Documentation**: You might want to expand the API documentation section with more details, especially if there are other endpoints.
3. **Customization**: Feel free to modify the README to better match your project specifics, such as changing technologies or adding additional features.











# Contact Management System API

## Overview

This is a RESTful API for a Contact Management System built with Next.js, featuring user authentication, contact management, data validation, date-time handling with timezones, file handling, and CSV/Excel parsing.

## Features

- User registration and login with JWT authentication
- Email verification upon registration
- Password reset functionality
- Manage contacts (add, retrieve, update, delete)
- Advanced filtering and sorting of contacts
- Bulk upload of contacts via CSV/Excel
- Download contact lists in CSV/Excel format
- Comprehensive data validation
- Rate limiting to prevent abuse

## Technologies Used

- **Backend**: Next.js with Express
- **Database**: PostgreSQL (or your choice of SQL database)
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Joi
- **File Handling**: Multer for file uploads
- **Date Handling**: Moment.js (or native Date API)
- **Rate Limiting**: express-rate-limit

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- PostgreSQL (or your choice of SQL database)
- An email service for sending verification emails (optional)

### Installation

1. Clone the repository:

   ```bash
   https://github.com/avinash-18-art/admitSpotJunior-Backend-Assignment.git
   cd contact-management-system

## project structure :
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


2. Install dependencies:

npm install

3. Set up environment variables:

Create a .env file in the root directory and add the following:

plaintext

DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=your_email_service (if using email verification)

4. Set up the database:

Run migrations to create the necessary tables in your database.
Ensure the database schema follows the provided structure.
Running the Application
Start the development server:


npm run dev
The API will be available at http://localhost:3000/api.

Database Schema

6. API Documentation
You can test the API endpoints using tools like Postman or Swagger. Below are some key endpoints:

User Authentication
POST /api/auth/register

Register a new user.
Request Body: { "email": "user@example.com", "password": "yourpassword" }

POST /api/auth/login
Login a user and return a JWT.
Request Body: { "email": "user@example.com", "password": "yourpassword" }

POST /api/auth/reset-password
Request a password reset code.

Contact Management
POST /api/contacts/create

Add a new contact.
Request Body: { "name": "John Doe", "email": "john@example.com", "phone": "1234567890", "address": "123 Main St", "timezone": "UTC" }
GET /api/contacts/read

Retrieve all contacts with filtering and sorting options.
PUT /api/contacts/update/

Update contact details by ID.
DELETE /api/contacts/delete/


Soft delete a contact by ID.

POST /api/contacts/bulk-upload

Upload a CSV or Excel file for bulk contact creation.

Rate Limiting

7. Rate limiting is applied to sensitive endpoints like login and registration to prevent abuse.

Deployment
Heroku
Create a new Heroku application.
Set up environment variables in the Heroku dashboard.
Deploy the application using Git or Heroku CLI.
Vercel
Connect your GitHub repository to Vercel.
Set up environment variables in the Vercel dashboard.
Vercel will automatically deploy your application on push.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.



### Summary of Sections

- **Overview**: Brief description of the project and its features.
- **Technologies Used**: Technologies and libraries used in the project.
- **Setup Instructions**: Steps for installing and running the project locally.
- **Database Schema**: Placeholder for an ER diagram showing your database structure.
- **API Documentation**: Key endpoints for user authentication and contact management.
- **Deployment**: Instructions for deploying the application on platforms like Heroku or Vercel.
- **Contributing**: Encouragement for others to contribute to the project.
- **License**: Information about the project license.














"# admitSpot-backend-assignment" 
