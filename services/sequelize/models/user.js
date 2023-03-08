const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  }, {
    hooks: {
			afterCreate: (record) => {
				delete record.dataValues.passwordHash;
			},
			afterUpdate: (record) => {
				delete record.dataValues.passwordHash;
			},
    },
    timestamps: true,
    paranoid: true,
  });
};