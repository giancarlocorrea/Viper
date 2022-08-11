const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
const dbconfig = require("../config/db.config.js");

const db = mysql.createPool({
  host: dbconfig.HOST,
  port: dbconfig.PORT,
  user: dbconfig.USER,
  password: dbconfig.PASSWORD,
  database: dbconfig.DB,
});

module.exports = db;
