const { User } = require('../../services/sequelize/db.js');

const createUser = async (user) => {
    const newUser = await User.create(user);
    return newUser;
};

module.exports = {
  createUser, 
};
