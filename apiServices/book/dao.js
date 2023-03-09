const { Book } = require('../../services/sequelize/db.js');

const getBooks = async ({limit, offset}) => {
    const books = await Book.findAll({ limit, offset });
    return books;
};

module.exports = {
  getBooks, 
};
