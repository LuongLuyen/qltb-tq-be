"use strict";

var db = require('../Config/configDB');
var findAll = function findAll(data) {
  return new Promise(function (resolve, reject) {
    var sql = "Select * from ".concat(data.table);
    db.query(sql, function (err, results) {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
var sql = function sql(_sql) {
  return new Promise(function (resolve, reject) {
    db.query(_sql, function (err, results) {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
var findOne = function findOne(data) {
  return new Promise(function (resolve, reject) {
    var sql = "SELECT * FROM ".concat(data.table, " WHERE id = ").concat(data.id);
    db.query(sql, function (err, results) {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
      }
    });
  });
};
var findByIdTb = function findByIdTb(data) {
  return new Promise(function (resolve, reject) {
    var sql = "SELECT * FROM ".concat(data.table, " WHERE deviceId_id = ").concat(data.id);
    db.query(sql, function (err, results) {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
var findUserPass = function findUserPass(data) {
  return new Promise(function (resolve, reject) {
    var sql = "SELECT * FROM ".concat(data.table, " WHERE username = '").concat(data.userName, "' AND password = '").concat(data.password, "'");
    db.query(sql, function (err, results) {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
      }
    });
  });
};
var createLichSu = function createLichSu(data) {
  return new Promise(function (resolve, reject) {
    var sql = "\n\t\tINSERT INTO ".concat(data.table, " (ngay_muon, ngay_tra, lop, giaovien,tiet_muon,deviceId_id,userId_id,so_luong,ngay_dang_ky,da_tra,tiet_tra)\n        VALUES ('").concat(data.item.muon, "', '").concat(data.item.tra, "', '").concat(data.item.lop, "', '").concat(data.item.giaovien, "', '").concat(data.item.tiet, "', '").concat(data.item.deviceId_id, "', '").concat(data.item.userId_id, "', '").concat(data.item.so_luong, "', '").concat(data.item.ngay_dang_ky, "','").concat(data.item.da_tra, "','").concat(data.item.tiet_tra, "');\n\n\t\t");
    db.query(sql, function (err, results) {
      if (err) {
        reject(err);
      } else {
        resolve("OK");
      }
    });
  });
};
var traThietBiPhong = function traThietBiPhong(data) {
  return new Promise(function (resolve, reject) {
    var sql = "\n\t\tUPDATE ".concat(data.table, "\n\t\tSET da_tra = 'T'\n\t\tWHERE id = ").concat(data.id, ";\n\t\t");
    db.query(sql, function (err, results) {
      if (err) {
        reject(err);
      } else {
        resolve("Ok");
      }
    });
  });
};
var capNhatThietBiSl = function capNhatThietBiSl(data) {
  return new Promise(function (resolve, reject) {
    var sql = "\n\t\tUPDATE ".concat(data.table, "\n\t\tSET quantity = '").concat(data.quantity, "'\n\t\tWHERE id = ").concat(data.id, ";\n\t\t");
    db.query(sql, function (err, results) {
      if (err) {
        reject(err);
      } else {
        resolve("Ok");
      }
    });
  });
};
var xoa = function xoa(data) {
  return new Promise(function (resolve, reject) {
    var sql = "\n\t\tDELETE FROM  ".concat(data.table, "\n\t\tWHERE id = ").concat(data.id, ";\n\t\t");
    db.query(sql, function (err, results) {
      if (err) {
        reject(err);
      } else {
        resolve("Ok");
      }
    });
  });
};
module.exports = {
  findAll: findAll,
  findOne: findOne,
  findUserPass: findUserPass,
  sql: sql,
  createLichSu: createLichSu,
  traThietBiPhong: traThietBiPhong,
  capNhatThietBiSl: capNhatThietBiSl,
  findByIdTb: findByIdTb,
  xoa: xoa
};