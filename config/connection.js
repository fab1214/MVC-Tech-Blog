const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize
//create connection to our database , pass in your MySQL information for username and password as parameters
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });
  }

module.exports = sequelize;