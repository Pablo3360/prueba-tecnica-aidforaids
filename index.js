require('dotenv').config();
const server = require('./app.js');
const { conn } = require('./services/sequelize/db.js');
const PORT = process.env.PORT;

conn.sync({force: false})
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Listening at ${PORT}`);
    })})
  .catch( err => console.log(err.message));