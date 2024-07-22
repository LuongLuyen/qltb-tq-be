"use strict";

var express = require("express");
var app = express();
var path = require("path");
var cors = require('cors');
var PORT = process.env.PORT || 8080;
var routerApi = require("./Router/routeApi");
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(cors());
app.use('/public', express["static"](path.join(__dirname, '/public')));
app.use('/api', routerApi);
app.get('/', function (req, res) {
  return res.json({
    server: true
  });
});
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});