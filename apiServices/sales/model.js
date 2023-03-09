const salesDao = require('./dao');
const { updateBook } = require('../book/dao');

module.exports = {

  async addBookCart(userId, bookId) {
    return salesDao.addCart( userId, bookId );
  },

  async buyBook(userId, bookId, quantity) {

    const book = await salesDao.getBook(bookId);
    if( book.stock < quantity ) throw new Error('Stock insuficiente');
    const updateStock = book.stock - quantity;

    await updateBook( bookId, {stock: updateStock} );

    const sale = salesDao.sales( userId, bookId, quantity );

    return sale;
  },

};
