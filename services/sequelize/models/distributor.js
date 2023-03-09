const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('distributor', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
};