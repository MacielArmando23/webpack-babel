"use strict";

var _operaciones = require("./operaciones");

var _sweetalert = _interopRequireDefault(require("sweetalert2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.write("<h1>".concat((0, _operaciones.suma)(5, 6), "</h1>"));
console.log((0, _operaciones.saludo)());
console.log((0, _operaciones.suma)(6, 5));

_sweetalert.default.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
});