const { Book } = require('../../services/sequelize/db.js');

const getBooks = async ({limit, offset}) => {
    const books = await Book.findAll({ limit, offset });
    return books;
};

const createBook = async (newBook) => {
  const book = await Book.create(newBook);
  return book;
};

module.exports = {
  getBooks, 
  createBook, 
};
