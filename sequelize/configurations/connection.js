const Sequelize = require("sequelize");

const db = {
  name: 'crm',
  user: 'root',
  password: 'root',
  port: 3306,
  host: 'localhost',
  dialect: 'mysql',
}

const sequelize = new Sequelize(db.name, db.user, db.password, {
  host: db.host,
  port: db.port,
  dialect: db.dialect,
});

const database = {};
database.sequelize = sequelize;

// models
database.customers = require("../models/customer.model")(sequelize, Sequelize.DataTypes);

module.exports = database;