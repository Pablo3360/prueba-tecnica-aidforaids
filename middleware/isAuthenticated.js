const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authorization = req.get('authorization');
  let token = '';
  if( authorization && authorization.toLowerCase().startsWith('bearer')){
    token = authorization.substring(7);
  };

  try {
    const decodedToken = jwt.verify( token, process.env.SECRETJWT );
    const { id, email } = decodedToken;
    req.id = id;
    req.email = email;
  } catch (error) {
    console.log(error);
    return res.status(401).send({message: 'Token Invalido'});
  }

  next();
}
