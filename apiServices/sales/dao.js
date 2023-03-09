const { Book, Distributor, Compra, Cart } = require('../../services/sequelize/db.js');

const addCart = async ( userId, bookId ) => {
  await Cart.create({userId, bookId});
  const result = await Cart.findAll({ where: { userId }});
  return result;
};

module.exports = {
  addCart, 
};
