import { Sequelize } from 'sequelize';

// Create a new instance of Sequelize for your SQL database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres', // Change this to 'mysql' or 'sqlite' if using a different database
  logging: false, // Disable logging; set to console.log to see SQL queries
});

// Function to connect to the database
export const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error; // Rethrow the error to handle it later
  }
};

// Function to disconnect from the database
export const disconnect = async () => {
  try {
    await sequelize.close();
    console.log('Database connection closed.');
  } catch (error) {
    console.error('Error while closing the database connection:', error);
    throw error; // Rethrow the error to handle it later
  }
};

// Export the Sequelize instance
export default sequelize;
