const { Book, Distributor } = require('../../services/sequelize/db.js');

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

module.exports = {
  getBooks, 
  createBook, 
  updateBook, 
  createDistributor, 
};
