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

  async updateStock(bookId, fieldsUpdate) {
    return bookDao.updateBook(bookId, fieldsUpdate);
  },

  async createDistributor(newDistributor) {
    return bookDao.createDistributor(newDistributor);
  },

  async registerCompra(distributorId, books) {
    const distributor = bookDao.findDistributor(distributorId);
    if(!distributor) throw new Error('No se ha encontrado el distribuidor');

    const compras = books.map( book => ({ ...book, distributorId: parseInt(distributorId, 10)}) )
    return bookDao.registerCompra( compras );

  },


};
