(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/Map/leaflet.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/containers/Map/leaflet.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* required styles */\n\n.leaflet-pane,\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-tile-container,\n.leaflet-pane > svg,\n.leaflet-pane > canvas,\n.leaflet-zoom-box,\n.leaflet-image-layer,\n.leaflet-layer {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\t}\n.leaflet-container {\n\toverflow: hidden;\n\t}\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n\t-webkit-user-select: none;\n\t        user-select: none;\n\t  -webkit-user-drag: none;\n\t}\n/* Prevents IE11 from highlighting tiles in blue */\n.leaflet-tile::selection {\n\tbackground: transparent;\n}\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\n.leaflet-safari .leaflet-tile {\n\timage-rendering: -webkit-optimize-contrast;\n\t}\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\n.leaflet-safari .leaflet-tile-container {\n\twidth: 1600px;\n\theight: 1600px;\n\t-webkit-transform-origin: 0 0;\n\t}\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n\tdisplay: block;\n\t}\n\n\n.leaflet-container.leaflet-touch-zoom {\n\ttouch-action: pan-x pan-y;\n\t}\n.leaflet-container.leaflet-touch-drag {\n\t/* Fallback for FF which doesn't support pinch-zoom */\n\ttouch-action: none;\n\ttouch-action: pinch-zoom;\n}\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\n\ttouch-action: none;\n}\n.leaflet-container {\n\t-webkit-tap-highlight-color: transparent;\n}\n.leaflet-container a {\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\n}\n.leaflet-tile {\n\tfilter: inherit;\n\tvisibility: hidden;\n\t}\n.leaflet-tile-loaded {\n\tvisibility: inherit;\n\t}\n.leaflet-zoom-box {\n\twidth: 0;\n\theight: 0;\n\tbox-sizing: border-box;\n\tz-index: 800;\n\t}\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n.leaflet-overlay-pane svg {\n\t-moz-user-select: none;\n\t}\n\n.leaflet-pane         { z-index: 400; }\n\n.leaflet-tile-pane    { z-index: 200; }\n.leaflet-overlay-pane { z-index: 400; }\n.leaflet-shadow-pane  { z-index: 500; }\n.leaflet-marker-pane  { z-index: 600; }\n.leaflet-tooltip-pane   { z-index: 650; }\n.leaflet-popup-pane   { z-index: 700; }\n\n.leaflet-map-pane canvas { z-index: 100; }\n.leaflet-map-pane svg    { z-index: 200; }\n\n.leaflet-vml-shape {\n\twidth: 1px;\n\theight: 1px;\n\t}\n.lvml {\n\tbehavior: url(#default#VML);\n\tdisplay: inline-block;\n\tposition: absolute;\n\t}\n\n\n/* control positioning */\n\n.leaflet-control {\n\tposition: relative;\n\tz-index: 800;\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\n\tpointer-events: auto;\n\t}\n.leaflet-top,\n.leaflet-bottom {\n\tposition: absolute;\n\tz-index: 1000;\n\tpointer-events: none;\n\t}\n.leaflet-top {\n\ttop: 0;\n\t}\n.leaflet-right {\n\tright: 0;\n\t}\n.leaflet-bottom {\n\tbottom: 0;\n\t}\n.leaflet-left {\n\tleft: 0;\n\t}\n.leaflet-control {\n\tfloat: left;\n\tclear: both;\n\t}\n.leaflet-right .leaflet-control {\n\tfloat: right;\n\t}\n.leaflet-top .leaflet-control {\n\tmargin-top: 10px;\n\t}\n.leaflet-bottom .leaflet-control {\n\tmargin-bottom: 10px;\n\t}\n.leaflet-left .leaflet-control {\n\tmargin-left: 10px;\n\t}\n.leaflet-right .leaflet-control {\n\tmargin-right: 10px;\n\t}\n\n\n/* zoom and fade animations */\n\n.leaflet-fade-anim .leaflet-tile {\n\twill-change: opacity;\n\t}\n.leaflet-fade-anim .leaflet-popup {\n\topacity: 0;\n\ttransition: opacity 0.2s linear;\n\t}\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\n\topacity: 1;\n\t}\n.leaflet-zoom-animated {\n\ttransform-origin: 0 0;\n\t}\n.leaflet-zoom-anim .leaflet-zoom-animated {\n\twill-change: transform;\n\t}\n.leaflet-zoom-anim .leaflet-zoom-animated {\n\ttransition:         transform 0.25s cubic-bezier(0,0,0.25,1);\n\t}\n.leaflet-zoom-anim .leaflet-tile,\n.leaflet-pan-anim .leaflet-tile {\n\ttransition: none;\n\t}\n\n.leaflet-zoom-anim .leaflet-zoom-hide {\n\tvisibility: hidden;\n\t}\n\n\n/* cursors */\n\n.leaflet-interactive {\n\tcursor: pointer;\n\t}\n.leaflet-grab {\n\tcursor:         grab;\n\t}\n.leaflet-crosshair,\n.leaflet-crosshair .leaflet-interactive {\n\tcursor: crosshair;\n\t}\n.leaflet-popup-pane,\n.leaflet-control {\n\tcursor: auto;\n\t}\n.leaflet-dragging .leaflet-grab,\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\n.leaflet-dragging .leaflet-marker-draggable {\n\tcursor: move;\n\tcursor:         grabbing;\n\t}\n\n/* marker & overlays interactivity */\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-image-layer,\n.leaflet-pane > svg path,\n.leaflet-tile-container {\n\tpointer-events: none;\n\t}\n\n.leaflet-marker-icon.leaflet-interactive,\n.leaflet-image-layer.leaflet-interactive,\n.leaflet-pane > svg path.leaflet-interactive,\nsvg.leaflet-image-layer.leaflet-interactive path {\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\n\tpointer-events: auto;\n\t}\n\n/* visual tweaks */\n\n.leaflet-container {\n\tbackground: #ddd;\n\toutline: 0;\n\t}\n.leaflet-container a {\n\tcolor: #0078A8;\n\t}\n.leaflet-container a.leaflet-active {\n\toutline: 2px solid orange;\n\t}\n.leaflet-zoom-box {\n\tborder: 2px dotted #38f;\n\tbackground: rgba(255,255,255,0.5);\n\t}\n\n\n/* general typography */\n.leaflet-container {\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n\t}\n\n\n/* general toolbar styles */\n\n.leaflet-bar {\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\n\tborder-radius: 4px;\n\t}\n.leaflet-bar a,\n.leaflet-bar a:hover {\n\tbackground-color: #fff;\n\tborder-bottom: 1px solid #ccc;\n\twidth: 26px;\n\theight: 26px;\n\tline-height: 26px;\n\tdisplay: block;\n\ttext-align: center;\n\ttext-decoration: none;\n\tcolor: black;\n\t}\n.leaflet-bar a,\n.leaflet-control-layers-toggle {\n\tbackground-position: 50% 50%;\n\tbackground-repeat: no-repeat;\n\tdisplay: block;\n\t}\n.leaflet-bar a:hover {\n\tbackground-color: #f4f4f4;\n\t}\n.leaflet-bar a:first-child {\n\tborder-top-left-radius: 4px;\n\tborder-top-right-radius: 4px;\n\t}\n.leaflet-bar a:last-child {\n\tborder-bottom-left-radius: 4px;\n\tborder-bottom-right-radius: 4px;\n\tborder-bottom: none;\n\t}\n.leaflet-bar a.leaflet-disabled {\n\tcursor: default;\n\tbackground-color: #f4f4f4;\n\tcolor: #bbb;\n\t}\n\n.leaflet-touch .leaflet-bar a {\n\twidth: 30px;\n\theight: 30px;\n\tline-height: 30px;\n\t}\n.leaflet-touch .leaflet-bar a:first-child {\n\tborder-top-left-radius: 2px;\n\tborder-top-right-radius: 2px;\n\t}\n.leaflet-touch .leaflet-bar a:last-child {\n\tborder-bottom-left-radius: 2px;\n\tborder-bottom-right-radius: 2px;\n\t}\n\n/* zoom control */\n\n.leaflet-control-zoom-in,\n.leaflet-control-zoom-out {\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\n\ttext-indent: 1px;\n\t}\n\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\n\tfont-size: 22px;\n\t}\n\n\n/* layers control */\n\n.leaflet-control-layers {\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\n\tbackground: #fff;\n\tborder-radius: 5px;\n\t}\n.leaflet-control-layers-toggle {\n\n\twidth: 36px;\n\theight: 36px;\n\t}\n.leaflet-retina .leaflet-control-layers-toggle {\n\t\n\tbackground-size: 26px 26px;\n\t}\n.leaflet-touch .leaflet-control-layers-toggle {\n\twidth: 44px;\n\theight: 44px;\n\t}\n.leaflet-control-layers .leaflet-control-layers-list,\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\n\tdisplay: none;\n\t}\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\n\tdisplay: block;\n\tposition: relative;\n\t}\n.leaflet-control-layers-expanded {\n\tpadding: 6px 10px 6px 6px;\n\tcolor: #333;\n\tbackground: #fff;\n\t}\n.leaflet-control-layers-scrollbar {\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n\tpadding-right: 5px;\n\t}\n.leaflet-control-layers-selector {\n\tmargin-top: 2px;\n\tposition: relative;\n\ttop: 1px;\n\t}\n.leaflet-control-layers label {\n\tdisplay: block;\n\t}\n.leaflet-control-layers-separator {\n\theight: 0;\n\tborder-top: 1px solid #ddd;\n\tmargin: 5px -10px 5px -6px;\n\t}\n\n\n\n\n/* attribution and scale controls */\n\n.leaflet-container .leaflet-control-attribution {\n\tbackground: #fff;\n\tbackground: rgba(255, 255, 255, 0.7);\n\tmargin: 0;\n\t}\n.leaflet-control-attribution,\n.leaflet-control-scale-line {\n\tpadding: 0 5px;\n\tcolor: #333;\n\t}\n.leaflet-control-attribution a {\n\ttext-decoration: none;\n\t}\n.leaflet-control-attribution a:hover {\n\ttext-decoration: underline;\n\t}\n.leaflet-container .leaflet-control-attribution,\n.leaflet-container .leaflet-control-scale {\n\tfont-size: 11px;\n\t}\n.leaflet-left .leaflet-control-scale {\n\tmargin-left: 5px;\n\t}\n.leaflet-bottom .leaflet-control-scale {\n\tmargin-bottom: 5px;\n\t}\n.leaflet-control-scale-line {\n\tborder: 2px solid #777;\n\tborder-top: none;\n\tline-height: 1.1;\n\tpadding: 2px 5px 1px;\n\tfont-size: 11px;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\tbox-sizing: border-box;\n\n\tbackground: #fff;\n\tbackground: rgba(255, 255, 255, 0.5);\n\t}\n.leaflet-control-scale-line:not(:first-child) {\n\tborder-top: 2px solid #777;\n\tborder-bottom: none;\n\tmargin-top: -2px;\n\t}\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\n\tborder-bottom: 2px solid #777;\n\t}\n\n.leaflet-touch .leaflet-control-attribution,\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n\tbox-shadow: none;\n\t}\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n\tborder: 2px solid rgba(0,0,0,0.2);\n\tbackground-clip: padding-box;\n\t}\n\n\n/* popup */\n\n.leaflet-popup {\n\tposition: absolute;\n\ttext-align: center;\n\tmargin-bottom: 20px;\n\t}\n.leaflet-popup-content-wrapper {\n\tpadding: 1px;\n\ttext-align: left;\n\tborder-radius: 12px;\n\t}\n.leaflet-popup-content {\n\tmargin: 13px 19px;\n\tline-height: 1.4;\n\t}\n.leaflet-popup-content p {\n\tmargin: 18px 0;\n\t}\n.leaflet-popup-tip-container {\n\twidth: 40px;\n\theight: 20px;\n\tposition: absolute;\n\tleft: 50%;\n\tmargin-left: -20px;\n\toverflow: hidden;\n\tpointer-events: none;\n\t}\n.leaflet-popup-tip {\n\twidth: 17px;\n\theight: 17px;\n\tpadding: 1px;\n\n\tmargin: -10px auto 0;\n\ttransform: rotate(45deg);\n\t}\n.leaflet-popup-content-wrapper,\n.leaflet-popup-tip {\n\tbackground: white;\n\tcolor: #333;\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\n\t}\n.leaflet-container a.leaflet-popup-close-button {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tpadding: 4px 4px 0 0;\n\tborder: none;\n\ttext-align: center;\n\twidth: 18px;\n\theight: 14px;\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\n\tcolor: #c3c3c3;\n\ttext-decoration: none;\n\tfont-weight: bold;\n\tbackground: transparent;\n\t}\n.leaflet-container a.leaflet-popup-close-button:hover {\n\tcolor: #999;\n\t}\n.leaflet-popup-scrolled {\n\toverflow: auto;\n\tborder-bottom: 1px solid #ddd;\n\tborder-top: 1px solid #ddd;\n\t}\n\n.leaflet-oldie .leaflet-popup-content-wrapper {\n\tzoom: 1;\n\t}\n.leaflet-oldie .leaflet-popup-tip {\n\twidth: 24px;\n\tmargin: 0 auto;\n\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\n\t}\n.leaflet-oldie .leaflet-popup-tip-container {\n\tmargin-top: -1px;\n\t}\n\n.leaflet-oldie .leaflet-control-zoom,\n.leaflet-oldie .leaflet-control-layers,\n.leaflet-oldie .leaflet-popup-content-wrapper,\n.leaflet-oldie .leaflet-popup-tip {\n\tborder: 1px solid #999;\n\t}\n\n\n/* div icon */\n\n.leaflet-div-icon {\n\tbackground: #fff;\n\tborder: 1px solid #666;\n\t}\n\n\n/* Tooltip */\n/* Base styles for the element that has a tooltip */\n.leaflet-tooltip {\n\tposition: absolute;\n\tpadding: 6px;\n\tbackground-color: #fff;\n\tborder: 1px solid #fff;\n\tborder-radius: 3px;\n\tcolor: #222;\n\twhite-space: nowrap;\n\t-webkit-user-select: none;\n\tuser-select: none;\n\tpointer-events: none;\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\n\t}\n.leaflet-tooltip.leaflet-clickable {\n\tcursor: pointer;\n\tpointer-events: auto;\n\t}\n.leaflet-tooltip-top:before,\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n\tposition: absolute;\n\tpointer-events: none;\n\tborder: 6px solid transparent;\n\tbackground: transparent;\n\tcontent: \"\";\n\t}\n\n/* Directions */\n\n.leaflet-tooltip-bottom {\n\tmargin-top: 6px;\n}\n.leaflet-tooltip-top {\n\tmargin-top: -6px;\n}\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-top:before {\n\tleft: 50%;\n\tmargin-left: -6px;\n\t}\n.leaflet-tooltip-top:before {\n\tbottom: 0;\n\tmargin-bottom: -12px;\n\tborder-top-color: #fff;\n\t}\n.leaflet-tooltip-bottom:before {\n\ttop: 0;\n\tmargin-top: -12px;\n\tmargin-left: -6px;\n\tborder-bottom-color: #fff;\n\t}\n.leaflet-tooltip-left {\n\tmargin-left: -6px;\n}\n.leaflet-tooltip-right {\n\tmargin-left: 6px;\n}\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n\ttop: 50%;\n\tmargin-top: -6px;\n\t}\n.leaflet-tooltip-left:before {\n\tright: 0;\n\tmargin-right: -12px;\n\tborder-left-color: #fff;\n\t}\n.leaflet-tooltip-right:before {\n\tleft: 0;\n\tmargin-left: -12px;\n\tborder-right-color: #fff;\n\t}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody,\n#root {\n  height: 100% !important;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  color: #666;\n  font-size: 62.5%;\n}\n\np,\na,\ndiv {\n  font-size: 16px;\n}\n\na {\n  color: #666;\n  text-decoration: none;\n}\n\na svg-inline--fa {\n  margin-right: 5px;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\nul li {\n  padding: 0;\n  margin: 0;\n}\n\ninput[type='text'] {\n  box-sizing: border-box;\n  border: 1px solid hsl(0, 0%, 80%);\n  border-radius: 4px;\n  width: 100%;\n  padding: 7px 10px;\n}\n\n/**\nTemporary fix to overwrite and display the default style of the checkbox\nto prevent issues with the custom component and react/fontawesome missing icons\n */\ninput[type=\"checkbox\"] {\n  appearance: checkbox !important;\n  -webkit-appearance: checkbox !important;\n  -moz-appearance: checkbox !important;\n  margin: 0 0 0 16px !important\n}\ninput[type=\"checkbox\"]::before {\n  content: none !important;\n}\n/**\nEnds temporary react/fontawesome fix\n */\n\n.link,\n.link-button {\n  color: #449df5;\n  font-family: Raleway;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.75px;\n  line-height: 14px;\n  text-align: center;\n  text-decoration: none;\n  padding: 0;\n}\n\n.link:active,\n.link-button:active,\n.link:hover,\n.link-button:hover {\n  text-decoration: none;\n}\n\n* {\n  font-family: 'Raleway', sans-serif;\n}\n\n.form-group {\n  text-align: left;\n  margin: 12px 0;\n}\n\n.form-group:first-child {\n  margin-top: 0;\n}\n\n.form-group > label {\n  color: #5361fd;\n  font-family: Raleway;\n  font-size: 11px;\n  font-weight: bold;\n  letter-spacing: 0.75px;\n  line-height: 14px;\n  text-transform: uppercase;\n  display: block;\n}\n\n.form-group > input {\n  height: 38px;\n  width: 100%;\n  margin: 10px 0;\n  border-radius: 4px;\n  border: solid 1px #ccc;\n  box-sizing: border-box;\n}\n\nform-group .select-role {\n  margin: 10px 0;\n}\n\n/* Overriding the center-align property from the styleguide */\n.solid-provider-select {\n  text-align: left !important;\n}\n\n.solid-provider-select .option {\n  padding-left: 10px !important;\n}\n\n\n.leaflet-container {\n  height: 400px;\n  width: 80%;\n  margin: 0 auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Utils */ "./src/components/Utils/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/routes.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/theme */ "./src/utils/theme.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flag_icon_css_css_flag_icon_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flag-icon-css/css/flag-icon.min.css */ "./node_modules/flag-icon-css/css/flag-icon.min.css");
/* harmony import */ var flag_icon_css_css_flag_icon_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flag_icon_css_css_flag_icon_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _inrupt_solid_style_guide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @inrupt/solid-style-guide */ "./node_modules/@inrupt/solid-style-guide/css/main.css");
/* harmony import */ var _inrupt_solid_style_guide__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_style_guide__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _App_styled__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./App.styled */ "./src/App.styled.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/App.js";















_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["fas"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGithub"]);

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Utils__WEBPACK_IMPORTED_MODULE_2__["Loader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _utils_theme__WEBPACK_IMPORTED_MODULE_8__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_styled__WEBPACK_IMPORTED_MODULE_14__["Toaster"], Object.assign({
    autoClose: 3000,
    position: react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].POSITION.TOP_CENTER,
    newestOnTop: true,
    closeOnClick: true,
    pauseOnVisibilityChange: true,
    draggable: true,
    className: 'solid-toaster-container',
    toastClassName: 'solid-toaster',
    bodyClassName: 'solid-toaster-body',
    transition: react_toastify__WEBPACK_IMPORTED_MODULE_1__["Slide"]
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/App.styled.js":
/*!***************************!*\
  !*** ./src/App.styled.js ***!
  \***************************/
/*! exports provided: Toaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toaster", function() { return Toaster; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  &.solid-toaster-container {\n    min-width: 410px;\n    margin-left: 0;\n    transform: translateX(-50%);\n    padding: 0;\n    & .toaster-error {\n      color: #fff;\n      background: rgba(213, 0, 0, 0.9);\n    }\n\n    & .toaster-success {\n      color: #fff;\n      background: rgba(124, 77, 255, 0.9);\n    }\n  }\n\n  & .solid-toaster {\n    border-radius: 4px;\n    min-width: 410px;\n    color: #fff;\n    display: flex;\n    align-content: center;\n    min-height: 72px;\n    margin: 0;\n\n    & > .solid-toaster-body {\n      margin: 0;\n      display: flex;\n    }\n\n    & > button {\n      color: #fff;\n      opacity: 0.8;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Toaster = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_toastify__WEBPACK_IMPORTED_MODULE_1__["ToastContainer"])(_templateObject());

/***/ }),

/***/ "./src/components/AuthNavBar/auth-nav-bar.component.js":
/*!*************************************************************!*\
  !*** ./src/components/AuthNavBar/auth-nav-bar.component.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./.. */ "./src/components/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./children */ "./src/components/AuthNavBar/children/index.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Utils */ "./src/components/Utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");





var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/AuthNavBar/auth-nav-bar.component.js";







var AuthNavBar = react__WEBPACK_IMPORTED_MODULE_5___default.a.memo(function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      inboxes = _useState2[0],
      setInbox = _useState2[1];

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var navigation = _constants__WEBPACK_IMPORTED_MODULE_11__["NavigationItems"].map(function (item) {
    return Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, item, {
      label: t(item.label)
    });
  });
  var webId = props.webId;
  /**
   * Looks for all of the inbox containers in the pod and sets inboxes state
   */

  var discoverInbox = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(
  /*#__PURE__*/
  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _inboxes, globalInbox, appStorage, appInbox;

    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _inboxes = [];
            /**
             * Get user's global inbox path from pod.
             */

            _context.next = 4;
            return _utils__WEBPACK_IMPORTED_MODULE_10__["ldflexHelper"].discoverInbox(webId);

          case 4:
            globalInbox = _context.sent;

            if (globalInbox) {
              _inboxes = [].concat(Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_inboxes), [{
                path: globalInbox,
                inboxName: t('navBar.notifications.global'),
                shape: 'default'
              }]);
            }
            /**
             * Get user's game inbox path from pod.
             */


            _context.next = 8;
            return _utils__WEBPACK_IMPORTED_MODULE_10__["storageHelper"].getAppStorage(webId);

          case 8:
            appStorage = _context.sent;
            _context.next = 11;
            return _utils__WEBPACK_IMPORTED_MODULE_10__["ldflexHelper"].discoverInbox("".concat(appStorage, "settings.ttl"));

          case 11:
            appInbox = _context.sent;

            /**
             * create an inbox object to send over notification component
             */
            if (appInbox) {
              _inboxes = [].concat(Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_inboxes), [{
                path: appInbox,
                inboxName: t('navBar.notifications.tictactoe'),
                shape: 'default'
              }]);
            }
            /**
             * If user doesn't has inbox in his pod will show an error and link to
             * know how fix it.
             */


            if (_inboxes.length === 0) Object(_utils__WEBPACK_IMPORTED_MODULE_10__["errorToaster"])(t('noInboxUser.message'), 'Error', {
              label: t('noInboxUser.link.label'),
              href: t('noInboxUser.link.href')
            });
            setInbox(_inboxes);
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);

            /**
             * Show general errors
             */
            Object(_utils__WEBPACK_IMPORTED_MODULE_10__["errorToaster"])(_context.t0.message, t('navBar.notifications.fetchingError'));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  })), [webId, inboxes]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (webId) {
      discoverInbox();
    }
  }, [webId]);
  var history = props.history;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(___WEBPACK_IMPORTED_MODULE_6__["NavBar"], {
    navigation: navigation,
    sticky: true,
    toolbar: [{
      component: function component() {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Utils__WEBPACK_IMPORTED_MODULE_9__["LanguageDropdown"], Object.assign({
          t: t,
          i18n: i18n
        }, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }));
      },
      id: 'language'
    }, {
      component: function component() {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(___WEBPACK_IMPORTED_MODULE_6__["Notification"], Object.assign({
          webId: webId,
          inbox: inboxes
        }, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }));
      },
      id: 'notifications'
    }, {
      component: function component(props) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_children__WEBPACK_IMPORTED_MODULE_8__["NavBarContainer"], Object.assign({}, Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({
          t: t,
          i18n: i18n,
          webId: webId,
          history: history
        }, props), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }));
      },
      id: 'profile'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  });
});
/* harmony default export */ __webpack_exports__["default"] = (AuthNavBar);

/***/ }),

/***/ "./src/components/AuthNavBar/auth-nav-bar.container.js":
/*!*************************************************************!*\
  !*** ./src/components/AuthNavBar/auth-nav-bar.container.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-nav-bar.component */ "./src/components/AuthNavBar/auth-nav-bar.component.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/AuthNavBar/auth-nav-bar.container.js";



/**
 * AuthBar container
 * @type {{compare, $$typeof, type}}
 */
var AuthNavBarContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var location = _ref.location,
      webId = _ref.webId,
      history = _ref.history;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({
    location: location,
    webId: webId,
    history: history
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (AuthNavBarContainer);

/***/ }),

/***/ "./src/components/AuthNavBar/children/NavbarProfile/index.js":
/*!*******************************************************************!*\
  !*** ./src/components/AuthNavBar/children/NavbarProfile/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_bar_profile_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar-profile.container */ "./src/components/AuthNavBar/children/NavbarProfile/nav-bar-profile.container.js");

/* harmony default export */ __webpack_exports__["default"] = (_nav_bar_profile_container__WEBPACK_IMPORTED_MODULE_0__["NavBarContainer"]);

/***/ }),

/***/ "./src/components/AuthNavBar/children/NavbarProfile/nav-bar-profile.component.js":
/*!***************************************************************************************!*\
  !*** ./src/components/AuthNavBar/children/NavbarProfile/nav-bar-profile.component.js ***!
  \***************************************************************************************/
/*! exports provided: ImageContainer, Img, LoadingImage, UserName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContainer", function() { return ImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingImage", function() { return LoadingImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserName", function() { return UserName; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @inrupt/solid-react-components */ "./node_modules/@inrupt/solid-react-components/build/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Utils */ "./src/components/Utils/index.js");
/* harmony import */ var solid_auth_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! solid-auth-client */ "solid-auth-client");
/* harmony import */ var solid_auth_client__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(solid_auth_client__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @solid/query-ldflex */ "@solid/query-ldflex");
/* harmony import */ var _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_solid_query_ldflex__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../utils */ "./src/utils/index.js");
/* harmony import */ var _constants_navigation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../constants/navigation */ "./src/constants/navigation.js");









var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/AuthNavBar/children/NavbarProfile/nav-bar-profile.component.js";

function _templateObject4() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  display: inline-block;\n  margin-left: 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  background: #cccccc;\n  display: block;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background-size: cover;\n  overflow: hidden;\n  visibility: ", ";\n  display: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject(), function (_ref) {
  var show = _ref.show;
  return show ? 'visible' : 'hidden';
}, function (_ref2) {
  var show = _ref2.show;
  return show ? 'block' : 'none';
});
var Img = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].img(_templateObject2());
var LoadingImage = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(ImageContainer)(_templateObject3());
var UserName = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].span(_templateObject4());
var beforeContext;

var NavBarProfile =
/*#__PURE__*/
function (_Component) {
  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(NavBarProfile, _Component);

  function NavBarProfile(props) {
    var _this;

    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, NavBarProfile);

    _this = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(NavBarProfile).call(this, props));
    _this.state = {
      imageLoaded: false
    };

    _this.profileRedirect = function () {
      return _this.props.history.push('/profile');
    };

    _this.formModelRenderRedirect = function () {
      return _this.props.history.push('/formModel/renderer');
    };

    _this.formModelConvertRedirect = function () {
      return _this.props.history.push('/formModel/converter');
    };

    _this.onImageLoaded =
    /*#__PURE__*/
    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _this.setState({
                imageLoaded: true
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    _this.logOut =
    /*#__PURE__*/
    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return solid_auth_client__WEBPACK_IMPORTED_MODULE_13___default.a.logout();

            case 3:
              // Remove localStorage
              localStorage.removeItem('solid-auth-client'); // Redirect to login page

              window.location = '/login';
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              Object(_utils__WEBPACK_IMPORTED_MODULE_15__["errorToaster"])(_context2.t0.message, 'Error');

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));
    _this.getProfileData =
    /*#__PURE__*/
    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var user, userImage, defaultimage, image;
      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              // fetching user card from pod. This makes a request and returns the data
              user = _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_14___default.a.user;
              /*
               * In the background LDFlex is using JSON-LD. Because of this, we need to
               * make an async call. This will return a JSON-LD expanded object and expose the requested value(name).
               * for more information please go to: https://github.com/digitalbazaar/jsonld.js
               */

              _context3.next = 4;
              return user.vcard_hasPhoto;

            case 4:
              userImage = _context3.sent;
              defaultimage = _this.state.image;
              image = userImage ? userImage.value : defaultimage;

              _this.setState({
                image: image
              });

              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              Object(_utils__WEBPACK_IMPORTED_MODULE_15__["errorToaster"])(_context3.t0.message, 'Error');

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 10]]);
    }));
    _this.state = {
      image: '/img/icon/empty-profile.svg'
    };
    return _this;
  }

  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(NavBarProfile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getProfileData();
    }
    /**
     * Checks everytime the timestamp changes to go and fetch the data again
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var webId = this.props.webId;
      if (webId && webId !== prevProps.webId) this.getProfileData();

      if (this.context) {
        var timestamp = this.context.timestamp;

        if (timestamp !== beforeContext) {
          this.getProfileData();
          beforeContext = timestamp;
        }
      }
    } // eslint-disable-next-line react/destructuring-assignment

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          t = _this$props.t,
          open = _this$props.open,
          customClass = _this$props.customClass;
      var _this$state = this.state,
          imageLoaded = _this$state.imageLoaded,
          image = _this$state.image;
      var profileOpts = _constants_navigation__WEBPACK_IMPORTED_MODULE_16__["ProfileOptions"].map(function (item) {
        return Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
          label: t(item.label),
          onClick: _this2[item.onClick]
        });
      });
      return image ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Utils__WEBPACK_IMPORTED_MODULE_12__["Dropdown"], {
        actions: profileOpts,
        className: "nav-bar--profile ".concat(customClass),
        open: open,
        hover: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ImageContainer, {
        show: imageLoaded,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Img, {
        show: imageLoaded,
        src: image,
        alt: "profile",
        onLoad: this.onImageLoaded,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      })), !imageLoaded && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(LoadingImage, {
        show: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      });
    }
  }]);

  return NavBarProfile;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

NavBarProfile.contextType = _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_11__["UpdateContext"];
/* harmony default export */ __webpack_exports__["default"] = (NavBarProfile);

/***/ }),

/***/ "./src/components/AuthNavBar/children/NavbarProfile/nav-bar-profile.container.js":
/*!***************************************************************************************!*\
  !*** ./src/components/AuthNavBar/children/NavbarProfile/nav-bar-profile.container.js ***!
  \***************************************************************************************/
/*! exports provided: NavBarContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarContainer", function() { return NavBarContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inrupt/solid-react-components */ "./node_modules/@inrupt/solid-react-components/build/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav_bar_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar-profile.component */ "./src/components/AuthNavBar/children/NavbarProfile/nav-bar-profile.component.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/AuthNavBar/children/NavbarProfile/nav-bar-profile.container.js";



var NavBarContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  var webId = props.webId;
  return webId ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_1__["LiveUpdate"], {
    subscribe: webId.split('#')[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_bar_profile_component__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }))) : null;
});

/***/ }),

/***/ "./src/components/AuthNavBar/children/index.js":
/*!*****************************************************!*\
  !*** ./src/components/AuthNavBar/children/index.js ***!
  \*****************************************************/
/*! exports provided: NavBarContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavbarProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavbarProfile */ "./src/components/AuthNavBar/children/NavbarProfile/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavBarContainer", function() { return _NavbarProfile__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/components/AuthNavBar/index.js":
/*!********************************************!*\
  !*** ./src/components/AuthNavBar/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_nav_bar_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-nav-bar.container */ "./src/components/AuthNavBar/auth-nav-bar.container.js");

/* harmony default export */ __webpack_exports__["default"] = (_auth_nav_bar_container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/AutoSaveSpinner/auto-save.style.js":
/*!***********************************************************!*\
  !*** ./src/components/AutoSaveSpinner/auto-save.style.js ***!
  \***********************************************************/
/*! exports provided: AutoSaveSpinnerWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoSaveSpinnerWrapper", function() { return AutoSaveSpinnerWrapper; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var AutoSaveSpinnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject());

/***/ }),

/***/ "./src/components/AutoSaveSpinner/index.js":
/*!*************************************************!*\
  !*** ./src/components/AutoSaveSpinner/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _auto_save_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auto-save.style */ "./src/components/AutoSaveSpinner/auto-save.style.js");

var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/AutoSaveSpinner/index.js";



var AutoSaveSpinner = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function (_ref) {
  var inProgress = _ref.inProgress,
      result = _ref.result,
      setResult = _ref.setResult,
      setSavingProcess = _ref.setSavingProcess;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      timer = _useState2[0],
      setTimer = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      clearTimeout(timer);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (result) {
      if (timer) clearTimeout(timer);

      if (result.toLowerCase() === 'success') {
        setTimer(setTimeout(function () {
          setResult(null);
          setSavingProcess(false);
        }, 2000));
      }
    }
  }, [result]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_auto_save_style__WEBPACK_IMPORTED_MODULE_3__["AutoSaveSpinnerWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, inProgress && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "spinner",
    spin: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), result && !inProgress && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, result.toLowerCase() === 'success' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "check-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), result.toLowerCase() === 'error' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "exclamation-triangle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (AutoSaveSpinner);

/***/ }),

/***/ "./src/components/ErrorBoundary/error-boundary.component.js":
/*!******************************************************************!*\
  !*** ./src/components/ErrorBoundary/error-boundary.component.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorBoundary; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







/**
 * ErrorBoundary component to catch React component errors
 * You can use you own markup to show Error in your components
 */
var ErrorBoundary =
/*#__PURE__*/
function (_Component) {
  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ErrorBoundary, _Component);

  function ErrorBoundary(props) {
    var _this;

    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorBoundary);

    _this = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ErrorBoundary).call(this, props));
    _this.state = {
      hasError: false,
      error: null,
      info: null
    };
    return _this;
  } // Catch error and update state to render custom error component


  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        error: error,
        info: info
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          hasError = _this$state.hasError,
          error = _this$state.error,
          info = _this$state.info;
      var _this$props = this.props,
          component = _this$props.component,
          children = _this$props.children;
      return hasError ? component(error, info) : children;
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/ErrorBoundary/index.js":
/*!***********************************************!*\
  !*** ./src/components/ErrorBoundary/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_boundary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-boundary.component */ "./src/components/ErrorBoundary/error-boundary.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_error_boundary_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Footer/footer.component.js":
/*!***************************************************!*\
  !*** ./src/components/Footer/footer.component.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Footer/footer.component.js";





var Footer = function Footer(props) {
  var t = props.t;
  var githubIcon = {
    prefix: 'fab',
    iconName: 'github'
  };
  var githubIconDef = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["findIconDefinition"])(githubIcon);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "solid-footer footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "solid-footer__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "solid-footer__content--copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\xA9 ", "inrupt Inc."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, t('footer.version'), '', " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "build-value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "0.1.0")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "solid-footer__content--links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/inrupt/solid-react-sdk",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    className: "link-icon",
    icon: githubIconDef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), "react-solid-sdk")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/inrupt/solid-style-guide",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    className: "link-icon",
    icon: githubIconDef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), "solid-style-guide"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])()(Footer));

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ "./src/components/Footer/footer.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_footer_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/GlobalError/global-error.component.js":
/*!**************************************************************!*\
  !*** ./src/components/GlobalError/global-error.component.js ***!
  \**************************************************************/
/*! exports provided: GlobalError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalError", function() { return GlobalError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_error_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-error.style */ "./src/components/GlobalError/global-error.style.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/GlobalError/global-error.component.js";



/**
 * Global Component to show error on app
 * has basic markup and will render into ErrorBoundary component
 */
var GlobalError = function GlobalError(_ref) {
  var info = _ref.info;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_global_error_style__WEBPACK_IMPORTED_MODULE_1__["GlobalErrorWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_global_error_style__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/error-ufo.svg",
    alt: "Error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_global_error_style__WEBPACK_IMPORTED_MODULE_1__["DetailWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_global_error_style__WEBPACK_IMPORTED_MODULE_1__["ErrorTitle"], {
    "data-testid": "error-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Error:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_global_error_style__WEBPACK_IMPORTED_MODULE_1__["ErrorInfo"], {
    "data-testid": "error-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Something Went Wrong"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_global_error_style__WEBPACK_IMPORTED_MODULE_1__["ErrorDetail"], {
    className: "subheadline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "You may refresh the page, or try again at a later time."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_global_error_style__WEBPACK_IMPORTED_MODULE_1__["ErrorDetail"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, info.componentStack)));
};

/***/ }),

/***/ "./src/components/GlobalError/global-error.style.js":
/*!**********************************************************!*\
  !*** ./src/components/GlobalError/global-error.style.js ***!
  \**********************************************************/
/*! exports provided: GlobalErrorWrapper, ErrorTitle, ErrorInfo, ErrorDetail, ImageWrapper, DetailWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorWrapper", function() { return GlobalErrorWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorTitle", function() { return ErrorTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInfo", function() { return ErrorInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDetail", function() { return ErrorDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailWrapper", function() { return DetailWrapper; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");


function _templateObject11() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["order: 2;"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  align-self: center;\n  order: 1;\n\n  ", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["order: 1;"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  align-self: center;\n  order: 2;\n\n  img {\n    display: block;\n    max-width: 100%;\n    margin: 0 auto;\n  }\n  ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-weight: 100;\n  line-height: 1.8rem;\n\n  &.subheadline {\n    font-size: 1.1rem;\n    &:after {\n      display: block;\n      content: '';\n      height: 1px;\n      width: 50%;\n      margin: 20px 0 30px;\n      background-color: #666666;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["font-size: 2.8rem;"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #5567f9;\n  text-transform: uppercase;\n  margin: 0;\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #9c79d5;\n  margin: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["margin: 20px auto;"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["grid-template-columns: repeat(2, 1fr);"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: repeat(1, minmax(200px, 1fr));\n  grid-gap: 40px;\n  max-width: 1024px;\n  margin: 20px;\n\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var GlobalErrorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject(), _utils__WEBPACK_IMPORTED_MODULE_2__["media"].tablet(_templateObject2()), _utils__WEBPACK_IMPORTED_MODULE_2__["media"].desktop(_templateObject3()));
var ErrorTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1(_templateObject4());
var ErrorInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject5(), _utils__WEBPACK_IMPORTED_MODULE_2__["media"].tablet(_templateObject6()));
var ErrorDetail = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject7());
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject8(), _utils__WEBPACK_IMPORTED_MODULE_2__["media"].tablet(_templateObject9()));
var DetailWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject10(), _utils__WEBPACK_IMPORTED_MODULE_2__["media"].tablet(_templateObject11()));

/***/ }),

/***/ "./src/components/GlobalError/index.js":
/*!*********************************************!*\
  !*** ./src/components/GlobalError/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-error.component */ "./src/components/GlobalError/global-error.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_global_error_component__WEBPACK_IMPORTED_MODULE_0__["GlobalError"]);

/***/ }),

/***/ "./src/components/ImageProfile/image-profile.component.js":
/*!****************************************************************!*\
  !*** ./src/components/ImageProfile/image-profile.component.js ***!
  \****************************************************************/
/*! exports provided: ImageProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageProfile", function() { return ImageProfile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _image_profile_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-profile.style */ "./src/components/ImageProfile/image-profile.style.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/ImageProfile/image-profile.component.js";



var ImageProfile = function ImageProfile(props) {
  var uploadedFiles = props.uploadedFiles,
      img = props.photo,
      overrideEventDefaults = props.overrideEventDefaults,
      onDragLeave = props.onDragLeave,
      onDragEnter = props.onDragEnter,
      onDrop = props.onDrop,
      onClickFile = props.onClickFile,
      text = props.text,
      inProgress = props.inProgress,
      uploadingText = props.uploadingText;
  var photo = uploadedFiles && uploadedFiles.length > 0 ? uploadedFiles[uploadedFiles.length - 1].uri : img;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_image_profile_style__WEBPACK_IMPORTED_MODULE_2__["ImageProfileWrapper"], Object.assign({
    onDragStart: overrideEventDefaults,
    onDragOver: overrideEventDefaults,
    onDragEnd: overrideEventDefaults,
    onDrag: overrideEventDefaults,
    onDragLeave: onDragLeave,
    onDragEnter: onDragEnter,
    onDrop: onDrop,
    style: photo && photo !== '' && {
      backgroundImage: "url(".concat(photo, ")")
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_image_profile_style__WEBPACK_IMPORTED_MODULE_2__["ButtonStyled"], {
    onClick: onClickFile,
    className: "button-upload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "upload",
    className: "upload-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), text), inProgress && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_image_profile_style__WEBPACK_IMPORTED_MODULE_2__["ImageProfileLoader"], {
    className: "image-profile-loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "spinner",
    spin: true,
    size: "2x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_image_profile_style__WEBPACK_IMPORTED_MODULE_2__["LoaderText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, uploadingText)));
};
ImageProfile.defaultProps = {
  text: 'Upload New Photo',
  uploadingText: 'Uploading'
};

/***/ }),

/***/ "./src/components/ImageProfile/image-profile.style.js":
/*!************************************************************!*\
  !*** ./src/components/ImageProfile/image-profile.style.js ***!
  \************************************************************/
/*! exports provided: ImageProfileWrapper, ButtonStyled, ImageProfileLoader, LoaderText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageProfileWrapper", function() { return ImageProfileWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonStyled", function() { return ButtonStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageProfileLoader", function() { return ImageProfileLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderText", function() { return LoaderText; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: white;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: rgba(23, 20, 34, 0.73);\n  border-radius: 360px;\n  position: absolute;\n  padding: 20px;\n  top: 0;\n  left: 0;\n  border: 3px solid white;\n  color: white;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: none;\n  background: rgba(23, 20, 34, 0.73);\n  border-radius: 360px;\n  display: block;\n  transition: all 0.3s ease-in;\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  padding: 20px;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  &:hover {\n    border: 3px solid white;\n    color: white;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 128px;\n  position: relative;\n  padding-bottom: 100%;\n  background-size: cover;\n  overflow: hidden;\n  border-radius: 360px;\n  img {\n    border-radius: 360px;\n    border: 3px solid white;\n    box-sizing: border-box;\n    width: 100%;\n    height: 128px;\n  }\n  &:hover {\n    button {\n      opacity: 1;\n    }\n  }\n  .upload-icon {\n    display: block;\n    margin: 0 auto 10px auto;\n    font-size: 1.6rem;\n    opacity: 0.7;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ImageProfileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var ButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject2());
var ImageProfileLoader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var LoaderText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject4());

/***/ }),

/***/ "./src/components/ImageProfile/index.js":
/*!**********************************************!*\
  !*** ./src/components/ImageProfile/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-profile.component */ "./src/components/ImageProfile/image-profile.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_image_profile_component__WEBPACK_IMPORTED_MODULE_0__["ImageProfile"]);

/***/ }),

/***/ "./src/components/NavBar/children/HamburgerButton/hamburger.component.js":
/*!*******************************************************************************!*\
  !*** ./src/components/NavBar/children/HamburgerButton/hamburger.component.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/NavBar/children/HamburgerButton/hamburger.component.js";


var HamburgerButton = function HamburgerButton(_ref) {
  var toggleMobileMenu = _ref.toggleMobileMenu;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobile-navigation__toggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: toggleMobileMenu,
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/bars-nav.svg",
    alt: "Icon Menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HamburgerButton);

/***/ }),

/***/ "./src/components/NavBar/children/HamburgerButton/index.js":
/*!*****************************************************************!*\
  !*** ./src/components/NavBar/children/HamburgerButton/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hamburger_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburger.component */ "./src/components/NavBar/children/HamburgerButton/hamburger.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_hamburger_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/NavBar/children/MobileNavigation/index.js":
/*!******************************************************************!*\
  !*** ./src/components/NavBar/children/MobileNavigation/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mobile_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile.navigation.component */ "./src/components/NavBar/children/MobileNavigation/mobile.navigation.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_mobile_navigation_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/NavBar/children/MobileNavigation/mobile.navigation.component.js":
/*!****************************************************************************************!*\
  !*** ./src/components/NavBar/children/MobileNavigation/mobile.navigation.component.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utils */ "./src/components/Utils/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _mobile_navigation_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile.navigation.style */ "./src/components/NavBar/children/MobileNavigation/mobile.navigation.style.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/NavBar/children/MobileNavigation/mobile.navigation.component.js";






var MobileNavigation = function MobileNavigation(_ref) {
  var children = _ref.children,
      toggleMobileMenu = _ref.toggleMobileMenu,
      isOpenMobile = _ref.isOpenMobile,
      t = _ref.t,
      i18n = _ref.i18n;
  var isActive = isOpenMobile ? 'active slideLeft' : 'hidden';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "mobile-navigation-panel ".concat(isActive),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobile-navigation-panel__wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mobile_navigation_style__WEBPACK_IMPORTED_MODULE_4__["TopNavigation"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils__WEBPACK_IMPORTED_MODULE_1__["LanguageDropdown"], Object.assign({
    t: t,
    i18n: i18n
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "close-panel__toggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: toggleMobileMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    className: "icon",
    icon: "times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })))), children));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])()(MobileNavigation));

/***/ }),

/***/ "./src/components/NavBar/children/MobileNavigation/mobile.navigation.style.js":
/*!************************************************************************************!*\
  !*** ./src/components/NavBar/children/MobileNavigation/mobile.navigation.style.js ***!
  \************************************************************************************/
/*! exports provided: TopNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavigation", function() { return TopNavigation; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  margin: 15.5px 0;\n\n  div:first-child {\n    grid-column: 1 / 3;\n  }\n\n  button {\n    margin: 0;\n  }\n\n  .close-panel__toggle {\n    text-align: right;\n    padding-right: 20px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var TopNavigation = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ }),

/***/ "./src/components/NavBar/children/Navigation/index.js":
/*!************************************************************!*\
  !*** ./src/components/NavBar/children/Navigation/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.component */ "./src/components/NavBar/children/Navigation/navigation.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_navigation_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/NavBar/children/Navigation/navigation.component.js":
/*!***************************************************************************!*\
  !*** ./src/components/NavBar/children/Navigation/navigation.component.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/NavBar/children/Navigation/navigation.component.js";



var Navigation = function Navigation(_ref) {
  var navigation = _ref.navigation;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    role: "navigation",
    className: "nav nav__primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, navigation && navigation.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: item.id,
      "data-testid": "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: item.to,
      activeClassName: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.icon,
      alt: item.id,
      className: "nav-icon",
      width: "24px",
      height: "20px",
      style: {
        width: '24px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, item.label)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./src/components/NavBar/children/Toolbar/index.js":
/*!*********************************************************!*\
  !*** ./src/components/NavBar/children/Toolbar/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar.component */ "./src/components/NavBar/children/Toolbar/toolbar.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_toolbar_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/NavBar/children/Toolbar/toolbar.component.js":
/*!*********************************************************************!*\
  !*** ./src/components/NavBar/children/Toolbar/toolbar.component.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/NavBar/children/Toolbar/toolbar.component.js";


/**
 * Checks if the components needs to rerender or not based on inbox changes
 * @param {Object} prevProps Previous props object
 * @param {Object} nextProps Next props object
 */
var areEqual = function areEqual(prevProps, nextProps) {
  var prevInbox = prevProps && prevProps.toolbar.length > 1 && prevProps.toolbar[1].component().props.inbox;
  var nextInbox = nextProps && nextProps.toolbar.length > 1 && nextProps.toolbar[1].component().props.inbox;

  if (prevInbox && prevInbox.length !== nextInbox && nextInbox.length) {
    return false;
  }

  if (prevProps.open !== nextProps.open) {
    return false;
  }

  return true;
};

var Toolbar = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var toolbar = _ref.toolbar,
      open = _ref.open,
      customClass = _ref.customClass;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "nav nav__toolbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, toolbar && toolbar.map(function (_ref2, i) {
    var Component = _ref2.component,
        props = _ref2.props;
    return (// eslint-disable-next-line react/no-array-index-key
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: i,
        "data-testid": "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, props, {
        open: open,
        customClass: customClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })))
    );
  })));
}, areEqual);
/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./src/components/NavBar/children/index.js":
/*!*************************************************!*\
  !*** ./src/components/NavBar/children/index.js ***!
  \*************************************************/
/*! exports provided: Toolbar, Navigation, HamburgerButton, MobileNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toolbar */ "./src/components/NavBar/children/Toolbar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return _Toolbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation */ "./src/components/NavBar/children/Navigation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _Navigation__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _HamburgerButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HamburgerButton */ "./src/components/NavBar/children/HamburgerButton/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HamburgerButton", function() { return _HamburgerButton__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _MobileNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileNavigation */ "./src/components/NavBar/children/MobileNavigation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileNavigation", function() { return _MobileNavigation__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./src/components/NavBar/index.js":
/*!****************************************!*\
  !*** ./src/components/NavBar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar.component */ "./src/components/NavBar/nav-bar.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/NavBar/nav-bar.component.js":
/*!****************************************************!*\
  !*** ./src/components/NavBar/nav-bar.component.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./children */ "./src/components/NavBar/children/index.js");

var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/NavBar/nav-bar.component.js";




var NavBar = function NavBar(props) {
  var navigation = props.navigation,
      toolbar = props.toolbar,
      sticky = props.sticky,
      t = props.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isOpenMobile = _useState2[0],
      setOpenMobile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      profileOptions = _useState4[0],
      setProfileOption = _useState4[1];

  var componentElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();

  var setNavFixed = function setNavFixed() {
    if (componentElement) {
      var navHeight = componentElement.clientHeight;
      var content = document.getElementsByClassName('contentApp');

      if (content.length > 0) {
        content[0].style['padding-top'] = "".concat(navHeight, "px");
      }
    }
  };

  var onComponentResize = function onComponentResize() {
    setNavFixed();
    window.addEventListener('resize', function () {
      setNavFixed();

      if (window.innerWidth >= 1024 && isOpenMobile) {
        setOpenMobile(false);
      }
    });
  };

  var getUserProfileOptions = function getUserProfileOptions() {
    var profile = toolbar ? toolbar.filter(function (bar) {
      return bar.id !== 'language';
    }) : [];
    setProfileOption(profile);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (sticky) {
      onComponentResize();
    }

    getUserProfileOptions();
  }, [props, isOpenMobile]);

  var toggleMobileMenu = function toggleMobileMenu() {
    setOpenMobile(!isOpenMobile);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    role: "navigation",
    className: "header header__desktop fixed",
    ref: componentElement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "header-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logo-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/welcome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/img/viade.png",
    alt: "inrupt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))), isOpenMobile ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_children__WEBPACK_IMPORTED_MODULE_3__["MobileNavigation"], {
    navigation: navigation,
    toolbar: toolbar,
    isOpenMobile: isOpenMobile,
    toggleMobileMenu: toggleMobileMenu,
    t: t,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_children__WEBPACK_IMPORTED_MODULE_3__["Navigation"], {
    navigation: navigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_children__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
    toolbar: profileOptions,
    open: true,
    customClass: "profile-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, navigation && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_children__WEBPACK_IMPORTED_MODULE_3__["Navigation"], {
    navigation: navigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), toolbar && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_children__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
    toolbar: toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_children__WEBPACK_IMPORTED_MODULE_3__["HamburgerButton"], {
    toggleMobileMenu: toggleMobileMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })));
};

NavBar.defaultProps = {
  sticky: true
};
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/Notifications/children/Bell/bell.component.js":
/*!**********************************************************************!*\
  !*** ./src/components/Notifications/children/Bell/bell.component.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utils */ "./src/components/Utils/index.js");
/* harmony import */ var _bell_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bell.style */ "./src/components/Notifications/children/Bell/bell.style.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Notifications/children/Bell/bell.component.js";




/**
 * Bell Icon to be seen in the navbar for notifications
 */
var Bell = function Bell(_ref) {
  var unread = _ref.unread,
      onClick = _ref.onClick,
      active = _ref.active;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bell_style__WEBPACK_IMPORTED_MODULE_2__["BellIcon"], {
    className: "bell-icon ".concat(active ? 'active' : ''),
    onClick: onClick,
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, unread > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    badge: unread,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/icon/notification.svg",
    alt: "notifications",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Bell);

/***/ }),

/***/ "./src/components/Notifications/children/Bell/bell.style.js":
/*!******************************************************************!*\
  !*** ./src/components/Notifications/children/Bell/bell.style.js ***!
  \******************************************************************/
/*! exports provided: BellIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BellIcon", function() { return BellIcon; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border-radius: 0;\n\n  &:active,\n  &:focus,\n  &:hover,\n  &.active {\n    background: linear-gradient(\n      to right,\n      rgba(124, 77, 255, 0.25) 0%,\n      rgba(83, 97, 253, 0.25) 51.88%,\n      rgba(55, 203, 239, 0.25) 100%\n    );\n    outline: none;\n  }\n\n  .icon {\n    width: 18px;\n    height: 18px;\n    position: relative;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var BellIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject());

/***/ }),

/***/ "./src/components/Notifications/children/Bell/index.js":
/*!*************************************************************!*\
  !*** ./src/components/Notifications/children/Bell/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bell_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bell.component */ "./src/components/Notifications/children/Bell/bell.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_bell_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Notifications/children/Notifications/index.js":
/*!**********************************************************************!*\
  !*** ./src/components/Notifications/children/Notifications/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.component */ "./src/components/Notifications/children/Notifications/notifications.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_notifications_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Notifications/children/Notifications/notifications.component.js":
/*!****************************************************************************************!*\
  !*** ./src/components/Notifications/children/Notifications/notifications.component.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inrupt/solid-react-components */ "./node_modules/@inrupt/solid-react-components/build/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _notifications_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.style */ "./src/components/Notifications/children/Notifications/notifications.style.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../index */ "./src/components/Notifications/children/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks */ "./src/hooks/index.js");



var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Notifications/children/Notifications/notifications.component.js";






var oldTimestamp;

/**
 * Notification wrapper for the Bell Icon and the Notifications Panel
 */
var Notifications = function Notifications(_ref) {
  var webId = _ref.webId,
      inbox = _ref.inbox;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var toggleNotifications = function toggleNotifications() {
    return setIsOpen(!isOpen);
  };
  /**
   * Notification hook from solid-react-components
   */


  var _useNotification = Object(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_5__["useNotification"])(webId),
      notification = _useNotification.notification,
      markAsRead = _useNotification.markAsReadNotification,
      deleteNotification = _useNotification.deleteNotification,
      fetchNotification = _useNotification.fetchNotification,
      filterNotification = _useNotification.filterNotification;

  var _useLiveUpdate = Object(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_5__["useLiveUpdate"])(),
      timestamp = _useLiveUpdate.timestamp;

  var notifications = notification.notifications,
      unread = notification.unread,
      notify = notification.notify;
  /**
   * pass date to string to compare time updates
   * @type {*|string}
   */

  var currentTimestamp = timestamp && timestamp.toString();
  Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["useOnClickOutside"])(ref, function () {
    return setIsOpen(false);
  });
  /**
   * Fetch notifications from inbox
   * @returns {Promise<void>}
   */

  var initNotifications =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setIsLoading(true);
              _context.next = 4;
              return fetchNotification(inbox);

            case 4:
              setIsLoading(false);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              setIsLoading(false);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function initNotifications() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * If webId and notify instance exist we will init notifications, similar to componentDidMount
   */


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (webId && notify) {
      initNotifications();
    }
  }, [inbox, notify]);
  /**
   * Fetch new notifications when liveUpdate's timestamp changes, similar to componentWillUpdate
   */

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (currentTimestamp && oldTimestamp !== currentTimestamp) {
      initNotifications();
      oldTimestamp = currentTimestamp;
    }
  }, [timestamp]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_notifications_style__WEBPACK_IMPORTED_MODULE_6__["NotificationsWrapper"], {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_7__["Bell"], {
    unread: unread || 0,
    onClick: toggleNotifications,
    active: isOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_4__["CSSTransition"], {
    in: isOpen,
    timeout: 300,
    classNames: "notifications",
    unmountOnExit: true,
    mountOnEnter: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_7__["NotificationsPanel"], Object.assign({
    notifications: notifications,
    markAsRead: markAsRead,
    deleteNotification: deleteNotification,
    tabs: inbox,
    filterNotification: filterNotification,
    isLoading: isLoading
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Notifications);

/***/ }),

/***/ "./src/components/Notifications/children/Notifications/notifications.style.js":
/*!************************************************************************************!*\
  !*** ./src/components/Notifications/children/Notifications/notifications.style.js ***!
  \************************************************************************************/
/*! exports provided: NotificationsWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsWrapper", function() { return NotificationsWrapper; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils */ "./src/utils/index.js");


function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    width: 60px;\n    height: 100%;\n    left: inherit;\n    top: inherit;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  z-index: 3;\n  top: 17px;\n  left: 47px;\n\n  & .notifications-enter {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  & .notifications-enter-active {\n    opacity: 1;\n    transform: translateX(0);\n    transition: opacity 300ms, transform 300ms;\n  }\n  & .notifications-exit {\n    opacity: 1;\n  }\n  & .notifications-exit-active {\n    opacity: 0;\n    transform: scale(0.8);\n    transition: opacity 300ms, transform 300ms;\n  }\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var NotificationsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), _utils__WEBPACK_IMPORTED_MODULE_2__["media"].desktopSm(_templateObject2()));

/***/ }),

/***/ "./src/components/Notifications/children/NotificationsPanel/children/NotificationItem/index.js":
/*!*****************************************************************************************************!*\
  !*** ./src/components/Notifications/children/NotificationsPanel/children/NotificationItem/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-item.component */ "./src/components/Notifications/children/NotificationsPanel/children/NotificationItem/notification-item.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_notification_item_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Notifications/children/NotificationsPanel/children/NotificationItem/notification-item.component.js":
/*!***************************************************************************************************************************!*\
  !*** ./src/components/Notifications/children/NotificationsPanel/children/NotificationItem/notification-item.component.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _notification_item_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-item.style */ "./src/components/Notifications/children/NotificationsPanel/children/NotificationItem/notification-item.style.js");


var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Notifications/children/NotificationsPanel/children/NotificationItem/notification-item.component.js";





/**
 * Notification item to be shown for each notification in the notification list
 */
var NotificationItem = function NotificationItem(_ref) {
  var notification = _ref.notification,
      markAsRead = _ref.markAsRead,
      children = _ref.children,
      deleteNotification = _ref.deleteNotification;
  var read = notification.read;
  var currentRead = read ? JSON.parse(read) : false;
  var actor = notification.actor;
  /**
   * Redirect notification if it's coming with target
   * @type {Function}
   */

  var redirectTo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(
  /*#__PURE__*/
  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!notification.target) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return markAsRead(notification.path, notification.id);

          case 3:
            window.location = notification.target;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [notification]);
  /**
   * @TODO: send boolean to pod like boolean and not string
   */

  var opCurrentRead = !currentRead;
  var defaultImage = '/img/icon/empty-profile.svg';
  var actorImage = notification && notification.actor && notification.actor.image ? notification.actor.image : defaultImage;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_notification_item_style__WEBPACK_IMPORTED_MODULE_5__["Item"], {
    read: currentRead,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: notification.actor && notification.actor.webId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_notification_item_style__WEBPACK_IMPORTED_MODULE_5__["Img"], {
    src: actorImage,
    alt: "Creator",
    onError: function onError(e) {
      e.target.onerror = null;
      e.target.src = defaultImage;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_notification_item_style__WEBPACK_IMPORTED_MODULE_5__["Body"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_notification_item_style__WEBPACK_IMPORTED_MODULE_5__["Message"], {
    onClick: redirectTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, actor && actor.name), " ", notification.summary), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_notification_item_style__WEBPACK_IMPORTED_MODULE_5__["Meta"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "moment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, moment__WEBPACK_IMPORTED_MODULE_3___default()(notification.published).fromNow()), children)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_notification_item_style__WEBPACK_IMPORTED_MODULE_5__["MarkAsRead"], {
    type: "button",
    className: "delete",
    onClick: function onClick() {
      return markAsRead(notification.path, notification.id, opCurrentRead ? 'true' : 'false');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: currentRead ? 'eye-slash' : 'eye',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_notification_item_style__WEBPACK_IMPORTED_MODULE_5__["Delete"], {
    type: "button",
    className: "delete",
    onClick: function onClick() {
      return deleteNotification(notification.path);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: "times-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NotificationItem);

/***/ }),

/***/ "./src/components/Notifications/children/NotificationsPanel/children/NotificationItem/notification-item.style.js":
/*!***********************************************************************************************************************!*\
  !*** ./src/components/Notifications/children/NotificationsPanel/children/NotificationItem/notification-item.style.js ***!
  \***********************************************************************************************************************/
/*! exports provided: Item, Body, Message, Meta, MarkAsRead, Delete, Img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meta", function() { return Meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkAsRead", function() { return MarkAsRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject7() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: 30px;\n  border-radius: 60px;\n  height: 30px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: 3px;\n  right: 0;\n  border: 0;\n  padding: 0;\n  margin: 5px 7px;\n  color: #ffa600;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0;\n  padding: 0;\n  background: none;\n  outline: none;\n  border: none;\n  position: absolute;\n  right: 6px;\n  top: 54%;\n  transform: translateY(-50%);\n  &:active {\n    outline: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 4px;\n  & > .moment {\n    color: #89969f;\n    font-family: Raleway;\n    font-size: 11px;\n    font-weight: bold;\n    line-height: 14px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #374c5d;\n  font-family: Raleway;\n  font-size: 13px;\n  line-height: 14px;\n  & strong {\n    font-weight: 700;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 0 14px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border-bottom: 2px solid rgb(227, 231, 237);\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  padding: 12px;\n  align-items: center;\n  background: ", ";\n  position: relative;\n  min-height: 60px;\n\n  & > img {\n    width: 40px;\n    height: 40px;\n  }\n\n  .delete {\n    display: none;\n  }\n  &:hover {\n    .delete {\n      display: block;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Item = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li(_templateObject(), function (_ref) {
  var read = _ref.read;
  return read ? '#FFF' : 'rgb(245, 249, 254)';
});
var Body = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Message = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var Meta = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var MarkAsRead = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject5());
var Delete = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject6());
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject7());

/***/ }),

/***/ "./src/components/Notifications/children/NotificationsPanel/children/NotificationList/index.js":
/*!*****************************************************************************************************!*\
  !*** ./src/components/Notifications/children/NotificationsPanel/children/NotificationList/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-list.component */ "./src/components/Notifications/children/NotificationsPanel/children/NotificationList/notification-list.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_notification_list_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Notifications/children/NotificationsPanel/children/NotificationList/notification-list.component.js":
/*!***************************************************************************************************************************!*\
  !*** ./src/components/Notifications/children/NotificationsPanel/children/NotificationList/notification-list.component.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NotificationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NotificationItem */ "./src/components/Notifications/children/NotificationsPanel/children/NotificationItem/index.js");
/* harmony import */ var _notification_list_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-list.style */ "./src/components/Notifications/children/NotificationsPanel/children/NotificationList/notification-list.style.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Notifications/children/NotificationsPanel/children/NotificationList/notification-list.component.js";




/**
 * Show notification list
 * @param notifications
 * @param markAsRead
 * @param deleteNotification
 * @returns {*}
 * @constructor
 */
var NotificationList = function NotificationList(_ref) {
  var notifications = _ref.notifications,
      markAsRead = _ref.markAsRead,
      deleteNotification = _ref.deleteNotification;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, notifications && notifications.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_notification_list_style__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, notifications.map(function (notification) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotificationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: notification.id,
      notification: notification,
      markAsRead: markAsRead,
      deleteNotification: deleteNotification,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    });
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_notification_list_style__WEBPACK_IMPORTED_MODULE_2__["NoNotifications"], {
    className: "empty-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "No notifications to show"));
};

/* harmony default export */ __webpack_exports__["default"] = (NotificationList);

/***/ }),

/***/ "./src/components/Notifications/children/NotificationsPanel/children/NotificationList/notification-list.style.js":
/*!***********************************************************************************************************************!*\
  !*** ./src/components/Notifications/children/NotificationsPanel/children/NotificationList/notification-list.style.js ***!
  \***********************************************************************************************************************/
/*! exports provided: List, NoNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoNotifications", function() { return NoNotifications; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inherit;\n  margin: 20px;\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  overflow-y: auto;\n  max-height: 350px;\n  flex: 1 1 auto;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin: 0;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject());
var NoNotifications = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject2());

/***/ }),

/***/ "./src/components/Notifications/children/NotificationsPanel/children/Tabs/index.js":
/*!*****************************************************************************************!*\
  !*** ./src/components/Notifications/children/NotificationsPanel/children/Tabs/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component */ "./src/components/Notifications/children/NotificationsPanel/children/Tabs/tabs.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_tabs_component__WEBPACK_IMPORTED_MODULE_0__["Tabs"]);

/***/ }),

/***/ "./src/components/Notifications/children/NotificationsPanel/children/Tabs/tabs.component.js":
/*!**************************************************************************************************!*\
  !*** ./src/components/Notifications/children/NotificationsPanel/children/Tabs/tabs.component.js ***!
  \**************************************************************************************************/
/*! exports provided: Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tabs_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.styles */ "./src/components/Notifications/children/NotificationsPanel/children/Tabs/tabs.styles.js");



var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Notifications/children/NotificationsPanel/children/Tabs/tabs.component.js";



/**
 * Filter notificatons by inbox name (Global, Game)
 * @param list
 * @param click
 * @param activeName
 * @returns {*}
 * @constructor
 */
var Tabs = function Tabs(_ref) {
  var list = _ref.list,
      click = _ref.click,
      activeName = _ref.activeName;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];
  /**
   * Filter notification by inbox name
   * @type {Function}
   */


  var filterByName = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(name) {
      var currentName;
      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              currentName = active === name ? '' : name;
              setActive(currentName);
              _context.next = 4;
              return click(currentName);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [list, active]);
  /**
   * Set active inbox name on component mount
   */

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setActive(activeName);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tabs_styles__WEBPACK_IMPORTED_MODULE_4__["TabsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, list && list.map(function (tab) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tabs_styles__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
      key: tab.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      onClick: function onClick() {
        return filterByName(tab.inboxName);
      },
      type: "button",
      className: active === tab.inboxName ? 'active' : '',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, tab.inboxName));
  }));
};

/***/ }),

/***/ "./src/components/Notifications/children/NotificationsPanel/children/Tabs/tabs.styles.js":
/*!***********************************************************************************************!*\
  !*** ./src/components/Notifications/children/NotificationsPanel/children/Tabs/tabs.styles.js ***!
  \***********************************************************************************************/
/*! exports provided: TabsContainer, Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsContainer", function() { return TabsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  margin: 0 3px;\n  button {\n    padding: 10px;\n    border-bottom: none;\n    border-radius: 0;\n\n    &.active {\n      border-color: #5361fd;\n      background: #5361fd;\n\n      &:hover {\n        color: white;\n      }\n    }\n\n    &:hover {\n      border-color: #5361fd;\n      color: #5361fd;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 auto;\n  border-bottom: 1px solid #cfdce6;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var TabsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject());
var Tab = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li(_templateObject2());

/***/ }),

/***/ "./src/components/Notifications/children/NotificationsPanel/children/index.js":
/*!************************************************************************************!*\
  !*** ./src/components/Notifications/children/NotificationsPanel/children/index.js ***!
  \************************************************************************************/
/*! exports provided: NotificationItem, NotificationList, Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationItem */ "./src/components/Notifications/children/NotificationsPanel/children/NotificationItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationItem", function() { return _NotificationItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _NotificationList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationList */ "./src/components/Notifications/children/NotificationsPanel/children/NotificationList/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationList", function() { return _NotificationList__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabs */ "./src/components/Notifications/children/NotificationsPanel/children/Tabs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/components/Notifications/children/NotificationsPanel/index.js":
/*!***************************************************************************!*\
  !*** ./src/components/Notifications/children/NotificationsPanel/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notifications_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-panel.component */ "./src/components/Notifications/children/NotificationsPanel/notifications-panel.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_notifications_panel_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Notifications/children/NotificationsPanel/notifications-panel.component.js":
/*!***************************************************************************************************!*\
  !*** ./src/components/Notifications/children/NotificationsPanel/notifications-panel.component.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./children */ "./src/components/Notifications/children/NotificationsPanel/children/index.js");
/* harmony import */ var _notifications_panel_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications-panel.style */ "./src/components/Notifications/children/NotificationsPanel/notifications-panel.style.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utils */ "./src/components/Utils/index.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Notifications/children/NotificationsPanel/notifications-panel.component.js";





var NotificationsPanel = function NotificationsPanel(_ref) {
  var notifications = _ref.notifications,
      markAsRead = _ref.markAsRead,
      deleteNotification = _ref.deleteNotification,
      filterNotification = _ref.filterNotification,
      tabs = _ref.tabs,
      isLoading = _ref.isLoading;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_notifications_panel_style__WEBPACK_IMPORTED_MODULE_2__["Panel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_notifications_panel_style__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Notifications"), isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utils__WEBPACK_IMPORTED_MODULE_3__["Loader"], {
    absolute: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_children__WEBPACK_IMPORTED_MODULE_1__["Tabs"], Object.assign({
    list: tabs,
    click: filterNotification
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_children__WEBPACK_IMPORTED_MODULE_1__["NotificationList"], Object.assign({
    notifications: notifications,
    markAsRead: markAsRead,
    deleteNotification: deleteNotification
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (NotificationsPanel);

/***/ }),

/***/ "./src/components/Notifications/children/NotificationsPanel/notifications-panel.style.js":
/*!***********************************************************************************************!*\
  !*** ./src/components/Notifications/children/NotificationsPanel/notifications-panel.style.js ***!
  \***********************************************************************************************/
/*! exports provided: Panel, Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils */ "./src/utils/index.js");


function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 16px;\n  margin: 0;\n  text-transform: uppercase;\n  color: #5361fd;\n  font-family: Raleway;\n  font-size: 14px;\n  letter-spacing: 1.2px;\n  line-height: 14px;\n  flex: 0 0 50px;\n  box-sizing: border-box;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    right: 0;\n    min-width: 351px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  min-width: 340px;\n  min-height: 320px;\n  background: #ffffff;\n  box-sizing: border-box;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);\n  top: calc(100% + 2px);\n  right: -210px;\n  z-index: 99999;\n  border: solid 1px #cfdce6;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Panel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), _utils__WEBPACK_IMPORTED_MODULE_2__["media"].tablet(_templateObject2()));
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject3());

/***/ }),

/***/ "./src/components/Notifications/children/index.js":
/*!********************************************************!*\
  !*** ./src/components/Notifications/children/index.js ***!
  \********************************************************/
/*! exports provided: Bell, NotificationsPanel, Notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bell */ "./src/components/Notifications/children/Bell/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bell", function() { return _Bell__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _NotificationsPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationsPanel */ "./src/components/Notifications/children/NotificationsPanel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationsPanel", function() { return _NotificationsPanel__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notifications */ "./src/components/Notifications/children/Notifications/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notifications", function() { return _Notifications__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/components/Notifications/index.js":
/*!***********************************************!*\
  !*** ./src/components/Notifications/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.component */ "./src/components/Notifications/notifications.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_notifications_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Notifications/notifications.component.js":
/*!*****************************************************************!*\
  !*** ./src/components/Notifications/notifications.component.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inrupt/solid-react-components */ "./node_modules/@inrupt/solid-react-components/build/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./children */ "./src/components/Notifications/children/index.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Notifications/notifications.component.js";




/**
 * Notification container
 * @type {{compare, $$typeof, type}}
 */
var Notification = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var webId = _ref.webId,
      inbox = _ref.inbox;

  /**
   * get inbox path to subscribe on LiveUpdate component
   */
  var inboxUrl = inbox.map(function (item) {
    return item.path;
  });
  return inboxUrl ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_1__["LiveUpdate"], {
    subscribe: inboxUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_children__WEBPACK_IMPORTED_MODULE_2__["Notifications"], Object.assign({
    webId: webId,
    inbox: inbox
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))) : null;
});
/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./src/components/Ruta/point.js":
/*!**************************************!*\
  !*** ./src/components/Ruta/point.js ***!
  \**************************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");


var Point =
/*#__PURE__*/
function () {
  function Point(latitude, longitude, altitude) {
    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Point);

    this.latitude = latitude;
    this.longitude = longitude;
    this.altitude = altitude;
  }

  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Point, [{
    key: "getCoordinates",
    value: function getCoordinates() {
      return [this.latitude, this.longitude];
    }
  }]);

  return Point;
}();

/***/ }),

/***/ "./src/components/Ruta/ruta.js":
/*!*************************************!*\
  !*** ./src/components/Ruta/ruta.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ruta; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point.js */ "./src/components/Ruta/point.js");



var Ruta = function Ruta(file) {
  var _this = this;

  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Ruta);

  this.points = [];
  file.itinerary.itemListElement.map(function (p) {
    return _this.points.push(new _point_js__WEBPACK_IMPORTED_MODULE_1__["Point"](p.latitude, p.longitude, 0));
  });
  this.name = file.name;
  this.description = file.description;
};



/***/ }),

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

/***/ }),

/***/ "./src/components/Ruta/rutas/ruta1.json":
/*!**********************************************!*\
  !*** ./src/components/Ruta/rutas/ruta1.json ***!
  \**********************************************/
/*! exports provided: @context, @type, name, description, itinerary, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"@context\":\"http://schema.org\",\"@type\":\"Trip\",\"name\":\"A route 1\",\"description\":\"The test route with the least number of possible properties\",\"itinerary\":{\"@type\":\"ItemList\",\"numberOfItems\":6,\"itemListOrder\":\"http://schema.org/ItemListOrderDescending\",\"itemListElement\":[{\"@type\":\"GeoCoordinates\",\"latitude\":43.3551061,\"longitude\":-5.8512792},{\"@type\":\"GeoCoordinates\",\"latitude\":43.3547082,\"longitude\":-5.8507937},{\"@type\":\"GeoCoordinates\",\"latitude\":43.3545444,\"longitude\":-5.8494473},{\"@type\":\"GeoCoordinates\",\"latitude\":43.3546653,\"longitude\":-5.8490288},{\"@type\":\"GeoCoordinates\",\"latitude\":43.354872,\"longitude\":-5.8487445},{\"@type\":\"GeoCoordinates\",\"latitude\":43.3552699,\"longitude\":-5.8485675}]}}");

/***/ }),

/***/ "./src/components/Ruta/rutas/ruta2.json":
/*!**********************************************!*\
  !*** ./src/components/Ruta/rutas/ruta2.json ***!
  \**********************************************/
/*! exports provided: @context, @type, name, description, itinerary, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"@context\":\"http://schema.org\",\"@type\":\"Trip\",\"name\":\"A route 2\",\"description\":\"The test route with the least number of possible properties\",\"itinerary\":{\"@type\":\"ItemList\",\"numberOfItems\":6,\"itemListOrder\":\"http://schema.org/ItemListOrderDescending\",\"itemListElement\":[{\"@type\":\"GeoCoordinates\",\"latitude\":43.3551061,\"longitude\":-5.8512792},{\"@type\":\"GeoCoordinates\",\"latitude\":43.3547082,\"longitude\":-5.8507937},{\"@type\":\"GeoCoordinates\",\"latitude\":43.3545444,\"longitude\":-5.8494473},{\"@type\":\"GeoCoordinates\",\"latitude\":43.3546653,\"longitude\":-5.8490288},{\"@type\":\"GeoCoordinates\",\"latitude\":43.354872,\"longitude\":-5.8487445},{\"@type\":\"GeoCoordinates\",\"latitude\":43.3552699,\"longitude\":-5.8485675},{\"@type\":\"GeoCoordinates\",\"latitude\":43.35534545,\"longitude\":-5.848435345}]}}");

/***/ }),

/***/ "./src/components/Utils/Badge/badge.component.js":
/*!*******************************************************!*\
  !*** ./src/components/Utils/Badge/badge.component.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _badge_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badge.style */ "./src/components/Utils/Badge/badge.style.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Utils/Badge/badge.component.js";



var Badge = function Badge(_ref) {
  var badge = _ref.badge;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_badge_style__WEBPACK_IMPORTED_MODULE_1__["BadgeWrapper"], {
    className: "badgeWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, badge);
};

/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ }),

/***/ "./src/components/Utils/Badge/badge.style.js":
/*!***************************************************!*\
  !*** ./src/components/Utils/Badge/badge.style.js ***!
  \***************************************************/
/*! exports provided: BadgeWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeWrapper", function() { return BadgeWrapper; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: none;\n  background: #1ca9e5;\n  color: #ffffff;\n  font-size: 9px;\n  font-family: Raleway;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var BadgeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ }),

/***/ "./src/components/Utils/Badge/index.js":
/*!*********************************************!*\
  !*** ./src/components/Utils/Badge/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _badge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badge.component */ "./src/components/Utils/Badge/badge.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_badge_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Utils/CenterContainer/center-container.component.js":
/*!****************************************************************************!*\
  !*** ./src/components/Utils/CenterContainer/center-container.component.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _center_container_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./center-container.style */ "./src/components/Utils/CenterContainer/center-container.style.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Utils/CenterContainer/center-container.component.js";



var CenterContainer = function CenterContainer(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_center_container_style__WEBPACK_IMPORTED_MODULE_1__["CenterContainerWrapper"], {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (CenterContainer);

/***/ }),

/***/ "./src/components/Utils/CenterContainer/center-container.style.js":
/*!************************************************************************!*\
  !*** ./src/components/Utils/CenterContainer/center-container.style.js ***!
  \************************************************************************/
/*! exports provided: CenterContainerWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterContainerWrapper", function() { return CenterContainerWrapper; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n\n  h1 {\n    box-sizing: border-box;\n    padding: 0;\n    font-size: 28px;\n    color: rgb(40, 55, 82);\n    letter-spacing: 1.4px;\n    line-height: 40px;\n    text-align: center;\n    margin: 40px 0;\n    font-weight: bold;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var CenterContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject());

/***/ }),

/***/ "./src/components/Utils/CenterContainer/index.js":
/*!*******************************************************!*\
  !*** ./src/components/Utils/CenterContainer/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _center_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./center-container.component */ "./src/components/Utils/CenterContainer/center-container.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_center_container_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Utils/ConfirmationDialog/confirmation-dialog.component.js":
/*!**********************************************************************************!*\
  !*** ./src/components/Utils/ConfirmationDialog/confirmation-dialog.component.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _confirmation_dialog_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmation-dialog.style */ "./src/components/Utils/ConfirmationDialog/confirmation-dialog.style.js");



var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Utils/ConfirmationDialog/confirmation-dialog.component.js";




/**
 * Check if we are running test to avoid issue with React Modal
 */
if (true) react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.setAppElement('#root');

var ConfirmationDialog = function ConfirmationDialog(_ref) {
  var onAccept = _ref.onAccept,
      onDecline = _ref.onDecline,
      options = _ref.options,
      parentSelector = _ref.parentSelector;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var message = options.message,
      MessageComponent = options.messageComponent,
      acceptText = options.acceptText,
      declineText = options.declineText;

  var Accept =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return onAccept();

            case 2:
              setIsOpen(false);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function Accept() {
      return _ref2.apply(this, arguments);
    };
  }();

  var Decline =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return onDecline();

            case 2:
              setIsOpen(false);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function Decline() {
      return _ref3.apply(this, arguments);
    };
  }();

  var getParent = function getParent() {
    return document.querySelector(parentSelector);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setIsOpen(true);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {
    isOpen: isOpen,
    ariaHideApp: false,
    parentSelector: getParent,
    overlayClassName: "modal-overlay",
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_confirmation_dialog_style__WEBPACK_IMPORTED_MODULE_5__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, MessageComponent ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MessageComponent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }) : message), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_confirmation_dialog_style__WEBPACK_IMPORTED_MODULE_5__["Actions"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_confirmation_dialog_style__WEBPACK_IMPORTED_MODULE_5__["DeclineBtn"], {
    type: "button",
    onClick: Decline,
    "data-testid": "declineButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, declineText || 'Decline'), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_confirmation_dialog_style__WEBPACK_IMPORTED_MODULE_5__["AcceptBtn"], {
    type: "button",
    onClick: Accept,
    "data-testid": "acceptButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, acceptText || 'Accept'))));
};

ConfirmationDialog.defaultProps = {
  parentSelector: '#root'
};
/* harmony default export */ __webpack_exports__["default"] = (ConfirmationDialog);

/***/ }),

/***/ "./src/components/Utils/ConfirmationDialog/confirmation-dialog.style.js":
/*!******************************************************************************!*\
  !*** ./src/components/Utils/ConfirmationDialog/confirmation-dialog.style.js ***!
  \******************************************************************************/
/*! exports provided: Content, Actions, Button, AcceptBtn, DeclineBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptBtn", function() { return AcceptBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclineBtn", function() { return DeclineBtn; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject5() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: rgb(239, 89, 80);\n  margin-right: 1em;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: rgb(44, 105, 164);\n  margin-left: 1em;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex: 1 0 auto;\n  color: #fff;\n  text-transform: uppercase;\n  border: none;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 0.7rem;\n  padding: 0.7em 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 2em 0;\n  display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n\n  & > div#modal-actions {\n    align-self: flex-end;\n    padding: 16px 0 0 0;\n    & button {\n      margin-left: 8px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Actions = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject3());
var AcceptBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Button)(_templateObject4());
var DeclineBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Button)(_templateObject5());

/***/ }),

/***/ "./src/components/Utils/ConfirmationDialog/index.js":
/*!**********************************************************!*\
  !*** ./src/components/Utils/ConfirmationDialog/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmation-dialog.component */ "./src/components/Utils/ConfirmationDialog/confirmation-dialog.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Utils/Dropdown/dropdown.component.js":
/*!*************************************************************!*\
  !*** ./src/components/Utils/Dropdown/dropdown.component.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_click_outside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-click-outside */ "./node_modules/react-click-outside/dist/index.js");
/* harmony import */ var react_click_outside__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_click_outside__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _dropdown_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropdown.style */ "./src/components/Utils/Dropdown/dropdown.style.js");





var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Utils/Dropdown/dropdown.component.js";





var Dropdown =
/*#__PURE__*/
function (_Component) {
  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Dropdown, _Component);

  function Dropdown(props) {
    var _this;

    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dropdown);

    _this = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Dropdown).call(this, props));

    _this.toggleOpen = function () {
      var open = _this.props.open;
      if (!open) _this.setState(function (prevProps) {
        return {
          open: !prevProps.open
        };
      });
    };

    _this.renderIcon = function (action) {
      return action.customIcon ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flag-icon flag-icon-".concat(action.icon),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
        icon: action.icon,
        className: "checked icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      });
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dropdown, [{
    key: "handleClickOutside",
    value: function handleClickOutside() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          actions = _this$props.actions,
          children = _this$props.children,
          className = _this$props.className,
          hover = _this$props.hover,
          openProp = _this$props.open;
      var open = this.state.open;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_dropdown_style__WEBPACK_IMPORTED_MODULE_8__["DropdownContainer"], {
        className: className,
        onClick: this.toggleOpen,
        onMouseEnter: hover ? this.toggleOpen : null,
        onMouseLeave: hover ? this.toggleOpen : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_dropdown_style__WEBPACK_IMPORTED_MODULE_8__["DropdownMain"], {
        onClick: this.toggleOpen,
        "data-testid": "dropdownMain",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, children), (open || openProp) && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_dropdown_style__WEBPACK_IMPORTED_MODULE_8__["DropdownItemContainer"], {
        className: "dropdownItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        "data-testid": "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, actions.map(function (action, i) {
        return (// eslint-disable-next-line react/no-array-index-key
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_dropdown_style__WEBPACK_IMPORTED_MODULE_8__["Item"], {
            key: i,
            className: "item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
            onClick: action.onClick,
            type: "button",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, action.icon && _this2.renderIcon(action), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, action.label)))
        );
      }))));
    }
  }]);

  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Dropdown.defaultProps = {
  hover: false
};
/* harmony default export */ __webpack_exports__["default"] = (react_click_outside__WEBPACK_IMPORTED_MODULE_7___default()(Dropdown));

/***/ }),

/***/ "./src/components/Utils/Dropdown/dropdown.style.js":
/*!*********************************************************!*\
  !*** ./src/components/Utils/Dropdown/dropdown.style.js ***!
  \*********************************************************/
/*! exports provided: DropdownContainer, DropdownMain, DropdownItemContainer, Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownContainer", function() { return DropdownContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMain", function() { return DropdownMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownItemContainer", function() { return DropdownItemContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");


function _templateObject6() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border-left: none;\n  border-top: 1px solid rgba(8, 53, 117, 0.1);\n  width: 100%;\n  background: #fff;\n  padding: 0;\n  text-align: left;\n  button {\n    background: #fff;\n    line-height: 2;\n    padding: 1rem;\n    text-align: left;\n    cursor: pointer;\n    width: 100%;\n    border: none;\n    border-radius: 0px;\n    &:hover {\n      background: linear-gradient(\n        to right,\n        rgba(124, 77, 255, 0.2) 0%,\n        rgba(24, 169, 230, 0.2) 50%,\n        rgba(1, 201, 234, 0.2) 100%\n      );\n      transition: all 0.5s ease-in-out;\n      color: #083575;\n    }\n  }\n  .flag-icon {\n    margin-right: 10px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: 100%;\n  right: 0;\n  z-index: 2;\n  ul {\n    display: flex;\n    position: relative;\n    min-width: 200px;\n    flex-direction: column;\n    right: 0;\n    height: auto;\n    background: #fff;\n    transition: all 0.25s ease-in-out;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n  }\n  .profile-list & {\n    position: relative;\n    top: 0;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["height: 100%;"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  border: none;\n  background: none;\n  width: 100%;\n  padding: 0 16px;\n  margin: 5px 0;\n  display: flex;\n  align-items: center;\n\n  &:focus {\n    outline: none;\n  }\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["display: none; path { display: none }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  height: auto;\n  width: 100%;\n  padding: 0 !important;\n\n  .icon {\n    margin-right: 5px;\n    font-size: 1rem;\n    color: #7c4dff;\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var DropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), _utils__WEBPACK_IMPORTED_MODULE_2__["media"].desktop(_templateObject2()));
var DropdownMain = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject3(), _utils__WEBPACK_IMPORTED_MODULE_2__["media"].desktop(_templateObject4()));
var DropdownItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5());
var Item = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li(_templateObject6());

/***/ }),

/***/ "./src/components/Utils/Dropdown/index.js":
/*!************************************************!*\
  !*** ./src/components/Utils/Dropdown/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.component */ "./src/components/Utils/Dropdown/dropdown.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_dropdown_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Utils/GradientBackground/gradient-background.component.js":
/*!**********************************************************************************!*\
  !*** ./src/components/Utils/GradientBackground/gradient-background.component.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gradient_background_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gradient-background.style */ "./src/components/Utils/GradientBackground/gradient-background.style.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Utils/GradientBackground/gradient-background.component.js";



var GradientBackground = function GradientBackground(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gradient_background_style__WEBPACK_IMPORTED_MODULE_1__["Gradient"], {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (GradientBackground);

/***/ }),

/***/ "./src/components/Utils/GradientBackground/gradient-background.style.js":
/*!******************************************************************************!*\
  !*** ./src/components/Utils/GradientBackground/gradient-background.style.js ***!
  \******************************************************************************/
/*! exports provided: Gradient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gradient", function() { return Gradient; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-image: linear-gradient(135deg, #7c4dff 0%, #18a9e6 50%, #01c9ea 100%);\n  background-repeat: no-repeat;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url('/img/background-pattern.svg');\n    filter: opacity(30%);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Gradient = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ }),

/***/ "./src/components/Utils/GradientBackground/index.js":
/*!**********************************************************!*\
  !*** ./src/components/Utils/GradientBackground/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gradient_background_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradient-background.component */ "./src/components/Utils/GradientBackground/gradient-background.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_gradient_background_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Utils/Input/index.js":
/*!*********************************************!*\
  !*** ./src/components/Utils/Input/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.component */ "./src/components/Utils/Input/input.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_input_component__WEBPACK_IMPORTED_MODULE_0__["Input"]);

/***/ }),

/***/ "./src/components/Utils/Input/input.component.js":
/*!*******************************************************!*\
  !*** ./src/components/Utils/Input/input.component.js ***!
  \*******************************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Utils/Input/input.component.js";

/* eslint-disable jsx-a11y/label-has-for */

/* eslint-disable jsx-a11y/label-has-associated-control */


var Input = function Input(_ref) {
  var icon = _ref.icon,
      rest = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["icon"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input wrap input-wrap--inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", Object.assign({}, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })));
};

/***/ }),

/***/ "./src/components/Utils/Labeled/index.js":
/*!***********************************************!*\
  !*** ./src/components/Utils/Labeled/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _labeled_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labeled.component */ "./src/components/Utils/Labeled/labeled.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_labeled_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Utils/Labeled/labeled.component.js":
/*!***********************************************************!*\
  !*** ./src/components/Utils/Labeled/labeled.component.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Utils/Labeled/labeled.component.js";

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    & > span.label {\n      position: absolute;\n      font-size: 10px;\n      bottom: 2px;\n      left: 0;\n      width: 100%;\n      text-align: center;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Labeled = function Labeled(_ref) {
  var label = _ref.label,
      children = _ref.children,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'button' : _ref$component,
      rest = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["label", "children", "component"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var LComponent = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(Component)(_templateObject());
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LComponent, Object.assign({}, rest, {
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), children, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, hover && label ? label : ''));
};

/* harmony default export */ __webpack_exports__["default"] = (Labeled);

/***/ }),

/***/ "./src/components/Utils/LanguageDropdown/index.js":
/*!********************************************************!*\
  !*** ./src/components/Utils/LanguageDropdown/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _language_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language-dropdown.component */ "./src/components/Utils/LanguageDropdown/language-dropdown.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_language_dropdown_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Utils/LanguageDropdown/language-dropdown.component.js":
/*!******************************************************************************!*\
  !*** ./src/components/Utils/LanguageDropdown/language-dropdown.component.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./.. */ "./src/components/Utils/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");





var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Utils/LanguageDropdown/language-dropdown.component.js";



var languages = {
  en: {
    id: 'en',
    icon: 'us'
  },
  es: {
    id: 'es',
    icon: 'es'
  },
  'en-US': {
    id: 'en-US',
    icon: 'us'
  }
};

var LanguageDropdown =
/*#__PURE__*/
function (_Component) {
  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LanguageDropdown, _Component);

  function LanguageDropdown() {
    var _this;

    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LanguageDropdown);

    _this = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LanguageDropdown).call(this));

    _this.getLanguage = function () {
      return localStorage.getItem('i18nextLng') || 'en';
    };

    _this.onLanguageSelect = function (nextLanguage) {
      var i18n = _this.props.i18n;
      react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].dismiss();
      i18n.changeLanguage(nextLanguage);

      _this.setState({
        language: _this.getLanguage()
      });
    };

    _this.state = {
      language: _this.getLanguage()
    };
    return _this;
  }

  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LanguageDropdown, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var t = this.props.t;
      var language = this.state.language;
      var profileOpts = [{
        label: t('navBar.languages.en'),
        onClick: function onClick() {
          return _this2.onLanguageSelect('en');
        },
        icon: 'us',
        customIcon: true
      }, {
        label: t('navBar.languages.es'),
        onClick: function onClick() {
          return _this2.onLanguageSelect('es');
        },
        icon: 'es',
        customIcon: true
      }];
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(___WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
        actions: profileOpts,
        hover: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flag-icon flag-icon-".concat(language && languages[language] ? languages[language].icon : 'us'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }));
    }
  }]);

  return LanguageDropdown;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LanguageDropdown);

/***/ }),

/***/ "./src/components/Utils/Loader/index.js":
/*!**********************************************!*\
  !*** ./src/components/Utils/Loader/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.component */ "./src/components/Utils/Loader/loader.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_loader_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Utils/Loader/loader.component.js":
/*!*********************************************************!*\
  !*** ./src/components/Utils/Loader/loader.component.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _loader_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader.style */ "./src/components/Utils/Loader/loader.style.js");





var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Utils/Loader/loader.component.js";



var Loader =
/*#__PURE__*/
function (_Component) {
  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Loader, _Component);

  function Loader() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Loader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Loader)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      show: false
    };

    _this.show = function () {
      return _this.setState({
        show: true
      });
    };

    return _this;
  }

  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Loader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var delay = this.props.delay;
      this.delayTimer = setTimeout(this.show, delay);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.delayTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var cubes = [{
        id: '0',
        value: 0.2
      }, {
        id: '1',
        value: 0.3
      }, {
        id: '2',
        value: 0.4
      }, {
        id: '3',
        value: 0.1
      }, {
        id: '4',
        value: 0.2
      }, {
        id: '5',
        value: 0.3
      }, {
        id: '6',
        value: 0
      }, {
        id: '7',
        value: 0.1
      }, {
        id: '8',
        value: 0.2
      }];
      var show = this.state.show;
      var absolute = this.props.absolute;
      return show && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_loader_style__WEBPACK_IMPORTED_MODULE_6__["LoaderWrapper"], {
        absolute: absolute,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_loader_style__WEBPACK_IMPORTED_MODULE_6__["CubeGrid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, cubes.map(function (_ref) {
        var id = _ref.id,
            value = _ref.value;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_loader_style__WEBPACK_IMPORTED_MODULE_6__["Cube"], {
          key: id,
          delay: value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        });
      })));
    }
  }]);

  return Loader;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Loader.defaultProps = {
  delay: 300,
  absolute: false
};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./src/components/Utils/Loader/loader.style.js":
/*!*****************************************************!*\
  !*** ./src/components/Utils/Loader/loader.style.js ***!
  \*****************************************************/
/*! exports provided: LoaderWrapper, CubeGrid, Cube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderWrapper", function() { return LoaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeGrid", function() { return CubeGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cube", function() { return Cube; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: #7c4dff;\n  animation: ", " 1.3s infinite ease-in-out;\n  animation-delay: ", "s;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 80px;\n  height: 80px;\n  margin: 100px auto;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: ", ";\n  z-index: 9999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(255, 255, 255, 0.6);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t0%,\n\t70%,\n\t100% {\n\t\ttransform: scale3D(1, 1, 1);\n\t}\n\n\t35% {\n\t\ttransform: scale3D(0, 0, 1);\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var cubeGridScaleDelay = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var LoaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2(), function (_ref) {
  var absolute = _ref.absolute;
  return absolute ? 'absolute' : 'fixed';
});
var CubeGrid = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var Cube = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject4(), cubeGridScaleDelay, function (_ref2) {
  var delay = _ref2.delay;
  return delay || 0;
});

/***/ }),

/***/ "./src/components/Utils/Panel/index.js":
/*!*********************************************!*\
  !*** ./src/components/Utils/Panel/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel.component */ "./src/components/Utils/Panel/panel.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_panel_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Utils/Panel/panel.component.js":
/*!*******************************************************!*\
  !*** ./src/components/Utils/Panel/panel.component.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _panel_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel.style */ "./src/components/Utils/Panel/panel.style.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Utils/Panel/panel.component.js";



var Panel = function Panel(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_panel_style__WEBPACK_IMPORTED_MODULE_1__["PanelWrapper"], {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Panel);

/***/ }),

/***/ "./src/components/Utils/Panel/panel.style.js":
/*!***************************************************!*\
  !*** ./src/components/Utils/Panel/panel.style.js ***!
  \***************************************************/
/*! exports provided: PanelWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelWrapper", function() { return PanelWrapper; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");


function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    min-width: 420px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  background: #ffffff;\n  border-radius: 4px;\n  box-sizing: border-box;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);\n  min-width: 310px;\n  min-height: 403px;\n  position: relative;\n  margin: auto;\n  padding: 40px;\n  text-align: center;\n\n  & > h1,\n  & > h2 {\n    padding: 0;\n    margin: 0;\n  }\n\n  @media screen and (max-width: 992px) {\n    width: auto;\n  }\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var PanelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), _utils__WEBPACK_IMPORTED_MODULE_2__["media"].tablet(_templateObject2()));

/***/ }),

/***/ "./src/components/Utils/Radiobutton/index.js":
/*!***************************************************!*\
  !*** ./src/components/Utils/Radiobutton/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio.component */ "./src/components/Utils/Radiobutton/radio.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_radio_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Utils/Radiobutton/radio.component.js":
/*!*************************************************************!*\
  !*** ./src/components/Utils/Radiobutton/radio.component.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Utils/Radiobutton/radio.component.js";


var RadioButton = function RadioButton(props) {
  var label = props.label,
      onChange = props.onChange,
      name = props.name,
      id = props.id,
      checked = props.checked,
      value = props.value;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "radio",
    htmlFor: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio",
    id: id,
    name: name,
    checked: checked,
    onChange: onChange,
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), label);
};

/* harmony default export */ __webpack_exports__["default"] = (RadioButton);

/***/ }),

/***/ "./src/components/Utils/Select/index.js":
/*!**********************************************!*\
  !*** ./src/components/Utils/Select/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.component */ "./src/components/Utils/Select/select.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_select_component__WEBPACK_IMPORTED_MODULE_0__["Select"]);

/***/ }),

/***/ "./src/components/Utils/Select/select.component.js":
/*!*********************************************************!*\
  !*** ./src/components/Utils/Select/select.component.js ***!
  \*********************************************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Utils/Select/select.component.js";

var Select = function Select(props) {
  var options = props.options,
      defaultValue = props.defaultValue,
      onChange = props.onChange,
      rest = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["options", "defaultValue", "onChange"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", Object.assign({
    value: defaultValue,
    onChange: onChange
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), options && options.map(function (option) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: option,
      key: option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, option);
  })));
};

/***/ }),

/***/ "./src/components/Utils/ToasterNotification/index.js":
/*!***********************************************************!*\
  !*** ./src/components/Utils/ToasterNotification/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toaster_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toaster.component */ "./src/components/Utils/ToasterNotification/toaster.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_toaster_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Utils/ToasterNotification/toaster.component.js":
/*!***********************************************************************!*\
  !*** ./src/components/Utils/ToasterNotification/toaster.component.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/components/Utils/ToasterNotification/toaster.component.js";

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  flex: 1 1 auto;\n\n  & > span {\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n\n  & > p {\n    margin: 0;\n    padding: 2px 0;\n    color: inherit;\n  }\n\n  a {\n    color: white;\n    display: block;\n    margin: 5px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Toastr = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var Toaster = function Toaster(props) {
  var title = props.title,
      content = props.content,
      link = props.link;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Toastr, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, content), link && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: link.href,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, link.label));
};

/* harmony default export */ __webpack_exports__["default"] = (Toaster);

/***/ }),

/***/ "./src/components/Utils/index.js":
/*!***************************************!*\
  !*** ./src/components/Utils/index.js ***!
  \***************************************/
/*! exports provided: GradientBackground, CenterContainer, ConfirmationDialog, ToasterNotification, Panel, Dropdown, RadioButton, Badge, Loader, Input, LanguageDropdown, Toaster, Select, Labeled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradientBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradientBackground */ "./src/components/Utils/GradientBackground/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GradientBackground", function() { return _GradientBackground__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _CenterContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CenterContainer */ "./src/components/Utils/CenterContainer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CenterContainer", function() { return _CenterContainer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Panel */ "./src/components/Utils/Panel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _Panel__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dropdown */ "./src/components/Utils/Dropdown/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _Dropdown__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Radiobutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Radiobutton */ "./src/components/Utils/Radiobutton/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return _Radiobutton__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Badge */ "./src/components/Utils/Badge/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return _Badge__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Loader */ "./src/components/Utils/Loader/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _Loader__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _ToasterNotification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ToasterNotification */ "./src/components/Utils/ToasterNotification/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToasterNotification", function() { return _ToasterNotification__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Input */ "./src/components/Utils/Input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _LanguageDropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LanguageDropdown */ "./src/components/Utils/LanguageDropdown/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LanguageDropdown", function() { return _LanguageDropdown__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _ToasterNotification_toaster_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ToasterNotification/toaster.component */ "./src/components/Utils/ToasterNotification/toaster.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toaster", function() { return _ToasterNotification_toaster_component__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Select */ "./src/components/Utils/Select/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _Select__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _ConfirmationDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ConfirmationDialog */ "./src/components/Utils/ConfirmationDialog/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialog", function() { return _ConfirmationDialog__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _Labeled__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Labeled */ "./src/components/Utils/Labeled/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Labeled", function() { return _Labeled__WEBPACK_IMPORTED_MODULE_13__["default"]; });

















/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: ErrorBoundary, GlobalError, NavBar, AuthNavBar, ImageProfile, Footer, Notification, AutoSaveSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorBoundary */ "./src/components/ErrorBoundary/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return _ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _GlobalError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalError */ "./src/components/GlobalError/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalError", function() { return _GlobalError__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar */ "./src/components/NavBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return _NavBar__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _AuthNavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthNavBar */ "./src/components/AuthNavBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthNavBar", function() { return _AuthNavBar__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ImageProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageProfile */ "./src/components/ImageProfile/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageProfile", function() { return _ImageProfile__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Notifications */ "./src/components/Notifications/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _Notifications__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _AutoSaveSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AutoSaveSpinner */ "./src/components/AutoSaveSpinner/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoSaveSpinner", function() { return _AutoSaveSpinner__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "./src/constants/converter-types.constant.js":
/*!***************************************************!*\
  !*** ./src/constants/converter-types.constant.js ***!
  \***************************************************/
/*! exports provided: ConverterTypes, ConverterTypesList, RendererTypesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterTypes", function() { return ConverterTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterTypesList", function() { return ConverterTypesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererTypesList", function() { return RendererTypesList; });
// A list of Converter types mapped to i18n keys
var ConverterTypes = {
  Shacl: 'shacl',
  ShaclExtension: 'shaclExtension',
  Shex: 'shex',
  ShexLayout: 'shexLayout',
  FormModel: 'formModel'
};
var ConverterTypesList = [ConverterTypes.Shacl, ConverterTypes.ShaclExtension, ConverterTypes.Shex, ConverterTypes.ShexLayout];
var RendererTypesList = [ConverterTypes.FormModel, ConverterTypes.Shacl, ConverterTypes.ShaclExtension, ConverterTypes.Shex, ConverterTypes.ShexLayout];

/***/ }),

/***/ "./src/constants/game-status.constant.js":
/*!***********************************************!*\
  !*** ./src/constants/game-status.constant.js ***!
  \***********************************************/
/*! exports provided: GameStatus, GameStatusList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStatus", function() { return GameStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStatusList", function() { return GameStatusList; });
/**
 * Object mapping of available game statuses to the display label
 */
var GameStatus = {
  ALL: 'All',
  INVITESENT: 'Invite Sent',
  MOVEO: 'Move O',
  MOVEX: 'Move X',
  DELETED: 'Deleted',
  DECLINED: 'Declined',
  RESIGNED: 'Resigned',
  FINISHED: 'Finished'
};
/**
 * Array of game status labels
 */

var GameStatusList = [GameStatus.ALL, GameStatus.INVITESENT, GameStatus.MOVEO, GameStatus.MOVEX, GameStatus.DECLINED, GameStatus.DELETED, GameStatus.RESIGNED, GameStatus.FINISHED];

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: GameStatus, GameStatusList, KnownInboxes, NavigationItems, ConverterTypesList, ConverterTypes, RendererTypesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_status_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-status.constant */ "./src/constants/game-status.constant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameStatus", function() { return _game_status_constant__WEBPACK_IMPORTED_MODULE_0__["GameStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameStatusList", function() { return _game_status_constant__WEBPACK_IMPORTED_MODULE_0__["GameStatusList"]; });

/* harmony import */ var _known_inboxes_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./known-inboxes.constant */ "./src/constants/known-inboxes.constant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownInboxes", function() { return _known_inboxes_constant__WEBPACK_IMPORTED_MODULE_1__["KnownInboxes"]; });

/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ "./src/constants/navigation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationItems", function() { return _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItems"]; });

/* harmony import */ var _converter_types_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./converter-types.constant */ "./src/constants/converter-types.constant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConverterTypesList", function() { return _converter_types_constant__WEBPACK_IMPORTED_MODULE_3__["ConverterTypesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConverterTypes", function() { return _converter_types_constant__WEBPACK_IMPORTED_MODULE_3__["ConverterTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RendererTypesList", function() { return _converter_types_constant__WEBPACK_IMPORTED_MODULE_3__["RendererTypesList"]; });







/***/ }),

/***/ "./src/constants/known-inboxes.constant.js":
/*!*************************************************!*\
  !*** ./src/constants/known-inboxes.constant.js ***!
  \*************************************************/
/*! exports provided: KnownInboxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnownInboxes", function() { return KnownInboxes; });
/**
 * Object mapping of known possible inboxes for the user
 */
var KnownInboxes = {
  GLOBAL: 'Global',
  GAME: 'Game'
};

/***/ }),

/***/ "./src/constants/navigation.js":
/*!*************************************!*\
  !*** ./src/constants/navigation.js ***!
  \*************************************/
/*! exports provided: NavigationItems, ProfileOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationItems", function() { return NavigationItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOptions", function() { return ProfileOptions; });
/**
 * Object mapping of known possible inboxes for the user
 */
var NavigationItems = [{
  id: 'welcome',
  icon: '/img/icon/apps.svg',
  label: 'navBar.welcome',
  to: '/welcome'
}, {
  id: 'profile',
  icon: '/img/people.svg',
  label: 'navBar.profile',
  to: '/profile'
}, {
  id: 'map',
  icon: '/img/icon/routes.png',
  label: 'navBar.routes',
  to: '/map'
}];
var ProfileOptions = [{
  label: 'navBar.profile',
  onClick: 'profileRedirect',
  icon: 'cog'
}, {
  label: 'navBar.formModelConvert',
  onClick: 'formModelConvertRedirect'
}, {
  label: 'navBar.formModelRender',
  onClick: 'formModelRenderRedirect'
}, {
  label: 'navBar.logOut',
  onClick: 'logOut',
  icon: 'lock'
}];

/***/ }),

/***/ "./src/containers/FormModel/Converter/converter.component.js":
/*!*******************************************************************!*\
  !*** ./src/containers/FormModel/Converter/converter.component.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Utils */ "./src/components/Utils/index.js");
/* harmony import */ var _inrupt_solid_sdk_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @inrupt/solid-sdk-forms */ "./node_modules/@inrupt/solid-sdk-forms/dist/solid-forms.es5.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants */ "./src/constants/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _shexjs_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shexjs/core */ "./node_modules/@shexjs/core/shex-core.js");
/* harmony import */ var _shexjs_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shexjs_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var shacl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shacl-js */ "./node_modules/shacl-js/shacl.js");
/* harmony import */ var shacl_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(shacl_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var n3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! n3 */ "./node_modules/n3/src/index.js");
/* harmony import */ var _form_model_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../form-model.style */ "./src/containers/FormModel/form-model.style.js");



var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/containers/FormModel/Converter/converter.component.js";










/**
 * Form Model Converter UI component, containing the styled components for the Form Model Converter
 * @param props
 */

var FormModelConverter = function FormModelConverter() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      schemaUrl = _useState2[0],
      setSchemaUrl = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState4 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      layoutUrl = _useState4[0],
      setLayoutUrl = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState6 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      formModel = _useState6[0],
      setFormModel = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(t('formLanguage.shex')),
      _useState8 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      selectedInput = _useState8[0],
      setSelectedInput = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(t('formLanguage.shexLayout')),
      _useState10 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      layoutText = _useState10[0],
      setLayoutText = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(t('formLanguage.shexShape')),
      _useState12 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState11, 2),
      shapeText = _useState12[0],
      setShapeText = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState14 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState13, 2),
      hasLayoutFile = _useState14[0],
      setHasLayoutFile = _useState14[1]; // Temporarily filtering out anything except ShEx as that's all that works currently


  var filteredOptions = _constants__WEBPACK_IMPORTED_MODULE_7__["ConverterTypesList"].filter(function (item) {
    return t("formLanguage.".concat(item)) === t('formLanguage.shex');
  });
  var optionsList = filteredOptions.map(function (item) {
    return t("formLanguage.".concat(item));
  });
  var Meta = {
    shexc: {
      prefixes: {},
      base: window.location.href
    },
    data: {
      prefixes: {},
      base: window.location.href
    },
    layout: {
      prefixes: {},
      base: window.location.href
    }
  }; // Temporary code for Shex Layout testing

  /* eslint-disable */
  // This is from Eric's code and is required for AnnotateSchema

  var F = n3__WEBPACK_IMPORTED_MODULE_11__["DataFactory"];
  var NS_Rdf = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#';
  var IRI_RdfType = NS_Rdf + 'type';
  var NS_Layout = 'http://janeirodigital.com/layout#';
  var TERM_RdfType = F.namedNode(IRI_RdfType);
  var TERM_LayoutType = F.namedNode(NS_Layout + 'Layout');
  var TERM_LayoutAnnotation = F.namedNode(NS_Layout + 'annotation');
  var TERM_LayoutPath = F.namedNode(NS_Layout + 'path');
  var TERM_LayoutRef = F.namedNode(NS_Layout + 'ref'); //TODO: This is Eric's code, and requires an update to shex.js with shexpath to work. Leaving for now

  var annotateSchema = function annotateSchema(schema, layout) {
    var newSchema = JSON.parse(JSON.stringify(schema)); // modify copy, not original.

    var index = _shexjs_core__WEBPACK_IMPORTED_MODULE_9__["Util"].index(newSchema); // update index to point at copy.

    var shexPath = _shexjs_core__WEBPACK_IMPORTED_MODULE_9__["Util"].shexPath(newSchema, Meta.shexc);
    layout.getQuads(null, TERM_RdfType, TERM_LayoutType).forEach(function (quad) {
      var annotated = layout.getQuads(quad.subject, TERM_LayoutAnnotation, null).map(function (t) {
        var elt = null;
        var quads = layout.getQuads(t.object, TERM_LayoutRef, null);

        if (quads.length) {
          if (!index) index = _shexjs_core__WEBPACK_IMPORTED_MODULE_9__["Util"].index(newSchema);
          var lookFor = quads[0].object.value;
          elt = index.shapeExprs[lookFor] || index.tripleExprs[lookFor];
        } else {
          var pathStr = layout.getQuads(t.object, TERM_LayoutPath, null)[0].object.value;
          elt = shexPath.search(pathStr)[0];
        }

        var newAnnots = layout.getQuads(t.object, null, null).filter(function (t) {
          return !t.predicate.equals(TERM_LayoutPath);
        }).map(function (t) {
          return {
            type: 'Annotation',
            predicate: t.predicate.value,
            object: RDFJStoJSONLD(t.object)
          };
        });
        elt.annotations = newAnnots; // @@ merge, overriding same predicate values?

        return elt;
      });
    });
    console.log(newSchema);
    return newSchema;
  };
  /* eslint-enable */

  /**
   * Helper function to detect if choice is ShEx or SHACL
   * @param value
   * @returns {boolean}
   */


  var isShEx = function isShEx(value) {
    return value === t("formLanguage.".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["ConverterTypes"].Shex)) || value === t("formLanguage.".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["ConverterTypes"].ShexLayout));
  };
  /**
   * Helper function to detect if choice has a layout or extension or not
   * @param value
   * @returns {boolean}
   */


  var hasLayout = function hasLayout(value) {
    return value === t("formLanguage.".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["ConverterTypes"].ShaclExtension)) || value === t("formLanguage.".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["ConverterTypes"].ShexLayout));
  };
  /**
   * Change event for the shape/schema URL field
   */


  var onSchemaChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    setSchemaUrl(e.target.value);
    setFormModel('');
  });
  /**
   * Change event for layout/extension URL field
   */

  var onLayoutChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    setLayoutUrl(e.target.value);
    setFormModel('');
  });
  /**
   * Use the form library to convert a shex shape to a form model and
   * set the response to output to a text area
   * @returns {Promise<void>}
   */

  var convertShex = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(
  /*#__PURE__*/
  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var formModel, schema, shexClass, newSchema, layout, response, formModelOutput;
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // This code may move to another function, to allow for layouts
            formModel = new _inrupt_solid_sdk_forms__WEBPACK_IMPORTED_MODULE_6__["FormModel"]();
            _context.next = 3;
            return formModel.parseSchema(schemaUrl);

          case 3:
            schema = _context.sent;

            if (!hasLayoutFile) {
              _context.next = 16;
              break;
            }

            _context.next = 7;
            return fetch(layoutUrl);

          case 7:
            response = _context.sent;
            _context.next = 10;
            return response.text();

          case 10:
            layout = _context.sent;
            newSchema = annotateSchema(schema, layout);
            shexClass = new _inrupt_solid_sdk_forms__WEBPACK_IMPORTED_MODULE_6__["ShexFormModel"](newSchema);
            console.log(newSchema); // eslint-disable-line no-console

            _context.next = 17;
            break;

          case 16:
            shexClass = new _inrupt_solid_sdk_forms__WEBPACK_IMPORTED_MODULE_6__["ShexFormModel"](schema);

          case 17:
            formModelOutput = shexClass.convert();
            setFormModel(formModelOutput);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  /**
   * Convert SHACL
   */

  var convertShacl =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var validator, response, shape, newResponse, data;
      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              validator = new shacl_js__WEBPACK_IMPORTED_MODULE_10___default.a();
              _context2.next = 3;
              return fetch('https://jmartin.inrupt.net/public/shapes/book-shacl.ttl');

            case 3:
              response = _context2.sent;
              _context2.next = 6;
              return response.text();

            case 6:
              shape = _context2.sent;
              _context2.next = 9;
              return fetch('https://jmartin.inrupt.net/public/books/book.ttl');

            case 9:
              newResponse = _context2.sent;
              _context2.next = 12;
              return newResponse.text();

            case 12:
              data = _context2.sent;
              // TODO: Currently this is just validating the shacl. This is where the converter code will be called once it is ready
              validator.validate(data, 'text/turtle', shape, 'text/turtle', function (e, report) {
                if (report.conforms() === false) {
                  var message = 'Error in ';
                  report.results().forEach(function (result) {
                    // TODO: Put this in a function to handle shacl errors
                    result.resultNode['http://www.w3.org/ns/shacl#resultPath'].forEach(function (m) {
                      message += "".concat(m['@id'], " ");
                    });
                    message += ' with the following errors: ';
                    result.resultNode['http://www.w3.org/ns/shacl#resultMessage'].forEach(function (n) {
                      message += "".concat(n['@value'], " \n");
                    });
                  }); // Reports out the errors

                  console.log(message); // eslint-disable-line no-console
                }
              });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function convertShacl() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Submit function for the form, to do the conversion and set up the output
   */


  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e) {
      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              _context3.prev = 1;
              _context3.t0 = selectedInput;
              _context3.next = _context3.t0 === t('formLanguage.shacl') ? 5 : _context3.t0 === t('formLanguage.shaclExtension') ? 8 : _context3.t0 === t('formLanguage.shex') ? 9 : _context3.t0 === t('formLanguage.shexLayout') ? 12 : 15;
              break;

            case 5:
              _context3.next = 7;
              return convertShacl();

            case 7:
              return _context3.abrupt("break", 17);

            case 8:
              return _context3.abrupt("break", 17);

            case 9:
              _context3.next = 11;
              return convertShex();

            case 11:
              return _context3.abrupt("break", 17);

            case 12:
              _context3.next = 14;
              return convertShex();

            case 14:
              return _context3.abrupt("break", 17);

            case 15:
              Object(_utils__WEBPACK_IMPORTED_MODULE_4__["errorToaster"])(t('notifications.unknownError'), t('notifications.error'));
              return _context3.abrupt("break", 17);

            case 17:
              _context3.next = 22;
              break;

            case 19:
              _context3.prev = 19;
              _context3.t1 = _context3["catch"](1);
              Object(_utils__WEBPACK_IMPORTED_MODULE_4__["errorToaster"])(_context3.t1.message, t('notifications.error'));

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 19]]);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }());
  /**
   * Copy the form model directly to the user's computer's clipboard
   */

  var copyToClipboard = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    navigator.clipboard.writeText(formModel);
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["successToaster"])(t('formLanguage.converter.copySuccess'), t('notifications.success'));
  });
  /**
   * Change event for the input list change, setting up the form conditions
   */

  var onListChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    var newValue = e.target.value; // Set the label for the label or extension field

    if (isShEx(newValue)) {
      setLayoutText(t('formLanguage.layout'));
      setShapeText(t('formLanguage.shexShape'));
    } else {
      setLayoutText(t('formLanguage.extension'));
      setShapeText(t('formLanguage.shaclShape'));
    } // Set boolean to disable or enable the layout/extension textbox


    setHasLayoutFile(hasLayout(newValue));
    setSelectedInput(newValue);
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_12__["FormModelContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_12__["FormWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_12__["Form"], {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, t('formLanguage.converter.title')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_12__["ConverterInput"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: "selected-filter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, t('formLanguage.input')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Utils__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    name: "selected-filter",
    id: "selected-filter",
    options: optionsList,
    onChange: onListChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_12__["ConverterInput"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: "converter-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, shapeText), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_12__["Input"], {
    type: "text",
    placeholder: "ShExC",
    name: "converter-input",
    id: "converter-input",
    onChange: onSchemaChange,
    value: schemaUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_12__["ConverterInput"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: "layout-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, layoutText), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_12__["Input"], {
    type: "text",
    placeholder: layoutText,
    onChange: onLayoutChange,
    disabled: !hasLayoutFile,
    value: layoutUrl,
    name: "layout-input",
    id: "layout-input",
    "data-testid": "layout-text-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    type: "submit",
    "data-testid": "convert-button",
    disabled: !(schemaUrl !== ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, t('formLanguage.converter.convert'))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_12__["Result"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_12__["ResultHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, t('formLanguage.formModel')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    type: "button",
    onClick: copyToClipboard,
    "data-testid": "copy-button",
    disabled: !formModel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, t('formLanguage.copyToClipboard'))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("textarea", {
    value: formModel,
    onChange: function onChange() {
      return formModel;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FormModelConverter);

/***/ }),

/***/ "./src/containers/FormModel/Converter/index.js":
/*!*****************************************************!*\
  !*** ./src/containers/FormModel/Converter/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _converter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converter.component */ "./src/containers/FormModel/Converter/converter.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_converter_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/containers/FormModel/Renderer/form-renderer.component.js":
/*!**********************************************************************!*\
  !*** ./src/containers/FormModel/Renderer/form-renderer.component.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @inrupt/solid-react-components */ "./node_modules/@inrupt/solid-react-components/build/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Utils */ "./src/components/Utils/index.js");
/* harmony import */ var _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solid/query-ldflex */ "@solid/query-ldflex");
/* harmony import */ var _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_solid_query_ldflex__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");
/* harmony import */ var _form_model_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../form-model.style */ "./src/containers/FormModel/form-model.style.js");
/* harmony import */ var _inrupt_solid_react_components_build_static_css_index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @inrupt/solid-react-components/build/static/css/index.css */ "./node_modules/@inrupt/solid-react-components/build/static/css/index.css");
/* harmony import */ var _inrupt_solid_react_components_build_static_css_index_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_react_components_build_static_css_index_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components */ "./src/components/index.js");




var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/containers/FormModel/Renderer/form-renderer.component.js";

/* eslint-disable no-console */










/**
 * Form Model Renderer UI component, containing the styled components for the Form Model Converter
 */

var FormModelRenderer = function FormModelRenderer() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(t('formLanguage.formModel')),
      _useState2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      selectedInput = _useState2[0],
      setSelectedInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState4 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      layoutUrl = _useState4[0],
      setLayoutUrl = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState6 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(t('formLanguage.extension')),
      _useState8 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
      layoutText = _useState8[0],
      setLayoutText = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(t('formLanguage.formModel')),
      _useState10 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState9, 2),
      shapeText = _useState10[0],
      setShapeText = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState12 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState11, 2),
      source = _useState12[0],
      setSource = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState14 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState13, 2),
      schemaUrl = _useState14[0],
      setSchemaUrl = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState16 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState15, 2),
      submitted = _useState16[0],
      setSubmitted = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState18 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState17, 2),
      hasLayoutFile = _useState18[0],
      setHasLayoutFile = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState20 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState19, 2),
      isViewMode = _useState20[0],
      setViewMode = _useState20[1];

  var filteredOptions = _constants__WEBPACK_IMPORTED_MODULE_9__["RendererTypesList"].filter(function (item) {
    return t("formLanguage.".concat(item)) === t('formLanguage.formModel');
  });
  var optionsList = filteredOptions.map(function (item) {
    return t("formLanguage.".concat(item));
  });
  /**
   * Helper function to detect if choice is ShEx
   * @param value
   * @returns {boolean}
   */

  var isShEx = function isShEx(value) {
    return value === t("formLanguage.".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ConverterTypes"].Shex)) || value === t("formLanguage.".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ConverterTypes"].ShexLayout));
  };
  /**
   * Helper function to detect if choice is SHACL
   * @param value
   * @returns {boolean}
   */


  var isShacl = function isShacl(value) {
    return value === t("formLanguage.".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ConverterTypes"].Shacl)) || value === t("formLanguage.".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ConverterTypes"].ShaclExtension));
  };
  /**
   * Helper function to detect if choice has a layout or extension or not
   * @param value
   * @returns {boolean}
   */


  var hasLayout = function hasLayout(value) {
    return value === t("formLanguage.".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ConverterTypes"].ShaclExtension)) || value === t("formLanguage.".concat(_constants__WEBPACK_IMPORTED_MODULE_9__["ConverterTypes"].ShexLayout));
  };
  /**
   * Change event for the shape/schema URL field
   */


  var onSchemaChange = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e) {
    setSchemaUrl(e.target.value);
  });
  /**
   * Change event for layout/extension URL field
   */

  var onLayoutChange = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e) {
    setLayoutUrl(e.target.value);
  });
  /**
   * Change event for the source
   */

  var onSourceChange = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e) {
    setSource(e.target.value);
  });
  /**
   * Submit function for the form, to do the conversion and set up the output
   * This function is for the view button
   * Clears the ldflex cache before submission
   * in case something changed in the pod and not on the generator side,
   * it will attempt to fetch the file again and not the cached one
   */

  function onSubmit(_x) {
    return _onSubmit.apply(this, arguments);
  }
  /**
   * Change event for the input list change, setting up the form conditions
   */


  function _onSubmit() {
    _onSubmit = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var obj;
      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_8___default.a.clearCache();
              _context.next = 4;
              return setSubmitted(null);

            case 4:
              obj = {};
              if (schemaUrl !== '') obj = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, obj, {
                schemaUrl: schemaUrl
              });
              if (source !== '') obj = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, obj, {
                source: source
              });
              setSubmitted(obj);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onSubmit.apply(this, arguments);
  }

  var onListChange = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e) {
    var newValue = e.target.value; // Set the label for the label or extension field

    if (isShEx(newValue)) {
      setLayoutText(t('formLanguage.layout'));
      setShapeText(t('formLanguage.shexShape'));
    } else if (isShacl(newValue)) {
      setLayoutText(t('formLanguage.extension'));
      setShapeText(t('formLanguage.shaclShape'));
    } else {
      setLayoutText(t('formLanguage.extension'));
      setShapeText(t('formLanguage.formModel'));
    } // Set boolean to disable or enable the layout/extension textbox


    setHasLayoutFile(hasLayout(newValue));
    setSelectedInput(newValue);
    console.log(selectedInput);
  });

  var _onError = function onError(e) {
    if (e.message.toString().indexOf('Validation failed') < 0) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_10__["errorToaster"])(t('formLanguage.renderer.formNotLoaded'), t('notifications.error'), {
        label: t('errorFormRender.link.label'),
        href: t('errorFormRender.link.href')
      });
      setIsLoading(false);
    }
  };

  var _onDelete = function onDelete() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_10__["successToaster"])(t('formLanguage.renderer.fieldDeleted'), t('notifications.success'));
  };

  var _onAddNewField = function onAddNewField() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_10__["successToaster"])(t('formLanguage.renderer.fieldAdded'), t('notifications.success'));
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_11__["FormModelContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_11__["FormWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_11__["Form"], {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, t('formLanguage.renderer.title')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_11__["ConverterInput"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "selected-filter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, t('formLanguage.input')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Utils__WEBPACK_IMPORTED_MODULE_7__["Select"], {
    name: "selected-filter",
    id: "selected-filter",
    options: optionsList,
    onChange: onListChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_11__["ConverterInput"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "converter-input-shape-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, shapeText), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_11__["Input"], {
    type: "text",
    placeholder: shapeText,
    name: "converter-input-shape-text",
    id: "converter-input-shape-text",
    onChange: onSchemaChange,
    value: schemaUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_11__["ConverterInput"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "layout-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, layoutText), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_11__["Input"], {
    type: "text",
    placeholder: layoutText,
    onChange: onLayoutChange,
    disabled: !hasLayoutFile,
    value: layoutUrl,
    name: "layout-input",
    id: "layout-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_11__["ConverterInput"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "converter-input-form-language",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, t('formLanguage.source')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_11__["Input"], {
    type: "text",
    placeholder: t('formLanguage.source'),
    name: "converter-input-form-language",
    id: "converter-input-form-language",
    onChange: onSourceChange,
    value: source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, t('formLanguage.renderer.submitBtn'))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_11__["Result"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_11__["ResultHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, t('formLanguage.formModel')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    type: "button",
    className: isViewMode ? 'active' : '',
    onClick: function onClick() {
      return setViewMode(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, t('formLanguage.renderer.viewBtn')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    type: "button",
    className: !isViewMode ? 'active' : '',
    onClick: function onClick() {
      return setViewMode(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, t('formLanguage.renderer.editBtn'))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_form_model_style__WEBPACK_IMPORTED_MODULE_11__["FormRenderContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, submitted !== null && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_6__["FormModel"], Object.assign({
    modelPath: submitted.schemaUrl,
    podPath: submitted && submitted.source || '',
    viewer: isViewMode,
    onInit: function onInit() {
      return setIsLoading(true);
    },
    onLoaded: function onLoaded() {
      return setIsLoading(false);
    },
    onSuccess: function onSuccess() {},
    onSave: function onSave() {},
    onError: function onError(error) {
      _onError(error);
    },
    onAddNewField: function onAddNewField(response) {
      return _onAddNewField(response);
    },
    onDelete: function onDelete(response) {
      return _onDelete(response);
    },
    settings: {
      theme: {
        inputText: 'input-wrap',
        inputCheckbox: 'sdk-checkbox checkbox',
        form: 'inrupt-sdk-form',
        childGroup: 'inrupt-form-group'
      },
      savingComponent: _components__WEBPACK_IMPORTED_MODULE_13__["AutoSaveSpinner"]
    }
  }, {
    autoSave: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  })))), isLoading && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Utils__WEBPACK_IMPORTED_MODULE_7__["Loader"], {
    absolute: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FormModelRenderer);

/***/ }),

/***/ "./src/containers/FormModel/Renderer/index.js":
/*!****************************************************!*\
  !*** ./src/containers/FormModel/Renderer/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_renderer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-renderer.component */ "./src/containers/FormModel/Renderer/form-renderer.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_form_renderer_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/containers/FormModel/form-model.style.js":
/*!******************************************************!*\
  !*** ./src/containers/FormModel/form-model.style.js ***!
  \******************************************************/
/*! exports provided: FormModelContainer, FormWrapper, Form, Input, Button, ResultHeader, Result, ConverterInput, FormRenderContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModelContainer", function() { return FormModelContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWrapper", function() { return FormWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultHeader", function() { return ResultHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterInput", function() { return ConverterInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRenderContainer", function() { return FormRenderContainer; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject9() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid #dae0e6;\n  min-height: 40px;\n  padding: 5px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-width: 100px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n\n  label,\n  select,\n  input {\n    display: flex;\n  }\n  select {\n    margin: 10px 0;\n    min-width: 100px;\n  }\n\n  label {\n    min-width: 120px;\n    margin-top: 16px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  & > textarea {\n    border: 1px solid #dae0e6;\n    box-sizing: border-box;\n    padding: 20px;\n    overflow: auto;\n    resize: none;\n    flex: 1 1 auto;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  flex: 0 1 auto;\n  padding: 8px 0;\n  & > div {\n    display: flex;\n    width: auto;\n    justify-content: space-around;\n    & > button {\n      box-sizing: border-box;\n      font-weight: 700;\n      font-height: 1.5rem;\n      padding: 8px 16px;\n      margin: 0 12px;\n      border: solid 1px #5361fd;\n      text-transform: uppercase;\n      color: #5361fd;\n      align-self: flex-end;\n    }\n  }\n  & > h4 {\n    margin: 0;\n    padding: 8px 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 20px;\n  &.active {\n    color: #fff;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 10px 0;\n  &:disabled {\n    background-color: #ddd;\n    cursor: not-allowed;\n    pointer-events: all;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  box-sizing: border-box;\n  & > h3 {\n    margin: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-repeat: repeat;\n  flex: 0 1 900px;\n  box-sizing: border-box;\n  justify-items: center;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);\n  padding: 20px;\n\n  .inrupt-form-group {\n    border: 1px solid #c0c0c0;\n    background-color: #f9f9f9;\n    margin: 15px 0;\n  }\n\n  .input-wrap {\n    margin: 0;\n  }\n\n  input {\n    margin-left: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: center;\n  background-image: url('/img/concentric-hex-pattern_2x.png');\n  background-repeat: repeat;\n  box-sizing: border-box;\n  padding: 25px;\n  flex: 0 1 auto;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var FormModelContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject());
var FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Form = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form(_templateObject3());
var Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input(_templateObject4());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject5());
var ResultHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6());
var Result = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject7());
var ConverterInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject8());
var FormRenderContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject9());

/***/ }),

/***/ "./src/containers/FormModel/index.js":
/*!*******************************************!*\
  !*** ./src/containers/FormModel/index.js ***!
  \*******************************************/
/*! exports provided: FormModelConverter, FormModelRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Converter */ "./src/containers/FormModel/Converter/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormModelConverter", function() { return _Converter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Renderer */ "./src/containers/FormModel/Renderer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormModelRenderer", function() { return _Renderer__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/containers/Login/login.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_login_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/containers/Login/login.component.js":
/*!*************************************************!*\
  !*** ./src/containers/Login/login.component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inrupt/solid-react-components */ "./node_modules/@inrupt/solid-react-components/build/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _login_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.style */ "./src/containers/Login/login.style.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Utils */ "./src/components/Utils/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/containers/Login/login.component.js";

/* eslint-disable constructor-super */








var LoginComponent = function LoginComponent() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_style__WEBPACK_IMPORTED_MODULE_4__["LoginWrapper"], {
    "data-testid": "login-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Utils__WEBPACK_IMPORTED_MODULE_5__["CenterContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    "data-testid": "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, t('login.title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_style__WEBPACK_IMPORTED_MODULE_4__["LoginPanel"], {
    className: "login-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_style__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    className: "panel-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "ids-link-filled ids-link-filled--primary",
    to: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, t('login.register')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://solid.inrupt.com/get-a-solid-pod",
    rel: "noopener noreferrer",
    target: "_blank",
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, t('login.solidHelp')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_style__WEBPACK_IMPORTED_MODULE_4__["LoginTitle"], {
    "data-testid": "login-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, t('login.loginTitle'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_3__["ProviderLogin"], {
    selectPlaceholder: t('login.selectPlaceholder'),
    inputPlaholder: t('login.inputPlaholder'),
    formButtonText: t('login.formButtonText'),
    btnTxtWebId: t('login.btnTxtWebId'),
    btnTxtProvider: t('login.btnTxtProvider'),
    className: "provider-login-component",
    callbackUri: "".concat(window.location.origin, "/welcome"),
    errorsText: {
      unknown: t('login.errors.unknown'),
      webIdNotValid: t('login.errors.webIdNotValid'),
      emptyProvider: t('login.errors.emptyProvider'),
      emptyWebId: t('login.errors.emptyWebId')
    },
    theme: {
      buttonLogin: 'ids-link',
      inputLogin: '',
      linkButton: ''
    },
    providers: _services__WEBPACK_IMPORTED_MODULE_6__["Provider"].getIdentityProviders(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginComponent);

/***/ }),

/***/ "./src/containers/Login/login.style.js":
/*!*********************************************!*\
  !*** ./src/containers/Login/login.style.js ***!
  \*********************************************/
/*! exports provided: LoginWrapper, LoginPanel, PanelBody, LoginTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginWrapper", function() { return LoginWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPanel", function() { return LoginPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelBody", function() { return PanelBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginTitle", function() { return LoginTitle; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Utils */ "./src/components/Utils/index.js");


function _templateObject4() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #656e75;\n  font-family: Raleway;\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: 1.2px;\n  line-height: 19px;\n  text-align: center;\n  position: relative;\n  margin: 30px 0;\n  display: inline-block;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &::before,\n  &::after {\n    width: 32%;\n    content: '';\n    background: #656e75;\n    height: 1px;\n    box-sizing: border-box;\n    top: 50%;\n  }\n\n  span {\n    padding: 0 5px;\n  }\n\n  &::before {\n    right: 0;\n  }\n\n  &::after {\n    left: 0;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  flex-direction: column;\n\n  .provider-login-component {\n    div[role='option'] {\n      text-align: left !important;\n      padding-left: 20px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  h1 {\n    color: #ffffff;\n  }\n  margin-top: 60px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var LoginWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Utils__WEBPACK_IMPORTED_MODULE_2__["GradientBackground"])(_templateObject());
var LoginPanel = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Utils__WEBPACK_IMPORTED_MODULE_2__["Panel"])(_templateObject2());
var PanelBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var LoginTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject4());

/***/ }),

/***/ "./src/containers/Map/index.js":
/*!*************************************!*\
  !*** ./src/containers/Map/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.component */ "./src/containers/Map/map.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_map_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/containers/Map/leaflet.css":
/*!****************************************!*\
  !*** ./src/containers/Map/leaflet.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./leaflet.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/Map/leaflet.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./leaflet.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/Map/leaflet.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./leaflet.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/Map/leaflet.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/containers/Map/map.component.js":
/*!*********************************************!*\
  !*** ./src/containers/Map/map.component.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _leaflet_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leaflet.css */ "./src/containers/Map/leaflet.css");
/* harmony import */ var _leaflet_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_leaflet_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/index.js");
/* harmony import */ var _components_Ruta_rutas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Ruta/rutas */ "./src/components/Ruta/rutas.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _map_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./map.style */ "./src/containers/Map/map.style.js");





var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/containers/Map/map.component.js";








delete leaflet__WEBPACK_IMPORTED_MODULE_6___default.a.Icon.Default.prototype._getIconUrl;
leaflet__WEBPACK_IMPORTED_MODULE_6___default.a.Icon.Default.mergeOptions({
  iconRetinaUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ "./node_modules/leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png"),
  shadowUrl: __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png")
});

var DownForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DownForm, _React$Component);

  function DownForm() {
    var _this;

    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DownForm);

    _this = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DownForm).call(this));
    _this.name = _components_Ruta_rutas__WEBPACK_IMPORTED_MODULE_10__["default"].getRutaByPosition(1).name;
    _this.description = _components_Ruta_rutas__WEBPACK_IMPORTED_MODULE_10__["default"].getRutaByPosition(1).description;
    return _this;
  }

  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DownForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_map_style__WEBPACK_IMPORTED_MODULE_12__["PStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, this.description);
    }
  }]);

  return DownForm;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var UpForm =
/*#__PURE__*/
function (_React$Component2) {
  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(UpForm, _React$Component2);

  function UpForm() {
    var _this2;

    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UpForm);

    _this2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UpForm).call(this));
    _this2.name = _components_Ruta_rutas__WEBPACK_IMPORTED_MODULE_10__["default"].getNames()[0];
    _this2.description = _components_Ruta_rutas__WEBPACK_IMPORTED_MODULE_10__["default"].getRutaByPosition(0).description;
    _this2.puntos = [];
    _components_Ruta_rutas__WEBPACK_IMPORTED_MODULE_10__["default"].getRutaByPosition(1).points.map(function (p) {
      return _this2.puntos.push(p.getCoordinates());
    });
    return _this2;
  }

  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UpForm, [{
    key: "changeName",
    value: function changeName(id, e) {
      var newRuta = _components_Ruta_rutas__WEBPACK_IMPORTED_MODULE_10__["default"].getRutaByName(id);
      document.getElementById("name").textContent = newRuta.name;
      alert(newRuta.description);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var position = this.puntos[0];
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_map_style__WEBPACK_IMPORTED_MODULE_12__["Up"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_map_style__WEBPACK_IMPORTED_MODULE_12__["MapaStyle"], {
        center: position,
        zoom: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_9__["TileLayer"], {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_9__["Polyline"], {
        color: 'blue',
        positions: this.puntos,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_9__["Marker"], {
        position: this.puntos[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_9__["Popup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Inicio")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_9__["Marker"], {
        position: this.puntos[this.puntos.length - 1],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_9__["Popup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Fin"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_map_style__WEBPACK_IMPORTED_MODULE_12__["Column"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_map_style__WEBPACK_IMPORTED_MODULE_12__["H2Format"], {
        id: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, this.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_map_style__WEBPACK_IMPORTED_MODULE_12__["PStyle"], {
        id: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, this.description), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_map_style__WEBPACK_IMPORTED_MODULE_12__["H3Format"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Tus rutas"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_map_style__WEBPACK_IMPORTED_MODULE_12__["UlStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, _components_Ruta_rutas__WEBPACK_IMPORTED_MODULE_10__["default"].getNames().map(function (n, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_map_style__WEBPACK_IMPORTED_MODULE_12__["LiStyle"], {
          key: i,
          onClick: function onClick(e) {
            return _this3.changeName(n, e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, " ", n, " ");
      }))));
    }
  }]);

  return UpForm;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var Mapa =
/*#__PURE__*/
function (_React$Component3) {
  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Mapa, _React$Component3);

  function Mapa() {
    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Mapa);

    return Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Mapa).apply(this, arguments));
  }

  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Mapa, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_map_style__WEBPACK_IMPORTED_MODULE_12__["MapSection"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(UpForm, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }));
    }
  }]);

  return Mapa;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Mapa);

/***/ }),

/***/ "./src/containers/Map/map.style.js":
/*!*****************************************!*\
  !*** ./src/containers/Map/map.style.js ***!
  \*****************************************/
/*! exports provided: MapSection, Column, Up, Down, H2Format, H3Format, MapaStyle, UlStyle, LiStyle, PStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapSection", function() { return MapSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Up", function() { return Up; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Down", function() { return Down; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2Format", function() { return H2Format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3Format", function() { return H3Format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaStyle", function() { return MapaStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UlStyle", function() { return UlStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiStyle", function() { return LiStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PStyle", function() { return PStyle; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/index.js");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__);


function _templateObject10() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nmargin:10%;\n  \n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        \n        margin:0px;\n        padding:3px;\n        max-width: 80%;\n        border:1px solid#CCCCCC;\n        text-align:center;\n        border-radius: 2px;\n        background: #DED8D0;\n        :hover {\n                cursor: pointer;\n                background: #B8B0A5;\n        }   \n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        margin-left:15%;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        width: 75% !important; \n        height: 60vh !important; \n        float: left;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      text-align:center;\n      font-size: 2rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      text-align:center;\n      font-size: 3rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        height: 40vh;      \n        float:down;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        height: 100vh;   \n        width: 100vw;\n        float:up;\n       \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        width: 25vw;\n        float:right;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex: 1 0 auto;\n  align-items: center;\n  justify-content: center;\n  background-image: url('/img/concentric-hex-pattern_2x.png');\n  background-repeat: repeat;\n  padding: 30px 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var MapSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject());
var Column = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Up = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var Down = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var H2Format = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject5());
var H3Format = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3(_templateObject6());
var MapaStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Map"])(_templateObject7());
var UlStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject8());
var LiStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li(_templateObject9());
var PStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject10());

/***/ }),

/***/ "./src/containers/PageNotFound/index.js":
/*!**********************************************!*\
  !*** ./src/containers/PageNotFound/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.component */ "./src/containers/PageNotFound/page-not-found.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/containers/PageNotFound/page-not-found.component.js":
/*!*****************************************************************!*\
  !*** ./src/containers/PageNotFound/page-not-found.component.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _page_not_found_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found.style */ "./src/containers/PageNotFound/page-not-found.style.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/containers/PageNotFound/page-not-found.component.js";

/* eslint-disable constructor-super */




/**
 * A React component page that is displayed when there's no valid route. Users can click the button
 * to get back to the home/welcome page.
 */

var PageNotFound = function PageNotFound() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
      t = _useTranslation.t;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_page_not_found_style__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_page_not_found_style__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/404.svg",
    alt: "404",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, t('notFound.title')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, t('notFound.content')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/",
    className: "ids-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, t('notFound.redirectButton')))));
};

/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ }),

/***/ "./src/containers/PageNotFound/page-not-found.style.js":
/*!*************************************************************!*\
  !*** ./src/containers/PageNotFound/page-not-found.style.js ***!
  \*************************************************************/
/*! exports provided: PageNotFoundWrapper, PageNotFoundContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundWrapper", function() { return PageNotFoundWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundContent", function() { return PageNotFoundContent; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: 54%;\n  margin: 100px 40px 0 50px;\n\n  @media only screen and (max-width: 900px) {\n    max-width: 100%;\n    margin: 20px 40px;\n    text-align: center;\n  }\n\n  @media only screen and (max-width: 600px) {\n    img {\n      width: 100%;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: row-reverse;\n  background-image: url('/img/spaceman.svg');\n  background-repeat: no-repeat;\n  background-position-x: -125px;\n  background-position-y: 100px;\n  height: 100%;\n\n  @media only screen and (max-width: 900px) {\n    background-image: url('/img/spaceman-mobile.svg');\n    background-position: left -80px bottom -10px;\n    background-size: 70%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/**
 * A styled-component for the 404 Page layout
 */

var PageNotFoundWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject());
/**
 * A styled-component for the 404 Page content section
 */

var PageNotFoundContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());

/***/ }),

/***/ "./src/containers/Profile/components/Image/image.component.js":
/*!********************************************************************!*\
  !*** ./src/containers/Profile/components/Image/image.component.js ***!
  \********************************************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solid/query-ldflex */ "@solid/query-ldflex");
/* harmony import */ var _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_solid_query_ldflex__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @inrupt/solid-react-components */ "./node_modules/@inrupt/solid-react-components/build/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _rdfjs_data_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rdfjs/data-model */ "./node_modules/@rdfjs/data-model/index.js");
/* harmony import */ var _rdfjs_data_model__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_rdfjs_data_model__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components */ "./src/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utils */ "./src/utils/index.js");




var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/containers/Profile/components/Image/image.component.js";







var Image = function Image(_ref) {
  var webId = _ref.webId,
      defaultProfilePhoto = _ref.defaultProfilePhoto;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  var latestUpdate = Object(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_6__["useLiveUpdate"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t;
  /**
   * Fetch profile photo from card
   */


  var fetchPhoto =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var user, _image;

      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!webId) {
                _context.next = 7;
                break;
              }

              // We are fetching profile card document
              user = _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_5___default.a.user;
              /**
               * We access to document node using a node name
               * hasPhoto is a new context that ldflex doesn't having
               * we need to add it manually.
               * if you want to know more about context please go to:
               * https://github.com/digitalbazaar/jsonld.js
               */

              _context.next = 5;
              return user.vcard_hasPhoto;

            case 5:
              _image = _context.sent;
              setImage(_image && _image.value);

            case 7:
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              Object(_utils__WEBPACK_IMPORTED_MODULE_10__["errorToaster"])(_context.t0.message, 'Error 500');

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function fetchPhoto() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetchPhoto();
  }, [webId, latestUpdate]);
  /**
   * updatedPhoto will update the photo url on vcard file
   * this function will check if user has image or hasPhoto node if not
   * will just update it, the idea is use image instead of hasPhoto
   * @params{String} uri photo url
   */

  var updatePhoto =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(uri) {
      var user;
      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              user = _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_5___default.a.user;
              _context2.next = 4;
              return user.vcard_hasPhoto.set(Object(_rdfjs_data_model__WEBPACK_IMPORTED_MODULE_8__["namedNode"])(uri));

            case 4:
              Object(_utils__WEBPACK_IMPORTED_MODULE_10__["successToaster"])(t('profile.uploadSuccess'), t('profile.successTitle'));
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              Object(_utils__WEBPACK_IMPORTED_MODULE_10__["errorToaster"])(_context2.t0.message, t('profile.errorTitle'));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function updatePhoto(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var limit = 2100000;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_6__["Uploader"], Object.assign({
    fileBase: webId && webId.split('/card')[0],
    limitFiles: 1,
    limitSize: limit,
    accept: 'png,jpeg,jpg',
    errorsText: {
      sizeLimit: t('profile.errors.sizeLimit', {
        limit: "".concat(limit / 1000000, "Mbs")
      }),
      unsupported: t('profile.errors.unsupported'),
      maximumFiles: t('profile.errors.maximumFiles')
    },
    onError: function onError(error) {
      if (error && error.statusText) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_10__["errorToaster"])(error.statusText, 'Error');
      }
    },
    onComplete: function onComplete(uploadedFiles) {
      updatePhoto(uploadedFiles[uploadedFiles.length - 1].uri);
    },
    render: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["ImageProfile"], Object.assign({}, Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        webId: webId,
        photo: image || defaultProfilePhoto,
        text: t('profile.upload'),
        uploadingText: t('profile.uploadingText')
      }), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }));
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }));
};

/***/ }),

/***/ "./src/containers/Profile/components/Image/index.js":
/*!**********************************************************!*\
  !*** ./src/containers/Profile/components/Image/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.component */ "./src/containers/Profile/components/Image/image.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_image_component__WEBPACK_IMPORTED_MODULE_0__["Image"]);

/***/ }),

/***/ "./src/containers/Profile/components/index.js":
/*!****************************************************!*\
  !*** ./src/containers/Profile/components/index.js ***!
  \****************************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ "./src/containers/Profile/components/Image/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/containers/Profile/index.js":
/*!*****************************************!*\
  !*** ./src/containers/Profile/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.container */ "./src/containers/Profile/profile.container.js");

/* harmony default export */ __webpack_exports__["default"] = (_profile_container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/containers/Profile/profile.container.js":
/*!*****************************************************!*\
  !*** ./src/containers/Profile/profile.container.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inrupt/solid-react-components */ "./node_modules/@inrupt/solid-react-components/build/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Utils */ "./src/components/Utils/index.js");
/* harmony import */ var _profile_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile.style */ "./src/containers/Profile/profile.style.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./src/containers/Profile/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");

var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/containers/Profile/profile.container.js";









var defaultProfilePhoto = '/img/icon/empty-profile.svg';
/**
 * We are using ldflex to fetch profile data from a solid pod.
 * ldflex libary is using json-LD for this reason you will see async calls
 * when we want to get a field value, why ? becuase they are expanded the data
 * this means the result will have a better format to read on Javascript.
 * for more information please go to: https://github.com/solid/query-ldflex
 */

var Profile = function Profile(_ref) {
  var webId = _ref.webId;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _onError = function onError(e) {
    if (e.message.toString().indexOf('Validation failed') < 0) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["errorToaster"])(t('formLanguage.renderer.formNotLoaded'), t('notifications.error'), {
        label: t('errorFormRender.link.label'),
        href: t('errorFormRender.link.href')
      });
      setIsLoading(false);
    }
  };

  var _onDelete = function onDelete() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["successToaster"])(t('formLanguage.renderer.fieldDeleted'), t('notifications.success'));
  };

  var _onAddNewField = function onAddNewField() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["successToaster"])(t('formLanguage.renderer.fieldAdded'), t('notifications.success'));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_profile_style__WEBPACK_IMPORTED_MODULE_7__["ProfileWrapper"], {
    "data-testid": "profile-component",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_profile_style__WEBPACK_IMPORTED_MODULE_7__["ProfileContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, webId && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_profile_style__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["Image"], Object.assign({
    webId: webId,
    defaultProfilePhoto: defaultProfilePhoto
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_profile_style__WEBPACK_IMPORTED_MODULE_7__["AutoSaveNotification"], {
    className: "banner-wrap--warning banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "banner-wrap__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "icon fa fa-exclamation-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), t('profile.autosaveNotification'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_profile_style__WEBPACK_IMPORTED_MODULE_7__["FormRenderContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_profile_style__WEBPACK_IMPORTED_MODULE_7__["WebId"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "id-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: webId,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, webId)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_4__["FormModel"], Object.assign({
    modelPath: 'https://solidsdk.inrupt.net/sdk/userprofile.ttl#formRoot',
    podPath: webId,
    viewer: false,
    onInit: function onInit() {
      return setIsLoading(true);
    },
    onLoaded: function onLoaded() {
      return setIsLoading(false);
    },
    onSuccess: function onSuccess() {},
    onSave: function onSave() {},
    onError: function onError(error) {
      _onError(error);
    },
    onAddNewField: function onAddNewField(response) {
      return _onAddNewField(response);
    },
    onDelete: function onDelete(response) {
      return _onDelete(response);
    },
    settings: {
      theme: {
        inputText: 'input-wrap',
        inputCheckbox: 'sdk-checkbox checkbox',
        form: 'inrupt-sdk-form',
        childGroup: 'inrupt-form-group'
      },
      savingComponent: _components__WEBPACK_IMPORTED_MODULE_9__["AutoSaveSpinner"]
    }
  }, {
    autoSave: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })))), isLoading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Utils__WEBPACK_IMPORTED_MODULE_6__["Loader"], {
    absolute: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/containers/Profile/profile.style.js":
/*!*************************************************!*\
  !*** ./src/containers/Profile/profile.style.js ***!
  \*************************************************/
/*! exports provided: ProfileWrapper, ProfileContainer, Header, WebId, AutoSaveNotification, FormRenderContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileWrapper", function() { return ProfileWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileContainer", function() { return ProfileContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebId", function() { return WebId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoSaveNotification", function() { return AutoSaveNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRenderContainer", function() { return FormRenderContainer; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject6() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid #dae0e6;\n  min-height: 40px;\n  padding: 5px;\n\n  .inrupt-form-group {\n    border: 1px solid #c0c0c0;\n    background-color: #f9f9f9;\n    margin: 15px 0;\n  }\n\n  .input-wrap {\n    margin: 0;\n  }\n\n  input {\n    margin-left: 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 0px !important;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 20px 40px 0px 40px;\n  position: relative;\n  &:after {\n    background-color: #d8d8d8;\n    display: block;\n    content: '';\n    height: 1px;\n    width: 100%;\n    margin: 25px 0 0 0;\n  }\n  a {\n    display: inline-block;\n    word-break: break-all;\n    margin-left: 10px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  background-image: url('/img/pattern-geo.png'),\n    linear-gradient(135deg, #7c4dff 0%, #18a9e6 50%, #01c9ea 100%);\n  background-repeat: repeat, no-repeat;\n  padding: 30px 20px;\n\n  .edit-button {\n    background: rgba(255, 255, 255, 0.1);\n    border: 2px solid white;\n    color: white;\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    font-size: 1rem;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);\n  background-color: white;\n  max-width: 900px;\n  margin: 0 20px;\n  width: 100%;\n  flex: 1 0 auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex: 1 0 auto;\n  align-items: center;\n  justify-content: center;\n  background-image: url('/img/concentric-hex-pattern_2x.png');\n  background-repeat: repeat;\n  padding: 60px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ProfileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject());
var ProfileContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var WebId = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var AutoSaveNotification = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject5());
var FormRenderContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6());

/***/ }),

/***/ "./src/containers/Register/children/ProviderItem/index.js":
/*!****************************************************************!*\
  !*** ./src/containers/Register/children/ProviderItem/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _provider_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider.item.component */ "./src/containers/Register/children/ProviderItem/provider.item.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_provider_item_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/containers/Register/children/ProviderItem/provider.item.component.js":
/*!**********************************************************************************!*\
  !*** ./src/containers/Register/children/ProviderItem/provider.item.component.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _provider_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider.style */ "./src/containers/Register/children/ProviderItem/provider.style.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/containers/Register/children/ProviderItem/provider.item.component.js";




var ProviderItem = function ProviderItem(_ref) {
  var data = _ref.data,
      onSelect = _ref.onSelect,
      radioName = _ref.radioName,
      id = _ref.id,
      checked = _ref.checked;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_provider_style__WEBPACK_IMPORTED_MODULE_2__["Item"], {
    "data-testid": "provider-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio",
    name: radioName,
    id: id,
    onChange: onSelect,
    value: data.registerLink,
    checked: checked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_provider_style__WEBPACK_IMPORTED_MODULE_2__["ProviderItemStyle"], {
    htmlFor: id,
    className: "provider-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: data.image,
    alt: data.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, data.label)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "check",
    className: "checked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProviderItem);

/***/ }),

/***/ "./src/containers/Register/children/ProviderItem/provider.style.js":
/*!*************************************************************************!*\
  !*** ./src/containers/Register/children/ProviderItem/provider.style.js ***!
  \*************************************************************************/
/*! exports provided: ProviderItemStyle, Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderItemStyle", function() { return ProviderItemStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  list-style: none;\n  padding: 10px 0;\n  margin: 0;\n\n  & input[type='radio'] {\n    display: none;\n\n    &:checked {\n      + ", " {\n        border-color: #5361fd;\n        color: #5361fd;\n\n        .checked {\n          display: block;\n          color: green;\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  border: solid 1.2px rgba(115, 127, 137, 1);\n  height: 40px;\n  margin-bottom: 20.5px;\n  box-sizing: border-box;\n  padding-left: 20px;\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n  transition: all 0.2s ease-in;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 8px;\n  border-radius: 4px;\n\n  .checked {\n    display: none;\n  }\n\n  &:hover {\n    border-color: #5361fd;\n    color: #5361fd;\n  }\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  .img-group {\n    display: flex;\n    align-items: center;\n\n    img {\n      width: 32px;\n      padding-right: 1em;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ProviderItemStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label(_templateObject());
var Item = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li(_templateObject2(), ProviderItemStyle);

/***/ }),

/***/ "./src/containers/Register/children/RegistrationSuccess/index.js":
/*!***********************************************************************!*\
  !*** ./src/containers/Register/children/RegistrationSuccess/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registration_success_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-success.component */ "./src/containers/Register/children/RegistrationSuccess/registration-success.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_registration_success_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/containers/Register/children/RegistrationSuccess/registration-success.component.js":
/*!************************************************************************************************!*\
  !*** ./src/containers/Register/children/RegistrationSuccess/registration-success.component.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/Utils */ "./src/components/Utils/index.js");
/* harmony import */ var _registration_success_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registration-success.style */ "./src/containers/Register/children/RegistrationSuccess/registration-success.style.js");







var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/containers/Register/children/RegistrationSuccess/registration-success.component.js";

 // import { NavBar } from "@components";



var RegistrationSuccess =
/*#__PURE__*/
function (_Component) {
  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RegistrationSuccess, _Component);

  function RegistrationSuccess(props) {
    var _this;

    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RegistrationSuccess);

    _this = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(RegistrationSuccess).call(this, props));
    _this.redirect =
    /*#__PURE__*/
    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var history;
      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              history = _this.props.history;
              _context.next = 3;
              return clearInterval(_this.interval);

            case 3:
              history.push('/login');

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.countDown = function () {
      var timeLeft = _this.state.timeLeft;
      if (timeLeft === 0) _this.redirect();

      _this.setState(function (prevState) {
        return {
          timeLeft: prevState.timeLeft - 1
        };
      });
    };

    _this.state = {
      timeLeft: 15
    };
    return _this;
  }

  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RegistrationSuccess, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.interval = setInterval(this.countDown, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      var _componentWillUnmount = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return clearInterval(this.interval);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillUnmount() {
        return _componentWillUnmount.apply(this, arguments);
      }

      return componentWillUnmount;
    }()
  }, {
    key: "render",
    value: function render() {
      var timeLeft = this.state.timeLeft;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_registration_success_style__WEBPACK_IMPORTED_MODULE_9__["RegistrationPage"], {
        className: "registration-success--page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Utils__WEBPACK_IMPORTED_MODULE_8__["CenterContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Success! Welcome to the decentralized web."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/img/rocket.svg",
        alt: "rocket",
        className: "rocket",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "We have emailed you more information about your new Solid Identity"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "We will redirect you to your POD in ", timeLeft, " seconds...")));
    }
  }]);

  return RegistrationSuccess;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RegistrationSuccess);

/***/ }),

/***/ "./src/containers/Register/children/RegistrationSuccess/registration-success.style.js":
/*!********************************************************************************************!*\
  !*** ./src/containers/Register/children/RegistrationSuccess/registration-success.style.js ***!
  \********************************************************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/Utils */ "./src/components/Utils/index.js");


function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n  margin-top: 40px;\n\n  h1 {\n    color: #ffffff;\n  }\n\n  span {\n    color: #ffffff;\n    font-family: Raleway;\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 20px;\n    text-align: center;\n    display: block;\n    padding: 1.5em 0;\n  }\n\n  .rocket {\n    width: 250px;\n    height: 250px;\n    text-align: center;\n    padding: 40px 0 40px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var RegistrationPage = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Utils__WEBPACK_IMPORTED_MODULE_2__["GradientBackground"])(_templateObject());

/***/ }),

/***/ "./src/containers/Register/children/index.js":
/*!***************************************************!*\
  !*** ./src/containers/Register/children/index.js ***!
  \***************************************************/
/*! exports provided: ProviderItem, RegistrationSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProviderItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProviderItem */ "./src/containers/Register/children/ProviderItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProviderItem", function() { return _ProviderItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _RegistrationSuccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrationSuccess */ "./src/containers/Register/children/RegistrationSuccess/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistrationSuccess", function() { return _RegistrationSuccess__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/containers/Register/index.js":
/*!******************************************!*\
  !*** ./src/containers/Register/index.js ***!
  \******************************************/
/*! exports provided: default, RegistrationSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.container */ "./src/containers/Register/register.container.js");
/* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./children */ "./src/containers/Register/children/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistrationSuccess", function() { return _children__WEBPACK_IMPORTED_MODULE_1__["RegistrationSuccess"]; });



/* harmony default export */ __webpack_exports__["default"] = (_register_container__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/containers/Register/register.component.js":
/*!*******************************************************!*\
  !*** ./src/containers/Register/register.component.js ***!
  \*******************************************************/
/*! exports provided: RegisterComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Utils */ "./src/components/Utils/index.js");
/* harmony import */ var _register_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register.style */ "./src/containers/Register/register.style.js");
/* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./children */ "./src/containers/Register/children/index.js");






var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/containers/Register/register.component.js";







var RegisterComponent =
/*#__PURE__*/
function (_Component) {
  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RegisterComponent, _Component);

  function RegisterComponent(props) {
    var _this;

    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RegisterComponent);

    _this = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(RegisterComponent).call(this, props));

    _this.next = function () {
      var _this$state = _this.state,
          canContinue = _this$state.canContinue,
          provider = _this$state.register.provider;
      var _window$location = window.location,
          protocol = _window$location.protocol,
          host = _window$location.host;

      if (canContinue) {
        window.location = "".concat(provider, "?returnToUrl=").concat(protocol, "//").concat(host, "/register/success");
      }
    };

    _this.selectProvider = function (e) {
      var register = _this.state.register;

      _this.setState({
        register: Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, register, {
          provider: e.target.value
        }),
        canContinue: true
      });
    };

    _this.onSubmit = function (e) {
      e.preventDefault();
      var _this$state2 = _this.state,
          canContinue = _this$state2.canContinue,
          provider = _this$state2.register.provider;
      var _window$location2 = window.location,
          protocol = _window$location2.protocol,
          host = _window$location2.host;

      if (canContinue) {
        window.location = "".concat(provider, "?returnToUrl=").concat(protocol, "//").concat(host, "/register/success");
      }
    };

    _this.state = {
      canContinue: false,
      register: {
        provider: ''
      }
    };
    return _this;
  }

  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RegisterComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          canContinue = _this$state3.canContinue,
          provider = _this$state3.register.provider;
      var _this$props = this.props,
          providers = _this$props.providers,
          t = _this$props.t;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Utils__WEBPACK_IMPORTED_MODULE_9__["GradientBackground"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Utils__WEBPACK_IMPORTED_MODULE_9__["CenterContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_register_style__WEBPACK_IMPORTED_MODULE_10__["RegisterWrapper"], {
        "data-testid": "register-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        "data-testid": "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, t('register.title')), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_register_style__WEBPACK_IMPORTED_MODULE_10__["RegisterPanel"], {
        className: "register-panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_register_style__WEBPACK_IMPORTED_MODULE_10__["PanelHeader"], {
        className: "panel-header",
        "data-testid": "panel-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, t('register.step1Title')), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "progress-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_register_style__WEBPACK_IMPORTED_MODULE_10__["PanelBody"], {
        className: "panel-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://solid.inrupt.com/how-it-works",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, t('register.whatIsAProvider')), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/login",
        className: "a-with-spacing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, t('register.alreadySolid')), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, providers.map(function (providerData) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_children__WEBPACK_IMPORTED_MODULE_11__["ProviderItem"], {
          data: providerData,
          key: providerData.id,
          onSelect: _this2.selectProvider,
          radioName: "providerRadio",
          id: "radio-".concat(providerData.id),
          checked: providerData.registerLink === provider,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        });
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_register_style__WEBPACK_IMPORTED_MODULE_10__["Actions"], {
        className: "actions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn-solid",
        onClick: this.next,
        type: "submit",
        disabled: !canContinue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, t('register.next'))))))));
    }
  }]);

  return RegisterComponent;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);


/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["withTranslation"])()(RegisterComponent));

/***/ }),

/***/ "./src/containers/Register/register.container.js":
/*!*******************************************************!*\
  !*** ./src/containers/Register/register.container.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register.component */ "./src/containers/Register/register.component.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services */ "./src/services/index.js");







var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/containers/Register/register.container.js";




var RegisterContainer =
/*#__PURE__*/
function (_Component) {
  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RegisterContainer, _Component);

  function RegisterContainer(props) {
    var _this;

    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RegisterContainer);

    _this = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(RegisterContainer).call(this, props));
    _this.state = {
      providers: []
    };
    return _this;
  }

  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RegisterContainer, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var providers;
        return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services__WEBPACK_IMPORTED_MODULE_9__["Provider"].getIdentityProviders();

              case 2:
                providers = _context.sent;
                this.setState({
                  providers: providers
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var providers = this.state.providers;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_register_component__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({
        providers: providers
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }));
    }
  }]);

  return RegisterContainer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RegisterContainer);

/***/ }),

/***/ "./src/containers/Register/register.style.js":
/*!***************************************************!*\
  !*** ./src/containers/Register/register.style.js ***!
  \***************************************************/
/*! exports provided: RegisterWrapper, RegisterPanel, PanelHeader, PanelBody, Actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterWrapper", function() { return RegisterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPanel", function() { return RegisterPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelHeader", function() { return PanelHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelBody", function() { return PanelBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Utils */ "./src/components/Utils/index.js");


function _templateObject5() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 32px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n\n  button {\n    height: 32px;\n    width: 150px;\n    border-radius: 4px;\n    font-family: Raleway;\n    font-size: 10px;\n    font-weight: bold;\n    letter-spacing: 0.89px;\n    line-height: 11px;\n    text-align: center;\n    text-transform: uppercase;\n    border: solid 2px #449df5;\n    box-sizing: border-box;\n  }\n\n  .btn-solid {\n    background-color: #449df5;\n    color: #ffffff;\n  }\n\n  .btn-outlined {\n    background-color: #ffffff;\n    color: #449df5;\n    filter: opacity(40%);\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100% !important;\n  animation: fadeIn 0.2s ease-in;\n\n  a {\n    display: block;\n    color: #449df5;\n    font-family: Raleway;\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 0.75px;\n    line-height: 14px;\n    text-align: center;\n    text-decoration: none;\n\n    &:hover {\n      font-weight: 700;\n    }\n  }\n\n  .a-with-spacing {\n    margin: 24px 0;\n  }\n\n  ul {\n    padding: 0;\n    margin: 0;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n\n  h2 {\n    position: relative;\n    padding: 0;\n    color: #5361fd;\n    font-family: Raleway;\n    font-size: 20px;\n    font-weight: bold;\n    letter-spacing: 0.75px;\n    line-height: 24px;\n    text-align: center;\n    margin: 0;\n    animation: fadeIn 0.5s ease-in;\n  }\n\n  .progress-bar {\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    background: #5361fd;\n    top: 30px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  justify-content: space-between;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  h1 {\n    color: #ffffff;\n  }\n\n  //Todo: figure out why this is necessary\n  margin-top: 100px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var RegisterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject());
var RegisterPanel = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Utils__WEBPACK_IMPORTED_MODULE_2__["Panel"])(_templateObject2());
var PanelHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var PanelBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var Actions = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5());

/***/ }),

/***/ "./src/containers/TextEditor/index.js":
/*!********************************************!*\
  !*** ./src/containers/TextEditor/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-editor.component */ "./src/containers/TextEditor/text-editor.component.js");

/* harmony default export */ __webpack_exports__["default"] = (_text_editor_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/containers/TextEditor/text-editor.component.js":
/*!************************************************************!*\
  !*** ./src/containers/TextEditor/text-editor.component.js ***!
  \************************************************************/
/*! exports provided: Editor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var solid_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! solid-auth-client */ "solid-auth-client");
/* harmony import */ var solid_auth_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(solid_auth_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solid/query-ldflex */ "@solid/query-ldflex");
/* harmony import */ var _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_solid_query_ldflex__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @inrupt/solid-react-components */ "./node_modules/@inrupt/solid-react-components/build/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _text_editor_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./text-editor.style */ "./src/containers/TextEditor/text-editor.style.js");



var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/containers/TextEditor/text-editor.component.js";

/* eslint-disable constructor-super */

/* eslint-disable no-nested-ternary */

/* eslint-disable no-console */








function extractWacAllow(response) {
  // WAC-Allow: user="read write append control",public="read"
  var modes = {
    user: {
      read: false,
      append: false,
      write: false,
      control: false
    },
    public: {
      read: false,
      append: false,
      write: false,
      control: false
    }
  };
  var wacAllowHeader = response.headers.get('WAC-Allow');

  if (wacAllowHeader) {
    wacAllowHeader // 'user="read write append control",public="read"'
    .split(',') // ['user="read write append control"', 'public="read"']
    .map(function (str) {
      return str.trim();
    }).forEach(function (statement) {
      // 'user="read write append control"'
      var parts = statement.split('='); // ['user', '"read write control"']

      if (parts.length >= 2 && ['user', 'public'].indexOf(parts[0]) !== -1 && parts[1].length > 2) {
        var modeStr = parts[1].replace(/"/g, ''); // 'read write control' or ''

        if (modeStr.length) {
          modeStr.split(' ').forEach(function (mode) {
            modes[parts[0]][mode] = true;
          });
        }
      }
    });
  }

  return modes;
}

var Editor = function Editor(_ref) {
  var webId = _ref.webId;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('https://example-friend.com/profile/card#me'),
      _useState4 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      friend = _useState4[0],
      setFriend = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState6 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      text = _useState6[0],
      setText = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState8 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      loaded = _useState8[0],
      setLoaded = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState10 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      editable = _useState10[0],
      setEditable = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState12 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState11, 2),
      sharable = _useState12[0],
      setSharable = _useState12[1];

  function setUrlFromStorage() {
    return _setUrlFromStorage.apply(this, arguments);
  }

  function _setUrlFromStorage() {
    _setUrlFromStorage = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var storageRoot, exampleUrl;
      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(webId && !url)) {
                _context2.next = 5;
                break;
              }

              _context2.next = 3;
              return _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_7___default.a[webId]['pim:storage'];

            case 3:
              storageRoot = _context2.sent;

              if (storageRoot) {
                exampleUrl = new URL('/share/some-doc.txt', storageRoot.value);
                setUrl(exampleUrl);
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _setUrlFromStorage.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setUrlFromStorage();
  }, [webId]);

  function handleUrlChange(event) {
    event.preventDefault();
    setUrl(event.target.value);
  }

  function handleFriendChange(event) {
    event.preventDefault();
    setFriend(event.target.value);
  }

  function handleTextChange(event) {
    event.preventDefault();
    setText(event.target.value);
  }

  function handleLoad(event) {
    event.preventDefault();
    var doc = solid_auth_client__WEBPACK_IMPORTED_MODULE_5___default.a.fetch(url);
    doc.then(
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(response) {
        var text, wacAllowModes;
        return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return response.text();

              case 2:
                text = _context.sent;

                if (response.ok) {
                  setText(text);
                } else if (response.status === 404) {
                  Object(_utils__WEBPACK_IMPORTED_MODULE_6__["successToaster"])(t('notifications.404'));
                } else {
                  Object(_utils__WEBPACK_IMPORTED_MODULE_6__["errorToaster"])(t('notifications.errorLoading'));
                }

                wacAllowModes = extractWacAllow(response);
                setEditable(wacAllowModes.user.write);
                setSharable(wacAllowModes.user.control);
                setLoaded(true);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()).catch(function () {
      Object(_utils__WEBPACK_IMPORTED_MODULE_6__["errorToaster"])(t('notifications.errorFetching'));
    });
  } // assuming the logged in user doesn't change without a page refresh


  function handleShare(_x2) {
    return _handleShare.apply(this, arguments);
  }

  function _handleShare() {
    _handleShare = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
      var permissions, ACLFile;
      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              event.preventDefault();
              _context3.prev = 1;
              permissions = [{
                agents: [friend],
                modes: [_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_8__["AccessControlList"].MODES.READ, _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_8__["AccessControlList"].MODES.WRITE]
              }];
              ACLFile = new _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_8__["AccessControlList"](webId, url);
              _context3.next = 6;
              return ACLFile.createACL(permissions);

            case 6:
              Object(_utils__WEBPACK_IMPORTED_MODULE_6__["successToaster"])(t('notifications.accessGranted'));
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              Object(_utils__WEBPACK_IMPORTED_MODULE_6__["errorToaster"])(t('notifications.errorGrantingAccess'));

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 9]]);
    }));
    return _handleShare.apply(this, arguments);
  }

  function handleSave(_x3) {
    return _handleSave.apply(this, arguments);
  }

  function _handleSave() {
    _handleSave = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(event) {
      var result;
      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              event.preventDefault(); // Not using LDFlex here, because this is not an RDF document.

              _context4.next = 3;
              return solid_auth_client__WEBPACK_IMPORTED_MODULE_5___default.a.fetch(url, {
                method: 'PUT',
                body: text,
                headers: {
                  'Content-Type': 'text/plain'
                }
              });

            case 3:
              result = _context4.sent;

              if (result.ok) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_6__["successToaster"])(t('notifications.saved'));
              } else if (result.ok === false) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_6__["errorToaster"])(t('notifications.errorSaving'));
              }

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _handleSave.apply(this, arguments);
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["FullGridSize"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["WebId"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Connected as: ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: webId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, webId)))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["FullGridSize"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, t('editor.url'), ":", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["Input"], {
    type: "text",
    size: "200",
    value: url,
    onChange: handleUrlChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "input-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    className: "ids-link-filled ids-link-filled--primary button",
    onClick: handleLoad,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, t('editor.load')), editable ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    className: "ids-link-filled ids-link-filled--secondary button",
    onClick: handleSave,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, t('editor.save')) : loaded ? t('notifications.notEditable') : '')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["FullGridSize"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["TextArea"], {
    value: text,
    onChange: handleTextChange,
    cols: 40,
    rows: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  })), sharable && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["FullGridSize"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, t('editor.friend'), ":", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["Input"], {
    type: "text",
    size: "200",
    value: friend,
    onChange: handleFriendChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    className: "ids-link-stroke ids-link-stroke--primary button",
    onClick: handleShare,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, t('editor.grantAccess'))), loaded && !sharable && t('notifications.notSharable'));
};
/**
 * A React component page that is displayed when there's no valid route. Users can click the button
 * to get back to the home/welcome page.
 */

var TextEditor = function TextEditor(_ref3) {
  var webId = _ref3.webId;

  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation2.t;

  console.log(webId);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["TextEditorWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["TextEditorContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_text_editor_style__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, t('editor.explanation'))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Editor, {
    webId: webId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TextEditor);

/***/ }),

/***/ "./src/containers/TextEditor/text-editor.style.js":
/*!********************************************************!*\
  !*** ./src/containers/TextEditor/text-editor.style.js ***!
  \********************************************************/
/*! exports provided: TextEditorWrapper, TextEditorContainer, Header, Input, Label, TextArea, Form, Button, FullGridSize, WebId, AutoSaveNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEditorWrapper", function() { return TextEditorWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEditorContainer", function() { return TextEditorContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullGridSize", function() { return FullGridSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebId", function() { return WebId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoSaveNotification", function() { return AutoSaveNotification; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");


function _templateObject13() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 0px !important;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 20px 40px 0px 40px;\n  position: relative;\n  &:after {\n    background-color: #d8d8d8;\n    display: block;\n    content: '';\n    height: 1px;\n    width: 100%;\n    margin: 25px 0 0 0;\n  }\n  a {\n    display: inline-block;\n    word-break: break-all;\n    margin-left: 10px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-column: span 2;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  grid-column: span 1;\n  text-align: right;\n  ", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: 128px;\n  display: inline-block;\n\n  &:first-child {\n    margin-right: 10px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-columns: 1fr 1fr;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 20px 40px;\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 20px 40px;\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 5px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 5px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 5px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  background-image: url('/img/pattern-geo.png'),\n    linear-gradient(135deg, #7c4dff 0%, #18a9e6 50%, #01c9ea 100%);\n  background-repeat: repeat, no-repeat;\n  padding: 30px 20px;\n  p {\n    color: white;\n  }\n  .edit-button {\n    background: rgba(255, 255, 255, 0.1);\n    border: 2px solid white;\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    font-size: 1rem;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);\n  background-color: white;\n  max-width: 900px;\n  margin: 0 20px;\n  width: 100%;\n  flex: 1 0 auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex: 1 0 auto;\n  align-items: center;\n  justify-content: center;\n  background-image: url('/img/concentric-hex-pattern_2x.png');\n  background-repeat: repeat;\n  padding: 60px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var TextEditorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject());
var TextEditorContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input(_templateObject4());
var Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label(_templateObject5());
var TextArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea(_templateObject6());
var Form = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form(_templateObject7(), _utils__WEBPACK_IMPORTED_MODULE_2__["media"].tablet(_templateObject8()));
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject9());
var FullGridSize = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject10(), _utils__WEBPACK_IMPORTED_MODULE_2__["media"].tablet(_templateObject11()));
var WebId = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject12());
var AutoSaveNotification = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject13());

/***/ }),

/***/ "./src/containers/Welcome/index.js":
/*!*****************************************!*\
  !*** ./src/containers/Welcome/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _welcome_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.container */ "./src/containers/Welcome/welcome.container.js");

/* harmony default export */ __webpack_exports__["default"] = (_welcome_container__WEBPACK_IMPORTED_MODULE_0__["WelcomeComponent"]);

/***/ }),

/***/ "./src/containers/Welcome/welcome.component.js":
/*!*****************************************************!*\
  !*** ./src/containers/Welcome/welcome.component.js ***!
  \*****************************************************/
/*! exports provided: WelcomePageContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageContent", function() { return WelcomePageContent; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @inrupt/solid-react-components */ "./node_modules/@inrupt/solid-react-components/build/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _welcome_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome.style */ "./src/containers/Welcome/welcome.style.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");






var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/containers/Welcome/welcome.component.js";






/**
 * Welcome Page UI component, containing the styled components for the Welcome Page
 * Image component will get theimage context and resolve the value to render.
 * @param props
 */

var WelcomePageContent = function WelcomePageContent(props) {
  var webId = props.webId,
      image = props.image,
      updatePhoto = props.updatePhoto,
      name = props.name;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  var limit = 2100000;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_welcome_style__WEBPACK_IMPORTED_MODULE_9__["WelcomeWrapper"], {
    "data-testid": "welcome-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "VIADE ES3B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_welcome_style__WEBPACK_IMPORTED_MODULE_9__["WelcomeCard"], {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Introduccion, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_welcome_style__WEBPACK_IMPORTED_MODULE_9__["WelcomeProfile"], {
    "data-testid": "welcome-profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, t('welcome.welcome'), ", ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_welcome_style__WEBPACK_IMPORTED_MODULE_9__["WelcomeName"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, name)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_welcome_style__WEBPACK_IMPORTED_MODULE_9__["ImageWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_7__["Uploader"], Object.assign({
    fileBase: webId && webId.split('/card')[0],
    limitFiles: 1,
    limitSize: limit,
    accept: 'jpg,jpeg,png',
    errorsText: {
      sizeLimit: t('welcome.errors.sizeLimit', {
        limit: "".concat(limit / 1000000, "Mbs")
      }),
      unsupported: t('welcome.errors.unsupported'),
      maximumFiles: t('welcome.errors.maximumFiles')
    },
    onError: function onError(error) {
      if (error && error.statusText) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_11__["errorToaster"])(error.statusText, t('welcome.errorTitle'));
      }
    },
    onComplete: function onComplete(uploadedFiles) {
      updatePhoto(uploadedFiles[uploadedFiles.length - 1].uri, t('welcome.uploadSuccess'), t('welcome.successTitle'));
    },
    render: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_10__["ImageProfile"], Object.assign({}, Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        webId: webId,
        photo: image,
        text: t('welcome.upload'),
        uploadingText: t('welcome.uploadingText')
      }), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }));
    }
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))))));
};

var Introduccion =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Introduccion, _React$Component);

  function Introduccion() {
    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Introduccion);

    return Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Introduccion).apply(this, arguments));
  }

  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Introduccion, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "Introduccion",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Aplicaci\xF3n de visualizaci\xF3n de rutas descentralizada."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Realizada por:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Daniel de Lera"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Federico Cuervo"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Ismael Cadenas"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Alfonso Lozana"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Ignacio Bermejo"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Jorge Iturrioz")));
    }
  }]);

  return Introduccion;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/***/ }),

/***/ "./src/containers/Welcome/welcome.container.js":
/*!*****************************************************!*\
  !*** ./src/containers/Welcome/welcome.container.js ***!
  \*****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solid/query-ldflex */ "@solid/query-ldflex");
/* harmony import */ var _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_solid_query_ldflex__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _rdfjs_data_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @rdfjs/data-model */ "./node_modules/@rdfjs/data-model/index.js");
/* harmony import */ var _rdfjs_data_model__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_rdfjs_data_model__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./welcome.component */ "./src/containers/Welcome/welcome.component.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");







var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/containers/Welcome/welcome.container.js";





var defaultProfilePhoto = '/img/icon/empty-profile.svg';
/**
 * Container component for the Welcome Page, containing example of how to fetch data from a POD
 */

var WelcomeComponent =
/*#__PURE__*/
function (_Component) {
  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(WelcomeComponent, _Component);

  function WelcomeComponent(props) {
    var _this;

    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, WelcomeComponent);

    _this = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(WelcomeComponent).call(this, props));
    _this.getProfileData =
    /*#__PURE__*/
    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var hasImage, webId, user, nameLd, name, imageLd, image;
      return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                isLoading: true
              });

              webId = _this.props.webId;
              /*
               * This is an example of how to use LDFlex. Here, we're loading the webID link into a user variable. This user object
               * will contain all of the data stored in the webID link, such as profile information. Then, we're grabbing the user.name property
               * from the returned user object.
               */

              user = _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_8___default.a[webId];
              _context.next = 5;
              return user.vcard_fn;

            case 5:
              nameLd = _context.sent;
              name = nameLd && nameLd.value.trim().length > 0 ? nameLd.value : webId.toString();
              _context.next = 9;
              return user.vcard_hasPhoto;

            case 9:
              imageLd = _context.sent;

              if (imageLd && imageLd.value) {
                image = imageLd.value;
                hasImage = true;
              } else {
                hasImage = false;
                image = defaultProfilePhoto;
              }
              /**
               * This is where we set the state with the name and image values. The user[hasPhotoContext] line of code is an example of
               * what to do when LDFlex doesn't have the full context. LDFlex has many data contexts already in place, but in case
               * it's missing, you can manually add it like we're doing here.
               *
               * The hasPhotoContext variable stores a link to the definition of the vcard ontology and, specifically, the #hasPhoto
               * property that we're using to store and link the profile image.
               *
               * For more information please go to: https://github.com/solid/query-ldflex
               */


              _this.setState({
                name: name,
                image: image,
                isLoading: false,
                hasImage: hasImage
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.updatePhoto =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(uri, message) {
        var title,
            hasImage,
            user,
            _args2 = arguments;
        return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                title = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : '';
                hasImage = _this.state.hasImage;
                _context2.prev = 2;
                user = _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_8___default.a.user;

                if (!hasImage) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 7;
                return user.vcard_hasPhoto.set(Object(_rdfjs_data_model__WEBPACK_IMPORTED_MODULE_9__["namedNode"])(uri));

              case 7:
                _context2.next = 11;
                break;

              case 9:
                _context2.next = 11;
                return user.vcard_hasPhoto.add(Object(_rdfjs_data_model__WEBPACK_IMPORTED_MODULE_9__["namedNode"])(uri));

              case 11:
                Object(_utils__WEBPACK_IMPORTED_MODULE_11__["successToaster"])(message, title);
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](2);
                Object(_utils__WEBPACK_IMPORTED_MODULE_11__["errorToaster"])(_context2.t0.message, 'Error');

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 14]]);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.state = {
      name: '',
      image: defaultProfilePhoto,
      isLoading: false,
      hasImage: false
    };
    return _this;
  }

  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(WelcomeComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var webId = this.props.webId;
      if (webId) this.getProfileData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var webId = this.props.webId;
      if (webId && webId !== prevProps.webId) this.getProfileData();
    }
    /**
     * This function retrieves a user's card data and tries to grab both the user's name and profile photo if they exist.
     *
     * This is an example of how to use the LDFlex library to fetch different linked data fields.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          name = _this$state.name,
          image = _this$state.image,
          isLoading = _this$state.isLoading;
      var webId = this.props.webId;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomePageContent"], Object.assign({
        name: name,
        image: image,
        isLoading: isLoading,
        webId: webId,
        updatePhoto: this.updatePhoto
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }));
    }
  }]);

  return WelcomeComponent;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/***/ }),

/***/ "./src/containers/Welcome/welcome.style.js":
/*!*************************************************!*\
  !*** ./src/containers/Welcome/welcome.style.js ***!
  \*************************************************/
/*! exports provided: WelcomeWrapper, WelcomeCard, WelcomeLogo, WelcomeProfile, ImageWrapper, ImageContainer, WelcomeDetail, WelcomeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeWrapper", function() { return WelcomeWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeCard", function() { return WelcomeCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeLogo", function() { return WelcomeLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeProfile", function() { return WelcomeProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContainer", function() { return ImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeDetail", function() { return WelcomeDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeName", function() { return WelcomeName; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");


function _templateObject9() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  overflow-wrap: break-word;\n  word-break: break-word;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 1rem 3.5rem;\n\n  p,\n  li {\n    color: #666666;\n  }\n  ul {\n    list-style: disc;\n    margin: 0 18px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-image: ", ";\n  background-size: cover;\n  border-radius: 50%;\n  width: 128px;\n  height: 128px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  button {\n    margin-left: 0px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 50%;\n    &:after {\n      display: block;\n      content: \"\";\n      position: absolute;\n      height: 100%;\n      width: 1px;\n      background-color:#D0D0D0;\n      top:0;\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100%;\n  text-align: center;\n  position: relative;\n\n  img {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n  }\n\n  h1,\n  img {\n    margin: 0 10px;\n    display: inline-block;\n    vertical-align: middle;\n  }\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 50%;\n  height: 100%;\n\n  img {\n    width: 60%;\n    display: block;\n    margin: 0 auto;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: #fff;\n  margin: 30px auto;\n\n  //Overriding the style guide card flexbox settings\n  max-width: 80% !important;\n  flex-direction: row !important;\n  padding: 50px 0 !important; //temporary fix to a style guide bug\n\n  align-items: center;\n\n  a {\n    text-decoration: none;\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  button {\n    margin-left: 8px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  background-image: url('/img/concentric-hex-pattern_2x.png');\n  background-repeat: repeat;\n  padding: 50px 0;\n\n  h3 {\n    color: #666666;\n    span {\n      font-weight: bold;\n    }\n    a {\n      font-size: 1.9rem;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var WelcomeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject());
var WelcomeCard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var WelcomeLogo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var WelcomeProfile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4(), _utils__WEBPACK_IMPORTED_MODULE_2__["media"].tablet(_templateObject5()));
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6());
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject7(), function (_ref) {
  var image = _ref.image;
  return image ? "url(".concat(image, ")") : '#cccccc';
});
var WelcomeDetail = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject8());
var WelcomeName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject9());

/***/ }),

/***/ "./src/containers/index.js":
/*!*********************************!*\
  !*** ./src/containers/index.js ***!
  \*********************************/
/*! exports provided: Login, Register, RegistrationSuccess, PageNotFound, Welcome, Profile, FormModelConverter, FormModelRenderer, TextEditor, Mapa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login */ "./src/containers/Login/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _Login__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register */ "./src/containers/Register/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return _Register__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistrationSuccess", function() { return _Register__WEBPACK_IMPORTED_MODULE_1__["RegistrationSuccess"]; });

/* harmony import */ var _PageNotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageNotFound */ "./src/containers/PageNotFound/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageNotFound", function() { return _PageNotFound__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Welcome */ "./src/containers/Welcome/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Welcome", function() { return _Welcome__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Profile */ "./src/containers/Profile/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return _Profile__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _TextEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextEditor */ "./src/containers/TextEditor/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextEditor", function() { return _TextEditor__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _FormModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormModel */ "./src/containers/FormModel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormModelConverter", function() { return _FormModel__WEBPACK_IMPORTED_MODULE_6__["FormModelConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormModelRenderer", function() { return _FormModel__WEBPACK_IMPORTED_MODULE_6__["FormModelRenderer"]; });

/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Map */ "./src/containers/Map/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mapa", function() { return _Map__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "./src/hooks/index.js":
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
/*! exports provided: useOnClickOutside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useOnClickOutside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useOnClickOutside */ "./src/hooks/useOnClickOutside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOnClickOutside", function() { return _useOnClickOutside__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/hooks/useOnClickOutside.js":
/*!****************************************!*\
  !*** ./src/hooks/useOnClickOutside.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var useOnClickOutside = function useOnClickOutside(ref, action) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var listener = function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) return;
      action(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return function () {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, action]);
};

/* harmony default export */ __webpack_exports__["default"] = (useOnClickOutside);

/***/ }),

/***/ "./src/i18n.js":
/*!*********************!*\
  !*** ./src/i18n.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next-xhr-backend */ "./node_modules/i18next-xhr-backend/index.js");
/* harmony import */ var i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next-browser-languagedetector */ "./node_modules/i18next-browser-languagedetector/index.js");
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__);




i18next__WEBPACK_IMPORTED_MODULE_0__["default"] // load translation using xhr -> see /public/locales
// learn more: https://github.com/i18next/i18next-xhr-backend
.use(i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_2___default.a) // detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
.use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3___default.a) // pass the i18n instance to the react-i18next components.
// Alternative use the I18nextProvider: https://react.i18next.com/components/i18nextprovider
.use(react_i18next__WEBPACK_IMPORTED_MODULE_1__["initReactI18next"]).init({
  fallbackLng: 'en-US',
  debug: false,
  whitelist: ['en-US', 'en', 'es'],
  // special options for react-i18next
  // learn more: https://react.i18next.com/components/i18next-instance
  react: {
    wait: true
  }
});
/* harmony default export */ __webpack_exports__["default"] = (i18next__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "./src/i18n.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["ErrorBoundary"], {
  component: function component(error, info) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["GlobalError"], {
      error: error,
      info: info,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/layouts/NotLoggedInLayout/index.js":
/*!************************************************!*\
  !*** ./src/layouts/NotLoggedInLayout/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _not_logged_in_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-logged-in.layout */ "./src/layouts/NotLoggedInLayout/not-logged-in.layout.js");

/* harmony default export */ __webpack_exports__["default"] = (_not_logged_in_layout__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/layouts/NotLoggedInLayout/not-logged-in.layout.js":
/*!***************************************************************!*\
  !*** ./src/layouts/NotLoggedInLayout/not-logged-in.layout.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @inrupt/solid-react-components */ "./node_modules/@inrupt/solid-react-components/build/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Utils */ "./src/components/Utils/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/layouts/NotLoggedInLayout/not-logged-in.layout.js";

function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    padding-bottom: 60px;\n    height: 100%;\n    padding-top: 60px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  height: 100%;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Container = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject());
var FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject2());

var NotLoggedInLayout = function NotLoggedInLayout(props) {
  var Component = props.component,
      webId = props.webId,
      rest = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["component", "webId"]);

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t;

  var ComponentWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(Component)(_templateObject3());
  return !webId ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], Object.assign({}, rest, {
    component: function component(matchProps) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["NavBar"], Object.assign({}, matchProps, {
        toolbar: [{
          component: function component() {
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Utils__WEBPACK_IMPORTED_MODULE_8__["LanguageDropdown"], Object.assign({}, Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
              t: t
            }, props), {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              },
              __self: this
            }));
          },
          id: 'language'
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ComponentWrapper, Object.assign({}, matchProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(FooterContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Footer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
    to: "/welcome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])()(Object(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_7__["withWebId"])(NotLoggedInLayout)));

/***/ }),

/***/ "./src/layouts/PrivateLayout/index.js":
/*!********************************************!*\
  !*** ./src/layouts/PrivateLayout/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _private_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private.layout */ "./src/layouts/PrivateLayout/private.layout.js");

/* harmony default export */ __webpack_exports__["default"] = (_private_layout__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/layouts/PrivateLayout/private.layout.js":
/*!*****************************************************!*\
  !*** ./src/layouts/PrivateLayout/private.layout.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inrupt/solid-react-components */ "./node_modules/@inrupt/solid-react-components/build/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/layouts/PrivateLayout/private.layout.js";

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  padding-top: 60px;\n  flex: 1 0 auto;\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow-x: hidden;\n  min-height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Container = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject2());

var PrivateLayout = function PrivateLayout(_ref) {
  var routes = _ref.routes,
      webId = _ref.webId,
      location = _ref.location,
      history = _ref.history,
      rest = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["routes", "webId", "location", "history"]);

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  var errorMessages = {
    message: t('appPermission.message'),
    title: t('notifications.error'),
    label: t('appPermission.link.label'),
    href: t('appPermission.link.href')
  };
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (webId) {
      _utils__WEBPACK_IMPORTED_MODULE_7__["permissionHelper"].checkPermissions(webId, errorMessages);
    }
  }, [webId]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], Object.assign({}, rest, {
    component: function component(_ref2) {
      var history = _ref2.history;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, {
        className: "contentApp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["AuthNavBar"], Object.assign({
        location: location,
        webId: webId,
        history: history
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, routes.map(function (route) {
        var RouteComponent = route.component;
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
          key: route.id,
          path: route.path,
          render: function render(routerProps) {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RouteComponent, Object.assign({}, routerProps, {
              webId: webId,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              },
              __self: this
            }));
          },
          webId: webId,
          exact: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        to: "/404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_5__["withAuthorization"])(PrivateLayout));

/***/ }),

/***/ "./src/layouts/PublicLayout/index.js":
/*!*******************************************!*\
  !*** ./src/layouts/PublicLayout/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public.layout */ "./src/layouts/PublicLayout/public.layout.js");

/* harmony default export */ __webpack_exports__["default"] = (_public_layout__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/layouts/PublicLayout/public.layout.js":
/*!***************************************************!*\
  !*** ./src/layouts/PublicLayout/public.layout.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inrupt/solid-react-components */ "./node_modules/@inrupt/solid-react-components/build/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components */ "./src/components/index.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Utils */ "./src/components/Utils/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");


var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/layouts/PublicLayout/public.layout.js";

function _templateObject3() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    padding-bottom: 60px;\n    height: 100%;\n    padding-top: 60px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  min-height: 100%;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
var FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2());

var PublicLayout = function PublicLayout(props) {
  var webId = Object(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_4__["useWebId"])();

  var Component = props.component,
      rest = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["component"]);

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var ComponentWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(Component)(_templateObject3());
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], Object.assign({}, rest, {
    component: function component(_ref) {
      var history = _ref.history,
          location = _ref.location,
          match = _ref.match;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, webId ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["AuthNavBar"], Object.assign({
        history: history,
        location: location,
        match: match,
        webId: webId
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["NavBar"], Object.assign({
        history: history,
        location: location,
        match: match
      }, {
        toolbar: [{
          component: function component() {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Utils__WEBPACK_IMPORTED_MODULE_7__["LanguageDropdown"], Object.assign({
              t: t,
              i18n: i18n
            }, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            }));
          },
          id: 'language'
        }, {
          component: function component() {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
              to: "/login",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            }, "Login");
          },
          label: 'authComponent',
          id: 'authComponent'
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ComponentWrapper, Object.assign({
        history: history,
        location: location,
        match: match
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FooterContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Footer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PublicLayout);

/***/ }),

/***/ "./src/layouts/index.js":
/*!******************************!*\
  !*** ./src/layouts/index.js ***!
  \******************************/
/*! exports provided: NotLoggedInLayout, PrivateLayout, PublicLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotLoggedInLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotLoggedInLayout */ "./src/layouts/NotLoggedInLayout/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotLoggedInLayout", function() { return _NotLoggedInLayout__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PrivateLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrivateLayout */ "./src/layouts/PrivateLayout/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrivateLayout", function() { return _PrivateLayout__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _PublicLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PublicLayout */ "./src/layouts/PublicLayout/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PublicLayout", function() { return _PublicLayout__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts */ "./src/layouts/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./src/containers/index.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/routes.js";




var privateRoutes = [{
  id: 'welcome',
  path: '/welcome',
  component: _containers__WEBPACK_IMPORTED_MODULE_3__["Welcome"]
}, {
  id: 'profile',
  path: '/profile',
  component: _containers__WEBPACK_IMPORTED_MODULE_3__["Profile"]
}, {
  id: 'text-editor',
  path: '/text-editor',
  component: _containers__WEBPACK_IMPORTED_MODULE_3__["TextEditor"]
}, {
  id: 'map',
  path: '/Map',
  component: _containers__WEBPACK_IMPORTED_MODULE_3__["Mapa"]
}, {
  id: 'formmodelconverter',
  path: '/formmodel/converter',
  component: _containers__WEBPACK_IMPORTED_MODULE_3__["FormModelConverter"]
}, {
  id: 'formmodelrenderer',
  path: '/formmodel/renderer',
  component: _containers__WEBPACK_IMPORTED_MODULE_3__["FormModelRenderer"]
}];

var Routes = function Routes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_1__["NotLoggedInLayout"], {
    component: _containers__WEBPACK_IMPORTED_MODULE_3__["Login"],
    path: "/login",
    exact: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_1__["NotLoggedInLayout"], {
    component: _containers__WEBPACK_IMPORTED_MODULE_3__["Register"],
    path: "/register",
    exact: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_1__["NotLoggedInLayout"], {
    path: "/register/success",
    component: _containers__WEBPACK_IMPORTED_MODULE_3__["RegistrationSuccess"],
    exact: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_1__["PublicLayout"], {
    path: "/404",
    component: _containers__WEBPACK_IMPORTED_MODULE_3__["PageNotFound"],
    exact: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    from: "/",
    to: "/welcome",
    exact: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_1__["PrivateLayout"], {
    path: "/",
    routes: privateRoutes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/404",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
/* eslint-disable */
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! exports provided: Provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider */ "./src/services/provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/services/provider.js":
/*!**********************************!*\
  !*** ./src/services/provider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Provider; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");



var Provider =
/*#__PURE__*/
function () {
  function Provider() {
    Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Provider);
  }

  Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Provider, null, [{
    key: "getIdentityProviders",

    /*
     *  Function to get providers. This is to mimic the future provider registry
     */
    value: function getIdentityProviders() {
      return [{
        id: 'inrupt',
        label: 'Inrupt',
        image: '/img/inrupt.svg',
        value: 'https://inrupt.net/auth',
        registerLink: 'https://inrupt.net/register',
        description: 'Lorem ipsum dolor sit amet non ipsom dolor'
      }, {
        id: 'solid-community',
        label: 'Solid Community',
        image: '/img/Solid.png',
        value: 'https://solid.community',
        registerLink: 'https://solid.community/register',
        description: 'Lorem ipsum dolor sit non consectetur'
      }];
    }
  }]);

  return Provider;
}();



/***/ }),

/***/ "./src/utils/context.js":
/*!******************************!*\
  !*** ./src/utils/context.js ***!
  \******************************/
/*! exports provided: expandedProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandedProperty", function() { return expandedProperty; });
var expandedProperty = function expandedProperty(context, property) {
  var suffix = property.split(':').pop();
  return "".concat(context, ":").concat(suffix);
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: media, expandedProperty, entries, ldflexHelper, storageHelper, successToaster, errorToaster, notification, permissionHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponents */ "./src/utils/styledComponents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "media", function() { return _styledComponents__WEBPACK_IMPORTED_MODULE_1__["media"]; });

/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./src/utils/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expandedProperty", function() { return _context__WEBPACK_IMPORTED_MODULE_2__["expandedProperty"]; });

/* harmony import */ var _toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toaster */ "./src/utils/toaster.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "successToaster", function() { return _toaster__WEBPACK_IMPORTED_MODULE_3__["successToaster"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorToaster", function() { return _toaster__WEBPACK_IMPORTED_MODULE_3__["errorToaster"]; });

/* harmony import */ var _ldflex_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ldflex-helper */ "./src/utils/ldflex-helper.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ldflexHelper", function() { return _ldflex_helper__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification */ "./src/utils/notification.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "notification", function() { return _notification__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage */ "./src/utils/storage.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "storageHelper", function() { return _storage__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./permissions */ "./src/utils/permissions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "permissionHelper", function() { return _permissions__WEBPACK_IMPORTED_MODULE_7__; });


var _marked =
/*#__PURE__*/
_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(entries);









function entries(obj) {
  var _i, _Object$keys, key;

  return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function entries$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _i = 0, _Object$keys = Object.keys(obj);

        case 1:
          if (!(_i < _Object$keys.length)) {
            _context.next = 8;
            break;
          }

          key = _Object$keys[_i];
          _context.next = 5;
          return [key, obj[key]];

        case 5:
          _i++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}



/***/ }),

/***/ "./src/utils/ldflex-helper.js":
/*!************************************!*\
  !*** ./src/utils/ldflex-helper.js ***!
  \************************************/
/*! exports provided: documentExists, createDoc, deleteFile, createDocument, createDocumentWithTurtle, createNonExistentDocument, fetchLdflexDocument, resourceExists, discoverInbox, getLinkedInbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentExists", function() { return documentExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDoc", function() { return createDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFile", function() { return deleteFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDocument", function() { return createDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDocumentWithTurtle", function() { return createDocumentWithTurtle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNonExistentDocument", function() { return createNonExistentDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLdflexDocument", function() { return fetchLdflexDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceExists", function() { return resourceExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discoverInbox", function() { return discoverInbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLinkedInbox", function() { return getLinkedInbox; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var solid_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! solid-auth-client */ "solid-auth-client");
/* harmony import */ var solid_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(solid_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solid/query-ldflex */ "@solid/query-ldflex");
/* harmony import */ var _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_solid_query_ldflex__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ */ "./src/utils/index.js");





var documentExists =
/*#__PURE__*/
function () {
  var _ref = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(documentUri) {
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", solid_auth_client__WEBPACK_IMPORTED_MODULE_2___default.a.fetch(documentUri, {
              headers: {
                'Content-Type': 'text/turtle'
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function documentExists(_x) {
    return _ref.apply(this, arguments);
  };
}();
var createDoc =
/*#__PURE__*/
function () {
  var _ref2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(documentUri, options) {
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return solid_auth_client__WEBPACK_IMPORTED_MODULE_2___default.a.fetch(documentUri, options);

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function createDoc(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteFile =
/*#__PURE__*/
function () {
  var _ref3 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(url) {
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return solid_auth_client__WEBPACK_IMPORTED_MODULE_2___default.a.fetch(url, {
              method: 'DELETE'
            });

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            throw _context3.t0;

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));

  return function deleteFile(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var createDocument =
/*#__PURE__*/
function () {
  var _ref4 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(documentUri) {
    var body,
        options,
        _args4 = arguments;
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            body = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : '';
            _context4.prev = 1;
            options = {
              method: 'PUT',
              headers: {
                'Content-Type': 'text/turtle'
              },
              body: body
            };
            _context4.next = 5;
            return createDoc(documentUri, options);

          case 5:
            return _context4.abrupt("return", _context4.sent);

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            throw _context4.t0;

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));

  return function createDocument(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
var createDocumentWithTurtle =
/*#__PURE__*/
function () {
  var _ref5 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(documentUri) {
    var body,
        _args5 = arguments;
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            body = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : '';
            _context5.prev = 1;
            return _context5.abrupt("return", createDoc(documentUri, {
              method: 'PUT',
              headers: {
                'Content-Type': 'text/turtle'
              },
              body: body
            }));

          case 5:
            _context5.prev = 5;
            _context5.t0 = _context5["catch"](1);
            throw _context5.t0;

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 5]]);
  }));

  return function createDocumentWithTurtle(_x6) {
    return _ref5.apply(this, arguments);
  };
}();
var createNonExistentDocument =
/*#__PURE__*/
function () {
  var _ref6 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(documentUri) {
    var body,
        result,
        _args6 = arguments;
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            body = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : '';
            _context6.prev = 1;
            _context6.next = 4;
            return documentExists(documentUri);

          case 4:
            result = _context6.sent;
            return _context6.abrupt("return", result.status === 404 ? createDocument(documentUri, body) : null);

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            throw _context6.t0;

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));

  return function createNonExistentDocument(_x7) {
    return _ref6.apply(this, arguments);
  };
}();
var fetchLdflexDocument =
/*#__PURE__*/
function () {
  var _ref7 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(documentUri) {
    var result, document;
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return documentExists(documentUri);

          case 3:
            result = _context7.sent;

            if (!(result.status === 404)) {
              _context7.next = 6;
              break;
            }

            return _context7.abrupt("return", null);

          case 6:
            _context7.next = 8;
            return _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_3___default.a[documentUri];

          case 8:
            document = _context7.sent;
            return _context7.abrupt("return", document);

          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](0);
            throw _context7.t0;

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 12]]);
  }));

  return function fetchLdflexDocument(_x8) {
    return _ref7.apply(this, arguments);
  };
}();
var resourceExists =
/*#__PURE__*/
function () {
  var _ref8 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(resourcePath) {
    var result;
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return solid_auth_client__WEBPACK_IMPORTED_MODULE_2___default.a.fetch(resourcePath);

          case 3:
            result = _context8.sent;
            return _context8.abrupt("return", result.status === 403 || result.status === 200);

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            Object(___WEBPACK_IMPORTED_MODULE_4__["errorToaster"])(_context8.t0.message, 'Error');

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 7]]);
  }));

  return function resourceExists(_x9) {
    return _ref8.apply(this, arguments);
  };
}();
var discoverInbox =
/*#__PURE__*/
function () {
  var _ref9 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(document) {
    var _documentExists, inboxDocument, inbox;

    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return resourceExists(document);

          case 3:
            _documentExists = _context9.sent;

            if (_documentExists) {
              _context9.next = 6;
              break;
            }

            return _context9.abrupt("return", false);

          case 6:
            _context9.next = 8;
            return _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_3___default.a[document]['ldp:inbox'];

          case 8:
            inboxDocument = _context9.sent;

            if (!inboxDocument) {
              _context9.next = 15;
              break;
            }

            _context9.next = 12;
            return inboxDocument.value;

          case 12:
            _context9.t0 = _context9.sent;
            _context9.next = 16;
            break;

          case 15:
            _context9.t0 = false;

          case 16:
            inbox = _context9.t0;
            return _context9.abrupt("return", inbox);

          case 20:
            _context9.prev = 20;
            _context9.t1 = _context9["catch"](0);
            throw _context9.t1;

          case 23:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 20]]);
  }));

  return function discoverInbox(_x10) {
    return _ref9.apply(this, arguments);
  };
}();
/**
 * Given a resource link, find an inbox linked from it, if any exist
 * @param resourcePath
 * @returns {Promise<string|*>}
 */

var getLinkedInbox =
/*#__PURE__*/
function () {
  var _ref10 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(resourcePath) {
    var inboxLinkedPath;
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_3___default.a[resourcePath].inbox;

          case 3:
            inboxLinkedPath = _context10.sent;

            if (!inboxLinkedPath) {
              _context10.next = 6;
              break;
            }

            return _context10.abrupt("return", inboxLinkedPath.value);

          case 6:
            return _context10.abrupt("return", '');

          case 9:
            _context10.prev = 9;
            _context10.t0 = _context10["catch"](0);
            throw _context10.t0;

          case 12:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 9]]);
  }));

  return function getLinkedInbox(_x11) {
    return _ref10.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/utils/notification.js":
/*!***********************************!*\
  !*** ./src/utils/notification.js ***!
  \***********************************/
/*! exports provided: sendNotification, findUserInboxes, getDefaultInbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendNotification", function() { return sendNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUserInboxes", function() { return findUserInboxes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultInbox", function() { return getDefaultInbox; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncIterator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncIterator.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./src/utils/index.js");






var sendNotification =
/*#__PURE__*/
function () {
  var _ref = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(opponent, content, createNotification, to) {
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!to) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", createNotification(content, to));

          case 3:
            throw new Error('Error: The opponent does not have an available inbox');

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            throw new Error(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function sendNotification(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
var findUserInboxes =
/*#__PURE__*/
function () {
  var _ref2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(paths) {
    var inboxes, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, path, currentPath, inbox;

    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            inboxes = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context2.prev = 4;
            _iterator = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_4__["default"])(paths);

          case 6:
            _context2.next = 8;
            return _iterator.next();

          case 8:
            _step = _context2.sent;
            _iteratorNormalCompletion = _step.done;
            _context2.next = 12;
            return _step.value;

          case 12:
            _value = _context2.sent;

            if (_iteratorNormalCompletion) {
              _context2.next = 23;
              break;
            }

            path = _value;
            currentPath = path.path;
            _context2.next = 18;
            return _index__WEBPACK_IMPORTED_MODULE_5__["ldflexHelper"].discoverInbox(currentPath);

          case 18:
            inbox = _context2.sent;

            if (inbox) {
              inboxes = [].concat(Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(inboxes), [Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, path, {
                path: inbox
              })]);
            }

          case 20:
            _iteratorNormalCompletion = true;
            _context2.next = 6;
            break;

          case 23:
            _context2.next = 29;
            break;

          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 29:
            _context2.prev = 29;
            _context2.prev = 30;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context2.next = 34;
              break;
            }

            _context2.next = 34;
            return _iterator.return();

          case 34:
            _context2.prev = 34;

            if (!_didIteratorError) {
              _context2.next = 37;
              break;
            }

            throw _iteratorError;

          case 37:
            return _context2.finish(34);

          case 38:
            return _context2.finish(29);

          case 39:
            return _context2.abrupt("return", inboxes);

          case 42:
            _context2.prev = 42;
            _context2.t1 = _context2["catch"](0);
            throw new Error(_context2.t1);

          case 45:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 42], [4, 25, 29, 39], [30,, 34, 38]]);
  }));

  return function findUserInboxes(_x5) {
    return _ref2.apply(this, arguments);
  };
}();
var getDefaultInbox = function getDefaultInbox(inboxes, inbox1, inbox2) {
  return inboxes.find(function (inbox) {
    return inbox.name === inbox1;
  }) || inboxes.find(function (inbox) {
    return inbox.name === inbox2;
  });
};

/***/ }),

/***/ "./src/utils/permissions.js":
/*!**********************************!*\
  !*** ./src/utils/permissions.js ***!
  \**********************************/
/*! exports provided: checkSpecificAppPermission, checkPermissions, checkOrSetInboxAppendPermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSpecificAppPermission", function() { return checkSpecificAppPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPermissions", function() { return checkPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkOrSetInboxAppendPermissions", function() { return checkOrSetInboxAppendPermissions; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inrupt/solid-react-components */ "./node_modules/@inrupt/solid-react-components/build/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./src/utils/index.js");



 // Check that all permissions we need are set. If any are missing, this returns false

var checkAppPermissions = function checkAppPermissions(userAppPermissions, appPermissions) {
  return appPermissions.every(function (permission) {
    return userAppPermissions.includes(permission);
  });
}; // Function to check for a specific permission included in the app


var checkSpecificAppPermission =
/*#__PURE__*/
function () {
  var _ref = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(webId, permission) {
    var userAppPermissions;
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_2__["AppPermission"].checkPermissions(webId);

          case 2:
            userAppPermissions = _context.sent;
            return _context.abrupt("return", userAppPermissions.permissions.includes(permission));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkSpecificAppPermission(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * SDK app will need all the permissions by the user pod so we check these permissions to work without any issues.
 * Error Message object is to hold the title, message, etc strings, as we can't use i18n libraries in this non-React file
 */

var checkPermissions =
/*#__PURE__*/
function () {
  var _ref2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(webId, errorMessage) {
    var userApp, permissions, APPEND, READ, WRITE, CONTROL;
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_2__["AppPermission"].checkPermissions(webId);

          case 2:
            userApp = _context2.sent;

            /**
             * Get modes permissions from solid-react-components
             */
            permissions = _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_2__["AccessControlList"].MODES;
            APPEND = permissions.APPEND, READ = permissions.READ, WRITE = permissions.WRITE, CONTROL = permissions.CONTROL; // If we are missing permissions that the app requires, display an error message with a Learn More link

            if (userApp === null || userApp.permissions === null || !checkAppPermissions(userApp.permissions, [APPEND, READ, WRITE, CONTROL])) {
              Object(___WEBPACK_IMPORTED_MODULE_3__["errorToaster"])(errorMessage.message, errorMessage.title, {
                label: errorMessage.label,
                href: errorMessage.href
              });
            }

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function checkPermissions(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Helper function to fetch permissions for the game inbox, and if permissions are not set
 * correctly, then add them. This repairs a broken inbox.
 * @param inboxPath
 * @returns {Promise<void>}
 */

var checkOrSetInboxAppendPermissions =
/*#__PURE__*/
function () {
  var _ref3 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(inboxPath, webId) {
    var inboxAcls, permissions, inboxPublicPermissions, appendPermission, _permissions, ACLFile;

    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // Fetch app permissions for the inbox and see if Append is there
            inboxAcls = new _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_2__["AccessControlList"](webId, inboxPath);
            _context3.next = 3;
            return inboxAcls.getPermissions();

          case 3:
            permissions = _context3.sent;
            inboxPublicPermissions = permissions.filter(function (perm) {
              return perm.agents === null;
            });
            appendPermission = inboxPublicPermissions.filter(function (perm) {
              return perm.modes.includes(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_2__["AccessControlList"].MODES.APPEND);
            });

            if (!(appendPermission.length <= 0)) {
              _context3.next = 17;
              break;
            }

            _context3.prev = 7;
            // Permission object to add. A null agent means Everyone
            _permissions = [{
              agents: null,
              modes: [_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_2__["AccessControlList"].MODES.APPEND]
            }];
            ACLFile = new _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_2__["AccessControlList"](webId, inboxPath);
            _context3.next = 12;
            return ACLFile.createACL(_permissions);

          case 12:
            _context3.next = 17;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](7);
            throw _context3.t0;

          case 17:
            return _context3.abrupt("return", true);

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[7, 14]]);
  }));

  return function checkOrSetInboxAppendPermissions(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/utils/storage.js":
/*!******************************!*\
  !*** ./src/utils/storage.js ***!
  \******************************/
/*! exports provided: buildPathFromWebId, getAppStorage, createInitialFiles, checkAndInitializeInbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildPathFromWebId", function() { return buildPathFromWebId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppStorage", function() { return getAppStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitialFiles", function() { return createInitialFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAndInitializeInbox", function() { return checkAndInitializeInbox; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solid/query-ldflex */ "@solid/query-ldflex");
/* harmony import */ var _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solid_query_ldflex__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inrupt/solid-react-components */ "./node_modules/@inrupt/solid-react-components/build/index.js");
/* harmony import */ var _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ldflex_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ldflex-helper */ "./src/utils/ldflex-helper.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ */ "./src/utils/index.js");






var appPath = "public/games/tictactoe/";
/**
 * Creates a valid string that represents the application path. This is the
 * default value if no storage predicate is discovered
 * @param webId
 * @param path
 * @returns {*}
 */

var buildPathFromWebId = function buildPathFromWebId(webId, path) {
  if (!webId) return false;
  var domain = new URL(typeof webId === 'object' ? webId.webId : webId).origin;
  return "".concat(domain, "/").concat(path);
};
/**
 * Helper function to check for the user's pod storage value. If it doesn't exist, we assume root of the pod
 * @returns {Promise<string>}
 */

var getAppStorage =
/*#__PURE__*/
function () {
  var _ref = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(webId) {
    var podStoragePath, podStoragePathValue;
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _solid_query_ldflex__WEBPACK_IMPORTED_MODULE_2___default.a[webId].storage;

          case 2:
            podStoragePath = _context.sent;
            podStoragePathValue = podStoragePath && podStoragePath.value.trim().length > 0 ? podStoragePath.value : ''; // Make sure that the path ends in a / so it is recognized as a folder path

            if (podStoragePathValue && !podStoragePathValue.endsWith('/')) {
              podStoragePathValue = "".concat(podStoragePathValue, "/");
            } // If there is no storage value from the pod, use webId as the backup, and append the application path from env


            if (!(!podStoragePathValue || podStoragePathValue.trim().length === 0)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", buildPathFromWebId(webId, appPath));

          case 7:
            return _context.abrupt("return", "".concat(podStoragePathValue).concat(appPath));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAppStorage(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 *  Check and create the initial app files and folders
 * @param folderPath
 * @returns {Promise<boolean>} Returns whether or not there were any errors during the creation process
 */

var createInitialFiles =
/*#__PURE__*/
function () {
  var _ref2 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(webId) {
    var hasWritePermission, gameUrl, dataFilePath, settingsFilePath, gameFolderExists, dataFileExists, settingsFileExists;
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return ___WEBPACK_IMPORTED_MODULE_5__["permissionHelper"].checkSpecificAppPermission(webId, _inrupt_solid_react_components__WEBPACK_IMPORTED_MODULE_3__["AccessControlList"].MODES.WRITE);

          case 3:
            hasWritePermission = _context2.sent;

            if (hasWritePermission) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return");

          case 6:
            _context2.next = 8;
            return ___WEBPACK_IMPORTED_MODULE_5__["storageHelper"].getAppStorage(webId);

          case 8:
            gameUrl = _context2.sent;
            // Set up various paths relative to the game URL
            dataFilePath = "".concat(gameUrl, "data.ttl");
            settingsFilePath = "".concat(gameUrl, "settings.ttl"); // Check if the tictactoe folder exists, if not then create it. This is where game files, the game inbox, and settings files are created by default

            _context2.next = 13;
            return Object(_ldflex_helper__WEBPACK_IMPORTED_MODULE_4__["resourceExists"])(gameUrl);

          case 13:
            gameFolderExists = _context2.sent;

            if (gameFolderExists) {
              _context2.next = 17;
              break;
            }

            _context2.next = 17;
            return Object(_ldflex_helper__WEBPACK_IMPORTED_MODULE_4__["createDoc"])(_solid_query_ldflex__WEBPACK_IMPORTED_MODULE_2___default.a, {
              method: 'PUT',
              headers: {
                'Content-Type': 'text/turtle'
              }
            });

          case 17:
            _context2.next = 19;
            return Object(_ldflex_helper__WEBPACK_IMPORTED_MODULE_4__["resourceExists"])(dataFilePath);

          case 19:
            dataFileExists = _context2.sent;

            if (dataFileExists) {
              _context2.next = 23;
              break;
            }

            _context2.next = 23;
            return Object(_ldflex_helper__WEBPACK_IMPORTED_MODULE_4__["createDocument"])(dataFilePath);

          case 23:
            _context2.next = 25;
            return Object(_ldflex_helper__WEBPACK_IMPORTED_MODULE_4__["resourceExists"])(settingsFilePath);

          case 25:
            settingsFileExists = _context2.sent;

            if (settingsFileExists) {
              _context2.next = 29;
              break;
            }

            _context2.next = 29;
            return Object(_ldflex_helper__WEBPACK_IMPORTED_MODULE_4__["createDocument"])(settingsFilePath);

          case 29:
            return _context2.abrupt("return", true);

          case 32:
            _context2.prev = 32;
            _context2.t0 = _context2["catch"](0);
            Object(___WEBPACK_IMPORTED_MODULE_5__["errorToaster"])(_context2.t0.message, 'Error');
            return _context2.abrupt("return", false);

          case 36:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 32]]);
  }));

  return function createInitialFiles(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var checkAndInitializeInbox =
/*#__PURE__*/
function () {
  var _ref3 = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", '');

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function checkAndInitializeInbox() {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/utils/styledComponents.js":
/*!***************************************!*\
  !*** ./src/utils/styledComponents.js ***!
  \***************************************/
/*! exports provided: media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony import */ var _home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_home_alfonso_Documentos_Universidad_Tercero_ASW_Trabajo_viade_es3b_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    @media (min-width: ", "em) {\n      ", "\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var sizes = {
  desktop: 992,
  desktopSm: 1024,
  tablet: 768,
  phone: 576
}; // Iterate through the sizes and create a media template

var media = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject(), sizes[label] / 16, styled_components__WEBPACK_IMPORTED_MODULE_1__["css"].apply(void 0, arguments));
  };

  return acc;
}, {});

/***/ }),

/***/ "./src/utils/theme.js":
/*!****************************!*\
  !*** ./src/utils/theme.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var theme = {
  colors: {},
  tictactoe: {
    movex: '#13428f',
    moveo: '#820d2c',
    awaiting: '#cf6700',
    created: '#039c40',
    finished: '#8200a6'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/utils/toaster.js":
/*!******************************!*\
  !*** ./src/utils/toaster.js ***!
  \******************************/
/*! exports provided: errorToaster, successToaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorToaster", function() { return errorToaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successToaster", function() { return successToaster; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _components_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Utils */ "./src/components/Utils/index.js");
var _jsxFileName = "/home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/utils/toaster.js";



var errorToaster = function errorToaster(content) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var link = arguments.length > 2 ? arguments[2] : undefined;
  return Object(react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Utils__WEBPACK_IMPORTED_MODULE_2__["Toaster"], Object.assign({
    content: content,
    title: title,
    type: 'error',
    link: link
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  })), {
    autoClose: false,
    className: 'solid-toaster toaster-error',
    type: 'error'
  });
};
var successToaster = function successToaster(content) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var link = arguments.length > 2 ? arguments[2] : undefined;
  return Object(react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Utils__WEBPACK_IMPORTED_MODULE_2__["Toaster"], Object.assign({
    content: content,
    title: title,
    type: 'success',
    link: link
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), {
    className: 'solid-toaster toaster-success',
    type: 'success'
  });
};

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/alfonso/Documentos/Universidad/Tercero/ASW/Trabajo/viade_es3b/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "@solid/query-ldflex":
/*!*********************************!*\
  !*** external ["solid","data"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = solid["data"];

/***/ }),

/***/ "solid-auth-client":
/*!*********************************!*\
  !*** external ["solid","auth"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = solid["auth"];

/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map