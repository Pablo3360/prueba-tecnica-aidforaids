const bookDao = require('./dao');

module.exports = {

  async getBooks(page, limit) {
    let skip = (page - 1 ) * limit;
    return bookDao.getBooks({
      limit: limit,
      offset: skip,
    });
  },

  async createBook(newBook) {
    return bookDao.createBook(newBook);
  },


};
