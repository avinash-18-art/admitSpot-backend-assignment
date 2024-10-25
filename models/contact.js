import { DataTypes } from 'sequelize';
import db from '../utils/db';
import User from './user'; // Import the User model for relationship

const Contact = db.define('Contact', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User, // Reference to the User model
      key: 'id',
    },
    onDelete: 'CASCADE', // Delete contacts if the user is deleted
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [1, 100],
        msg: 'Name must be between 1 and 100 characters long',
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  timezone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
  paranoid: true, // Enable soft delete
});

// Establish the relationship with the User model
User.hasMany(Contact, { foreignKey: 'userId' });
Contact.belongsTo(User, { foreignKey: 'userId' });

export default Contact;
