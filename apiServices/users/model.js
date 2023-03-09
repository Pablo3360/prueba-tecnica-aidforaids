const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;
let streamifier = require('streamifier');
const userDao = require('./dao');

// Configuration 
cloudinary.config({
  cloud_name: process.env.CLAUDINARY_CLOUD_NAME,
  api_key: process.env.CLAUDINARY_API_KEY,
  api_secret: process.env.CLAUDINARY_API_SECRET,
});

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

  async perfilUser({userId, image, direccion}) {

    let uploadFromBuffer = (image) => {
      return new Promise((resolve, reject) => {
        let cld_upload_stream = cloudinary.uploader.upload_stream(
         {
           folder: "perfilUsers"
         },
         (error, result) => {
           if (result) resolve(result);
           else reject(error);
          }
        );
        streamifier.createReadStream(image.buffer).pipe(cld_upload_stream);
      });
    };

    let fieldsUpdate = {};
    if(image){
      let result = await uploadFromBuffer(image);
      fieldsUpdate.perfilImageUrl = result.secure_url;
    };
    if(direccion){
      fieldsUpdate.direccion = direccion;
    };

    return userDao.perfilUser(userId, fieldsUpdate);
  },

};
