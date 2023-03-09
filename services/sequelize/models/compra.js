const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('compra', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'books',
        key: 'id'
      }
    },
    distributorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'distributors',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
};