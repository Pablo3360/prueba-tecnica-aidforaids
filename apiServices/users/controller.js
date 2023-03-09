const userModel = require('./model');
const userDto = require('./dto');

module.exports = {

  async createUser(req, res) {
    if (!req.body.name) return res.status(400).send('Falta indicar name');
    if (!req.body.email) return res.status(400).send('Falta indicar email');
    if (!req.body.password) return res.status(400).send('Falta indicar password');

    try {
      const user = await userModel.createUser({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
  
      return res.send(userDto.single(user, req.user));
      
    } catch (error) {
      return res.status(400).send(error.message);
    }
  },

  async loginUser(req, res) {
    if (!req.body.email) return res.status(400).send('Faltan Datos para LogIn');
    if (!req.body.password) return res.status(400).send('Faltan Datos para LogIn');

    try {
      const user = await userModel.loginUser({
        email: req.body.email,
        password: req.body.password,
      });
  
      return res.send(userDto.single(user));
      
    } catch (error) {
      console.log(error);
      return res.status(400).send(error.message);
    }
  },

  async perfilUser(req, res) {
    if(isNaN(parseInt(req.params.id, 10))) return res.status(400).send('userId invalido');
    try {
      const user = await userModel.perfilUser({
        userId: req.params.id,
        image: req.file || null,
        direccion: req.body.direccion || null,
      });

      return res.send(userDto.single(user));
      
    } catch (error) {
      console.log(error);
      return res.status(400).send(error.message);
    }
  },

};
