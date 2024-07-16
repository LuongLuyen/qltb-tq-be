"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var Dao = require('../Dao/dao');
require('dotenv').config();
var token = function token(length) {
  var characters = process.env.TOKEN;
  var result = '';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
var findAllUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Dao.findAll({
            table: "".concat(process.env.DATABASE, ".home_user")
          });
        case 3:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function findAllUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var findOneUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Dao.findOne({
            table: "".concat(process.env.DATABASE, ".home_user"),
            id: req.params.id
          });
        case 3:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", _context2.t0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function findOneUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var findOneThietBi = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Dao.findOne({
            table: "".concat(process.env.DATABASE, ".home_device"),
            id: req.params.id
          });
        case 3:
          data = _context3.sent;
          return _context3.abrupt("return", data);
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", _context3.t0);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function findOneThietBi(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var findOneLichSu = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Dao.findOne({
            table: "".concat(process.env.DATABASE, ".home_borrowreturn"),
            id: req.params.id
          });
        case 3:
          data = _context4.sent;
          return _context4.abrupt("return", data);
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", _context4.t0);
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function findOneLichSu(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var findUserPass = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Dao.findUserPass({
            table: "".concat(process.env.DATABASE, ".home_user"),
            userName: req.body.userName,
            password: req.body.password
          });
        case 3:
          data = _context5.sent;
          return _context5.abrupt("return", {
            token: data.id + token(20) + data.role.substring(0, 1)
          });
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", _context5.t0);
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function findUserPass(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var findAllThietBi = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Dao.findAll({
            table: "".concat(process.env.DATABASE, ".home_device")
          });
        case 3:
          data = _context6.sent;
          return _context6.abrupt("return", data);
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", _context6.t0);
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function findAllThietBi(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var findAllThietBiHsd = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Dao.findAll({
            table: "".concat(process.env.DATABASE, ".home_device")
          });
        case 3:
          data = _context7.sent;
          data = data.filter(function (x) {
            return x.unit !== "PHÒNG";
          });
          data = data.filter(function (x) {
            return x.status !== "HẾT HẠN";
          });
          return _context7.abrupt("return", data);
        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", _context7.t0);
        case 12:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 9]]);
  }));
  return function findAllThietBiHsd(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var findAllBoMon = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Dao.findAll({
            table: "".concat(process.env.DATABASE, ".home_device")
          });
        case 3:
          data = _context8.sent;
          data = data.filter(function (x) {
            return x.unit === "PHÒNG";
          });
          return _context8.abrupt("return", data);
        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", _context8.t0);
        case 11:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 8]]);
  }));
  return function findAllBoMon(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var findAllLichSu = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var sql, data;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          sql = "\n            SELECT\n                u.name as nguoidung, \n                d.name as thietbi,\n                d.mon,\n                d.unit as donvi,\n                d.status as trangthai,\n                d.price as gia,\n                l.ngay_dang_ky as ngaydangky,\n                l.ngay_muon as ngaymuon,\n                l.ngay_tra as ngaytra,           \n                l.lop,           \n                l.tiet_muon as tietmuon,       \n                l.tiet_tra as tiettra,       \n                l.so_luong as soluong ,      \n                l.da_tra as datra       \n            FROM \n                ".concat(process.env.DATABASE, ".home_borrowreturn l \n            INNER JOIN \n                ").concat(process.env.DATABASE, ".home_user u \n            ON \n                l.userId_id = u.id \n            INNER JOIN \n                ").concat(process.env.DATABASE, ".home_device d     \n            ON \n                l.deviceId_id = d.id \n        ");
          _context9.next = 4;
          return Dao.sql(sql);
        case 4:
          data = _context9.sent;
          return _context9.abrupt("return", data);
        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          return _context9.abrupt("return", _context9.t0);
        case 11:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 8]]);
  }));
  return function findAllLichSu(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var findLichSuUser = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var sql, data;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          sql = "\n            SELECT\n                u.name as nguoidung, \n                d.name as thietbi,\n                d.mon,\n                d.unit as donvi,\n                d.status as trangthai,\n                d.price as gia,\n                l.ngay_dang_ky as ngaydangky,\n                l.ngay_muon as ngaymuon,\n                l.ngay_tra as ngaytra,           \n                l.lop,           \n                l.tiet_muon as tietmuon,       \n                l.tiet_tra as tiettra,        \n                l.so_luong as soluong,       \n                l.da_tra as datra,\n                l.id,     \n                l.deviceId_id as idThietBi,\n                l.userId_id as idNguoiDung\n            FROM \n                ".concat(process.env.DATABASE, ".home_borrowreturn l \n            INNER JOIN \n                ").concat(process.env.DATABASE, ".home_user u \n            ON \n                l.userId_id = u.id \n            INNER JOIN \n                ").concat(process.env.DATABASE, ".home_device d     \n            ON \n                l.deviceId_id = d.id \n            WHERE l.userId_id =").concat(req.params.id, "\n        ");
          _context10.next = 4;
          return Dao.sql(sql);
        case 4:
          data = _context10.sent;
          return _context10.abrupt("return", data);
        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](0);
          return _context10.abrupt("return", _context10.t0);
        case 11:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 8]]);
  }));
  return function findLichSuUser(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var dangKyThietBiPhong = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return Dao.createLichSu({
            table: "".concat(process.env.DATABASE, ".home_borrowreturn"),
            item: req.body
          });
        case 3:
          data = _context11.sent;
          return _context11.abrupt("return", data);
        case 7:
          _context11.prev = 7;
          _context11.t0 = _context11["catch"](0);
          return _context11.abrupt("return", _context11.t0);
        case 10:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 7]]);
  }));
  return function dangKyThietBiPhong(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var traThietBiPhong = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return Dao.traThietBiPhong({
            table: "".concat(process.env.DATABASE, ".home_borrowreturn"),
            id: req.body.id
          });
        case 3:
          data = _context12.sent;
          return _context12.abrupt("return", data);
        case 7:
          _context12.prev = 7;
          _context12.t0 = _context12["catch"](0);
          return _context12.abrupt("return", _context12.t0);
        case 10:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 7]]);
  }));
  return function traThietBiPhong(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var findLichSuTb = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return Dao.findByIdTb({
            table: "".concat(process.env.DATABASE, ".home_borrowreturn"),
            id: req.params.id
          });
        case 3:
          data = _context13.sent;
          return _context13.abrupt("return", data);
        case 7:
          _context13.prev = 7;
          _context13.t0 = _context13["catch"](0);
          return _context13.abrupt("return", _context13.t0);
        case 10:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 7]]);
  }));
  return function findLichSuTb(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var deleteThietBiPhong = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return Dao.xoa({
            table: "".concat(process.env.DATABASE, ".home_device"),
            id: req.body.id
          });
        case 3:
          data = _context14.sent;
          return _context14.abrupt("return", data);
        case 7:
          _context14.prev = 7;
          _context14.t0 = _context14["catch"](0);
          return _context14.abrupt("return", _context14.t0);
        case 10:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 7]]);
  }));
  return function deleteThietBiPhong(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
var themThietBiPhong = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var data, sql;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          data = req.body;
          sql = "\n    INSERT INTO ".concat(process.env.DATABASE, ".home_device ( name, mon, code, unit, price, quantity, userId_id, hansudung, location, ngaynhap, status) \n    VALUES ('").concat(data.name, "', '").concat(data.mon, "', '").concat(data.code, "', '").concat(data.unit, "', '").concat(data.price, "', '").concat(data.quantity, "', ").concat(data.userId_id, ", '").concat(data.hansudung, "', '").concat(data.location, "', '").concat(data.ngaynhap, "', '").concat(data.status, "');\n    ");
          _context15.prev = 2;
          _context15.next = 5;
          return Dao.sql(sql);
        case 5:
          return _context15.abrupt("return", "OK");
        case 8:
          _context15.prev = 8;
          _context15.t0 = _context15["catch"](2);
          return _context15.abrupt("return", _context15.t0);
        case 11:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[2, 8]]);
  }));
  return function themThietBiPhong(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
var hetHan = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var sql;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          sql = "\n    UPDATE ".concat(process.env.DATABASE, ".home_device\n    SET status = 'H\u1EBET H\u1EA0N'\n    WHERE STR_TO_DATE(hansudung, '%Y-%m-%d') <= '").concat(req.body.today, "';\n    ");
          _context16.prev = 1;
          _context16.next = 4;
          return Dao.sql(sql);
        case 4:
          return _context16.abrupt("return", "OK");
        case 7:
          _context16.prev = 7;
          _context16.t0 = _context16["catch"](1);
          return _context16.abrupt("return", _context16.t0);
        case 10:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[1, 7]]);
  }));
  return function hetHan(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
var capNhatThietBiPhong = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var data, sql;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          data = req.body;
          sql = "\n    UPDATE ".concat(process.env.DATABASE, ".home_device\n    SET \n    name = '").concat(data.name, "',\n    mon = '").concat(data.mon, "',\n    code = '").concat(data.code, "',\n    unit = '").concat(data.unit, "',\n    price = '").concat(data.price, "',\n    quantity = '").concat(data.quantity, "',\n    userId_id = ").concat(data.userId_id, ",\n    hansudung = '").concat(data.hansudung, "',\n    location = '").concat(data.location, "',\n    ngaynhap = '").concat(data.ngaynhap, "',\n    status = '").concat(data.status, "'\n    WHERE id = ").concat(data.id, ";\n\n    ");
          _context17.prev = 2;
          _context17.next = 5;
          return Dao.sql(sql);
        case 5:
          return _context17.abrupt("return", "OK");
        case 8:
          _context17.prev = 8;
          _context17.t0 = _context17["catch"](2);
          return _context17.abrupt("return", _context17.t0);
        case 11:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[2, 8]]);
  }));
  return function capNhatThietBiPhong(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
var capNhatSl = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var thietBi, quantity, data, _data;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Dao.findOne({
            table: "".concat(process.env.DATABASE, ".home_device"),
            id: req.body.id
          });
        case 2:
          thietBi = _context18.sent;
          quantity = 0;
          if (!(req.body.phepTinh === "-")) {
            _context18.next = 10;
            break;
          }
          quantity = Number(thietBi.quantity) - Number(req.body.quantity);
          _context18.next = 8;
          return Dao.capNhatThietBiSl({
            table: "".concat(process.env.DATABASE, ".home_device"),
            quantity: quantity,
            id: req.body.id
          });
        case 8:
          data = _context18.sent;
          return _context18.abrupt("return", data);
        case 10:
          if (!(req.body.phepTinh === "+")) {
            _context18.next = 16;
            break;
          }
          quantity = Number(thietBi.quantity) + Number(req.body.quantity);
          _context18.next = 14;
          return Dao.capNhatThietBiSl({
            table: "".concat(process.env.DATABASE, ".home_device"),
            quantity: quantity,
            id: req.body.id
          });
        case 14:
          _data = _context18.sent;
          return _context18.abrupt("return", _data);
        case 16:
          if (!(req.body.phepTinh === "no")) {
            _context18.next = 18;
            break;
          }
          return _context18.abrupt("return", "OK");
        case 18:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function capNhatSl(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();
var themNguoiDung = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var data, sql;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          data = req.body;
          sql = "\n    INSERT INTO ".concat(process.env.DATABASE, ".home_user (userName, password, name,role)\n    VALUES ('").concat(data.userName, "', '").concat(data.password, "', '").concat(data.name, "','").concat(data.role, "');\n    ");
          _context19.prev = 2;
          _context19.next = 5;
          return Dao.sql(sql);
        case 5:
          return _context19.abrupt("return", "OK");
        case 8:
          _context19.prev = 8;
          _context19.t0 = _context19["catch"](2);
          return _context19.abrupt("return", _context19.t0);
        case 11:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[2, 8]]);
  }));
  return function themNguoiDung(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
var capNhatNguoiDung = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var data, sql;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          data = req.body;
          sql = "\n    UPDATE ".concat(process.env.DATABASE, ".home_user\n    SET\n    userName = '").concat(data.userName, "', \n    password = '").concat(data.password, "',\n    name = '").concat(data.name, "',\n    role = '").concat(data.role, "'\n    WHERE id = ").concat(data.id, ";\n    ");
          _context20.prev = 2;
          _context20.next = 5;
          return Dao.sql(sql);
        case 5:
          return _context20.abrupt("return", "OK");
        case 8:
          _context20.prev = 8;
          _context20.t0 = _context20["catch"](2);
          return _context20.abrupt("return", _context20.t0);
        case 11:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[2, 8]]);
  }));
  return function capNhatNguoiDung(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();
var xoaNguoiDung = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var data, sql;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          data = req.body;
          sql = "\n    DELETE FROM ".concat(process.env.DATABASE, ".home_user\n    WHERE id = ").concat(data.id, ";\n\n    ");
          _context21.prev = 2;
          _context21.next = 5;
          return Dao.sql(sql);
        case 5:
          return _context21.abrupt("return", "OK");
        case 8:
          _context21.prev = 8;
          _context21.t0 = _context21["catch"](2);
          return _context21.abrupt("return", _context21.t0);
        case 11:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[2, 8]]);
  }));
  return function xoaNguoiDung(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();
module.exports = {
  findAllUser: findAllUser,
  findOneUser: findOneUser,
  findUserPass: findUserPass,
  findAllThietBi: findAllThietBi,
  findAllThietBiHsd: findAllThietBiHsd,
  findAllBoMon: findAllBoMon,
  findAllLichSu: findAllLichSu,
  findLichSuUser: findLichSuUser,
  findOneThietBi: findOneThietBi,
  dangKyThietBiPhong: dangKyThietBiPhong,
  traThietBiPhong: traThietBiPhong,
  capNhatSl: capNhatSl,
  findLichSuTb: findLichSuTb,
  findOneLichSu: findOneLichSu,
  hetHan: hetHan,
  themThietBiPhong: themThietBiPhong,
  deleteThietBiPhong: deleteThietBiPhong,
  capNhatThietBiPhong: capNhatThietBiPhong,
  themNguoiDung: themNguoiDung,
  capNhatNguoiDung: capNhatNguoiDung,
  xoaNguoiDung: xoaNguoiDung
};