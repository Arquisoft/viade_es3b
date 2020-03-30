webpackHotUpdate("main",{

/***/ "./src/components/Ruta/rutas.js":
/*!**************************************!*\
  !*** ./src/components/Ruta/rutas.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _rutas_ruta1_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rutas/ruta1.json */ "./src/components/Ruta/rutas/ruta1.json");
var _rutas_ruta1_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./rutas/ruta1.json */ "./src/components/Ruta/rutas/ruta1.json", 1);
/* harmony import */ var _rutas_ruta2_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rutas/ruta2.json */ "./src/components/Ruta/rutas/ruta2.json");
var _rutas_ruta2_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./rutas/ruta2.json */ "./src/components/Ruta/rutas/ruta2.json", 1);
/* harmony import */ var _ruta_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ruta.js */ "./src/components/Ruta/ruta.js");






var Rutas =
/*#__PURE__*/
function () {
  function Rutas() {
    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Rutas);

    this.rutas = [new _ruta_js__WEBPACK_IMPORTED_MODULE_4__["default"](_rutas_ruta1_json__WEBPACK_IMPORTED_MODULE_2__), new _ruta_js__WEBPACK_IMPORTED_MODULE_4__["default"](_rutas_ruta2_json__WEBPACK_IMPORTED_MODULE_3__)];
  }

  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Rutas, [{
    key: "getNames",
    value: function getNames() {
      var rutasName = [];
      this.rutas.map(function (r) {
        return rutasName.push(r.name);
      });
      return rutasName;
    }
  }, {
    key: "getRutaByName",
    value: function getRutaByName(newName) {
      this.rutas.map(function (r) {
        if (r.name == newName) console.log(newName);
        return r;
      });
    }
  }, {
    key: "getRutaByPosition",
    value: function getRutaByPosition(p) {
      return this.rutas[p];
    }
  }]);

  return Rutas;
}();

/* harmony default export */ __webpack_exports__["default"] = (Rutas = new Rutas());

/***/ })

})
//# sourceMappingURL=main.2d1c51836ef11cc2412d.hot-update.js.map