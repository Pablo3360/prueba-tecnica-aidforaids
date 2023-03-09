const salesModel = require('./model');
const salesDto = require('./dto');

module.exports = {

  async addBookCart(req, res) {
    if(isNaN(parseInt(req.body.bookId, 10))) return res.status(400).send('bookId invalido');
    try {
      const result = await salesModel.addBookCart(req.id, req.body.bookId);
      return res.send(salesDto.multiple(result));
    } catch (error) {
      console.log(error);
      return res.status(400).send(error.message);
    }
  },

  async buyBook(req, res) {
    if(isNaN(parseInt(req.body.bookId, 10))) return res.status(400).send('bookId invalido');
    if(isNaN(parseInt(req.body.quantity, 10))) return res.status(400).send('queantity invalido');
    try {
      const result = await salesModel.buyBook(req.id, req.body.bookId, req.body.quantity);
      return res.send(salesDto.single(result));
    } catch (error) {
      console.log(error);
      return res.status(400).send(error.message);
    }
  },

};
