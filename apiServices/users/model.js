const bcrypt = require('bcrypt');
const userDao = require('./dao');

module.exports = {

  async createUser(user) {
    const saltRaunds = 10;
    const passwordHash = await bcrypt.hash(user.password, saltRaunds);
    return userDao.createUser({
      name: user.name,
      email: user.email,
      password: passwordHash,
    });
  },

};
