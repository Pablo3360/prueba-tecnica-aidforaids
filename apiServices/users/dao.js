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

const perfilUser = async (userId, { perfilImageUrl, direccion}) => {
  const user = await User.findByPk(userId);
  if(user){
    await user.update({ perfilImageUrl, direccion});
    await user.save();
    return user;
  } else {
    throw new Error('No se ha encontrado el userId');
  }
};

module.exports = {
  createUser, 
  userByEmail, 
  perfilUser, 
};
