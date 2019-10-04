const Sequelize = require('sequelize');
const sequelize = new Sequelize('db', 'vlad', '5', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize.Op = Sequelize.Op;

module.exports = sequelize
