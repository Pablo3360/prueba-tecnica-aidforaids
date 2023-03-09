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
      allowNull: false,
      references: {
        model: 'books',
        key: 'id'
      }
    },
    distributorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'distributors',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
};