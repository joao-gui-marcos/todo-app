require('dotenv').config();

const config = {
  username: "root",
  password: "password",
  database: "toDoListApp",
  host: "localhost",
  port: 3306,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};