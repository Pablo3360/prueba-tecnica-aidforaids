const bookModel = require('./model');
const bookDto = require('./dto');

module.exports = {

  async books(req, res) {
    let { page, limit } = req.query;
    if (!page) page = 1;
    if (!limit) limit = 5;
    page = parseInt(page);
    limit = parseInt(limit);

    try {
      const books = await bookModel.getBooks(page, limit);
      return res.send(bookDto.multiple(books, req.user));
    } catch (error) {
      return res.status(400).send(error.message);
    }
  },

  async createBook(req, res) {
    if(!(req.body.isbn && req.body.title && req.body.price && req.body.autor && req.body.editorial && req.body.quantity)){
      return res.status(400).send('Faltan datos');
    };
    try {
      const book = await bookModel.createBook({
        isbn: req.body.isbn,
        title: req.body.title,
        price: req.body.price,
        autor: req.body.autor,
        editorial: req.body.editorial,
        stock: req.body.quantity,
      });
      return res.send(bookDto.single(book, req.user));
    } catch (error) {
      return res.status(400).send(error.message);
    }
  },


};
