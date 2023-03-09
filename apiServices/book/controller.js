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


};
