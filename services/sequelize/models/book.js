const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('book', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    isbn: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    price: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false,
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    editorial: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    data: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
};