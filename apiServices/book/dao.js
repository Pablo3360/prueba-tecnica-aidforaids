const { Book, Distributor, Compra } = require('../../services/sequelize/db.js');

const getBooks = async ({limit, offset}) => {
    const books = await Book.findAll({ limit, offset });
    return books;
};

const createBook = async (newBook) => {
  const book = await Book.create(newBook);
  return book;
};

const updateBook = async (bookId, fieldsUpdate) => {
  const book = await Book.findByPk(bookId);
  if(book){
    await book.update(fieldsUpdate);
    await book.save();
    return book;
  } else {
    throw new Error('No se ha encontrado el bookId');
  }
};

const createDistributor = async (newDistributor) => {
  const distributor = await Distributor.create(newDistributor);
  return distributor;
};

const findDistributor = async ( distributorId ) => {
  return await Distributor.findByPk(distributorId);
};

const registerCompra = async ( records ) => {
  const result = await Compra.bulkCreate(records);
  console.log(result);
  return result;
 
};

module.exports = {
  getBooks, 
  createBook, 
  updateBook, 
  createDistributor, 
  findDistributor, 
  registerCompra, 
};
