"use strict";

var mysql = require('mysql');
require('dotenv').config();
var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE
});
connection.connect(function (err) {
  if (err) {
    console.error('Kết nối csdl không thành công!', err);
  } else {
    console.log('Kết nối csdl thành công!');
  }
});
module.exports = connection;