const cartDao = require('./dao');

module.exports = {

  async addBookCart(userId, bookId) {
    return cartDao.addCart( userId, bookId );
  },

};
