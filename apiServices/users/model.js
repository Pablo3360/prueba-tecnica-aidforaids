const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userDao = require('./dao');

module.exports = {

  async createUser(user) {
    const saltRaunds = 10;
    const passwordHash = await bcrypt.hash(user.password, saltRaunds);
    return userDao.createUser({
      name: user.name,
      email: user.email,
      password: passwordHash,
    });
  },

  async loginUser({email, password}) {
    const userFound = await userDao.userByEmail(email);
    const passwordCorrect = userFound === null ? false : await bcrypt.compare(password, userFound.password);
    if(!passwordCorrect){
      throw new Error('Mail o Constraseña incorrectos');
    }

    const userForToken = {
      id: userFound.id,
      email: userFound.mail,
    };

    const token = jwt.sign(userForToken, process.env.SECRETJWT, { expiresIn: 60 * 60 * 4 });

    return ({
      id: userFound.id,
      name: userFound.name,
      email: userFound.email,
      token: token,
    });
  },

};
