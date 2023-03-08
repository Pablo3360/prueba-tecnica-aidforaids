const { User } = require('../../services/sequelize/db.js');

const createUser = async (user) => {
    const newUser = await User.create(user);
    return newUser;
};

const userByEmail = async (email) => {
  const user = await User.findOne({
    where: {
      email
    }
  });
  return user;
};

module.exports = {
  createUser, 
  userByEmail, 
};
