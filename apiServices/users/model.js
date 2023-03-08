const userDao = require('./dao');

module.exports = {

  async createUser(user) {
    return userDao.createUser(user);
  },

};
