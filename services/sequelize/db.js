const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const { PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE} = process.env;

const sequelize = new Sequelize(`postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`,
  {
    logging: false,
    native: false,
  }
);

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
const basename = path.basename(__filename);
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Distributor, Book, Compra, Cart, Sale } = sequelize.models;

Distributor.hasMany(Compra);
Compra.belongsTo(Distributor);

Book.hasMany(Compra);
Compra.belongsTo(Book);

User.hasMany(Cart);
Cart.belongsTo(User);

Book.hasMany(Cart);
Cart.belongsTo(Book);

User.hasMany(Sale);
Sale.belongsTo(User);

Book.hasMany(Sale);
Sale.belongsTo(Book);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};