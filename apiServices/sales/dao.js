const { Book, Distributor, Compra, Cart, Sale } = require('../../services/sequelize/db.js');

const addCart = async ( userId, bookId ) => {
  await Cart.create({userId, bookId});
  const result = await Cart.findAll({ where: { userId }});
  return result;
};

const sales = async ( userId, bookId, quantity ) => {
  const sale = await Sale.create({userId, bookId, quantity});
  return sale;
};

const getBook = async ( bookId ) => {
  const book = await Book.findByPk( bookId );
  return book;
};

module.exports = {
  addCart, 
  sales, 
  getBook, 
};
