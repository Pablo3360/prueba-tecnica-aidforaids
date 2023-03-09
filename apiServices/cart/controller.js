const cartModel = require('./model');
const cartDto = require('./dto');

module.exports = {

  async addBookCart(req, res) {
    if(isNaN(parseInt(req.body.bookId, 10))) return res.status(400).send('bookId invalido');
    try {
      const result = await cartModel.addBookCart(req.id, req.body.bookId);
      return res.send(cartDto.multiple(result));
    } catch (error) {
      console.log(error);
      return res.status(400).send(error.message);
    }
  },

};
