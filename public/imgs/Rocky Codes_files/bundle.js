/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/app.js":
/*!***********************!*\
  !*** ./client/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _components = __webpack_require__(/*! ./components */ "./client/components/index.js");

var _line = _interopRequireDefault(__webpack_require__(/*! ../public/imgs/line.svg */ "./public/imgs/line.svg"));

var _heartSquiggle = _interopRequireDefault(__webpack_require__(/*! ../public/imgs/heart-squiggle.svg */ "./public/imgs/heart-squiggle.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
    _this.state = {
      rocky: '',
      codes: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var rockyStr = "rocky";
      var codesStr = "codes";
      var rocky = "";
      var codes = "";
      var i = 0;
      var timer = setInterval(function () {
        rocky += rockyStr[i];
        i++;

        _this2.setState({
          rocky: rocky
        });

        if (rocky === rockyStr) clearInterval(timer);
      }, 300);
      setTimeout(function () {
        i = 0;
        var timer = setInterval(function () {
          codes += codesStr[i];
          i++;

          _this2.setState({
            codes: codes
          });

          if (codes === codesStr) clearInterval(timer);
        }, 300);
      }, 4000);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        id: "app"
      }, _react.default.createElement("div", {
        id: "header"
      }, _react.default.createElement("div", {
        id: "headerContent"
      }, _react.default.createElement("p", null, this.state.rocky), _react.default.createElement("svg", {
        width: "624px",
        height: "273px"
      }, _react.default.createElement("g", {
        id: "heart",
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd"
      }, _react.default.createElement("g", {
        id: "littlesquiggle",
        transform: "translate(3.000000, 6.000000)",
        stroke: "#FF2200",
        "stroke-width": "11"
      }, _react.default.createElement("path", {
        d: "M615.106723,134.430893 C562.988878,285.717652 344.303774,235.735603 424.637853,198.27581 C451.594279,185.706025 442.491132,329.263249 320.48603,219.113742 C293.633006,194.870106 278.995009,138.527037 278.995009,115.045885 C278.995009,71.7852944 283.675855,30.8191815 323.925727,41.6237929 C339.031055,45.6786429 345.823737,61.2678673 344.303774,88.391466 C375.935292,78.0044489 393.865613,83.9794713 398.094738,106.316533 C408.080462,159.058357 270.763468,179.867812 243.858547,153.713931 C95.4635672,9.46134011 430.373177,-64.009898 465.336673,72.334122 C488.872205,164.113536 307.659563,290.424641 0.212402039,125.626516",
        id: "heart-path"
      })))), _react.default.createElement("p", null, this.state.codes))), _react.default.createElement(_components.Navbar, null));
    }
  }]);

  return App;
}(_react.default.Component);

exports.default = App;

/***/ }),

/***/ "./client/components/About.js":
/*!************************************!*\
  !*** ./client/components/About.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _headshot = _interopRequireDefault(__webpack_require__(/*! ../../public/imgs/headshot2.jpg */ "./public/imgs/headshot2.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
  return _react.default.createElement("div", {
    className: "content about",
    id: "about"
  }, _react.default.createElement("img", {
    src: _headshot.default
  }), _react.default.createElement("div", {
    id: "text"
  }, _react.default.createElement("p", null, "hi, i'm rocky"), _react.default.createElement("p", null, "i'm an educator and social worker turned web developer based in nyc!")));
};

var _default = About;
exports.default = _default;

/***/ }),

/***/ "./client/components/Contact.js":
/*!**************************************!*\
  !*** ./client/components/Contact.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact() {
  return _react.default.createElement("div", {
    className: "content contact"
  }, _react.default.createElement("p", null, "HERE IS MY CONTACT OKAYYYYY"));
};

var _default = Contact;
exports.default = _default;

/***/ }),

/***/ "./client/components/Navbar.js":
/*!*************************************!*\
  !*** ./client/components/Navbar.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _index = __webpack_require__(/*! ./index */ "./client/components/index.js");

var _utils = __webpack_require__(/*! ../utils.js */ "./client/utils.js");

var _heart = _interopRequireDefault(__webpack_require__(/*! ../../public/imgs/heart.png */ "./public/imgs/heart.png"));

var _computerSvg = _interopRequireDefault(__webpack_require__(/*! ../../public/imgs/computer.svg.png */ "./public/imgs/computer.svg.png"));

var _email = _interopRequireDefault(__webpack_require__(/*! ../../public/imgs/email.png */ "./public/imgs/email.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Navbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navbar).call(this));
    _this.state = {
      selected: '',
      projects: _utils.projectList
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderSwitch = _this.renderSwitch.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Navbar, [{
    key: "handleClick",
    value: function handleClick(selected) {
      this.setState({
        selected: selected
      });
    }
  }, {
    key: "renderSwitch",
    value: function renderSwitch(selected) {
      switch (selected) {
        case 'about':
          return _react.default.createElement(_index.About, null);

        case 'projects':
          return _react.default.createElement(_index.Projects, {
            projects: this.state.projects
          });

        case 'contact':
          return _react.default.createElement(_index.Contact, null);

        default:
          return _react.default.createElement(_index.About, null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var abtClass = ['about', 'btn', 'active'];
      var projClass = ["projects", "btn"];
      var contClass = ["contact", "btn"];
      var selected = this.state.selected;

      if (selected === 'about') {
        abtClass.push("active");
        projClass = projClass.filter(function (className) {
          return className !== "active";
        });
        contClass = contClass.filter(function (className) {
          return className !== "active";
        });
      } else if (selected === 'projects') {
        projClass.push("active");
        contClass = contClass.filter(function (className) {
          return className !== "active";
        });
        abtClass = abtClass.filter(function (className) {
          return className !== 'active';
        });
      } else if (selected === 'contact') {
        contClass.push("active");
        projClass = projClass.filter(function (className) {
          return className !== "active";
        });
        abtClass = abtClass.filter(function (className) {
          return className !== 'active';
        });
      }

      return _react.default.createElement("div", {
        id: "navbar"
      }, _react.default.createElement("div", {
        id: "tabs"
      }, _react.default.createElement("button", {
        className: projClass.join(' '),
        onClick: function onClick() {
          return _this2.handleClick('projects');
        }
      }, _react.default.createElement("img", {
        src: _computerSvg.default
      })), _react.default.createElement("button", {
        className: abtClass.join(' '),
        onClick: function onClick() {
          return _this2.handleClick('about');
        }
      }, _react.default.createElement("img", {
        src: _heart.default
      })), _react.default.createElement("button", {
        className: contClass.join(' '),
        onClick: function onClick() {
          return _this2.handleClick('contact');
        }
      }, _react.default.createElement("img", {
        src: _email.default
      }))), _react.default.createElement("div", {
        id: "contentContainer"
      }, this.renderSwitch(this.state.selected)));
    }
  }]);

  return Navbar;
}(_react.default.Component);

exports.default = Navbar;
;

/***/ }),

/***/ "./client/components/Projects.js":
/*!***************************************!*\
  !*** ./client/components/Projects.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Projects = function Projects(props) {
  return _react.default.createElement("div", {
    className: "content projects",
    id: "projects"
  }, props.projects.map(function (project) {
    return _react.default.createElement("div", {
      key: project.className,
      className: "projectBox ".concat(project.className)
    }, _react.default.createElement("a", {
      href: project.link,
      target: "_blank"
    }, _react.default.createElement("div", {
      className: "hoverBox"
    }, _react.default.createElement("div", {
      id: "textWrapper"
    }, _react.default.createElement("p", {
      id: "title"
    }, project.title), _react.default.createElement("p", null, project.description), _react.default.createElement("p", null, project.technology)))));
  }));
};

var _default = Projects;
exports.default = _default;

/***/ }),

/***/ "./client/components/index.js":
/*!************************************!*\
  !*** ./client/components/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Navbar", {
  enumerable: true,
  get: function get() {
    return _Navbar.default;
  }
});
Object.defineProperty(exports, "Projects", {
  enumerable: true,
  get: function get() {
    return _Projects.default;
  }
});
Object.defineProperty(exports, "About", {
  enumerable: true,
  get: function get() {
    return _About.default;
  }
});
Object.defineProperty(exports, "Contact", {
  enumerable: true,
  get: function get() {
    return _Contact.default;
  }
});

var _Navbar = _interopRequireDefault(__webpack_require__(/*! ./Navbar */ "./client/components/Navbar.js"));

var _Projects = _interopRequireDefault(__webpack_require__(/*! ./Projects */ "./client/components/Projects.js"));

var _About = _interopRequireDefault(__webpack_require__(/*! ./About */ "./client/components/About.js"));

var _Contact = _interopRequireDefault(__webpack_require__(/*! ./Contact */ "./client/components/Contact.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _app = _interopRequireDefault(__webpack_require__(/*! ./app */ "./client/app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render(_react.default.createElement(_app.default, null), document.getElementById('app'));

/***/ }),

/***/ "./client/utils.js":
/*!*************************!*\
  !*** ./client/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectList = void 0;
var projectList = [{
  className: 'graceshopper',
  link: 'https://teamawesomee.herokuapp.com/signup',
  title: 'cures for what ails you',
  description: 'a full-stack e-commerce site that includes product filtering, user signup, login, and admin capabilities, and a working cart model.',
  technology: "react \u2022 redux \u2022 stripe api \u2022 google oauth \u2022 express \u2022 sequelize \u2022 postgress \u2022 node \u2022 mocha \u2022 chai"
}, {
  className: 'studybreak',
  link: 'https://www.youtube.com/watch?v=bUhasd6ixSw',
  title: 'studybreak',
  description: 'a mobile app that provides randomly generated internet content based on user interests. take the decision making out of your internet downtime and discover something new!',
  technology: "react-native \u2022 express \u2022 sequelize \u2022 node \u2022 google search query api"
}, {
  className: 'donke',
  link: 'https://www.youtube.com/watch?v=xlSb_pJ16g4&index=4&t=0s&list=PLx0iOsdUOUmk32FPcDXLqb2gzWR-oysBw',
  title: 'donke',
  description: "taking breaks from long stints of computer work is important for physical and mental health, but too few of us actually do it! donk\xE9 is a desktop app that uses an adorable avatar to remind users when it's time to take a break and when it's time to get back to work.",
  technology: "electron \u2022 react \u2022 redux \u2022 greensock \u2022 firestore"
}];
exports.projectList = projectList;

/***/ }),

/***/ "./node_modules/fbjs/lib/ExecutionEnvironment.js":
/*!*******************************************************!*\
  !*** ./node_modules/fbjs/lib/ExecutionEnvironment.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

/***/ }),

/***/ "./node_modules/fbjs/lib/camelize.js":
/*!*******************************************!*\
  !*** ./node_modules/fbjs/lib/camelize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;

/***/ }),

/***/ "./node_modules/fbjs/lib/camelizeStyleName.js":
/*!****************************************************!*\
  !*** ./node_modules/fbjs/lib/camelizeStyleName.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var camelize = __webpack_require__(/*! ./camelize */ "./node_modules/fbjs/lib/camelize.js");

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;

/***/ }),

/***/ "./node_modules/fbjs/lib/containsNode.js":
/*!***********************************************!*\
  !*** ./node_modules/fbjs/lib/containsNode.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var isTextNode = __webpack_require__(/*! ./isTextNode */ "./node_modules/fbjs/lib/isTextNode.js");

/*eslint-disable no-bitwise */

/**
 * Checks if a given DOM node contains or is another DOM node.
 */
function containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode(outerNode, innerNode.parentNode);
  } else if ('contains' in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

module.exports = containsNode;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyObject.js":
/*!**********************************************!*\
  !*** ./node_modules/fbjs/lib/emptyObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),

/***/ "./node_modules/fbjs/lib/getActiveElement.js":
/*!***************************************************!*\
  !*** ./node_modules/fbjs/lib/getActiveElement.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/* eslint-disable fb-www/typeof-undefined */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?DOMDocument} doc Defaults to current document.
 * @return {?DOMElement}
 */
function getActiveElement(doc) /*?DOMElement*/{
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}

module.exports = getActiveElement;

/***/ }),

/***/ "./node_modules/fbjs/lib/hyphenate.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/hyphenate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

/***/ }),

/***/ "./node_modules/fbjs/lib/hyphenateStyleName.js":
/*!*****************************************************!*\
  !*** ./node_modules/fbjs/lib/hyphenateStyleName.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var hyphenate = __webpack_require__(/*! ./hyphenate */ "./node_modules/fbjs/lib/hyphenate.js");

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/fbjs/lib/isNode.js":
/*!*****************************************!*\
  !*** ./node_modules/fbjs/lib/isNode.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
function isNode(object) {
  var doc = object ? object.ownerDocument || object : document;
  var defaultView = doc.defaultView || window;
  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

module.exports = isNode;

/***/ }),

/***/ "./node_modules/fbjs/lib/isTextNode.js":
/*!*********************************************!*\
  !*** ./node_modules/fbjs/lib/isTextNode.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var isNode = __webpack_require__(/*! ./isNode */ "./node_modules/fbjs/lib/isNode.js");

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;

/***/ }),

/***/ "./node_modules/fbjs/lib/shallowEqual.js":
/*!***********************************************!*\
  !*** ./node_modules/fbjs/lib/shallowEqual.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.development.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.4.1
 * react-dom.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");
var ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");
var getActiveElement = __webpack_require__(/*! fbjs/lib/getActiveElement */ "./node_modules/fbjs/lib/getActiveElement.js");
var shallowEqual = __webpack_require__(/*! fbjs/lib/shallowEqual */ "./node_modules/fbjs/lib/shallowEqual.js");
var containsNode = __webpack_require__(/*! fbjs/lib/containsNode */ "./node_modules/fbjs/lib/containsNode.js");
var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ "./node_modules/fbjs/lib/emptyObject.js");
var hyphenateStyleName = __webpack_require__(/*! fbjs/lib/hyphenateStyleName */ "./node_modules/fbjs/lib/hyphenateStyleName.js");
var camelizeStyleName = __webpack_require__(/*! fbjs/lib/camelizeStyleName */ "./node_modules/fbjs/lib/camelizeStyleName.js");

// Relying on the `invariant()` implementation lets us
// have preserve the format and params in the www builds.

!React ? invariant(false, 'ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.') : void 0;

var invokeGuardedCallback = function (name, func, context, a, b, c, d, e, f) {
  this._hasCaughtError = false;
  this._caughtError = null;
  var funcArgs = Array.prototype.slice.call(arguments, 3);
  try {
    func.apply(context, funcArgs);
  } catch (error) {
    this._caughtError = error;
    this._hasCaughtError = true;
  }
};

{
  // In DEV mode, we swap out invokeGuardedCallback for a special version
  // that plays more nicely with the browser's DevTools. The idea is to preserve
  // "Pause on exceptions" behavior. Because React wraps all user-provided
  // functions in invokeGuardedCallback, and the production version of
  // invokeGuardedCallback uses a try-catch, all user exceptions are treated
  // like caught exceptions, and the DevTools won't pause unless the developer
  // takes the extra step of enabling pause on caught exceptions. This is
  // untintuitive, though, because even though React has caught the error, from
  // the developer's perspective, the error is uncaught.
  //
  // To preserve the expected "Pause on exceptions" behavior, we don't use a
  // try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
  // DOM node, and call the user-provided callback from inside an event handler
  // for that fake event. If the callback throws, the error is "captured" using
  // a global event handler. But because the error happens in a different
  // event loop context, it does not interrupt the normal program flow.
  // Effectively, this gives us try-catch behavior without actually using
  // try-catch. Neat!

  // Check that the browser supports the APIs we need to implement our special
  // DEV version of invokeGuardedCallback
  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
    var fakeNode = document.createElement('react');

    var invokeGuardedCallbackDev = function (name, func, context, a, b, c, d, e, f) {
      // If document doesn't exist we know for sure we will crash in this method
      // when we call document.createEvent(). However this can cause confusing
      // errors: https://github.com/facebookincubator/create-react-app/issues/3482
      // So we preemptively throw with a better message instead.
      !(typeof document !== 'undefined') ? invariant(false, 'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.') : void 0;
      var evt = document.createEvent('Event');

      // Keeps track of whether the user-provided callback threw an error. We
      // set this to true at the beginning, then set it to false right after
      // calling the function. If the function errors, `didError` will never be
      // set to false. This strategy works even if the browser is flaky and
      // fails to call our global error handler, because it doesn't rely on
      // the error event at all.
      var didError = true;

      // Create an event handler for our fake event. We will synchronously
      // dispatch our fake event using `dispatchEvent`. Inside the handler, we
      // call the user-provided callback.
      var funcArgs = Array.prototype.slice.call(arguments, 3);
      function callCallback() {
        // We immediately remove the callback from event listeners so that
        // nested `invokeGuardedCallback` calls do not clash. Otherwise, a
        // nested call would trigger the fake event handlers of any call higher
        // in the stack.
        fakeNode.removeEventListener(evtType, callCallback, false);
        func.apply(context, funcArgs);
        didError = false;
      }

      // Create a global error event handler. We use this to capture the value
      // that was thrown. It's possible that this error handler will fire more
      // than once; for example, if non-React code also calls `dispatchEvent`
      // and a handler for that event throws. We should be resilient to most of
      // those cases. Even if our error event handler fires more than once, the
      // last error event is always used. If the callback actually does error,
      // we know that the last error event is the correct one, because it's not
      // possible for anything else to have happened in between our callback
      // erroring and the code that follows the `dispatchEvent` call below. If
      // the callback doesn't error, but the error event was fired, we know to
      // ignore it because `didError` will be false, as described above.
      var error = void 0;
      // Use this to track whether the error event is ever called.
      var didSetError = false;
      var isCrossOriginError = false;

      function onError(event) {
        error = event.error;
        didSetError = true;
        if (error === null && event.colno === 0 && event.lineno === 0) {
          isCrossOriginError = true;
        }
      }

      // Create a fake event type.
      var evtType = 'react-' + (name ? name : 'invokeguardedcallback');

      // Attach our event handlers
      window.addEventListener('error', onError);
      fakeNode.addEventListener(evtType, callCallback, false);

      // Synchronously dispatch our fake event. If the user-provided function
      // errors, it will trigger our global error handler.
      evt.initEvent(evtType, false, false);
      fakeNode.dispatchEvent(evt);

      if (didError) {
        if (!didSetError) {
          // The callback errored, but the error event never fired.
          error = new Error('An error was thrown inside one of your components, but React ' + "doesn't know what it was. This is likely due to browser " + 'flakiness. React does its best to preserve the "Pause on ' + 'exceptions" behavior of the DevTools, which requires some ' + "DEV-mode only tricks. It's possible that these don't work in " + 'your browser. Try triggering the error in production mode, ' + 'or switching to a modern browser. If you suspect that this is ' + 'actually an issue with React, please file an issue.');
        } else if (isCrossOriginError) {
          error = new Error("A cross-origin error was thrown. React doesn't have access to " + 'the actual error object in development. ' + 'See https://fb.me/react-crossorigin-error for more information.');
        }
        this._hasCaughtError = true;
        this._caughtError = error;
      } else {
        this._hasCaughtError = false;
        this._caughtError = null;
      }

      // Remove our event listeners
      window.removeEventListener('error', onError);
    };

    invokeGuardedCallback = invokeGuardedCallbackDev;
  }
}

var invokeGuardedCallback$1 = invokeGuardedCallback;

var ReactErrorUtils = {
  // Used by Fiber to simulate a try-catch.
  _caughtError: null,
  _hasCaughtError: false,

  // Used by event system to capture/rethrow the first error.
  _rethrowError: null,
  _hasRethrowError: false,

  /**
   * Call a function while guarding against errors that happens within it.
   * Returns an error if it throws, otherwise null.
   *
   * In production, this is implemented using a try-catch. The reason we don't
   * use a try-catch directly is so that we can swap out a different
   * implementation in DEV mode.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */
  invokeGuardedCallback: function (name, func, context, a, b, c, d, e, f) {
    invokeGuardedCallback$1.apply(ReactErrorUtils, arguments);
  },

  /**
   * Same as invokeGuardedCallback, but instead of returning an error, it stores
   * it in a global so it can be rethrown by `rethrowCaughtError` later.
   * TODO: See if _caughtError and _rethrowError can be unified.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */
  invokeGuardedCallbackAndCatchFirstError: function (name, func, context, a, b, c, d, e, f) {
    ReactErrorUtils.invokeGuardedCallback.apply(this, arguments);
    if (ReactErrorUtils.hasCaughtError()) {
      var error = ReactErrorUtils.clearCaughtError();
      if (!ReactErrorUtils._hasRethrowError) {
        ReactErrorUtils._hasRethrowError = true;
        ReactErrorUtils._rethrowError = error;
      }
    }
  },

  /**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */
  rethrowCaughtError: function () {
    return rethrowCaughtError.apply(ReactErrorUtils, arguments);
  },

  hasCaughtError: function () {
    return ReactErrorUtils._hasCaughtError;
  },

  clearCaughtError: function () {
    if (ReactErrorUtils._hasCaughtError) {
      var error = ReactErrorUtils._caughtError;
      ReactErrorUtils._caughtError = null;
      ReactErrorUtils._hasCaughtError = false;
      return error;
    } else {
      invariant(false, 'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.');
    }
  }
};

var rethrowCaughtError = function () {
  if (ReactErrorUtils._hasRethrowError) {
    var error = ReactErrorUtils._rethrowError;
    ReactErrorUtils._rethrowError = null;
    ReactErrorUtils._hasRethrowError = false;
    throw error;
  }
};

/**
 * Injectable ordering of event plugins.
 */
var eventPluginOrder = null;

/**
 * Injectable mapping from names to event plugin modules.
 */
var namesToPlugins = {};

/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */
function recomputePluginOrdering() {
  if (!eventPluginOrder) {
    // Wait until an `eventPluginOrder` is injected.
    return;
  }
  for (var pluginName in namesToPlugins) {
    var pluginModule = namesToPlugins[pluginName];
    var pluginIndex = eventPluginOrder.indexOf(pluginName);
    !(pluginIndex > -1) ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.', pluginName) : void 0;
    if (plugins[pluginIndex]) {
      continue;
    }
    !pluginModule.extractEvents ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.', pluginName) : void 0;
    plugins[pluginIndex] = pluginModule;
    var publishedEvents = pluginModule.eventTypes;
    for (var eventName in publishedEvents) {
      !publishEventForPlugin(publishedEvents[eventName], pluginModule, eventName) ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : void 0;
    }
  }
}

/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */
function publishEventForPlugin(dispatchConfig, pluginModule, eventName) {
  !!eventNameDispatchConfigs.hasOwnProperty(eventName) ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.', eventName) : void 0;
  eventNameDispatchConfigs[eventName] = dispatchConfig;

  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
  if (phasedRegistrationNames) {
    for (var phaseName in phasedRegistrationNames) {
      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
        var phasedRegistrationName = phasedRegistrationNames[phaseName];
        publishRegistrationName(phasedRegistrationName, pluginModule, eventName);
      }
    }
    return true;
  } else if (dispatchConfig.registrationName) {
    publishRegistrationName(dispatchConfig.registrationName, pluginModule, eventName);
    return true;
  }
  return false;
}

/**
 * Publishes a registration name that is used to identify dispatched events.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */
function publishRegistrationName(registrationName, pluginModule, eventName) {
  !!registrationNameModules[registrationName] ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.', registrationName) : void 0;
  registrationNameModules[registrationName] = pluginModule;
  registrationNameDependencies[registrationName] = pluginModule.eventTypes[eventName].dependencies;

  {
    var lowerCasedName = registrationName.toLowerCase();
    possibleRegistrationNames[lowerCasedName] = registrationName;

    if (registrationName === 'onDoubleClick') {
      possibleRegistrationNames.ondblclick = registrationName;
    }
  }
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */

/**
 * Ordered list of injected plugins.
 */
var plugins = [];

/**
 * Mapping from event name to dispatch config
 */
var eventNameDispatchConfigs = {};

/**
 * Mapping from registration name to plugin module
 */
var registrationNameModules = {};

/**
 * Mapping from registration name to event name
 */
var registrationNameDependencies = {};

/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */
var possibleRegistrationNames = {};
// Trust the developer to only use possibleRegistrationNames in true

/**
 * Injects an ordering of plugins (by plugin name). This allows the ordering
 * to be decoupled from injection of the actual plugins so that ordering is
 * always deterministic regardless of packaging, on-the-fly injection, etc.
 *
 * @param {array} InjectedEventPluginOrder
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginOrder}
 */
function injectEventPluginOrder(injectedEventPluginOrder) {
  !!eventPluginOrder ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.') : void 0;
  // Clone the ordering so it cannot be dynamically mutated.
  eventPluginOrder = Array.prototype.slice.call(injectedEventPluginOrder);
  recomputePluginOrdering();
}

/**
 * Injects plugins to be used by `EventPluginHub`. The plugin names must be
 * in the ordering injected by `injectEventPluginOrder`.
 *
 * Plugins can be injected as part of page initialization or on-the-fly.
 *
 * @param {object} injectedNamesToPlugins Map from names to plugin modules.
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginsByName}
 */
function injectEventPluginsByName(injectedNamesToPlugins) {
  var isOrderingDirty = false;
  for (var pluginName in injectedNamesToPlugins) {
    if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
      continue;
    }
    var pluginModule = injectedNamesToPlugins[pluginName];
    if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== pluginModule) {
      !!namesToPlugins[pluginName] ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.', pluginName) : void 0;
      namesToPlugins[pluginName] = pluginModule;
      isOrderingDirty = true;
    }
  }
  if (isOrderingDirty) {
    recomputePluginOrdering();
  }
}

var EventPluginRegistry = Object.freeze({
	plugins: plugins,
	eventNameDispatchConfigs: eventNameDispatchConfigs,
	registrationNameModules: registrationNameModules,
	registrationNameDependencies: registrationNameDependencies,
	possibleRegistrationNames: possibleRegistrationNames,
	injectEventPluginOrder: injectEventPluginOrder,
	injectEventPluginsByName: injectEventPluginsByName
});

var getFiberCurrentPropsFromNode = null;
var getInstanceFromNode = null;
var getNodeFromInstance = null;

var injection$1 = {
  injectComponentTree: function (Injected) {
    getFiberCurrentPropsFromNode = Injected.getFiberCurrentPropsFromNode;
    getInstanceFromNode = Injected.getInstanceFromNode;
    getNodeFromInstance = Injected.getNodeFromInstance;

    {
      !(getNodeFromInstance && getInstanceFromNode) ? warning(false, 'EventPluginUtils.injection.injectComponentTree(...): Injected ' + 'module is missing getNodeFromInstance or getInstanceFromNode.') : void 0;
    }
  }
};

var validateEventDispatches = void 0;
{
  validateEventDispatches = function (event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchInstances = event._dispatchInstances;

    var listenersIsArr = Array.isArray(dispatchListeners);
    var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;

    var instancesIsArr = Array.isArray(dispatchInstances);
    var instancesLen = instancesIsArr ? dispatchInstances.length : dispatchInstances ? 1 : 0;

    !(instancesIsArr === listenersIsArr && instancesLen === listenersLen) ? warning(false, 'EventPluginUtils: Invalid `event`.') : void 0;
  };
}

/**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @param {function} listener Application-level callback
 * @param {*} inst Internal component instance
 */
function executeDispatch(event, simulated, listener, inst) {
  var type = event.type || 'unknown-event';
  event.currentTarget = getNodeFromInstance(inst);
  ReactErrorUtils.invokeGuardedCallbackAndCatchFirstError(type, listener, undefined, event);
  event.currentTarget = null;
}

/**
 * Standard/simple iteration through an event's collected dispatches.
 */
function executeDispatchesInOrder(event, simulated) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchInstances = event._dispatchInstances;
  {
    validateEventDispatches(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      // Listeners and Instances are two parallel arrays that are always in sync.
      executeDispatch(event, simulated, dispatchListeners[i], dispatchInstances[i]);
    }
  } else if (dispatchListeners) {
    executeDispatch(event, simulated, dispatchListeners, dispatchInstances);
  }
  event._dispatchListeners = null;
  event._dispatchInstances = null;
}

/**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */


/**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 */


/**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 */

/**
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */

function accumulateInto(current, next) {
  !(next != null) ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : void 0;

  if (current == null) {
    return next;
  }

  // Both are not empty. Warning: Never call x.concat(y) when you are not
  // certain that x is an Array (x could be a string with concat method).
  if (Array.isArray(current)) {
    if (Array.isArray(next)) {
      current.push.apply(current, next);
      return current;
    }
    current.push(next);
    return current;
  }

  if (Array.isArray(next)) {
    // A bit too dangerous to mutate `next`.
    return [current].concat(next);
  }

  return [current, next];
}

/**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 * @param {function} cb Callback invoked with each element or a collection.
 * @param {?} [scope] Scope used as `this` in a callback.
 */
function forEachAccumulated(arr, cb, scope) {
  if (Array.isArray(arr)) {
    arr.forEach(cb, scope);
  } else if (arr) {
    cb.call(scope, arr);
  }
}

/**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */
var eventQueue = null;

/**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @private
 */
var executeDispatchesAndRelease = function (event, simulated) {
  if (event) {
    executeDispatchesInOrder(event, simulated);

    if (!event.isPersistent()) {
      event.constructor.release(event);
    }
  }
};
var executeDispatchesAndReleaseSimulated = function (e) {
  return executeDispatchesAndRelease(e, true);
};
var executeDispatchesAndReleaseTopLevel = function (e) {
  return executeDispatchesAndRelease(e, false);
};

function isInteractive(tag) {
  return tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea';
}

function shouldPreventMouseEvent(name, type, props) {
  switch (name) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
      return !!(props.disabled && isInteractive(type));
    default:
      return false;
  }
}

/**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 */

/**
 * Methods for injecting dependencies.
 */
var injection = {
  /**
   * @param {array} InjectedEventPluginOrder
   * @public
   */
  injectEventPluginOrder: injectEventPluginOrder,

  /**
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   */
  injectEventPluginsByName: injectEventPluginsByName
};

/**
 * @param {object} inst The instance, which is the source of events.
 * @param {string} registrationName Name of listener (e.g. `onClick`).
 * @return {?function} The stored callback.
 */
function getListener(inst, registrationName) {
  var listener = void 0;

  // TODO: shouldPreventMouseEvent is DOM-specific and definitely should not
  // live here; needs to be moved to a better place soon
  var stateNode = inst.stateNode;
  if (!stateNode) {
    // Work in progress (ex: onload events in incremental mode).
    return null;
  }
  var props = getFiberCurrentPropsFromNode(stateNode);
  if (!props) {
    // Work in progress.
    return null;
  }
  listener = props[registrationName];
  if (shouldPreventMouseEvent(registrationName, inst.type, props)) {
    return null;
  }
  !(!listener || typeof listener === 'function') ? invariant(false, 'Expected `%s` listener to be a function, instead got a value of `%s` type.', registrationName, typeof listener) : void 0;
  return listener;
}

/**
 * Allows registered plugins an opportunity to extract events from top-level
 * native browser events.
 *
 * @return {*} An accumulation of synthetic events.
 * @internal
 */
function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
  var events = null;
  for (var i = 0; i < plugins.length; i++) {
    // Not every plugin in the ordering may be loaded at runtime.
    var possiblePlugin = plugins[i];
    if (possiblePlugin) {
      var extractedEvents = possiblePlugin.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
      if (extractedEvents) {
        events = accumulateInto(events, extractedEvents);
      }
    }
  }
  return events;
}

function runEventsInBatch(events, simulated) {
  if (events !== null) {
    eventQueue = accumulateInto(eventQueue, events);
  }

  // Set `eventQueue` to null before processing it so that we can tell if more
  // events get enqueued while processing.
  var processingEventQueue = eventQueue;
  eventQueue = null;

  if (!processingEventQueue) {
    return;
  }

  if (simulated) {
    forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
  } else {
    forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
  }
  !!eventQueue ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.') : void 0;
  // This would be a good time to rethrow if any of the event handlers threw.
  ReactErrorUtils.rethrowCaughtError();
}

function runExtractedEventsInBatch(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
  var events = extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
  runEventsInBatch(events, false);
}

var EventPluginHub = Object.freeze({
	injection: injection,
	getListener: getListener,
	runEventsInBatch: runEventsInBatch,
	runExtractedEventsInBatch: runExtractedEventsInBatch
});

var IndeterminateComponent = 0; // Before we know whether it is functional or class
var FunctionalComponent = 1;
var ClassComponent = 2;
var HostRoot = 3; // Root of a host tree. Could be nested inside another node.
var HostPortal = 4; // A subtree. Could be an entry point to a different renderer.
var HostComponent = 5;
var HostText = 6;



var Fragment = 10;
var Mode = 11;
var ContextConsumer = 12;
var ContextProvider = 13;
var ForwardRef = 14;
var Profiler = 15;
var TimeoutComponent = 16;

var randomKey = Math.random().toString(36).slice(2);
var internalInstanceKey = '__reactInternalInstance$' + randomKey;
var internalEventHandlersKey = '__reactEventHandlers$' + randomKey;

function precacheFiberNode(hostInst, node) {
  node[internalInstanceKey] = hostInst;
}

/**
 * Given a DOM node, return the closest ReactDOMComponent or
 * ReactDOMTextComponent instance ancestor.
 */
function getClosestInstanceFromNode(node) {
  if (node[internalInstanceKey]) {
    return node[internalInstanceKey];
  }

  while (!node[internalInstanceKey]) {
    if (node.parentNode) {
      node = node.parentNode;
    } else {
      // Top of the tree. This node must not be part of a React tree (or is
      // unmounted, potentially).
      return null;
    }
  }

  var inst = node[internalInstanceKey];
  if (inst.tag === HostComponent || inst.tag === HostText) {
    // In Fiber, this will always be the deepest root.
    return inst;
  }

  return null;
}

/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */
function getInstanceFromNode$1(node) {
  var inst = node[internalInstanceKey];
  if (inst) {
    if (inst.tag === HostComponent || inst.tag === HostText) {
      return inst;
    } else {
      return null;
    }
  }
  return null;
}

/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */
function getNodeFromInstance$1(inst) {
  if (inst.tag === HostComponent || inst.tag === HostText) {
    // In Fiber this, is just the state node right now. We assume it will be
    // a host component or host text.
    return inst.stateNode;
  }

  // Without this first invariant, passing a non-DOM-component triggers the next
  // invariant for a missing parent, which is super confusing.
  invariant(false, 'getNodeFromInstance: Invalid argument.');
}

function getFiberCurrentPropsFromNode$1(node) {
  return node[internalEventHandlersKey] || null;
}

function updateFiberProps(node, props) {
  node[internalEventHandlersKey] = props;
}

var ReactDOMComponentTree = Object.freeze({
	precacheFiberNode: precacheFiberNode,
	getClosestInstanceFromNode: getClosestInstanceFromNode,
	getInstanceFromNode: getInstanceFromNode$1,
	getNodeFromInstance: getNodeFromInstance$1,
	getFiberCurrentPropsFromNode: getFiberCurrentPropsFromNode$1,
	updateFiberProps: updateFiberProps
});

function getParent(inst) {
  do {
    inst = inst.return;
    // TODO: If this is a HostRoot we might want to bail out.
    // That is depending on if we want nested subtrees (layers) to bubble
    // events to their parent. We could also go through parentNode on the
    // host node but that wouldn't work for React Native and doesn't let us
    // do the portal feature.
  } while (inst && inst.tag !== HostComponent);
  if (inst) {
    return inst;
  }
  return null;
}

/**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */
function getLowestCommonAncestor(instA, instB) {
  var depthA = 0;
  for (var tempA = instA; tempA; tempA = getParent(tempA)) {
    depthA++;
  }
  var depthB = 0;
  for (var tempB = instB; tempB; tempB = getParent(tempB)) {
    depthB++;
  }

  // If A is deeper, crawl up.
  while (depthA - depthB > 0) {
    instA = getParent(instA);
    depthA--;
  }

  // If B is deeper, crawl up.
  while (depthB - depthA > 0) {
    instB = getParent(instB);
    depthB--;
  }

  // Walk in lockstep until we find a match.
  var depth = depthA;
  while (depth--) {
    if (instA === instB || instA === instB.alternate) {
      return instA;
    }
    instA = getParent(instA);
    instB = getParent(instB);
  }
  return null;
}

/**
 * Return if A is an ancestor of B.
 */


/**
 * Return the parent instance of the passed-in instance.
 */
function getParentInstance(inst) {
  return getParent(inst);
}

/**
 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
 */
function traverseTwoPhase(inst, fn, arg) {
  var path = [];
  while (inst) {
    path.push(inst);
    inst = getParent(inst);
  }
  var i = void 0;
  for (i = path.length; i-- > 0;) {
    fn(path[i], 'captured', arg);
  }
  for (i = 0; i < path.length; i++) {
    fn(path[i], 'bubbled', arg);
  }
}

/**
 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
 * should would receive a `mouseEnter` or `mouseLeave` event.
 *
 * Does not invoke the callback on the nearest common ancestor because nothing
 * "entered" or "left" that element.
 */
function traverseEnterLeave(from, to, fn, argFrom, argTo) {
  var common = from && to ? getLowestCommonAncestor(from, to) : null;
  var pathFrom = [];
  while (true) {
    if (!from) {
      break;
    }
    if (from === common) {
      break;
    }
    var alternate = from.alternate;
    if (alternate !== null && alternate === common) {
      break;
    }
    pathFrom.push(from);
    from = getParent(from);
  }
  var pathTo = [];
  while (true) {
    if (!to) {
      break;
    }
    if (to === common) {
      break;
    }
    var _alternate = to.alternate;
    if (_alternate !== null && _alternate === common) {
      break;
    }
    pathTo.push(to);
    to = getParent(to);
  }
  for (var i = 0; i < pathFrom.length; i++) {
    fn(pathFrom[i], 'bubbled', argFrom);
  }
  for (var _i = pathTo.length; _i-- > 0;) {
    fn(pathTo[_i], 'captured', argTo);
  }
}

/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */
function listenerAtPhase(inst, event, propagationPhase) {
  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
  return getListener(inst, registrationName);
}

/**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing even a
 * single one.
 */

/**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */
function accumulateDirectionalDispatches(inst, phase, event) {
  {
    !inst ? warning(false, 'Dispatching inst must not be null') : void 0;
  }
  var listener = listenerAtPhase(inst, event, phase);
  if (listener) {
    event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
    event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
  }
}

/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */
function accumulateTwoPhaseDispatchesSingle(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
  }
}

/**
 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
 */
function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    var targetInst = event._targetInst;
    var parentInst = targetInst ? getParentInstance(targetInst) : null;
    traverseTwoPhase(parentInst, accumulateDirectionalDispatches, event);
  }
}

/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */
function accumulateDispatches(inst, ignoredDirection, event) {
  if (inst && event && event.dispatchConfig.registrationName) {
    var registrationName = event.dispatchConfig.registrationName;
    var listener = getListener(inst, registrationName);
    if (listener) {
      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
      event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
    }
  }
}

/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */
function accumulateDirectDispatchesSingle(event) {
  if (event && event.dispatchConfig.registrationName) {
    accumulateDispatches(event._targetInst, null, event);
  }
}

function accumulateTwoPhaseDispatches(events) {
  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
}

function accumulateTwoPhaseDispatchesSkipTarget(events) {
  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
}

function accumulateEnterLeaveDispatches(leave, enter, from, to) {
  traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
}

function accumulateDirectDispatches(events) {
  forEachAccumulated(events, accumulateDirectDispatchesSingle);
}

var EventPropagators = Object.freeze({
	accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
	accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
	accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches,
	accumulateDirectDispatches: accumulateDirectDispatches
});

// Do not uses the below two methods directly!
// Instead use constants exported from DOMTopLevelEventTypes in ReactDOM.
// (It is the only module that is allowed to access these methods.)

function unsafeCastStringToDOMTopLevelType(topLevelType) {
  return topLevelType;
}

function unsafeCastDOMTopLevelTypeToString(topLevelType) {
  return topLevelType;
}

/**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventName
 * @returns {object}
 */
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};

  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes['Webkit' + styleProp] = 'webkit' + eventName;
  prefixes['Moz' + styleProp] = 'moz' + eventName;
  prefixes['ms' + styleProp] = 'MS' + eventName;
  prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();

  return prefixes;
}

/**
 * A list of event names to a configurable list of vendor prefixes.
 */
var vendorPrefixes = {
  animationend: makePrefixMap('Animation', 'AnimationEnd'),
  animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
  animationstart: makePrefixMap('Animation', 'AnimationStart'),
  transitionend: makePrefixMap('Transition', 'TransitionEnd')
};

/**
 * Event names that have already been detected and prefixed (if applicable).
 */
var prefixedEventNames = {};

/**
 * Element to check for prefixes on.
 */
var style = {};

/**
 * Bootstrap if a DOM exists.
 */
if (ExecutionEnvironment.canUseDOM) {
  style = document.createElement('div').style;

  // On some platforms, in particular some releases of Android 4.x,
  // the un-prefixed "animation" and "transition" properties are defined on the
  // style object but the events that fire will still be prefixed, so we need
  // to check if the un-prefixed events are usable, and if not remove them from the map.
  if (!('AnimationEvent' in window)) {
    delete vendorPrefixes.animationend.animation;
    delete vendorPrefixes.animationiteration.animation;
    delete vendorPrefixes.animationstart.animation;
  }

  // Same as above
  if (!('TransitionEvent' in window)) {
    delete vendorPrefixes.transitionend.transition;
  }
}

/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  } else if (!vendorPrefixes[eventName]) {
    return eventName;
  }

  var prefixMap = vendorPrefixes[eventName];

  for (var styleProp in prefixMap) {
    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
      return prefixedEventNames[eventName] = prefixMap[styleProp];
    }
  }

  return eventName;
}

/**
 * To identify top level events in ReactDOM, we use constants defined by this
 * module. This is the only module that uses the unsafe* methods to express
 * that the constants actually correspond to the browser event names. This lets
 * us save some bundle size by avoiding a top level type -> event name map.
 * The rest of ReactDOM code should import top level types from this file.
 */
var TOP_ABORT = unsafeCastStringToDOMTopLevelType('abort');
var TOP_ANIMATION_END = unsafeCastStringToDOMTopLevelType(getVendorPrefixedEventName('animationend'));
var TOP_ANIMATION_ITERATION = unsafeCastStringToDOMTopLevelType(getVendorPrefixedEventName('animationiteration'));
var TOP_ANIMATION_START = unsafeCastStringToDOMTopLevelType(getVendorPrefixedEventName('animationstart'));
var TOP_BLUR = unsafeCastStringToDOMTopLevelType('blur');
var TOP_CAN_PLAY = unsafeCastStringToDOMTopLevelType('canplay');
var TOP_CAN_PLAY_THROUGH = unsafeCastStringToDOMTopLevelType('canplaythrough');
var TOP_CANCEL = unsafeCastStringToDOMTopLevelType('cancel');
var TOP_CHANGE = unsafeCastStringToDOMTopLevelType('change');
var TOP_CLICK = unsafeCastStringToDOMTopLevelType('click');
var TOP_CLOSE = unsafeCastStringToDOMTopLevelType('close');
var TOP_COMPOSITION_END = unsafeCastStringToDOMTopLevelType('compositionend');
var TOP_COMPOSITION_START = unsafeCastStringToDOMTopLevelType('compositionstart');
var TOP_COMPOSITION_UPDATE = unsafeCastStringToDOMTopLevelType('compositionupdate');
var TOP_CONTEXT_MENU = unsafeCastStringToDOMTopLevelType('contextmenu');
var TOP_COPY = unsafeCastStringToDOMTopLevelType('copy');
var TOP_CUT = unsafeCastStringToDOMTopLevelType('cut');
var TOP_DOUBLE_CLICK = unsafeCastStringToDOMTopLevelType('dblclick');
var TOP_DRAG = unsafeCastStringToDOMTopLevelType('drag');
var TOP_DRAG_END = unsafeCastStringToDOMTopLevelType('dragend');
var TOP_DRAG_ENTER = unsafeCastStringToDOMTopLevelType('dragenter');
var TOP_DRAG_EXIT = unsafeCastStringToDOMTopLevelType('dragexit');
var TOP_DRAG_LEAVE = unsafeCastStringToDOMTopLevelType('dragleave');
var TOP_DRAG_OVER = unsafeCastStringToDOMTopLevelType('dragover');
var TOP_DRAG_START = unsafeCastStringToDOMTopLevelType('dragstart');
var TOP_DROP = unsafeCastStringToDOMTopLevelType('drop');
var TOP_DURATION_CHANGE = unsafeCastStringToDOMTopLevelType('durationchange');
var TOP_EMPTIED = unsafeCastStringToDOMTopLevelType('emptied');
var TOP_ENCRYPTED = unsafeCastStringToDOMTopLevelType('encrypted');
var TOP_ENDED = unsafeCastStringToDOMTopLevelType('ended');
var TOP_ERROR = unsafeCastStringToDOMTopLevelType('error');
var TOP_FOCUS = unsafeCastStringToDOMTopLevelType('focus');
var TOP_GOT_POINTER_CAPTURE = unsafeCastStringToDOMTopLevelType('gotpointercapture');
var TOP_INPUT = unsafeCastStringToDOMTopLevelType('input');
var TOP_INVALID = unsafeCastStringToDOMTopLevelType('invalid');
var TOP_KEY_DOWN = unsafeCastStringToDOMTopLevelType('keydown');
var TOP_KEY_PRESS = unsafeCastStringToDOMTopLevelType('keypress');
var TOP_KEY_UP = unsafeCastStringToDOMTopLevelType('keyup');
var TOP_LOAD = unsafeCastStringToDOMTopLevelType('load');
var TOP_LOAD_START = unsafeCastStringToDOMTopLevelType('loadstart');
var TOP_LOADED_DATA = unsafeCastStringToDOMTopLevelType('loadeddata');
var TOP_LOADED_METADATA = unsafeCastStringToDOMTopLevelType('loadedmetadata');
var TOP_LOST_POINTER_CAPTURE = unsafeCastStringToDOMTopLevelType('lostpointercapture');
var TOP_MOUSE_DOWN = unsafeCastStringToDOMTopLevelType('mousedown');
var TOP_MOUSE_MOVE = unsafeCastStringToDOMTopLevelType('mousemove');
var TOP_MOUSE_OUT = unsafeCastStringToDOMTopLevelType('mouseout');
var TOP_MOUSE_OVER = unsafeCastStringToDOMTopLevelType('mouseover');
var TOP_MOUSE_UP = unsafeCastStringToDOMTopLevelType('mouseup');
var TOP_PASTE = unsafeCastStringToDOMTopLevelType('paste');
var TOP_PAUSE = unsafeCastStringToDOMTopLevelType('pause');
var TOP_PLAY = unsafeCastStringToDOMTopLevelType('play');
var TOP_PLAYING = unsafeCastStringToDOMTopLevelType('playing');
var TOP_POINTER_CANCEL = unsafeCastStringToDOMTopLevelType('pointercancel');
var TOP_POINTER_DOWN = unsafeCastStringToDOMTopLevelType('pointerdown');


var TOP_POINTER_MOVE = unsafeCastStringToDOMTopLevelType('pointermove');
var TOP_POINTER_OUT = unsafeCastStringToDOMTopLevelType('pointerout');
var TOP_POINTER_OVER = unsafeCastStringToDOMTopLevelType('pointerover');
var TOP_POINTER_UP = unsafeCastStringToDOMTopLevelType('pointerup');
var TOP_PROGRESS = unsafeCastStringToDOMTopLevelType('progress');
var TOP_RATE_CHANGE = unsafeCastStringToDOMTopLevelType('ratechange');
var TOP_RESET = unsafeCastStringToDOMTopLevelType('reset');
var TOP_SCROLL = unsafeCastStringToDOMTopLevelType('scroll');
var TOP_SEEKED = unsafeCastStringToDOMTopLevelType('seeked');
var TOP_SEEKING = unsafeCastStringToDOMTopLevelType('seeking');
var TOP_SELECTION_CHANGE = unsafeCastStringToDOMTopLevelType('selectionchange');
var TOP_STALLED = unsafeCastStringToDOMTopLevelType('stalled');
var TOP_SUBMIT = unsafeCastStringToDOMTopLevelType('submit');
var TOP_SUSPEND = unsafeCastStringToDOMTopLevelType('suspend');
var TOP_TEXT_INPUT = unsafeCastStringToDOMTopLevelType('textInput');
var TOP_TIME_UPDATE = unsafeCastStringToDOMTopLevelType('timeupdate');
var TOP_TOGGLE = unsafeCastStringToDOMTopLevelType('toggle');
var TOP_TOUCH_CANCEL = unsafeCastStringToDOMTopLevelType('touchcancel');
var TOP_TOUCH_END = unsafeCastStringToDOMTopLevelType('touchend');
var TOP_TOUCH_MOVE = unsafeCastStringToDOMTopLevelType('touchmove');
var TOP_TOUCH_START = unsafeCastStringToDOMTopLevelType('touchstart');
var TOP_TRANSITION_END = unsafeCastStringToDOMTopLevelType(getVendorPrefixedEventName('transitionend'));
var TOP_VOLUME_CHANGE = unsafeCastStringToDOMTopLevelType('volumechange');
var TOP_WAITING = unsafeCastStringToDOMTopLevelType('waiting');
var TOP_WHEEL = unsafeCastStringToDOMTopLevelType('wheel');

// List of events that need to be individually attached to media elements.
// Note that events in this list will *not* be listened to at the top level
// unless they're explicitly whitelisted in `ReactBrowserEventEmitter.listenTo`.
var mediaEventTypes = [TOP_ABORT, TOP_CAN_PLAY, TOP_CAN_PLAY_THROUGH, TOP_DURATION_CHANGE, TOP_EMPTIED, TOP_ENCRYPTED, TOP_ENDED, TOP_ERROR, TOP_LOADED_DATA, TOP_LOADED_METADATA, TOP_LOAD_START, TOP_PAUSE, TOP_PLAY, TOP_PLAYING, TOP_PROGRESS, TOP_RATE_CHANGE, TOP_SEEKED, TOP_SEEKING, TOP_STALLED, TOP_SUSPEND, TOP_TIME_UPDATE, TOP_VOLUME_CHANGE, TOP_WAITING];

function getRawEventName(topLevelType) {
  return unsafeCastDOMTopLevelTypeToString(topLevelType);
}

var contentKey = null;

/**
 * Gets the key used to access text content on a DOM node.
 *
 * @return {?string} Key used to access text content.
 * @internal
 */
function getTextContentAccessor() {
  if (!contentKey && ExecutionEnvironment.canUseDOM) {
    // Prefer textContent to innerText because many browsers support both but
    // SVG <text> elements don't support innerText even when <div> does.
    contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
  }
  return contentKey;
}

/**
 * This helper object stores information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 *
 */
var compositionState = {
  _root: null,
  _startText: null,
  _fallbackText: null
};

function initialize(nativeEventTarget) {
  compositionState._root = nativeEventTarget;
  compositionState._startText = getText();
  return true;
}

function reset() {
  compositionState._root = null;
  compositionState._startText = null;
  compositionState._fallbackText = null;
}

function getData() {
  if (compositionState._fallbackText) {
    return compositionState._fallbackText;
  }

  var start = void 0;
  var startValue = compositionState._startText;
  var startLength = startValue.length;
  var end = void 0;
  var endValue = getText();
  var endLength = endValue.length;

  for (start = 0; start < startLength; start++) {
    if (startValue[start] !== endValue[start]) {
      break;
    }
  }

  var minEnd = startLength - start;
  for (end = 1; end <= minEnd; end++) {
    if (startValue[startLength - end] !== endValue[endLength - end]) {
      break;
    }
  }

  var sliceTail = end > 1 ? 1 - end : undefined;
  compositionState._fallbackText = endValue.slice(start, sliceTail);
  return compositionState._fallbackText;
}

function getText() {
  if ('value' in compositionState._root) {
    return compositionState._root.value;
  }
  return compositionState._root[getTextContentAccessor()];
}

/* eslint valid-typeof: 0 */

var didWarnForAddedNewProperty = false;
var EVENT_POOL_SIZE = 10;

var shouldBeReleasedProperties = ['dispatchConfig', '_targetInst', 'nativeEvent', 'isDefaultPrevented', 'isPropagationStopped', '_dispatchListeners', '_dispatchInstances'];

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var EventInterface = {
  type: null,
  target: null,
  // currentTarget is set when dispatching; no use in copying it here
  currentTarget: emptyFunction.thatReturnsNull,
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function (event) {
    return event.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};

/**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {*} targetInst Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @param {DOMEventTarget} nativeEventTarget Target node.
 */
function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
  {
    // these have a getter/setter for warnings
    delete this.nativeEvent;
    delete this.preventDefault;
    delete this.stopPropagation;
  }

  this.dispatchConfig = dispatchConfig;
  this._targetInst = targetInst;
  this.nativeEvent = nativeEvent;

  var Interface = this.constructor.Interface;
  for (var propName in Interface) {
    if (!Interface.hasOwnProperty(propName)) {
      continue;
    }
    {
      delete this[propName]; // this has a getter/setter for warnings
    }
    var normalize = Interface[propName];
    if (normalize) {
      this[propName] = normalize(nativeEvent);
    } else {
      if (propName === 'target') {
        this.target = nativeEventTarget;
      } else {
        this[propName] = nativeEvent[propName];
      }
    }
  }

  var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
  if (defaultPrevented) {
    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
  } else {
    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
  }
  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
  return this;
}

_assign(SyntheticEvent.prototype, {
  preventDefault: function () {
    this.defaultPrevented = true;
    var event = this.nativeEvent;
    if (!event) {
      return;
    }

    if (event.preventDefault) {
      event.preventDefault();
    } else if (typeof event.returnValue !== 'unknown') {
      event.returnValue = false;
    }
    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
  },

  stopPropagation: function () {
    var event = this.nativeEvent;
    if (!event) {
      return;
    }

    if (event.stopPropagation) {
      event.stopPropagation();
    } else if (typeof event.cancelBubble !== 'unknown') {
      // The ChangeEventPlugin registers a "propertychange" event for
      // IE. This event does not support bubbling or cancelling, and
      // any references to cancelBubble throw "Member not found".  A
      // typeof check of "unknown" circumvents this issue (and is also
      // IE specific).
      event.cancelBubble = true;
    }

    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
  },

  /**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */
  persist: function () {
    this.isPersistent = emptyFunction.thatReturnsTrue;
  },

  /**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */
  isPersistent: emptyFunction.thatReturnsFalse,

  /**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */
  destructor: function () {
    var Interface = this.constructor.Interface;
    for (var propName in Interface) {
      {
        Object.defineProperty(this, propName, getPooledWarningPropertyDefinition(propName, Interface[propName]));
      }
    }
    for (var i = 0; i < shouldBeReleasedProperties.length; i++) {
      this[shouldBeReleasedProperties[i]] = null;
    }
    {
      Object.defineProperty(this, 'nativeEvent', getPooledWarningPropertyDefinition('nativeEvent', null));
      Object.defineProperty(this, 'preventDefault', getPooledWarningPropertyDefinition('preventDefault', emptyFunction));
      Object.defineProperty(this, 'stopPropagation', getPooledWarningPropertyDefinition('stopPropagation', emptyFunction));
    }
  }
});

SyntheticEvent.Interface = EventInterface;

/**
 * Helper to reduce boilerplate when creating subclasses.
 */
SyntheticEvent.extend = function (Interface) {
  var Super = this;

  var E = function () {};
  E.prototype = Super.prototype;
  var prototype = new E();

  function Class() {
    return Super.apply(this, arguments);
  }
  _assign(prototype, Class.prototype);
  Class.prototype = prototype;
  Class.prototype.constructor = Class;

  Class.Interface = _assign({}, Super.Interface, Interface);
  Class.extend = Super.extend;
  addEventPoolingTo(Class);

  return Class;
};

/** Proxying after everything set on SyntheticEvent
 * to resolve Proxy issue on some WebKit browsers
 * in which some Event properties are set to undefined (GH#10010)
 */
{
  var isProxySupported = typeof Proxy === 'function' &&
  // https://github.com/facebook/react/issues/12011
  !Object.isSealed(new Proxy({}, {}));

  if (isProxySupported) {
    /*eslint-disable no-func-assign */
    SyntheticEvent = new Proxy(SyntheticEvent, {
      construct: function (target, args) {
        return this.apply(target, Object.create(target.prototype), args);
      },
      apply: function (constructor, that, args) {
        return new Proxy(constructor.apply(that, args), {
          set: function (target, prop, value) {
            if (prop !== 'isPersistent' && !target.constructor.Interface.hasOwnProperty(prop) && shouldBeReleasedProperties.indexOf(prop) === -1) {
              !(didWarnForAddedNewProperty || target.isPersistent()) ? warning(false, "This synthetic event is reused for performance reasons. If you're " + "seeing this, you're adding a new property in the synthetic event object. " + 'The property is never released. See ' + 'https://fb.me/react-event-pooling for more information.') : void 0;
              didWarnForAddedNewProperty = true;
            }
            target[prop] = value;
            return true;
          }
        });
      }
    });
    /*eslint-enable no-func-assign */
  }
}

addEventPoolingTo(SyntheticEvent);

/**
 * Helper to nullify syntheticEvent instance properties when destructing
 *
 * @param {String} propName
 * @param {?object} getVal
 * @return {object} defineProperty object
 */
function getPooledWarningPropertyDefinition(propName, getVal) {
  var isFunction = typeof getVal === 'function';
  return {
    configurable: true,
    set: set,
    get: get
  };

  function set(val) {
    var action = isFunction ? 'setting the method' : 'setting the property';
    warn(action, 'This is effectively a no-op');
    return val;
  }

  function get() {
    var action = isFunction ? 'accessing the method' : 'accessing the property';
    var result = isFunction ? 'This is a no-op function' : 'This is set to null';
    warn(action, result);
    return getVal;
  }

  function warn(action, result) {
    var warningCondition = false;
    !warningCondition ? warning(false, "This synthetic event is reused for performance reasons. If you're seeing this, " + "you're %s `%s` on a released/nullified synthetic event. %s. " + 'If you must keep the original synthetic event around, use event.persist(). ' + 'See https://fb.me/react-event-pooling for more information.', action, propName, result) : void 0;
  }
}

function getPooledEvent(dispatchConfig, targetInst, nativeEvent, nativeInst) {
  var EventConstructor = this;
  if (EventConstructor.eventPool.length) {
    var instance = EventConstructor.eventPool.pop();
    EventConstructor.call(instance, dispatchConfig, targetInst, nativeEvent, nativeInst);
    return instance;
  }
  return new EventConstructor(dispatchConfig, targetInst, nativeEvent, nativeInst);
}

function releasePooledEvent(event) {
  var EventConstructor = this;
  !(event instanceof EventConstructor) ? invariant(false, 'Trying to release an event instance  into a pool of a different type.') : void 0;
  event.destructor();
  if (EventConstructor.eventPool.length < EVENT_POOL_SIZE) {
    EventConstructor.eventPool.push(event);
  }
}

function addEventPoolingTo(EventConstructor) {
  EventConstructor.eventPool = [];
  EventConstructor.getPooled = getPooledEvent;
  EventConstructor.release = releasePooledEvent;
}

var SyntheticEvent$1 = SyntheticEvent;

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */
var SyntheticCompositionEvent = SyntheticEvent$1.extend({
  data: null
});

/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */
var SyntheticInputEvent = SyntheticEvent$1.extend({
  data: null
});

var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
var START_KEYCODE = 229;

var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;

var documentMode = null;
if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
  documentMode = document.documentMode;
}

// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode;

// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);

var SPACEBAR_CODE = 32;
var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

// Events and their corresponding property names.
var eventTypes = {
  beforeInput: {
    phasedRegistrationNames: {
      bubbled: 'onBeforeInput',
      captured: 'onBeforeInputCapture'
    },
    dependencies: [TOP_COMPOSITION_END, TOP_KEY_PRESS, TOP_TEXT_INPUT, TOP_PASTE]
  },
  compositionEnd: {
    phasedRegistrationNames: {
      bubbled: 'onCompositionEnd',
      captured: 'onCompositionEndCapture'
    },
    dependencies: [TOP_BLUR, TOP_COMPOSITION_END, TOP_KEY_DOWN, TOP_KEY_PRESS, TOP_KEY_UP, TOP_MOUSE_DOWN]
  },
  compositionStart: {
    phasedRegistrationNames: {
      bubbled: 'onCompositionStart',
      captured: 'onCompositionStartCapture'
    },
    dependencies: [TOP_BLUR, TOP_COMPOSITION_START, TOP_KEY_DOWN, TOP_KEY_PRESS, TOP_KEY_UP, TOP_MOUSE_DOWN]
  },
  compositionUpdate: {
    phasedRegistrationNames: {
      bubbled: 'onCompositionUpdate',
      captured: 'onCompositionUpdateCapture'
    },
    dependencies: [TOP_BLUR, TOP_COMPOSITION_UPDATE, TOP_KEY_DOWN, TOP_KEY_PRESS, TOP_KEY_UP, TOP_MOUSE_DOWN]
  }
};

// Track whether we've ever handled a keypress on the space key.
var hasSpaceKeypress = false;

/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */
function isKeypressCommand(nativeEvent) {
  return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
  // ctrlKey && altKey is equivalent to AltGr, and is not a command.
  !(nativeEvent.ctrlKey && nativeEvent.altKey);
}

/**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */
function getCompositionEventType(topLevelType) {
  switch (topLevelType) {
    case TOP_COMPOSITION_START:
      return eventTypes.compositionStart;
    case TOP_COMPOSITION_END:
      return eventTypes.compositionEnd;
    case TOP_COMPOSITION_UPDATE:
      return eventTypes.compositionUpdate;
  }
}

/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function isFallbackCompositionStart(topLevelType, nativeEvent) {
  return topLevelType === TOP_KEY_DOWN && nativeEvent.keyCode === START_KEYCODE;
}

/**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function isFallbackCompositionEnd(topLevelType, nativeEvent) {
  switch (topLevelType) {
    case TOP_KEY_UP:
      // Command keys insert or clear IME input.
      return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
    case TOP_KEY_DOWN:
      // Expect IME keyCode on each keydown. If we get any other
      // code we must have exited earlier.
      return nativeEvent.keyCode !== START_KEYCODE;
    case TOP_KEY_PRESS:
    case TOP_MOUSE_DOWN:
    case TOP_BLUR:
      // Events are not possible without cancelling IME.
      return true;
    default:
      return false;
  }
}

/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */
function getDataFromCustomEvent(nativeEvent) {
  var detail = nativeEvent.detail;
  if (typeof detail === 'object' && 'data' in detail) {
    return detail.data;
  }
  return null;
}

// Track the current IME composition status, if any.
var isComposing = false;

/**
 * @return {?object} A SyntheticCompositionEvent.
 */
function extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
  var eventType = void 0;
  var fallbackData = void 0;

  if (canUseCompositionEvent) {
    eventType = getCompositionEventType(topLevelType);
  } else if (!isComposing) {
    if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
      eventType = eventTypes.compositionStart;
    }
  } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
    eventType = eventTypes.compositionEnd;
  }

  if (!eventType) {
    return null;
  }

  if (useFallbackCompositionData) {
    // The current composition is stored statically and must not be
    // overwritten while composition continues.
    if (!isComposing && eventType === eventTypes.compositionStart) {
      isComposing = initialize(nativeEventTarget);
    } else if (eventType === eventTypes.compositionEnd) {
      if (isComposing) {
        fallbackData = getData();
      }
    }
  }

  var event = SyntheticCompositionEvent.getPooled(eventType, targetInst, nativeEvent, nativeEventTarget);

  if (fallbackData) {
    // Inject data generated from fallback path into the synthetic event.
    // This matches the property of native CompositionEventInterface.
    event.data = fallbackData;
  } else {
    var customData = getDataFromCustomEvent(nativeEvent);
    if (customData !== null) {
      event.data = customData;
    }
  }

  accumulateTwoPhaseDispatches(event);
  return event;
}

/**
 * @param {TopLevelType} topLevelType Number from `TopLevelType`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */
function getNativeBeforeInputChars(topLevelType, nativeEvent) {
  switch (topLevelType) {
    case TOP_COMPOSITION_END:
      return getDataFromCustomEvent(nativeEvent);
    case TOP_KEY_PRESS:
      /**
       * If native `textInput` events are available, our goal is to make
       * use of them. However, there is a special case: the spacebar key.
       * In Webkit, preventing default on a spacebar `textInput` event
       * cancels character insertion, but it *also* causes the browser
       * to fall back to its default spacebar behavior of scrolling the
       * page.
       *
       * Tracking at:
       * https://code.google.com/p/chromium/issues/detail?id=355103
       *
       * To avoid this issue, use the keypress event as if no `textInput`
       * event is available.
       */
      var which = nativeEvent.which;
      if (which !== SPACEBAR_CODE) {
        return null;
      }

      hasSpaceKeypress = true;
      return SPACEBAR_CHAR;

    case TOP_TEXT_INPUT:
      // Record the characters to be added to the DOM.
      var chars = nativeEvent.data;

      // If it's a spacebar character, assume that we have already handled
      // it at the keypress level and bail immediately. Android Chrome
      // doesn't give us keycodes, so we need to blacklist it.
      if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
        return null;
      }

      return chars;

    default:
      // For other native event types, do nothing.
      return null;
  }
}

/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 *
 * @param {number} topLevelType Number from `TopLevelEventTypes`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The fallback string for this `beforeInput` event.
 */
function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
  // If we are currently composing (IME) and using a fallback to do so,
  // try to extract the composed characters from the fallback object.
  // If composition event is available, we extract a string only at
  // compositionevent, otherwise extract it at fallback events.
  if (isComposing) {
    if (topLevelType === TOP_COMPOSITION_END || !canUseCompositionEvent && isFallbackCompositionEnd(topLevelType, nativeEvent)) {
      var chars = getData();
      reset();
      isComposing = false;
      return chars;
    }
    return null;
  }

  switch (topLevelType) {
    case TOP_PASTE:
      // If a paste event occurs after a keypress, throw out the input
      // chars. Paste events should not lead to BeforeInput events.
      return null;
    case TOP_KEY_PRESS:
      /**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */
      if (!isKeypressCommand(nativeEvent)) {
        // IE fires the `keypress` event when a user types an emoji via
        // Touch keyboard of Windows.  In such a case, the `char` property
        // holds an emoji character like `\uD83D\uDE0A`.  Because its length
        // is 2, the property `which` does not represent an emoji correctly.
        // In such a case, we directly return the `char` property instead of
        // using `which`.
        if (nativeEvent.char && nativeEvent.char.length > 1) {
          return nativeEvent.char;
        } else if (nativeEvent.which) {
          return String.fromCharCode(nativeEvent.which);
        }
      }
      return null;
    case TOP_COMPOSITION_END:
      return useFallbackCompositionData ? null : nativeEvent.data;
    default:
      return null;
  }
}

/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @return {?object} A SyntheticInputEvent.
 */
function extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
  var chars = void 0;

  if (canUseTextInputEvent) {
    chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
  } else {
    chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
  }

  // If no characters are being inserted, no BeforeInput event should
  // be fired.
  if (!chars) {
    return null;
  }

  var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, targetInst, nativeEvent, nativeEventTarget);

  event.data = chars;
  accumulateTwoPhaseDispatches(event);
  return event;
}

/**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */
var BeforeInputEventPlugin = {
  eventTypes: eventTypes,

  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var composition = extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget);

    var beforeInput = extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget);

    if (composition === null) {
      return beforeInput;
    }

    if (beforeInput === null) {
      return composition;
    }

    return [composition, beforeInput];
  }
};

// Use to restore controlled state after a change event has fired.

var fiberHostComponent = null;

var ReactControlledComponentInjection = {
  injectFiberControlledHostComponent: function (hostComponentImpl) {
    // The fiber implementation doesn't use dynamic dispatch so we need to
    // inject the implementation.
    fiberHostComponent = hostComponentImpl;
  }
};

var restoreTarget = null;
var restoreQueue = null;

function restoreStateOfTarget(target) {
  // We perform this translation at the end of the event loop so that we
  // always receive the correct fiber here
  var internalInstance = getInstanceFromNode(target);
  if (!internalInstance) {
    // Unmounted
    return;
  }
  !(fiberHostComponent && typeof fiberHostComponent.restoreControlledState === 'function') ? invariant(false, 'Fiber needs to be injected to handle a fiber target for controlled events. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  var props = getFiberCurrentPropsFromNode(internalInstance.stateNode);
  fiberHostComponent.restoreControlledState(internalInstance.stateNode, internalInstance.type, props);
}

var injection$2 = ReactControlledComponentInjection;

function enqueueStateRestore(target) {
  if (restoreTarget) {
    if (restoreQueue) {
      restoreQueue.push(target);
    } else {
      restoreQueue = [target];
    }
  } else {
    restoreTarget = target;
  }
}

function needsStateRestore() {
  return restoreTarget !== null || restoreQueue !== null;
}

function restoreStateIfNeeded() {
  if (!restoreTarget) {
    return;
  }
  var target = restoreTarget;
  var queuedTargets = restoreQueue;
  restoreTarget = null;
  restoreQueue = null;

  restoreStateOfTarget(target);
  if (queuedTargets) {
    for (var i = 0; i < queuedTargets.length; i++) {
      restoreStateOfTarget(queuedTargets[i]);
    }
  }
}

var ReactControlledComponent = Object.freeze({
	injection: injection$2,
	enqueueStateRestore: enqueueStateRestore,
	needsStateRestore: needsStateRestore,
	restoreStateIfNeeded: restoreStateIfNeeded
});

// Used as a way to call batchedUpdates when we don't have a reference to
// the renderer. Such as when we're dispatching events or if third party
// libraries need to call batchedUpdates. Eventually, this API will go away when
// everything is batched by default. We'll then have a similar API to opt-out of
// scheduled work and instead do synchronous work.

// Defaults
var _batchedUpdates = function (fn, bookkeeping) {
  return fn(bookkeeping);
};
var _interactiveUpdates = function (fn, a, b) {
  return fn(a, b);
};
var _flushInteractiveUpdates = function () {};

var isBatching = false;
function batchedUpdates(fn, bookkeeping) {
  if (isBatching) {
    // If we are currently inside another batch, we need to wait until it
    // fully completes before restoring state.
    return fn(bookkeeping);
  }
  isBatching = true;
  try {
    return _batchedUpdates(fn, bookkeeping);
  } finally {
    // Here we wait until all updates have propagated, which is important
    // when using controlled components within layers:
    // https://github.com/facebook/react/issues/1698
    // Then we restore state of any controlled component.
    isBatching = false;
    var controlledComponentsHavePendingUpdates = needsStateRestore();
    if (controlledComponentsHavePendingUpdates) {
      // If a controlled event was fired, we may need to restore the state of
      // the DOM node back to the controlled value. This is necessary when React
      // bails out of the update without touching the DOM.
      _flushInteractiveUpdates();
      restoreStateIfNeeded();
    }
  }
}

function interactiveUpdates(fn, a, b) {
  return _interactiveUpdates(fn, a, b);
}



var injection$3 = {
  injectRenderer: function (renderer) {
    _batchedUpdates = renderer.batchedUpdates;
    _interactiveUpdates = renderer.interactiveUpdates;
    _flushInteractiveUpdates = renderer.flushInteractiveUpdates;
  }
};

/**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */
var supportedInputTypes = {
  color: true,
  date: true,
  datetime: true,
  'datetime-local': true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true
};

function isTextInputElement(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();

  if (nodeName === 'input') {
    return !!supportedInputTypes[elem.type];
  }

  if (nodeName === 'textarea') {
    return true;
  }

  return false;
}

/**
 * HTML nodeType values that represent the type of the node
 */

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var DOCUMENT_NODE = 9;
var DOCUMENT_FRAGMENT_NODE = 11;

/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */
function getEventTarget(nativeEvent) {
  // Fallback to nativeEvent.srcElement for IE9
  // https://github.com/facebook/react/issues/12506
  var target = nativeEvent.target || nativeEvent.srcElement || window;

  // Normalize SVG <use> element events #4963
  if (target.correspondingUseElement) {
    target = target.correspondingUseElement;
  }

  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
  // @see http://www.quirksmode.org/js/events_properties.html
  return target.nodeType === TEXT_NODE ? target.parentNode : target;
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = eventName in document;

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  return isSupported;
}

function isCheckable(elem) {
  var type = elem.type;
  var nodeName = elem.nodeName;
  return nodeName && nodeName.toLowerCase() === 'input' && (type === 'checkbox' || type === 'radio');
}

function getTracker(node) {
  return node._valueTracker;
}

function detachTracker(node) {
  node._valueTracker = null;
}

function getValueFromNode(node) {
  var value = '';
  if (!node) {
    return value;
  }

  if (isCheckable(node)) {
    value = node.checked ? 'true' : 'false';
  } else {
    value = node.value;
  }

  return value;
}

function trackValueOnNode(node) {
  var valueField = isCheckable(node) ? 'checked' : 'value';
  var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);

  var currentValue = '' + node[valueField];

  // if someone has already defined a value or Safari, then bail
  // and don't track value will cause over reporting of changes,
  // but it's better then a hard failure
  // (needed for certain tests that spyOn input values and Safari)
  if (node.hasOwnProperty(valueField) || typeof descriptor === 'undefined' || typeof descriptor.get !== 'function' || typeof descriptor.set !== 'function') {
    return;
  }
  var get = descriptor.get,
      set = descriptor.set;

  Object.defineProperty(node, valueField, {
    configurable: true,
    get: function () {
      return get.call(this);
    },
    set: function (value) {
      currentValue = '' + value;
      set.call(this, value);
    }
  });
  // We could've passed this the first time
  // but it triggers a bug in IE11 and Edge 14/15.
  // Calling defineProperty() again should be equivalent.
  // https://github.com/facebook/react/issues/11768
  Object.defineProperty(node, valueField, {
    enumerable: descriptor.enumerable
  });

  var tracker = {
    getValue: function () {
      return currentValue;
    },
    setValue: function (value) {
      currentValue = '' + value;
    },
    stopTracking: function () {
      detachTracker(node);
      delete node[valueField];
    }
  };
  return tracker;
}

function track(node) {
  if (getTracker(node)) {
    return;
  }

  // TODO: Once it's just Fiber we can move this to node._wrapperState
  node._valueTracker = trackValueOnNode(node);
}

function updateValueIfChanged(node) {
  if (!node) {
    return false;
  }

  var tracker = getTracker(node);
  // if there is no tracker at this point it's unlikely
  // that trying again will succeed
  if (!tracker) {
    return true;
  }

  var lastValue = tracker.getValue();
  var nextValue = getValueFromNode(node);
  if (nextValue !== lastValue) {
    tracker.setValue(nextValue);
    return true;
  }
  return false;
}

var ReactInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

var ReactCurrentOwner = ReactInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame = ReactInternals.ReactDebugCurrentFrame;

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_TIMEOUT_TYPE = hasSymbol ? Symbol.for('react.timeout') : 0xead1;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_ASYNC_MODE_TYPE:
      return 'AsyncMode';
    case REACT_CONTEXT_TYPE:
      return 'Context.Consumer';
    case REACT_FRAGMENT_TYPE:
      return 'ReactFragment';
    case REACT_PORTAL_TYPE:
      return 'ReactPortal';
    case REACT_PROFILER_TYPE:
      return 'Profiler(' + fiber.pendingProps.id + ')';
    case REACT_PROVIDER_TYPE:
      return 'Context.Provider';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_TIMEOUT_TYPE:
      return 'Timeout';
  }
  if (typeof type === 'object' && type !== null) {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        var functionName = type.render.displayName || type.render.name || '';
        return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    }
  }
  return null;
}

function describeFiber(fiber) {
  switch (fiber.tag) {
    case IndeterminateComponent:
    case FunctionalComponent:
    case ClassComponent:
    case HostComponent:
      var owner = fiber._debugOwner;
      var source = fiber._debugSource;
      var name = getComponentName(fiber);
      var ownerName = null;
      if (owner) {
        ownerName = getComponentName(owner);
      }
      return describeComponentFrame(name, source, ownerName);
    default:
      return '';
  }
}

// This function can only be called with a work-in-progress fiber and
// only during begin or complete phase. Do not call it under any other
// circumstances.
function getStackAddendumByWorkInProgressFiber(workInProgress) {
  var info = '';
  var node = workInProgress;
  do {
    info += describeFiber(node);
    // Otherwise this return pointer might point to the wrong tree:
    node = node.return;
  } while (node);
  return info;
}

function getCurrentFiberOwnerName$1() {
  {
    var fiber = ReactDebugCurrentFiber.current;
    if (fiber === null) {
      return null;
    }
    var owner = fiber._debugOwner;
    if (owner !== null && typeof owner !== 'undefined') {
      return getComponentName(owner);
    }
  }
  return null;
}

function getCurrentFiberStackAddendum$1() {
  {
    var fiber = ReactDebugCurrentFiber.current;
    if (fiber === null) {
      return null;
    }
    // Safe because if current fiber exists, we are reconciling,
    // and it is guaranteed to be the work-in-progress version.
    return getStackAddendumByWorkInProgressFiber(fiber);
  }
  return null;
}

function resetCurrentFiber() {
  ReactDebugCurrentFrame.getCurrentStack = null;
  ReactDebugCurrentFiber.current = null;
  ReactDebugCurrentFiber.phase = null;
}

function setCurrentFiber(fiber) {
  ReactDebugCurrentFrame.getCurrentStack = getCurrentFiberStackAddendum$1;
  ReactDebugCurrentFiber.current = fiber;
  ReactDebugCurrentFiber.phase = null;
}

function setCurrentPhase(phase) {
  ReactDebugCurrentFiber.phase = phase;
}

var ReactDebugCurrentFiber = {
  current: null,
  phase: null,
  resetCurrentFiber: resetCurrentFiber,
  setCurrentFiber: setCurrentFiber,
  setCurrentPhase: setCurrentPhase,
  getCurrentFiberOwnerName: getCurrentFiberOwnerName$1,
  getCurrentFiberStackAddendum: getCurrentFiberStackAddendum$1
};

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0;

// A simple string attribute.
// Attributes that aren't in the whitelist are presumed to have this type.
var STRING = 1;

// A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.
var BOOLEANISH_STRING = 2;

// A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
var BOOLEAN = 3;

// An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.
var OVERLOADED_BOOLEAN = 4;

// An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.
var NUMERIC = 5;

// An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.
var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
/* eslint-enable max-len */
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';


var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');

var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};

function isAttributeNameSafe(attributeName) {
  if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
    return true;
  }
  if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
    return false;
  }
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }
  illegalAttributeNameCache[attributeName] = true;
  {
    warning(false, 'Invalid attribute name: `%s`', attributeName);
  }
  return false;
}

function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }
  if (isCustomComponentTag) {
    return false;
  }
  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }
  return false;
}

function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }
  switch (typeof value) {
    case 'function':
    // $FlowIssue symbol is perfectly valid here
    case 'symbol':
      // eslint-disable-line
      return true;
    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }
        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }
    default:
      return false;
  }
}

function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }
  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }
  if (isCustomComponentTag) {
    return false;
  }
  if (propertyInfo !== null) {
    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;
      case OVERLOADED_BOOLEAN:
        return value === false;
      case NUMERIC:
        return isNaN(value);
      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }
  return false;
}

function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
}

// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
var properties = {};

// These props are reserved by React. They shouldn't be written to the DOM.
['children', 'dangerouslySetInnerHTML',
// TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];

  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null);
} // attributeNamespace
);

// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
['autoReverse', 'externalResourcesRequired', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML boolean attributes.
['allowFullScreen', 'async',
// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless',
// Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
['checked',
// Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
['capture', 'download'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that must be positive numbers.
['cols', 'rows', 'size', 'span'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that must be numbers.
['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

var CAMELIZE = /[\-\:]([a-z])/g;
var capitalize = function (token) {
  return token[1].toUpperCase();
};

// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML whitelist.
// Some of these attributes can be hard to find. This list was created by
// scrapping the MDN documentation.
['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null);
} // attributeNamespace
);

// String SVG attributes with the xlink namespace.
['xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink');
});

// String SVG attributes with the xml namespace.
['xml:base', 'xml:lang', 'xml:space'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace');
});

// Special case: this attribute exists both in HTML and SVG.
// Its "tabindex" attribute name is case-sensitive in SVG so we can't just use
// its React `tabIndex` name, like we do for attributes that exist only in HTML.
properties.tabIndex = new PropertyInfoRecord('tabIndex', STRING, false, // mustUseProperty
'tabindex', // attributeName
null);

/**
 * Get the value for a property on a node. Only used in DEV for SSR validation.
 * The "expected" argument is used as a hint of what the expected value is.
 * Some properties have multiple equivalent values.
 */
function getValueForProperty(node, name, expected, propertyInfo) {
  {
    if (propertyInfo.mustUseProperty) {
      var propertyName = propertyInfo.propertyName;

      return node[propertyName];
    } else {
      var attributeName = propertyInfo.attributeName;

      var stringValue = null;

      if (propertyInfo.type === OVERLOADED_BOOLEAN) {
        if (node.hasAttribute(attributeName)) {
          var value = node.getAttribute(attributeName);
          if (value === '') {
            return true;
          }
          if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
            return value;
          }
          if (value === '' + expected) {
            return expected;
          }
          return value;
        }
      } else if (node.hasAttribute(attributeName)) {
        if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
          // We had an attribute but shouldn't have had one, so read it
          // for the error message.
          return node.getAttribute(attributeName);
        }
        if (propertyInfo.type === BOOLEAN) {
          // If this was a boolean, it doesn't matter what the value is
          // the fact that we have it is the same as the expected.
          return expected;
        }
        // Even if this property uses a namespace we use getAttribute
        // because we assume its namespaced name is the same as our config.
        // To use getAttributeNS we need the local name which we don't have
        // in our config atm.
        stringValue = node.getAttribute(attributeName);
      }

      if (shouldRemoveAttribute(name, expected, propertyInfo, false)) {
        return stringValue === null ? expected : stringValue;
      } else if (stringValue === '' + expected) {
        return expected;
      } else {
        return stringValue;
      }
    }
  }
}

/**
 * Get the value for a attribute on a node. Only used in DEV for SSR validation.
 * The third argument is used as a hint of what the expected value is. Some
 * attributes have multiple equivalent values.
 */
function getValueForAttribute(node, name, expected) {
  {
    if (!isAttributeNameSafe(name)) {
      return;
    }
    if (!node.hasAttribute(name)) {
      return expected === undefined ? undefined : null;
    }
    var value = node.getAttribute(name);
    if (value === '' + expected) {
      return expected;
    }
    return value;
  }
}

/**
 * Sets the value for a property on a node.
 *
 * @param {DOMElement} node
 * @param {string} name
 * @param {*} value
 */
function setValueForProperty(node, name, value, isCustomComponentTag) {
  var propertyInfo = getPropertyInfo(name);
  if (shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag)) {
    return;
  }
  if (shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag)) {
    value = null;
  }
  // If the prop isn't in the special list, treat it as a simple attribute.
  if (isCustomComponentTag || propertyInfo === null) {
    if (isAttributeNameSafe(name)) {
      var _attributeName = name;
      if (value === null) {
        node.removeAttribute(_attributeName);
      } else {
        node.setAttribute(_attributeName, '' + value);
      }
    }
    return;
  }
  var mustUseProperty = propertyInfo.mustUseProperty;

  if (mustUseProperty) {
    var propertyName = propertyInfo.propertyName;

    if (value === null) {
      var type = propertyInfo.type;

      node[propertyName] = type === BOOLEAN ? false : '';
    } else {
      // Contrary to `setAttribute`, object properties are properly
      // `toString`ed by IE8/9.
      node[propertyName] = value;
    }
    return;
  }
  // The rest are treated as attributes with special cases.
  var attributeName = propertyInfo.attributeName,
      attributeNamespace = propertyInfo.attributeNamespace;

  if (value === null) {
    node.removeAttribute(attributeName);
  } else {
    var _type = propertyInfo.type;

    var attributeValue = void 0;
    if (_type === BOOLEAN || _type === OVERLOADED_BOOLEAN && value === true) {
      attributeValue = '';
    } else {
      // `setAttribute` with objects becomes only `[object]` in IE8/9,
      // ('' + value) makes it output the correct toString()-value.
      attributeValue = '' + value;
    }
    if (attributeNamespace) {
      node.setAttributeNS(attributeNamespace, attributeName, attributeValue);
    } else {
      node.setAttribute(attributeName, attributeValue);
    }
  }
}

var ReactControlledValuePropTypes = {
  checkPropTypes: null
};

{
  var hasReadOnlyValue = {
    button: true,
    checkbox: true,
    image: true,
    hidden: true,
    radio: true,
    reset: true,
    submit: true
  };

  var propTypes = {
    value: function (props, propName, componentName) {
      if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
        return null;
      }
      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function (props, propName, componentName) {
      if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
        return null;
      }
      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  };

  /**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */
  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props, getStack) {
    checkPropTypes(propTypes, props, 'prop', tagName, getStack);
  };
}

// TODO: direct imports like some-package/src/* are bad. Fix me.
var getCurrentFiberOwnerName = ReactDebugCurrentFiber.getCurrentFiberOwnerName;
var getCurrentFiberStackAddendum = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;

var didWarnValueDefaultValue = false;
var didWarnCheckedDefaultChecked = false;
var didWarnControlledToUncontrolled = false;
var didWarnUncontrolledToControlled = false;

function isControlled(props) {
  var usesChecked = props.type === 'checkbox' || props.type === 'radio';
  return usesChecked ? props.checked != null : props.value != null;
}

/**
 * Implements an <input> host component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * See http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */

function getHostProps(element, props) {
  var node = element;
  var checked = props.checked;

  var hostProps = _assign({}, props, {
    defaultChecked: undefined,
    defaultValue: undefined,
    value: undefined,
    checked: checked != null ? checked : node._wrapperState.initialChecked
  });

  return hostProps;
}

function initWrapperState(element, props) {
  {
    ReactControlledValuePropTypes.checkPropTypes('input', props, getCurrentFiberStackAddendum);

    if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnCheckedDefaultChecked) {
      warning(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', getCurrentFiberOwnerName() || 'A component', props.type);
      didWarnCheckedDefaultChecked = true;
    }
    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
      warning(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', getCurrentFiberOwnerName() || 'A component', props.type);
      didWarnValueDefaultValue = true;
    }
  }

  var node = element;
  var defaultValue = props.defaultValue == null ? '' : props.defaultValue;

  node._wrapperState = {
    initialChecked: props.checked != null ? props.checked : props.defaultChecked,
    initialValue: getSafeValue(props.value != null ? props.value : defaultValue),
    controlled: isControlled(props)
  };
}

function updateChecked(element, props) {
  var node = element;
  var checked = props.checked;
  if (checked != null) {
    setValueForProperty(node, 'checked', checked, false);
  }
}

function updateWrapper(element, props) {
  var node = element;
  {
    var _controlled = isControlled(props);

    if (!node._wrapperState.controlled && _controlled && !didWarnUncontrolledToControlled) {
      warning(false, 'A component is changing an uncontrolled input of type %s to be controlled. ' + 'Input elements should not switch from uncontrolled to controlled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components%s', props.type, getCurrentFiberStackAddendum());
      didWarnUncontrolledToControlled = true;
    }
    if (node._wrapperState.controlled && !_controlled && !didWarnControlledToUncontrolled) {
      warning(false, 'A component is changing a controlled input of type %s to be uncontrolled. ' + 'Input elements should not switch from controlled to uncontrolled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components%s', props.type, getCurrentFiberStackAddendum());
      didWarnControlledToUncontrolled = true;
    }
  }

  updateChecked(element, props);

  var value = getSafeValue(props.value);

  if (value != null) {
    if (props.type === 'number') {
      if (value === 0 && node.value === '' ||
      // eslint-disable-next-line
      node.value != value) {
        node.value = '' + value;
      }
    } else if (node.value !== '' + value) {
      node.value = '' + value;
    }
  }

  if (props.hasOwnProperty('value')) {
    setDefaultValue(node, props.type, value);
  } else if (props.hasOwnProperty('defaultValue')) {
    setDefaultValue(node, props.type, getSafeValue(props.defaultValue));
  }

  if (props.checked == null && props.defaultChecked != null) {
    node.defaultChecked = !!props.defaultChecked;
  }
}

function postMountWrapper(element, props, isHydrating) {
  var node = element;

  if (props.hasOwnProperty('value') || props.hasOwnProperty('defaultValue')) {
    var _initialValue = '' + node._wrapperState.initialValue;
    var currentValue = node.value;

    // Do not assign value if it is already set. This prevents user text input
    // from being lost during SSR hydration.
    if (!isHydrating) {
      // Do not re-assign the value property if there is no change. This
      // potentially avoids a DOM write and prevents Firefox (~60.0.1) from
      // prematurely marking required inputs as invalid
      if (_initialValue !== currentValue) {
        node.value = _initialValue;
      }
    }

    // value must be assigned before defaultValue. This fixes an issue where the
    // visually displayed value of date inputs disappears on mobile Safari and Chrome:
    // https://github.com/facebook/react/issues/7233
    node.defaultValue = _initialValue;
  }

  // Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
  // this is needed to work around a chrome bug where setting defaultChecked
  // will sometimes influence the value of checked (even after detachment).
  // Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
  // We need to temporarily unset name to avoid disrupting radio button groups.
  var name = node.name;
  if (name !== '') {
    node.name = '';
  }
  node.defaultChecked = !node.defaultChecked;
  node.defaultChecked = !node.defaultChecked;
  if (name !== '') {
    node.name = name;
  }
}

function restoreControlledState(element, props) {
  var node = element;
  updateWrapper(node, props);
  updateNamedCousins(node, props);
}

function updateNamedCousins(rootNode, props) {
  var name = props.name;
  if (props.type === 'radio' && name != null) {
    var queryRoot = rootNode;

    while (queryRoot.parentNode) {
      queryRoot = queryRoot.parentNode;
    }

    // If `rootNode.form` was non-null, then we could try `form.elements`,
    // but that sometimes behaves strangely in IE8. We could also try using
    // `form.getElementsByName`, but that will only return direct children
    // and won't include inputs that use the HTML5 `form=` attribute. Since
    // the input might not even be in a form. It might not even be in the
    // document. Let's just use the local `querySelectorAll` to ensure we don't
    // miss anything.
    var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');

    for (var i = 0; i < group.length; i++) {
      var otherNode = group[i];
      if (otherNode === rootNode || otherNode.form !== rootNode.form) {
        continue;
      }
      // This will throw if radio buttons rendered by different copies of React
      // and the same name are rendered into the same form (same as #1939).
      // That's probably okay; we don't support it just as we don't support
      // mixing React radio buttons with non-React ones.
      var otherProps = getFiberCurrentPropsFromNode$1(otherNode);
      !otherProps ? invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.') : void 0;

      // We need update the tracked value on the named cousin since the value
      // was changed but the input saw no event or value set
      updateValueIfChanged(otherNode);

      // If this is a controlled radio button group, forcing the input that
      // was previously checked to update will cause it to be come re-checked
      // as appropriate.
      updateWrapper(otherNode, otherProps);
    }
  }
}

// In Chrome, assigning defaultValue to certain input types triggers input validation.
// For number inputs, the display value loses trailing decimal points. For email inputs,
// Chrome raises "The specified value <x> is not a valid email address".
//
// Here we check to see if the defaultValue has actually changed, avoiding these problems
// when the user is inputting text
//
// https://github.com/facebook/react/issues/7253
function setDefaultValue(node, type, value) {
  if (
  // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
  type !== 'number' || node.ownerDocument.activeElement !== node) {
    if (value == null) {
      node.defaultValue = '' + node._wrapperState.initialValue;
    } else if (node.defaultValue !== '' + value) {
      node.defaultValue = '' + value;
    }
  }
}

function getSafeValue(value) {
  switch (typeof value) {
    case 'boolean':
    case 'number':
    case 'object':
    case 'string':
    case 'undefined':
      return value;
    default:
      // function, symbol are assigned as empty strings
      return '';
  }
}

var eventTypes$1 = {
  change: {
    phasedRegistrationNames: {
      bubbled: 'onChange',
      captured: 'onChangeCapture'
    },
    dependencies: [TOP_BLUR, TOP_CHANGE, TOP_CLICK, TOP_FOCUS, TOP_INPUT, TOP_KEY_DOWN, TOP_KEY_UP, TOP_SELECTION_CHANGE]
  }
};

function createAndAccumulateChangeEvent(inst, nativeEvent, target) {
  var event = SyntheticEvent$1.getPooled(eventTypes$1.change, inst, nativeEvent, target);
  event.type = 'change';
  // Flag this event loop as needing state restore.
  enqueueStateRestore(target);
  accumulateTwoPhaseDispatches(event);
  return event;
}
/**
 * For IE shims
 */
var activeElement = null;
var activeElementInst = null;

/**
 * SECTION: handle `change` event
 */
function shouldUseChangeEvent(elem) {
  var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
  return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
}

function manualDispatchChangeEvent(nativeEvent) {
  var event = createAndAccumulateChangeEvent(activeElementInst, nativeEvent, getEventTarget(nativeEvent));

  // If change and propertychange bubbled, we'd just bind to it like all the
  // other events and have it go through ReactBrowserEventEmitter. Since it
  // doesn't, we manually listen for the events and so we have to enqueue and
  // process the abstract event manually.
  //
  // Batching is necessary here in order to ensure that all event handlers run
  // before the next rerender (including event handlers attached to ancestor
  // elements instead of directly on the input). Without this, controlled
  // components don't work properly in conjunction with event bubbling because
  // the component is rerendered and the value reverted before all the event
  // handlers can run. See https://github.com/facebook/react/issues/708.
  batchedUpdates(runEventInBatch, event);
}

function runEventInBatch(event) {
  runEventsInBatch(event, false);
}

function getInstIfValueChanged(targetInst) {
  var targetNode = getNodeFromInstance$1(targetInst);
  if (updateValueIfChanged(targetNode)) {
    return targetInst;
  }
}

function getTargetInstForChangeEvent(topLevelType, targetInst) {
  if (topLevelType === TOP_CHANGE) {
    return targetInst;
  }
}

/**
 * SECTION: handle `input` event
 */
var isInputEventSupported = false;
if (ExecutionEnvironment.canUseDOM) {
  // IE9 claims to support the input event but fails to trigger it when
  // deleting text, so we ignore its input events.
  isInputEventSupported = isEventSupported('input') && (!document.documentMode || document.documentMode > 9);
}

/**
 * (For IE <=9) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */
function startWatchingForValueChange(target, targetInst) {
  activeElement = target;
  activeElementInst = targetInst;
  activeElement.attachEvent('onpropertychange', handlePropertyChange);
}

/**
 * (For IE <=9) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */
function stopWatchingForValueChange() {
  if (!activeElement) {
    return;
  }
  activeElement.detachEvent('onpropertychange', handlePropertyChange);
  activeElement = null;
  activeElementInst = null;
}

/**
 * (For IE <=9) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */
function handlePropertyChange(nativeEvent) {
  if (nativeEvent.propertyName !== 'value') {
    return;
  }
  if (getInstIfValueChanged(activeElementInst)) {
    manualDispatchChangeEvent(nativeEvent);
  }
}

function handleEventsForInputEventPolyfill(topLevelType, target, targetInst) {
  if (topLevelType === TOP_FOCUS) {
    // In IE9, propertychange fires for most input events but is buggy and
    // doesn't fire when text is deleted, but conveniently, selectionchange
    // appears to fire in all of the remaining cases so we catch those and
    // forward the event if the value has changed
    // In either case, we don't want to call the event handler if the value
    // is changed from JS so we redefine a setter for `.value` that updates
    // our activeElementValue variable, allowing us to ignore those changes
    //
    // stopWatching() should be a noop here but we call it just in case we
    // missed a blur event somehow.
    stopWatchingForValueChange();
    startWatchingForValueChange(target, targetInst);
  } else if (topLevelType === TOP_BLUR) {
    stopWatchingForValueChange();
  }
}

// For IE8 and IE9.
function getTargetInstForInputEventPolyfill(topLevelType, targetInst) {
  if (topLevelType === TOP_SELECTION_CHANGE || topLevelType === TOP_KEY_UP || topLevelType === TOP_KEY_DOWN) {
    // On the selectionchange event, the target is just document which isn't
    // helpful for us so just check activeElement instead.
    //
    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
    // propertychange on the first input event after setting `value` from a
    // script and fires only keydown, keypress, keyup. Catching keyup usually
    // gets it and catching keydown lets us fire an event for the first
    // keystroke if user does a key repeat (it'll be a little delayed: right
    // before the second keystroke). Other input methods (e.g., paste) seem to
    // fire selectionchange normally.
    return getInstIfValueChanged(activeElementInst);
  }
}

/**
 * SECTION: handle `click` event
 */
function shouldUseClickEvent(elem) {
  // Use the `click` event to detect changes to checkbox and radio inputs.
  // This approach works across all browsers, whereas `change` does not fire
  // until `blur` in IE8.
  var nodeName = elem.nodeName;
  return nodeName && nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
}

function getTargetInstForClickEvent(topLevelType, targetInst) {
  if (topLevelType === TOP_CLICK) {
    return getInstIfValueChanged(targetInst);
  }
}

function getTargetInstForInputOrChangeEvent(topLevelType, targetInst) {
  if (topLevelType === TOP_INPUT || topLevelType === TOP_CHANGE) {
    return getInstIfValueChanged(targetInst);
  }
}

function handleControlledInputBlur(node) {
  var state = node._wrapperState;

  if (!state || !state.controlled || node.type !== 'number') {
    return;
  }

  // If controlled, assign the value attribute to the current value on blur
  setDefaultValue(node, 'number', node.value);
}

/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */
var ChangeEventPlugin = {
  eventTypes: eventTypes$1,

  _isInputEventSupported: isInputEventSupported,

  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var targetNode = targetInst ? getNodeFromInstance$1(targetInst) : window;

    var getTargetInstFunc = void 0,
        handleEventFunc = void 0;
    if (shouldUseChangeEvent(targetNode)) {
      getTargetInstFunc = getTargetInstForChangeEvent;
    } else if (isTextInputElement(targetNode)) {
      if (isInputEventSupported) {
        getTargetInstFunc = getTargetInstForInputOrChangeEvent;
      } else {
        getTargetInstFunc = getTargetInstForInputEventPolyfill;
        handleEventFunc = handleEventsForInputEventPolyfill;
      }
    } else if (shouldUseClickEvent(targetNode)) {
      getTargetInstFunc = getTargetInstForClickEvent;
    }

    if (getTargetInstFunc) {
      var inst = getTargetInstFunc(topLevelType, targetInst);
      if (inst) {
        var event = createAndAccumulateChangeEvent(inst, nativeEvent, nativeEventTarget);
        return event;
      }
    }

    if (handleEventFunc) {
      handleEventFunc(topLevelType, targetNode, targetInst);
    }

    // When blurring, set the value attribute for number inputs
    if (topLevelType === TOP_BLUR) {
      handleControlledInputBlur(targetNode);
    }
  }
};

/**
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */
var DOMEventPluginOrder = ['ResponderEventPlugin', 'SimpleEventPlugin', 'TapEventPlugin', 'EnterLeaveEventPlugin', 'ChangeEventPlugin', 'SelectEventPlugin', 'BeforeInputEventPlugin'];

var SyntheticUIEvent = SyntheticEvent$1.extend({
  view: null,
  detail: null
});

/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */

var modifierKeyToProp = {
  Alt: 'altKey',
  Control: 'ctrlKey',
  Meta: 'metaKey',
  Shift: 'shiftKey'
};

// IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function modifierStateGetter(keyArg) {
  var syntheticEvent = this;
  var nativeEvent = syntheticEvent.nativeEvent;
  if (nativeEvent.getModifierState) {
    return nativeEvent.getModifierState(keyArg);
  }
  var keyProp = modifierKeyToProp[keyArg];
  return keyProp ? !!nativeEvent[keyProp] : false;
}

function getEventModifierState(nativeEvent) {
  return modifierStateGetter;
}

/**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var SyntheticMouseEvent = SyntheticUIEvent.extend({
  screenX: null,
  screenY: null,
  clientX: null,
  clientY: null,
  pageX: null,
  pageY: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  getModifierState: getEventModifierState,
  button: null,
  buttons: null,
  relatedTarget: function (event) {
    return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
  }
});

/**
 * @interface PointerEvent
 * @see http://www.w3.org/TR/pointerevents/
 */
var SyntheticPointerEvent = SyntheticMouseEvent.extend({
  pointerId: null,
  width: null,
  height: null,
  pressure: null,
  tiltX: null,
  tiltY: null,
  pointerType: null,
  isPrimary: null
});

var eventTypes$2 = {
  mouseEnter: {
    registrationName: 'onMouseEnter',
    dependencies: [TOP_MOUSE_OUT, TOP_MOUSE_OVER]
  },
  mouseLeave: {
    registrationName: 'onMouseLeave',
    dependencies: [TOP_MOUSE_OUT, TOP_MOUSE_OVER]
  },
  pointerEnter: {
    registrationName: 'onPointerEnter',
    dependencies: [TOP_POINTER_OUT, TOP_POINTER_OVER]
  },
  pointerLeave: {
    registrationName: 'onPointerLeave',
    dependencies: [TOP_POINTER_OUT, TOP_POINTER_OVER]
  }
};

var EnterLeaveEventPlugin = {
  eventTypes: eventTypes$2,

  /**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   */
  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var isOverEvent = topLevelType === TOP_MOUSE_OVER || topLevelType === TOP_POINTER_OVER;
    var isOutEvent = topLevelType === TOP_MOUSE_OUT || topLevelType === TOP_POINTER_OUT;

    if (isOverEvent && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
      return null;
    }

    if (!isOutEvent && !isOverEvent) {
      // Must not be a mouse or pointer in or out - ignoring.
      return null;
    }

    var win = void 0;
    if (nativeEventTarget.window === nativeEventTarget) {
      // `nativeEventTarget` is probably a window object.
      win = nativeEventTarget;
    } else {
      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
      var doc = nativeEventTarget.ownerDocument;
      if (doc) {
        win = doc.defaultView || doc.parentWindow;
      } else {
        win = window;
      }
    }

    var from = void 0;
    var to = void 0;
    if (isOutEvent) {
      from = targetInst;
      var related = nativeEvent.relatedTarget || nativeEvent.toElement;
      to = related ? getClosestInstanceFromNode(related) : null;
    } else {
      // Moving to a node from outside the window.
      from = null;
      to = targetInst;
    }

    if (from === to) {
      // Nothing pertains to our managed components.
      return null;
    }

    var eventInterface = void 0,
        leaveEventType = void 0,
        enterEventType = void 0,
        eventTypePrefix = void 0;

    if (topLevelType === TOP_MOUSE_OUT || topLevelType === TOP_MOUSE_OVER) {
      eventInterface = SyntheticMouseEvent;
      leaveEventType = eventTypes$2.mouseLeave;
      enterEventType = eventTypes$2.mouseEnter;
      eventTypePrefix = 'mouse';
    } else if (topLevelType === TOP_POINTER_OUT || topLevelType === TOP_POINTER_OVER) {
      eventInterface = SyntheticPointerEvent;
      leaveEventType = eventTypes$2.pointerLeave;
      enterEventType = eventTypes$2.pointerEnter;
      eventTypePrefix = 'pointer';
    }

    var fromNode = from == null ? win : getNodeFromInstance$1(from);
    var toNode = to == null ? win : getNodeFromInstance$1(to);

    var leave = eventInterface.getPooled(leaveEventType, from, nativeEvent, nativeEventTarget);
    leave.type = eventTypePrefix + 'leave';
    leave.target = fromNode;
    leave.relatedTarget = toNode;

    var enter = eventInterface.getPooled(enterEventType, to, nativeEvent, nativeEventTarget);
    enter.type = eventTypePrefix + 'enter';
    enter.target = toNode;
    enter.relatedTarget = fromNode;

    accumulateEnterLeaveDispatches(leave, enter, from, to);

    return [leave, enter];
  }
};

/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 *
 * Note that this module is currently shared and assumed to be stateless.
 * If this becomes an actual Map, that will break.
 */

/**
 * This API should be called `delete` but we'd have to make sure to always
 * transform these to strings for IE support. When this transform is fully
 * supported we can rename it.
 */


function get(key) {
  return key._reactInternalFiber;
}

function has(key) {
  return key._reactInternalFiber !== undefined;
}

function set(key, value) {
  key._reactInternalFiber = value;
}

// Don't change these two values. They're used by React Dev Tools.
var NoEffect = /*              */0;
var PerformedWork = /*         */1;

// You can change the rest (and add more).
var Placement = /*             */2;
var Update = /*                */4;
var PlacementAndUpdate = /*    */6;
var Deletion = /*              */8;
var ContentReset = /*          */16;
var Callback = /*              */32;
var DidCapture = /*            */64;
var Ref = /*                   */128;
var Snapshot = /*              */256;

// Union of all host effects
var HostEffectMask = /*        */511;

var Incomplete = /*            */512;
var ShouldCapture = /*         */1024;

var MOUNTING = 1;
var MOUNTED = 2;
var UNMOUNTED = 3;

function isFiberMountedImpl(fiber) {
  var node = fiber;
  if (!fiber.alternate) {
    // If there is no alternate, this might be a new tree that isn't inserted
    // yet. If it is, then it will have a pending insertion effect on it.
    if ((node.effectTag & Placement) !== NoEffect) {
      return MOUNTING;
    }
    while (node.return) {
      node = node.return;
      if ((node.effectTag & Placement) !== NoEffect) {
        return MOUNTING;
      }
    }
  } else {
    while (node.return) {
      node = node.return;
    }
  }
  if (node.tag === HostRoot) {
    // TODO: Check if this was a nested HostRoot when used with
    // renderContainerIntoSubtree.
    return MOUNTED;
  }
  // If we didn't hit the root, that means that we're in an disconnected tree
  // that has been unmounted.
  return UNMOUNTED;
}

function isFiberMounted(fiber) {
  return isFiberMountedImpl(fiber) === MOUNTED;
}

function isMounted(component) {
  {
    var owner = ReactCurrentOwner.current;
    if (owner !== null && owner.tag === ClassComponent) {
      var ownerFiber = owner;
      var instance = ownerFiber.stateNode;
      !instance._warnedAboutRefsInRender ? warning(false, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', getComponentName(ownerFiber) || 'A component') : void 0;
      instance._warnedAboutRefsInRender = true;
    }
  }

  var fiber = get(component);
  if (!fiber) {
    return false;
  }
  return isFiberMountedImpl(fiber) === MOUNTED;
}

function assertIsMounted(fiber) {
  !(isFiberMountedImpl(fiber) === MOUNTED) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
}

function findCurrentFiberUsingSlowPath(fiber) {
  var alternate = fiber.alternate;
  if (!alternate) {
    // If there is no alternate, then we only need to check if it is mounted.
    var state = isFiberMountedImpl(fiber);
    !(state !== UNMOUNTED) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
    if (state === MOUNTING) {
      return null;
    }
    return fiber;
  }
  // If we have two possible branches, we'll walk backwards up to the root
  // to see what path the root points to. On the way we may hit one of the
  // special cases and we'll deal with them.
  var a = fiber;
  var b = alternate;
  while (true) {
    var parentA = a.return;
    var parentB = parentA ? parentA.alternate : null;
    if (!parentA || !parentB) {
      // We're at the root.
      break;
    }

    // If both copies of the parent fiber point to the same child, we can
    // assume that the child is current. This happens when we bailout on low
    // priority: the bailed out fiber's child reuses the current child.
    if (parentA.child === parentB.child) {
      var child = parentA.child;
      while (child) {
        if (child === a) {
          // We've determined that A is the current branch.
          assertIsMounted(parentA);
          return fiber;
        }
        if (child === b) {
          // We've determined that B is the current branch.
          assertIsMounted(parentA);
          return alternate;
        }
        child = child.sibling;
      }
      // We should never have an alternate for any mounting node. So the only
      // way this could possibly happen is if this was unmounted, if at all.
      invariant(false, 'Unable to find node on an unmounted component.');
    }

    if (a.return !== b.return) {
      // The return pointer of A and the return pointer of B point to different
      // fibers. We assume that return pointers never criss-cross, so A must
      // belong to the child set of A.return, and B must belong to the child
      // set of B.return.
      a = parentA;
      b = parentB;
    } else {
      // The return pointers point to the same fiber. We'll have to use the
      // default, slow path: scan the child sets of each parent alternate to see
      // which child belongs to which set.
      //
      // Search parent A's child set
      var didFindChild = false;
      var _child = parentA.child;
      while (_child) {
        if (_child === a) {
          didFindChild = true;
          a = parentA;
          b = parentB;
          break;
        }
        if (_child === b) {
          didFindChild = true;
          b = parentA;
          a = parentB;
          break;
        }
        _child = _child.sibling;
      }
      if (!didFindChild) {
        // Search parent B's child set
        _child = parentB.child;
        while (_child) {
          if (_child === a) {
            didFindChild = true;
            a = parentB;
            b = parentA;
            break;
          }
          if (_child === b) {
            didFindChild = true;
            b = parentB;
            a = parentA;
            break;
          }
          _child = _child.sibling;
        }
        !didFindChild ? invariant(false, 'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.') : void 0;
      }
    }

    !(a.alternate === b) ? invariant(false, 'Return fibers should always be each others\' alternates. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  }
  // If the root is not a host container, we're in a disconnected tree. I.e.
  // unmounted.
  !(a.tag === HostRoot) ? invariant(false, 'Unable to find node on an unmounted component.') : void 0;
  if (a.stateNode.current === a) {
    // We've determined that A is the current branch.
    return fiber;
  }
  // Otherwise B has to be current branch.
  return alternate;
}

function findCurrentHostFiber(parent) {
  var currentParent = findCurrentFiberUsingSlowPath(parent);
  if (!currentParent) {
    return null;
  }

  // Next we'll drill down this component to find the first HostComponent/Text.
  var node = currentParent;
  while (true) {
    if (node.tag === HostComponent || node.tag === HostText) {
      return node;
    } else if (node.child) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === currentParent) {
      return null;
    }
    while (!node.sibling) {
      if (!node.return || node.return === currentParent) {
        return null;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
  // Flow needs the return null here, but ESLint complains about it.
  // eslint-disable-next-line no-unreachable
  return null;
}

function findCurrentHostFiberWithNoPortals(parent) {
  var currentParent = findCurrentFiberUsingSlowPath(parent);
  if (!currentParent) {
    return null;
  }

  // Next we'll drill down this component to find the first HostComponent/Text.
  var node = currentParent;
  while (true) {
    if (node.tag === HostComponent || node.tag === HostText) {
      return node;
    } else if (node.child && node.tag !== HostPortal) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === currentParent) {
      return null;
    }
    while (!node.sibling) {
      if (!node.return || node.return === currentParent) {
        return null;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
  // Flow needs the return null here, but ESLint complains about it.
  // eslint-disable-next-line no-unreachable
  return null;
}

function addEventBubbleListener(element, eventType, listener) {
  element.addEventListener(eventType, listener, false);
}

function addEventCaptureListener(element, eventType, listener) {
  element.addEventListener(eventType, listener, true);
}

/**
 * @interface Event
 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
 */
var SyntheticAnimationEvent = SyntheticEvent$1.extend({
  animationName: null,
  elapsedTime: null,
  pseudoElement: null
});

/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */
var SyntheticClipboardEvent = SyntheticEvent$1.extend({
  clipboardData: function (event) {
    return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
  }
});

/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var SyntheticFocusEvent = SyntheticUIEvent.extend({
  relatedTarget: null
});

/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */
function getEventCharCode(nativeEvent) {
  var charCode = void 0;
  var keyCode = nativeEvent.keyCode;

  if ('charCode' in nativeEvent) {
    charCode = nativeEvent.charCode;

    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
    if (charCode === 0 && keyCode === 13) {
      charCode = 13;
    }
  } else {
    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
    charCode = keyCode;
  }

  // IE and Edge (on Windows) and Chrome / Safari (on Windows and Linux)
  // report Enter as charCode 10 when ctrl is pressed.
  if (charCode === 10) {
    charCode = 13;
  }

  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
  // Must not discard the (non-)printable Enter-key.
  if (charCode >= 32 || charCode === 13) {
    return charCode;
  }

  return 0;
}

/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var normalizeKey = {
  Esc: 'Escape',
  Spacebar: ' ',
  Left: 'ArrowLeft',
  Up: 'ArrowUp',
  Right: 'ArrowRight',
  Down: 'ArrowDown',
  Del: 'Delete',
  Win: 'OS',
  Menu: 'ContextMenu',
  Apps: 'ContextMenu',
  Scroll: 'ScrollLock',
  MozPrintableKey: 'Unidentified'
};

/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var translateToKey = {
  '8': 'Backspace',
  '9': 'Tab',
  '12': 'Clear',
  '13': 'Enter',
  '16': 'Shift',
  '17': 'Control',
  '18': 'Alt',
  '19': 'Pause',
  '20': 'CapsLock',
  '27': 'Escape',
  '32': ' ',
  '33': 'PageUp',
  '34': 'PageDown',
  '35': 'End',
  '36': 'Home',
  '37': 'ArrowLeft',
  '38': 'ArrowUp',
  '39': 'ArrowRight',
  '40': 'ArrowDown',
  '45': 'Insert',
  '46': 'Delete',
  '112': 'F1',
  '113': 'F2',
  '114': 'F3',
  '115': 'F4',
  '116': 'F5',
  '117': 'F6',
  '118': 'F7',
  '119': 'F8',
  '120': 'F9',
  '121': 'F10',
  '122': 'F11',
  '123': 'F12',
  '144': 'NumLock',
  '145': 'ScrollLock',
  '224': 'Meta'
};

/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */
function getEventKey(nativeEvent) {
  if (nativeEvent.key) {
    // Normalize inconsistent values reported by browsers due to
    // implementations of a working draft specification.

    // FireFox implements `key` but returns `MozPrintableKey` for all
    // printable characters (normalized to `Unidentified`), ignore it.
    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
    if (key !== 'Unidentified') {
      return key;
    }
  }

  // Browser does not implement `key`, polyfill as much of it as we can.
  if (nativeEvent.type === 'keypress') {
    var charCode = getEventCharCode(nativeEvent);

    // The enter-key is technically both printable and non-printable and can
    // thus be captured by `keypress`, no other non-printable key should.
    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
  }
  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
    // While user keyboard layout determines the actual meaning of each
    // `keyCode` value, almost all function keys have a universal value.
    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
  }
  return '';
}

/**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var SyntheticKeyboardEvent = SyntheticUIEvent.extend({
  key: getEventKey,
  location: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  repeat: null,
  locale: null,
  getModifierState: getEventModifierState,
  // Legacy Interface
  charCode: function (event) {
    // `charCode` is the result of a KeyPress event and represents the value of
    // the actual printable character.

    // KeyPress is deprecated, but its replacement is not yet final and not
    // implemented in any major browser. Only KeyPress has charCode.
    if (event.type === 'keypress') {
      return getEventCharCode(event);
    }
    return 0;
  },
  keyCode: function (event) {
    // `keyCode` is the result of a KeyDown/Up event and represents the value of
    // physical keyboard key.

    // The actual meaning of the value depends on the users' keyboard layout
    // which cannot be detected. Assuming that it is a US keyboard layout
    // provides a surprisingly accurate mapping for US and European users.
    // Due to this, it is left to the user to implement at this time.
    if (event.type === 'keydown' || event.type === 'keyup') {
      return event.keyCode;
    }
    return 0;
  },
  which: function (event) {
    // `which` is an alias for either `keyCode` or `charCode` depending on the
    // type of the event.
    if (event.type === 'keypress') {
      return getEventCharCode(event);
    }
    if (event.type === 'keydown' || event.type === 'keyup') {
      return event.keyCode;
    }
    return 0;
  }
});

/**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var SyntheticDragEvent = SyntheticMouseEvent.extend({
  dataTransfer: null
});

/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */
var SyntheticTouchEvent = SyntheticUIEvent.extend({
  touches: null,
  targetTouches: null,
  changedTouches: null,
  altKey: null,
  metaKey: null,
  ctrlKey: null,
  shiftKey: null,
  getModifierState: getEventModifierState
});

/**
 * @interface Event
 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
 */
var SyntheticTransitionEvent = SyntheticEvent$1.extend({
  propertyName: null,
  elapsedTime: null,
  pseudoElement: null
});

/**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var SyntheticWheelEvent = SyntheticMouseEvent.extend({
  deltaX: function (event) {
    return 'deltaX' in event ? event.deltaX : // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
    'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
  },
  deltaY: function (event) {
    return 'deltaY' in event ? event.deltaY : // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
    'wheelDeltaY' in event ? -event.wheelDeltaY : // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
    'wheelDelta' in event ? -event.wheelDelta : 0;
  },

  deltaZ: null,

  // Browsers without "deltaMode" is reporting in raw wheel delta where one
  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
  deltaMode: null
});

/**
 * Turns
 * ['abort', ...]
 * into
 * eventTypes = {
 *   'abort': {
 *     phasedRegistrationNames: {
 *       bubbled: 'onAbort',
 *       captured: 'onAbortCapture',
 *     },
 *     dependencies: [TOP_ABORT],
 *   },
 *   ...
 * };
 * topLevelEventsToDispatchConfig = new Map([
 *   [TOP_ABORT, { sameConfig }],
 * ]);
 */

var interactiveEventTypeNames = [[TOP_BLUR, 'blur'], [TOP_CANCEL, 'cancel'], [TOP_CLICK, 'click'], [TOP_CLOSE, 'close'], [TOP_CONTEXT_MENU, 'contextMenu'], [TOP_COPY, 'copy'], [TOP_CUT, 'cut'], [TOP_DOUBLE_CLICK, 'doubleClick'], [TOP_DRAG_END, 'dragEnd'], [TOP_DRAG_START, 'dragStart'], [TOP_DROP, 'drop'], [TOP_FOCUS, 'focus'], [TOP_INPUT, 'input'], [TOP_INVALID, 'invalid'], [TOP_KEY_DOWN, 'keyDown'], [TOP_KEY_PRESS, 'keyPress'], [TOP_KEY_UP, 'keyUp'], [TOP_MOUSE_DOWN, 'mouseDown'], [TOP_MOUSE_UP, 'mouseUp'], [TOP_PASTE, 'paste'], [TOP_PAUSE, 'pause'], [TOP_PLAY, 'play'], [TOP_POINTER_CANCEL, 'pointerCancel'], [TOP_POINTER_DOWN, 'pointerDown'], [TOP_POINTER_UP, 'pointerUp'], [TOP_RATE_CHANGE, 'rateChange'], [TOP_RESET, 'reset'], [TOP_SEEKED, 'seeked'], [TOP_SUBMIT, 'submit'], [TOP_TOUCH_CANCEL, 'touchCancel'], [TOP_TOUCH_END, 'touchEnd'], [TOP_TOUCH_START, 'touchStart'], [TOP_VOLUME_CHANGE, 'volumeChange']];
var nonInteractiveEventTypeNames = [[TOP_ABORT, 'abort'], [TOP_ANIMATION_END, 'animationEnd'], [TOP_ANIMATION_ITERATION, 'animationIteration'], [TOP_ANIMATION_START, 'animationStart'], [TOP_CAN_PLAY, 'canPlay'], [TOP_CAN_PLAY_THROUGH, 'canPlayThrough'], [TOP_DRAG, 'drag'], [TOP_DRAG_ENTER, 'dragEnter'], [TOP_DRAG_EXIT, 'dragExit'], [TOP_DRAG_LEAVE, 'dragLeave'], [TOP_DRAG_OVER, 'dragOver'], [TOP_DURATION_CHANGE, 'durationChange'], [TOP_EMPTIED, 'emptied'], [TOP_ENCRYPTED, 'encrypted'], [TOP_ENDED, 'ended'], [TOP_ERROR, 'error'], [TOP_GOT_POINTER_CAPTURE, 'gotPointerCapture'], [TOP_LOAD, 'load'], [TOP_LOADED_DATA, 'loadedData'], [TOP_LOADED_METADATA, 'loadedMetadata'], [TOP_LOAD_START, 'loadStart'], [TOP_LOST_POINTER_CAPTURE, 'lostPointerCapture'], [TOP_MOUSE_MOVE, 'mouseMove'], [TOP_MOUSE_OUT, 'mouseOut'], [TOP_MOUSE_OVER, 'mouseOver'], [TOP_PLAYING, 'playing'], [TOP_POINTER_MOVE, 'pointerMove'], [TOP_POINTER_OUT, 'pointerOut'], [TOP_POINTER_OVER, 'pointerOver'], [TOP_PROGRESS, 'progress'], [TOP_SCROLL, 'scroll'], [TOP_SEEKING, 'seeking'], [TOP_STALLED, 'stalled'], [TOP_SUSPEND, 'suspend'], [TOP_TIME_UPDATE, 'timeUpdate'], [TOP_TOGGLE, 'toggle'], [TOP_TOUCH_MOVE, 'touchMove'], [TOP_TRANSITION_END, 'transitionEnd'], [TOP_WAITING, 'waiting'], [TOP_WHEEL, 'wheel']];

var eventTypes$4 = {};
var topLevelEventsToDispatchConfig = {};

function addEventTypeNameToConfig(_ref, isInteractive) {
  var topEvent = _ref[0],
      event = _ref[1];

  var capitalizedEvent = event[0].toUpperCase() + event.slice(1);
  var onEvent = 'on' + capitalizedEvent;

  var type = {
    phasedRegistrationNames: {
      bubbled: onEvent,
      captured: onEvent + 'Capture'
    },
    dependencies: [topEvent],
    isInteractive: isInteractive
  };
  eventTypes$4[event] = type;
  topLevelEventsToDispatchConfig[topEvent] = type;
}

interactiveEventTypeNames.forEach(function (eventTuple) {
  addEventTypeNameToConfig(eventTuple, true);
});
nonInteractiveEventTypeNames.forEach(function (eventTuple) {
  addEventTypeNameToConfig(eventTuple, false);
});

// Only used in DEV for exhaustiveness validation.
var knownHTMLTopLevelTypes = [TOP_ABORT, TOP_CANCEL, TOP_CAN_PLAY, TOP_CAN_PLAY_THROUGH, TOP_CLOSE, TOP_DURATION_CHANGE, TOP_EMPTIED, TOP_ENCRYPTED, TOP_ENDED, TOP_ERROR, TOP_INPUT, TOP_INVALID, TOP_LOAD, TOP_LOADED_DATA, TOP_LOADED_METADATA, TOP_LOAD_START, TOP_PAUSE, TOP_PLAY, TOP_PLAYING, TOP_PROGRESS, TOP_RATE_CHANGE, TOP_RESET, TOP_SEEKED, TOP_SEEKING, TOP_STALLED, TOP_SUBMIT, TOP_SUSPEND, TOP_TIME_UPDATE, TOP_TOGGLE, TOP_VOLUME_CHANGE, TOP_WAITING];

var SimpleEventPlugin = {
  eventTypes: eventTypes$4,

  isInteractiveTopLevelEventType: function (topLevelType) {
    var config = topLevelEventsToDispatchConfig[topLevelType];
    return config !== undefined && config.isInteractive === true;
  },


  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
    if (!dispatchConfig) {
      return null;
    }
    var EventConstructor = void 0;
    switch (topLevelType) {
      case TOP_KEY_PRESS:
        // Firefox creates a keypress event for function keys too. This removes
        // the unwanted keypress events. Enter is however both printable and
        // non-printable. One would expect Tab to be as well (but it isn't).
        if (getEventCharCode(nativeEvent) === 0) {
          return null;
        }
      /* falls through */
      case TOP_KEY_DOWN:
      case TOP_KEY_UP:
        EventConstructor = SyntheticKeyboardEvent;
        break;
      case TOP_BLUR:
      case TOP_FOCUS:
        EventConstructor = SyntheticFocusEvent;
        break;
      case TOP_CLICK:
        // Firefox creates a click event on right mouse clicks. This removes the
        // unwanted click events.
        if (nativeEvent.button === 2) {
          return null;
        }
      /* falls through */
      case TOP_DOUBLE_CLICK:
      case TOP_MOUSE_DOWN:
      case TOP_MOUSE_MOVE:
      case TOP_MOUSE_UP:
      // TODO: Disabled elements should not respond to mouse events
      /* falls through */
      case TOP_MOUSE_OUT:
      case TOP_MOUSE_OVER:
      case TOP_CONTEXT_MENU:
        EventConstructor = SyntheticMouseEvent;
        break;
      case TOP_DRAG:
      case TOP_DRAG_END:
      case TOP_DRAG_ENTER:
      case TOP_DRAG_EXIT:
      case TOP_DRAG_LEAVE:
      case TOP_DRAG_OVER:
      case TOP_DRAG_START:
      case TOP_DROP:
        EventConstructor = SyntheticDragEvent;
        break;
      case TOP_TOUCH_CANCEL:
      case TOP_TOUCH_END:
      case TOP_TOUCH_MOVE:
      case TOP_TOUCH_START:
        EventConstructor = SyntheticTouchEvent;
        break;
      case TOP_ANIMATION_END:
      case TOP_ANIMATION_ITERATION:
      case TOP_ANIMATION_START:
        EventConstructor = SyntheticAnimationEvent;
        break;
      case TOP_TRANSITION_END:
        EventConstructor = SyntheticTransitionEvent;
        break;
      case TOP_SCROLL:
        EventConstructor = SyntheticUIEvent;
        break;
      case TOP_WHEEL:
        EventConstructor = SyntheticWheelEvent;
        break;
      case TOP_COPY:
      case TOP_CUT:
      case TOP_PASTE:
        EventConstructor = SyntheticClipboardEvent;
        break;
      case TOP_GOT_POINTER_CAPTURE:
      case TOP_LOST_POINTER_CAPTURE:
      case TOP_POINTER_CANCEL:
      case TOP_POINTER_DOWN:
      case TOP_POINTER_MOVE:
      case TOP_POINTER_OUT:
      case TOP_POINTER_OVER:
      case TOP_POINTER_UP:
        EventConstructor = SyntheticPointerEvent;
        break;
      default:
        {
          if (knownHTMLTopLevelTypes.indexOf(topLevelType) === -1) {
            warning(false, 'SimpleEventPlugin: Unhandled event type, `%s`. This warning ' + 'is likely caused by a bug in React. Please file an issue.', topLevelType);
          }
        }
        // HTML Events
        // @see http://www.w3.org/TR/html5/index.html#events-0
        EventConstructor = SyntheticEvent$1;
        break;
    }
    var event = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
    accumulateTwoPhaseDispatches(event);
    return event;
  }
};

var isInteractiveTopLevelEventType = SimpleEventPlugin.isInteractiveTopLevelEventType;


var CALLBACK_BOOKKEEPING_POOL_SIZE = 10;
var callbackBookkeepingPool = [];

/**
 * Find the deepest React component completely containing the root of the
 * passed-in instance (for use when entire React trees are nested within each
 * other). If React trees are not nested, returns null.
 */
function findRootContainerNode(inst) {
  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
  // traversal, but caching is difficult to do correctly without using a
  // mutation observer to listen for all DOM changes.
  while (inst.return) {
    inst = inst.return;
  }
  if (inst.tag !== HostRoot) {
    // This can happen if we're in a detached tree.
    return null;
  }
  return inst.stateNode.containerInfo;
}

// Used to store ancestor hierarchy in top level callback
function getTopLevelCallbackBookKeeping(topLevelType, nativeEvent, targetInst) {
  if (callbackBookkeepingPool.length) {
    var instance = callbackBookkeepingPool.pop();
    instance.topLevelType = topLevelType;
    instance.nativeEvent = nativeEvent;
    instance.targetInst = targetInst;
    return instance;
  }
  return {
    topLevelType: topLevelType,
    nativeEvent: nativeEvent,
    targetInst: targetInst,
    ancestors: []
  };
}

function releaseTopLevelCallbackBookKeeping(instance) {
  instance.topLevelType = null;
  instance.nativeEvent = null;
  instance.targetInst = null;
  instance.ancestors.length = 0;
  if (callbackBookkeepingPool.length < CALLBACK_BOOKKEEPING_POOL_SIZE) {
    callbackBookkeepingPool.push(instance);
  }
}

function handleTopLevel(bookKeeping) {
  var targetInst = bookKeeping.targetInst;

  // Loop through the hierarchy, in case there's any nested components.
  // It's important that we build the array of ancestors before calling any
  // event handlers, because event handlers can modify the DOM, leading to
  // inconsistencies with ReactMount's node cache. See #1105.
  var ancestor = targetInst;
  do {
    if (!ancestor) {
      bookKeeping.ancestors.push(ancestor);
      break;
    }
    var root = findRootContainerNode(ancestor);
    if (!root) {
      break;
    }
    bookKeeping.ancestors.push(ancestor);
    ancestor = getClosestInstanceFromNode(root);
  } while (ancestor);

  for (var i = 0; i < bookKeeping.ancestors.length; i++) {
    targetInst = bookKeeping.ancestors[i];
    runExtractedEventsInBatch(bookKeeping.topLevelType, targetInst, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
  }
}

// TODO: can we stop exporting these?
var _enabled = true;

function setEnabled(enabled) {
  _enabled = !!enabled;
}

function isEnabled() {
  return _enabled;
}

/**
 * Traps top-level events by using event bubbling.
 *
 * @param {number} topLevelType Number from `TopLevelEventTypes`.
 * @param {object} element Element on which to attach listener.
 * @return {?object} An object with a remove function which will forcefully
 *                  remove the listener.
 * @internal
 */
function trapBubbledEvent(topLevelType, element) {
  if (!element) {
    return null;
  }
  var dispatch = isInteractiveTopLevelEventType(topLevelType) ? dispatchInteractiveEvent : dispatchEvent;

  addEventBubbleListener(element, getRawEventName(topLevelType),
  // Check if interactive and wrap in interactiveUpdates
  dispatch.bind(null, topLevelType));
}

/**
 * Traps a top-level event by using event capturing.
 *
 * @param {number} topLevelType Number from `TopLevelEventTypes`.
 * @param {object} element Element on which to attach listener.
 * @return {?object} An object with a remove function which will forcefully
 *                  remove the listener.
 * @internal
 */
function trapCapturedEvent(topLevelType, element) {
  if (!element) {
    return null;
  }
  var dispatch = isInteractiveTopLevelEventType(topLevelType) ? dispatchInteractiveEvent : dispatchEvent;

  addEventCaptureListener(element, getRawEventName(topLevelType),
  // Check if interactive and wrap in interactiveUpdates
  dispatch.bind(null, topLevelType));
}

function dispatchInteractiveEvent(topLevelType, nativeEvent) {
  interactiveUpdates(dispatchEvent, topLevelType, nativeEvent);
}

function dispatchEvent(topLevelType, nativeEvent) {
  if (!_enabled) {
    return;
  }

  var nativeEventTarget = getEventTarget(nativeEvent);
  var targetInst = getClosestInstanceFromNode(nativeEventTarget);
  if (targetInst !== null && typeof targetInst.tag === 'number' && !isFiberMounted(targetInst)) {
    // If we get an event (ex: img onload) before committing that
    // component's mount, ignore it for now (that is, treat it as if it was an
    // event on a non-React tree). We might also consider queueing events and
    // dispatching them after the mount.
    targetInst = null;
  }

  var bookKeeping = getTopLevelCallbackBookKeeping(topLevelType, nativeEvent, targetInst);

  try {
    // Event queue being processed in the same cycle allows
    // `preventDefault`.
    batchedUpdates(handleTopLevel, bookKeeping);
  } finally {
    releaseTopLevelCallbackBookKeeping(bookKeeping);
  }
}

var ReactDOMEventListener = Object.freeze({
	get _enabled () { return _enabled; },
	setEnabled: setEnabled,
	isEnabled: isEnabled,
	trapBubbledEvent: trapBubbledEvent,
	trapCapturedEvent: trapCapturedEvent,
	dispatchEvent: dispatchEvent
});

/**
 * Summary of `ReactBrowserEventEmitter` event handling:
 *
 *  - Top-level delegation is used to trap most native browser events. This
 *    may only occur in the main thread and is the responsibility of
 *    ReactDOMEventListener, which is injected and can therefore support
 *    pluggable event sources. This is the only work that occurs in the main
 *    thread.
 *
 *  - We normalize and de-duplicate events to account for browser quirks. This
 *    may be done in the worker thread.
 *
 *  - Forward these native events (with the associated top-level type used to
 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
 *    to extract any synthetic events.
 *
 *  - The `EventPluginHub` will then process each event by annotating them with
 *    "dispatches", a sequence of listeners and IDs that care about that event.
 *
 *  - The `EventPluginHub` then dispatches the events.
 *
 * Overview of React and the event system:
 *
 * +------------+    .
 * |    DOM     |    .
 * +------------+    .
 *       |           .
 *       v           .
 * +------------+    .
 * | ReactEvent |    .
 * |  Listener  |    .
 * +------------+    .                         +-----------+
 *       |           .               +--------+|SimpleEvent|
 *       |           .               |         |Plugin     |
 * +-----|------+    .               v         +-----------+
 * |     |      |    .    +--------------+                    +------------+
 * |     +-----------.--->|EventPluginHub|                    |    Event   |
 * |            |    .    |              |     +-----------+  | Propagators|
 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
 * |            |    .    |              |     +-----------+  |  utilities |
 * |     +-----------.--->|              |                    +------------+
 * |     |      |    .    +--------------+
 * +-----|------+    .                ^        +-----------+
 *       |           .                |        |Enter/Leave|
 *       +           .                +-------+|Plugin     |
 * +-------------+   .                         +-----------+
 * | application |   .
 * |-------------|   .
 * |             |   .
 * |             |   .
 * +-------------+   .
 *                   .
 *    React Core     .  General Purpose Event Plugin System
 */

var alreadyListeningTo = {};
var reactTopListenersCounter = 0;

/**
 * To ensure no conflicts with other potential React instances on the page
 */
var topListenersIDKey = '_reactListenersID' + ('' + Math.random()).slice(2);

function getListeningForDocument(mountAt) {
  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
  // directly.
  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
    mountAt[topListenersIDKey] = reactTopListenersCounter++;
    alreadyListeningTo[mountAt[topListenersIDKey]] = {};
  }
  return alreadyListeningTo[mountAt[topListenersIDKey]];
}

/**
 * We listen for bubbled touch events on the document object.
 *
 * Firefox v8.01 (and possibly others) exhibited strange behavior when
 * mounting `onmousemove` events at some node that was not the document
 * element. The symptoms were that if your mouse is not moving over something
 * contained within that mount point (for example on the background) the
 * top-level listeners for `onmousemove` won't be called. However, if you
 * register the `mousemove` on the document object, then it will of course
 * catch all `mousemove`s. This along with iOS quirks, justifies restricting
 * top-level listeners to the document object only, at least for these
 * movement types of events and possibly all events.
 *
 * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
 *
 * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
 * they bubble to document.
 *
 * @param {string} registrationName Name of listener (e.g. `onClick`).
 * @param {object} mountAt Container where to mount the listener
 */
function listenTo(registrationName, mountAt) {
  var isListening = getListeningForDocument(mountAt);
  var dependencies = registrationNameDependencies[registrationName];

  for (var i = 0; i < dependencies.length; i++) {
    var dependency = dependencies[i];
    if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
      switch (dependency) {
        case TOP_SCROLL:
          trapCapturedEvent(TOP_SCROLL, mountAt);
          break;
        case TOP_FOCUS:
        case TOP_BLUR:
          trapCapturedEvent(TOP_FOCUS, mountAt);
          trapCapturedEvent(TOP_BLUR, mountAt);
          // We set the flag for a single dependency later in this function,
          // but this ensures we mark both as attached rather than just one.
          isListening[TOP_BLUR] = true;
          isListening[TOP_FOCUS] = true;
          break;
        case TOP_CANCEL:
        case TOP_CLOSE:
          if (isEventSupported(getRawEventName(dependency), true)) {
            trapCapturedEvent(dependency, mountAt);
          }
          break;
        case TOP_INVALID:
        case TOP_SUBMIT:
        case TOP_RESET:
          // We listen to them on the target DOM elements.
          // Some of them bubble so we don't want them to fire twice.
          break;
        default:
          // By default, listen on the top level to all non-media events.
          // Media events don't bubble so adding the listener wouldn't do anything.
          var isMediaEvent = mediaEventTypes.indexOf(dependency) !== -1;
          if (!isMediaEvent) {
            trapBubbledEvent(dependency, mountAt);
          }
          break;
      }
      isListening[dependency] = true;
    }
  }
}

function isListeningToAllDependencies(registrationName, mountAt) {
  var isListening = getListeningForDocument(mountAt);
  var dependencies = registrationNameDependencies[registrationName];
  for (var i = 0; i < dependencies.length; i++) {
    var dependency = dependencies[i];
    if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
      return false;
    }
  }
  return true;
}

/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */
function getLeafNode(node) {
  while (node && node.firstChild) {
    node = node.firstChild;
  }
  return node;
}

/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */
function getSiblingNode(node) {
  while (node) {
    if (node.nextSibling) {
      return node.nextSibling;
    }
    node = node.parentNode;
  }
}

/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */
function getNodeForCharacterOffset(root, offset) {
  var node = getLeafNode(root);
  var nodeStart = 0;
  var nodeEnd = 0;

  while (node) {
    if (node.nodeType === TEXT_NODE) {
      nodeEnd = nodeStart + node.textContent.length;

      if (nodeStart <= offset && nodeEnd >= offset) {
        return {
          node: node,
          offset: offset - nodeStart
        };
      }

      nodeStart = nodeEnd;
    }

    node = getLeafNode(getSiblingNode(node));
  }
}

/**
 * @param {DOMElement} outerNode
 * @return {?object}
 */
function getOffsets(outerNode) {
  var selection = window.getSelection && window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return null;
  }

  var anchorNode = selection.anchorNode,
      anchorOffset = selection.anchorOffset,
      focusNode = selection.focusNode,
      focusOffset = selection.focusOffset;

  // In Firefox, anchorNode and focusNode can be "anonymous divs", e.g. the
  // up/down buttons on an <input type="number">. Anonymous divs do not seem to
  // expose properties, triggering a "Permission denied error" if any of its
  // properties are accessed. The only seemingly possible way to avoid erroring
  // is to access a property that typically works for non-anonymous divs and
  // catch any error that may otherwise arise. See
  // https://bugzilla.mozilla.org/show_bug.cgi?id=208427

  try {
    /* eslint-disable no-unused-expressions */
    anchorNode.nodeType;
    focusNode.nodeType;
    /* eslint-enable no-unused-expressions */
  } catch (e) {
    return null;
  }

  return getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset);
}

/**
 * Returns {start, end} where `start` is the character/codepoint index of
 * (anchorNode, anchorOffset) within the textContent of `outerNode`, and
 * `end` is the index of (focusNode, focusOffset).
 *
 * Returns null if you pass in garbage input but we should probably just crash.
 *
 * Exported only for testing.
 */
function getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset) {
  var length = 0;
  var start = -1;
  var end = -1;
  var indexWithinAnchor = 0;
  var indexWithinFocus = 0;
  var node = outerNode;
  var parentNode = null;

  outer: while (true) {
    var next = null;

    while (true) {
      if (node === anchorNode && (anchorOffset === 0 || node.nodeType === TEXT_NODE)) {
        start = length + anchorOffset;
      }
      if (node === focusNode && (focusOffset === 0 || node.nodeType === TEXT_NODE)) {
        end = length + focusOffset;
      }

      if (node.nodeType === TEXT_NODE) {
        length += node.nodeValue.length;
      }

      if ((next = node.firstChild) === null) {
        break;
      }
      // Moving from `node` to its first child `next`.
      parentNode = node;
      node = next;
    }

    while (true) {
      if (node === outerNode) {
        // If `outerNode` has children, this is always the second time visiting
        // it. If it has no children, this is still the first loop, and the only
        // valid selection is anchorNode and focusNode both equal to this node
        // and both offsets 0, in which case we will have handled above.
        break outer;
      }
      if (parentNode === anchorNode && ++indexWithinAnchor === anchorOffset) {
        start = length;
      }
      if (parentNode === focusNode && ++indexWithinFocus === focusOffset) {
        end = length;
      }
      if ((next = node.nextSibling) !== null) {
        break;
      }
      node = parentNode;
      parentNode = node.parentNode;
    }

    // Moving from `node` to its next sibling `next`.
    node = next;
  }

  if (start === -1 || end === -1) {
    // This should never happen. (Would happen if the anchor/focus nodes aren't
    // actually inside the passed-in node.)
    return null;
  }

  return {
    start: start,
    end: end
  };
}

/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programmatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
function setOffsets(node, offsets) {
  if (!window.getSelection) {
    return;
  }

  var selection = window.getSelection();
  var length = node[getTextContentAccessor()].length;
  var start = Math.min(offsets.start, length);
  var end = offsets.end === undefined ? start : Math.min(offsets.end, length);

  // IE 11 uses modern selection, but doesn't support the extend method.
  // Flip backward selections, so we can set with a single range.
  if (!selection.extend && start > end) {
    var temp = end;
    end = start;
    start = temp;
  }

  var startMarker = getNodeForCharacterOffset(node, start);
  var endMarker = getNodeForCharacterOffset(node, end);

  if (startMarker && endMarker) {
    if (selection.rangeCount === 1 && selection.anchorNode === startMarker.node && selection.anchorOffset === startMarker.offset && selection.focusNode === endMarker.node && selection.focusOffset === endMarker.offset) {
      return;
    }
    var range = document.createRange();
    range.setStart(startMarker.node, startMarker.offset);
    selection.removeAllRanges();

    if (start > end) {
      selection.addRange(range);
      selection.extend(endMarker.node, endMarker.offset);
    } else {
      range.setEnd(endMarker.node, endMarker.offset);
      selection.addRange(range);
    }
  }
}

function isInDocument(node) {
  return containsNode(document.documentElement, node);
}

/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */

/**
 * @hasSelectionCapabilities: we get the element types that support selection
 * from https://html.spec.whatwg.org/#do-not-apply, looking at `selectionStart`
 * and `selectionEnd` rows.
 */
function hasSelectionCapabilities(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return nodeName && (nodeName === 'input' && (elem.type === 'text' || elem.type === 'search' || elem.type === 'tel' || elem.type === 'url' || elem.type === 'password') || nodeName === 'textarea' || elem.contentEditable === 'true');
}

function getSelectionInformation() {
  var focusedElem = getActiveElement();
  return {
    focusedElem: focusedElem,
    selectionRange: hasSelectionCapabilities(focusedElem) ? getSelection$1(focusedElem) : null
  };
}

/**
 * @restoreSelection: If any selection information was potentially lost,
 * restore it. This is useful when performing operations that could remove dom
 * nodes and place them back in, resulting in focus being lost.
 */
function restoreSelection(priorSelectionInformation) {
  var curFocusedElem = getActiveElement();
  var priorFocusedElem = priorSelectionInformation.focusedElem;
  var priorSelectionRange = priorSelectionInformation.selectionRange;
  if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
    if (priorSelectionRange !== null && hasSelectionCapabilities(priorFocusedElem)) {
      setSelection(priorFocusedElem, priorSelectionRange);
    }

    // Focusing a node can change the scroll position, which is undesirable
    var ancestors = [];
    var ancestor = priorFocusedElem;
    while (ancestor = ancestor.parentNode) {
      if (ancestor.nodeType === ELEMENT_NODE) {
        ancestors.push({
          element: ancestor,
          left: ancestor.scrollLeft,
          top: ancestor.scrollTop
        });
      }
    }

    if (typeof priorFocusedElem.focus === 'function') {
      priorFocusedElem.focus();
    }

    for (var i = 0; i < ancestors.length; i++) {
      var info = ancestors[i];
      info.element.scrollLeft = info.left;
      info.element.scrollTop = info.top;
    }
  }
}

/**
 * @getSelection: Gets the selection bounds of a focused textarea, input or
 * contentEditable node.
 * -@input: Look up selection bounds of this input
 * -@return {start: selectionStart, end: selectionEnd}
 */
function getSelection$1(input) {
  var selection = void 0;

  if ('selectionStart' in input) {
    // Modern browser with input or textarea.
    selection = {
      start: input.selectionStart,
      end: input.selectionEnd
    };
  } else {
    // Content editable or old IE textarea.
    selection = getOffsets(input);
  }

  return selection || { start: 0, end: 0 };
}

/**
 * @setSelection: Sets the selection bounds of a textarea or input and focuses
 * the input.
 * -@input     Set selection bounds of this input or textarea
 * -@offsets   Object of same form that is returned from get*
 */
function setSelection(input, offsets) {
  var start = offsets.start,
      end = offsets.end;

  if (end === undefined) {
    end = start;
  }

  if ('selectionStart' in input) {
    input.selectionStart = start;
    input.selectionEnd = Math.min(end, input.value.length);
  } else {
    setOffsets(input, offsets);
  }
}

var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;

var eventTypes$3 = {
  select: {
    phasedRegistrationNames: {
      bubbled: 'onSelect',
      captured: 'onSelectCapture'
    },
    dependencies: [TOP_BLUR, TOP_CONTEXT_MENU, TOP_FOCUS, TOP_KEY_DOWN, TOP_KEY_UP, TOP_MOUSE_DOWN, TOP_MOUSE_UP, TOP_SELECTION_CHANGE]
  }
};

var activeElement$1 = null;
var activeElementInst$1 = null;
var lastSelection = null;
var mouseDown = false;

/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @return {object}
 */
function getSelection(node) {
  if ('selectionStart' in node && hasSelectionCapabilities(node)) {
    return {
      start: node.selectionStart,
      end: node.selectionEnd
    };
  } else if (window.getSelection) {
    var selection = window.getSelection();
    return {
      anchorNode: selection.anchorNode,
      anchorOffset: selection.anchorOffset,
      focusNode: selection.focusNode,
      focusOffset: selection.focusOffset
    };
  }
}

/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @return {?SyntheticEvent}
 */
function constructSelectEvent(nativeEvent, nativeEventTarget) {
  // Ensure we have the right element, and that the user is not dragging a
  // selection (this matches native `select` event behavior). In HTML5, select
  // fires only on input and textarea thus if there's no focused element we
  // won't dispatch.
  if (mouseDown || activeElement$1 == null || activeElement$1 !== getActiveElement()) {
    return null;
  }

  // Only fire when selection has actually changed.
  var currentSelection = getSelection(activeElement$1);
  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
    lastSelection = currentSelection;

    var syntheticEvent = SyntheticEvent$1.getPooled(eventTypes$3.select, activeElementInst$1, nativeEvent, nativeEventTarget);

    syntheticEvent.type = 'select';
    syntheticEvent.target = activeElement$1;

    accumulateTwoPhaseDispatches(syntheticEvent);

    return syntheticEvent;
  }

  return null;
}

/**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */
var SelectEventPlugin = {
  eventTypes: eventTypes$3,

  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var doc = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : nativeEventTarget.nodeType === DOCUMENT_NODE ? nativeEventTarget : nativeEventTarget.ownerDocument;
    // Track whether all listeners exists for this plugin. If none exist, we do
    // not extract events. See #3639.
    if (!doc || !isListeningToAllDependencies('onSelect', doc)) {
      return null;
    }

    var targetNode = targetInst ? getNodeFromInstance$1(targetInst) : window;

    switch (topLevelType) {
      // Track the input node that has focus.
      case TOP_FOCUS:
        if (isTextInputElement(targetNode) || targetNode.contentEditable === 'true') {
          activeElement$1 = targetNode;
          activeElementInst$1 = targetInst;
          lastSelection = null;
        }
        break;
      case TOP_BLUR:
        activeElement$1 = null;
        activeElementInst$1 = null;
        lastSelection = null;
        break;
      // Don't fire the event while the user is dragging. This matches the
      // semantics of the native select event.
      case TOP_MOUSE_DOWN:
        mouseDown = true;
        break;
      case TOP_CONTEXT_MENU:
      case TOP_MOUSE_UP:
        mouseDown = false;
        return constructSelectEvent(nativeEvent, nativeEventTarget);
      // Chrome and IE fire non-standard event when selection is changed (and
      // sometimes when it hasn't). IE's event fires out of order with respect
      // to key and input events on deletion, so we discard it.
      //
      // Firefox doesn't support selectionchange, so check selection status
      // after each key entry. The selection changes after keydown and before
      // keyup, but we check on keydown as well in the case of holding down a
      // key, when multiple keydown events are fired but only one keyup is.
      // This is also our approach for IE handling, for the reason above.
      case TOP_SELECTION_CHANGE:
        if (skipSelectionChangeEvent) {
          break;
        }
      // falls through
      case TOP_KEY_DOWN:
      case TOP_KEY_UP:
        return constructSelectEvent(nativeEvent, nativeEventTarget);
    }

    return null;
  }
};

/**
 * Inject modules for resolving DOM hierarchy and plugin ordering.
 */
injection.injectEventPluginOrder(DOMEventPluginOrder);
injection$1.injectComponentTree(ReactDOMComponentTree);

/**
 * Some important event plugins included by default (without having to require
 * them).
 */
injection.injectEventPluginsByName({
  SimpleEventPlugin: SimpleEventPlugin,
  EnterLeaveEventPlugin: EnterLeaveEventPlugin,
  ChangeEventPlugin: ChangeEventPlugin,
  SelectEventPlugin: SelectEventPlugin,
  BeforeInputEventPlugin: BeforeInputEventPlugin
});

// We capture a local reference to any global, in case it gets polyfilled after
// this module is initially evaluated.
// We want to be using a consistent implementation.

var localRequestAnimationFrame$1 = typeof requestAnimationFrame === 'function' ? requestAnimationFrame : undefined;

/**
 * A scheduling library to allow scheduling work with more granular priority and
 * control than requestAnimationFrame and requestIdleCallback.
 * Current TODO items:
 * X- Pull out the scheduleWork polyfill built into React
 * X- Initial test coverage
 * X- Support for multiple callbacks
 * - Support for two priorities; serial and deferred
 * - Better test coverage
 * - Better docblock
 * - Polish documentation, API
 */

// This is a built-in polyfill for requestIdleCallback. It works by scheduling
// a requestAnimationFrame, storing the time for the start of the frame, then
// scheduling a postMessage which gets scheduled after paint. Within the
// postMessage handler do as much work as possible until time + frame rate.
// By separating the idle call into a separate event tick we ensure that
// layout, paint and other browser work is counted against the available time.
// The frame rate is dynamically adjusted.

// We capture a local reference to any global, in case it gets polyfilled after
// this module is initially evaluated.
// We want to be using a consistent implementation.
var localDate = Date;
var localSetTimeout = setTimeout;
var localClearTimeout = clearTimeout;

var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';

var now$1 = void 0;
if (hasNativePerformanceNow) {
  var Performance = performance;
  now$1 = function () {
    return Performance.now();
  };
} else {
  now$1 = function () {
    return localDate.now();
  };
}

var scheduleWork = void 0;
var cancelScheduledWork = void 0;

if (!ExecutionEnvironment.canUseDOM) {
  var timeoutIds = new Map();

  scheduleWork = function (callback, options) {
    // keeping return type consistent
    var callbackConfig = {
      scheduledCallback: callback,
      timeoutTime: 0,
      next: null,
      prev: null
    };
    var timeoutId = localSetTimeout(function () {
      callback({
        timeRemaining: function () {
          return Infinity;
        },

        didTimeout: false
      });
    });
    timeoutIds.set(callback, timeoutId);
    return callbackConfig;
  };
  cancelScheduledWork = function (callbackId) {
    var callback = callbackId.scheduledCallback;
    var timeoutId = timeoutIds.get(callback);
    timeoutIds.delete(callbackId);
    localClearTimeout(timeoutId);
  };
} else {
  {
    if (typeof localRequestAnimationFrame$1 !== 'function') {
      warning(false, 'React depends on requestAnimationFrame. Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
    }
  }

  var localRequestAnimationFrame = typeof localRequestAnimationFrame$1 === 'function' ? localRequestAnimationFrame$1 : function (callback) {
    invariant(false, 'React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills');
  };

  var headOfPendingCallbacksLinkedList = null;
  var tailOfPendingCallbacksLinkedList = null;

  // We track what the next soonest timeoutTime is, to be able to quickly tell
  // if none of the scheduled callbacks have timed out.
  var nextSoonestTimeoutTime = -1;

  var isIdleScheduled = false;
  var isAnimationFrameScheduled = false;

  var frameDeadline = 0;
  // We start out assuming that we run at 30fps but then the heuristic tracking
  // will adjust this value to a faster fps if we get more frequent animation
  // frames.
  var previousFrameTime = 33;
  var activeFrameTime = 33;

  var frameDeadlineObject = {
    didTimeout: false,
    timeRemaining: function () {
      var remaining = frameDeadline - now$1();
      return remaining > 0 ? remaining : 0;
    }
  };

  /**
   * Handles the case where a callback errors:
   * - don't catch the error, because this changes debugging behavior
   * - do start a new postMessage callback, to call any remaining callbacks,
   * - but only if there is an error, so there is not extra overhead.
   */
  var callUnsafely = function (callbackConfig, arg) {
    var callback = callbackConfig.scheduledCallback;
    var finishedCalling = false;
    try {
      callback(arg);
      finishedCalling = true;
    } finally {
      // always remove it from linked list
      cancelScheduledWork(callbackConfig);

      if (!finishedCalling) {
        // an error must have been thrown
        isIdleScheduled = true;
        window.postMessage(messageKey, '*');
      }
    }
  };

  /**
   * Checks for timed out callbacks, runs them, and then checks again to see if
   * any more have timed out.
   * Keeps doing this until there are none which have currently timed out.
   */
  var callTimedOutCallbacks = function () {
    if (headOfPendingCallbacksLinkedList === null) {
      return;
    }

    var currentTime = now$1();
    // TODO: this would be more efficient if deferred callbacks are stored in
    // min heap.
    // Or in a linked list with links for both timeoutTime order and insertion
    // order.
    // For now an easy compromise is the current approach:
    // Keep a pointer to the soonest timeoutTime, and check that first.
    // If it has not expired, we can skip traversing the whole list.
    // If it has expired, then we step through all the callbacks.
    if (nextSoonestTimeoutTime === -1 || nextSoonestTimeoutTime > currentTime) {
      // We know that none of them have timed out yet.
      return;
    }
    // NOTE: we intentionally wait to update the nextSoonestTimeoutTime until
    // after successfully calling any timed out callbacks.
    // If a timed out callback throws an error, we could get stuck in a state
    // where the nextSoonestTimeoutTime was set wrong.
    var updatedNextSoonestTimeoutTime = -1; // we will update nextSoonestTimeoutTime below
    var timedOutCallbacks = [];

    // iterate once to find timed out callbacks and find nextSoonestTimeoutTime
    var currentCallbackConfig = headOfPendingCallbacksLinkedList;
    while (currentCallbackConfig !== null) {
      var _timeoutTime = currentCallbackConfig.timeoutTime;
      if (_timeoutTime !== -1 && _timeoutTime <= currentTime) {
        // it has timed out!
        timedOutCallbacks.push(currentCallbackConfig);
      } else {
        if (_timeoutTime !== -1 && (updatedNextSoonestTimeoutTime === -1 || _timeoutTime < updatedNextSoonestTimeoutTime)) {
          updatedNextSoonestTimeoutTime = _timeoutTime;
        }
      }
      currentCallbackConfig = currentCallbackConfig.next;
    }

    if (timedOutCallbacks.length > 0) {
      frameDeadlineObject.didTimeout = true;
      for (var i = 0, len = timedOutCallbacks.length; i < len; i++) {
        callUnsafely(timedOutCallbacks[i], frameDeadlineObject);
      }
    }

    // NOTE: we intentionally wait to update the nextSoonestTimeoutTime until
    // after successfully calling any timed out callbacks.
    nextSoonestTimeoutTime = updatedNextSoonestTimeoutTime;
  };

  // We use the postMessage trick to defer idle work until after the repaint.
  var messageKey = '__reactIdleCallback$' + Math.random().toString(36).slice(2);
  var idleTick = function (event) {
    if (event.source !== window || event.data !== messageKey) {
      return;
    }
    isIdleScheduled = false;

    if (headOfPendingCallbacksLinkedList === null) {
      return;
    }

    // First call anything which has timed out, until we have caught up.
    callTimedOutCallbacks();

    var currentTime = now$1();
    // Next, as long as we have idle time, try calling more callbacks.
    while (frameDeadline - currentTime > 0 && headOfPendingCallbacksLinkedList !== null) {
      var latestCallbackConfig = headOfPendingCallbacksLinkedList;
      frameDeadlineObject.didTimeout = false;
      // callUnsafely will remove it from the head of the linked list
      callUnsafely(latestCallbackConfig, frameDeadlineObject);
      currentTime = now$1();
    }
    if (headOfPendingCallbacksLinkedList !== null) {
      if (!isAnimationFrameScheduled) {
        // Schedule another animation callback so we retry later.
        isAnimationFrameScheduled = true;
        localRequestAnimationFrame(animationTick);
      }
    }
  };
  // Assumes that we have addEventListener in this environment. Might need
  // something better for old IE.
  window.addEventListener('message', idleTick, false);

  var animationTick = function (rafTime) {
    isAnimationFrameScheduled = false;
    var nextFrameTime = rafTime - frameDeadline + activeFrameTime;
    if (nextFrameTime < activeFrameTime && previousFrameTime < activeFrameTime) {
      if (nextFrameTime < 8) {
        // Defensive coding. We don't support higher frame rates than 120hz.
        // If we get lower than that, it is probably a bug.
        nextFrameTime = 8;
      }
      // If one frame goes long, then the next one can be short to catch up.
      // If two frames are short in a row, then that's an indication that we
      // actually have a higher frame rate than what we're currently optimizing.
      // We adjust our heuristic dynamically accordingly. For example, if we're
      // running on 120hz display or 90hz VR display.
      // Take the max of the two in case one of them was an anomaly due to
      // missed frame deadlines.
      activeFrameTime = nextFrameTime < previousFrameTime ? previousFrameTime : nextFrameTime;
    } else {
      previousFrameTime = nextFrameTime;
    }
    frameDeadline = rafTime + activeFrameTime;
    if (!isIdleScheduled) {
      isIdleScheduled = true;
      window.postMessage(messageKey, '*');
    }
  };

  scheduleWork = function (callback, options) /* CallbackConfigType */{
    var timeoutTime = -1;
    if (options != null && typeof options.timeout === 'number') {
      timeoutTime = now$1() + options.timeout;
    }
    if (nextSoonestTimeoutTime === -1 || timeoutTime !== -1 && timeoutTime < nextSoonestTimeoutTime) {
      nextSoonestTimeoutTime = timeoutTime;
    }

    var scheduledCallbackConfig = {
      scheduledCallback: callback,
      timeoutTime: timeoutTime,
      prev: null,
      next: null
    };
    if (headOfPendingCallbacksLinkedList === null) {
      // Make this callback the head and tail of our list
      headOfPendingCallbacksLinkedList = scheduledCallbackConfig;
      tailOfPendingCallbacksLinkedList = scheduledCallbackConfig;
    } else {
      // Add latest callback as the new tail of the list
      scheduledCallbackConfig.prev = tailOfPendingCallbacksLinkedList;
      // renaming for clarity
      var oldTailOfPendingCallbacksLinkedList = tailOfPendingCallbacksLinkedList;
      if (oldTailOfPendingCallbacksLinkedList !== null) {
        oldTailOfPendingCallbacksLinkedList.next = scheduledCallbackConfig;
      }
      tailOfPendingCallbacksLinkedList = scheduledCallbackConfig;
    }

    if (!isAnimationFrameScheduled) {
      // If rAF didn't already schedule one, we need to schedule a frame.
      // TODO: If this rAF doesn't materialize because the browser throttles, we
      // might want to still have setTimeout trigger scheduleWork as a backup to ensure
      // that we keep performing work.
      isAnimationFrameScheduled = true;
      localRequestAnimationFrame(animationTick);
    }
    return scheduledCallbackConfig;
  };

  cancelScheduledWork = function (callbackConfig /* CallbackConfigType */
  ) {
    if (callbackConfig.prev === null && headOfPendingCallbacksLinkedList !== callbackConfig) {
      // this callbackConfig has already been cancelled.
      // cancelScheduledWork should be idempotent, a no-op after first call.
      return;
    }

    /**
     * There are four possible cases:
     * - Head/nodeToRemove/Tail -> null
     *   In this case we set Head and Tail to null.
     * - Head -> ... middle nodes... -> Tail/nodeToRemove
     *   In this case we point the middle.next to null and put middle as the new
     *   Tail.
     * - Head/nodeToRemove -> ...middle nodes... -> Tail
     *   In this case we point the middle.prev at null and move the Head to
     *   middle.
     * - Head -> ... ?some nodes ... -> nodeToRemove -> ... ?some nodes ... -> Tail
     *   In this case we point the Head.next to the Tail and the Tail.prev to
     *   the Head.
     */
    var next = callbackConfig.next;
    var prev = callbackConfig.prev;
    callbackConfig.next = null;
    callbackConfig.prev = null;
    if (next !== null) {
      // we have a next

      if (prev !== null) {
        // we have a prev

        // callbackConfig is somewhere in the middle of a list of 3 or more nodes.
        prev.next = next;
        next.prev = prev;
        return;
      } else {
        // there is a next but not a previous one;
        // callbackConfig is the head of a list of 2 or more other nodes.
        next.prev = null;
        headOfPendingCallbacksLinkedList = next;
        return;
      }
    } else {
      // there is no next callback config; this must the tail of the list

      if (prev !== null) {
        // we have a prev

        // callbackConfig is the tail of a list of 2 or more other nodes.
        prev.next = null;
        tailOfPendingCallbacksLinkedList = prev;
        return;
      } else {
        // there is no previous callback config;
        // callbackConfig is the only thing in the linked list,
        // so both head and tail point to it.
        headOfPendingCallbacksLinkedList = null;
        tailOfPendingCallbacksLinkedList = null;
        return;
      }
    }
  };
}

var didWarnSelectedSetOnOption = false;

function flattenChildren(children) {
  var content = '';

  // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.
  // We can silently skip them because invalid DOM nesting warning
  // catches these cases in Fiber.
  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }
    if (typeof child === 'string' || typeof child === 'number') {
      content += child;
    }
  });

  return content;
}

/**
 * Implements an <option> host component that warns when `selected` is set.
 */

function validateProps(element, props) {
  // TODO (yungsters): Remove support for `selected` in <option>.
  {
    if (props.selected != null && !didWarnSelectedSetOnOption) {
      warning(false, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.');
      didWarnSelectedSetOnOption = true;
    }
  }
}

function postMountWrapper$1(element, props) {
  // value="" should make a value attribute (#6219)
  if (props.value != null) {
    element.setAttribute('value', props.value);
  }
}

function getHostProps$1(element, props) {
  var hostProps = _assign({ children: undefined }, props);
  var content = flattenChildren(props.children);

  if (content) {
    hostProps.children = content;
  }

  return hostProps;
}

// TODO: direct imports like some-package/src/* are bad. Fix me.
var getCurrentFiberOwnerName$3 = ReactDebugCurrentFiber.getCurrentFiberOwnerName;
var getCurrentFiberStackAddendum$3 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;


var didWarnValueDefaultValue$1 = void 0;

{
  didWarnValueDefaultValue$1 = false;
}

function getDeclarationErrorAddendum() {
  var ownerName = getCurrentFiberOwnerName$3();
  if (ownerName) {
    return '\n\nCheck the render method of `' + ownerName + '`.';
  }
  return '';
}

var valuePropNames = ['value', 'defaultValue'];

/**
 * Validation function for `value` and `defaultValue`.
 */
function checkSelectPropTypes(props) {
  ReactControlledValuePropTypes.checkPropTypes('select', props, getCurrentFiberStackAddendum$3);

  for (var i = 0; i < valuePropNames.length; i++) {
    var propName = valuePropNames[i];
    if (props[propName] == null) {
      continue;
    }
    var isArray = Array.isArray(props[propName]);
    if (props.multiple && !isArray) {
      warning(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, getDeclarationErrorAddendum());
    } else if (!props.multiple && isArray) {
      warning(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, getDeclarationErrorAddendum());
    }
  }
}

function updateOptions(node, multiple, propValue, setDefaultSelected) {
  var options = node.options;

  if (multiple) {
    var selectedValues = propValue;
    var selectedValue = {};
    for (var i = 0; i < selectedValues.length; i++) {
      // Prefix to avoid chaos with special keys.
      selectedValue['$' + selectedValues[i]] = true;
    }
    for (var _i = 0; _i < options.length; _i++) {
      var selected = selectedValue.hasOwnProperty('$' + options[_i].value);
      if (options[_i].selected !== selected) {
        options[_i].selected = selected;
      }
      if (selected && setDefaultSelected) {
        options[_i].defaultSelected = true;
      }
    }
  } else {
    // Do not set `select.value` as exact behavior isn't consistent across all
    // browsers for all cases.
    var _selectedValue = '' + propValue;
    var defaultSelected = null;
    for (var _i2 = 0; _i2 < options.length; _i2++) {
      if (options[_i2].value === _selectedValue) {
        options[_i2].selected = true;
        if (setDefaultSelected) {
          options[_i2].defaultSelected = true;
        }
        return;
      }
      if (defaultSelected === null && !options[_i2].disabled) {
        defaultSelected = options[_i2];
      }
    }
    if (defaultSelected !== null) {
      defaultSelected.selected = true;
    }
  }
}

/**
 * Implements a <select> host component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */

function getHostProps$2(element, props) {
  return _assign({}, props, {
    value: undefined
  });
}

function initWrapperState$1(element, props) {
  var node = element;
  {
    checkSelectPropTypes(props);
  }

  var value = props.value;
  node._wrapperState = {
    initialValue: value != null ? value : props.defaultValue,
    wasMultiple: !!props.multiple
  };

  {
    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue$1) {
      warning(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
      didWarnValueDefaultValue$1 = true;
    }
  }
}

function postMountWrapper$2(element, props) {
  var node = element;
  node.multiple = !!props.multiple;
  var value = props.value;
  if (value != null) {
    updateOptions(node, !!props.multiple, value, false);
  } else if (props.defaultValue != null) {
    updateOptions(node, !!props.multiple, props.defaultValue, true);
  }
}

function postUpdateWrapper(element, props) {
  var node = element;
  // After the initial mount, we control selected-ness manually so don't pass
  // this value down
  node._wrapperState.initialValue = undefined;

  var wasMultiple = node._wrapperState.wasMultiple;
  node._wrapperState.wasMultiple = !!props.multiple;

  var value = props.value;
  if (value != null) {
    updateOptions(node, !!props.multiple, value, false);
  } else if (wasMultiple !== !!props.multiple) {
    // For simplicity, reapply `defaultValue` if `multiple` is toggled.
    if (props.defaultValue != null) {
      updateOptions(node, !!props.multiple, props.defaultValue, true);
    } else {
      // Revert the select back to its default unselected state.
      updateOptions(node, !!props.multiple, props.multiple ? [] : '', false);
    }
  }
}

function restoreControlledState$2(element, props) {
  var node = element;
  var value = props.value;

  if (value != null) {
    updateOptions(node, !!props.multiple, value, false);
  }
}

// TODO: direct imports like some-package/src/* are bad. Fix me.
var getCurrentFiberStackAddendum$4 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;

var didWarnValDefaultVal = false;

/**
 * Implements a <textarea> host component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */

function getHostProps$3(element, props) {
  var node = element;
  !(props.dangerouslySetInnerHTML == null) ? invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : void 0;

  // Always set children to the same thing. In IE9, the selection range will
  // get reset if `textContent` is mutated.  We could add a check in setTextContent
  // to only set the value if/when the value differs from the node value (which would
  // completely solve this IE9 bug), but Sebastian+Sophie seemed to like this
  // solution. The value can be a boolean or object so that's why it's forced
  // to be a string.
  var hostProps = _assign({}, props, {
    value: undefined,
    defaultValue: undefined,
    children: '' + node._wrapperState.initialValue
  });

  return hostProps;
}

function initWrapperState$2(element, props) {
  var node = element;
  {
    ReactControlledValuePropTypes.checkPropTypes('textarea', props, getCurrentFiberStackAddendum$4);
    if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValDefaultVal) {
      warning(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
      didWarnValDefaultVal = true;
    }
  }

  var initialValue = props.value;

  // Only bother fetching default value if we're going to use it
  if (initialValue == null) {
    var defaultValue = props.defaultValue;
    // TODO (yungsters): Remove support for children content in <textarea>.
    var children = props.children;
    if (children != null) {
      {
        warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
      }
      !(defaultValue == null) ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : void 0;
      if (Array.isArray(children)) {
        !(children.length <= 1) ? invariant(false, '<textarea> can only have at most one child.') : void 0;
        children = children[0];
      }

      defaultValue = '' + children;
    }
    if (defaultValue == null) {
      defaultValue = '';
    }
    initialValue = defaultValue;
  }

  node._wrapperState = {
    initialValue: '' + initialValue
  };
}

function updateWrapper$1(element, props) {
  var node = element;
  var value = props.value;
  if (value != null) {
    // Cast `value` to a string to ensure the value is set correctly. While
    // browsers typically do this as necessary, jsdom doesn't.
    var newValue = '' + value;

    // To avoid side effects (such as losing text selection), only set value if changed
    if (newValue !== node.value) {
      node.value = newValue;
    }
    if (props.defaultValue == null) {
      node.defaultValue = newValue;
    }
  }
  if (props.defaultValue != null) {
    node.defaultValue = props.defaultValue;
  }
}

function postMountWrapper$3(element, props) {
  var node = element;
  // This is in postMount because we need access to the DOM node, which is not
  // available until after the component has mounted.
  var textContent = node.textContent;

  // Only set node.value if textContent is equal to the expected
  // initial value. In IE10/IE11 there is a bug where the placeholder attribute
  // will populate textContent as well.
  // https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
  if (textContent === node._wrapperState.initialValue) {
    node.value = textContent;
  }
}

function restoreControlledState$3(element, props) {
  // DOM component is still mounted; update
  updateWrapper$1(element, props);
}

var HTML_NAMESPACE$1 = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

var Namespaces = {
  html: HTML_NAMESPACE$1,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
};

// Assumes there is no parent namespace.
function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;
    case 'math':
      return MATH_NAMESPACE;
    default:
      return HTML_NAMESPACE$1;
  }
}

function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE$1) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }
  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE$1;
  }
  // By default, pass namespace below.
  return parentNamespace;
}

/* globals MSApp */

/**
 * Create a function which has 'unsafe' privileges (required by windows8 apps)
 */
var createMicrosoftUnsafeLocalFunction = function (func) {
  if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
    return function (arg0, arg1, arg2, arg3) {
      MSApp.execUnsafeLocalFunction(function () {
        return func(arg0, arg1, arg2, arg3);
      });
    };
  } else {
    return func;
  }
};

// SVG temp container for IE lacking innerHTML
var reusableSVGContainer = void 0;

/**
 * Set the innerHTML property of a node
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */
var setInnerHTML = createMicrosoftUnsafeLocalFunction(function (node, html) {
  // IE does not have innerHTML for SVG nodes, so instead we inject the
  // new markup in a temp node and then move the child nodes across into
  // the target node

  if (node.namespaceURI === Namespaces.svg && !('innerHTML' in node)) {
    reusableSVGContainer = reusableSVGContainer || document.createElement('div');
    reusableSVGContainer.innerHTML = '<svg>' + html + '</svg>';
    var svgNode = reusableSVGContainer.firstChild;
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    while (svgNode.firstChild) {
      node.appendChild(svgNode.firstChild);
    }
  } else {
    node.innerHTML = html;
  }
});

/**
 * Set the textContent property of a node. For text updates, it's faster
 * to set the `nodeValue` of the Text node directly instead of using
 * `.textContent` which will remove the existing node and create a new one.
 *
 * @param {DOMElement} node
 * @param {string} text
 * @internal
 */
var setTextContent = function (node, text) {
  if (text) {
    var firstChild = node.firstChild;

    if (firstChild && firstChild === node.lastChild && firstChild.nodeType === TEXT_NODE) {
      firstChild.nodeValue = text;
      return;
    }
  }
  node.textContent = text;
};

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var warnValidStyle = emptyFunction;

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var warnHyphenatedStyleName = function (name, getStack) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), getStack());
  };

  var warnBadVendoredStyleName = function (name, getStack) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), getStack());
  };

  var warnStyleValueWithSemicolon = function (name, value, getStack) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    warning(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.%s', name, value.replace(badStyleValueWithSemicolonPattern, ''), getStack());
  };

  var warnStyleValueIsNaN = function (name, value, getStack) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, getStack());
  };

  var warnStyleValueIsInfinity = function (name, value, getStack) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;
    warning(false, '`Infinity` is an invalid value for the `%s` css style property.%s', name, getStack());
  };

  warnValidStyle = function (name, value, getStack) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, getStack);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, getStack);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, getStack);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value, getStack);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value, getStack);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

/**
 * Operations for dealing with CSS properties.
 */

/**
 * This creates a string that is expected to be equivalent to the style
 * attribute generated by server-side rendering. It by-passes warnings and
 * security checks so it's not safe to use this value for anything other than
 * comparison. It is only used in DEV for SSR validation.
 */
function createDangerousStringForStyles(styles) {
  {
    var serialized = '';
    var delimiter = '';
    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;
      }
      var styleValue = styles[styleName];
      if (styleValue != null) {
        var isCustomProperty = styleName.indexOf('--') === 0;
        serialized += delimiter + hyphenateStyleName(styleName) + ':';
        serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);

        delimiter = ';';
      }
    }
    return serialized || null;
  }
}

/**
 * Sets the value for multiple styles on a node.  If a value is specified as
 * '' (empty string), the corresponding style property will be unset.
 *
 * @param {DOMElement} node
 * @param {object} styles
 */
function setValueForStyles(node, styles, getStack) {
  var style = node.style;
  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    var isCustomProperty = styleName.indexOf('--') === 0;
    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styles[styleName], getStack);
      }
    }
    var styleValue = dangerousStyleValue(styleName, styles[styleName], isCustomProperty);
    if (styleName === 'float') {
      styleName = 'cssFloat';
    }
    if (isCustomProperty) {
      style.setProperty(styleName, styleValue);
    } else {
      style[styleName] = styleValue;
    }
  }
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
  // NOTE: menuitem's close tag should be omitted, but that causes problems.
};

// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

var HTML$1 = '__html';

function assertValidProps(tag, props, getStack) {
  if (!props) {
    return;
  }
  // Note the use of `==` which checks for null or undefined.
  if (voidElementTags[tag]) {
    !(props.children == null && props.dangerouslySetInnerHTML == null) ? invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', tag, getStack()) : void 0;
  }
  if (props.dangerouslySetInnerHTML != null) {
    !(props.children == null) ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : void 0;
    !(typeof props.dangerouslySetInnerHTML === 'object' && HTML$1 in props.dangerouslySetInnerHTML) ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : void 0;
  }
  {
    !(props.suppressContentEditableWarning || !props.contentEditable || props.children == null) ? warning(false, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.%s', getStack()) : void 0;
  }
  !(props.style == null || typeof props.style === 'object') ? invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', getStack()) : void 0;
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }
  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',

  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var ariaProperties = {
  'aria-current': 0, // state
  'aria-details': 0,
  'aria-disabled': 0, // state
  'aria-hidden': 0, // state
  'aria-invalid': 0, // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

var hasOwnProperty = Object.prototype.hasOwnProperty;

function getStackAddendum() {
  var stack = ReactDebugCurrentFrame.getStackAddendum();
  return stack != null ? stack : '';
}

function validateProperty(tagName, name) {
  if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
    return true;
  }

  if (rARIACamel.test(name)) {
    var ariaName = 'aria-' + name.slice(4).toLowerCase();
    var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (correctName == null) {
      warning(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.%s', name, getStackAddendum());
      warnedProperties[name] = true;
      return true;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== correctName) {
      warning(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?%s', name, correctName, getStackAddendum());
      warnedProperties[name] = true;
      return true;
    }
  }

  if (rARIA.test(name)) {
    var lowerCasedName = name.toLowerCase();
    var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (standardName == null) {
      warnedProperties[name] = true;
      return false;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== standardName) {
      warning(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum());
      warnedProperties[name] = true;
      return true;
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  var invalidProps = [];

  for (var key in props) {
    var isValid = validateProperty(type, key);
    if (!isValid) {
      invalidProps.push(key);
    }
  }

  var unknownPropString = invalidProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (invalidProps.length === 1) {
    warning(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum());
  } else if (invalidProps.length > 1) {
    warning(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum());
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }
  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;

function getStackAddendum$1() {
  var stack = ReactDebugCurrentFrame.getStackAddendum();
  return stack != null ? stack : '';
}

function validateProperties$1(type, props) {
  if (type !== 'input' && type !== 'textarea' && type !== 'select') {
    return;
  }

  if (props != null && props.value === null && !didWarnValueNull) {
    didWarnValueNull = true;
    if (type === 'select' && props.multiple) {
      warning(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.%s', type, getStackAddendum$1());
    } else {
      warning(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.%s', type, getStackAddendum$1());
    }
  }
}

function getStackAddendum$2() {
  var stack = ReactDebugCurrentFrame.getStackAddendum();
  return stack != null ? stack : '';
}

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, canUseEventSystem) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();
    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      warning(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
      warnedProperties$1[name] = true;
      return true;
    }

    // We can't rely on the event system being injected on the server.
    if (canUseEventSystem) {
      if (registrationNameModules.hasOwnProperty(name)) {
        return true;
      }
      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
      if (registrationName != null) {
        warning(false, 'Invalid event handler property `%s`. Did you mean `%s`?%s', name, registrationName, getStackAddendum$2());
        warnedProperties$1[name] = true;
        return true;
      }
      if (EVENT_NAME_REGEX.test(name)) {
        warning(false, 'Unknown event handler property `%s`. It will be ignored.%s', name, getStackAddendum$2());
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        warning(false, 'Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.%s', name, getStackAddendum$2());
      }
      warnedProperties$1[name] = true;
      return true;
    }

    // Let the ARIA attribute hook validate ARIA attributes
    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      warning(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      warning(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      warning(false, 'Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.%s', typeof value, getStackAddendum$2());
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      warning(false, 'Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.%s', name, getStackAddendum$2());
      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;

    // Known attributes should match the casing specified in the property config.
    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];
      if (standardName !== name) {
        warning(false, 'Invalid DOM property `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum$2());
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      warning(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.%s', name, lowerCasedName, getStackAddendum$2());
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        warning(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.%s', value, name, name, value, name, getStackAddendum$2());
      } else {
        warning(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.%s', value, name, name, value, name, name, name, getStackAddendum$2());
      }
      warnedProperties$1[name] = true;
      return true;
    }

    // Now that we've validated casing, do not validate
    // data types for reserved props
    if (isReserved) {
      return true;
    }

    // Warn when a known attribute is a bad type
    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, canUseEventSystem) {
  var unknownProps = [];
  for (var key in props) {
    var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);
    if (!isValid) {
      unknownProps.push(key);
    }
  }

  var unknownPropString = unknownProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');
  if (unknownProps.length === 1) {
    warning(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$2());
  } else if (unknownProps.length > 1) {
    warning(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$2());
  }
};

function validateProperties$2(type, props, canUseEventSystem) {
  if (isCustomComponent(type, props)) {
    return;
  }
  warnUnknownProperties(type, props, canUseEventSystem);
}

// TODO: direct imports like some-package/src/* are bad. Fix me.
var getCurrentFiberOwnerName$2 = ReactDebugCurrentFiber.getCurrentFiberOwnerName;
var getCurrentFiberStackAddendum$2 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;

var didWarnInvalidHydration = false;
var didWarnShadyDOM = false;

var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
var SUPPRESS_CONTENT_EDITABLE_WARNING = 'suppressContentEditableWarning';
var SUPPRESS_HYDRATION_WARNING$1 = 'suppressHydrationWarning';
var AUTOFOCUS = 'autoFocus';
var CHILDREN = 'children';
var STYLE = 'style';
var HTML = '__html';

var HTML_NAMESPACE = Namespaces.html;


var getStack = emptyFunction.thatReturns('');

var warnedUnknownTags = void 0;
var suppressHydrationWarning = void 0;

var validatePropertiesInDevelopment = void 0;
var warnForTextDifference = void 0;
var warnForPropDifference = void 0;
var warnForExtraAttributes = void 0;
var warnForInvalidEventListener = void 0;

var normalizeMarkupForTextOrAttribute = void 0;
var normalizeHTML = void 0;

{
  getStack = getCurrentFiberStackAddendum$2;

  warnedUnknownTags = {
    // Chrome is the only major browser not shipping <time>. But as of July
    // 2017 it intends to ship it due to widespread usage. We intentionally
    // *don't* warn for <time> even if it's unrecognized by Chrome because
    // it soon will be, and many apps have been using it anyway.
    time: true,
    // There are working polyfills for <dialog>. Let people use it.
    dialog: true
  };

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props, /* canUseEventSystem */true);
  };

  // HTML parsing normalizes CR and CRLF to LF.
  // It also can turn \u0000 into \uFFFD inside attributes.
  // https://www.w3.org/TR/html5/single-page.html#preprocessing-the-input-stream
  // If we have a mismatch, it might be caused by that.
  // We will still patch up in this case but not fire the warning.
  var NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
  var NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;

  normalizeMarkupForTextOrAttribute = function (markup) {
    var markupString = typeof markup === 'string' ? markup : '' + markup;
    return markupString.replace(NORMALIZE_NEWLINES_REGEX, '\n').replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, '');
  };

  warnForTextDifference = function (serverText, clientText) {
    if (didWarnInvalidHydration) {
      return;
    }
    var normalizedClientText = normalizeMarkupForTextOrAttribute(clientText);
    var normalizedServerText = normalizeMarkupForTextOrAttribute(serverText);
    if (normalizedServerText === normalizedClientText) {
      return;
    }
    didWarnInvalidHydration = true;
    warning(false, 'Text content did not match. Server: "%s" Client: "%s"', normalizedServerText, normalizedClientText);
  };

  warnForPropDifference = function (propName, serverValue, clientValue) {
    if (didWarnInvalidHydration) {
      return;
    }
    var normalizedClientValue = normalizeMarkupForTextOrAttribute(clientValue);
    var normalizedServerValue = normalizeMarkupForTextOrAttribute(serverValue);
    if (normalizedServerValue === normalizedClientValue) {
      return;
    }
    didWarnInvalidHydration = true;
    warning(false, 'Prop `%s` did not match. Server: %s Client: %s', propName, JSON.stringify(normalizedServerValue), JSON.stringify(normalizedClientValue));
  };

  warnForExtraAttributes = function (attributeNames) {
    if (didWarnInvalidHydration) {
      return;
    }
    didWarnInvalidHydration = true;
    var names = [];
    attributeNames.forEach(function (name) {
      names.push(name);
    });
    warning(false, 'Extra attributes from the server: %s', names);
  };

  warnForInvalidEventListener = function (registrationName, listener) {
    if (listener === false) {
      warning(false, 'Expected `%s` listener to be a function, instead got `false`.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.%s', registrationName, registrationName, registrationName, getCurrentFiberStackAddendum$2());
    } else {
      warning(false, 'Expected `%s` listener to be a function, instead got a value of `%s` type.%s', registrationName, typeof listener, getCurrentFiberStackAddendum$2());
    }
  };

  // Parse the HTML and read it back to normalize the HTML string so that it
  // can be used for comparison.
  normalizeHTML = function (parent, html) {
    // We could have created a separate document here to avoid
    // re-initializing custom elements if they exist. But this breaks
    // how <noscript> is being handled. So we use the same document.
    // See the discussion in https://github.com/facebook/react/pull/11157.
    var testElement = parent.namespaceURI === HTML_NAMESPACE ? parent.ownerDocument.createElement(parent.tagName) : parent.ownerDocument.createElementNS(parent.namespaceURI, parent.tagName);
    testElement.innerHTML = html;
    return testElement.innerHTML;
  };
}

function ensureListeningTo(rootContainerElement, registrationName) {
  var isDocumentOrFragment = rootContainerElement.nodeType === DOCUMENT_NODE || rootContainerElement.nodeType === DOCUMENT_FRAGMENT_NODE;
  var doc = isDocumentOrFragment ? rootContainerElement : rootContainerElement.ownerDocument;
  listenTo(registrationName, doc);
}

function getOwnerDocumentFromRootContainer(rootContainerElement) {
  return rootContainerElement.nodeType === DOCUMENT_NODE ? rootContainerElement : rootContainerElement.ownerDocument;
}

function trapClickOnNonInteractiveElement(node) {
  // Mobile Safari does not fire properly bubble click events on
  // non-interactive elements, which means delegated click listeners do not
  // fire. The workaround for this bug involves attaching an empty click
  // listener on the target node.
  // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
  // Just set it using the onclick property so that we don't have to manage any
  // bookkeeping for it. Not sure if we need to clear it when the listener is
  // removed.
  // TODO: Only do this for the relevant Safaris maybe?
  node.onclick = emptyFunction;
}

function setInitialDOMProperties(tag, domElement, rootContainerElement, nextProps, isCustomComponentTag) {
  for (var propKey in nextProps) {
    if (!nextProps.hasOwnProperty(propKey)) {
      continue;
    }
    var nextProp = nextProps[propKey];
    if (propKey === STYLE) {
      {
        if (nextProp) {
          // Freeze the next style object so that we can assume it won't be
          // mutated. We have already warned for this in the past.
          Object.freeze(nextProp);
        }
      }
      // Relies on `updateStylesByID` not mutating `styleUpdates`.
      setValueForStyles(domElement, nextProp, getStack);
    } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
      var nextHtml = nextProp ? nextProp[HTML] : undefined;
      if (nextHtml != null) {
        setInnerHTML(domElement, nextHtml);
      }
    } else if (propKey === CHILDREN) {
      if (typeof nextProp === 'string') {
        // Avoid setting initial textContent when the text is empty. In IE11 setting
        // textContent on a <textarea> will cause the placeholder to not
        // show within the <textarea> until it has been focused and blurred again.
        // https://github.com/facebook/react/issues/6731#issuecomment-254874553
        var canSetTextContent = tag !== 'textarea' || nextProp !== '';
        if (canSetTextContent) {
          setTextContent(domElement, nextProp);
        }
      } else if (typeof nextProp === 'number') {
        setTextContent(domElement, '' + nextProp);
      }
    } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING$1) {
      // Noop
    } else if (propKey === AUTOFOCUS) {
      // We polyfill it separately on the client during commit.
      // We blacklist it here rather than in the property list because we emit it in SSR.
    } else if (registrationNameModules.hasOwnProperty(propKey)) {
      if (nextProp != null) {
        if (true && typeof nextProp !== 'function') {
          warnForInvalidEventListener(propKey, nextProp);
        }
        ensureListeningTo(rootContainerElement, propKey);
      }
    } else if (nextProp != null) {
      setValueForProperty(domElement, propKey, nextProp, isCustomComponentTag);
    }
  }
}

function updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag) {
  // TODO: Handle wasCustomComponentTag
  for (var i = 0; i < updatePayload.length; i += 2) {
    var propKey = updatePayload[i];
    var propValue = updatePayload[i + 1];
    if (propKey === STYLE) {
      setValueForStyles(domElement, propValue, getStack);
    } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
      setInnerHTML(domElement, propValue);
    } else if (propKey === CHILDREN) {
      setTextContent(domElement, propValue);
    } else {
      setValueForProperty(domElement, propKey, propValue, isCustomComponentTag);
    }
  }
}

function createElement$1(type, props, rootContainerElement, parentNamespace) {
  var isCustomComponentTag = void 0;

  // We create tags in the namespace of their parent container, except HTML
  // tags get no namespace.
  var ownerDocument = getOwnerDocumentFromRootContainer(rootContainerElement);
  var domElement = void 0;
  var namespaceURI = parentNamespace;
  if (namespaceURI === HTML_NAMESPACE) {
    namespaceURI = getIntrinsicNamespace(type);
  }
  if (namespaceURI === HTML_NAMESPACE) {
    {
      isCustomComponentTag = isCustomComponent(type, props);
      // Should this check be gated by parent namespace? Not sure we want to
      // allow <SVG> or <mATH>.
      !(isCustomComponentTag || type === type.toLowerCase()) ? warning(false, '<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', type) : void 0;
    }

    if (type === 'script') {
      // Create the script via .innerHTML so its "parser-inserted" flag is
      // set to true and it does not execute
      var div = ownerDocument.createElement('div');
      div.innerHTML = '<script><' + '/script>'; // eslint-disable-line
      // This is guaranteed to yield a script element.
      var firstChild = div.firstChild;
      domElement = div.removeChild(firstChild);
    } else if (typeof props.is === 'string') {
      // $FlowIssue `createElement` should be updated for Web Components
      domElement = ownerDocument.createElement(type, { is: props.is });
    } else {
      // Separate else branch instead of using `props.is || undefined` above because of a Firefox bug.
      // See discussion in https://github.com/facebook/react/pull/6896
      // and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
      domElement = ownerDocument.createElement(type);
    }
  } else {
    domElement = ownerDocument.createElementNS(namespaceURI, type);
  }

  {
    if (namespaceURI === HTML_NAMESPACE) {
      if (!isCustomComponentTag && Object.prototype.toString.call(domElement) === '[object HTMLUnknownElement]' && !Object.prototype.hasOwnProperty.call(warnedUnknownTags, type)) {
        warnedUnknownTags[type] = true;
        warning(false, 'The tag <%s> is unrecognized in this browser. ' + 'If you meant to render a React component, start its name with ' + 'an uppercase letter.', type);
      }
    }
  }

  return domElement;
}

function createTextNode$1(text, rootContainerElement) {
  return getOwnerDocumentFromRootContainer(rootContainerElement).createTextNode(text);
}

function setInitialProperties$1(domElement, tag, rawProps, rootContainerElement) {
  var isCustomComponentTag = isCustomComponent(tag, rawProps);
  {
    validatePropertiesInDevelopment(tag, rawProps);
    if (isCustomComponentTag && !didWarnShadyDOM && domElement.shadyRoot) {
      warning(false, '%s is using shady DOM. Using shady DOM with React can ' + 'cause things to break subtly.', getCurrentFiberOwnerName$2() || 'A component');
      didWarnShadyDOM = true;
    }
  }

  // TODO: Make sure that we check isMounted before firing any of these events.
  var props = void 0;
  switch (tag) {
    case 'iframe':
    case 'object':
      trapBubbledEvent(TOP_LOAD, domElement);
      props = rawProps;
      break;
    case 'video':
    case 'audio':
      // Create listener for each media event
      for (var i = 0; i < mediaEventTypes.length; i++) {
        trapBubbledEvent(mediaEventTypes[i], domElement);
      }
      props = rawProps;
      break;
    case 'source':
      trapBubbledEvent(TOP_ERROR, domElement);
      props = rawProps;
      break;
    case 'img':
    case 'image':
    case 'link':
      trapBubbledEvent(TOP_ERROR, domElement);
      trapBubbledEvent(TOP_LOAD, domElement);
      props = rawProps;
      break;
    case 'form':
      trapBubbledEvent(TOP_RESET, domElement);
      trapBubbledEvent(TOP_SUBMIT, domElement);
      props = rawProps;
      break;
    case 'details':
      trapBubbledEvent(TOP_TOGGLE, domElement);
      props = rawProps;
      break;
    case 'input':
      initWrapperState(domElement, rawProps);
      props = getHostProps(domElement, rawProps);
      trapBubbledEvent(TOP_INVALID, domElement);
      // For controlled components we always need to ensure we're listening
      // to onChange. Even if there is no listener.
      ensureListeningTo(rootContainerElement, 'onChange');
      break;
    case 'option':
      validateProps(domElement, rawProps);
      props = getHostProps$1(domElement, rawProps);
      break;
    case 'select':
      initWrapperState$1(domElement, rawProps);
      props = getHostProps$2(domElement, rawProps);
      trapBubbledEvent(TOP_INVALID, domElement);
      // For controlled components we always need to ensure we're listening
      // to onChange. Even if there is no listener.
      ensureListeningTo(rootContainerElement, 'onChange');
      break;
    case 'textarea':
      initWrapperState$2(domElement, rawProps);
      props = getHostProps$3(domElement, rawProps);
      trapBubbledEvent(TOP_INVALID, domElement);
      // For controlled components we always need to ensure we're listening
      // to onChange. Even if there is no listener.
      ensureListeningTo(rootContainerElement, 'onChange');
      break;
    default:
      props = rawProps;
  }

  assertValidProps(tag, props, getStack);

  setInitialDOMProperties(tag, domElement, rootContainerElement, props, isCustomComponentTag);

  switch (tag) {
    case 'input':
      // TODO: Make sure we check if this is still unmounted or do any clean
      // up necessary since we never stop tracking anymore.
      track(domElement);
      postMountWrapper(domElement, rawProps, false);
      break;
    case 'textarea':
      // TODO: Make sure we check if this is still unmounted or do any clean
      // up necessary since we never stop tracking anymore.
      track(domElement);
      postMountWrapper$3(domElement, rawProps);
      break;
    case 'option':
      postMountWrapper$1(domElement, rawProps);
      break;
    case 'select':
      postMountWrapper$2(domElement, rawProps);
      break;
    default:
      if (typeof props.onClick === 'function') {
        // TODO: This cast may not be sound for SVG, MathML or custom elements.
        trapClickOnNonInteractiveElement(domElement);
      }
      break;
  }
}

// Calculate the diff between the two objects.
function diffProperties$1(domElement, tag, lastRawProps, nextRawProps, rootContainerElement) {
  {
    validatePropertiesInDevelopment(tag, nextRawProps);
  }

  var updatePayload = null;

  var lastProps = void 0;
  var nextProps = void 0;
  switch (tag) {
    case 'input':
      lastProps = getHostProps(domElement, lastRawProps);
      nextProps = getHostProps(domElement, nextRawProps);
      updatePayload = [];
      break;
    case 'option':
      lastProps = getHostProps$1(domElement, lastRawProps);
      nextProps = getHostProps$1(domElement, nextRawProps);
      updatePayload = [];
      break;
    case 'select':
      lastProps = getHostProps$2(domElement, lastRawProps);
      nextProps = getHostProps$2(domElement, nextRawProps);
      updatePayload = [];
      break;
    case 'textarea':
      lastProps = getHostProps$3(domElement, lastRawProps);
      nextProps = getHostProps$3(domElement, nextRawProps);
      updatePayload = [];
      break;
    default:
      lastProps = lastRawProps;
      nextProps = nextRawProps;
      if (typeof lastProps.onClick !== 'function' && typeof nextProps.onClick === 'function') {
        // TODO: This cast may not be sound for SVG, MathML or custom elements.
        trapClickOnNonInteractiveElement(domElement);
      }
      break;
  }

  assertValidProps(tag, nextProps, getStack);

  var propKey = void 0;
  var styleName = void 0;
  var styleUpdates = null;
  for (propKey in lastProps) {
    if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
      continue;
    }
    if (propKey === STYLE) {
      var lastStyle = lastProps[propKey];
      for (styleName in lastStyle) {
        if (lastStyle.hasOwnProperty(styleName)) {
          if (!styleUpdates) {
            styleUpdates = {};
          }
          styleUpdates[styleName] = '';
        }
      }
    } else if (propKey === DANGEROUSLY_SET_INNER_HTML || propKey === CHILDREN) {
      // Noop. This is handled by the clear text mechanism.
    } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING$1) {
      // Noop
    } else if (propKey === AUTOFOCUS) {
      // Noop. It doesn't work on updates anyway.
    } else if (registrationNameModules.hasOwnProperty(propKey)) {
      // This is a special case. If any listener updates we need to ensure
      // that the "current" fiber pointer gets updated so we need a commit
      // to update this element.
      if (!updatePayload) {
        updatePayload = [];
      }
    } else {
      // For all other deleted properties we add it to the queue. We use
      // the whitelist in the commit phase instead.
      (updatePayload = updatePayload || []).push(propKey, null);
    }
  }
  for (propKey in nextProps) {
    var nextProp = nextProps[propKey];
    var lastProp = lastProps != null ? lastProps[propKey] : undefined;
    if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
      continue;
    }
    if (propKey === STYLE) {
      {
        if (nextProp) {
          // Freeze the next style object so that we can assume it won't be
          // mutated. We have already warned for this in the past.
          Object.freeze(nextProp);
        }
      }
      if (lastProp) {
        // Unset styles on `lastProp` but not on `nextProp`.
        for (styleName in lastProp) {
          if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
            if (!styleUpdates) {
              styleUpdates = {};
            }
            styleUpdates[styleName] = '';
          }
        }
        // Update styles that changed since `lastProp`.
        for (styleName in nextProp) {
          if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
            if (!styleUpdates) {
              styleUpdates = {};
            }
            styleUpdates[styleName] = nextProp[styleName];
          }
        }
      } else {
        // Relies on `updateStylesByID` not mutating `styleUpdates`.
        if (!styleUpdates) {
          if (!updatePayload) {
            updatePayload = [];
          }
          updatePayload.push(propKey, styleUpdates);
        }
        styleUpdates = nextProp;
      }
    } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
      var nextHtml = nextProp ? nextProp[HTML] : undefined;
      var lastHtml = lastProp ? lastProp[HTML] : undefined;
      if (nextHtml != null) {
        if (lastHtml !== nextHtml) {
          (updatePayload = updatePayload || []).push(propKey, '' + nextHtml);
        }
      } else {
        // TODO: It might be too late to clear this if we have children
        // inserted already.
      }
    } else if (propKey === CHILDREN) {
      if (lastProp !== nextProp && (typeof nextProp === 'string' || typeof nextProp === 'number')) {
        (updatePayload = updatePayload || []).push(propKey, '' + nextProp);
      }
    } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING$1) {
      // Noop
    } else if (registrationNameModules.hasOwnProperty(propKey)) {
      if (nextProp != null) {
        // We eagerly listen to this even though we haven't committed yet.
        if (true && typeof nextProp !== 'function') {
          warnForInvalidEventListener(propKey, nextProp);
        }
        ensureListeningTo(rootContainerElement, propKey);
      }
      if (!updatePayload && lastProp !== nextProp) {
        // This is a special case. If any listener updates we need to ensure
        // that the "current" props pointer gets updated so we need a commit
        // to update this element.
        updatePayload = [];
      }
    } else {
      // For any other property we always add it to the queue and then we
      // filter it out using the whitelist during the commit.
      (updatePayload = updatePayload || []).push(propKey, nextProp);
    }
  }
  if (styleUpdates) {
    (updatePayload = updatePayload || []).push(STYLE, styleUpdates);
  }
  return updatePayload;
}

// Apply the diff.
function updateProperties$1(domElement, updatePayload, tag, lastRawProps, nextRawProps) {
  // Update checked *before* name.
  // In the middle of an update, it is possible to have multiple checked.
  // When a checked radio tries to change name, browser makes another radio's checked false.
  if (tag === 'input' && nextRawProps.type === 'radio' && nextRawProps.name != null) {
    updateChecked(domElement, nextRawProps);
  }

  var wasCustomComponentTag = isCustomComponent(tag, lastRawProps);
  var isCustomComponentTag = isCustomComponent(tag, nextRawProps);
  // Apply the diff.
  updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag);

  // TODO: Ensure that an update gets scheduled if any of the special props
  // changed.
  switch (tag) {
    case 'input':
      // Update the wrapper around inputs *after* updating props. This has to
      // happen after `updateDOMProperties`. Otherwise HTML5 input validations
      // raise warnings and prevent the new value from being assigned.
      updateWrapper(domElement, nextRawProps);
      break;
    case 'textarea':
      updateWrapper$1(domElement, nextRawProps);
      break;
    case 'select':
      // <select> value update needs to occur after <option> children
      // reconciliation
      postUpdateWrapper(domElement, nextRawProps);
      break;
  }
}

function getPossibleStandardName(propName) {
  {
    var lowerCasedName = propName.toLowerCase();
    if (!possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      return null;
    }
    return possibleStandardNames[lowerCasedName] || null;
  }
  return null;
}

function diffHydratedProperties$1(domElement, tag, rawProps, parentNamespace, rootContainerElement) {
  var isCustomComponentTag = void 0;
  var extraAttributeNames = void 0;

  {
    suppressHydrationWarning = rawProps[SUPPRESS_HYDRATION_WARNING$1] === true;
    isCustomComponentTag = isCustomComponent(tag, rawProps);
    validatePropertiesInDevelopment(tag, rawProps);
    if (isCustomComponentTag && !didWarnShadyDOM && domElement.shadyRoot) {
      warning(false, '%s is using shady DOM. Using shady DOM with React can ' + 'cause things to break subtly.', getCurrentFiberOwnerName$2() || 'A component');
      didWarnShadyDOM = true;
    }
  }

  // TODO: Make sure that we check isMounted before firing any of these events.
  switch (tag) {
    case 'iframe':
    case 'object':
      trapBubbledEvent(TOP_LOAD, domElement);
      break;
    case 'video':
    case 'audio':
      // Create listener for each media event
      for (var i = 0; i < mediaEventTypes.length; i++) {
        trapBubbledEvent(mediaEventTypes[i], domElement);
      }
      break;
    case 'source':
      trapBubbledEvent(TOP_ERROR, domElement);
      break;
    case 'img':
    case 'image':
    case 'link':
      trapBubbledEvent(TOP_ERROR, domElement);
      trapBubbledEvent(TOP_LOAD, domElement);
      break;
    case 'form':
      trapBubbledEvent(TOP_RESET, domElement);
      trapBubbledEvent(TOP_SUBMIT, domElement);
      break;
    case 'details':
      trapBubbledEvent(TOP_TOGGLE, domElement);
      break;
    case 'input':
      initWrapperState(domElement, rawProps);
      trapBubbledEvent(TOP_INVALID, domElement);
      // For controlled components we always need to ensure we're listening
      // to onChange. Even if there is no listener.
      ensureListeningTo(rootContainerElement, 'onChange');
      break;
    case 'option':
      validateProps(domElement, rawProps);
      break;
    case 'select':
      initWrapperState$1(domElement, rawProps);
      trapBubbledEvent(TOP_INVALID, domElement);
      // For controlled components we always need to ensure we're listening
      // to onChange. Even if there is no listener.
      ensureListeningTo(rootContainerElement, 'onChange');
      break;
    case 'textarea':
      initWrapperState$2(domElement, rawProps);
      trapBubbledEvent(TOP_INVALID, domElement);
      // For controlled components we always need to ensure we're listening
      // to onChange. Even if there is no listener.
      ensureListeningTo(rootContainerElement, 'onChange');
      break;
  }

  assertValidProps(tag, rawProps, getStack);

  {
    extraAttributeNames = new Set();
    var attributes = domElement.attributes;
    for (var _i = 0; _i < attributes.length; _i++) {
      var name = attributes[_i].name.toLowerCase();
      switch (name) {
        // Built-in SSR attribute is whitelisted
        case 'data-reactroot':
          break;
        // Controlled attributes are not validated
        // TODO: Only ignore them on controlled tags.
        case 'value':
          break;
        case 'checked':
          break;
        case 'selected':
          break;
        default:
          // Intentionally use the original name.
          // See discussion in https://github.com/facebook/react/pull/10676.
          extraAttributeNames.add(attributes[_i].name);
      }
    }
  }

  var updatePayload = null;
  for (var propKey in rawProps) {
    if (!rawProps.hasOwnProperty(propKey)) {
      continue;
    }
    var nextProp = rawProps[propKey];
    if (propKey === CHILDREN) {
      // For text content children we compare against textContent. This
      // might match additional HTML that is hidden when we read it using
      // textContent. E.g. "foo" will match "f<span>oo</span>" but that still
      // satisfies our requirement. Our requirement is not to produce perfect
      // HTML and attributes. Ideally we should preserve structure but it's
      // ok not to if the visible content is still enough to indicate what
      // even listeners these nodes might be wired up to.
      // TODO: Warn if there is more than a single textNode as a child.
      // TODO: Should we use domElement.firstChild.nodeValue to compare?
      if (typeof nextProp === 'string') {
        if (domElement.textContent !== nextProp) {
          if (true && !suppressHydrationWarning) {
            warnForTextDifference(domElement.textContent, nextProp);
          }
          updatePayload = [CHILDREN, nextProp];
        }
      } else if (typeof nextProp === 'number') {
        if (domElement.textContent !== '' + nextProp) {
          if (true && !suppressHydrationWarning) {
            warnForTextDifference(domElement.textContent, nextProp);
          }
          updatePayload = [CHILDREN, '' + nextProp];
        }
      }
    } else if (registrationNameModules.hasOwnProperty(propKey)) {
      if (nextProp != null) {
        if (true && typeof nextProp !== 'function') {
          warnForInvalidEventListener(propKey, nextProp);
        }
        ensureListeningTo(rootContainerElement, propKey);
      }
    } else if (true &&
    // Convince Flow we've calculated it (it's DEV-only in this method.)
    typeof isCustomComponentTag === 'boolean') {
      // Validate that the properties correspond to their expected values.
      var serverValue = void 0;
      var propertyInfo = getPropertyInfo(propKey);
      if (suppressHydrationWarning) {
        // Don't bother comparing. We're ignoring all these warnings.
      } else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING$1 ||
      // Controlled attributes are not validated
      // TODO: Only ignore them on controlled tags.
      propKey === 'value' || propKey === 'checked' || propKey === 'selected') {
        // Noop
      } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
        var rawHtml = nextProp ? nextProp[HTML] || '' : '';
        var serverHTML = domElement.innerHTML;
        var expectedHTML = normalizeHTML(domElement, rawHtml);
        if (expectedHTML !== serverHTML) {
          warnForPropDifference(propKey, serverHTML, expectedHTML);
        }
      } else if (propKey === STYLE) {
        // $FlowFixMe - Should be inferred as not undefined.
        extraAttributeNames.delete(propKey);
        var expectedStyle = createDangerousStringForStyles(nextProp);
        serverValue = domElement.getAttribute('style');
        if (expectedStyle !== serverValue) {
          warnForPropDifference(propKey, serverValue, expectedStyle);
        }
      } else if (isCustomComponentTag) {
        // $FlowFixMe - Should be inferred as not undefined.
        extraAttributeNames.delete(propKey.toLowerCase());
        serverValue = getValueForAttribute(domElement, propKey, nextProp);

        if (nextProp !== serverValue) {
          warnForPropDifference(propKey, serverValue, nextProp);
        }
      } else if (!shouldIgnoreAttribute(propKey, propertyInfo, isCustomComponentTag) && !shouldRemoveAttribute(propKey, nextProp, propertyInfo, isCustomComponentTag)) {
        var isMismatchDueToBadCasing = false;
        if (propertyInfo !== null) {
          // $FlowFixMe - Should be inferred as not undefined.
          extraAttributeNames.delete(propertyInfo.attributeName);
          serverValue = getValueForProperty(domElement, propKey, nextProp, propertyInfo);
        } else {
          var ownNamespace = parentNamespace;
          if (ownNamespace === HTML_NAMESPACE) {
            ownNamespace = getIntrinsicNamespace(tag);
          }
          if (ownNamespace === HTML_NAMESPACE) {
            // $FlowFixMe - Should be inferred as not undefined.
            extraAttributeNames.delete(propKey.toLowerCase());
          } else {
            var standardName = getPossibleStandardName(propKey);
            if (standardName !== null && standardName !== propKey) {
              // If an SVG prop is supplied with bad casing, it will
              // be successfully parsed from HTML, but will produce a mismatch
              // (and would be incorrectly rendered on the client).
              // However, we already warn about bad casing elsewhere.
              // So we'll skip the misleading extra mismatch warning in this case.
              isMismatchDueToBadCasing = true;
              // $FlowFixMe - Should be inferred as not undefined.
              extraAttributeNames.delete(standardName);
            }
            // $FlowFixMe - Should be inferred as not undefined.
            extraAttributeNames.delete(propKey);
          }
          serverValue = getValueForAttribute(domElement, propKey, nextProp);
        }

        if (nextProp !== serverValue && !isMismatchDueToBadCasing) {
          warnForPropDifference(propKey, serverValue, nextProp);
        }
      }
    }
  }

  {
    // $FlowFixMe - Should be inferred as not undefined.
    if (extraAttributeNames.size > 0 && !suppressHydrationWarning) {
      // $FlowFixMe - Should be inferred as not undefined.
      warnForExtraAttributes(extraAttributeNames);
    }
  }

  switch (tag) {
    case 'input':
      // TODO: Make sure we check if this is still unmounted or do any clean
      // up necessary since we never stop tracking anymore.
      track(domElement);
      postMountWrapper(domElement, rawProps, true);
      break;
    case 'textarea':
      // TODO: Make sure we check if this is still unmounted or do any clean
      // up necessary since we never stop tracking anymore.
      track(domElement);
      postMountWrapper$3(domElement, rawProps);
      break;
    case 'select':
    case 'option':
      // For input and textarea we current always set the value property at
      // post mount to force it to diverge from attributes. However, for
      // option and select we don't quite do the same thing and select
      // is not resilient to the DOM state changing so we don't do that here.
      // TODO: Consider not doing this for input and textarea.
      break;
    default:
      if (typeof rawProps.onClick === 'function') {
        // TODO: This cast may not be sound for SVG, MathML or custom elements.
        trapClickOnNonInteractiveElement(domElement);
      }
      break;
  }

  return updatePayload;
}

function diffHydratedText$1(textNode, text) {
  var isDifferent = textNode.nodeValue !== text;
  return isDifferent;
}

function warnForUnmatchedText$1(textNode, text) {
  {
    warnForTextDifference(textNode.nodeValue, text);
  }
}

function warnForDeletedHydratableElement$1(parentNode, child) {
  {
    if (didWarnInvalidHydration) {
      return;
    }
    didWarnInvalidHydration = true;
    warning(false, 'Did not expect server HTML to contain a <%s> in <%s>.', child.nodeName.toLowerCase(), parentNode.nodeName.toLowerCase());
  }
}

function warnForDeletedHydratableText$1(parentNode, child) {
  {
    if (didWarnInvalidHydration) {
      return;
    }
    didWarnInvalidHydration = true;
    warning(false, 'Did not expect server HTML to contain the text node "%s" in <%s>.', child.nodeValue, parentNode.nodeName.toLowerCase());
  }
}

function warnForInsertedHydratedElement$1(parentNode, tag, props) {
  {
    if (didWarnInvalidHydration) {
      return;
    }
    didWarnInvalidHydration = true;
    warning(false, 'Expected server HTML to contain a matching <%s> in <%s>.', tag, parentNode.nodeName.toLowerCase());
  }
}

function warnForInsertedHydratedText$1(parentNode, text) {
  {
    if (text === '') {
      // We expect to insert empty text nodes since they're not represented in
      // the HTML.
      // TODO: Remove this special case if we can just avoid inserting empty
      // text nodes.
      return;
    }
    if (didWarnInvalidHydration) {
      return;
    }
    didWarnInvalidHydration = true;
    warning(false, 'Expected server HTML to contain a matching text node for "%s" in <%s>.', text, parentNode.nodeName.toLowerCase());
  }
}

function restoreControlledState$1(domElement, tag, props) {
  switch (tag) {
    case 'input':
      restoreControlledState(domElement, props);
      return;
    case 'textarea':
      restoreControlledState$3(domElement, props);
      return;
    case 'select':
      restoreControlledState$2(domElement, props);
      return;
  }
}

var ReactDOMFiberComponent = Object.freeze({
	createElement: createElement$1,
	createTextNode: createTextNode$1,
	setInitialProperties: setInitialProperties$1,
	diffProperties: diffProperties$1,
	updateProperties: updateProperties$1,
	diffHydratedProperties: diffHydratedProperties$1,
	diffHydratedText: diffHydratedText$1,
	warnForUnmatchedText: warnForUnmatchedText$1,
	warnForDeletedHydratableElement: warnForDeletedHydratableElement$1,
	warnForDeletedHydratableText: warnForDeletedHydratableText$1,
	warnForInsertedHydratedElement: warnForInsertedHydratedElement$1,
	warnForInsertedHydratedText: warnForInsertedHydratedText$1,
	restoreControlledState: restoreControlledState$1
});

// TODO: direct imports like some-package/src/* are bad. Fix me.
var getCurrentFiberStackAddendum$5 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;

var validateDOMNesting = emptyFunction;

{
  // This validation code was written based on the HTML5 parsing spec:
  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
  //
  // Note: this does not catch all invalid nesting, nor does it try to (as it's
  // not clear what practical benefit doing so provides); instead, we warn only
  // for cases where the parser will give a parse tree differing from what React
  // intended. For example, <b><div></div></b> is invalid but we don't warn
  // because it still parses correctly; we do warn for other cases like nested
  // <p> tags where the beginning of the second element implicitly closes the
  // first, causing a confusing mess.

  // https://html.spec.whatwg.org/multipage/syntax.html#special
  var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];

  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
  var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template',

  // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
  // TODO: Distinguish by namespace here -- for <title>, including it here
  // errs on the side of fewer warnings
  'foreignObject', 'desc', 'title'];

  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
  var buttonScopeTags = inScopeTags.concat(['button']);

  // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
  var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];

  var emptyAncestorInfo = {
    current: null,

    formTag: null,
    aTagInScope: null,
    buttonTagInScope: null,
    nobrTagInScope: null,
    pTagInButtonScope: null,

    listItemTagAutoclosing: null,
    dlItemTagAutoclosing: null
  };

  var updatedAncestorInfo$1 = function (oldInfo, tag, instance) {
    var ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo);
    var info = { tag: tag, instance: instance };

    if (inScopeTags.indexOf(tag) !== -1) {
      ancestorInfo.aTagInScope = null;
      ancestorInfo.buttonTagInScope = null;
      ancestorInfo.nobrTagInScope = null;
    }
    if (buttonScopeTags.indexOf(tag) !== -1) {
      ancestorInfo.pTagInButtonScope = null;
    }

    // See rules for 'li', 'dd', 'dt' start tags in
    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
    if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
      ancestorInfo.listItemTagAutoclosing = null;
      ancestorInfo.dlItemTagAutoclosing = null;
    }

    ancestorInfo.current = info;

    if (tag === 'form') {
      ancestorInfo.formTag = info;
    }
    if (tag === 'a') {
      ancestorInfo.aTagInScope = info;
    }
    if (tag === 'button') {
      ancestorInfo.buttonTagInScope = info;
    }
    if (tag === 'nobr') {
      ancestorInfo.nobrTagInScope = info;
    }
    if (tag === 'p') {
      ancestorInfo.pTagInButtonScope = info;
    }
    if (tag === 'li') {
      ancestorInfo.listItemTagAutoclosing = info;
    }
    if (tag === 'dd' || tag === 'dt') {
      ancestorInfo.dlItemTagAutoclosing = info;
    }

    return ancestorInfo;
  };

  /**
   * Returns whether
   */
  var isTagValidWithParent = function (tag, parentTag) {
    // First, let's check if we're in an unusual parsing mode...
    switch (parentTag) {
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
      case 'select':
        return tag === 'option' || tag === 'optgroup' || tag === '#text';
      case 'optgroup':
        return tag === 'option' || tag === '#text';
      // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
      // but
      case 'option':
        return tag === '#text';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
      // No special behavior since these rules fall back to "in body" mode for
      // all except special table nodes which cause bad parsing behavior anyway.

      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
      case 'tr':
        return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
      case 'tbody':
      case 'thead':
      case 'tfoot':
        return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
      case 'colgroup':
        return tag === 'col' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
      case 'table':
        return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
      case 'head':
        return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';
      // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
      case 'html':
        return tag === 'head' || tag === 'body';
      case '#document':
        return tag === 'html';
    }

    // Probably in the "in body" parsing mode, so we outlaw only tag combos
    // where the parsing rules cause implicit opens or closes to be added.
    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
    switch (tag) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';

      case 'rp':
      case 'rt':
        return impliedEndTags.indexOf(parentTag) === -1;

      case 'body':
      case 'caption':
      case 'col':
      case 'colgroup':
      case 'frame':
      case 'head':
      case 'html':
      case 'tbody':
      case 'td':
      case 'tfoot':
      case 'th':
      case 'thead':
      case 'tr':
        // These tags are only valid with a few parents that have special child
        // parsing rules -- if we're down here, then none of those matched and
        // so we allow it only if we don't know what the parent is, as all other
        // cases are invalid.
        return parentTag == null;
    }

    return true;
  };

  /**
   * Returns whether
   */
  var findInvalidAncestorForTag = function (tag, ancestorInfo) {
    switch (tag) {
      case 'address':
      case 'article':
      case 'aside':
      case 'blockquote':
      case 'center':
      case 'details':
      case 'dialog':
      case 'dir':
      case 'div':
      case 'dl':
      case 'fieldset':
      case 'figcaption':
      case 'figure':
      case 'footer':
      case 'header':
      case 'hgroup':
      case 'main':
      case 'menu':
      case 'nav':
      case 'ol':
      case 'p':
      case 'section':
      case 'summary':
      case 'ul':
      case 'pre':
      case 'listing':
      case 'table':
      case 'hr':
      case 'xmp':
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return ancestorInfo.pTagInButtonScope;

      case 'form':
        return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;

      case 'li':
        return ancestorInfo.listItemTagAutoclosing;

      case 'dd':
      case 'dt':
        return ancestorInfo.dlItemTagAutoclosing;

      case 'button':
        return ancestorInfo.buttonTagInScope;

      case 'a':
        // Spec says something about storing a list of markers, but it sounds
        // equivalent to this check.
        return ancestorInfo.aTagInScope;

      case 'nobr':
        return ancestorInfo.nobrTagInScope;
    }

    return null;
  };

  var didWarn = {};

  validateDOMNesting = function (childTag, childText, ancestorInfo) {
    ancestorInfo = ancestorInfo || emptyAncestorInfo;
    var parentInfo = ancestorInfo.current;
    var parentTag = parentInfo && parentInfo.tag;

    if (childText != null) {
      !(childTag == null) ? warning(false, 'validateDOMNesting: when childText is passed, childTag should be null') : void 0;
      childTag = '#text';
    }

    var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
    var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
    var invalidParentOrAncestor = invalidParent || invalidAncestor;
    if (!invalidParentOrAncestor) {
      return;
    }

    var ancestorTag = invalidParentOrAncestor.tag;
    var addendum = getCurrentFiberStackAddendum$5();

    var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + addendum;
    if (didWarn[warnKey]) {
      return;
    }
    didWarn[warnKey] = true;

    var tagDisplayName = childTag;
    var whitespaceInfo = '';
    if (childTag === '#text') {
      if (/\S/.test(childText)) {
        tagDisplayName = 'Text nodes';
      } else {
        tagDisplayName = 'Whitespace text nodes';
        whitespaceInfo = " Make sure you don't have any extra whitespace between tags on " + 'each line of your source code.';
      }
    } else {
      tagDisplayName = '<' + childTag + '>';
    }

    if (invalidParent) {
      var info = '';
      if (ancestorTag === 'table' && childTag === 'tr') {
        info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
      }
      warning(false, 'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s%s', tagDisplayName, ancestorTag, whitespaceInfo, info, addendum);
    } else {
      warning(false, 'validateDOMNesting(...): %s cannot appear as a descendant of ' + '<%s>.%s', tagDisplayName, ancestorTag, addendum);
    }
  };

  // TODO: turn this into a named export
  validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo$1;
}

var validateDOMNesting$1 = validateDOMNesting;

// Renderers that don't support persistence
// can re-export everything from this module.

function shim() {
  invariant(false, 'The current renderer does not support persistence. This error is likely caused by a bug in React. Please file an issue.');
}

// Persistence (when unsupported)
var supportsPersistence = false;
var cloneInstance = shim;
var createContainerChildSet = shim;
var appendChildToContainerChildSet = shim;
var finalizeContainerChildren = shim;
var replaceContainerChildren = shim;

// Unused

var createElement = createElement$1;
var createTextNode = createTextNode$1;
var setInitialProperties = setInitialProperties$1;
var diffProperties = diffProperties$1;
var updateProperties = updateProperties$1;
var diffHydratedProperties = diffHydratedProperties$1;
var diffHydratedText = diffHydratedText$1;
var warnForUnmatchedText = warnForUnmatchedText$1;
var warnForDeletedHydratableElement = warnForDeletedHydratableElement$1;
var warnForDeletedHydratableText = warnForDeletedHydratableText$1;
var warnForInsertedHydratedElement = warnForInsertedHydratedElement$1;
var warnForInsertedHydratedText = warnForInsertedHydratedText$1;
var updatedAncestorInfo = validateDOMNesting$1.updatedAncestorInfo;
var precacheFiberNode$1 = precacheFiberNode;
var updateFiberProps$1 = updateFiberProps;


var SUPPRESS_HYDRATION_WARNING = void 0;
{
  SUPPRESS_HYDRATION_WARNING = 'suppressHydrationWarning';
}

var eventsEnabled = null;
var selectionInformation = null;

function shouldAutoFocusHostComponent(type, props) {
  switch (type) {
    case 'button':
    case 'input':
    case 'select':
    case 'textarea':
      return !!props.autoFocus;
  }
  return false;
}

function getRootHostContext(rootContainerInstance) {
  var type = void 0;
  var namespace = void 0;
  var nodeType = rootContainerInstance.nodeType;
  switch (nodeType) {
    case DOCUMENT_NODE:
    case DOCUMENT_FRAGMENT_NODE:
      {
        type = nodeType === DOCUMENT_NODE ? '#document' : '#fragment';
        var root = rootContainerInstance.documentElement;
        namespace = root ? root.namespaceURI : getChildNamespace(null, '');
        break;
      }
    default:
      {
        var container = nodeType === COMMENT_NODE ? rootContainerInstance.parentNode : rootContainerInstance;
        var ownNamespace = container.namespaceURI || null;
        type = container.tagName;
        namespace = getChildNamespace(ownNamespace, type);
        break;
      }
  }
  {
    var validatedTag = type.toLowerCase();
    var _ancestorInfo = updatedAncestorInfo(null, validatedTag, null);
    return { namespace: namespace, ancestorInfo: _ancestorInfo };
  }
  return namespace;
}

function getChildHostContext(parentHostContext, type, rootContainerInstance) {
  {
    var parentHostContextDev = parentHostContext;
    var _namespace = getChildNamespace(parentHostContextDev.namespace, type);
    var _ancestorInfo2 = updatedAncestorInfo(parentHostContextDev.ancestorInfo, type, null);
    return { namespace: _namespace, ancestorInfo: _ancestorInfo2 };
  }
  var parentNamespace = parentHostContext;
  return getChildNamespace(parentNamespace, type);
}

function getPublicInstance(instance) {
  return instance;
}

function prepareForCommit(containerInfo) {
  eventsEnabled = isEnabled();
  selectionInformation = getSelectionInformation();
  setEnabled(false);
}

function resetAfterCommit(containerInfo) {
  restoreSelection(selectionInformation);
  selectionInformation = null;
  setEnabled(eventsEnabled);
  eventsEnabled = null;
}

function createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
  var parentNamespace = void 0;
  {
    // TODO: take namespace into account when validating.
    var hostContextDev = hostContext;
    validateDOMNesting$1(type, null, hostContextDev.ancestorInfo);
    if (typeof props.children === 'string' || typeof props.children === 'number') {
      var string = '' + props.children;
      var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type, null);
      validateDOMNesting$1(null, string, ownAncestorInfo);
    }
    parentNamespace = hostContextDev.namespace;
  }
  var domElement = createElement(type, props, rootContainerInstance, parentNamespace);
  precacheFiberNode$1(internalInstanceHandle, domElement);
  updateFiberProps$1(domElement, props);
  return domElement;
}

function appendInitialChild(parentInstance, child) {
  parentInstance.appendChild(child);
}

function finalizeInitialChildren(domElement, type, props, rootContainerInstance, hostContext) {
  setInitialProperties(domElement, type, props, rootContainerInstance);
  return shouldAutoFocusHostComponent(type, props);
}

function prepareUpdate(domElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
  {
    var hostContextDev = hostContext;
    if (typeof newProps.children !== typeof oldProps.children && (typeof newProps.children === 'string' || typeof newProps.children === 'number')) {
      var string = '' + newProps.children;
      var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type, null);
      validateDOMNesting$1(null, string, ownAncestorInfo);
    }
  }
  return diffProperties(domElement, type, oldProps, newProps, rootContainerInstance);
}

function shouldSetTextContent(type, props) {
  return type === 'textarea' || typeof props.children === 'string' || typeof props.children === 'number' || typeof props.dangerouslySetInnerHTML === 'object' && props.dangerouslySetInnerHTML !== null && typeof props.dangerouslySetInnerHTML.__html === 'string';
}

function shouldDeprioritizeSubtree(type, props) {
  return !!props.hidden;
}

function createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
  {
    var hostContextDev = hostContext;
    validateDOMNesting$1(null, text, hostContextDev.ancestorInfo);
  }
  var textNode = createTextNode(text, rootContainerInstance);
  precacheFiberNode$1(internalInstanceHandle, textNode);
  return textNode;
}

var now = now$1;
var isPrimaryRenderer = true;
var scheduleDeferredCallback = scheduleWork;
var cancelDeferredCallback = cancelScheduledWork;

// -------------------
//     Mutation
// -------------------

var supportsMutation = true;

function commitMount(domElement, type, newProps, internalInstanceHandle) {
  // Despite the naming that might imply otherwise, this method only
  // fires if there is an `Update` effect scheduled during mounting.
  // This happens if `finalizeInitialChildren` returns `true` (which it
  // does to implement the `autoFocus` attribute on the client). But
  // there are also other cases when this might happen (such as patching
  // up text content during hydration mismatch). So we'll check this again.
  if (shouldAutoFocusHostComponent(type, newProps)) {
    domElement.focus();
  }
}

function commitUpdate(domElement, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
  // Update the props handle so that we know which props are the ones with
  // with current event handlers.
  updateFiberProps$1(domElement, newProps);
  // Apply the diff to the DOM node.
  updateProperties(domElement, updatePayload, type, oldProps, newProps);
}

function resetTextContent(domElement) {
  setTextContent(domElement, '');
}

function commitTextUpdate(textInstance, oldText, newText) {
  textInstance.nodeValue = newText;
}

function appendChild(parentInstance, child) {
  parentInstance.appendChild(child);
}

function appendChildToContainer(container, child) {
  if (container.nodeType === COMMENT_NODE) {
    container.parentNode.insertBefore(child, container);
  } else {
    container.appendChild(child);
  }
}

function insertBefore(parentInstance, child, beforeChild) {
  parentInstance.insertBefore(child, beforeChild);
}

function insertInContainerBefore(container, child, beforeChild) {
  if (container.nodeType === COMMENT_NODE) {
    container.parentNode.insertBefore(child, beforeChild);
  } else {
    container.insertBefore(child, beforeChild);
  }
}

function removeChild(parentInstance, child) {
  parentInstance.removeChild(child);
}

function removeChildFromContainer(container, child) {
  if (container.nodeType === COMMENT_NODE) {
    container.parentNode.removeChild(child);
  } else {
    container.removeChild(child);
  }
}

// -------------------
//     Hydration
// -------------------

var supportsHydration = true;

function canHydrateInstance(instance, type, props) {
  if (instance.nodeType !== ELEMENT_NODE || type.toLowerCase() !== instance.nodeName.toLowerCase()) {
    return null;
  }
  // This has now been refined to an element node.
  return instance;
}

function canHydrateTextInstance(instance, text) {
  if (text === '' || instance.nodeType !== TEXT_NODE) {
    // Empty strings are not parsed by HTML so there won't be a correct match here.
    return null;
  }
  // This has now been refined to a text node.
  return instance;
}

function getNextHydratableSibling(instance) {
  var node = instance.nextSibling;
  // Skip non-hydratable nodes.
  while (node && node.nodeType !== ELEMENT_NODE && node.nodeType !== TEXT_NODE) {
    node = node.nextSibling;
  }
  return node;
}

function getFirstHydratableChild(parentInstance) {
  var next = parentInstance.firstChild;
  // Skip non-hydratable nodes.
  while (next && next.nodeType !== ELEMENT_NODE && next.nodeType !== TEXT_NODE) {
    next = next.nextSibling;
  }
  return next;
}

function hydrateInstance(instance, type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
  precacheFiberNode$1(internalInstanceHandle, instance);
  // TODO: Possibly defer this until the commit phase where all the events
  // get attached.
  updateFiberProps$1(instance, props);
  var parentNamespace = void 0;
  {
    var hostContextDev = hostContext;
    parentNamespace = hostContextDev.namespace;
  }
  return diffHydratedProperties(instance, type, props, parentNamespace, rootContainerInstance);
}

function hydrateTextInstance(textInstance, text, internalInstanceHandle) {
  precacheFiberNode$1(internalInstanceHandle, textInstance);
  return diffHydratedText(textInstance, text);
}

function didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, text) {
  {
    warnForUnmatchedText(textInstance, text);
  }
}

function didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, text) {
  if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
    warnForUnmatchedText(textInstance, text);
  }
}

function didNotHydrateContainerInstance(parentContainer, instance) {
  {
    if (instance.nodeType === 1) {
      warnForDeletedHydratableElement(parentContainer, instance);
    } else {
      warnForDeletedHydratableText(parentContainer, instance);
    }
  }
}

function didNotHydrateInstance(parentType, parentProps, parentInstance, instance) {
  if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
    if (instance.nodeType === 1) {
      warnForDeletedHydratableElement(parentInstance, instance);
    } else {
      warnForDeletedHydratableText(parentInstance, instance);
    }
  }
}

function didNotFindHydratableContainerInstance(parentContainer, type, props) {
  {
    warnForInsertedHydratedElement(parentContainer, type, props);
  }
}

function didNotFindHydratableContainerTextInstance(parentContainer, text) {
  {
    warnForInsertedHydratedText(parentContainer, text);
  }
}

function didNotFindHydratableInstance(parentType, parentProps, parentInstance, type, props) {
  if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
    warnForInsertedHydratedElement(parentInstance, type, props);
  }
}

function didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, text) {
  if (true && parentProps[SUPPRESS_HYDRATION_WARNING] !== true) {
    warnForInsertedHydratedText(parentInstance, text);
  }
}

// Exports ReactDOM.createRoot
var enableUserTimingAPI = true;

// Experimental error-boundary API that can recover from errors within a single
// render phase
var enableGetDerivedStateFromCatch = false;
// Suspense
var enableSuspense = false;
// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:
var debugRenderPhaseSideEffects = false;

// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:
var debugRenderPhaseSideEffectsForStrictMode = true;

// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.
var replayFailedUnitOfWorkWithInvokeGuardedCallback = true;

// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
var warnAboutDeprecatedLifecycles = false;

// Warn about legacy context API
var warnAboutLegacyContextAPI = false;

// Gather advanced timing metrics for Profiler subtrees.
var enableProfilerTimer = true;

// Only used in www builds.

// Prefix measurements so that it's possible to filter them.
// Longer prefixes are hard to read in DevTools.
var reactEmoji = '\u269B';
var warningEmoji = '\u26D4';
var supportsUserTiming = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';

// Keep track of current fiber so that we know the path to unwind on pause.
// TODO: this looks the same as nextUnitOfWork in scheduler. Can we unify them?
var currentFiber = null;
// If we're in the middle of user code, which fiber and method is it?
// Reusing `currentFiber` would be confusing for this because user code fiber
// can change during commit phase too, but we don't need to unwind it (since
// lifecycles in the commit phase don't resemble a tree).
var currentPhase = null;
var currentPhaseFiber = null;
// Did lifecycle hook schedule an update? This is often a performance problem,
// so we will keep track of it, and include it in the report.
// Track commits caused by cascading updates.
var isCommitting = false;
var hasScheduledUpdateInCurrentCommit = false;
var hasScheduledUpdateInCurrentPhase = false;
var commitCountInCurrentWorkLoop = 0;
var effectCountInCurrentCommit = 0;
var isWaitingForCallback = false;
// During commits, we only show a measurement once per method name
// to avoid stretch the commit phase with measurement overhead.
var labelsInCurrentCommit = new Set();

var formatMarkName = function (markName) {
  return reactEmoji + ' ' + markName;
};

var formatLabel = function (label, warning$$1) {
  var prefix = warning$$1 ? warningEmoji + ' ' : reactEmoji + ' ';
  var suffix = warning$$1 ? ' Warning: ' + warning$$1 : '';
  return '' + prefix + label + suffix;
};

var beginMark = function (markName) {
  performance.mark(formatMarkName(markName));
};

var clearMark = function (markName) {
  performance.clearMarks(formatMarkName(markName));
};

var endMark = function (label, markName, warning$$1) {
  var formattedMarkName = formatMarkName(markName);
  var formattedLabel = formatLabel(label, warning$$1);
  try {
    performance.measure(formattedLabel, formattedMarkName);
  } catch (err) {}
  // If previous mark was missing for some reason, this will throw.
  // This could only happen if React crashed in an unexpected place earlier.
  // Don't pile on with more errors.

  // Clear marks immediately to avoid growing buffer.
  performance.clearMarks(formattedMarkName);
  performance.clearMeasures(formattedLabel);
};

var getFiberMarkName = function (label, debugID) {
  return label + ' (#' + debugID + ')';
};

var getFiberLabel = function (componentName, isMounted, phase) {
  if (phase === null) {
    // These are composite component total time measurements.
    return componentName + ' [' + (isMounted ? 'update' : 'mount') + ']';
  } else {
    // Composite component methods.
    return componentName + '.' + phase;
  }
};

var beginFiberMark = function (fiber, phase) {
  var componentName = getComponentName(fiber) || 'Unknown';
  var debugID = fiber._debugID;
  var isMounted = fiber.alternate !== null;
  var label = getFiberLabel(componentName, isMounted, phase);

  if (isCommitting && labelsInCurrentCommit.has(label)) {
    // During the commit phase, we don't show duplicate labels because
    // there is a fixed overhead for every measurement, and we don't
    // want to stretch the commit phase beyond necessary.
    return false;
  }
  labelsInCurrentCommit.add(label);

  var markName = getFiberMarkName(label, debugID);
  beginMark(markName);
  return true;
};

var clearFiberMark = function (fiber, phase) {
  var componentName = getComponentName(fiber) || 'Unknown';
  var debugID = fiber._debugID;
  var isMounted = fiber.alternate !== null;
  var label = getFiberLabel(componentName, isMounted, phase);
  var markName = getFiberMarkName(label, debugID);
  clearMark(markName);
};

var endFiberMark = function (fiber, phase, warning$$1) {
  var componentName = getComponentName(fiber) || 'Unknown';
  var debugID = fiber._debugID;
  var isMounted = fiber.alternate !== null;
  var label = getFiberLabel(componentName, isMounted, phase);
  var markName = getFiberMarkName(label, debugID);
  endMark(label, markName, warning$$1);
};

var shouldIgnoreFiber = function (fiber) {
  // Host components should be skipped in the timeline.
  // We could check typeof fiber.type, but does this work with RN?
  switch (fiber.tag) {
    case HostRoot:
    case HostComponent:
    case HostText:
    case HostPortal:
    case Fragment:
    case ContextProvider:
    case ContextConsumer:
    case Mode:
      return true;
    default:
      return false;
  }
};

var clearPendingPhaseMeasurement = function () {
  if (currentPhase !== null && currentPhaseFiber !== null) {
    clearFiberMark(currentPhaseFiber, currentPhase);
  }
  currentPhaseFiber = null;
  currentPhase = null;
  hasScheduledUpdateInCurrentPhase = false;
};

var pauseTimers = function () {
  // Stops all currently active measurements so that they can be resumed
  // if we continue in a later deferred loop from the same unit of work.
  var fiber = currentFiber;
  while (fiber) {
    if (fiber._debugIsCurrentlyTiming) {
      endFiberMark(fiber, null, null);
    }
    fiber = fiber.return;
  }
};

var resumeTimersRecursively = function (fiber) {
  if (fiber.return !== null) {
    resumeTimersRecursively(fiber.return);
  }
  if (fiber._debugIsCurrentlyTiming) {
    beginFiberMark(fiber, null);
  }
};

var resumeTimers = function () {
  // Resumes all measurements that were active during the last deferred loop.
  if (currentFiber !== null) {
    resumeTimersRecursively(currentFiber);
  }
};

function recordEffect() {
  if (enableUserTimingAPI) {
    effectCountInCurrentCommit++;
  }
}

function recordScheduleUpdate() {
  if (enableUserTimingAPI) {
    if (isCommitting) {
      hasScheduledUpdateInCurrentCommit = true;
    }
    if (currentPhase !== null && currentPhase !== 'componentWillMount' && currentPhase !== 'componentWillReceiveProps') {
      hasScheduledUpdateInCurrentPhase = true;
    }
  }
}

function startRequestCallbackTimer() {
  if (enableUserTimingAPI) {
    if (supportsUserTiming && !isWaitingForCallback) {
      isWaitingForCallback = true;
      beginMark('(Waiting for async callback...)');
    }
  }
}

function stopRequestCallbackTimer(didExpire, expirationTime) {
  if (enableUserTimingAPI) {
    if (supportsUserTiming) {
      isWaitingForCallback = false;
      var warning$$1 = didExpire ? 'React was blocked by main thread' : null;
      endMark('(Waiting for async callback... will force flush in ' + expirationTime + ' ms)', '(Waiting for async callback...)', warning$$1);
    }
  }
}

function startWorkTimer(fiber) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
      return;
    }
    // If we pause, this is the fiber to unwind from.
    currentFiber = fiber;
    if (!beginFiberMark(fiber, null)) {
      return;
    }
    fiber._debugIsCurrentlyTiming = true;
  }
}

function cancelWorkTimer(fiber) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
      return;
    }
    // Remember we shouldn't complete measurement for this fiber.
    // Otherwise flamechart will be deep even for small updates.
    fiber._debugIsCurrentlyTiming = false;
    clearFiberMark(fiber, null);
  }
}

function stopWorkTimer(fiber) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
      return;
    }
    // If we pause, its parent is the fiber to unwind from.
    currentFiber = fiber.return;
    if (!fiber._debugIsCurrentlyTiming) {
      return;
    }
    fiber._debugIsCurrentlyTiming = false;
    endFiberMark(fiber, null, null);
  }
}

function stopFailedWorkTimer(fiber) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
      return;
    }
    // If we pause, its parent is the fiber to unwind from.
    currentFiber = fiber.return;
    if (!fiber._debugIsCurrentlyTiming) {
      return;
    }
    fiber._debugIsCurrentlyTiming = false;
    var warning$$1 = 'An error was thrown inside this error boundary';
    endFiberMark(fiber, null, warning$$1);
  }
}

function startPhaseTimer(fiber, phase) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    clearPendingPhaseMeasurement();
    if (!beginFiberMark(fiber, phase)) {
      return;
    }
    currentPhaseFiber = fiber;
    currentPhase = phase;
  }
}

function stopPhaseTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    if (currentPhase !== null && currentPhaseFiber !== null) {
      var warning$$1 = hasScheduledUpdateInCurrentPhase ? 'Scheduled a cascading update' : null;
      endFiberMark(currentPhaseFiber, currentPhase, warning$$1);
    }
    currentPhase = null;
    currentPhaseFiber = null;
  }
}

function startWorkLoopTimer(nextUnitOfWork) {
  if (enableUserTimingAPI) {
    currentFiber = nextUnitOfWork;
    if (!supportsUserTiming) {
      return;
    }
    commitCountInCurrentWorkLoop = 0;
    // This is top level call.
    // Any other measurements are performed within.
    beginMark('(React Tree Reconciliation)');
    // Resume any measurements that were in progress during the last loop.
    resumeTimers();
  }
}

function stopWorkLoopTimer(interruptedBy, didCompleteRoot) {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    var warning$$1 = null;
    if (interruptedBy !== null) {
      if (interruptedBy.tag === HostRoot) {
        warning$$1 = 'A top-level update interrupted the previous render';
      } else {
        var componentName = getComponentName(interruptedBy) || 'Unknown';
        warning$$1 = 'An update to ' + componentName + ' interrupted the previous render';
      }
    } else if (commitCountInCurrentWorkLoop > 1) {
      warning$$1 = 'There were cascading updates';
    }
    commitCountInCurrentWorkLoop = 0;
    var label = didCompleteRoot ? '(React Tree Reconciliation: Completed Root)' : '(React Tree Reconciliation: Yielded)';
    // Pause any measurements until the next loop.
    pauseTimers();
    endMark(label, '(React Tree Reconciliation)', warning$$1);
  }
}

function startCommitTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    isCommitting = true;
    hasScheduledUpdateInCurrentCommit = false;
    labelsInCurrentCommit.clear();
    beginMark('(Committing Changes)');
  }
}

function stopCommitTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }

    var warning$$1 = null;
    if (hasScheduledUpdateInCurrentCommit) {
      warning$$1 = 'Lifecycle hook scheduled a cascading update';
    } else if (commitCountInCurrentWorkLoop > 0) {
      warning$$1 = 'Caused by a cascading update in earlier commit';
    }
    hasScheduledUpdateInCurrentCommit = false;
    commitCountInCurrentWorkLoop++;
    isCommitting = false;
    labelsInCurrentCommit.clear();

    endMark('(Committing Changes)', '(Committing Changes)', warning$$1);
  }
}

function startCommitSnapshotEffectsTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    effectCountInCurrentCommit = 0;
    beginMark('(Committing Snapshot Effects)');
  }
}

function stopCommitSnapshotEffectsTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    var count = effectCountInCurrentCommit;
    effectCountInCurrentCommit = 0;
    endMark('(Committing Snapshot Effects: ' + count + ' Total)', '(Committing Snapshot Effects)', null);
  }
}

function startCommitHostEffectsTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    effectCountInCurrentCommit = 0;
    beginMark('(Committing Host Effects)');
  }
}

function stopCommitHostEffectsTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    var count = effectCountInCurrentCommit;
    effectCountInCurrentCommit = 0;
    endMark('(Committing Host Effects: ' + count + ' Total)', '(Committing Host Effects)', null);
  }
}

function startCommitLifeCyclesTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    effectCountInCurrentCommit = 0;
    beginMark('(Calling Lifecycle Methods)');
  }
}

function stopCommitLifeCyclesTimer() {
  if (enableUserTimingAPI) {
    if (!supportsUserTiming) {
      return;
    }
    var count = effectCountInCurrentCommit;
    effectCountInCurrentCommit = 0;
    endMark('(Calling Lifecycle Methods: ' + count + ' Total)', '(Calling Lifecycle Methods)', null);
  }
}

var valueStack = [];

var fiberStack = void 0;

{
  fiberStack = [];
}

var index = -1;

function createCursor(defaultValue) {
  return {
    current: defaultValue
  };
}

function pop(cursor, fiber) {
  if (index < 0) {
    {
      warning(false, 'Unexpected pop.');
    }
    return;
  }

  {
    if (fiber !== fiberStack[index]) {
      warning(false, 'Unexpected Fiber popped.');
    }
  }

  cursor.current = valueStack[index];

  valueStack[index] = null;

  {
    fiberStack[index] = null;
  }

  index--;
}

function push(cursor, value, fiber) {
  index++;

  valueStack[index] = cursor.current;

  {
    fiberStack[index] = fiber;
  }

  cursor.current = value;
}

function checkThatStackIsEmpty() {
  {
    if (index !== -1) {
      warning(false, 'Expected an empty stack. Something was not reset properly.');
    }
  }
}

function resetStackAfterFatalErrorInDev() {
  {
    index = -1;
    valueStack.length = 0;
    fiberStack.length = 0;
  }
}

var warnedAboutMissingGetChildContext = void 0;

{
  warnedAboutMissingGetChildContext = {};
}

// A cursor to the current merged context object on the stack.
var contextStackCursor = createCursor(emptyObject);
// A cursor to a boolean indicating whether the context has changed.
var didPerformWorkStackCursor = createCursor(false);
// Keep track of the previous context object that was on the stack.
// We use this to get access to the parent context after we have already
// pushed the next context provider, and now need to merge their contexts.
var previousContext = emptyObject;

function getUnmaskedContext(workInProgress) {
  var hasOwnContext = isContextProvider(workInProgress);
  if (hasOwnContext) {
    // If the fiber is a context provider itself, when we read its context
    // we have already pushed its own child context on the stack. A context
    // provider should not "see" its own child context. Therefore we read the
    // previous (parent) context instead for a context provider.
    return previousContext;
  }
  return contextStackCursor.current;
}

function cacheContext(workInProgress, unmaskedContext, maskedContext) {
  var instance = workInProgress.stateNode;
  instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
  instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
}

function getMaskedContext(workInProgress, unmaskedContext) {
  var type = workInProgress.type;
  var contextTypes = type.contextTypes;
  if (!contextTypes) {
    return emptyObject;
  }

  // Avoid recreating masked context unless unmasked context has changed.
  // Failing to do this will result in unnecessary calls to componentWillReceiveProps.
  // This may trigger infinite loops if componentWillReceiveProps calls setState.
  var instance = workInProgress.stateNode;
  if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
    return instance.__reactInternalMemoizedMaskedChildContext;
  }

  var context = {};
  for (var key in contextTypes) {
    context[key] = unmaskedContext[key];
  }

  {
    var name = getComponentName(workInProgress) || 'Unknown';
    checkPropTypes(contextTypes, context, 'context', name, ReactDebugCurrentFiber.getCurrentFiberStackAddendum);
  }

  // Cache unmasked context so we can avoid recreating masked context unless necessary.
  // Context is created before the class component is instantiated so check for instance.
  if (instance) {
    cacheContext(workInProgress, unmaskedContext, context);
  }

  return context;
}

function hasContextChanged() {
  return didPerformWorkStackCursor.current;
}

function isContextConsumer(fiber) {
  return fiber.tag === ClassComponent && fiber.type.contextTypes != null;
}

function isContextProvider(fiber) {
  return fiber.tag === ClassComponent && fiber.type.childContextTypes != null;
}

function popContextProvider(fiber) {
  if (!isContextProvider(fiber)) {
    return;
  }

  pop(didPerformWorkStackCursor, fiber);
  pop(contextStackCursor, fiber);
}

function popTopLevelContextObject(fiber) {
  pop(didPerformWorkStackCursor, fiber);
  pop(contextStackCursor, fiber);
}

function pushTopLevelContextObject(fiber, context, didChange) {
  !(contextStackCursor.current === emptyObject) ? invariant(false, 'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.') : void 0;

  push(contextStackCursor, context, fiber);
  push(didPerformWorkStackCursor, didChange, fiber);
}

function processChildContext(fiber, parentContext) {
  var instance = fiber.stateNode;
  var childContextTypes = fiber.type.childContextTypes;

  // TODO (bvaughn) Replace this behavior with an invariant() in the future.
  // It has only been added in Fiber to match the (unintentional) behavior in Stack.
  if (typeof instance.getChildContext !== 'function') {
    {
      var componentName = getComponentName(fiber) || 'Unknown';

      if (!warnedAboutMissingGetChildContext[componentName]) {
        warnedAboutMissingGetChildContext[componentName] = true;
        warning(false, '%s.childContextTypes is specified but there is no getChildContext() method ' + 'on the instance. You can either define getChildContext() on %s or remove ' + 'childContextTypes from it.', componentName, componentName);
      }
    }
    return parentContext;
  }

  var childContext = void 0;
  {
    ReactDebugCurrentFiber.setCurrentPhase('getChildContext');
  }
  startPhaseTimer(fiber, 'getChildContext');
  childContext = instance.getChildContext();
  stopPhaseTimer();
  {
    ReactDebugCurrentFiber.setCurrentPhase(null);
  }
  for (var contextKey in childContext) {
    !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(fiber) || 'Unknown', contextKey) : void 0;
  }
  {
    var name = getComponentName(fiber) || 'Unknown';
    checkPropTypes(childContextTypes, childContext, 'child context', name,
    // In practice, there is one case in which we won't get a stack. It's when
    // somebody calls unstable_renderSubtreeIntoContainer() and we process
    // context from the parent component instance. The stack will be missing
    // because it's outside of the reconciliation, and so the pointer has not
    // been set. This is rare and doesn't matter. We'll also remove that API.
    ReactDebugCurrentFiber.getCurrentFiberStackAddendum);
  }

  return _assign({}, parentContext, childContext);
}

function pushContextProvider(workInProgress) {
  if (!isContextProvider(workInProgress)) {
    return false;
  }

  var instance = workInProgress.stateNode;
  // We push the context as early as possible to ensure stack integrity.
  // If the instance does not exist yet, we will push null at first,
  // and replace it on the stack later when invalidating the context.
  var memoizedMergedChildContext = instance && instance.__reactInternalMemoizedMergedChildContext || emptyObject;

  // Remember the parent context so we can merge with it later.
  // Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.
  previousContext = contextStackCursor.current;
  push(contextStackCursor, memoizedMergedChildContext, workInProgress);
  push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress);

  return true;
}

function invalidateContextProvider(workInProgress, didChange) {
  var instance = workInProgress.stateNode;
  !instance ? invariant(false, 'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.') : void 0;

  if (didChange) {
    // Merge parent and own context.
    // Skip this if we're not updating due to sCU.
    // This avoids unnecessarily recomputing memoized values.
    var mergedContext = processChildContext(workInProgress, previousContext);
    instance.__reactInternalMemoizedMergedChildContext = mergedContext;

    // Replace the old (or empty) context with the new one.
    // It is important to unwind the context in the reverse order.
    pop(didPerformWorkStackCursor, workInProgress);
    pop(contextStackCursor, workInProgress);
    // Now push the new context and mark that it has changed.
    push(contextStackCursor, mergedContext, workInProgress);
    push(didPerformWorkStackCursor, didChange, workInProgress);
  } else {
    pop(didPerformWorkStackCursor, workInProgress);
    push(didPerformWorkStackCursor, didChange, workInProgress);
  }
}

function findCurrentUnmaskedContext(fiber) {
  // Currently this is only used with renderSubtreeIntoContainer; not sure if it
  // makes sense elsewhere
  !(isFiberMounted(fiber) && fiber.tag === ClassComponent) ? invariant(false, 'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.') : void 0;

  var node = fiber;
  while (node.tag !== HostRoot) {
    if (isContextProvider(node)) {
      return node.stateNode.__reactInternalMemoizedMergedChildContext;
    }
    var parent = node.return;
    !parent ? invariant(false, 'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.') : void 0;
    node = parent;
  }
  return node.stateNode.context;
}

// Max 31 bit integer. The max integer size in V8 for 32-bit systems.
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111
var MAX_SIGNED_31_BIT_INT = 1073741823;

// TODO: Use an opaque type once ESLint et al support the syntax


var NoWork = 0;
var Sync = 1;
var Never = MAX_SIGNED_31_BIT_INT;

var UNIT_SIZE = 10;
var MAGIC_NUMBER_OFFSET = 2;

// 1 unit of expiration time represents 10ms.
function msToExpirationTime(ms) {
  // Always add an offset so that we don't clash with the magic number for NoWork.
  return (ms / UNIT_SIZE | 0) + MAGIC_NUMBER_OFFSET;
}

function expirationTimeToMs(expirationTime) {
  return (expirationTime - MAGIC_NUMBER_OFFSET) * UNIT_SIZE;
}

function ceiling(num, precision) {
  return ((num / precision | 0) + 1) * precision;
}

function computeExpirationBucket(currentTime, expirationInMs, bucketSizeMs) {
  return MAGIC_NUMBER_OFFSET + ceiling(currentTime - MAGIC_NUMBER_OFFSET + expirationInMs / UNIT_SIZE, bucketSizeMs / UNIT_SIZE);
}

var NoContext = 0;
var AsyncMode = 1;
var StrictMode = 2;
var ProfileMode = 4;

var hasBadMapPolyfill = void 0;

{
  hasBadMapPolyfill = false;
  try {
    var nonExtensibleObject = Object.preventExtensions({});
    var testMap = new Map([[nonExtensibleObject, null]]);
    var testSet = new Set([nonExtensibleObject]);
    // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.
    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
    // TODO: Consider warning about bad polyfills
    hasBadMapPolyfill = true;
  }
}

// A Fiber is work on a Component that needs to be done or was done. There can
// be more than one per component.


var debugCounter = void 0;

{
  debugCounter = 1;
}

function FiberNode(tag, pendingProps, key, mode) {
  // Instance
  this.tag = tag;
  this.key = key;
  this.type = null;
  this.stateNode = null;

  // Fiber
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;

  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;

  this.mode = mode;

  // Effects
  this.effectTag = NoEffect;
  this.nextEffect = null;

  this.firstEffect = null;
  this.lastEffect = null;

  this.expirationTime = NoWork;

  this.alternate = null;

  if (enableProfilerTimer) {
    this.actualDuration = 0;
    this.actualStartTime = 0;
    this.selfBaseTime = 0;
    this.treeBaseTime = 0;
  }

  {
    this._debugID = debugCounter++;
    this._debugSource = null;
    this._debugOwner = null;
    this._debugIsCurrentlyTiming = false;
    if (!hasBadMapPolyfill && typeof Object.preventExtensions === 'function') {
      Object.preventExtensions(this);
    }
  }
}

// This is a constructor function, rather than a POJO constructor, still
// please ensure we do the following:
// 1) Nobody should add any instance methods on this. Instance methods can be
//    more difficult to predict when they get optimized and they are almost
//    never inlined properly in static compilers.
// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
//    always know when it is a fiber.
// 3) We might want to experiment with using numeric keys since they are easier
//    to optimize in a non-JIT environment.
// 4) We can easily go from a constructor to a createFiber object literal if that
//    is faster.
// 5) It should be easy to port this to a C struct and keep a C implementation
//    compatible.
var createFiber = function (tag, pendingProps, key, mode) {
  // $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
  return new FiberNode(tag, pendingProps, key, mode);
};

function shouldConstruct(Component) {
  return !!(Component.prototype && Component.prototype.isReactComponent);
}

// This is used to create an alternate fiber to do work on.
function createWorkInProgress(current, pendingProps, expirationTime) {
  var workInProgress = current.alternate;
  if (workInProgress === null) {
    // We use a double buffering pooling technique because we know that we'll
    // only ever need at most two versions of a tree. We pool the "other" unused
    // node that we're free to reuse. This is lazily created to avoid allocating
    // extra objects for things that are never updated. It also allow us to
    // reclaim the extra memory if needed.
    workInProgress = createFiber(current.tag, pendingProps, current.key, current.mode);
    workInProgress.type = current.type;
    workInProgress.stateNode = current.stateNode;

    {
      // DEV-only fields
      workInProgress._debugID = current._debugID;
      workInProgress._debugSource = current._debugSource;
      workInProgress._debugOwner = current._debugOwner;
    }

    workInProgress.alternate = current;
    current.alternate = workInProgress;
  } else {
    workInProgress.pendingProps = pendingProps;

    // We already have an alternate.
    // Reset the effect tag.
    workInProgress.effectTag = NoEffect;

    // The effect list is no longer valid.
    workInProgress.nextEffect = null;
    workInProgress.firstEffect = null;
    workInProgress.lastEffect = null;

    if (enableProfilerTimer) {
      // We intentionally reset, rather than copy, actualDuration & actualStartTime.
      // This prevents time from endlessly accumulating in new commits.
      // This has the downside of resetting values for different priority renders,
      // But works for yielding (the common case) and should support resuming.
      workInProgress.actualDuration = 0;
      workInProgress.actualStartTime = 0;
    }
  }

  workInProgress.expirationTime = expirationTime;

  workInProgress.child = current.child;
  workInProgress.memoizedProps = current.memoizedProps;
  workInProgress.memoizedState = current.memoizedState;
  workInProgress.updateQueue = current.updateQueue;

  // These will be overridden during the parent's reconciliation
  workInProgress.sibling = current.sibling;
  workInProgress.index = current.index;
  workInProgress.ref = current.ref;

  if (enableProfilerTimer) {
    workInProgress.selfBaseTime = current.selfBaseTime;
    workInProgress.treeBaseTime = current.treeBaseTime;
  }

  return workInProgress;
}

function createHostRootFiber(isAsync) {
  var mode = isAsync ? AsyncMode | StrictMode : NoContext;
  return createFiber(HostRoot, null, null, mode);
}

function createFiberFromElement(element, mode, expirationTime) {
  var owner = null;
  {
    owner = element._owner;
  }

  var fiber = void 0;
  var type = element.type;
  var key = element.key;
  var pendingProps = element.props;

  var fiberTag = void 0;
  if (typeof type === 'function') {
    fiberTag = shouldConstruct(type) ? ClassComponent : IndeterminateComponent;
  } else if (typeof type === 'string') {
    fiberTag = HostComponent;
  } else {
    switch (type) {
      case REACT_FRAGMENT_TYPE:
        return createFiberFromFragment(pendingProps.children, mode, expirationTime, key);
      case REACT_ASYNC_MODE_TYPE:
        fiberTag = Mode;
        mode |= AsyncMode | StrictMode;
        break;
      case REACT_STRICT_MODE_TYPE:
        fiberTag = Mode;
        mode |= StrictMode;
        break;
      case REACT_PROFILER_TYPE:
        return createFiberFromProfiler(pendingProps, mode, expirationTime, key);
      case REACT_TIMEOUT_TYPE:
        fiberTag = TimeoutComponent;
        // Suspense does not require async, but its children should be strict
        // mode compatible.
        mode |= StrictMode;
        break;
      default:
        fiberTag = getFiberTagFromObjectType(type, owner);
        break;
    }
  }

  fiber = createFiber(fiberTag, pendingProps, key, mode);
  fiber.type = type;
  fiber.expirationTime = expirationTime;

  {
    fiber._debugSource = element._source;
    fiber._debugOwner = element._owner;
  }

  return fiber;
}

function getFiberTagFromObjectType(type, owner) {
  var $$typeof = typeof type === 'object' && type !== null ? type.$$typeof : null;

  switch ($$typeof) {
    case REACT_PROVIDER_TYPE:
      return ContextProvider;
    case REACT_CONTEXT_TYPE:
      // This is a consumer
      return ContextConsumer;
    case REACT_FORWARD_REF_TYPE:
      return ForwardRef;
    default:
      {
        var info = '';
        {
          if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
          }
          var ownerName = owner ? getComponentName(owner) : null;
          if (ownerName) {
            info += '\n\nCheck the render method of `' + ownerName + '`.';
          }
        }
        invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', type == null ? type : typeof type, info);
      }
  }
}

function createFiberFromFragment(elements, mode, expirationTime, key) {
  var fiber = createFiber(Fragment, elements, key, mode);
  fiber.expirationTime = expirationTime;
  return fiber;
}

function createFiberFromProfiler(pendingProps, mode, expirationTime, key) {
  {
    if (typeof pendingProps.id !== 'string' || typeof pendingProps.onRender !== 'function') {
      invariant(false, 'Profiler must specify an "id" string and "onRender" function as props');
    }
  }

  var fiber = createFiber(Profiler, pendingProps, key, mode | ProfileMode);
  fiber.type = REACT_PROFILER_TYPE;
  fiber.expirationTime = expirationTime;

  return fiber;
}

function createFiberFromText(content, mode, expirationTime) {
  var fiber = createFiber(HostText, content, null, mode);
  fiber.expirationTime = expirationTime;
  return fiber;
}

function createFiberFromHostInstanceForDeletion() {
  var fiber = createFiber(HostComponent, null, null, NoContext);
  fiber.type = 'DELETED';
  return fiber;
}

function createFiberFromPortal(portal, mode, expirationTime) {
  var pendingProps = portal.children !== null ? portal.children : [];
  var fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
  fiber.expirationTime = expirationTime;
  fiber.stateNode = {
    containerInfo: portal.containerInfo,
    pendingChildren: null, // Used by persistent updates
    implementation: portal.implementation
  };
  return fiber;
}

// Used for stashing WIP properties to replay failed work in DEV.
function assignFiberPropertiesInDEV(target, source) {
  if (target === null) {
    // This Fiber's initial properties will always be overwritten.
    // We only use a Fiber to ensure the same hidden class so DEV isn't slow.
    target = createFiber(IndeterminateComponent, null, null, NoContext);
  }

  // This is intentionally written as a list of all properties.
  // We tried to use Object.assign() instead but this is called in
  // the hottest path, and Object.assign() was too slow:
  // https://github.com/facebook/react/issues/12502
  // This code is DEV-only so size is not a concern.

  target.tag = source.tag;
  target.key = source.key;
  target.type = source.type;
  target.stateNode = source.stateNode;
  target.return = source.return;
  target.child = source.child;
  target.sibling = source.sibling;
  target.index = source.index;
  target.ref = source.ref;
  target.pendingProps = source.pendingProps;
  target.memoizedProps = source.memoizedProps;
  target.updateQueue = source.updateQueue;
  target.memoizedState = source.memoizedState;
  target.mode = source.mode;
  target.effectTag = source.effectTag;
  target.nextEffect = source.nextEffect;
  target.firstEffect = source.firstEffect;
  target.lastEffect = source.lastEffect;
  target.expirationTime = source.expirationTime;
  target.alternate = source.alternate;
  if (enableProfilerTimer) {
    target.actualDuration = source.actualDuration;
    target.actualStartTime = source.actualStartTime;
    target.selfBaseTime = source.selfBaseTime;
    target.treeBaseTime = source.treeBaseTime;
  }
  target._debugID = source._debugID;
  target._debugSource = source._debugSource;
  target._debugOwner = source._debugOwner;
  target._debugIsCurrentlyTiming = source._debugIsCurrentlyTiming;
  return target;
}

// TODO: This should be lifted into the renderer.


function createFiberRoot(containerInfo, isAsync, hydrate) {
  // Cyclic construction. This cheats the type system right now because
  // stateNode is any.
  var uninitializedFiber = createHostRootFiber(isAsync);
  var root = {
    current: uninitializedFiber,
    containerInfo: containerInfo,
    pendingChildren: null,

    earliestPendingTime: NoWork,
    latestPendingTime: NoWork,
    earliestSuspendedTime: NoWork,
    latestSuspendedTime: NoWork,
    latestPingedTime: NoWork,

    pendingCommitExpirationTime: NoWork,
    finishedWork: null,
    context: null,
    pendingContext: null,
    hydrate: hydrate,
    remainingExpirationTime: NoWork,
    firstBatch: null,
    nextScheduledRoot: null
  };
  uninitializedFiber.stateNode = root;
  return root;
}

var onCommitFiberRoot = null;
var onCommitFiberUnmount = null;
var hasLoggedError = false;

function catchErrors(fn) {
  return function (arg) {
    try {
      return fn(arg);
    } catch (err) {
      if (true && !hasLoggedError) {
        hasLoggedError = true;
        warning(false, 'React DevTools encountered an error: %s', err);
      }
    }
  };
}

function injectInternals(internals) {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
    // No DevTools
    return false;
  }
  var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (hook.isDisabled) {
    // This isn't a real property on the hook, but it can be set to opt out
    // of DevTools integration and associated warnings and logs.
    // https://github.com/facebook/react/issues/3877
    return true;
  }
  if (!hook.supportsFiber) {
    {
      warning(false, 'The installed version of React DevTools is too old and will not work ' + 'with the current version of React. Please update React DevTools. ' + 'https://fb.me/react-devtools');
    }
    // DevTools exists, even though it doesn't support Fiber.
    return true;
  }
  try {
    var rendererID = hook.inject(internals);
    // We have successfully injected, so now it is safe to set up hooks.
    onCommitFiberRoot = catchErrors(function (root) {
      return hook.onCommitFiberRoot(rendererID, root);
    });
    onCommitFiberUnmount = catchErrors(function (fiber) {
      return hook.onCommitFiberUnmount(rendererID, fiber);
    });
  } catch (err) {
    // Catch all errors because it is unsafe to throw during initialization.
    {
      warning(false, 'React DevTools encountered an error: %s.', err);
    }
  }
  // DevTools exists
  return true;
}

function onCommitRoot(root) {
  if (typeof onCommitFiberRoot === 'function') {
    onCommitFiberRoot(root);
  }
}

function onCommitUnmount(fiber) {
  if (typeof onCommitFiberUnmount === 'function') {
    onCommitFiberUnmount(fiber);
  }
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var ReactStrictModeWarnings = {
  discardPendingWarnings: function () {},
  flushPendingDeprecationWarnings: function () {},
  flushPendingUnsafeLifecycleWarnings: function () {},
  recordDeprecationWarnings: function (fiber, instance) {},
  recordUnsafeLifecycleWarnings: function (fiber, instance) {},
  recordLegacyContextWarning: function (fiber, instance) {},
  flushLegacyContextWarning: function () {}
};

{
  var LIFECYCLE_SUGGESTIONS = {
    UNSAFE_componentWillMount: 'componentDidMount',
    UNSAFE_componentWillReceiveProps: 'static getDerivedStateFromProps',
    UNSAFE_componentWillUpdate: 'componentDidUpdate'
  };

  var pendingComponentWillMountWarnings = [];
  var pendingComponentWillReceivePropsWarnings = [];
  var pendingComponentWillUpdateWarnings = [];
  var pendingUnsafeLifecycleWarnings = new Map();
  var pendingLegacyContextWarning = new Map();

  // Tracks components we have already warned about.
  var didWarnAboutDeprecatedLifecycles = new Set();
  var didWarnAboutUnsafeLifecycles = new Set();
  var didWarnAboutLegacyContext = new Set();

  var setToSortedString = function (set) {
    var array = [];
    set.forEach(function (value) {
      array.push(value);
    });
    return array.sort().join(', ');
  };

  ReactStrictModeWarnings.discardPendingWarnings = function () {
    pendingComponentWillMountWarnings = [];
    pendingComponentWillReceivePropsWarnings = [];
    pendingComponentWillUpdateWarnings = [];
    pendingUnsafeLifecycleWarnings = new Map();
    pendingLegacyContextWarning = new Map();
  };

  ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function () {
    pendingUnsafeLifecycleWarnings.forEach(function (lifecycleWarningsMap, strictRoot) {
      var lifecyclesWarningMesages = [];

      Object.keys(lifecycleWarningsMap).forEach(function (lifecycle) {
        var lifecycleWarnings = lifecycleWarningsMap[lifecycle];
        if (lifecycleWarnings.length > 0) {
          var componentNames = new Set();
          lifecycleWarnings.forEach(function (fiber) {
            componentNames.add(getComponentName(fiber) || 'Component');
            didWarnAboutUnsafeLifecycles.add(fiber.type);
          });

          var formatted = lifecycle.replace('UNSAFE_', '');
          var suggestion = LIFECYCLE_SUGGESTIONS[lifecycle];
          var sortedComponentNames = setToSortedString(componentNames);

          lifecyclesWarningMesages.push(formatted + ': Please update the following components to use ' + (suggestion + ' instead: ' + sortedComponentNames));
        }
      });

      if (lifecyclesWarningMesages.length > 0) {
        var strictRootComponentStack = getStackAddendumByWorkInProgressFiber(strictRoot);

        warning(false, 'Unsafe lifecycle methods were found within a strict-mode tree:%s' + '\n\n%s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-strict-mode-warnings', strictRootComponentStack, lifecyclesWarningMesages.join('\n\n'));
      }
    });

    pendingUnsafeLifecycleWarnings = new Map();
  };

  var findStrictRoot = function (fiber) {
    var maybeStrictRoot = null;

    var node = fiber;
    while (node !== null) {
      if (node.mode & StrictMode) {
        maybeStrictRoot = node;
      }
      node = node.return;
    }

    return maybeStrictRoot;
  };

  ReactStrictModeWarnings.flushPendingDeprecationWarnings = function () {
    if (pendingComponentWillMountWarnings.length > 0) {
      var uniqueNames = new Set();
      pendingComponentWillMountWarnings.forEach(function (fiber) {
        uniqueNames.add(getComponentName(fiber) || 'Component');
        didWarnAboutDeprecatedLifecycles.add(fiber.type);
      });

      var sortedNames = setToSortedString(uniqueNames);

      lowPriorityWarning$1(false, 'componentWillMount is deprecated and will be removed in the next major version. ' + 'Use componentDidMount instead. As a temporary workaround, ' + 'you can rename to UNSAFE_componentWillMount.' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-async-component-lifecycle-hooks', sortedNames);

      pendingComponentWillMountWarnings = [];
    }

    if (pendingComponentWillReceivePropsWarnings.length > 0) {
      var _uniqueNames = new Set();
      pendingComponentWillReceivePropsWarnings.forEach(function (fiber) {
        _uniqueNames.add(getComponentName(fiber) || 'Component');
        didWarnAboutDeprecatedLifecycles.add(fiber.type);
      });

      var _sortedNames = setToSortedString(_uniqueNames);

      lowPriorityWarning$1(false, 'componentWillReceiveProps is deprecated and will be removed in the next major version. ' + 'Use static getDerivedStateFromProps instead.' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-async-component-lifecycle-hooks', _sortedNames);

      pendingComponentWillReceivePropsWarnings = [];
    }

    if (pendingComponentWillUpdateWarnings.length > 0) {
      var _uniqueNames2 = new Set();
      pendingComponentWillUpdateWarnings.forEach(function (fiber) {
        _uniqueNames2.add(getComponentName(fiber) || 'Component');
        didWarnAboutDeprecatedLifecycles.add(fiber.type);
      });

      var _sortedNames2 = setToSortedString(_uniqueNames2);

      lowPriorityWarning$1(false, 'componentWillUpdate is deprecated and will be removed in the next major version. ' + 'Use componentDidUpdate instead. As a temporary workaround, ' + 'you can rename to UNSAFE_componentWillUpdate.' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-async-component-lifecycle-hooks', _sortedNames2);

      pendingComponentWillUpdateWarnings = [];
    }
  };

  ReactStrictModeWarnings.recordDeprecationWarnings = function (fiber, instance) {
    // Dedup strategy: Warn once per component.
    if (didWarnAboutDeprecatedLifecycles.has(fiber.type)) {
      return;
    }

    // Don't warn about react-lifecycles-compat polyfilled components.
    if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
      pendingComponentWillMountWarnings.push(fiber);
    }
    if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
      pendingComponentWillReceivePropsWarnings.push(fiber);
    }
    if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
      pendingComponentWillUpdateWarnings.push(fiber);
    }
  };

  ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function (fiber, instance) {
    var strictRoot = findStrictRoot(fiber);
    if (strictRoot === null) {
      warning(false, 'Expected to find a StrictMode component in a strict mode tree. ' + 'This error is likely caused by a bug in React. Please file an issue.');
      return;
    }

    // Dedup strategy: Warn once per component.
    // This is difficult to track any other way since component names
    // are often vague and are likely to collide between 3rd party libraries.
    // An expand property is probably okay to use here since it's DEV-only,
    // and will only be set in the event of serious warnings.
    if (didWarnAboutUnsafeLifecycles.has(fiber.type)) {
      return;
    }

    var warningsForRoot = void 0;
    if (!pendingUnsafeLifecycleWarnings.has(strictRoot)) {
      warningsForRoot = {
        UNSAFE_componentWillMount: [],
        UNSAFE_componentWillReceiveProps: [],
        UNSAFE_componentWillUpdate: []
      };

      pendingUnsafeLifecycleWarnings.set(strictRoot, warningsForRoot);
    } else {
      warningsForRoot = pendingUnsafeLifecycleWarnings.get(strictRoot);
    }

    var unsafeLifecycles = [];
    if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true || typeof instance.UNSAFE_componentWillMount === 'function') {
      unsafeLifecycles.push('UNSAFE_componentWillMount');
    }
    if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true || typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
      unsafeLifecycles.push('UNSAFE_componentWillReceiveProps');
    }
    if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true || typeof instance.UNSAFE_componentWillUpdate === 'function') {
      unsafeLifecycles.push('UNSAFE_componentWillUpdate');
    }

    if (unsafeLifecycles.length > 0) {
      unsafeLifecycles.forEach(function (lifecycle) {
        warningsForRoot[lifecycle].push(fiber);
      });
    }
  };

  ReactStrictModeWarnings.recordLegacyContextWarning = function (fiber, instance) {
    var strictRoot = findStrictRoot(fiber);
    if (strictRoot === null) {
      warning(false, 'Expected to find a StrictMode component in a strict mode tree. ' + 'This error is likely caused by a bug in React. Please file an issue.');
      return;
    }

    // Dedup strategy: Warn once per component.
    if (didWarnAboutLegacyContext.has(fiber.type)) {
      return;
    }

    var warningsForRoot = pendingLegacyContextWarning.get(strictRoot);

    if (fiber.type.contextTypes != null || fiber.type.childContextTypes != null || instance !== null && typeof instance.getChildContext === 'function') {
      if (warningsForRoot === undefined) {
        warningsForRoot = [];
        pendingLegacyContextWarning.set(strictRoot, warningsForRoot);
      }
      warningsForRoot.push(fiber);
    }
  };

  ReactStrictModeWarnings.flushLegacyContextWarning = function () {
    pendingLegacyContextWarning.forEach(function (fiberArray, strictRoot) {
      var uniqueNames = new Set();
      fiberArray.forEach(function (fiber) {
        uniqueNames.add(getComponentName(fiber) || 'Component');
        didWarnAboutLegacyContext.add(fiber.type);
      });

      var sortedNames = setToSortedString(uniqueNames);
      var strictRootComponentStack = getStackAddendumByWorkInProgressFiber(strictRoot);

      warning(false, 'Legacy context API has been detected within a strict-mode tree: %s' + '\n\nPlease update the following components: %s' + '\n\nLearn more about this warning here:' + '\nhttps://fb.me/react-strict-mode-warnings', strictRootComponentStack, sortedNames);
    });
  };
}

// This lets us hook into Fiber to debug what it's doing.
// See https://github.com/facebook/react/pull/8033.
// This is not part of the public API, not even for React DevTools.
// You may only inject a debugTool if you work on React Fiber itself.
var ReactFiberInstrumentation = {
  debugTool: null
};

var ReactFiberInstrumentation_1 = ReactFiberInstrumentation;

// TODO: Offscreen updates

function markPendingPriorityLevel(root, expirationTime) {
  if (enableSuspense) {
    // Update the latest and earliest pending times
    var earliestPendingTime = root.earliestPendingTime;
    if (earliestPendingTime === NoWork) {
      // No other pending updates.
      root.earliestPendingTime = root.latestPendingTime = expirationTime;
    } else {
      if (earliestPendingTime > expirationTime) {
        // This is the earliest pending update.
        root.earliestPendingTime = expirationTime;
      } else {
        var latestPendingTime = root.latestPendingTime;
        if (latestPendingTime < expirationTime) {
          // This is the latest pending update
          root.latestPendingTime = expirationTime;
        }
      }
    }
  }
}

function markCommittedPriorityLevels(root, currentTime, earliestRemainingTime) {
  if (enableSuspense) {
    if (earliestRemainingTime === NoWork) {
      // Fast path. There's no remaining work. Clear everything.
      root.earliestPendingTime = NoWork;
      root.latestPendingTime = NoWork;
      root.earliestSuspendedTime = NoWork;
      root.latestSuspendedTime = NoWork;
      root.latestPingedTime = NoWork;
      return;
    }

    // Let's see if the previous latest known pending level was just flushed.
    var latestPendingTime = root.latestPendingTime;
    if (latestPendingTime !== NoWork) {
      if (latestPendingTime < earliestRemainingTime) {
        // We've flushed all the known pending levels.
        root.earliestPendingTime = root.latestPendingTime = NoWork;
      } else {
        var earliestPendingTime = root.earliestPendingTime;
        if (earliestPendingTime < earliestRemainingTime) {
          // We've flushed the earliest known pending level. Set this to the
          // latest pending time.
          root.earliestPendingTime = root.latestPendingTime;
        }
      }
    }

    // Now let's handle the earliest remaining level in the whole tree. We need to
    // decide whether to treat it as a pending level or as suspended. Check
    // it falls within the range of known suspended levels.

    var earliestSuspendedTime = root.earliestSuspendedTime;
    if (earliestSuspendedTime === NoWork) {
      // There's no suspended work. Treat the earliest remaining level as a
      // pending level.
      markPendingPriorityLevel(root, earliestRemainingTime);
      return;
    }

    var latestSuspendedTime = root.latestSuspendedTime;
    if (earliestRemainingTime > latestSuspendedTime) {
      // The earliest remaining level is later than all the suspended work. That
      // means we've flushed all the suspended work.
      root.earliestSuspendedTime = NoWork;
      root.latestSuspendedTime = NoWork;
      root.latestPingedTime = NoWork;

      // There's no suspended work. Treat the earliest remaining level as a
      // pending level.
      markPendingPriorityLevel(root, earliestRemainingTime);
      return;
    }

    if (earliestRemainingTime < earliestSuspendedTime) {
      // The earliest remaining time is earlier than all the suspended work.
      // Treat it as a pending update.
      markPendingPriorityLevel(root, earliestRemainingTime);
      return;
    }

    // The earliest remaining time falls within the range of known suspended
    // levels. We should treat this as suspended work.
  }
}

function markSuspendedPriorityLevel(root, suspendedTime) {
  if (enableSuspense) {
    // First, check the known pending levels and update them if needed.
    var earliestPendingTime = root.earliestPendingTime;
    var latestPendingTime = root.latestPendingTime;
    if (earliestPendingTime === suspendedTime) {
      if (latestPendingTime === suspendedTime) {
        // Both known pending levels were suspended. Clear them.
        root.earliestPendingTime = root.latestPendingTime = NoWork;
      } else {
        // The earliest pending level was suspended. Clear by setting it to the
        // latest pending level.
        root.earliestPendingTime = latestPendingTime;
      }
    } else if (latestPendingTime === suspendedTime) {
      // The latest pending level was suspended. Clear by setting it to the
      // latest pending level.
      root.latestPendingTime = earliestPendingTime;
    }

    // Next, if we're working on the lowest known suspended level, clear the ping.
    // TODO: What if a promise suspends and pings before the root completes?
    var latestSuspendedTime = root.latestSuspendedTime;
    if (latestSuspendedTime === suspendedTime) {
      root.latestPingedTime = NoWork;
    }

    // Finally, update the known suspended levels.
    var earliestSuspendedTime = root.earliestSuspendedTime;
    if (earliestSuspendedTime === NoWork) {
      // No other suspended levels.
      root.earliestSuspendedTime = root.latestSuspendedTime = suspendedTime;
    } else {
      if (earliestSuspendedTime > suspendedTime) {
        // This is the earliest suspended level.
        root.earliestSuspendedTime = suspendedTime;
      } else if (latestSuspendedTime < suspendedTime) {
        // This is the latest suspended level
        root.latestSuspendedTime = suspendedTime;
      }
    }
  }
}

function markPingedPriorityLevel(root, pingedTime) {
  if (enableSuspense) {
    var latestSuspendedTime = root.latestSuspendedTime;
    if (latestSuspendedTime !== NoWork && latestSuspendedTime <= pingedTime) {
      var latestPingedTime = root.latestPingedTime;
      if (latestPingedTime === NoWork || latestPingedTime < pingedTime) {
        root.latestPingedTime = pingedTime;
      }
    }
  }
}

function findNextPendingPriorityLevel(root) {
  if (enableSuspense) {
    var earliestSuspendedTime = root.earliestSuspendedTime;
    var earliestPendingTime = root.earliestPendingTime;
    if (earliestSuspendedTime === NoWork) {
      // Fast path. There's no suspended work.
      return earliestPendingTime;
    }

    // First, check if there's known pending work.
    if (earliestPendingTime !== NoWork) {
      return earliestPendingTime;
    }

    // Finally, if a suspended level was pinged, work on that. Otherwise there's
    // nothing to work on.
    return root.latestPingedTime;
  } else {
    return root.current.expirationTime;
  }
}

// UpdateQueue is a linked list of prioritized updates.
//
// Like fibers, update queues come in pairs: a current queue, which represents
// the visible state of the screen, and a work-in-progress queue, which is
// can be mutated and processed asynchronously before it is committed — a form
// of double buffering. If a work-in-progress render is discarded before
// finishing, we create a new work-in-progress by cloning the current queue.
//
// Both queues share a persistent, singly-linked list structure. To schedule an
// update, we append it to the end of both queues. Each queue maintains a
// pointer to first update in the persistent list that hasn't been processed.
// The work-in-progress pointer always has a position equal to or greater than
// the current queue, since we always work on that one. The current queue's
// pointer is only updated during the commit phase, when we swap in the
// work-in-progress.
//
// For example:
//
//   Current pointer:           A - B - C - D - E - F
//   Work-in-progress pointer:              D - E - F
//                                          ^
//                                          The work-in-progress queue has
//                                          processed more updates than current.
//
// The reason we append to both queues is because otherwise we might drop
// updates without ever processing them. For example, if we only add updates to
// the work-in-progress queue, some updates could be lost whenever a work-in
// -progress render restarts by cloning from current. Similarly, if we only add
// updates to the current queue, the updates will be lost whenever an already
// in-progress queue commits and swaps with the current queue. However, by
// adding to both queues, we guarantee that the update will be part of the next
// work-in-progress. (And because the work-in-progress queue becomes the
// current queue once it commits, there's no danger of applying the same
// update twice.)
//
// Prioritization
// --------------
//
// Updates are not sorted by priority, but by insertion; new updates are always
// appended to the end of the list.
//
// The priority is still important, though. When processing the update queue
// during the render phase, only the updates with sufficient priority are
// included in the result. If we skip an update because it has insufficient
// priority, it remains in the queue to be processed later, during a lower
// priority render. Crucially, all updates subsequent to a skipped update also
// remain in the queue *regardless of their priority*. That means high priority
// updates are sometimes processed twice, at two separate priorities. We also
// keep track of a base state, that represents the state before the first
// update in the queue is applied.
//
// For example:
//
//   Given a base state of '', and the following queue of updates
//
//     A1 - B2 - C1 - D2
//
//   where the number indicates the priority, and the update is applied to the
//   previous state by appending a letter, React will process these updates as
//   two separate renders, one per distinct priority level:
//
//   First render, at priority 1:
//     Base state: ''
//     Updates: [A1, C1]
//     Result state: 'AC'
//
//   Second render, at priority 2:
//     Base state: 'A'            <-  The base state does not include C1,
//                                    because B2 was skipped.
//     Updates: [B2, C1, D2]      <-  C1 was rebased on top of B2
//     Result state: 'ABCD'
//
// Because we process updates in insertion order, and rebase high priority
// updates when preceding updates are skipped, the final result is deterministic
// regardless of priority. Intermediate state may vary according to system
// resources, but the final state is always the same.

var UpdateState = 0;
var ReplaceState = 1;
var ForceUpdate = 2;
var CaptureUpdate = 3;

// Global state that is reset at the beginning of calling `processUpdateQueue`.
// It should only be read right after calling `processUpdateQueue`, via
// `checkHasForceUpdateAfterProcessing`.
var hasForceUpdate = false;

var didWarnUpdateInsideUpdate = void 0;
var currentlyProcessingQueue = void 0;
var resetCurrentlyProcessingQueue = void 0;
{
  didWarnUpdateInsideUpdate = false;
  currentlyProcessingQueue = null;
  resetCurrentlyProcessingQueue = function () {
    currentlyProcessingQueue = null;
  };
}

function createUpdateQueue(baseState) {
  var queue = {
    expirationTime: NoWork,
    baseState: baseState,
    firstUpdate: null,
    lastUpdate: null,
    firstCapturedUpdate: null,
    lastCapturedUpdate: null,
    firstEffect: null,
    lastEffect: null,
    firstCapturedEffect: null,
    lastCapturedEffect: null
  };
  return queue;
}

function cloneUpdateQueue(currentQueue) {
  var queue = {
    expirationTime: currentQueue.expirationTime,
    baseState: currentQueue.baseState,
    firstUpdate: currentQueue.firstUpdate,
    lastUpdate: currentQueue.lastUpdate,

    // TODO: With resuming, if we bail out and resuse the child tree, we should
    // keep these effects.
    firstCapturedUpdate: null,
    lastCapturedUpdate: null,

    firstEffect: null,
    lastEffect: null,

    firstCapturedEffect: null,
    lastCapturedEffect: null
  };
  return queue;
}

function createUpdate(expirationTime) {
  return {
    expirationTime: expirationTime,

    tag: UpdateState,
    payload: null,
    callback: null,

    next: null,
    nextEffect: null
  };
}

function appendUpdateToQueue(queue, update, expirationTime) {
  // Append the update to the end of the list.
  if (queue.lastUpdate === null) {
    // Queue is empty
    queue.firstUpdate = queue.lastUpdate = update;
  } else {
    queue.lastUpdate.next = update;
    queue.lastUpdate = update;
  }
  if (queue.expirationTime === NoWork || queue.expirationTime > expirationTime) {
    // The incoming update has the earliest expiration of any update in the
    // queue. Update the queue's expiration time.
    queue.expirationTime = expirationTime;
  }
}

function enqueueUpdate(fiber, update, expirationTime) {
  // Update queues are created lazily.
  var alternate = fiber.alternate;
  var queue1 = void 0;
  var queue2 = void 0;
  if (alternate === null) {
    // There's only one fiber.
    queue1 = fiber.updateQueue;
    queue2 = null;
    if (queue1 === null) {
      queue1 = fiber.updateQueue = createUpdateQueue(fiber.memoizedState);
    }
  } else {
    // There are two owners.
    queue1 = fiber.updateQueue;
    queue2 = alternate.updateQueue;
    if (queue1 === null) {
      if (queue2 === null) {
        // Neither fiber has an update queue. Create new ones.
        queue1 = fiber.updateQueue = createUpdateQueue(fiber.memoizedState);
        queue2 = alternate.updateQueue = createUpdateQueue(alternate.memoizedState);
      } else {
        // Only one fiber has an update queue. Clone to create a new one.
        queue1 = fiber.updateQueue = cloneUpdateQueue(queue2);
      }
    } else {
      if (queue2 === null) {
        // Only one fiber has an update queue. Clone to create a new one.
        queue2 = alternate.updateQueue = cloneUpdateQueue(queue1);
      } else {
        // Both owners have an update queue.
      }
    }
  }
  if (queue2 === null || queue1 === queue2) {
    // There's only a single queue.
    appendUpdateToQueue(queue1, update, expirationTime);
  } else {
    // There are two queues. We need to append the update to both queues,
    // while accounting for the persistent structure of the list — we don't
    // want the same update to be added multiple times.
    if (queue1.lastUpdate === null || queue2.lastUpdate === null) {
      // One of the queues is not empty. We must add the update to both queues.
      appendUpdateToQueue(queue1, update, expirationTime);
      appendUpdateToQueue(queue2, update, expirationTime);
    } else {
      // Both queues are non-empty. The last update is the same in both lists,
      // because of structural sharing. So, only append to one of the lists.
      appendUpdateToQueue(queue1, update, expirationTime);
      // But we still need to update the `lastUpdate` pointer of queue2.
      queue2.lastUpdate = update;
    }
  }

  {
    if (fiber.tag === ClassComponent && (currentlyProcessingQueue === queue1 || queue2 !== null && currentlyProcessingQueue === queue2) && !didWarnUpdateInsideUpdate) {
      warning(false, 'An update (setState, replaceState, or forceUpdate) was scheduled ' + 'from inside an update function. Update functions should be pure, ' + 'with zero side-effects. Consider using componentDidUpdate or a ' + 'callback.');
      didWarnUpdateInsideUpdate = true;
    }
  }
}

function enqueueCapturedUpdate(workInProgress, update, renderExpirationTime) {
  // Captured updates go into a separate list, and only on the work-in-
  // progress queue.
  var workInProgressQueue = workInProgress.updateQueue;
  if (workInProgressQueue === null) {
    workInProgressQueue = workInProgress.updateQueue = createUpdateQueue(workInProgress.memoizedState);
  } else {
    // TODO: I put this here rather than createWorkInProgress so that we don't
    // clone the queue unnecessarily. There's probably a better way to
    // structure this.
    workInProgressQueue = ensureWorkInProgressQueueIsAClone(workInProgress, workInProgressQueue);
  }

  // Append the update to the end of the list.
  if (workInProgressQueue.lastCapturedUpdate === null) {
    // This is the first render phase update
    workInProgressQueue.firstCapturedUpdate = workInProgressQueue.lastCapturedUpdate = update;
  } else {
    workInProgressQueue.lastCapturedUpdate.next = update;
    workInProgressQueue.lastCapturedUpdate = update;
  }
  if (workInProgressQueue.expirationTime === NoWork || workInProgressQueue.expirationTime > renderExpirationTime) {
    // The incoming update has the earliest expiration of any update in the
    // queue. Update the queue's expiration time.
    workInProgressQueue.expirationTime = renderExpirationTime;
  }
}

function ensureWorkInProgressQueueIsAClone(workInProgress, queue) {
  var current = workInProgress.alternate;
  if (current !== null) {
    // If the work-in-progress queue is equal to the current queue,
    // we need to clone it first.
    if (queue === current.updateQueue) {
      queue = workInProgress.updateQueue = cloneUpdateQueue(queue);
    }
  }
  return queue;
}

function getStateFromUpdate(workInProgress, queue, update, prevState, nextProps, instance) {
  switch (update.tag) {
    case ReplaceState:
      {
        var _payload = update.payload;
        if (typeof _payload === 'function') {
          // Updater function
          {
            if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
              _payload.call(instance, prevState, nextProps);
            }
          }
          return _payload.call(instance, prevState, nextProps);
        }
        // State object
        return _payload;
      }
    case CaptureUpdate:
      {
        workInProgress.effectTag = workInProgress.effectTag & ~ShouldCapture | DidCapture;
      }
    // Intentional fallthrough
    case UpdateState:
      {
        var _payload2 = update.payload;
        var partialState = void 0;
        if (typeof _payload2 === 'function') {
          // Updater function
          {
            if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
              _payload2.call(instance, prevState, nextProps);
            }
          }
          partialState = _payload2.call(instance, prevState, nextProps);
        } else {
          // Partial state object
          partialState = _payload2;
        }
        if (partialState === null || partialState === undefined) {
          // Null and undefined are treated as no-ops.
          return prevState;
        }
        // Merge the partial state and the previous state.
        return _assign({}, prevState, partialState);
      }
    case ForceUpdate:
      {
        hasForceUpdate = true;
        return prevState;
      }
  }
  return prevState;
}

function processUpdateQueue(workInProgress, queue, props, instance, renderExpirationTime) {
  hasForceUpdate = false;

  if (queue.expirationTime === NoWork || queue.expirationTime > renderExpirationTime) {
    // Insufficient priority. Bailout.
    return;
  }

  queue = ensureWorkInProgressQueueIsAClone(workInProgress, queue);

  {
    currentlyProcessingQueue = queue;
  }

  // These values may change as we process the queue.
  var newBaseState = queue.baseState;
  var newFirstUpdate = null;
  var newExpirationTime = NoWork;

  // Iterate through the list of updates to compute the result.
  var update = queue.firstUpdate;
  var resultState = newBaseState;
  while (update !== null) {
    var updateExpirationTime = update.expirationTime;
    if (updateExpirationTime > renderExpirationTime) {
      // This update does not have sufficient priority. Skip it.
      if (newFirstUpdate === null) {
        // This is the first skipped update. It will be the first update in
        // the new list.
        newFirstUpdate = update;
        // Since this is the first update that was skipped, the current result
        // is the new base state.
        newBaseState = resultState;
      }
      // Since this update will remain in the list, update the remaining
      // expiration time.
      if (newExpirationTime === NoWork || newExpirationTime > updateExpirationTime) {
        newExpirationTime = updateExpirationTime;
      }
    } else {
      // This update does have sufficient priority. Process it and compute
      // a new result.
      resultState = getStateFromUpdate(workInProgress, queue, update, resultState, props, instance);
      var _callback = update.callback;
      if (_callback !== null) {
        workInProgress.effectTag |= Callback;
        // Set this to null, in case it was mutated during an aborted render.
        update.nextEffect = null;
        if (queue.lastEffect === null) {
          queue.firstEffect = queue.lastEffect = update;
        } else {
          queue.lastEffect.nextEffect = update;
          queue.lastEffect = update;
        }
      }
    }
    // Continue to the next update.
    update = update.next;
  }

  // Separately, iterate though the list of captured updates.
  var newFirstCapturedUpdate = null;
  update = queue.firstCapturedUpdate;
  while (update !== null) {
    var _updateExpirationTime = update.expirationTime;
    if (_updateExpirationTime > renderExpirationTime) {
      // This update does not have sufficient priority. Skip it.
      if (newFirstCapturedUpdate === null) {
        // This is the first skipped captured update. It will be the first
        // update in the new list.
        newFirstCapturedUpdate = update;
        // If this is the first update that was skipped, the current result is
        // the new base state.
        if (newFirstUpdate === null) {
          newBaseState = resultState;
        }
      }
      // Since this update will remain in the list, update the remaining
      // expiration time.
      if (newExpirationTime === NoWork || newExpirationTime > _updateExpirationTime) {
        newExpirationTime = _updateExpirationTime;
      }
    } else {
      // This update does have sufficient priority. Process it and compute
      // a new result.
      resultState = getStateFromUpdate(workInProgress, queue, update, resultState, props, instance);
      var _callback2 = update.callback;
      if (_callback2 !== null) {
        workInProgress.effectTag |= Callback;
        // Set this to null, in case it was mutated during an aborted render.
        update.nextEffect = null;
        if (queue.lastCapturedEffect === null) {
          queue.firstCapturedEffect = queue.lastCapturedEffect = update;
        } else {
          queue.lastCapturedEffect.nextEffect = update;
          queue.lastCapturedEffect = update;
        }
      }
    }
    update = update.next;
  }

  if (newFirstUpdate === null) {
    queue.lastUpdate = null;
  }
  if (newFirstCapturedUpdate === null) {
    queue.lastCapturedUpdate = null;
  } else {
    workInProgress.effectTag |= Callback;
  }
  if (newFirstUpdate === null && newFirstCapturedUpdate === null) {
    // We processed every update, without skipping. That means the new base
    // state is the same as the result state.
    newBaseState = resultState;
  }

  queue.baseState = newBaseState;
  queue.firstUpdate = newFirstUpdate;
  queue.firstCapturedUpdate = newFirstCapturedUpdate;
  queue.expirationTime = newExpirationTime;

  workInProgress.memoizedState = resultState;

  {
    currentlyProcessingQueue = null;
  }
}

function callCallback(callback, context) {
  !(typeof callback === 'function') ? invariant(false, 'Invalid argument passed as callback. Expected a function. Instead received: %s', callback) : void 0;
  callback.call(context);
}

function resetHasForceUpdateBeforeProcessing() {
  hasForceUpdate = false;
}

function checkHasForceUpdateAfterProcessing() {
  return hasForceUpdate;
}

function commitUpdateQueue(finishedWork, finishedQueue, instance, renderExpirationTime) {
  // If the finished render included captured updates, and there are still
  // lower priority updates left over, we need to keep the captured updates
  // in the queue so that they are rebased and not dropped once we process the
  // queue again at the lower priority.
  if (finishedQueue.firstCapturedUpdate !== null) {
    // Join the captured update list to the end of the normal list.
    if (finishedQueue.lastUpdate !== null) {
      finishedQueue.lastUpdate.next = finishedQueue.firstCapturedUpdate;
      finishedQueue.lastUpdate = finishedQueue.lastCapturedUpdate;
    }
    // Clear the list of captured updates.
    finishedQueue.firstCapturedUpdate = finishedQueue.lastCapturedUpdate = null;
  }

  // Commit the effects
  var effect = finishedQueue.firstEffect;
  finishedQueue.firstEffect = finishedQueue.lastEffect = null;
  while (effect !== null) {
    var _callback3 = effect.callback;
    if (_callback3 !== null) {
      effect.callback = null;
      callCallback(_callback3, instance);
    }
    effect = effect.nextEffect;
  }

  effect = finishedQueue.firstCapturedEffect;
  finishedQueue.firstCapturedEffect = finishedQueue.lastCapturedEffect = null;
  while (effect !== null) {
    var _callback4 = effect.callback;
    if (_callback4 !== null) {
      effect.callback = null;
      callCallback(_callback4, instance);
    }
    effect = effect.nextEffect;
  }
}

function createCapturedValue(value, source) {
  // If the value is an error, call this function immediately after it is thrown
  // so the stack is accurate.
  return {
    value: value,
    source: source,
    stack: getStackAddendumByWorkInProgressFiber(source)
  };
}

var providerCursor = createCursor(null);
var valueCursor = createCursor(null);
var changedBitsCursor = createCursor(0);

var rendererSigil = void 0;
{
  // Use this to detect multiple renderers using the same context
  rendererSigil = {};
}

function pushProvider(providerFiber) {
  var context = providerFiber.type._context;

  if (isPrimaryRenderer) {
    push(changedBitsCursor, context._changedBits, providerFiber);
    push(valueCursor, context._currentValue, providerFiber);
    push(providerCursor, providerFiber, providerFiber);

    context._currentValue = providerFiber.pendingProps.value;
    context._changedBits = providerFiber.stateNode;
    {
      !(context._currentRenderer === undefined || context._currentRenderer === null || context._currentRenderer === rendererSigil) ? warning(false, 'Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.') : void 0;
      context._currentRenderer = rendererSigil;
    }
  } else {
    push(changedBitsCursor, context._changedBits2, providerFiber);
    push(valueCursor, context._currentValue2, providerFiber);
    push(providerCursor, providerFiber, providerFiber);

    context._currentValue2 = providerFiber.pendingProps.value;
    context._changedBits2 = providerFiber.stateNode;
    {
      !(context._currentRenderer2 === undefined || context._currentRenderer2 === null || context._currentRenderer2 === rendererSigil) ? warning(false, 'Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.') : void 0;
      context._currentRenderer2 = rendererSigil;
    }
  }
}

function popProvider(providerFiber) {
  var changedBits = changedBitsCursor.current;
  var currentValue = valueCursor.current;

  pop(providerCursor, providerFiber);
  pop(valueCursor, providerFiber);
  pop(changedBitsCursor, providerFiber);

  var context = providerFiber.type._context;
  if (isPrimaryRenderer) {
    context._currentValue = currentValue;
    context._changedBits = changedBits;
  } else {
    context._currentValue2 = currentValue;
    context._changedBits2 = changedBits;
  }
}

function getContextCurrentValue(context) {
  return isPrimaryRenderer ? context._currentValue : context._currentValue2;
}

function getContextChangedBits(context) {
  return isPrimaryRenderer ? context._changedBits : context._changedBits2;
}

var NO_CONTEXT = {};

var contextStackCursor$1 = createCursor(NO_CONTEXT);
var contextFiberStackCursor = createCursor(NO_CONTEXT);
var rootInstanceStackCursor = createCursor(NO_CONTEXT);

function requiredContext(c) {
  !(c !== NO_CONTEXT) ? invariant(false, 'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  return c;
}

function getRootHostContainer() {
  var rootInstance = requiredContext(rootInstanceStackCursor.current);
  return rootInstance;
}

function pushHostContainer(fiber, nextRootInstance) {
  // Push current root instance onto the stack;
  // This allows us to reset root when portals are popped.
  push(rootInstanceStackCursor, nextRootInstance, fiber);
  // Track the context and the Fiber that provided it.
  // This enables us to pop only Fibers that provide unique contexts.
  push(contextFiberStackCursor, fiber, fiber);

  // Finally, we need to push the host context to the stack.
  // However, we can't just call getRootHostContext() and push it because
  // we'd have a different number of entries on the stack depending on
  // whether getRootHostContext() throws somewhere in renderer code or not.
  // So we push an empty value first. This lets us safely unwind on errors.
  push(contextStackCursor$1, NO_CONTEXT, fiber);
  var nextRootContext = getRootHostContext(nextRootInstance);
  // Now that we know this function doesn't throw, replace it.
  pop(contextStackCursor$1, fiber);
  push(contextStackCursor$1, nextRootContext, fiber);
}

function popHostContainer(fiber) {
  pop(contextStackCursor$1, fiber);
  pop(contextFiberStackCursor, fiber);
  pop(rootInstanceStackCursor, fiber);
}

function getHostContext() {
  var context = requiredContext(contextStackCursor$1.current);
  return context;
}

function pushHostContext(fiber) {
  var rootInstance = requiredContext(rootInstanceStackCursor.current);
  var context = requiredContext(contextStackCursor$1.current);
  var nextContext = getChildHostContext(context, fiber.type, rootInstance);

  // Don't push this Fiber's context unless it's unique.
  if (context === nextContext) {
    return;
  }

  // Track the context and the Fiber that provided it.
  // This enables us to pop only Fibers that provide unique contexts.
  push(contextFiberStackCursor, fiber, fiber);
  push(contextStackCursor$1, nextContext, fiber);
}

function popHostContext(fiber) {
  // Do not pop unless this Fiber provided the current context.
  // pushHostContext() only pushes Fibers that provide unique contexts.
  if (contextFiberStackCursor.current !== fiber) {
    return;
  }

  pop(contextStackCursor$1, fiber);
  pop(contextFiberStackCursor, fiber);
}

var commitTime = 0;

function getCommitTime() {
  return commitTime;
}

function recordCommitTime() {
  if (!enableProfilerTimer) {
    return;
  }
  commitTime = now();
}

/**
 * The "actual" render time is total time required to render the descendants of a Profiler component.
 * This time is stored as a stack, since Profilers can be nested.
 * This time is started during the "begin" phase and stopped during the "complete" phase.
 * It is paused (and accumulated) in the event of an interruption or an aborted render.
 */

var fiberStack$1 = void 0;

{
  fiberStack$1 = [];
}

var timerPausedAt = 0;
var totalElapsedPauseTime = 0;

function checkActualRenderTimeStackEmpty() {
  if (!enableProfilerTimer) {
    return;
  }
  {
    !(fiberStack$1.length === 0) ? warning(false, 'Expected an empty stack. Something was not reset properly.') : void 0;
  }
}

function markActualRenderTimeStarted(fiber) {
  if (!enableProfilerTimer) {
    return;
  }
  {
    fiberStack$1.push(fiber);
  }

  fiber.actualDuration = now() - fiber.actualDuration - totalElapsedPauseTime;
  fiber.actualStartTime = now();
}

function pauseActualRenderTimerIfRunning() {
  if (!enableProfilerTimer) {
    return;
  }
  if (timerPausedAt === 0) {
    timerPausedAt = now();
  }
}

function recordElapsedActualRenderTime(fiber) {
  if (!enableProfilerTimer) {
    return;
  }
  {
    !(fiber === fiberStack$1.pop()) ? warning(false, 'Unexpected Fiber (%s) popped.', getComponentName(fiber)) : void 0;
  }

  fiber.actualDuration = now() - totalElapsedPauseTime - fiber.actualDuration;
}

function resetActualRenderTimer() {
  if (!enableProfilerTimer) {
    return;
  }
  totalElapsedPauseTime = 0;
}

function resumeActualRenderTimerIfPaused() {
  if (!enableProfilerTimer) {
    return;
  }
  if (timerPausedAt > 0) {
    totalElapsedPauseTime += now() - timerPausedAt;
    timerPausedAt = 0;
  }
}

/**
 * The "base" render time is the duration of the “begin” phase of work for a particular fiber.
 * This time is measured and stored on each fiber.
 * The time for all sibling fibers are accumulated and stored on their parent during the "complete" phase.
 * If a fiber bails out (sCU false) then its "base" timer is cancelled and the fiber is not updated.
 */

var baseStartTime = -1;

function recordElapsedBaseRenderTimeIfRunning(fiber) {
  if (!enableProfilerTimer) {
    return;
  }
  if (baseStartTime !== -1) {
    fiber.selfBaseTime = now() - baseStartTime;
  }
}

function startBaseRenderTimer() {
  if (!enableProfilerTimer) {
    return;
  }
  {
    if (baseStartTime !== -1) {
      warning(false, 'Cannot start base timer that is already running. ' + 'This error is likely caused by a bug in React. ' + 'Please file an issue.');
    }
  }
  baseStartTime = now();
}

function stopBaseRenderTimerIfRunning() {
  if (!enableProfilerTimer) {
    return;
  }
  baseStartTime = -1;
}

var fakeInternalInstance = {};
var isArray = Array.isArray;

var didWarnAboutStateAssignmentForComponent = void 0;
var didWarnAboutUninitializedState = void 0;
var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = void 0;
var didWarnAboutLegacyLifecyclesAndDerivedState = void 0;
var didWarnAboutUndefinedDerivedState = void 0;
var warnOnUndefinedDerivedState = void 0;
var warnOnInvalidCallback$1 = void 0;

{
  didWarnAboutStateAssignmentForComponent = new Set();
  didWarnAboutUninitializedState = new Set();
  didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
  didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
  didWarnAboutUndefinedDerivedState = new Set();

  var didWarnOnInvalidCallback = new Set();

  warnOnInvalidCallback$1 = function (callback, callerName) {
    if (callback === null || typeof callback === 'function') {
      return;
    }
    var key = callerName + '_' + callback;
    if (!didWarnOnInvalidCallback.has(key)) {
      didWarnOnInvalidCallback.add(key);
      warning(false, '%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback);
    }
  };

  warnOnUndefinedDerivedState = function (workInProgress, partialState) {
    if (partialState === undefined) {
      var componentName = getComponentName(workInProgress) || 'Component';
      if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
        didWarnAboutUndefinedDerivedState.add(componentName);
        warning(false, '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', componentName);
      }
    }
  };

  // This is so gross but it's at least non-critical and can be removed if
  // it causes problems. This is meant to give a nicer error message for
  // ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
  // ...)) which otherwise throws a "_processChildContext is not a function"
  // exception.
  Object.defineProperty(fakeInternalInstance, '_processChildContext', {
    enumerable: false,
    value: function () {
      invariant(false, '_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn\'t supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).');
    }
  });
  Object.freeze(fakeInternalInstance);
}

function applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, nextProps) {
  var prevState = workInProgress.memoizedState;

  {
    if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
      // Invoke the function an extra time to help detect side-effects.
      getDerivedStateFromProps(nextProps, prevState);
    }
  }

  var partialState = getDerivedStateFromProps(nextProps, prevState);

  {
    warnOnUndefinedDerivedState(workInProgress, partialState);
  }
  // Merge the partial state and the previous state.
  var memoizedState = partialState === null || partialState === undefined ? prevState : _assign({}, prevState, partialState);
  workInProgress.memoizedState = memoizedState;

  // Once the update queue is empty, persist the derived state onto the
  // base state.
  var updateQueue = workInProgress.updateQueue;
  if (updateQueue !== null && updateQueue.expirationTime === NoWork) {
    updateQueue.baseState = memoizedState;
  }
}

var classComponentUpdater = {
  isMounted: isMounted,
  enqueueSetState: function (inst, payload, callback) {
    var fiber = get(inst);
    var currentTime = recalculateCurrentTime();
    var expirationTime = computeExpirationForFiber(currentTime, fiber);

    var update = createUpdate(expirationTime);
    update.payload = payload;
    if (callback !== undefined && callback !== null) {
      {
        warnOnInvalidCallback$1(callback, 'setState');
      }
      update.callback = callback;
    }

    enqueueUpdate(fiber, update, expirationTime);
    scheduleWork$1(fiber, expirationTime);
  },
  enqueueReplaceState: function (inst, payload, callback) {
    var fiber = get(inst);
    var currentTime = recalculateCurrentTime();
    var expirationTime = computeExpirationForFiber(currentTime, fiber);

    var update = createUpdate(expirationTime);
    update.tag = ReplaceState;
    update.payload = payload;

    if (callback !== undefined && callback !== null) {
      {
        warnOnInvalidCallback$1(callback, 'replaceState');
      }
      update.callback = callback;
    }

    enqueueUpdate(fiber, update, expirationTime);
    scheduleWork$1(fiber, expirationTime);
  },
  enqueueForceUpdate: function (inst, callback) {
    var fiber = get(inst);
    var currentTime = recalculateCurrentTime();
    var expirationTime = computeExpirationForFiber(currentTime, fiber);

    var update = createUpdate(expirationTime);
    update.tag = ForceUpdate;

    if (callback !== undefined && callback !== null) {
      {
        warnOnInvalidCallback$1(callback, 'forceUpdate');
      }
      update.callback = callback;
    }

    enqueueUpdate(fiber, update, expirationTime);
    scheduleWork$1(fiber, expirationTime);
  }
};

function checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext) {
  var instance = workInProgress.stateNode;
  var ctor = workInProgress.type;
  if (typeof instance.shouldComponentUpdate === 'function') {
    startPhaseTimer(workInProgress, 'shouldComponentUpdate');
    var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, newContext);
    stopPhaseTimer();

    {
      !(shouldUpdate !== undefined) ? warning(false, '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', getComponentName(workInProgress) || 'Component') : void 0;
    }

    return shouldUpdate;
  }

  if (ctor.prototype && ctor.prototype.isPureReactComponent) {
    return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
  }

  return true;
}

function checkClassInstance(workInProgress) {
  var instance = workInProgress.stateNode;
  var type = workInProgress.type;
  {
    var name = getComponentName(workInProgress) || 'Component';
    var renderPresent = instance.render;

    if (!renderPresent) {
      if (type.prototype && typeof type.prototype.render === 'function') {
        warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: did you accidentally return an object from the constructor?', name);
      } else {
        warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', name);
      }
    }

    var noGetInitialStateOnES6 = !instance.getInitialState || instance.getInitialState.isReactClassApproved || instance.state;
    !noGetInitialStateOnES6 ? warning(false, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', name) : void 0;
    var noGetDefaultPropsOnES6 = !instance.getDefaultProps || instance.getDefaultProps.isReactClassApproved;
    !noGetDefaultPropsOnES6 ? warning(false, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', name) : void 0;
    var noInstancePropTypes = !instance.propTypes;
    !noInstancePropTypes ? warning(false, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', name) : void 0;
    var noInstanceContextTypes = !instance.contextTypes;
    !noInstanceContextTypes ? warning(false, 'contextTypes was defined as an instance property on %s. Use a static ' + 'property to define contextTypes instead.', name) : void 0;
    var noComponentShouldUpdate = typeof instance.componentShouldUpdate !== 'function';
    !noComponentShouldUpdate ? warning(false, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', name) : void 0;
    if (type.prototype && type.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== 'undefined') {
      warning(false, '%s has a method called shouldComponentUpdate(). ' + 'shouldComponentUpdate should not be used when extending React.PureComponent. ' + 'Please extend React.Component if shouldComponentUpdate is used.', getComponentName(workInProgress) || 'A pure component');
    }
    var noComponentDidUnmount = typeof instance.componentDidUnmount !== 'function';
    !noComponentDidUnmount ? warning(false, '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', name) : void 0;
    var noComponentDidReceiveProps = typeof instance.componentDidReceiveProps !== 'function';
    !noComponentDidReceiveProps ? warning(false, '%s has a method called ' + 'componentDidReceiveProps(). But there is no such lifecycle method. ' + 'If you meant to update the state in response to changing props, ' + 'use componentWillReceiveProps(). If you meant to fetch data or ' + 'run side-effects or mutations after React has updated the UI, use componentDidUpdate().', name) : void 0;
    var noComponentWillRecieveProps = typeof instance.componentWillRecieveProps !== 'function';
    !noComponentWillRecieveProps ? warning(false, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', name) : void 0;
    var noUnsafeComponentWillRecieveProps = typeof instance.UNSAFE_componentWillRecieveProps !== 'function';
    !noUnsafeComponentWillRecieveProps ? warning(false, '%s has a method called ' + 'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?', name) : void 0;
    var hasMutatedProps = instance.props !== workInProgress.pendingProps;
    !(instance.props === undefined || !hasMutatedProps) ? warning(false, '%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", name, name) : void 0;
    var noInstanceDefaultProps = !instance.defaultProps;
    !noInstanceDefaultProps ? warning(false, 'Setting defaultProps as an instance property on %s is not supported and will be ignored.' + ' Instead, define defaultProps as a static property on %s.', name, name) : void 0;

    if (typeof instance.getSnapshotBeforeUpdate === 'function' && typeof instance.componentDidUpdate !== 'function' && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(type)) {
      didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(type);
      warning(false, '%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). ' + 'This component defines getSnapshotBeforeUpdate() only.', getComponentName(workInProgress));
    }

    var noInstanceGetDerivedStateFromProps = typeof instance.getDerivedStateFromProps !== 'function';
    !noInstanceGetDerivedStateFromProps ? warning(false, '%s: getDerivedStateFromProps() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name) : void 0;
    var noInstanceGetDerivedStateFromCatch = typeof instance.getDerivedStateFromCatch !== 'function';
    !noInstanceGetDerivedStateFromCatch ? warning(false, '%s: getDerivedStateFromCatch() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name) : void 0;
    var noStaticGetSnapshotBeforeUpdate = typeof type.getSnapshotBeforeUpdate !== 'function';
    !noStaticGetSnapshotBeforeUpdate ? warning(false, '%s: getSnapshotBeforeUpdate() is defined as a static method ' + 'and will be ignored. Instead, declare it as an instance method.', name) : void 0;
    var _state = instance.state;
    if (_state && (typeof _state !== 'object' || isArray(_state))) {
      warning(false, '%s.state: must be set to an object or null', name);
    }
    if (typeof instance.getChildContext === 'function') {
      !(typeof type.childContextTypes === 'object') ? warning(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', name) : void 0;
    }
  }
}

function adoptClassInstance(workInProgress, instance) {
  instance.updater = classComponentUpdater;
  workInProgress.stateNode = instance;
  // The instance needs access to the fiber so that it can schedule updates
  set(instance, workInProgress);
  {
    instance._reactInternalInstance = fakeInternalInstance;
  }
}

function constructClassInstance(workInProgress, props, renderExpirationTime) {
  var ctor = workInProgress.type;
  var unmaskedContext = getUnmaskedContext(workInProgress);
  var needsContext = isContextConsumer(workInProgress);
  var context = needsContext ? getMaskedContext(workInProgress, unmaskedContext) : emptyObject;

  // Instantiate twice to help detect side-effects.
  {
    if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
      new ctor(props, context); // eslint-disable-line no-new
    }
  }

  var instance = new ctor(props, context);
  var state = workInProgress.memoizedState = instance.state !== null && instance.state !== undefined ? instance.state : null;
  adoptClassInstance(workInProgress, instance);

  {
    if (typeof ctor.getDerivedStateFromProps === 'function' && state === null) {
      var componentName = getComponentName(workInProgress) || 'Component';
      if (!didWarnAboutUninitializedState.has(componentName)) {
        didWarnAboutUninitializedState.add(componentName);
        warning(false, '%s: Did not properly initialize state during construction. ' + 'Expected state to be an object, but it was %s.', componentName, instance.state === null ? 'null' : 'undefined');
      }
    }

    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Warn about these lifecycles if they are present.
    // Don't warn about react-lifecycles-compat polyfilled methods though.
    if (typeof ctor.getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function') {
      var foundWillMountName = null;
      var foundWillReceivePropsName = null;
      var foundWillUpdateName = null;
      if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
        foundWillMountName = 'componentWillMount';
      } else if (typeof instance.UNSAFE_componentWillMount === 'function') {
        foundWillMountName = 'UNSAFE_componentWillMount';
      }
      if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
        foundWillReceivePropsName = 'componentWillReceiveProps';
      } else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
      }
      if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
        foundWillUpdateName = 'componentWillUpdate';
      } else if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
      }
      if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var _componentName = getComponentName(workInProgress) || 'Component';
        var newApiName = typeof ctor.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
        if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
          didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
          warning(false, 'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + '%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n' + 'The above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks', _componentName, newApiName, foundWillMountName !== null ? '\n  ' + foundWillMountName : '', foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '', foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '');
        }
      }
    }
  }

  // Cache unmasked context so we can avoid recreating masked context unless necessary.
  // ReactFiberContext usually updates this cache but can't for newly-created instances.
  if (needsContext) {
    cacheContext(workInProgress, unmaskedContext, context);
  }

  return instance;
}

function callComponentWillMount(workInProgress, instance) {
  startPhaseTimer(workInProgress, 'componentWillMount');
  var oldState = instance.state;

  if (typeof instance.componentWillMount === 'function') {
    instance.componentWillMount();
  }
  if (typeof instance.UNSAFE_componentWillMount === 'function') {
    instance.UNSAFE_componentWillMount();
  }

  stopPhaseTimer();

  if (oldState !== instance.state) {
    {
      warning(false, '%s.componentWillMount(): Assigning directly to this.state is ' + "deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentName(workInProgress) || 'Component');
    }
    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
  }
}

function callComponentWillReceiveProps(workInProgress, instance, newProps, newContext) {
  var oldState = instance.state;
  startPhaseTimer(workInProgress, 'componentWillReceiveProps');
  if (typeof instance.componentWillReceiveProps === 'function') {
    instance.componentWillReceiveProps(newProps, newContext);
  }
  if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
    instance.UNSAFE_componentWillReceiveProps(newProps, newContext);
  }
  stopPhaseTimer();

  if (instance.state !== oldState) {
    {
      var componentName = getComponentName(workInProgress) || 'Component';
      if (!didWarnAboutStateAssignmentForComponent.has(componentName)) {
        didWarnAboutStateAssignmentForComponent.add(componentName);
        warning(false, '%s.componentWillReceiveProps(): Assigning directly to ' + "this.state is deprecated (except inside a component's " + 'constructor). Use setState instead.', componentName);
      }
    }
    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
  }
}

// Invokes the mount life-cycles on a previously never rendered instance.
function mountClassInstance(workInProgress, renderExpirationTime) {
  var ctor = workInProgress.type;

  {
    checkClassInstance(workInProgress);
  }

  var instance = workInProgress.stateNode;
  var props = workInProgress.pendingProps;
  var unmaskedContext = getUnmaskedContext(workInProgress);

  instance.props = props;
  instance.state = workInProgress.memoizedState;
  instance.refs = emptyObject;
  instance.context = getMaskedContext(workInProgress, unmaskedContext);

  {
    if (workInProgress.mode & StrictMode) {
      ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress, instance);

      ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, instance);
    }

    if (warnAboutDeprecatedLifecycles) {
      ReactStrictModeWarnings.recordDeprecationWarnings(workInProgress, instance);
    }
  }

  var updateQueue = workInProgress.updateQueue;
  if (updateQueue !== null) {
    processUpdateQueue(workInProgress, updateQueue, props, instance, renderExpirationTime);
    instance.state = workInProgress.memoizedState;
  }

  var getDerivedStateFromProps = workInProgress.type.getDerivedStateFromProps;
  if (typeof getDerivedStateFromProps === 'function') {
    applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, props);
    instance.state = workInProgress.memoizedState;
  }

  // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.
  if (typeof ctor.getDerivedStateFromProps !== 'function' && typeof instance.getSnapshotBeforeUpdate !== 'function' && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
    callComponentWillMount(workInProgress, instance);
    // If we had additional state updates during this life-cycle, let's
    // process them now.
    updateQueue = workInProgress.updateQueue;
    if (updateQueue !== null) {
      processUpdateQueue(workInProgress, updateQueue, props, instance, renderExpirationTime);
      instance.state = workInProgress.memoizedState;
    }
  }

  if (typeof instance.componentDidMount === 'function') {
    workInProgress.effectTag |= Update;
  }
}

function resumeMountClassInstance(workInProgress, renderExpirationTime) {
  var ctor = workInProgress.type;
  var instance = workInProgress.stateNode;

  var oldProps = workInProgress.memoizedProps;
  var newProps = workInProgress.pendingProps;
  instance.props = oldProps;

  var oldContext = instance.context;
  var newUnmaskedContext = getUnmaskedContext(workInProgress);
  var newContext = getMaskedContext(workInProgress, newUnmaskedContext);

  var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
  var hasNewLifecycles = typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function';

  // Note: During these life-cycles, instance.props/instance.state are what
  // ever the previously attempted to render - not the "current". However,
  // during componentDidUpdate we pass the "current" props.

  // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.
  if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === 'function' || typeof instance.componentWillReceiveProps === 'function')) {
    if (oldProps !== newProps || oldContext !== newContext) {
      callComponentWillReceiveProps(workInProgress, instance, newProps, newContext);
    }
  }

  resetHasForceUpdateBeforeProcessing();

  var oldState = workInProgress.memoizedState;
  var newState = instance.state = oldState;
  var updateQueue = workInProgress.updateQueue;
  if (updateQueue !== null) {
    processUpdateQueue(workInProgress, updateQueue, newProps, instance, renderExpirationTime);
    newState = workInProgress.memoizedState;
  }
  if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidMount === 'function') {
      workInProgress.effectTag |= Update;
    }
    return false;
  }

  if (typeof getDerivedStateFromProps === 'function') {
    applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, newProps);
    newState = workInProgress.memoizedState;
  }

  var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext);

  if (shouldUpdate) {
    // In order to support react-lifecycles-compat polyfilled components,
    // Unsafe lifecycles should not be invoked for components using the new APIs.
    if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
      startPhaseTimer(workInProgress, 'componentWillMount');
      if (typeof instance.componentWillMount === 'function') {
        instance.componentWillMount();
      }
      if (typeof instance.UNSAFE_componentWillMount === 'function') {
        instance.UNSAFE_componentWillMount();
      }
      stopPhaseTimer();
    }
    if (typeof instance.componentDidMount === 'function') {
      workInProgress.effectTag |= Update;
    }
  } else {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidMount === 'function') {
      workInProgress.effectTag |= Update;
    }

    // If shouldComponentUpdate returned false, we should still update the
    // memoized state to indicate that this work can be reused.
    workInProgress.memoizedProps = newProps;
    workInProgress.memoizedState = newState;
  }

  // Update the existing instance's state, props, and context pointers even
  // if shouldComponentUpdate returns false.
  instance.props = newProps;
  instance.state = newState;
  instance.context = newContext;

  return shouldUpdate;
}

// Invokes the update life-cycles and returns false if it shouldn't rerender.
function updateClassInstance(current, workInProgress, renderExpirationTime) {
  var ctor = workInProgress.type;
  var instance = workInProgress.stateNode;

  var oldProps = workInProgress.memoizedProps;
  var newProps = workInProgress.pendingProps;
  instance.props = oldProps;

  var oldContext = instance.context;
  var newUnmaskedContext = getUnmaskedContext(workInProgress);
  var newContext = getMaskedContext(workInProgress, newUnmaskedContext);

  var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
  var hasNewLifecycles = typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function';

  // Note: During these life-cycles, instance.props/instance.state are what
  // ever the previously attempted to render - not the "current". However,
  // during componentDidUpdate we pass the "current" props.

  // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.
  if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === 'function' || typeof instance.componentWillReceiveProps === 'function')) {
    if (oldProps !== newProps || oldContext !== newContext) {
      callComponentWillReceiveProps(workInProgress, instance, newProps, newContext);
    }
  }

  resetHasForceUpdateBeforeProcessing();

  var oldState = workInProgress.memoizedState;
  var newState = instance.state = oldState;
  var updateQueue = workInProgress.updateQueue;
  if (updateQueue !== null) {
    processUpdateQueue(workInProgress, updateQueue, newProps, instance, renderExpirationTime);
    newState = workInProgress.memoizedState;
  }

  if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidUpdate === 'function') {
      if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.effectTag |= Update;
      }
    }
    if (typeof instance.getSnapshotBeforeUpdate === 'function') {
      if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.effectTag |= Snapshot;
      }
    }
    return false;
  }

  if (typeof getDerivedStateFromProps === 'function') {
    applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, newProps);
    newState = workInProgress.memoizedState;
  }

  var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, oldProps, newProps, oldState, newState, newContext);

  if (shouldUpdate) {
    // In order to support react-lifecycles-compat polyfilled components,
    // Unsafe lifecycles should not be invoked for components using the new APIs.
    if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillUpdate === 'function' || typeof instance.componentWillUpdate === 'function')) {
      startPhaseTimer(workInProgress, 'componentWillUpdate');
      if (typeof instance.componentWillUpdate === 'function') {
        instance.componentWillUpdate(newProps, newState, newContext);
      }
      if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
        instance.UNSAFE_componentWillUpdate(newProps, newState, newContext);
      }
      stopPhaseTimer();
    }
    if (typeof instance.componentDidUpdate === 'function') {
      workInProgress.effectTag |= Update;
    }
    if (typeof instance.getSnapshotBeforeUpdate === 'function') {
      workInProgress.effectTag |= Snapshot;
    }
  } else {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidUpdate === 'function') {
      if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.effectTag |= Update;
      }
    }
    if (typeof instance.getSnapshotBeforeUpdate === 'function') {
      if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.effectTag |= Snapshot;
      }
    }

    // If shouldComponentUpdate returned false, we should still update the
    // memoized props/state to indicate that this work can be reused.
    workInProgress.memoizedProps = newProps;
    workInProgress.memoizedState = newState;
  }

  // Update the existing instance's state, props, and context pointers even
  // if shouldComponentUpdate returns false.
  instance.props = newProps;
  instance.state = newState;
  instance.context = newContext;

  return shouldUpdate;
}

var getCurrentFiberStackAddendum$7 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;


var didWarnAboutMaps = void 0;
var didWarnAboutStringRefInStrictMode = void 0;
var ownerHasKeyUseWarning = void 0;
var ownerHasFunctionTypeWarning = void 0;
var warnForMissingKey = function (child) {};

{
  didWarnAboutMaps = false;
  didWarnAboutStringRefInStrictMode = {};

  /**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */
  ownerHasKeyUseWarning = {};
  ownerHasFunctionTypeWarning = {};

  warnForMissingKey = function (child) {
    if (child === null || typeof child !== 'object') {
      return;
    }
    if (!child._store || child._store.validated || child.key != null) {
      return;
    }
    !(typeof child._store === 'object') ? invariant(false, 'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.') : void 0;
    child._store.validated = true;

    var currentComponentErrorInfo = 'Each child in an array or iterator should have a unique ' + '"key" prop. See https://fb.me/react-warning-keys for ' + 'more information.' + (getCurrentFiberStackAddendum$7() || '');
    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }
    ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

    warning(false, 'Each child in an array or iterator should have a unique ' + '"key" prop. See https://fb.me/react-warning-keys for ' + 'more information.%s', getCurrentFiberStackAddendum$7());
  };
}

var isArray$1 = Array.isArray;

function coerceRef(returnFiber, current, element) {
  var mixedRef = element.ref;
  if (mixedRef !== null && typeof mixedRef !== 'function' && typeof mixedRef !== 'object') {
    {
      if (returnFiber.mode & StrictMode) {
        var componentName = getComponentName(returnFiber) || 'Component';
        if (!didWarnAboutStringRefInStrictMode[componentName]) {
          warning(false, 'A string ref, "%s", has been found within a strict mode tree. ' + 'String refs are a source of potential bugs and should be avoided. ' + 'We recommend using createRef() instead.' + '\n%s' + '\n\nLearn more about using refs safely here:' + '\nhttps://fb.me/react-strict-mode-string-ref', mixedRef, getStackAddendumByWorkInProgressFiber(returnFiber));
          didWarnAboutStringRefInStrictMode[componentName] = true;
        }
      }
    }

    if (element._owner) {
      var owner = element._owner;
      var inst = void 0;
      if (owner) {
        var ownerFiber = owner;
        !(ownerFiber.tag === ClassComponent) ? invariant(false, 'Stateless function components cannot have refs.') : void 0;
        inst = ownerFiber.stateNode;
      }
      !inst ? invariant(false, 'Missing owner for string ref %s. This error is likely caused by a bug in React. Please file an issue.', mixedRef) : void 0;
      var stringRef = '' + mixedRef;
      // Check if previous string ref matches new string ref
      if (current !== null && current.ref !== null && typeof current.ref === 'function' && current.ref._stringRef === stringRef) {
        return current.ref;
      }
      var ref = function (value) {
        var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
        if (value === null) {
          delete refs[stringRef];
        } else {
          refs[stringRef] = value;
        }
      };
      ref._stringRef = stringRef;
      return ref;
    } else {
      !(typeof mixedRef === 'string') ? invariant(false, 'Expected ref to be a function or a string.') : void 0;
      !element._owner ? invariant(false, 'Element ref was specified as a string (%s) but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a functional component\n2. You may be adding a ref to a component that was not created inside a component\'s render method\n3. You have multiple copies of React loaded\nSee https://fb.me/react-refs-must-have-owner for more information.', mixedRef) : void 0;
    }
  }
  return mixedRef;
}

function throwOnInvalidObjectType(returnFiber, newChild) {
  if (returnFiber.type !== 'textarea') {
    var addendum = '';
    {
      addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + (getCurrentFiberStackAddendum$7() || '');
    }
    invariant(false, 'Objects are not valid as a React child (found: %s).%s', Object.prototype.toString.call(newChild) === '[object Object]' ? 'object with keys {' + Object.keys(newChild).join(', ') + '}' : newChild, addendum);
  }
}

function warnOnFunctionType() {
  var currentComponentErrorInfo = 'Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.' + (getCurrentFiberStackAddendum$7() || '');

  if (ownerHasFunctionTypeWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasFunctionTypeWarning[currentComponentErrorInfo] = true;

  warning(false, 'Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.%s', getCurrentFiberStackAddendum$7() || '');
}

// This wrapper function exists because I expect to clone the code in each path
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.
function ChildReconciler(shouldTrackSideEffects) {
  function deleteChild(returnFiber, childToDelete) {
    if (!shouldTrackSideEffects) {
      // Noop.
      return;
    }
    // Deletions are added in reversed order so we add it to the front.
    // At this point, the return fiber's effect list is empty except for
    // deletions, so we can just append the deletion to the list. The remaining
    // effects aren't added until the complete phase. Once we implement
    // resuming, this may not be true.
    var last = returnFiber.lastEffect;
    if (last !== null) {
      last.nextEffect = childToDelete;
      returnFiber.lastEffect = childToDelete;
    } else {
      returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
    }
    childToDelete.nextEffect = null;
    childToDelete.effectTag = Deletion;
  }

  function deleteRemainingChildren(returnFiber, currentFirstChild) {
    if (!shouldTrackSideEffects) {
      // Noop.
      return null;
    }

    // TODO: For the shouldClone case, this could be micro-optimized a bit by
    // assuming that after the first child we've already added everything.
    var childToDelete = currentFirstChild;
    while (childToDelete !== null) {
      deleteChild(returnFiber, childToDelete);
      childToDelete = childToDelete.sibling;
    }
    return null;
  }

  function mapRemainingChildren(returnFiber, currentFirstChild) {
    // Add the remaining children to a temporary map so that we can find them by
    // keys quickly. Implicit (null) keys get added to this set with their index
    var existingChildren = new Map();

    var existingChild = currentFirstChild;
    while (existingChild !== null) {
      if (existingChild.key !== null) {
        existingChildren.set(existingChild.key, existingChild);
      } else {
        existingChildren.set(existingChild.index, existingChild);
      }
      existingChild = existingChild.sibling;
    }
    return existingChildren;
  }

  function useFiber(fiber, pendingProps, expirationTime) {
    // We currently set sibling to null and index to 0 here because it is easy
    // to forget to do before returning it. E.g. for the single child case.
    var clone = createWorkInProgress(fiber, pendingProps, expirationTime);
    clone.index = 0;
    clone.sibling = null;
    return clone;
  }

  function placeChild(newFiber, lastPlacedIndex, newIndex) {
    newFiber.index = newIndex;
    if (!shouldTrackSideEffects) {
      // Noop.
      return lastPlacedIndex;
    }
    var current = newFiber.alternate;
    if (current !== null) {
      var oldIndex = current.index;
      if (oldIndex < lastPlacedIndex) {
        // This is a move.
        newFiber.effectTag = Placement;
        return lastPlacedIndex;
      } else {
        // This item can stay in place.
        return oldIndex;
      }
    } else {
      // This is an insertion.
      newFiber.effectTag = Placement;
      return lastPlacedIndex;
    }
  }

  function placeSingleChild(newFiber) {
    // This is simpler for the single child case. We only need to do a
    // placement for inserting new children.
    if (shouldTrackSideEffects && newFiber.alternate === null) {
      newFiber.effectTag = Placement;
    }
    return newFiber;
  }

  function updateTextNode(returnFiber, current, textContent, expirationTime) {
    if (current === null || current.tag !== HostText) {
      // Insert
      var created = createFiberFromText(textContent, returnFiber.mode, expirationTime);
      created.return = returnFiber;
      return created;
    } else {
      // Update
      var existing = useFiber(current, textContent, expirationTime);
      existing.return = returnFiber;
      return existing;
    }
  }

  function updateElement(returnFiber, current, element, expirationTime) {
    if (current !== null && current.type === element.type) {
      // Move based on index
      var existing = useFiber(current, element.props, expirationTime);
      existing.ref = coerceRef(returnFiber, current, element);
      existing.return = returnFiber;
      {
        existing._debugSource = element._source;
        existing._debugOwner = element._owner;
      }
      return existing;
    } else {
      // Insert
      var created = createFiberFromElement(element, returnFiber.mode, expirationTime);
      created.ref = coerceRef(returnFiber, current, element);
      created.return = returnFiber;
      return created;
    }
  }

  function updatePortal(returnFiber, current, portal, expirationTime) {
    if (current === null || current.tag !== HostPortal || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation) {
      // Insert
      var created = createFiberFromPortal(portal, returnFiber.mode, expirationTime);
      created.return = returnFiber;
      return created;
    } else {
      // Update
      var existing = useFiber(current, portal.children || [], expirationTime);
      existing.return = returnFiber;
      return existing;
    }
  }

  function updateFragment(returnFiber, current, fragment, expirationTime, key) {
    if (current === null || current.tag !== Fragment) {
      // Insert
      var created = createFiberFromFragment(fragment, returnFiber.mode, expirationTime, key);
      created.return = returnFiber;
      return created;
    } else {
      // Update
      var existing = useFiber(current, fragment, expirationTime);
      existing.return = returnFiber;
      return existing;
    }
  }

  function createChild(returnFiber, newChild, expirationTime) {
    if (typeof newChild === 'string' || typeof newChild === 'number') {
      // Text nodes don't have keys. If the previous node is implicitly keyed
      // we can continue to replace it without aborting even if it is not a text
      // node.
      var created = createFiberFromText('' + newChild, returnFiber.mode, expirationTime);
      created.return = returnFiber;
      return created;
    }

    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          {
            var _created = createFiberFromElement(newChild, returnFiber.mode, expirationTime);
            _created.ref = coerceRef(returnFiber, null, newChild);
            _created.return = returnFiber;
            return _created;
          }
        case REACT_PORTAL_TYPE:
          {
            var _created2 = createFiberFromPortal(newChild, returnFiber.mode, expirationTime);
            _created2.return = returnFiber;
            return _created2;
          }
      }

      if (isArray$1(newChild) || getIteratorFn(newChild)) {
        var _created3 = createFiberFromFragment(newChild, returnFiber.mode, expirationTime, null);
        _created3.return = returnFiber;
        return _created3;
      }

      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType();
      }
    }

    return null;
  }

  function updateSlot(returnFiber, oldFiber, newChild, expirationTime) {
    // Update the fiber if the keys match, otherwise return null.

    var key = oldFiber !== null ? oldFiber.key : null;

    if (typeof newChild === 'string' || typeof newChild === 'number') {
      // Text nodes don't have keys. If the previous node is implicitly keyed
      // we can continue to replace it without aborting even if it is not a text
      // node.
      if (key !== null) {
        return null;
      }
      return updateTextNode(returnFiber, oldFiber, '' + newChild, expirationTime);
    }

    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          {
            if (newChild.key === key) {
              if (newChild.type === REACT_FRAGMENT_TYPE) {
                return updateFragment(returnFiber, oldFiber, newChild.props.children, expirationTime, key);
              }
              return updateElement(returnFiber, oldFiber, newChild, expirationTime);
            } else {
              return null;
            }
          }
        case REACT_PORTAL_TYPE:
          {
            if (newChild.key === key) {
              return updatePortal(returnFiber, oldFiber, newChild, expirationTime);
            } else {
              return null;
            }
          }
      }

      if (isArray$1(newChild) || getIteratorFn(newChild)) {
        if (key !== null) {
          return null;
        }

        return updateFragment(returnFiber, oldFiber, newChild, expirationTime, null);
      }

      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType();
      }
    }

    return null;
  }

  function updateFromMap(existingChildren, returnFiber, newIdx, newChild, expirationTime) {
    if (typeof newChild === 'string' || typeof newChild === 'number') {
      // Text nodes don't have keys, so we neither have to check the old nor
      // new node for the key. If both are text nodes, they match.
      var matchedFiber = existingChildren.get(newIdx) || null;
      return updateTextNode(returnFiber, matchedFiber, '' + newChild, expirationTime);
    }

    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          {
            var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
            if (newChild.type === REACT_FRAGMENT_TYPE) {
              return updateFragment(returnFiber, _matchedFiber, newChild.props.children, expirationTime, newChild.key);
            }
            return updateElement(returnFiber, _matchedFiber, newChild, expirationTime);
          }
        case REACT_PORTAL_TYPE:
          {
            var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
            return updatePortal(returnFiber, _matchedFiber2, newChild, expirationTime);
          }
      }

      if (isArray$1(newChild) || getIteratorFn(newChild)) {
        var _matchedFiber3 = existingChildren.get(newIdx) || null;
        return updateFragment(returnFiber, _matchedFiber3, newChild, expirationTime, null);
      }

      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType();
      }
    }

    return null;
  }

  /**
   * Warns if there is a duplicate or missing key
   */
  function warnOnInvalidKey(child, knownKeys) {
    {
      if (typeof child !== 'object' || child === null) {
        return knownKeys;
      }
      switch (child.$$typeof) {
        case REACT_ELEMENT_TYPE:
        case REACT_PORTAL_TYPE:
          warnForMissingKey(child);
          var key = child.key;
          if (typeof key !== 'string') {
            break;
          }
          if (knownKeys === null) {
            knownKeys = new Set();
            knownKeys.add(key);
            break;
          }
          if (!knownKeys.has(key)) {
            knownKeys.add(key);
            break;
          }
          warning(false, 'Encountered two children with the same key, `%s`. ' + 'Keys should be unique so that components maintain their identity ' + 'across updates. Non-unique keys may cause children to be ' + 'duplicated and/or omitted — the behavior is unsupported and ' + 'could change in a future version.%s', key, getCurrentFiberStackAddendum$7());
          break;
        default:
          break;
      }
    }
    return knownKeys;
  }

  function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, expirationTime) {
    // This algorithm can't optimize by searching from boths ends since we
    // don't have backpointers on fibers. I'm trying to see how far we can get
    // with that model. If it ends up not being worth the tradeoffs, we can
    // add it later.

    // Even with a two ended optimization, we'd want to optimize for the case
    // where there are few changes and brute force the comparison instead of
    // going for the Map. It'd like to explore hitting that path first in
    // forward-only mode and only go for the Map once we notice that we need
    // lots of look ahead. This doesn't handle reversal as well as two ended
    // search but that's unusual. Besides, for the two ended optimization to
    // work on Iterables, we'd need to copy the whole set.

    // In this first iteration, we'll just live with hitting the bad case
    // (adding everything to a Map) in for every insert/move.

    // If you change this code, also update reconcileChildrenIterator() which
    // uses the same algorithm.

    {
      // First, validate keys.
      var knownKeys = null;
      for (var i = 0; i < newChildren.length; i++) {
        var child = newChildren[i];
        knownKeys = warnOnInvalidKey(child, knownKeys);
      }
    }

    var resultingFirstChild = null;
    var previousNewFiber = null;

    var oldFiber = currentFirstChild;
    var lastPlacedIndex = 0;
    var newIdx = 0;
    var nextOldFiber = null;
    for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
      if (oldFiber.index > newIdx) {
        nextOldFiber = oldFiber;
        oldFiber = null;
      } else {
        nextOldFiber = oldFiber.sibling;
      }
      var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], expirationTime);
      if (newFiber === null) {
        // TODO: This breaks on empty slots like null children. That's
        // unfortunate because it triggers the slow path all the time. We need
        // a better way to communicate whether this was a miss or null,
        // boolean, undefined, etc.
        if (oldFiber === null) {
          oldFiber = nextOldFiber;
        }
        break;
      }
      if (shouldTrackSideEffects) {
        if (oldFiber && newFiber.alternate === null) {
          // We matched the slot, but we didn't reuse the existing fiber, so we
          // need to delete the existing child.
          deleteChild(returnFiber, oldFiber);
        }
      }
      lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
      if (previousNewFiber === null) {
        // TODO: Move out of the loop. This only happens for the first run.
        resultingFirstChild = newFiber;
      } else {
        // TODO: Defer siblings if we're not at the right index for this slot.
        // I.e. if we had null values before, then we want to defer this
        // for each null value. However, we also don't want to call updateSlot
        // with the previous one.
        previousNewFiber.sibling = newFiber;
      }
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }

    if (newIdx === newChildren.length) {
      // We've reached the end of the new children. We can delete the rest.
      deleteRemainingChildren(returnFiber, oldFiber);
      return resultingFirstChild;
    }

    if (oldFiber === null) {
      // If we don't have any more existing children we can choose a fast path
      // since the rest will all be insertions.
      for (; newIdx < newChildren.length; newIdx++) {
        var _newFiber = createChild(returnFiber, newChildren[newIdx], expirationTime);
        if (!_newFiber) {
          continue;
        }
        lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);
        if (previousNewFiber === null) {
          // TODO: Move out of the loop. This only happens for the first run.
          resultingFirstChild = _newFiber;
        } else {
          previousNewFiber.sibling = _newFiber;
        }
        previousNewFiber = _newFiber;
      }
      return resultingFirstChild;
    }

    // Add all children to a key map for quick lookups.
    var existingChildren = mapRemainingChildren(returnFiber, oldFiber);

    // Keep scanning and use the map to restore deleted items as moves.
    for (; newIdx < newChildren.length; newIdx++) {
      var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], expirationTime);
      if (_newFiber2) {
        if (shouldTrackSideEffects) {
          if (_newFiber2.alternate !== null) {
            // The new fiber is a work in progress, but if there exists a
            // current, that means that we reused the fiber. We need to delete
            // it from the child list so that we don't add it to the deletion
            // list.
            existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key);
          }
        }
        lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);
        if (previousNewFiber === null) {
          resultingFirstChild = _newFiber2;
        } else {
          previousNewFiber.sibling = _newFiber2;
        }
        previousNewFiber = _newFiber2;
      }
    }

    if (shouldTrackSideEffects) {
      // Any existing children that weren't consumed above were deleted. We need
      // to add them to the deletion list.
      existingChildren.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    }

    return resultingFirstChild;
  }

  function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, expirationTime) {
    // This is the same implementation as reconcileChildrenArray(),
    // but using the iterator instead.

    var iteratorFn = getIteratorFn(newChildrenIterable);
    !(typeof iteratorFn === 'function') ? invariant(false, 'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.') : void 0;

    {
      // Warn about using Maps as children
      if (newChildrenIterable.entries === iteratorFn) {
        !didWarnAboutMaps ? warning(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', getCurrentFiberStackAddendum$7()) : void 0;
        didWarnAboutMaps = true;
      }

      // First, validate keys.
      // We'll get a different iterator later for the main pass.
      var _newChildren = iteratorFn.call(newChildrenIterable);
      if (_newChildren) {
        var knownKeys = null;
        var _step = _newChildren.next();
        for (; !_step.done; _step = _newChildren.next()) {
          var child = _step.value;
          knownKeys = warnOnInvalidKey(child, knownKeys);
        }
      }
    }

    var newChildren = iteratorFn.call(newChildrenIterable);
    !(newChildren != null) ? invariant(false, 'An iterable object provided no iterator.') : void 0;

    var resultingFirstChild = null;
    var previousNewFiber = null;

    var oldFiber = currentFirstChild;
    var lastPlacedIndex = 0;
    var newIdx = 0;
    var nextOldFiber = null;

    var step = newChildren.next();
    for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
      if (oldFiber.index > newIdx) {
        nextOldFiber = oldFiber;
        oldFiber = null;
      } else {
        nextOldFiber = oldFiber.sibling;
      }
      var newFiber = updateSlot(returnFiber, oldFiber, step.value, expirationTime);
      if (newFiber === null) {
        // TODO: This breaks on empty slots like null children. That's
        // unfortunate because it triggers the slow path all the time. We need
        // a better way to communicate whether this was a miss or null,
        // boolean, undefined, etc.
        if (!oldFiber) {
          oldFiber = nextOldFiber;
        }
        break;
      }
      if (shouldTrackSideEffects) {
        if (oldFiber && newFiber.alternate === null) {
          // We matched the slot, but we didn't reuse the existing fiber, so we
          // need to delete the existing child.
          deleteChild(returnFiber, oldFiber);
        }
      }
      lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
      if (previousNewFiber === null) {
        // TODO: Move out of the loop. This only happens for the first run.
        resultingFirstChild = newFiber;
      } else {
        // TODO: Defer siblings if we're not at the right index for this slot.
        // I.e. if we had null values before, then we want to defer this
        // for each null value. However, we also don't want to call updateSlot
        // with the previous one.
        previousNewFiber.sibling = newFiber;
      }
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }

    if (step.done) {
      // We've reached the end of the new children. We can delete the rest.
      deleteRemainingChildren(returnFiber, oldFiber);
      return resultingFirstChild;
    }

    if (oldFiber === null) {
      // If we don't have any more existing children we can choose a fast path
      // since the rest will all be insertions.
      for (; !step.done; newIdx++, step = newChildren.next()) {
        var _newFiber3 = createChild(returnFiber, step.value, expirationTime);
        if (_newFiber3 === null) {
          continue;
        }
        lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);
        if (previousNewFiber === null) {
          // TODO: Move out of the loop. This only happens for the first run.
          resultingFirstChild = _newFiber3;
        } else {
          previousNewFiber.sibling = _newFiber3;
        }
        previousNewFiber = _newFiber3;
      }
      return resultingFirstChild;
    }

    // Add all children to a key map for quick lookups.
    var existingChildren = mapRemainingChildren(returnFiber, oldFiber);

    // Keep scanning and use the map to restore deleted items as moves.
    for (; !step.done; newIdx++, step = newChildren.next()) {
      var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, expirationTime);
      if (_newFiber4 !== null) {
        if (shouldTrackSideEffects) {
          if (_newFiber4.alternate !== null) {
            // The new fiber is a work in progress, but if there exists a
            // current, that means that we reused the fiber. We need to delete
            // it from the child list so that we don't add it to the deletion
            // list.
            existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
          }
        }
        lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);
        if (previousNewFiber === null) {
          resultingFirstChild = _newFiber4;
        } else {
          previousNewFiber.sibling = _newFiber4;
        }
        previousNewFiber = _newFiber4;
      }
    }

    if (shouldTrackSideEffects) {
      // Any existing children that weren't consumed above were deleted. We need
      // to add them to the deletion list.
      existingChildren.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    }

    return resultingFirstChild;
  }

  function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, expirationTime) {
    // There's no need to check for keys on text nodes since we don't have a
    // way to define them.
    if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
      // We already have an existing node so let's just update it and delete
      // the rest.
      deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
      var existing = useFiber(currentFirstChild, textContent, expirationTime);
      existing.return = returnFiber;
      return existing;
    }
    // The existing first child is not a text node so we need to create one
    // and delete the existing ones.
    deleteRemainingChildren(returnFiber, currentFirstChild);
    var created = createFiberFromText(textContent, returnFiber.mode, expirationTime);
    created.return = returnFiber;
    return created;
  }

  function reconcileSingleElement(returnFiber, currentFirstChild, element, expirationTime) {
    var key = element.key;
    var child = currentFirstChild;
    while (child !== null) {
      // TODO: If key === null and child.key === null, then this only applies to
      // the first item in the list.
      if (child.key === key) {
        if (child.tag === Fragment ? element.type === REACT_FRAGMENT_TYPE : child.type === element.type) {
          deleteRemainingChildren(returnFiber, child.sibling);
          var existing = useFiber(child, element.type === REACT_FRAGMENT_TYPE ? element.props.children : element.props, expirationTime);
          existing.ref = coerceRef(returnFiber, child, element);
          existing.return = returnFiber;
          {
            existing._debugSource = element._source;
            existing._debugOwner = element._owner;
          }
          return existing;
        } else {
          deleteRemainingChildren(returnFiber, child);
          break;
        }
      } else {
        deleteChild(returnFiber, child);
      }
      child = child.sibling;
    }

    if (element.type === REACT_FRAGMENT_TYPE) {
      var created = createFiberFromFragment(element.props.children, returnFiber.mode, expirationTime, element.key);
      created.return = returnFiber;
      return created;
    } else {
      var _created4 = createFiberFromElement(element, returnFiber.mode, expirationTime);
      _created4.ref = coerceRef(returnFiber, currentFirstChild, element);
      _created4.return = returnFiber;
      return _created4;
    }
  }

  function reconcileSinglePortal(returnFiber, currentFirstChild, portal, expirationTime) {
    var key = portal.key;
    var child = currentFirstChild;
    while (child !== null) {
      // TODO: If key === null and child.key === null, then this only applies to
      // the first item in the list.
      if (child.key === key) {
        if (child.tag === HostPortal && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
          deleteRemainingChildren(returnFiber, child.sibling);
          var existing = useFiber(child, portal.children || [], expirationTime);
          existing.return = returnFiber;
          return existing;
        } else {
          deleteRemainingChildren(returnFiber, child);
          break;
        }
      } else {
        deleteChild(returnFiber, child);
      }
      child = child.sibling;
    }

    var created = createFiberFromPortal(portal, returnFiber.mode, expirationTime);
    created.return = returnFiber;
    return created;
  }

  // This API will tag the children with the side-effect of the reconciliation
  // itself. They will be added to the side-effect list as we pass through the
  // children and the parent.
  function reconcileChildFibers(returnFiber, currentFirstChild, newChild, expirationTime) {
    // This function is not recursive.
    // If the top level item is an array, we treat it as a set of children,
    // not as a fragment. Nested arrays on the other hand will be treated as
    // fragment nodes. Recursion happens at the normal flow.

    // Handle top level unkeyed fragments as if they were arrays.
    // This leads to an ambiguity between <>{[...]}</> and <>...</>.
    // We treat the ambiguous cases above the same.
    var isUnkeyedTopLevelFragment = typeof newChild === 'object' && newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null;
    if (isUnkeyedTopLevelFragment) {
      newChild = newChild.props.children;
    }

    // Handle object types
    var isObject = typeof newChild === 'object' && newChild !== null;

    if (isObject) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, expirationTime));
        case REACT_PORTAL_TYPE:
          return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, expirationTime));
      }
    }

    if (typeof newChild === 'string' || typeof newChild === 'number') {
      return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, '' + newChild, expirationTime));
    }

    if (isArray$1(newChild)) {
      return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, expirationTime);
    }

    if (getIteratorFn(newChild)) {
      return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, expirationTime);
    }

    if (isObject) {
      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType();
      }
    }
    if (typeof newChild === 'undefined' && !isUnkeyedTopLevelFragment) {
      // If the new child is undefined, and the return fiber is a composite
      // component, throw an error. If Fiber return types are disabled,
      // we already threw above.
      switch (returnFiber.tag) {
        case ClassComponent:
          {
            {
              var instance = returnFiber.stateNode;
              if (instance.render._isMockFunction) {
                // We allow auto-mocks to proceed as if they're returning null.
                break;
              }
            }
          }
        // Intentionally fall through to the next case, which handles both
        // functions and classes
        // eslint-disable-next-lined no-fallthrough
        case FunctionalComponent:
          {
            var Component = returnFiber.type;
            invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', Component.displayName || Component.name || 'Component');
          }
      }
    }

    // Remaining cases are all treated as empty.
    return deleteRemainingChildren(returnFiber, currentFirstChild);
  }

  return reconcileChildFibers;
}

var reconcileChildFibers = ChildReconciler(true);
var mountChildFibers = ChildReconciler(false);

function cloneChildFibers(current, workInProgress) {
  !(current === null || workInProgress.child === current.child) ? invariant(false, 'Resuming work not yet implemented.') : void 0;

  if (workInProgress.child === null) {
    return;
  }

  var currentChild = workInProgress.child;
  var newChild = createWorkInProgress(currentChild, currentChild.pendingProps, currentChild.expirationTime);
  workInProgress.child = newChild;

  newChild.return = workInProgress;
  while (currentChild.sibling !== null) {
    currentChild = currentChild.sibling;
    newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps, currentChild.expirationTime);
    newChild.return = workInProgress;
  }
  newChild.sibling = null;
}

// The deepest Fiber on the stack involved in a hydration context.
// This may have been an insertion or a hydration.
var hydrationParentFiber = null;
var nextHydratableInstance = null;
var isHydrating = false;

function enterHydrationState(fiber) {
  if (!supportsHydration) {
    return false;
  }

  var parentInstance = fiber.stateNode.containerInfo;
  nextHydratableInstance = getFirstHydratableChild(parentInstance);
  hydrationParentFiber = fiber;
  isHydrating = true;
  return true;
}

function deleteHydratableInstance(returnFiber, instance) {
  {
    switch (returnFiber.tag) {
      case HostRoot:
        didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo, instance);
        break;
      case HostComponent:
        didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
        break;
    }
  }

  var childToDelete = createFiberFromHostInstanceForDeletion();
  childToDelete.stateNode = instance;
  childToDelete.return = returnFiber;
  childToDelete.effectTag = Deletion;

  // This might seem like it belongs on progressedFirstDeletion. However,
  // these children are not part of the reconciliation list of children.
  // Even if we abort and rereconcile the children, that will try to hydrate
  // again and the nodes are still in the host tree so these will be
  // recreated.
  if (returnFiber.lastEffect !== null) {
    returnFiber.lastEffect.nextEffect = childToDelete;
    returnFiber.lastEffect = childToDelete;
  } else {
    returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
  }
}

function insertNonHydratedInstance(returnFiber, fiber) {
  fiber.effectTag |= Placement;
  {
    switch (returnFiber.tag) {
      case HostRoot:
        {
          var parentContainer = returnFiber.stateNode.containerInfo;
          switch (fiber.tag) {
            case HostComponent:
              var type = fiber.type;
              var props = fiber.pendingProps;
              didNotFindHydratableContainerInstance(parentContainer, type, props);
              break;
            case HostText:
              var text = fiber.pendingProps;
              didNotFindHydratableContainerTextInstance(parentContainer, text);
              break;
          }
          break;
        }
      case HostComponent:
        {
          var parentType = returnFiber.type;
          var parentProps = returnFiber.memoizedProps;
          var parentInstance = returnFiber.stateNode;
          switch (fiber.tag) {
            case HostComponent:
              var _type = fiber.type;
              var _props = fiber.pendingProps;
              didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type, _props);
              break;
            case HostText:
              var _text = fiber.pendingProps;
              didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
              break;
          }
          break;
        }
      default:
        return;
    }
  }
}

function tryHydrate(fiber, nextInstance) {
  switch (fiber.tag) {
    case HostComponent:
      {
        var type = fiber.type;
        var props = fiber.pendingProps;
        var instance = canHydrateInstance(nextInstance, type, props);
        if (instance !== null) {
          fiber.stateNode = instance;
          return true;
        }
        return false;
      }
    case HostText:
      {
        var text = fiber.pendingProps;
        var textInstance = canHydrateTextInstance(nextInstance, text);
        if (textInstance !== null) {
          fiber.stateNode = textInstance;
          return true;
        }
        return false;
      }
    default:
      return false;
  }
}

function tryToClaimNextHydratableInstance(fiber) {
  if (!isHydrating) {
    return;
  }
  var nextInstance = nextHydratableInstance;
  if (!nextInstance) {
    // Nothing to hydrate. Make it an insertion.
    insertNonHydratedInstance(hydrationParentFiber, fiber);
    isHydrating = false;
    hydrationParentFiber = fiber;
    return;
  }
  var firstAttemptedInstance = nextInstance;
  if (!tryHydrate(fiber, nextInstance)) {
    // If we can't hydrate this instance let's try the next one.
    // We use this as a heuristic. It's based on intuition and not data so it
    // might be flawed or unnecessary.
    nextInstance = getNextHydratableSibling(firstAttemptedInstance);
    if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
      // Nothing to hydrate. Make it an insertion.
      insertNonHydratedInstance(hydrationParentFiber, fiber);
      isHydrating = false;
      hydrationParentFiber = fiber;
      return;
    }
    // We matched the next one, we'll now assume that the first one was
    // superfluous and we'll delete it. Since we can't eagerly delete it
    // we'll have to schedule a deletion. To do that, this node needs a dummy
    // fiber associated with it.
    deleteHydratableInstance(hydrationParentFiber, firstAttemptedInstance);
  }
  hydrationParentFiber = fiber;
  nextHydratableInstance = getFirstHydratableChild(nextInstance);
}

function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
  if (!supportsHydration) {
    invariant(false, 'Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.');
  }

  var instance = fiber.stateNode;
  var updatePayload = hydrateInstance(instance, fiber.type, fiber.memoizedProps, rootContainerInstance, hostContext, fiber);
  // TODO: Type this specific to this type of component.
  fiber.updateQueue = updatePayload;
  // If the update payload indicates that there is a change or if there
  // is a new ref we mark this as an update.
  if (updatePayload !== null) {
    return true;
  }
  return false;
}

function prepareToHydrateHostTextInstance(fiber) {
  if (!supportsHydration) {
    invariant(false, 'Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.');
  }

  var textInstance = fiber.stateNode;
  var textContent = fiber.memoizedProps;
  var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);
  {
    if (shouldUpdate) {
      // We assume that prepareToHydrateHostTextInstance is called in a context where the
      // hydration parent is the parent host component of this host text.
      var returnFiber = hydrationParentFiber;
      if (returnFiber !== null) {
        switch (returnFiber.tag) {
          case HostRoot:
            {
              var parentContainer = returnFiber.stateNode.containerInfo;
              didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent);
              break;
            }
          case HostComponent:
            {
              var parentType = returnFiber.type;
              var parentProps = returnFiber.memoizedProps;
              var parentInstance = returnFiber.stateNode;
              didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, textContent);
              break;
            }
        }
      }
    }
  }
  return shouldUpdate;
}

function popToNextHostParent(fiber) {
  var parent = fiber.return;
  while (parent !== null && parent.tag !== HostComponent && parent.tag !== HostRoot) {
    parent = parent.return;
  }
  hydrationParentFiber = parent;
}

function popHydrationState(fiber) {
  if (!supportsHydration) {
    return false;
  }
  if (fiber !== hydrationParentFiber) {
    // We're deeper than the current hydration context, inside an inserted
    // tree.
    return false;
  }
  if (!isHydrating) {
    // If we're not currently hydrating but we're in a hydration context, then
    // we were an insertion and now need to pop up reenter hydration of our
    // siblings.
    popToNextHostParent(fiber);
    isHydrating = true;
    return false;
  }

  var type = fiber.type;

  // If we have any remaining hydratable nodes, we need to delete them now.
  // We only do this deeper than head and body since they tend to have random
  // other nodes in them. We also ignore components with pure text content in
  // side of them.
  // TODO: Better heuristic.
  if (fiber.tag !== HostComponent || type !== 'head' && type !== 'body' && !shouldSetTextContent(type, fiber.memoizedProps)) {
    var nextInstance = nextHydratableInstance;
    while (nextInstance) {
      deleteHydratableInstance(fiber, nextInstance);
      nextInstance = getNextHydratableSibling(nextInstance);
    }
  }

  popToNextHostParent(fiber);
  nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
  return true;
}

function resetHydrationState() {
  if (!supportsHydration) {
    return;
  }

  hydrationParentFiber = null;
  nextHydratableInstance = null;
  isHydrating = false;
}

var getCurrentFiberStackAddendum$6 = ReactDebugCurrentFiber.getCurrentFiberStackAddendum;


var didWarnAboutBadClass = void 0;
var didWarnAboutGetDerivedStateOnFunctionalComponent = void 0;
var didWarnAboutStatelessRefs = void 0;

{
  didWarnAboutBadClass = {};
  didWarnAboutGetDerivedStateOnFunctionalComponent = {};
  didWarnAboutStatelessRefs = {};
}

// TODO: Remove this and use reconcileChildrenAtExpirationTime directly.
function reconcileChildren(current, workInProgress, nextChildren) {
  reconcileChildrenAtExpirationTime(current, workInProgress, nextChildren, workInProgress.expirationTime);
}

function reconcileChildrenAtExpirationTime(current, workInProgress, nextChildren, renderExpirationTime) {
  if (current === null) {
    // If this is a fresh new component that hasn't been rendered yet, we
    // won't update its child set by applying minimal side-effects. Instead,
    // we will add them all to the child before it gets rendered. That means
    // we can optimize this reconciliation pass by not tracking side-effects.
    workInProgress.child = mountChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
  } else {
    // If the current child is the same as the work in progress, it means that
    // we haven't yet started any work on these children. Therefore, we use
    // the clone algorithm to create a copy of all the current children.

    // If we had any progressed work already, that is invalid at this point so
    // let's throw it out.
    workInProgress.child = reconcileChildFibers(workInProgress, current.child, nextChildren, renderExpirationTime);
  }
}

function updateForwardRef(current, workInProgress) {
  var render = workInProgress.type.render;
  var nextProps = workInProgress.pendingProps;
  var ref = workInProgress.ref;
  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (workInProgress.memoizedProps === nextProps) {
    var currentRef = current !== null ? current.ref : null;
    if (ref === currentRef) {
      return bailoutOnAlreadyFinishedWork(current, workInProgress);
    }
  }

  var nextChildren = void 0;
  {
    ReactCurrentOwner.current = workInProgress;
    ReactDebugCurrentFiber.setCurrentPhase('render');
    nextChildren = render(nextProps, ref);
    ReactDebugCurrentFiber.setCurrentPhase(null);
  }

  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextProps);
  return workInProgress.child;
}

function updateFragment(current, workInProgress) {
  var nextChildren = workInProgress.pendingProps;
  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (workInProgress.memoizedProps === nextChildren) {
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }
  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextChildren);
  return workInProgress.child;
}

function updateMode(current, workInProgress) {
  var nextChildren = workInProgress.pendingProps.children;
  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (nextChildren === null || workInProgress.memoizedProps === nextChildren) {
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }
  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextChildren);
  return workInProgress.child;
}

function updateProfiler(current, workInProgress) {
  var nextProps = workInProgress.pendingProps;
  if (enableProfilerTimer) {
    workInProgress.effectTag |= Update;
  }
  if (workInProgress.memoizedProps === nextProps) {
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }
  var nextChildren = nextProps.children;
  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextProps);
  return workInProgress.child;
}

function markRef(current, workInProgress) {
  var ref = workInProgress.ref;
  if (current === null && ref !== null || current !== null && current.ref !== ref) {
    // Schedule a Ref effect
    workInProgress.effectTag |= Ref;
  }
}

function updateFunctionalComponent(current, workInProgress) {
  var fn = workInProgress.type;
  var nextProps = workInProgress.pendingProps;

  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else {
    if (workInProgress.memoizedProps === nextProps) {
      return bailoutOnAlreadyFinishedWork(current, workInProgress);
    }
    // TODO: consider bringing fn.shouldComponentUpdate() back.
    // It used to be here.
  }

  var unmaskedContext = getUnmaskedContext(workInProgress);
  var context = getMaskedContext(workInProgress, unmaskedContext);

  var nextChildren = void 0;

  {
    ReactCurrentOwner.current = workInProgress;
    ReactDebugCurrentFiber.setCurrentPhase('render');
    nextChildren = fn(nextProps, context);
    ReactDebugCurrentFiber.setCurrentPhase(null);
  }
  // React DevTools reads this flag.
  workInProgress.effectTag |= PerformedWork;
  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextProps);
  return workInProgress.child;
}

function updateClassComponent(current, workInProgress, renderExpirationTime) {
  // Push context providers early to prevent context stack mismatches.
  // During mounting we don't know the child context yet as the instance doesn't exist.
  // We will invalidate the child context in finishClassComponent() right after rendering.
  var hasContext = pushContextProvider(workInProgress);
  var shouldUpdate = void 0;
  if (current === null) {
    if (workInProgress.stateNode === null) {
      // In the initial pass we might need to construct the instance.
      constructClassInstance(workInProgress, workInProgress.pendingProps, renderExpirationTime);
      mountClassInstance(workInProgress, renderExpirationTime);

      shouldUpdate = true;
    } else {
      // In a resume, we'll already have an instance we can reuse.
      shouldUpdate = resumeMountClassInstance(workInProgress, renderExpirationTime);
    }
  } else {
    shouldUpdate = updateClassInstance(current, workInProgress, renderExpirationTime);
  }
  return finishClassComponent(current, workInProgress, shouldUpdate, hasContext, renderExpirationTime);
}

function finishClassComponent(current, workInProgress, shouldUpdate, hasContext, renderExpirationTime) {
  // Refs should update even if shouldComponentUpdate returns false
  markRef(current, workInProgress);

  var didCaptureError = (workInProgress.effectTag & DidCapture) !== NoEffect;

  if (!shouldUpdate && !didCaptureError) {
    // Context providers should defer to sCU for rendering
    if (hasContext) {
      invalidateContextProvider(workInProgress, false);
    }

    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }

  var ctor = workInProgress.type;
  var instance = workInProgress.stateNode;

  // Rerender
  ReactCurrentOwner.current = workInProgress;
  var nextChildren = void 0;
  if (didCaptureError && (!enableGetDerivedStateFromCatch || typeof ctor.getDerivedStateFromCatch !== 'function')) {
    // If we captured an error, but getDerivedStateFrom catch is not defined,
    // unmount all the children. componentDidCatch will schedule an update to
    // re-render a fallback. This is temporary until we migrate everyone to
    // the new API.
    // TODO: Warn in a future release.
    nextChildren = null;

    if (enableProfilerTimer) {
      stopBaseRenderTimerIfRunning();
    }
  } else {
    {
      ReactDebugCurrentFiber.setCurrentPhase('render');
      nextChildren = instance.render();
      if (debugRenderPhaseSideEffects || debugRenderPhaseSideEffectsForStrictMode && workInProgress.mode & StrictMode) {
        instance.render();
      }
      ReactDebugCurrentFiber.setCurrentPhase(null);
    }
  }

  // React DevTools reads this flag.
  workInProgress.effectTag |= PerformedWork;
  if (didCaptureError) {
    // If we're recovering from an error, reconcile twice: first to delete
    // all the existing children.
    reconcileChildrenAtExpirationTime(current, workInProgress, null, renderExpirationTime);
    workInProgress.child = null;
    // Now we can continue reconciling like normal. This has the effect of
    // remounting all children regardless of whether their their
    // identity matches.
  }
  reconcileChildrenAtExpirationTime(current, workInProgress, nextChildren, renderExpirationTime);
  // Memoize props and state using the values we just used to render.
  // TODO: Restructure so we never read values from the instance.
  memoizeState(workInProgress, instance.state);
  memoizeProps(workInProgress, instance.props);

  // The context might have changed so we need to recalculate it.
  if (hasContext) {
    invalidateContextProvider(workInProgress, true);
  }

  return workInProgress.child;
}

function pushHostRootContext(workInProgress) {
  var root = workInProgress.stateNode;
  if (root.pendingContext) {
    pushTopLevelContextObject(workInProgress, root.pendingContext, root.pendingContext !== root.context);
  } else if (root.context) {
    // Should always be set
    pushTopLevelContextObject(workInProgress, root.context, false);
  }
  pushHostContainer(workInProgress, root.containerInfo);
}

function updateHostRoot(current, workInProgress, renderExpirationTime) {
  pushHostRootContext(workInProgress);
  var updateQueue = workInProgress.updateQueue;
  if (updateQueue !== null) {
    var nextProps = workInProgress.pendingProps;
    var prevState = workInProgress.memoizedState;
    var prevChildren = prevState !== null ? prevState.element : null;
    processUpdateQueue(workInProgress, updateQueue, nextProps, null, renderExpirationTime);
    var nextState = workInProgress.memoizedState;
    // Caution: React DevTools currently depends on this property
    // being called "element".
    var nextChildren = nextState.element;

    if (nextChildren === prevChildren) {
      // If the state is the same as before, that's a bailout because we had
      // no work that expires at this time.
      resetHydrationState();
      return bailoutOnAlreadyFinishedWork(current, workInProgress);
    }
    var root = workInProgress.stateNode;
    if ((current === null || current.child === null) && root.hydrate && enterHydrationState(workInProgress)) {
      // If we don't have any current children this might be the first pass.
      // We always try to hydrate. If this isn't a hydration pass there won't
      // be any children to hydrate which is effectively the same thing as
      // not hydrating.

      // This is a bit of a hack. We track the host root as a placement to
      // know that we're currently in a mounting state. That way isMounted
      // works as expected. We must reset this before committing.
      // TODO: Delete this when we delete isMounted and findDOMNode.
      workInProgress.effectTag |= Placement;

      // Ensure that children mount into this root without tracking
      // side-effects. This ensures that we don't store Placement effects on
      // nodes that will be hydrated.
      workInProgress.child = mountChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
    } else {
      // Otherwise reset hydration state in case we aborted and resumed another
      // root.
      resetHydrationState();
      reconcileChildren(current, workInProgress, nextChildren);
    }
    return workInProgress.child;
  }
  resetHydrationState();
  // If there is no update queue, that's a bailout because the root has no props.
  return bailoutOnAlreadyFinishedWork(current, workInProgress);
}

function updateHostComponent(current, workInProgress, renderExpirationTime) {
  pushHostContext(workInProgress);

  if (current === null) {
    tryToClaimNextHydratableInstance(workInProgress);
  }

  var type = workInProgress.type;
  var memoizedProps = workInProgress.memoizedProps;
  var nextProps = workInProgress.pendingProps;
  var prevProps = current !== null ? current.memoizedProps : null;

  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (memoizedProps === nextProps) {
    var isHidden = workInProgress.mode & AsyncMode && shouldDeprioritizeSubtree(type, nextProps);
    if (isHidden) {
      // Before bailing out, make sure we've deprioritized a hidden component.
      workInProgress.expirationTime = Never;
    }
    if (!isHidden || renderExpirationTime !== Never) {
      return bailoutOnAlreadyFinishedWork(current, workInProgress);
    }
    // If we're rendering a hidden node at hidden priority, don't bailout. The
    // parent is complete, but the children may not be.
  }

  var nextChildren = nextProps.children;
  var isDirectTextChild = shouldSetTextContent(type, nextProps);

  if (isDirectTextChild) {
    // We special case a direct text child of a host node. This is a common
    // case. We won't handle it as a reified child. We will instead handle
    // this in the host environment that also have access to this prop. That
    // avoids allocating another HostText fiber and traversing it.
    nextChildren = null;
  } else if (prevProps && shouldSetTextContent(type, prevProps)) {
    // If we're switching from a direct text child to a normal child, or to
    // empty, we need to schedule the text content to be reset.
    workInProgress.effectTag |= ContentReset;
  }

  markRef(current, workInProgress);

  // Check the host config to see if the children are offscreen/hidden.
  if (renderExpirationTime !== Never && workInProgress.mode & AsyncMode && shouldDeprioritizeSubtree(type, nextProps)) {
    // Down-prioritize the children.
    workInProgress.expirationTime = Never;
    // Bailout and come back to this fiber later.
    workInProgress.memoizedProps = nextProps;
    return null;
  }

  reconcileChildren(current, workInProgress, nextChildren);
  memoizeProps(workInProgress, nextProps);
  return workInProgress.child;
}

function updateHostText(current, workInProgress) {
  if (current === null) {
    tryToClaimNextHydratableInstance(workInProgress);
  }
  var nextProps = workInProgress.pendingProps;
  memoizeProps(workInProgress, nextProps);
  // Nothing to do here. This is terminal. We'll do the completion step
  // immediately after.
  return null;
}

function mountIndeterminateComponent(current, workInProgress, renderExpirationTime) {
  !(current === null) ? invariant(false, 'An indeterminate component should never have mounted. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  var fn = workInProgress.type;
  var props = workInProgress.pendingProps;
  var unmaskedContext = getUnmaskedContext(workInProgress);
  var context = getMaskedContext(workInProgress, unmaskedContext);

  var value = void 0;

  {
    if (fn.prototype && typeof fn.prototype.render === 'function') {
      var componentName = getComponentName(workInProgress) || 'Unknown';

      if (!didWarnAboutBadClass[componentName]) {
        warning(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', componentName, componentName);
        didWarnAboutBadClass[componentName] = true;
      }
    }

    if (workInProgress.mode & StrictMode) {
      ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, null);
    }

    ReactCurrentOwner.current = workInProgress;
    value = fn(props, context);
  }
  // React DevTools reads this flag.
  workInProgress.effectTag |= PerformedWork;

  if (typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
    var Component = workInProgress.type;

    // Proceed under the assumption that this is a class instance
    workInProgress.tag = ClassComponent;

    workInProgress.memoizedState = value.state !== null && value.state !== undefined ? value.state : null;

    var getDerivedStateFromProps = Component.getDerivedStateFromProps;
    if (typeof getDerivedStateFromProps === 'function') {
      applyDerivedStateFromProps(workInProgress, getDerivedStateFromProps, props);
    }

    // Push context providers early to prevent context stack mismatches.
    // During mounting we don't know the child context yet as the instance doesn't exist.
    // We will invalidate the child context in finishClassComponent() right after rendering.
    var hasContext = pushContextProvider(workInProgress);
    adoptClassInstance(workInProgress, value);
    mountClassInstance(workInProgress, renderExpirationTime);
    return finishClassComponent(current, workInProgress, true, hasContext, renderExpirationTime);
  } else {
    // Proceed under the assumption that this is a functional component
    workInProgress.tag = FunctionalComponent;
    {
      var _Component = workInProgress.type;

      if (_Component) {
        !!_Component.childContextTypes ? warning(false, '%s(...): childContextTypes cannot be defined on a functional component.', _Component.displayName || _Component.name || 'Component') : void 0;
      }
      if (workInProgress.ref !== null) {
        var info = '';
        var ownerName = ReactDebugCurrentFiber.getCurrentFiberOwnerName();
        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }

        var warningKey = ownerName || workInProgress._debugID || '';
        var debugSource = workInProgress._debugSource;
        if (debugSource) {
          warningKey = debugSource.fileName + ':' + debugSource.lineNumber;
        }
        if (!didWarnAboutStatelessRefs[warningKey]) {
          didWarnAboutStatelessRefs[warningKey] = true;
          warning(false, 'Stateless function components cannot be given refs. ' + 'Attempts to access this ref will fail.%s%s', info, ReactDebugCurrentFiber.getCurrentFiberStackAddendum());
        }
      }

      if (typeof fn.getDerivedStateFromProps === 'function') {
        var _componentName = getComponentName(workInProgress) || 'Unknown';

        if (!didWarnAboutGetDerivedStateOnFunctionalComponent[_componentName]) {
          warning(false, '%s: Stateless functional components do not support getDerivedStateFromProps.', _componentName);
          didWarnAboutGetDerivedStateOnFunctionalComponent[_componentName] = true;
        }
      }
    }
    reconcileChildren(current, workInProgress, value);
    memoizeProps(workInProgress, props);
    return workInProgress.child;
  }
}

function updateTimeoutComponent(current, workInProgress, renderExpirationTime) {
  if (enableSuspense) {
    var nextProps = workInProgress.pendingProps;
    var prevProps = workInProgress.memoizedProps;

    var prevDidTimeout = workInProgress.memoizedState;

    // Check if we already attempted to render the normal state. If we did,
    // and we timed out, render the placeholder state.
    var alreadyCaptured = (workInProgress.effectTag & DidCapture) === NoEffect;
    var nextDidTimeout = !alreadyCaptured;

    if (hasContextChanged()) {
      // Normally we can bail out on props equality but if context has changed
      // we don't do the bailout and we have to reuse existing props instead.
    } else if (nextProps === prevProps && nextDidTimeout === prevDidTimeout) {
      return bailoutOnAlreadyFinishedWork(current, workInProgress);
    }

    var render = nextProps.children;
    var nextChildren = render(nextDidTimeout);
    workInProgress.memoizedProps = nextProps;
    workInProgress.memoizedState = nextDidTimeout;
    reconcileChildren(current, workInProgress, nextChildren);
    return workInProgress.child;
  } else {
    return null;
  }
}

function updatePortalComponent(current, workInProgress, renderExpirationTime) {
  pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
  var nextChildren = workInProgress.pendingProps;
  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (workInProgress.memoizedProps === nextChildren) {
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }

  if (current === null) {
    // Portals are special because we don't append the children during mount
    // but at commit. Therefore we need to track insertions which the normal
    // flow doesn't do during mount. This doesn't happen at the root because
    // the root always starts with a "current" with a null child.
    // TODO: Consider unifying this with how the root works.
    workInProgress.child = reconcileChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
    memoizeProps(workInProgress, nextChildren);
  } else {
    reconcileChildren(current, workInProgress, nextChildren);
    memoizeProps(workInProgress, nextChildren);
  }
  return workInProgress.child;
}

function propagateContextChange(workInProgress, context, changedBits, renderExpirationTime) {
  var fiber = workInProgress.child;
  if (fiber !== null) {
    // Set the return pointer of the child to the work-in-progress fiber.
    fiber.return = workInProgress;
  }
  while (fiber !== null) {
    var nextFiber = void 0;
    // Visit this fiber.
    switch (fiber.tag) {
      case ContextConsumer:
        // Check if the context matches.
        var observedBits = fiber.stateNode | 0;
        if (fiber.type === context && (observedBits & changedBits) !== 0) {
          // Update the expiration time of all the ancestors, including
          // the alternates.
          var node = fiber;
          while (node !== null) {
            var alternate = node.alternate;
            if (node.expirationTime === NoWork || node.expirationTime > renderExpirationTime) {
              node.expirationTime = renderExpirationTime;
              if (alternate !== null && (alternate.expirationTime === NoWork || alternate.expirationTime > renderExpirationTime)) {
                alternate.expirationTime = renderExpirationTime;
              }
            } else if (alternate !== null && (alternate.expirationTime === NoWork || alternate.expirationTime > renderExpirationTime)) {
              alternate.expirationTime = renderExpirationTime;
            } else {
              // Neither alternate was updated, which means the rest of the
              // ancestor path already has sufficient priority.
              break;
            }
            node = node.return;
          }
          // Don't scan deeper than a matching consumer. When we render the
          // consumer, we'll continue scanning from that point. This way the
          // scanning work is time-sliced.
          nextFiber = null;
        } else {
          // Traverse down.
          nextFiber = fiber.child;
        }
        break;
      case ContextProvider:
        // Don't scan deeper if this is a matching provider
        nextFiber = fiber.type === workInProgress.type ? null : fiber.child;
        break;
      default:
        // Traverse down.
        nextFiber = fiber.child;
        break;
    }
    if (nextFiber !== null) {
      // Set the return pointer of the child to the work-in-progress fiber.
      nextFiber.return = fiber;
    } else {
      // No child. Traverse to next sibling.
      nextFiber = fiber;
      while (nextFiber !== null) {
        if (nextFiber === workInProgress) {
          // We're back to the root of this subtree. Exit.
          nextFiber = null;
          break;
        }
        var sibling = nextFiber.sibling;
        if (sibling !== null) {
          // Set the return pointer of the sibling to the work-in-progress fiber.
          sibling.return = nextFiber.return;
          nextFiber = sibling;
          break;
        }
        // No more siblings. Traverse up.
        nextFiber = nextFiber.return;
      }
    }
    fiber = nextFiber;
  }
}

function updateContextProvider(current, workInProgress, renderExpirationTime) {
  var providerType = workInProgress.type;
  var context = providerType._context;

  var newProps = workInProgress.pendingProps;
  var oldProps = workInProgress.memoizedProps;
  var canBailOnProps = true;

  if (hasContextChanged()) {
    canBailOnProps = false;
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (oldProps === newProps) {
    workInProgress.stateNode = 0;
    pushProvider(workInProgress);
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }

  var newValue = newProps.value;
  workInProgress.memoizedProps = newProps;

  {
    var providerPropTypes = workInProgress.type.propTypes;

    if (providerPropTypes) {
      checkPropTypes(providerPropTypes, newProps, 'prop', 'Context.Provider', getCurrentFiberStackAddendum$6);
    }
  }

  var changedBits = void 0;
  if (oldProps === null) {
    // Initial render
    changedBits = MAX_SIGNED_31_BIT_INT;
  } else {
    if (oldProps.value === newProps.value) {
      // No change. Bailout early if children are the same.
      if (oldProps.children === newProps.children && canBailOnProps) {
        workInProgress.stateNode = 0;
        pushProvider(workInProgress);
        return bailoutOnAlreadyFinishedWork(current, workInProgress);
      }
      changedBits = 0;
    } else {
      var oldValue = oldProps.value;
      // Use Object.is to compare the new context value to the old value.
      // Inlined Object.is polyfill.
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
      if (oldValue === newValue && (oldValue !== 0 || 1 / oldValue === 1 / newValue) || oldValue !== oldValue && newValue !== newValue // eslint-disable-line no-self-compare
      ) {
          // No change. Bailout early if children are the same.
          if (oldProps.children === newProps.children && canBailOnProps) {
            workInProgress.stateNode = 0;
            pushProvider(workInProgress);
            return bailoutOnAlreadyFinishedWork(current, workInProgress);
          }
          changedBits = 0;
        } else {
        changedBits = typeof context._calculateChangedBits === 'function' ? context._calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
        {
          !((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits) ? warning(false, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits) : void 0;
        }
        changedBits |= 0;

        if (changedBits === 0) {
          // No change. Bailout early if children are the same.
          if (oldProps.children === newProps.children && canBailOnProps) {
            workInProgress.stateNode = 0;
            pushProvider(workInProgress);
            return bailoutOnAlreadyFinishedWork(current, workInProgress);
          }
        } else {
          propagateContextChange(workInProgress, context, changedBits, renderExpirationTime);
        }
      }
    }
  }

  workInProgress.stateNode = changedBits;
  pushProvider(workInProgress);

  var newChildren = newProps.children;
  reconcileChildren(current, workInProgress, newChildren);
  return workInProgress.child;
}

function updateContextConsumer(current, workInProgress, renderExpirationTime) {
  var context = workInProgress.type;
  var newProps = workInProgress.pendingProps;
  var oldProps = workInProgress.memoizedProps;

  var newValue = getContextCurrentValue(context);
  var changedBits = getContextChangedBits(context);

  if (hasContextChanged()) {
    // Normally we can bail out on props equality but if context has changed
    // we don't do the bailout and we have to reuse existing props instead.
  } else if (changedBits === 0 && oldProps === newProps) {
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }
  workInProgress.memoizedProps = newProps;

  var observedBits = newProps.unstable_observedBits;
  if (observedBits === undefined || observedBits === null) {
    // Subscribe to all changes by default
    observedBits = MAX_SIGNED_31_BIT_INT;
  }
  // Store the observedBits on the fiber's stateNode for quick access.
  workInProgress.stateNode = observedBits;

  if ((changedBits & observedBits) !== 0) {
    // Context change propagation stops at matching consumers, for time-
    // slicing. Continue the propagation here.
    propagateContextChange(workInProgress, context, changedBits, renderExpirationTime);
  } else if (oldProps === newProps) {
    // Skip over a memoized parent with a bitmask bailout even
    // if we began working on it because of a deeper matching child.
    return bailoutOnAlreadyFinishedWork(current, workInProgress);
  }
  // There is no bailout on `children` equality because we expect people
  // to often pass a bound method as a child, but it may reference
  // `this.state` or `this.props` (and thus needs to re-render on `setState`).

  var render = newProps.children;

  {
    !(typeof render === 'function') ? warning(false, 'A context consumer was rendered with multiple children, or a child ' + "that isn't a function. A context consumer expects a single child " + 'that is a function. If you did pass a function, make sure there ' + 'is no trailing or leading whitespace around it.') : void 0;
  }

  var newChildren = void 0;
  {
    ReactCurrentOwner.current = workInProgress;
    ReactDebugCurrentFiber.setCurrentPhase('render');
    newChildren = render(newValue);
    ReactDebugCurrentFiber.setCurrentPhase(null);
  }

  // React DevTools reads this flag.
  workInProgress.effectTag |= PerformedWork;
  reconcileChildren(current, workInProgress, newChildren);
  return workInProgress.child;
}

/*
  function reuseChildrenEffects(returnFiber : Fiber, firstChild : Fiber) {
    let child = firstChild;
    do {
      // Ensure that the first and last effect of the parent corresponds
      // to the children's first and last effect.
      if (!returnFiber.firstEffect) {
        returnFiber.firstEffect = child.firstEffect;
      }
      if (child.lastEffect) {
        if (returnFiber.lastEffect) {
          returnFiber.lastEffect.nextEffect = child.firstEffect;
        }
        returnFiber.lastEffect = child.lastEffect;
      }
    } while (child = child.sibling);
  }
  */

function bailoutOnAlreadyFinishedWork(current, workInProgress) {
  cancelWorkTimer(workInProgress);

  if (enableProfilerTimer) {
    // Don't update "base" render times for bailouts.
    stopBaseRenderTimerIfRunning();
  }

  // TODO: We should ideally be able to bail out early if the children have no
  // more work to do. However, since we don't have a separation of this
  // Fiber's priority and its children yet - we don't know without doing lots
  // of the same work we do anyway. Once we have that separation we can just
  // bail out here if the children has no more work at this priority level.
  // if (workInProgress.priorityOfChildren <= priorityLevel) {
  //   // If there are side-effects in these children that have not yet been
  //   // committed we need to ensure that they get properly transferred up.
  //   if (current && current.child !== workInProgress.child) {
  //     reuseChildrenEffects(workInProgress, child);
  //   }
  //   return null;
  // }

  cloneChildFibers(current, workInProgress);
  return workInProgress.child;
}

function bailoutOnLowPriority(current, workInProgress) {
  cancelWorkTimer(workInProgress);

  if (enableProfilerTimer) {
    // Don't update "base" render times for bailouts.
    stopBaseRenderTimerIfRunning();
  }

  // TODO: Handle HostComponent tags here as well and call pushHostContext()?
  // See PR 8590 discussion for context
  switch (workInProgress.tag) {
    case HostRoot:
      pushHostRootContext(workInProgress);
      break;
    case ClassComponent:
      pushContextProvider(workInProgress);
      break;
    case HostPortal:
      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
      break;
    case ContextProvider:
      pushProvider(workInProgress);
      break;
  }
  // TODO: What if this is currently in progress?
  // How can that happen? How is this not being cloned?
  return null;
}

// TODO: Delete memoizeProps/State and move to reconcile/bailout instead
function memoizeProps(workInProgress, nextProps) {
  workInProgress.memoizedProps = nextProps;
}

function memoizeState(workInProgress, nextState) {
  workInProgress.memoizedState = nextState;
  // Don't reset the updateQueue, in case there are pending updates. Resetting
  // is handled by processUpdateQueue.
}

function beginWork(current, workInProgress, renderExpirationTime) {
  if (enableProfilerTimer) {
    if (workInProgress.mode & ProfileMode) {
      markActualRenderTimeStarted(workInProgress);
    }
  }

  if (workInProgress.expirationTime === NoWork || workInProgress.expirationTime > renderExpirationTime) {
    return bailoutOnLowPriority(current, workInProgress);
  }

  switch (workInProgress.tag) {
    case IndeterminateComponent:
      return mountIndeterminateComponent(current, workInProgress, renderExpirationTime);
    case FunctionalComponent:
      return updateFunctionalComponent(current, workInProgress);
    case ClassComponent:
      return updateClassComponent(current, workInProgress, renderExpirationTime);
    case HostRoot:
      return updateHostRoot(current, workInProgress, renderExpirationTime);
    case HostComponent:
      return updateHostComponent(current, workInProgress, renderExpirationTime);
    case HostText:
      return updateHostText(current, workInProgress);
    case TimeoutComponent:
      return updateTimeoutComponent(current, workInProgress, renderExpirationTime);
    case HostPortal:
      return updatePortalComponent(current, workInProgress, renderExpirationTime);
    case ForwardRef:
      return updateForwardRef(current, workInProgress);
    case Fragment:
      return updateFragment(current, workInProgress);
    case Mode:
      return updateMode(current, workInProgress);
    case Profiler:
      return updateProfiler(current, workInProgress);
    case ContextProvider:
      return updateContextProvider(current, workInProgress, renderExpirationTime);
    case ContextConsumer:
      return updateContextConsumer(current, workInProgress, renderExpirationTime);
    default:
      invariant(false, 'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');
  }
}

function markUpdate(workInProgress) {
  // Tag the fiber with an update effect. This turns a Placement into
  // a PlacementAndUpdate.
  workInProgress.effectTag |= Update;
}

function markRef$1(workInProgress) {
  workInProgress.effectTag |= Ref;
}

function appendAllChildren(parent, workInProgress) {
  // We only have the top Fiber that was created but we need recurse down its
  // children to find all the terminal nodes.
  var node = workInProgress.child;
  while (node !== null) {
    if (node.tag === HostComponent || node.tag === HostText) {
      appendInitialChild(parent, node.stateNode);
    } else if (node.tag === HostPortal) {
      // If we have a portal child, then we don't want to traverse
      // down its children. Instead, we'll get insertions from each child in
      // the portal directly.
    } else if (node.child !== null) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === workInProgress) {
      return;
    }
    while (node.sibling === null) {
      if (node.return === null || node.return === workInProgress) {
        return;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
}

var updateHostContainer = void 0;
var updateHostComponent$1 = void 0;
var updateHostText$1 = void 0;
if (supportsMutation) {
  // Mutation mode

  updateHostContainer = function (workInProgress) {
    // Noop
  };
  updateHostComponent$1 = function (current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance, currentHostContext) {
    // TODO: Type this specific to this type of component.
    workInProgress.updateQueue = updatePayload;
    // If the update payload indicates that there is a change or if there
    // is a new ref we mark this as an update. All the work is done in commitWork.
    if (updatePayload) {
      markUpdate(workInProgress);
    }
  };
  updateHostText$1 = function (current, workInProgress, oldText, newText) {
    // If the text differs, mark it as an update. All the work in done in commitWork.
    if (oldText !== newText) {
      markUpdate(workInProgress);
    }
  };
} else if (supportsPersistence) {
  // Persistent host tree mode

  // An unfortunate fork of appendAllChildren because we have two different parent types.
  var appendAllChildrenToContainer = function (containerChildSet, workInProgress) {
    // We only have the top Fiber that was created but we need recurse down its
    // children to find all the terminal nodes.
    var node = workInProgress.child;
    while (node !== null) {
      if (node.tag === HostComponent || node.tag === HostText) {
        appendChildToContainerChildSet(containerChildSet, node.stateNode);
      } else if (node.tag === HostPortal) {
        // If we have a portal child, then we don't want to traverse
        // down its children. Instead, we'll get insertions from each child in
        // the portal directly.
      } else if (node.child !== null) {
        node.child.return = node;
        node = node.child;
        continue;
      }
      if (node === workInProgress) {
        return;
      }
      while (node.sibling === null) {
        if (node.return === null || node.return === workInProgress) {
          return;
        }
        node = node.return;
      }
      node.sibling.return = node.return;
      node = node.sibling;
    }
  };
  updateHostContainer = function (workInProgress) {
    var portalOrRoot = workInProgress.stateNode;
    var childrenUnchanged = workInProgress.firstEffect === null;
    if (childrenUnchanged) {
      // No changes, just reuse the existing instance.
    } else {
      var container = portalOrRoot.containerInfo;
      var newChildSet = createContainerChildSet(container);
      // If children might have changed, we have to add them all to the set.
      appendAllChildrenToContainer(newChildSet, workInProgress);
      portalOrRoot.pendingChildren = newChildSet;
      // Schedule an update on the container to swap out the container.
      markUpdate(workInProgress);
      finalizeContainerChildren(container, newChildSet);
    }
  };
  updateHostComponent$1 = function (current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance, currentHostContext) {
    // If there are no effects associated with this node, then none of our children had any updates.
    // This guarantees that we can reuse all of them.
    var childrenUnchanged = workInProgress.firstEffect === null;
    var currentInstance = current.stateNode;
    if (childrenUnchanged && updatePayload === null) {
      // No changes, just reuse the existing instance.
      // Note that this might release a previous clone.
      workInProgress.stateNode = currentInstance;
    } else {
      var recyclableInstance = workInProgress.stateNode;
      var newInstance = cloneInstance(currentInstance, updatePayload, type, oldProps, newProps, workInProgress, childrenUnchanged, recyclableInstance);
      if (finalizeInitialChildren(newInstance, type, newProps, rootContainerInstance, currentHostContext)) {
        markUpdate(workInProgress);
      }
      workInProgress.stateNode = newInstance;
      if (childrenUnchanged) {
        // If there are no other effects in this tree, we need to flag this node as having one.
        // Even though we're not going to use it for anything.
        // Otherwise parents won't know that there are new children to propagate upwards.
        markUpdate(workInProgress);
      } else {
        // If children might have changed, we have to add them all to the set.
        appendAllChildren(newInstance, workInProgress);
      }
    }
  };
  updateHostText$1 = function (current, workInProgress, oldText, newText) {
    if (oldText !== newText) {
      // If the text content differs, we'll create a new text instance for it.
      var rootContainerInstance = getRootHostContainer();
      var currentHostContext = getHostContext();
      workInProgress.stateNode = createTextInstance(newText, rootContainerInstance, currentHostContext, workInProgress);
      // We'll have to mark it as having an effect, even though we won't use the effect for anything.
      // This lets the parents know that at least one of their children has changed.
      markUpdate(workInProgress);
    }
  };
} else {
  // No host operations
  updateHostContainer = function (workInProgress) {
    // Noop
  };
  updateHostComponent$1 = function (current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance, currentHostContext) {
    // Noop
  };
  updateHostText$1 = function (current, workInProgress, oldText, newText) {
    // Noop
  };
}

function completeWork(current, workInProgress, renderExpirationTime) {
  var newProps = workInProgress.pendingProps;

  if (enableProfilerTimer) {
    if (workInProgress.mode & ProfileMode) {
      recordElapsedActualRenderTime(workInProgress);
    }
  }

  switch (workInProgress.tag) {
    case FunctionalComponent:
      return null;
    case ClassComponent:
      {
        // We are leaving this subtree, so pop context if any.
        popContextProvider(workInProgress);
        return null;
      }
    case HostRoot:
      {
        popHostContainer(workInProgress);
        popTopLevelContextObject(workInProgress);
        var fiberRoot = workInProgress.stateNode;
        if (fiberRoot.pendingContext) {
          fiberRoot.context = fiberRoot.pendingContext;
          fiberRoot.pendingContext = null;
        }
        if (current === null || current.child === null) {
          // If we hydrated, pop so that we can delete any remaining children
          // that weren't hydrated.
          popHydrationState(workInProgress);
          // This resets the hacky state to fix isMounted before committing.
          // TODO: Delete this when we delete isMounted and findDOMNode.
          workInProgress.effectTag &= ~Placement;
        }
        updateHostContainer(workInProgress);
        return null;
      }
    case HostComponent:
      {
        popHostContext(workInProgress);
        var rootContainerInstance = getRootHostContainer();
        var type = workInProgress.type;
        if (current !== null && workInProgress.stateNode != null) {
          // If we have an alternate, that means this is an update and we need to
          // schedule a side-effect to do the updates.
          var oldProps = current.memoizedProps;
          // If we get updated because one of our children updated, we don't
          // have newProps so we'll have to reuse them.
          // TODO: Split the update API as separate for the props vs. children.
          // Even better would be if children weren't special cased at all tho.
          var instance = workInProgress.stateNode;
          var currentHostContext = getHostContext();
          // TODO: Experiencing an error where oldProps is null. Suggests a host
          // component is hitting the resume path. Figure out why. Possibly
          // related to `hidden`.
          var updatePayload = prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext);

          updateHostComponent$1(current, workInProgress, updatePayload, type, oldProps, newProps, rootContainerInstance, currentHostContext);

          if (current.ref !== workInProgress.ref) {
            markRef$1(workInProgress);
          }
        } else {
          if (!newProps) {
            !(workInProgress.stateNode !== null) ? invariant(false, 'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.') : void 0;
            // This can happen when we abort work.
            return null;
          }

          var _currentHostContext = getHostContext();
          // TODO: Move createInstance to beginWork and keep it on a context
          // "stack" as the parent. Then append children as we go in beginWork
          // or completeWork depending on we want to add then top->down or
          // bottom->up. Top->down is faster in IE11.
          var wasHydrated = popHydrationState(workInProgress);
          if (wasHydrated) {
            // TODO: Move this and createInstance step into the beginPhase
            // to consolidate.
            if (prepareToHydrateHostInstance(workInProgress, rootContainerInstance, _currentHostContext)) {
              // If changes to the hydrated node needs to be applied at the
              // commit-phase we mark this as such.
              markUpdate(workInProgress);
            }
          } else {
            var _instance = createInstance(type, newProps, rootContainerInstance, _currentHostContext, workInProgress);

            appendAllChildren(_instance, workInProgress);

            // Certain renderers require commit-time effects for initial mount.
            // (eg DOM renderer supports auto-focus for certain elements).
            // Make sure such renderers get scheduled for later work.
            if (finalizeInitialChildren(_instance, type, newProps, rootContainerInstance, _currentHostContext)) {
              markUpdate(workInProgress);
            }
            workInProgress.stateNode = _instance;
          }

          if (workInProgress.ref !== null) {
            // If there is a ref on a host node we need to schedule a callback
            markRef$1(workInProgress);
          }
        }
        return null;
      }
    case HostText:
      {
        var newText = newProps;
        if (current && workInProgress.stateNode != null) {
          var oldText = current.memoizedProps;
          // If we have an alternate, that means this is an update and we need
          // to schedule a side-effect to do the updates.
          updateHostText$1(current, workInProgress, oldText, newText);
        } else {
          if (typeof newText !== 'string') {
            !(workInProgress.stateNode !== null) ? invariant(false, 'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.') : void 0;
            // This can happen when we abort work.
            return null;
          }
          var _rootContainerInstance = getRootHostContainer();
          var _currentHostContext2 = getHostContext();
          var _wasHydrated = popHydrationState(workInProgress);
          if (_wasHydrated) {
            if (prepareToHydrateHostTextInstance(workInProgress)) {
              markUpdate(workInProgress);
            }
          } else {
            workInProgress.stateNode = createTextInstance(newText, _rootContainerInstance, _currentHostContext2, workInProgress);
          }
        }
        return null;
      }
    case ForwardRef:
      return null;
    case TimeoutComponent:
      return null;
    case Fragment:
      return null;
    case Mode:
      return null;
    case Profiler:
      return null;
    case HostPortal:
      popHostContainer(workInProgress);
      updateHostContainer(workInProgress);
      return null;
    case ContextProvider:
      // Pop provider fiber
      popProvider(workInProgress);
      return null;
    case ContextConsumer:
      return null;
    // Error cases
    case IndeterminateComponent:
      invariant(false, 'An indeterminate component should have become determinate before completing. This error is likely caused by a bug in React. Please file an issue.');
    // eslint-disable-next-line no-fallthrough
    default:
      invariant(false, 'Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.');
  }
}

// This module is forked in different environments.
// By default, return `true` to log errors to the console.
// Forks can return `false` if this isn't desirable.
function showErrorDialog(capturedError) {
  return true;
}

function logCapturedError(capturedError) {
  var logError = showErrorDialog(capturedError);

  // Allow injected showErrorDialog() to prevent default console.error logging.
  // This enables renderers like ReactNative to better manage redbox behavior.
  if (logError === false) {
    return;
  }

  var error = capturedError.error;
  var suppressLogging = error && error.suppressReactErrorLogging;
  if (suppressLogging) {
    return;
  }

  {
    var componentName = capturedError.componentName,
        componentStack = capturedError.componentStack,
        errorBoundaryName = capturedError.errorBoundaryName,
        errorBoundaryFound = capturedError.errorBoundaryFound,
        willRetry = capturedError.willRetry;


    var componentNameMessage = componentName ? 'The above error occurred in the <' + componentName + '> component:' : 'The above error occurred in one of your React components:';

    var errorBoundaryMessage = void 0;
    // errorBoundaryFound check is sufficient; errorBoundaryName check is to satisfy Flow.
    if (errorBoundaryFound && errorBoundaryName) {
      if (willRetry) {
        errorBoundaryMessage = 'React will try to recreate this component tree from scratch ' + ('using the error boundary you provided, ' + errorBoundaryName + '.');
      } else {
        errorBoundaryMessage = 'This error was initially handled by the error boundary ' + errorBoundaryName + '.\n' + 'Recreating the tree from scratch failed so React will unmount the tree.';
      }
    } else {
      errorBoundaryMessage = 'Consider adding an error boundary to your tree to customize error handling behavior.\n' + 'Visit https://fb.me/react-error-boundaries to learn more about error boundaries.';
    }
    var combinedMessage = '' + componentNameMessage + componentStack + '\n\n' + ('' + errorBoundaryMessage);

    // In development, we provide our own message with just the component stack.
    // We don't include the original error message and JS stack because the browser
    // has already printed it. Even if the application swallows the error, it is still
    // displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.
    console.error(combinedMessage);
  }
}

var invokeGuardedCallback$3 = ReactErrorUtils.invokeGuardedCallback;
var hasCaughtError$1 = ReactErrorUtils.hasCaughtError;
var clearCaughtError$1 = ReactErrorUtils.clearCaughtError;


var didWarnAboutUndefinedSnapshotBeforeUpdate = null;
{
  didWarnAboutUndefinedSnapshotBeforeUpdate = new Set();
}

function logError(boundary, errorInfo) {
  var source = errorInfo.source;
  var stack = errorInfo.stack;
  if (stack === null && source !== null) {
    stack = getStackAddendumByWorkInProgressFiber(source);
  }

  var capturedError = {
    componentName: source !== null ? getComponentName(source) : null,
    componentStack: stack !== null ? stack : '',
    error: errorInfo.value,
    errorBoundary: null,
    errorBoundaryName: null,
    errorBoundaryFound: false,
    willRetry: false
  };

  if (boundary !== null && boundary.tag === ClassComponent) {
    capturedError.errorBoundary = boundary.stateNode;
    capturedError.errorBoundaryName = getComponentName(boundary);
    capturedError.errorBoundaryFound = true;
    capturedError.willRetry = true;
  }

  try {
    logCapturedError(capturedError);
  } catch (e) {
    // Prevent cycle if logCapturedError() throws.
    // A cycle may still occur if logCapturedError renders a component that throws.
    var suppressLogging = e && e.suppressReactErrorLogging;
    if (!suppressLogging) {
      console.error(e);
    }
  }
}

var callComponentWillUnmountWithTimer = function (current, instance) {
  startPhaseTimer(current, 'componentWillUnmount');
  instance.props = current.memoizedProps;
  instance.state = current.memoizedState;
  instance.componentWillUnmount();
  stopPhaseTimer();
};

// Capture errors so they don't interrupt unmounting.
function safelyCallComponentWillUnmount(current, instance) {
  {
    invokeGuardedCallback$3(null, callComponentWillUnmountWithTimer, null, current, instance);
    if (hasCaughtError$1()) {
      var unmountError = clearCaughtError$1();
      captureCommitPhaseError(current, unmountError);
    }
  }
}

function safelyDetachRef(current) {
  var ref = current.ref;
  if (ref !== null) {
    if (typeof ref === 'function') {
      {
        invokeGuardedCallback$3(null, ref, null, null);
        if (hasCaughtError$1()) {
          var refError = clearCaughtError$1();
          captureCommitPhaseError(current, refError);
        }
      }
    } else {
      ref.current = null;
    }
  }
}

function commitBeforeMutationLifeCycles(current, finishedWork) {
  switch (finishedWork.tag) {
    case ClassComponent:
      {
        if (finishedWork.effectTag & Snapshot) {
          if (current !== null) {
            var prevProps = current.memoizedProps;
            var prevState = current.memoizedState;
            startPhaseTimer(finishedWork, 'getSnapshotBeforeUpdate');
            var instance = finishedWork.stateNode;
            instance.props = finishedWork.memoizedProps;
            instance.state = finishedWork.memoizedState;
            var snapshot = instance.getSnapshotBeforeUpdate(prevProps, prevState);
            {
              var didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;
              if (snapshot === undefined && !didWarnSet.has(finishedWork.type)) {
                didWarnSet.add(finishedWork.type);
                warning(false, '%s.getSnapshotBeforeUpdate(): A snapshot value (or null) ' + 'must be returned. You have returned undefined.', getComponentName(finishedWork));
              }
            }
            instance.__reactInternalSnapshotBeforeUpdate = snapshot;
            stopPhaseTimer();
          }
        }
        return;
      }
    case HostRoot:
    case HostComponent:
    case HostText:
    case HostPortal:
      // Nothing to do for these component types
      return;
    default:
      {
        invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
      }
  }
}

function commitLifeCycles(finishedRoot, current, finishedWork, currentTime, committedExpirationTime) {
  switch (finishedWork.tag) {
    case ClassComponent:
      {
        var instance = finishedWork.stateNode;
        if (finishedWork.effectTag & Update) {
          if (current === null) {
            startPhaseTimer(finishedWork, 'componentDidMount');
            instance.props = finishedWork.memoizedProps;
            instance.state = finishedWork.memoizedState;
            instance.componentDidMount();
            stopPhaseTimer();
          } else {
            var prevProps = current.memoizedProps;
            var prevState = current.memoizedState;
            startPhaseTimer(finishedWork, 'componentDidUpdate');
            instance.props = finishedWork.memoizedProps;
            instance.state = finishedWork.memoizedState;
            instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
            stopPhaseTimer();
          }
        }
        var updateQueue = finishedWork.updateQueue;
        if (updateQueue !== null) {
          instance.props = finishedWork.memoizedProps;
          instance.state = finishedWork.memoizedState;
          commitUpdateQueue(finishedWork, updateQueue, instance, committedExpirationTime);
        }
        return;
      }
    case HostRoot:
      {
        var _updateQueue = finishedWork.updateQueue;
        if (_updateQueue !== null) {
          var _instance = null;
          if (finishedWork.child !== null) {
            switch (finishedWork.child.tag) {
              case HostComponent:
                _instance = getPublicInstance(finishedWork.child.stateNode);
                break;
              case ClassComponent:
                _instance = finishedWork.child.stateNode;
                break;
            }
          }
          commitUpdateQueue(finishedWork, _updateQueue, _instance, committedExpirationTime);
        }
        return;
      }
    case HostComponent:
      {
        var _instance2 = finishedWork.stateNode;

        // Renderers may schedule work to be done after host components are mounted
        // (eg DOM renderer may schedule auto-focus for inputs and form controls).
        // These effects should only be committed when components are first mounted,
        // aka when there is no current/alternate.
        if (current === null && finishedWork.effectTag & Update) {
          var type = finishedWork.type;
          var props = finishedWork.memoizedProps;
          commitMount(_instance2, type, props, finishedWork);
        }

        return;
      }
    case HostText:
      {
        // We have no life-cycles associated with text.
        return;
      }
    case HostPortal:
      {
        // We have no life-cycles associated with portals.
        return;
      }
    case Profiler:
      {
        // We have no life-cycles associated with Profiler.
        return;
      }
    case TimeoutComponent:
      {
        // We have no life-cycles associated with Timeouts.
        return;
      }
    default:
      {
        invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
      }
  }
}

function commitAttachRef(finishedWork) {
  var ref = finishedWork.ref;
  if (ref !== null) {
    var instance = finishedWork.stateNode;
    var instanceToUse = void 0;
    switch (finishedWork.tag) {
      case HostComponent:
        instanceToUse = getPublicInstance(instance);
        break;
      default:
        instanceToUse = instance;
    }
    if (typeof ref === 'function') {
      ref(instanceToUse);
    } else {
      {
        if (!ref.hasOwnProperty('current')) {
          warning(false, 'Unexpected ref object provided for %s. ' + 'Use either a ref-setter function or React.createRef().%s', getComponentName(finishedWork), getStackAddendumByWorkInProgressFiber(finishedWork));
        }
      }

      ref.current = instanceToUse;
    }
  }
}

function commitDetachRef(current) {
  var currentRef = current.ref;
  if (currentRef !== null) {
    if (typeof currentRef === 'function') {
      currentRef(null);
    } else {
      currentRef.current = null;
    }
  }
}

// User-originating errors (lifecycles and refs) should not interrupt
// deletion, so don't let them throw. Host-originating errors should
// interrupt deletion, so it's okay
function commitUnmount(current) {
  if (typeof onCommitUnmount === 'function') {
    onCommitUnmount(current);
  }

  switch (current.tag) {
    case ClassComponent:
      {
        safelyDetachRef(current);
        var instance = current.stateNode;
        if (typeof instance.componentWillUnmount === 'function') {
          safelyCallComponentWillUnmount(current, instance);
        }
        return;
      }
    case HostComponent:
      {
        safelyDetachRef(current);
        return;
      }
    case HostPortal:
      {
        // TODO: this is recursive.
        // We are also not using this parent because
        // the portal will get pushed immediately.
        if (supportsMutation) {
          unmountHostComponents(current);
        } else if (supportsPersistence) {
          emptyPortalContainer(current);
        }
        return;
      }
  }
}

function commitNestedUnmounts(root) {
  // While we're inside a removed host node we don't want to call
  // removeChild on the inner nodes because they're removed by the top
  // call anyway. We also want to call componentWillUnmount on all
  // composites before this host node is removed from the tree. Therefore
  var node = root;
  while (true) {
    commitUnmount(node);
    // Visit children because they may contain more composite or host nodes.
    // Skip portals because commitUnmount() currently visits them recursively.
    if (node.child !== null && (
    // If we use mutation we drill down into portals using commitUnmount above.
    // If we don't use mutation we drill down into portals here instead.
    !supportsMutation || node.tag !== HostPortal)) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === root) {
      return;
    }
    while (node.sibling === null) {
      if (node.return === null || node.return === root) {
        return;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
}

function detachFiber(current) {
  // Cut off the return pointers to disconnect it from the tree. Ideally, we
  // should clear the child pointer of the parent alternate to let this
  // get GC:ed but we don't know which for sure which parent is the current
  // one so we'll settle for GC:ing the subtree of this child. This child
  // itself will be GC:ed when the parent updates the next time.
  current.return = null;
  current.child = null;
  if (current.alternate) {
    current.alternate.child = null;
    current.alternate.return = null;
  }
}

function emptyPortalContainer(current) {
  if (!supportsPersistence) {
    return;
  }

  var portal = current.stateNode;
  var containerInfo = portal.containerInfo;

  var emptyChildSet = createContainerChildSet(containerInfo);
  replaceContainerChildren(containerInfo, emptyChildSet);
}

function commitContainer(finishedWork) {
  if (!supportsPersistence) {
    return;
  }

  switch (finishedWork.tag) {
    case ClassComponent:
      {
        return;
      }
    case HostComponent:
      {
        return;
      }
    case HostText:
      {
        return;
      }
    case HostRoot:
    case HostPortal:
      {
        var portalOrRoot = finishedWork.stateNode;
        var containerInfo = portalOrRoot.containerInfo,
            _pendingChildren = portalOrRoot.pendingChildren;

        replaceContainerChildren(containerInfo, _pendingChildren);
        return;
      }
    default:
      {
        invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
      }
  }
}

function getHostParentFiber(fiber) {
  var parent = fiber.return;
  while (parent !== null) {
    if (isHostParent(parent)) {
      return parent;
    }
    parent = parent.return;
  }
  invariant(false, 'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.');
}

function isHostParent(fiber) {
  return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
}

function getHostSibling(fiber) {
  // We're going to search forward into the tree until we find a sibling host
  // node. Unfortunately, if multiple insertions are done in a row we have to
  // search past them. This leads to exponential search for the next sibling.
  var node = fiber;
  siblings: while (true) {
    // If we didn't find anything, let's try the next sibling.
    while (node.sibling === null) {
      if (node.return === null || isHostParent(node.return)) {
        // If we pop out of the root or hit the parent the fiber we are the
        // last sibling.
        return null;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
    while (node.tag !== HostComponent && node.tag !== HostText) {
      // If it is not host node and, we might have a host node inside it.
      // Try to search down until we find one.
      if (node.effectTag & Placement) {
        // If we don't have a child, try the siblings instead.
        continue siblings;
      }
      // If we don't have a child, try the siblings instead.
      // We also skip portals because they are not part of this host tree.
      if (node.child === null || node.tag === HostPortal) {
        continue siblings;
      } else {
        node.child.return = node;
        node = node.child;
      }
    }
    // Check if this host node is stable or about to be placed.
    if (!(node.effectTag & Placement)) {
      // Found it!
      return node.stateNode;
    }
  }
}

function commitPlacement(finishedWork) {
  if (!supportsMutation) {
    return;
  }

  // Recursively insert all host nodes into the parent.
  var parentFiber = getHostParentFiber(finishedWork);
  var parent = void 0;
  var isContainer = void 0;
  switch (parentFiber.tag) {
    case HostComponent:
      parent = parentFiber.stateNode;
      isContainer = false;
      break;
    case HostRoot:
      parent = parentFiber.stateNode.containerInfo;
      isContainer = true;
      break;
    case HostPortal:
      parent = parentFiber.stateNode.containerInfo;
      isContainer = true;
      break;
    default:
      invariant(false, 'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.');
  }
  if (parentFiber.effectTag & ContentReset) {
    // Reset the text content of the parent before doing any insertions
    resetTextContent(parent);
    // Clear ContentReset from the effect tag
    parentFiber.effectTag &= ~ContentReset;
  }

  var before = getHostSibling(finishedWork);
  // We only have the top Fiber that was inserted but we need recurse down its
  // children to find all the terminal nodes.
  var node = finishedWork;
  while (true) {
    if (node.tag === HostComponent || node.tag === HostText) {
      if (before) {
        if (isContainer) {
          insertInContainerBefore(parent, node.stateNode, before);
        } else {
          insertBefore(parent, node.stateNode, before);
        }
      } else {
        if (isContainer) {
          appendChildToContainer(parent, node.stateNode);
        } else {
          appendChild(parent, node.stateNode);
        }
      }
    } else if (node.tag === HostPortal) {
      // If the insertion itself is a portal, then we don't want to traverse
      // down its children. Instead, we'll get insertions from each child in
      // the portal directly.
    } else if (node.child !== null) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === finishedWork) {
      return;
    }
    while (node.sibling === null) {
      if (node.return === null || node.return === finishedWork) {
        return;
      }
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
}

function unmountHostComponents(current) {
  // We only have the top Fiber that was inserted but we need recurse down its
  var node = current;

  // Each iteration, currentParent is populated with node's host parent if not
  // currentParentIsValid.
  var currentParentIsValid = false;
  var currentParent = void 0;
  var currentParentIsContainer = void 0;

  while (true) {
    if (!currentParentIsValid) {
      var parent = node.return;
      findParent: while (true) {
        !(parent !== null) ? invariant(false, 'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.') : void 0;
        switch (parent.tag) {
          case HostComponent:
            currentParent = parent.stateNode;
            currentParentIsContainer = false;
            break findParent;
          case HostRoot:
            currentParent = parent.stateNode.containerInfo;
            currentParentIsContainer = true;
            break findParent;
          case HostPortal:
            currentParent = parent.stateNode.containerInfo;
            currentParentIsContainer = true;
            break findParent;
        }
        parent = parent.return;
      }
      currentParentIsValid = true;
    }

    if (node.tag === HostComponent || node.tag === HostText) {
      commitNestedUnmounts(node);
      // After all the children have unmounted, it is now safe to remove the
      // node from the tree.
      if (currentParentIsContainer) {
        removeChildFromContainer(currentParent, node.stateNode);
      } else {
        removeChild(currentParent, node.stateNode);
      }
      // Don't visit children because we already visited them.
    } else if (node.tag === HostPortal) {
      // When we go into a portal, it becomes the parent to remove from.
      // We will reassign it back when we pop the portal on the way up.
      currentParent = node.stateNode.containerInfo;
      // Visit children because portals might contain host components.
      if (node.child !== null) {
        node.child.return = node;
        node = node.child;
        continue;
      }
    } else {
      commitUnmount(node);
      // Visit children because we may find more host components below.
      if (node.child !== null) {
        node.child.return = node;
        node = node.child;
        continue;
      }
    }
    if (node === current) {
      return;
    }
    while (node.sibling === null) {
      if (node.return === null || node.return === current) {
        return;
      }
      node = node.return;
      if (node.tag === HostPortal) {
        // When we go out of the portal, we need to restore the parent.
        // Since we don't keep a stack of them, we will search for it.
        currentParentIsValid = false;
      }
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
}

function commitDeletion(current) {
  if (supportsMutation) {
    // Recursively delete all host nodes from the parent.
    // Detach refs and call componentWillUnmount() on the whole subtree.
    unmountHostComponents(current);
  } else {
    // Detach refs and call componentWillUnmount() on the whole subtree.
    commitNestedUnmounts(current);
  }
  detachFiber(current);
}

function commitWork(current, finishedWork) {
  if (!supportsMutation) {
    commitContainer(finishedWork);
    return;
  }

  switch (finishedWork.tag) {
    case ClassComponent:
      {
        return;
      }
    case HostComponent:
      {
        var instance = finishedWork.stateNode;
        if (instance != null) {
          // Commit the work prepared earlier.
          var newProps = finishedWork.memoizedProps;
          // For hydration we reuse the update path but we treat the oldProps
          // as the newProps. The updatePayload will contain the real change in
          // this case.
          var oldProps = current !== null ? current.memoizedProps : newProps;
          var type = finishedWork.type;
          // TODO: Type the updateQueue to be specific to host components.
          var updatePayload = finishedWork.updateQueue;
          finishedWork.updateQueue = null;
          if (updatePayload !== null) {
            commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork);
          }
        }
        return;
      }
    case HostText:
      {
        !(finishedWork.stateNode !== null) ? invariant(false, 'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.') : void 0;
        var textInstance = finishedWork.stateNode;
        var newText = finishedWork.memoizedProps;
        // For hydration we reuse the update path but we treat the oldProps
        // as the newProps. The updatePayload will contain the real change in
        // this case.
        var oldText = current !== null ? current.memoizedProps : newText;
        commitTextUpdate(textInstance, oldText, newText);
        return;
      }
    case HostRoot:
      {
        return;
      }
    case Profiler:
      {
        if (enableProfilerTimer) {
          var onRender = finishedWork.memoizedProps.onRender;
          onRender(finishedWork.memoizedProps.id, current === null ? 'mount' : 'update', finishedWork.actualDuration, finishedWork.treeBaseTime, finishedWork.actualStartTime, getCommitTime());
        }
        return;
      }
    case TimeoutComponent:
      {
        return;
      }
    default:
      {
        invariant(false, 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.');
      }
  }
}

function commitResetTextContent(current) {
  if (!supportsMutation) {
    return;
  }
  resetTextContent(current.stateNode);
}

function createRootErrorUpdate(fiber, errorInfo, expirationTime) {
  var update = createUpdate(expirationTime);
  // Unmount the root by rendering null.
  update.tag = CaptureUpdate;
  // Caution: React DevTools currently depends on this property
  // being called "element".
  update.payload = { element: null };
  var error = errorInfo.value;
  update.callback = function () {
    onUncaughtError(error);
    logError(fiber, errorInfo);
  };
  return update;
}

function createClassErrorUpdate(fiber, errorInfo, expirationTime) {
  var update = createUpdate(expirationTime);
  update.tag = CaptureUpdate;
  var getDerivedStateFromCatch = fiber.type.getDerivedStateFromCatch;
  if (enableGetDerivedStateFromCatch && typeof getDerivedStateFromCatch === 'function') {
    var error = errorInfo.value;
    update.payload = function () {
      return getDerivedStateFromCatch(error);
    };
  }

  var inst = fiber.stateNode;
  if (inst !== null && typeof inst.componentDidCatch === 'function') {
    update.callback = function callback() {
      if (!enableGetDerivedStateFromCatch || getDerivedStateFromCatch !== 'function') {
        // To preserve the preexisting retry behavior of error boundaries,
        // we keep track of which ones already failed during this batch.
        // This gets reset before we yield back to the browser.
        // TODO: Warn in strict mode if getDerivedStateFromCatch is
        // not defined.
        markLegacyErrorBoundaryAsFailed(this);
      }
      var error = errorInfo.value;
      var stack = errorInfo.stack;
      logError(fiber, errorInfo);
      this.componentDidCatch(error, {
        componentStack: stack !== null ? stack : ''
      });
    };
  }
  return update;
}

function schedulePing(finishedWork) {
  // Once the promise resolves, we should try rendering the non-
  // placeholder state again.
  var currentTime = recalculateCurrentTime();
  var expirationTime = computeExpirationForFiber(currentTime, finishedWork);
  var recoveryUpdate = createUpdate(expirationTime);
  enqueueUpdate(finishedWork, recoveryUpdate, expirationTime);
  scheduleWork$1(finishedWork, expirationTime);
}

function throwException(root, returnFiber, sourceFiber, value, renderIsExpired, renderExpirationTime, currentTimeMs) {
  // The source fiber did not complete.
  sourceFiber.effectTag |= Incomplete;
  // Its effect list is no longer valid.
  sourceFiber.firstEffect = sourceFiber.lastEffect = null;

  if (enableSuspense && value !== null && typeof value === 'object' && typeof value.then === 'function') {
    // This is a thenable.
    var thenable = value;

    var expirationTimeMs = expirationTimeToMs(renderExpirationTime);
    var startTimeMs = expirationTimeMs - 5000;
    var elapsedMs = currentTimeMs - startTimeMs;
    if (elapsedMs < 0) {
      elapsedMs = 0;
    }
    var remainingTimeMs = expirationTimeMs - currentTimeMs;

    // Find the earliest timeout of all the timeouts in the ancestor path.
    // TODO: Alternatively, we could store the earliest timeout on the context
    // stack, rather than searching on every suspend.
    var _workInProgress = returnFiber;
    var earliestTimeoutMs = -1;
    searchForEarliestTimeout: do {
      if (_workInProgress.tag === TimeoutComponent) {
        var current = _workInProgress.alternate;
        if (current !== null && current.memoizedState === true) {
          // A parent Timeout already committed in a placeholder state. We
          // need to handle this promise immediately. In other words, we
          // should never suspend inside a tree that already expired.
          earliestTimeoutMs = 0;
          break searchForEarliestTimeout;
        }
        var timeoutPropMs = _workInProgress.pendingProps.ms;
        if (typeof timeoutPropMs === 'number') {
          if (timeoutPropMs <= 0) {
            earliestTimeoutMs = 0;
            break searchForEarliestTimeout;
          } else if (earliestTimeoutMs === -1 || timeoutPropMs < earliestTimeoutMs) {
            earliestTimeoutMs = timeoutPropMs;
          }
        } else if (earliestTimeoutMs === -1) {
          earliestTimeoutMs = remainingTimeMs;
        }
      }
      _workInProgress = _workInProgress.return;
    } while (_workInProgress !== null);

    // Compute the remaining time until the timeout.
    var msUntilTimeout = earliestTimeoutMs - elapsedMs;

    if (renderExpirationTime === Never || msUntilTimeout > 0) {
      // There's still time remaining.
      suspendRoot(root, thenable, msUntilTimeout, renderExpirationTime);
      var onResolveOrReject = function () {
        retrySuspendedRoot(root, renderExpirationTime);
      };
      thenable.then(onResolveOrReject, onResolveOrReject);
      return;
    } else {
      // No time remaining. Need to fallback to placeholder.
      // Find the nearest timeout that can be retried.
      _workInProgress = returnFiber;
      do {
        switch (_workInProgress.tag) {
          case HostRoot:
            {
              // The root expired, but no fallback was provided. Throw a
              // helpful error.
              var message = renderExpirationTime === Sync ? 'A synchronous update was suspended, but no fallback UI ' + 'was provided.' : 'An update was suspended for longer than the timeout, ' + 'but no fallback UI was provided.';
              value = new Error(message);
              break;
            }
          case TimeoutComponent:
            {
              if ((_workInProgress.effectTag & DidCapture) === NoEffect) {
                _workInProgress.effectTag |= ShouldCapture;
                var _onResolveOrReject = schedulePing.bind(null, _workInProgress);
                thenable.then(_onResolveOrReject, _onResolveOrReject);
                return;
              }
              // Already captured during this render. Continue to the next
              // Timeout ancestor.
              break;
            }
        }
        _workInProgress = _workInProgress.return;
      } while (_workInProgress !== null);
    }
  }

  // We didn't find a boundary that could handle this type of exception. Start
  // over and traverse parent path again, this time treating the exception
  // as an error.
  value = createCapturedValue(value, sourceFiber);
  var workInProgress = returnFiber;
  do {
    switch (workInProgress.tag) {
      case HostRoot:
        {
          var _errorInfo = value;
          workInProgress.effectTag |= ShouldCapture;
          var update = createRootErrorUpdate(workInProgress, _errorInfo, renderExpirationTime);
          enqueueCapturedUpdate(workInProgress, update, renderExpirationTime);
          return;
        }
      case ClassComponent:
        // Capture and retry
        var errorInfo = value;
        var ctor = workInProgress.type;
        var instance = workInProgress.stateNode;
        if ((workInProgress.effectTag & DidCapture) === NoEffect && (typeof ctor.getDerivedStateFromCatch === 'function' && enableGetDerivedStateFromCatch || instance !== null && typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance))) {
          workInProgress.effectTag |= ShouldCapture;
          // Schedule the error boundary to re-render using updated state
          var _update = createClassErrorUpdate(workInProgress, errorInfo, renderExpirationTime);
          enqueueCapturedUpdate(workInProgress, _update, renderExpirationTime);
          return;
        }
        break;
      default:
        break;
    }
    workInProgress = workInProgress.return;
  } while (workInProgress !== null);
}

function unwindWork(workInProgress, renderIsExpired, renderExpirationTime) {
  if (enableProfilerTimer) {
    if (workInProgress.mode & ProfileMode) {
      recordElapsedActualRenderTime(workInProgress);
    }
  }

  switch (workInProgress.tag) {
    case ClassComponent:
      {
        popContextProvider(workInProgress);
        var effectTag = workInProgress.effectTag;
        if (effectTag & ShouldCapture) {
          workInProgress.effectTag = effectTag & ~ShouldCapture | DidCapture;
          return workInProgress;
        }
        return null;
      }
    case HostRoot:
      {
        popHostContainer(workInProgress);
        popTopLevelContextObject(workInProgress);
        var _effectTag = workInProgress.effectTag;
        if (_effectTag & ShouldCapture) {
          workInProgress.effectTag = _effectTag & ~ShouldCapture | DidCapture;
          return workInProgress;
        }
        return null;
      }
    case HostComponent:
      {
        popHostContext(workInProgress);
        return null;
      }
    case TimeoutComponent:
      {
        var _effectTag2 = workInProgress.effectTag;
        if (_effectTag2 & ShouldCapture) {
          workInProgress.effectTag = _effectTag2 & ~ShouldCapture | DidCapture;
          return workInProgress;
        }
        return null;
      }
    case HostPortal:
      popHostContainer(workInProgress);
      return null;
    case ContextProvider:
      popProvider(workInProgress);
      return null;
    default:
      return null;
  }
}

function unwindInterruptedWork(interruptedWork) {
  if (enableProfilerTimer) {
    if (interruptedWork.mode & ProfileMode) {
      // Resume in case we're picking up on work that was paused.
      resumeActualRenderTimerIfPaused();
      recordElapsedActualRenderTime(interruptedWork);
    }
  }

  switch (interruptedWork.tag) {
    case ClassComponent:
      {
        popContextProvider(interruptedWork);
        break;
      }
    case HostRoot:
      {
        popHostContainer(interruptedWork);
        popTopLevelContextObject(interruptedWork);
        break;
      }
    case HostComponent:
      {
        popHostContext(interruptedWork);
        break;
      }
    case HostPortal:
      popHostContainer(interruptedWork);
      break;
    case ContextProvider:
      popProvider(interruptedWork);
      break;
    default:
      break;
  }
}

var invokeGuardedCallback$2 = ReactErrorUtils.invokeGuardedCallback;
var hasCaughtError = ReactErrorUtils.hasCaughtError;
var clearCaughtError = ReactErrorUtils.clearCaughtError;


var didWarnAboutStateTransition = void 0;
var didWarnSetStateChildContext = void 0;
var warnAboutUpdateOnUnmounted = void 0;
var warnAboutInvalidUpdates = void 0;

{
  didWarnAboutStateTransition = false;
  didWarnSetStateChildContext = false;
  var didWarnStateUpdateForUnmountedComponent = {};

  warnAboutUpdateOnUnmounted = function (fiber) {
    // We show the whole stack but dedupe on the top component's name because
    // the problematic code almost always lies inside that component.
    var componentName = getComponentName(fiber) || 'ReactClass';
    if (didWarnStateUpdateForUnmountedComponent[componentName]) {
      return;
    }
    warning(false, "Can't call setState (or forceUpdate) on an unmounted component. This " + 'is a no-op, but it indicates a memory leak in your application. To ' + 'fix, cancel all subscriptions and asynchronous tasks in the ' + 'componentWillUnmount method.%s', getStackAddendumByWorkInProgressFiber(fiber));
    didWarnStateUpdateForUnmountedComponent[componentName] = true;
  };

  warnAboutInvalidUpdates = function (instance) {
    switch (ReactDebugCurrentFiber.phase) {
      case 'getChildContext':
        if (didWarnSetStateChildContext) {
          return;
        }
        warning(false, 'setState(...): Cannot call setState() inside getChildContext()');
        didWarnSetStateChildContext = true;
        break;
      case 'render':
        if (didWarnAboutStateTransition) {
          return;
        }
        warning(false, 'Cannot update during an existing state transition (such as within ' + "`render` or another component's constructor). Render methods should " + 'be a pure function of props and state; constructor side-effects are ' + 'an anti-pattern, but can be moved to `componentWillMount`.');
        didWarnAboutStateTransition = true;
        break;
    }
  };
}

// Represents the current time in ms.
var originalStartTimeMs = now();
var mostRecentCurrentTime = msToExpirationTime(0);
var mostRecentCurrentTimeMs = originalStartTimeMs;

// Used to ensure computeUniqueAsyncExpiration is monotonically increases.
var lastUniqueAsyncExpiration = 0;

// Represents the expiration time that incoming updates should use. (If this
// is NoWork, use the default strategy: async updates in async mode, sync
// updates in sync mode.)
var expirationContext = NoWork;

var isWorking = false;

// The next work in progress fiber that we're currently working on.
var nextUnitOfWork = null;
var nextRoot = null;
// The time at which we're currently rendering work.
var nextRenderExpirationTime = NoWork;
var nextLatestTimeoutMs = -1;
var nextRenderIsExpired = false;

// The next fiber with an effect that we're currently committing.
var nextEffect = null;

var isCommitting$1 = false;

var isRootReadyForCommit = false;

var legacyErrorBoundariesThatAlreadyFailed = null;

// Used for performance tracking.
var interruptedBy = null;

var stashedWorkInProgressProperties = void 0;
var replayUnitOfWork = void 0;
var isReplayingFailedUnitOfWork = void 0;
var originalReplayError = void 0;
var rethrowOriginalError = void 0;
if (true && replayFailedUnitOfWorkWithInvokeGuardedCallback) {
  stashedWorkInProgressProperties = null;
  isReplayingFailedUnitOfWork = false;
  originalReplayError = null;
  replayUnitOfWork = function (failedUnitOfWork, thrownValue, isAsync) {
    if (thrownValue !== null && typeof thrownValue === 'object' && typeof thrownValue.then === 'function') {
      // Don't replay promises. Treat everything else like an error.
      // TODO: Need to figure out a different strategy if/when we add
      // support for catching other types.
      return;
    }

    // Restore the original state of the work-in-progress
    if (stashedWorkInProgressProperties === null) {
      // This should never happen. Don't throw because this code is DEV-only.
      warning(false, 'Could not replay rendering after an error. This is likely a bug in React. ' + 'Please file an issue.');
      return;
    }
    assignFiberPropertiesInDEV(failedUnitOfWork, stashedWorkInProgressProperties);

    switch (failedUnitOfWork.tag) {
      case HostRoot:
        popHostContainer(failedUnitOfWork);
        popTopLevelContextObject(failedUnitOfWork);
        break;
      case HostComponent:
        popHostContext(failedUnitOfWork);
        break;
      case ClassComponent:
        popContextProvider(failedUnitOfWork);
        break;
      case HostPortal:
        popHostContainer(failedUnitOfWork);
        break;
      case ContextProvider:
        popProvider(failedUnitOfWork);
        break;
    }
    // Replay the begin phase.
    isReplayingFailedUnitOfWork = true;
    originalReplayError = thrownValue;
    invokeGuardedCallback$2(null, workLoop, null, isAsync);
    isReplayingFailedUnitOfWork = false;
    originalReplayError = null;
    if (hasCaughtError()) {
      clearCaughtError();

      if (enableProfilerTimer) {
        if (failedUnitOfWork.mode & ProfileMode) {
          recordElapsedActualRenderTime(failedUnitOfWork);
        }

        // Stop "base" render timer again (after the re-thrown error).
        stopBaseRenderTimerIfRunning();
      }
    } else {
      // If the begin phase did not fail the second time, set this pointer
      // back to the original value.
      nextUnitOfWork = failedUnitOfWork;
    }
  };
  rethrowOriginalError = function () {
    throw originalReplayError;
  };
}

function resetStack() {
  if (nextUnitOfWork !== null) {
    var interruptedWork = nextUnitOfWork.return;
    while (interruptedWork !== null) {
      unwindInterruptedWork(interruptedWork);
      interruptedWork = interruptedWork.return;
    }
  }

  {
    ReactStrictModeWarnings.discardPendingWarnings();
    checkThatStackIsEmpty();
  }

  nextRoot = null;
  nextRenderExpirationTime = NoWork;
  nextLatestTimeoutMs = -1;
  nextRenderIsExpired = false;
  nextUnitOfWork = null;

  isRootReadyForCommit = false;
}

function commitAllHostEffects() {
  while (nextEffect !== null) {
    {
      ReactDebugCurrentFiber.setCurrentFiber(nextEffect);
    }
    recordEffect();

    var effectTag = nextEffect.effectTag;

    if (effectTag & ContentReset) {
      commitResetTextContent(nextEffect);
    }

    if (effectTag & Ref) {
      var current = nextEffect.alternate;
      if (current !== null) {
        commitDetachRef(current);
      }
    }

    // The following switch statement is only concerned about placement,
    // updates, and deletions. To avoid needing to add a case for every
    // possible bitmap value, we remove the secondary effects from the
    // effect tag and switch on that value.
    var primaryEffectTag = effectTag & (Placement | Update | Deletion);
    switch (primaryEffectTag) {
      case Placement:
        {
          commitPlacement(nextEffect);
          // Clear the "placement" from effect tag so that we know that this is inserted, before
          // any life-cycles like componentDidMount gets called.
          // TODO: findDOMNode doesn't rely on this any more but isMounted
          // does and isMounted is deprecated anyway so we should be able
          // to kill this.
          nextEffect.effectTag &= ~Placement;
          break;
        }
      case PlacementAndUpdate:
        {
          // Placement
          commitPlacement(nextEffect);
          // Clear the "placement" from effect tag so that we know that this is inserted, before
          // any life-cycles like componentDidMount gets called.
          nextEffect.effectTag &= ~Placement;

          // Update
          var _current = nextEffect.alternate;
          commitWork(_current, nextEffect);
          break;
        }
      case Update:
        {
          var _current2 = nextEffect.alternate;
          commitWork(_current2, nextEffect);
          break;
        }
      case Deletion:
        {
          commitDeletion(nextEffect);
          break;
        }
    }
    nextEffect = nextEffect.nextEffect;
  }

  {
    ReactDebugCurrentFiber.resetCurrentFiber();
  }
}

function commitBeforeMutationLifecycles() {
  while (nextEffect !== null) {
    var effectTag = nextEffect.effectTag;

    if (effectTag & Snapshot) {
      recordEffect();
      var current = nextEffect.alternate;
      commitBeforeMutationLifeCycles(current, nextEffect);
    }

    // Don't cleanup effects yet;
    // This will be done by commitAllLifeCycles()
    nextEffect = nextEffect.nextEffect;
  }
}

function commitAllLifeCycles(finishedRoot, currentTime, committedExpirationTime) {
  {
    ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();

    if (warnAboutDeprecatedLifecycles) {
      ReactStrictModeWarnings.flushPendingDeprecationWarnings();
    }

    if (warnAboutLegacyContextAPI) {
      ReactStrictModeWarnings.flushLegacyContextWarning();
    }
  }
  while (nextEffect !== null) {
    var effectTag = nextEffect.effectTag;

    if (effectTag & (Update | Callback)) {
      recordEffect();
      var current = nextEffect.alternate;
      commitLifeCycles(finishedRoot, current, nextEffect, currentTime, committedExpirationTime);
    }

    if (effectTag & Ref) {
      recordEffect();
      commitAttachRef(nextEffect);
    }

    var next = nextEffect.nextEffect;
    // Ensure that we clean these up so that we don't accidentally keep them.
    // I'm not actually sure this matters because we can't reset firstEffect
    // and lastEffect since they're on every node, not just the effectful
    // ones. So we have to clean everything as we reuse nodes anyway.
    nextEffect.nextEffect = null;
    // Ensure that we reset the effectTag here so that we can rely on effect
    // tags to reason about the current life-cycle.
    nextEffect = next;
  }
}

function isAlreadyFailedLegacyErrorBoundary(instance) {
  return legacyErrorBoundariesThatAlreadyFailed !== null && legacyErrorBoundariesThatAlreadyFailed.has(instance);
}

function markLegacyErrorBoundaryAsFailed(instance) {
  if (legacyErrorBoundariesThatAlreadyFailed === null) {
    legacyErrorBoundariesThatAlreadyFailed = new Set([instance]);
  } else {
    legacyErrorBoundariesThatAlreadyFailed.add(instance);
  }
}

function commitRoot(finishedWork) {
  isWorking = true;
  isCommitting$1 = true;
  startCommitTimer();

  var root = finishedWork.stateNode;
  !(root.current !== finishedWork) ? invariant(false, 'Cannot commit the same tree as before. This is probably a bug related to the return field. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  var committedExpirationTime = root.pendingCommitExpirationTime;
  !(committedExpirationTime !== NoWork) ? invariant(false, 'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  root.pendingCommitExpirationTime = NoWork;

  var currentTime = recalculateCurrentTime();

  // Reset this to null before calling lifecycles
  ReactCurrentOwner.current = null;

  var firstEffect = void 0;
  if (finishedWork.effectTag > PerformedWork) {
    // A fiber's effect list consists only of its children, not itself. So if
    // the root has an effect, we need to add it to the end of the list. The
    // resulting list is the set that would belong to the root's parent, if
    // it had one; that is, all the effects in the tree including the root.
    if (finishedWork.lastEffect !== null) {
      finishedWork.lastEffect.nextEffect = finishedWork;
      firstEffect = finishedWork.firstEffect;
    } else {
      firstEffect = finishedWork;
    }
  } else {
    // There is no effect on the root.
    firstEffect = finishedWork.firstEffect;
  }

  prepareForCommit(root.containerInfo);

  // Invoke instances of getSnapshotBeforeUpdate before mutation.
  nextEffect = firstEffect;
  startCommitSnapshotEffectsTimer();
  while (nextEffect !== null) {
    var didError = false;
    var error = void 0;
    {
      invokeGuardedCallback$2(null, commitBeforeMutationLifecycles, null);
      if (hasCaughtError()) {
        didError = true;
        error = clearCaughtError();
      }
    }
    if (didError) {
      !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
      captureCommitPhaseError(nextEffect, error);
      // Clean-up
      if (nextEffect !== null) {
        nextEffect = nextEffect.nextEffect;
      }
    }
  }
  stopCommitSnapshotEffectsTimer();

  if (enableProfilerTimer) {
    // Mark the current commit time to be shared by all Profilers in this batch.
    // This enables them to be grouped later.
    recordCommitTime();
  }

  // Commit all the side-effects within a tree. We'll do this in two passes.
  // The first pass performs all the host insertions, updates, deletions and
  // ref unmounts.
  nextEffect = firstEffect;
  startCommitHostEffectsTimer();
  while (nextEffect !== null) {
    var _didError = false;
    var _error = void 0;
    {
      invokeGuardedCallback$2(null, commitAllHostEffects, null);
      if (hasCaughtError()) {
        _didError = true;
        _error = clearCaughtError();
      }
    }
    if (_didError) {
      !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
      captureCommitPhaseError(nextEffect, _error);
      // Clean-up
      if (nextEffect !== null) {
        nextEffect = nextEffect.nextEffect;
      }
    }
  }
  stopCommitHostEffectsTimer();

  resetAfterCommit(root.containerInfo);

  // The work-in-progress tree is now the current tree. This must come after
  // the first pass of the commit phase, so that the previous tree is still
  // current during componentWillUnmount, but before the second pass, so that
  // the finished work is current during componentDidMount/Update.
  root.current = finishedWork;

  // In the second pass we'll perform all life-cycles and ref callbacks.
  // Life-cycles happen as a separate pass so that all placements, updates,
  // and deletions in the entire tree have already been invoked.
  // This pass also triggers any renderer-specific initial effects.
  nextEffect = firstEffect;
  startCommitLifeCyclesTimer();
  while (nextEffect !== null) {
    var _didError2 = false;
    var _error2 = void 0;
    {
      invokeGuardedCallback$2(null, commitAllLifeCycles, null, root, currentTime, committedExpirationTime);
      if (hasCaughtError()) {
        _didError2 = true;
        _error2 = clearCaughtError();
      }
    }
    if (_didError2) {
      !(nextEffect !== null) ? invariant(false, 'Should have next effect. This error is likely caused by a bug in React. Please file an issue.') : void 0;
      captureCommitPhaseError(nextEffect, _error2);
      if (nextEffect !== null) {
        nextEffect = nextEffect.nextEffect;
      }
    }
  }

  if (enableProfilerTimer) {
    {
      checkActualRenderTimeStackEmpty();
    }
    resetActualRenderTimer();
  }

  isCommitting$1 = false;
  isWorking = false;
  stopCommitLifeCyclesTimer();
  stopCommitTimer();
  if (typeof onCommitRoot === 'function') {
    onCommitRoot(finishedWork.stateNode);
  }
  if (true && ReactFiberInstrumentation_1.debugTool) {
    ReactFiberInstrumentation_1.debugTool.onCommitWork(finishedWork);
  }

  markCommittedPriorityLevels(root, currentTime, root.current.expirationTime);
  var remainingTime = findNextPendingPriorityLevel(root);
  if (remainingTime === NoWork) {
    // If there's no remaining work, we can clear the set of already failed
    // error boundaries.
    legacyErrorBoundariesThatAlreadyFailed = null;
  }
  return remainingTime;
}

function resetExpirationTime(workInProgress, renderTime) {
  if (renderTime !== Never && workInProgress.expirationTime === Never) {
    // The children of this component are hidden. Don't bubble their
    // expiration times.
    return;
  }

  // Check for pending updates.
  var newExpirationTime = NoWork;
  switch (workInProgress.tag) {
    case HostRoot:
    case ClassComponent:
      {
        var updateQueue = workInProgress.updateQueue;
        if (updateQueue !== null) {
          newExpirationTime = updateQueue.expirationTime;
        }
      }
  }

  // TODO: Calls need to visit stateNode

  // Bubble up the earliest expiration time.
  // (And "base" render timers if that feature flag is enabled)
  if (enableProfilerTimer && workInProgress.mode & ProfileMode) {
    var treeBaseTime = workInProgress.selfBaseTime;
    var child = workInProgress.child;
    while (child !== null) {
      treeBaseTime += child.treeBaseTime;
      if (child.expirationTime !== NoWork && (newExpirationTime === NoWork || newExpirationTime > child.expirationTime)) {
        newExpirationTime = child.expirationTime;
      }
      child = child.sibling;
    }
    workInProgress.treeBaseTime = treeBaseTime;
  } else {
    var _child = workInProgress.child;
    while (_child !== null) {
      if (_child.expirationTime !== NoWork && (newExpirationTime === NoWork || newExpirationTime > _child.expirationTime)) {
        newExpirationTime = _child.expirationTime;
      }
      _child = _child.sibling;
    }
  }

  workInProgress.expirationTime = newExpirationTime;
}

function completeUnitOfWork(workInProgress) {
  // Attempt to complete the current unit of work, then move to the
  // next sibling. If there are no more siblings, return to the
  // parent fiber.
  while (true) {
    // The current, flushed, state of this fiber is the alternate.
    // Ideally nothing should rely on this, but relying on it here
    // means that we don't need an additional field on the work in
    // progress.
    var current = workInProgress.alternate;
    {
      ReactDebugCurrentFiber.setCurrentFiber(workInProgress);
    }

    var returnFiber = workInProgress.return;
    var siblingFiber = workInProgress.sibling;

    if ((workInProgress.effectTag & Incomplete) === NoEffect) {
      // This fiber completed.
      var next = completeWork(current, workInProgress, nextRenderExpirationTime);
      stopWorkTimer(workInProgress);
      resetExpirationTime(workInProgress, nextRenderExpirationTime);
      {
        ReactDebugCurrentFiber.resetCurrentFiber();
      }

      if (next !== null) {
        stopWorkTimer(workInProgress);
        if (true && ReactFiberInstrumentation_1.debugTool) {
          ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
        }
        // If completing this work spawned new work, do that next. We'll come
        // back here again.
        return next;
      }

      if (returnFiber !== null &&
      // Do not append effects to parents if a sibling failed to complete
      (returnFiber.effectTag & Incomplete) === NoEffect) {
        // Append all the effects of the subtree and this fiber onto the effect
        // list of the parent. The completion order of the children affects the
        // side-effect order.
        if (returnFiber.firstEffect === null) {
          returnFiber.firstEffect = workInProgress.firstEffect;
        }
        if (workInProgress.lastEffect !== null) {
          if (returnFiber.lastEffect !== null) {
            returnFiber.lastEffect.nextEffect = workInProgress.firstEffect;
          }
          returnFiber.lastEffect = workInProgress.lastEffect;
        }

        // If this fiber had side-effects, we append it AFTER the children's
        // side-effects. We can perform certain side-effects earlier if
        // needed, by doing multiple passes over the effect list. We don't want
        // to schedule our own side-effect on our own list because if end up
        // reusing children we'll schedule this effect onto itself since we're
        // at the end.
        var effectTag = workInProgress.effectTag;
        // Skip both NoWork and PerformedWork tags when creating the effect list.
        // PerformedWork effect is read by React DevTools but shouldn't be committed.
        if (effectTag > PerformedWork) {
          if (returnFiber.lastEffect !== null) {
            returnFiber.lastEffect.nextEffect = workInProgress;
          } else {
            returnFiber.firstEffect = workInProgress;
          }
          returnFiber.lastEffect = workInProgress;
        }
      }

      if (true && ReactFiberInstrumentation_1.debugTool) {
        ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
      }

      if (siblingFiber !== null) {
        // If there is more work to do in this returnFiber, do that next.
        return siblingFiber;
      } else if (returnFiber !== null) {
        // If there's no more work in this returnFiber. Complete the returnFiber.
        workInProgress = returnFiber;
        continue;
      } else {
        // We've reached the root.
        isRootReadyForCommit = true;
        return null;
      }
    } else {
      // This fiber did not complete because something threw. Pop values off
      // the stack without entering the complete phase. If this is a boundary,
      // capture values if possible.
      var _next = unwindWork(workInProgress, nextRenderIsExpired, nextRenderExpirationTime);
      // Because this fiber did not complete, don't reset its expiration time.
      if (workInProgress.effectTag & DidCapture) {
        // Restarting an error boundary
        stopFailedWorkTimer(workInProgress);
      } else {
        stopWorkTimer(workInProgress);
      }

      {
        ReactDebugCurrentFiber.resetCurrentFiber();
      }

      if (_next !== null) {
        stopWorkTimer(workInProgress);
        if (true && ReactFiberInstrumentation_1.debugTool) {
          ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
        }
        // If completing this work spawned new work, do that next. We'll come
        // back here again.
        // Since we're restarting, remove anything that is not a host effect
        // from the effect tag.
        _next.effectTag &= HostEffectMask;
        return _next;
      }

      if (returnFiber !== null) {
        // Mark the parent fiber as incomplete and clear its effect list.
        returnFiber.firstEffect = returnFiber.lastEffect = null;
        returnFiber.effectTag |= Incomplete;
      }

      if (true && ReactFiberInstrumentation_1.debugTool) {
        ReactFiberInstrumentation_1.debugTool.onCompleteWork(workInProgress);
      }

      if (siblingFiber !== null) {
        // If there is more work to do in this returnFiber, do that next.
        return siblingFiber;
      } else if (returnFiber !== null) {
        // If there's no more work in this returnFiber. Complete the returnFiber.
        workInProgress = returnFiber;
        continue;
      } else {
        return null;
      }
    }
  }

  // Without this explicit null return Flow complains of invalid return type
  // TODO Remove the above while(true) loop
  // eslint-disable-next-line no-unreachable
  return null;
}

function performUnitOfWork(workInProgress) {
  // The current, flushed, state of this fiber is the alternate.
  // Ideally nothing should rely on this, but relying on it here
  // means that we don't need an additional field on the work in
  // progress.
  var current = workInProgress.alternate;

  // See if beginning this work spawns more work.
  startWorkTimer(workInProgress);
  {
    ReactDebugCurrentFiber.setCurrentFiber(workInProgress);
  }

  if (true && replayFailedUnitOfWorkWithInvokeGuardedCallback) {
    stashedWorkInProgressProperties = assignFiberPropertiesInDEV(stashedWorkInProgressProperties, workInProgress);
  }

  var next = void 0;
  if (enableProfilerTimer) {
    if (workInProgress.mode & ProfileMode) {
      startBaseRenderTimer();
    }

    next = beginWork(current, workInProgress, nextRenderExpirationTime);

    if (workInProgress.mode & ProfileMode) {
      // Update "base" time if the render wasn't bailed out on.
      recordElapsedBaseRenderTimeIfRunning(workInProgress);
      stopBaseRenderTimerIfRunning();
    }
  } else {
    next = beginWork(current, workInProgress, nextRenderExpirationTime);
  }

  {
    ReactDebugCurrentFiber.resetCurrentFiber();
    if (isReplayingFailedUnitOfWork) {
      // Currently replaying a failed unit of work. This should be unreachable,
      // because the render phase is meant to be idempotent, and it should
      // have thrown again. Since it didn't, rethrow the original error, so
      // React's internal stack is not misaligned.
      rethrowOriginalError();
    }
  }
  if (true && ReactFiberInstrumentation_1.debugTool) {
    ReactFiberInstrumentation_1.debugTool.onBeginWork(workInProgress);
  }

  if (next === null) {
    // If this doesn't spawn new work, complete the current work.
    next = completeUnitOfWork(workInProgress);
  }

  ReactCurrentOwner.current = null;

  return next;
}

function workLoop(isAsync) {
  if (!isAsync) {
    // Flush all expired work.
    while (nextUnitOfWork !== null) {
      nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }
  } else {
    // Flush asynchronous work until the deadline runs out of time.
    while (nextUnitOfWork !== null && !shouldYield()) {
      nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }

    if (enableProfilerTimer) {
      // If we didn't finish, pause the "actual" render timer.
      // We'll restart it when we resume work.
      pauseActualRenderTimerIfRunning();
    }
  }
}

function renderRoot(root, expirationTime, isAsync) {
  !!isWorking ? invariant(false, 'renderRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  isWorking = true;

  // Check if we're starting from a fresh stack, or if we're resuming from
  // previously yielded work.
  if (expirationTime !== nextRenderExpirationTime || root !== nextRoot || nextUnitOfWork === null) {
    // Reset the stack and start working from the root.
    resetStack();
    nextRoot = root;
    nextRenderExpirationTime = expirationTime;
    nextLatestTimeoutMs = -1;
    nextUnitOfWork = createWorkInProgress(nextRoot.current, null, nextRenderExpirationTime);
    root.pendingCommitExpirationTime = NoWork;
  }

  var didFatal = false;

  nextRenderIsExpired = !isAsync || nextRenderExpirationTime <= mostRecentCurrentTime;

  startWorkLoopTimer(nextUnitOfWork);

  do {
    try {
      workLoop(isAsync);
    } catch (thrownValue) {
      if (enableProfilerTimer) {
        // Stop "base" render timer in the event of an error.
        stopBaseRenderTimerIfRunning();
      }

      if (nextUnitOfWork === null) {
        // This is a fatal error.
        didFatal = true;
        onUncaughtError(thrownValue);
      } else {
        {
          // Reset global debug state
          // We assume this is defined in DEV
          resetCurrentlyProcessingQueue();
        }

        var failedUnitOfWork = nextUnitOfWork;
        if (true && replayFailedUnitOfWorkWithInvokeGuardedCallback) {
          replayUnitOfWork(failedUnitOfWork, thrownValue, isAsync);
        }

        // TODO: we already know this isn't true in some cases.
        // At least this shows a nicer error message until we figure out the cause.
        // https://github.com/facebook/react/issues/12449#issuecomment-386727431
        !(nextUnitOfWork !== null) ? invariant(false, 'Failed to replay rendering after an error. This is likely caused by a bug in React. Please file an issue with a reproducing case to help us find it.') : void 0;

        var sourceFiber = nextUnitOfWork;
        var returnFiber = sourceFiber.return;
        if (returnFiber === null) {
          // This is the root. The root could capture its own errors. However,
          // we don't know if it errors before or after we pushed the host
          // context. This information is needed to avoid a stack mismatch.
          // Because we're not sure, treat this as a fatal error. We could track
          // which phase it fails in, but doesn't seem worth it. At least
          // for now.
          didFatal = true;
          onUncaughtError(thrownValue);
          break;
        }
        throwException(root, returnFiber, sourceFiber, thrownValue, nextRenderIsExpired, nextRenderExpirationTime, mostRecentCurrentTimeMs);
        nextUnitOfWork = completeUnitOfWork(sourceFiber);
      }
    }
    break;
  } while (true);

  // We're done performing work. Time to clean up.
  var didCompleteRoot = false;
  isWorking = false;

  // Yield back to main thread.
  if (didFatal) {
    stopWorkLoopTimer(interruptedBy, didCompleteRoot);
    interruptedBy = null;
    // There was a fatal error.
    {
      resetStackAfterFatalErrorInDev();
    }
    return null;
  } else if (nextUnitOfWork === null) {
    // We reached the root.
    if (isRootReadyForCommit) {
      didCompleteRoot = true;
      stopWorkLoopTimer(interruptedBy, didCompleteRoot);
      interruptedBy = null;
      // The root successfully completed. It's ready for commit.
      root.pendingCommitExpirationTime = expirationTime;
      var finishedWork = root.current.alternate;
      return finishedWork;
    } else {
      // The root did not complete.
      stopWorkLoopTimer(interruptedBy, didCompleteRoot);
      interruptedBy = null;
      !!nextRenderIsExpired ? invariant(false, 'Expired work should have completed. This error is likely caused by a bug in React. Please file an issue.') : void 0;
      markSuspendedPriorityLevel(root, expirationTime);
      if (nextLatestTimeoutMs >= 0) {
        setTimeout(function () {
          retrySuspendedRoot(root, expirationTime);
        }, nextLatestTimeoutMs);
      }
      var firstUnblockedExpirationTime = findNextPendingPriorityLevel(root);
      onBlock(firstUnblockedExpirationTime);
      return null;
    }
  } else {
    stopWorkLoopTimer(interruptedBy, didCompleteRoot);
    interruptedBy = null;
    // There's more work to do, but we ran out of time. Yield back to
    // the renderer.
    return null;
  }
}

function dispatch(sourceFiber, value, expirationTime) {
  !(!isWorking || isCommitting$1) ? invariant(false, 'dispatch: Cannot dispatch during the render phase.') : void 0;

  var fiber = sourceFiber.return;
  while (fiber !== null) {
    switch (fiber.tag) {
      case ClassComponent:
        var ctor = fiber.type;
        var instance = fiber.stateNode;
        if (typeof ctor.getDerivedStateFromCatch === 'function' || typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance)) {
          var errorInfo = createCapturedValue(value, sourceFiber);
          var update = createClassErrorUpdate(fiber, errorInfo, expirationTime);
          enqueueUpdate(fiber, update, expirationTime);
          scheduleWork$1(fiber, expirationTime);
          return;
        }
        break;
      case HostRoot:
        {
          var _errorInfo = createCapturedValue(value, sourceFiber);
          var _update = createRootErrorUpdate(fiber, _errorInfo, expirationTime);
          enqueueUpdate(fiber, _update, expirationTime);
          scheduleWork$1(fiber, expirationTime);
          return;
        }
    }
    fiber = fiber.return;
  }

  if (sourceFiber.tag === HostRoot) {
    // Error was thrown at the root. There is no parent, so the root
    // itself should capture it.
    var rootFiber = sourceFiber;
    var _errorInfo2 = createCapturedValue(value, rootFiber);
    var _update2 = createRootErrorUpdate(rootFiber, _errorInfo2, expirationTime);
    enqueueUpdate(rootFiber, _update2, expirationTime);
    scheduleWork$1(rootFiber, expirationTime);
  }
}

function captureCommitPhaseError(fiber, error) {
  return dispatch(fiber, error, Sync);
}

function computeAsyncExpiration(currentTime) {
  // Given the current clock time, returns an expiration time. We use rounding
  // to batch like updates together.
  // Should complete within ~5000ms. 5250ms max.
  var expirationMs = 5000;
  var bucketSizeMs = 250;
  return computeExpirationBucket(currentTime, expirationMs, bucketSizeMs);
}

function computeInteractiveExpiration(currentTime) {
  var expirationMs = void 0;
  // We intentionally set a higher expiration time for interactive updates in
  // dev than in production.
  // If the main thread is being blocked so long that you hit the expiration,
  // it's a problem that could be solved with better scheduling.
  // People will be more likely to notice this and fix it with the long
  // expiration time in development.
  // In production we opt for better UX at the risk of masking scheduling
  // problems, by expiring fast.
  {
    // Should complete within ~500ms. 600ms max.
    expirationMs = 500;
  }
  var bucketSizeMs = 100;
  return computeExpirationBucket(currentTime, expirationMs, bucketSizeMs);
}

// Creates a unique async expiration time.
function computeUniqueAsyncExpiration() {
  var currentTime = recalculateCurrentTime();
  var result = computeAsyncExpiration(currentTime);
  if (result <= lastUniqueAsyncExpiration) {
    // Since we assume the current time monotonically increases, we only hit
    // this branch when computeUniqueAsyncExpiration is fired multiple times
    // within a 200ms window (or whatever the async bucket size is).
    result = lastUniqueAsyncExpiration + 1;
  }
  lastUniqueAsyncExpiration = result;
  return lastUniqueAsyncExpiration;
}

function computeExpirationForFiber(currentTime, fiber) {
  var expirationTime = void 0;
  if (expirationContext !== NoWork) {
    // An explicit expiration context was set;
    expirationTime = expirationContext;
  } else if (isWorking) {
    if (isCommitting$1) {
      // Updates that occur during the commit phase should have sync priority
      // by default.
      expirationTime = Sync;
    } else {
      // Updates during the render phase should expire at the same time as
      // the work that is being rendered.
      expirationTime = nextRenderExpirationTime;
    }
  } else {
    // No explicit expiration context was set, and we're not currently
    // performing work. Calculate a new expiration time.
    if (fiber.mode & AsyncMode) {
      if (isBatchingInteractiveUpdates) {
        // This is an interactive update
        expirationTime = computeInteractiveExpiration(currentTime);
      } else {
        // This is an async update
        expirationTime = computeAsyncExpiration(currentTime);
      }
    } else {
      // This is a sync update
      expirationTime = Sync;
    }
  }
  if (isBatchingInteractiveUpdates) {
    // This is an interactive update. Keep track of the lowest pending
    // interactive expiration time. This allows us to synchronously flush
    // all interactive updates when needed.
    if (lowestPendingInteractiveExpirationTime === NoWork || expirationTime > lowestPendingInteractiveExpirationTime) {
      lowestPendingInteractiveExpirationTime = expirationTime;
    }
  }
  return expirationTime;
}

// TODO: Rename this to scheduleTimeout or something
function suspendRoot(root, thenable, timeoutMs, suspendedTime) {
  // Schedule the timeout.
  if (timeoutMs >= 0 && nextLatestTimeoutMs < timeoutMs) {
    nextLatestTimeoutMs = timeoutMs;
  }
}

function retrySuspendedRoot(root, suspendedTime) {
  markPingedPriorityLevel(root, suspendedTime);
  var retryTime = findNextPendingPriorityLevel(root);
  if (retryTime !== NoWork) {
    requestRetry(root, retryTime);
  }
}

function scheduleWork$1(fiber, expirationTime) {
  recordScheduleUpdate();

  {
    if (fiber.tag === ClassComponent) {
      var instance = fiber.stateNode;
      warnAboutInvalidUpdates(instance);
    }
  }

  var node = fiber;
  while (node !== null) {
    // Walk the parent path to the root and update each node's
    // expiration time.
    if (node.expirationTime === NoWork || node.expirationTime > expirationTime) {
      node.expirationTime = expirationTime;
    }
    if (node.alternate !== null) {
      if (node.alternate.expirationTime === NoWork || node.alternate.expirationTime > expirationTime) {
        node.alternate.expirationTime = expirationTime;
      }
    }
    if (node.return === null) {
      if (node.tag === HostRoot) {
        var root = node.stateNode;
        if (!isWorking && nextRenderExpirationTime !== NoWork && expirationTime < nextRenderExpirationTime) {
          // This is an interruption. (Used for performance tracking.)
          interruptedBy = fiber;
          resetStack();
        }
        markPendingPriorityLevel(root, expirationTime);
        var nextExpirationTimeToWorkOn = findNextPendingPriorityLevel(root);
        if (
        // If we're in the render phase, we don't need to schedule this root
        // for an update, because we'll do it before we exit...
        !isWorking || isCommitting$1 ||
        // ...unless this is a different root than the one we're rendering.
        nextRoot !== root) {
          requestWork(root, nextExpirationTimeToWorkOn);
        }
        if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
          invariant(false, 'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.');
        }
      } else {
        {
          if (fiber.tag === ClassComponent) {
            warnAboutUpdateOnUnmounted(fiber);
          }
        }
        return;
      }
    }
    node = node.return;
  }
}

function recalculateCurrentTime() {
  // Subtract initial time so it fits inside 32bits
  mostRecentCurrentTimeMs = now() - originalStartTimeMs;
  mostRecentCurrentTime = msToExpirationTime(mostRecentCurrentTimeMs);
  return mostRecentCurrentTime;
}

function deferredUpdates(fn) {
  var previousExpirationContext = expirationContext;
  var currentTime = recalculateCurrentTime();
  expirationContext = computeAsyncExpiration(currentTime);
  try {
    return fn();
  } finally {
    expirationContext = previousExpirationContext;
  }
}
function syncUpdates(fn, a, b, c, d) {
  var previousExpirationContext = expirationContext;
  expirationContext = Sync;
  try {
    return fn(a, b, c, d);
  } finally {
    expirationContext = previousExpirationContext;
  }
}

// TODO: Everything below this is written as if it has been lifted to the
// renderers. I'll do this in a follow-up.

// Linked-list of roots
var firstScheduledRoot = null;
var lastScheduledRoot = null;

var callbackExpirationTime = NoWork;
var callbackID = void 0;
var isRendering = false;
var nextFlushedRoot = null;
var nextFlushedExpirationTime = NoWork;
var lowestPendingInteractiveExpirationTime = NoWork;
var deadlineDidExpire = false;
var hasUnhandledError = false;
var unhandledError = null;
var deadline = null;

var isBatchingUpdates = false;
var isUnbatchingUpdates = false;
var isBatchingInteractiveUpdates = false;

var completedBatches = null;

// Use these to prevent an infinite loop of nested updates
var NESTED_UPDATE_LIMIT = 1000;
var nestedUpdateCount = 0;

var timeHeuristicForUnitOfWork = 1;

function scheduleCallbackWithExpiration(expirationTime) {
  if (callbackExpirationTime !== NoWork) {
    // A callback is already scheduled. Check its expiration time (timeout).
    if (expirationTime > callbackExpirationTime) {
      // Existing callback has sufficient timeout. Exit.
      return;
    } else {
      if (callbackID !== null) {
        // Existing callback has insufficient timeout. Cancel and schedule a
        // new one.
        cancelDeferredCallback(callbackID);
      }
    }
    // The request callback timer is already running. Don't start a new one.
  } else {
    startRequestCallbackTimer();
  }

  // Compute a timeout for the given expiration time.
  var currentMs = now() - originalStartTimeMs;
  var expirationMs = expirationTimeToMs(expirationTime);
  var timeout = expirationMs - currentMs;

  callbackExpirationTime = expirationTime;
  callbackID = scheduleDeferredCallback(performAsyncWork, { timeout: timeout });
}

function requestRetry(root, expirationTime) {
  if (root.remainingExpirationTime === NoWork || root.remainingExpirationTime < expirationTime) {
    // For a retry, only update the remaining expiration time if it has a
    // *lower priority* than the existing value. This is because, on a retry,
    // we should attempt to coalesce as much as possible.
    requestWork(root, expirationTime);
  }
}

// requestWork is called by the scheduler whenever a root receives an update.
// It's up to the renderer to call renderRoot at some point in the future.
function requestWork(root, expirationTime) {
  addRootToSchedule(root, expirationTime);

  if (isRendering) {
    // Prevent reentrancy. Remaining work will be scheduled at the end of
    // the currently rendering batch.
    return;
  }

  if (isBatchingUpdates) {
    // Flush work at the end of the batch.
    if (isUnbatchingUpdates) {
      // ...unless we're inside unbatchedUpdates, in which case we should
      // flush it now.
      nextFlushedRoot = root;
      nextFlushedExpirationTime = Sync;
      performWorkOnRoot(root, Sync, false);
    }
    return;
  }

  // TODO: Get rid of Sync and use current time?
  if (expirationTime === Sync) {
    performSyncWork();
  } else {
    scheduleCallbackWithExpiration(expirationTime);
  }
}

function addRootToSchedule(root, expirationTime) {
  // Add the root to the schedule.
  // Check if this root is already part of the schedule.
  if (root.nextScheduledRoot === null) {
    // This root is not already scheduled. Add it.
    root.remainingExpirationTime = expirationTime;
    if (lastScheduledRoot === null) {
      firstScheduledRoot = lastScheduledRoot = root;
      root.nextScheduledRoot = root;
    } else {
      lastScheduledRoot.nextScheduledRoot = root;
      lastScheduledRoot = root;
      lastScheduledRoot.nextScheduledRoot = firstScheduledRoot;
    }
  } else {
    // This root is already scheduled, but its priority may have increased.
    var remainingExpirationTime = root.remainingExpirationTime;
    if (remainingExpirationTime === NoWork || expirationTime < remainingExpirationTime) {
      // Update the priority.
      root.remainingExpirationTime = expirationTime;
    }
  }
}

function findHighestPriorityRoot() {
  var highestPriorityWork = NoWork;
  var highestPriorityRoot = null;
  if (lastScheduledRoot !== null) {
    var previousScheduledRoot = lastScheduledRoot;
    var root = firstScheduledRoot;
    while (root !== null) {
      var remainingExpirationTime = root.remainingExpirationTime;
      if (remainingExpirationTime === NoWork) {
        // This root no longer has work. Remove it from the scheduler.

        // TODO: This check is redudant, but Flow is confused by the branch
        // below where we set lastScheduledRoot to null, even though we break
        // from the loop right after.
        !(previousScheduledRoot !== null && lastScheduledRoot !== null) ? invariant(false, 'Should have a previous and last root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
        if (root === root.nextScheduledRoot) {
          // This is the only root in the list.
          root.nextScheduledRoot = null;
          firstScheduledRoot = lastScheduledRoot = null;
          break;
        } else if (root === firstScheduledRoot) {
          // This is the first root in the list.
          var next = root.nextScheduledRoot;
          firstScheduledRoot = next;
          lastScheduledRoot.nextScheduledRoot = next;
          root.nextScheduledRoot = null;
        } else if (root === lastScheduledRoot) {
          // This is the last root in the list.
          lastScheduledRoot = previousScheduledRoot;
          lastScheduledRoot.nextScheduledRoot = firstScheduledRoot;
          root.nextScheduledRoot = null;
          break;
        } else {
          previousScheduledRoot.nextScheduledRoot = root.nextScheduledRoot;
          root.nextScheduledRoot = null;
        }
        root = previousScheduledRoot.nextScheduledRoot;
      } else {
        if (highestPriorityWork === NoWork || remainingExpirationTime < highestPriorityWork) {
          // Update the priority, if it's higher
          highestPriorityWork = remainingExpirationTime;
          highestPriorityRoot = root;
        }
        if (root === lastScheduledRoot) {
          break;
        }
        previousScheduledRoot = root;
        root = root.nextScheduledRoot;
      }
    }
  }

  // If the next root is the same as the previous root, this is a nested
  // update. To prevent an infinite loop, increment the nested update count.
  var previousFlushedRoot = nextFlushedRoot;
  if (previousFlushedRoot !== null && previousFlushedRoot === highestPriorityRoot && highestPriorityWork === Sync) {
    nestedUpdateCount++;
  } else {
    // Reset whenever we switch roots.
    nestedUpdateCount = 0;
  }
  nextFlushedRoot = highestPriorityRoot;
  nextFlushedExpirationTime = highestPriorityWork;
}

function performAsyncWork(dl) {
  performWork(NoWork, true, dl);
}

function performSyncWork() {
  performWork(Sync, false, null);
}

function performWork(minExpirationTime, isAsync, dl) {
  deadline = dl;

  // Keep working on roots until there's no more work, or until the we reach
  // the deadline.
  findHighestPriorityRoot();

  if (enableProfilerTimer) {
    resumeActualRenderTimerIfPaused();
  }

  if (enableUserTimingAPI && deadline !== null) {
    var didExpire = nextFlushedExpirationTime < recalculateCurrentTime();
    var timeout = expirationTimeToMs(nextFlushedExpirationTime);
    stopRequestCallbackTimer(didExpire, timeout);
  }

  if (isAsync) {
    while (nextFlushedRoot !== null && nextFlushedExpirationTime !== NoWork && (minExpirationTime === NoWork || minExpirationTime >= nextFlushedExpirationTime) && (!deadlineDidExpire || recalculateCurrentTime() >= nextFlushedExpirationTime)) {
      recalculateCurrentTime();
      performWorkOnRoot(nextFlushedRoot, nextFlushedExpirationTime, !deadlineDidExpire);
      findHighestPriorityRoot();
    }
  } else {
    while (nextFlushedRoot !== null && nextFlushedExpirationTime !== NoWork && (minExpirationTime === NoWork || minExpirationTime >= nextFlushedExpirationTime)) {
      performWorkOnRoot(nextFlushedRoot, nextFlushedExpirationTime, false);
      findHighestPriorityRoot();
    }
  }

  // We're done flushing work. Either we ran out of time in this callback,
  // or there's no more work left with sufficient priority.

  // If we're inside a callback, set this to false since we just completed it.
  if (deadline !== null) {
    callbackExpirationTime = NoWork;
    callbackID = null;
  }
  // If there's work left over, schedule a new callback.
  if (nextFlushedExpirationTime !== NoWork) {
    scheduleCallbackWithExpiration(nextFlushedExpirationTime);
  }

  // Clean-up.
  deadline = null;
  deadlineDidExpire = false;

  finishRendering();
}

function flushRoot(root, expirationTime) {
  !!isRendering ? invariant(false, 'work.commit(): Cannot commit while already rendering. This likely means you attempted to commit from inside a lifecycle method.') : void 0;
  // Perform work on root as if the given expiration time is the current time.
  // This has the effect of synchronously flushing all work up to and
  // including the given time.
  nextFlushedRoot = root;
  nextFlushedExpirationTime = expirationTime;
  performWorkOnRoot(root, expirationTime, false);
  // Flush any sync work that was scheduled by lifecycles
  performSyncWork();
  finishRendering();
}

function finishRendering() {
  nestedUpdateCount = 0;

  if (completedBatches !== null) {
    var batches = completedBatches;
    completedBatches = null;
    for (var i = 0; i < batches.length; i++) {
      var batch = batches[i];
      try {
        batch._onComplete();
      } catch (error) {
        if (!hasUnhandledError) {
          hasUnhandledError = true;
          unhandledError = error;
        }
      }
    }
  }

  if (hasUnhandledError) {
    var error = unhandledError;
    unhandledError = null;
    hasUnhandledError = false;
    throw error;
  }
}

function performWorkOnRoot(root, expirationTime, isAsync) {
  !!isRendering ? invariant(false, 'performWorkOnRoot was called recursively. This error is likely caused by a bug in React. Please file an issue.') : void 0;

  isRendering = true;

  // Check if this is async work or sync/expired work.
  if (!isAsync) {
    // Flush sync work.
    var finishedWork = root.finishedWork;
    if (finishedWork !== null) {
      // This root is already complete. We can commit it.
      completeRoot(root, finishedWork, expirationTime);
    } else {
      finishedWork = renderRoot(root, expirationTime, false);
      if (finishedWork !== null) {
        // We've completed the root. Commit it.
        completeRoot(root, finishedWork, expirationTime);
      }
    }
  } else {
    // Flush async work.
    var _finishedWork = root.finishedWork;
    if (_finishedWork !== null) {
      // This root is already complete. We can commit it.
      completeRoot(root, _finishedWork, expirationTime);
    } else {
      _finishedWork = renderRoot(root, expirationTime, true);
      if (_finishedWork !== null) {
        // We've completed the root. Check the deadline one more time
        // before committing.
        if (!shouldYield()) {
          // Still time left. Commit the root.
          completeRoot(root, _finishedWork, expirationTime);
        } else {
          // There's no time left. Mark this root as complete. We'll come
          // back and commit it later.
          root.finishedWork = _finishedWork;

          if (enableProfilerTimer) {
            // If we didn't finish, pause the "actual" render timer.
            // We'll restart it when we resume work.
            pauseActualRenderTimerIfRunning();
          }
        }
      }
    }
  }

  isRendering = false;
}

function completeRoot(root, finishedWork, expirationTime) {
  // Check if there's a batch that matches this expiration time.
  var firstBatch = root.firstBatch;
  if (firstBatch !== null && firstBatch._expirationTime <= expirationTime) {
    if (completedBatches === null) {
      completedBatches = [firstBatch];
    } else {
      completedBatches.push(firstBatch);
    }
    if (firstBatch._defer) {
      // This root is blocked from committing by a batch. Unschedule it until
      // we receive another update.
      root.finishedWork = finishedWork;
      root.remainingExpirationTime = NoWork;
      return;
    }
  }

  // Commit the root.
  root.finishedWork = null;
  root.remainingExpirationTime = commitRoot(finishedWork);
}

// When working on async work, the reconciler asks the renderer if it should
// yield execution. For DOM, we implement this with requestIdleCallback.
function shouldYield() {
  if (deadline === null) {
    return false;
  }
  if (deadline.timeRemaining() > timeHeuristicForUnitOfWork) {
    // Disregard deadline.didTimeout. Only expired work should be flushed
    // during a timeout. This path is only hit for non-expired work.
    return false;
  }
  deadlineDidExpire = true;
  return true;
}

function onUncaughtError(error) {
  !(nextFlushedRoot !== null) ? invariant(false, 'Should be working on a root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  // Unschedule this root so we don't work on it again until there's
  // another update.
  nextFlushedRoot.remainingExpirationTime = NoWork;
  if (!hasUnhandledError) {
    hasUnhandledError = true;
    unhandledError = error;
  }
}

function onBlock(remainingExpirationTime) {
  !(nextFlushedRoot !== null) ? invariant(false, 'Should be working on a root. This error is likely caused by a bug in React. Please file an issue.') : void 0;
  // This root was blocked. Unschedule it until there's another update.
  nextFlushedRoot.remainingExpirationTime = remainingExpirationTime;
}

// TODO: Batching should be implemented at the renderer level, not inside
// the reconciler.
function batchedUpdates$1(fn, a) {
  var previousIsBatchingUpdates = isBatchingUpdates;
  isBatchingUpdates = true;
  try {
    return fn(a);
  } finally {
    isBatchingUpdates = previousIsBatchingUpdates;
    if (!isBatchingUpdates && !isRendering) {
      performSyncWork();
    }
  }
}

// TODO: Batching should be implemented at the renderer level, not inside
// the reconciler.
function unbatchedUpdates(fn, a) {
  if (isBatchingUpdates && !isUnbatchingUpdates) {
    isUnbatchingUpdates = true;
    try {
      return fn(a);
    } finally {
      isUnbatchingUpdates = false;
    }
  }
  return fn(a);
}

// TODO: Batching should be implemented at the renderer level, not within
// the reconciler.
function flushSync(fn, a) {
  !!isRendering ? invariant(false, 'flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.') : void 0;
  var previousIsBatchingUpdates = isBatchingUpdates;
  isBatchingUpdates = true;
  try {
    return syncUpdates(fn, a);
  } finally {
    isBatchingUpdates = previousIsBatchingUpdates;
    performSyncWork();
  }
}

function interactiveUpdates$1(fn, a, b) {
  if (isBatchingInteractiveUpdates) {
    return fn(a, b);
  }
  // If there are any pending interactive updates, synchronously flush them.
  // This needs to happen before we read any handlers, because the effect of
  // the previous event may influence which handlers are called during
  // this event.
  if (!isBatchingUpdates && !isRendering && lowestPendingInteractiveExpirationTime !== NoWork) {
    // Synchronously flush pending interactive updates.
    performWork(lowestPendingInteractiveExpirationTime, false, null);
    lowestPendingInteractiveExpirationTime = NoWork;
  }
  var previousIsBatchingInteractiveUpdates = isBatchingInteractiveUpdates;
  var previousIsBatchingUpdates = isBatchingUpdates;
  isBatchingInteractiveUpdates = true;
  isBatchingUpdates = true;
  try {
    return fn(a, b);
  } finally {
    isBatchingInteractiveUpdates = previousIsBatchingInteractiveUpdates;
    isBatchingUpdates = previousIsBatchingUpdates;
    if (!isBatchingUpdates && !isRendering) {
      performSyncWork();
    }
  }
}

function flushInteractiveUpdates$1() {
  if (!isRendering && lowestPendingInteractiveExpirationTime !== NoWork) {
    // Synchronously flush pending interactive updates.
    performWork(lowestPendingInteractiveExpirationTime, false, null);
    lowestPendingInteractiveExpirationTime = NoWork;
  }
}

function flushControlled(fn) {
  var previousIsBatchingUpdates = isBatchingUpdates;
  isBatchingUpdates = true;
  try {
    syncUpdates(fn);
  } finally {
    isBatchingUpdates = previousIsBatchingUpdates;
    if (!isBatchingUpdates && !isRendering) {
      performWork(Sync, false, null);
    }
  }
}

// 0 is PROD, 1 is DEV.
// Might add PROFILE later.


var didWarnAboutNestedUpdates = void 0;

{
  didWarnAboutNestedUpdates = false;
}

function getContextForSubtree(parentComponent) {
  if (!parentComponent) {
    return emptyObject;
  }

  var fiber = get(parentComponent);
  var parentContext = findCurrentUnmaskedContext(fiber);
  return isContextProvider(fiber) ? processChildContext(fiber, parentContext) : parentContext;
}

function scheduleRootUpdate(current, element, expirationTime, callback) {
  {
    if (ReactDebugCurrentFiber.phase === 'render' && ReactDebugCurrentFiber.current !== null && !didWarnAboutNestedUpdates) {
      didWarnAboutNestedUpdates = true;
      warning(false, 'Render methods should be a pure function of props and state; ' + 'triggering nested component updates from render is not allowed. ' + 'If necessary, trigger nested updates in componentDidUpdate.\n\n' + 'Check the render method of %s.', getComponentName(ReactDebugCurrentFiber.current) || 'Unknown');
    }
  }

  var update = createUpdate(expirationTime);
  // Caution: React DevTools currently depends on this property
  // being called "element".
  update.payload = { element: element };

  callback = callback === undefined ? null : callback;
  if (callback !== null) {
    !(typeof callback === 'function') ? warning(false, 'render(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callback) : void 0;
    update.callback = callback;
  }
  enqueueUpdate(current, update, expirationTime);

  scheduleWork$1(current, expirationTime);
  return expirationTime;
}

function updateContainerAtExpirationTime(element, container, parentComponent, expirationTime, callback) {
  // TODO: If this is a nested container, this won't be the root.
  var current = container.current;

  {
    if (ReactFiberInstrumentation_1.debugTool) {
      if (current.alternate === null) {
        ReactFiberInstrumentation_1.debugTool.onMountContainer(container);
      } else if (element === null) {
        ReactFiberInstrumentation_1.debugTool.onUnmountContainer(container);
      } else {
        ReactFiberInstrumentation_1.debugTool.onUpdateContainer(container);
      }
    }
  }

  var context = getContextForSubtree(parentComponent);
  if (container.context === null) {
    container.context = context;
  } else {
    container.pendingContext = context;
  }

  return scheduleRootUpdate(current, element, expirationTime, callback);
}

function findHostInstance(component) {
  var fiber = get(component);
  if (fiber === undefined) {
    if (typeof component.render === 'function') {
      invariant(false, 'Unable to find node on an unmounted component.');
    } else {
      invariant(false, 'Argument appears to not be a ReactComponent. Keys: %s', Object.keys(component));
    }
  }
  var hostFiber = findCurrentHostFiber(fiber);
  if (hostFiber === null) {
    return null;
  }
  return hostFiber.stateNode;
}

function createContainer(containerInfo, isAsync, hydrate) {
  return createFiberRoot(containerInfo, isAsync, hydrate);
}

function updateContainer(element, container, parentComponent, callback) {
  var current = container.current;
  var currentTime = recalculateCurrentTime();
  var expirationTime = computeExpirationForFiber(currentTime, current);
  return updateContainerAtExpirationTime(element, container, parentComponent, expirationTime, callback);
}

function getPublicRootInstance(container) {
  var containerFiber = container.current;
  if (!containerFiber.child) {
    return null;
  }
  switch (containerFiber.child.tag) {
    case HostComponent:
      return getPublicInstance(containerFiber.child.stateNode);
    default:
      return containerFiber.child.stateNode;
  }
}

function findHostInstanceWithNoPortals(fiber) {
  var hostFiber = findCurrentHostFiberWithNoPortals(fiber);
  if (hostFiber === null) {
    return null;
  }
  return hostFiber.stateNode;
}

function injectIntoDevTools(devToolsConfig) {
  var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance;

  return injectInternals(_assign({}, devToolsConfig, {
    findHostInstanceByFiber: function (fiber) {
      var hostFiber = findCurrentHostFiber(fiber);
      if (hostFiber === null) {
        return null;
      }
      return hostFiber.stateNode;
    },
    findFiberByHostInstance: function (instance) {
      if (!findFiberByHostInstance) {
        // Might not be implemented by the renderer.
        return null;
      }
      return findFiberByHostInstance(instance);
    }
  }));
}

// This file intentionally does *not* have the Flow annotation.
// Don't add it. See `./inline-typed.js` for an explanation.



var DOMRenderer = Object.freeze({
	updateContainerAtExpirationTime: updateContainerAtExpirationTime,
	createContainer: createContainer,
	updateContainer: updateContainer,
	flushRoot: flushRoot,
	requestWork: requestWork,
	computeUniqueAsyncExpiration: computeUniqueAsyncExpiration,
	batchedUpdates: batchedUpdates$1,
	unbatchedUpdates: unbatchedUpdates,
	deferredUpdates: deferredUpdates,
	syncUpdates: syncUpdates,
	interactiveUpdates: interactiveUpdates$1,
	flushInteractiveUpdates: flushInteractiveUpdates$1,
	flushControlled: flushControlled,
	flushSync: flushSync,
	getPublicRootInstance: getPublicRootInstance,
	findHostInstance: findHostInstance,
	findHostInstanceWithNoPortals: findHostInstanceWithNoPortals,
	injectIntoDevTools: injectIntoDevTools
});

function createPortal$1(children, containerInfo,
// TODO: figure out the API for cross-renderer implementation.
implementation) {
  var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  return {
    // This tag allow us to uniquely identify this as a React Portal
    $$typeof: REACT_PORTAL_TYPE,
    key: key == null ? null : '' + key,
    children: children,
    containerInfo: containerInfo,
    implementation: implementation
  };
}

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.4.1';

// TODO: This type is shared between the reconciler and ReactDOM, but will
// eventually be lifted out to the renderer.
var topLevelUpdateWarnings = void 0;
var warnOnInvalidCallback = void 0;
var didWarnAboutUnstableCreatePortal = false;

{
  if (typeof Map !== 'function' ||
  // $FlowIssue Flow incorrectly thinks Map has no prototype
  Map.prototype == null || typeof Map.prototype.forEach !== 'function' || typeof Set !== 'function' ||
  // $FlowIssue Flow incorrectly thinks Set has no prototype
  Set.prototype == null || typeof Set.prototype.clear !== 'function' || typeof Set.prototype.forEach !== 'function') {
    warning(false, 'React depends on Map and Set built-in types. Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
  }

  topLevelUpdateWarnings = function (container) {
    if (container._reactRootContainer && container.nodeType !== COMMENT_NODE) {
      var hostInstance = findHostInstanceWithNoPortals(container._reactRootContainer._internalRoot.current);
      if (hostInstance) {
        !(hostInstance.parentNode === container) ? warning(false, 'render(...): It looks like the React-rendered content of this ' + 'container was removed without using React. This is not ' + 'supported and will cause errors. Instead, call ' + 'ReactDOM.unmountComponentAtNode to empty a container.') : void 0;
      }
    }

    var isRootRenderedBySomeReact = !!container._reactRootContainer;
    var rootEl = getReactRootElementInContainer(container);
    var hasNonRootReactChild = !!(rootEl && getInstanceFromNode$1(rootEl));

    !(!hasNonRootReactChild || isRootRenderedBySomeReact) ? warning(false, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.') : void 0;

    !(container.nodeType !== ELEMENT_NODE || !container.tagName || container.tagName.toUpperCase() !== 'BODY') ? warning(false, 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.') : void 0;
  };

  warnOnInvalidCallback = function (callback, callerName) {
    !(callback === null || typeof callback === 'function') ? warning(false, '%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback) : void 0;
  };
}

injection$2.injectFiberControlledHostComponent(ReactDOMFiberComponent);

function ReactBatch(root) {
  var expirationTime = computeUniqueAsyncExpiration();
  this._expirationTime = expirationTime;
  this._root = root;
  this._next = null;
  this._callbacks = null;
  this._didComplete = false;
  this._hasChildren = false;
  this._children = null;
  this._defer = true;
}
ReactBatch.prototype.render = function (children) {
  !this._defer ? invariant(false, 'batch.render: Cannot render a batch that already committed.') : void 0;
  this._hasChildren = true;
  this._children = children;
  var internalRoot = this._root._internalRoot;
  var expirationTime = this._expirationTime;
  var work = new ReactWork();
  updateContainerAtExpirationTime(children, internalRoot, null, expirationTime, work._onCommit);
  return work;
};
ReactBatch.prototype.then = function (onComplete) {
  if (this._didComplete) {
    onComplete();
    return;
  }
  var callbacks = this._callbacks;
  if (callbacks === null) {
    callbacks = this._callbacks = [];
  }
  callbacks.push(onComplete);
};
ReactBatch.prototype.commit = function () {
  var internalRoot = this._root._internalRoot;
  var firstBatch = internalRoot.firstBatch;
  !(this._defer && firstBatch !== null) ? invariant(false, 'batch.commit: Cannot commit a batch multiple times.') : void 0;

  if (!this._hasChildren) {
    // This batch is empty. Return.
    this._next = null;
    this._defer = false;
    return;
  }

  var expirationTime = this._expirationTime;

  // Ensure this is the first batch in the list.
  if (firstBatch !== this) {
    // This batch is not the earliest batch. We need to move it to the front.
    // Update its expiration time to be the expiration time of the earliest
    // batch, so that we can flush it without flushing the other batches.
    if (this._hasChildren) {
      expirationTime = this._expirationTime = firstBatch._expirationTime;
      // Rendering this batch again ensures its children will be the final state
      // when we flush (updates are processed in insertion order: last
      // update wins).
      // TODO: This forces a restart. Should we print a warning?
      this.render(this._children);
    }

    // Remove the batch from the list.
    var previous = null;
    var batch = firstBatch;
    while (batch !== this) {
      previous = batch;
      batch = batch._next;
    }
    !(previous !== null) ? invariant(false, 'batch.commit: Cannot commit a batch multiple times.') : void 0;
    previous._next = batch._next;

    // Add it to the front.
    this._next = firstBatch;
    firstBatch = internalRoot.firstBatch = this;
  }

  // Synchronously flush all the work up to this batch's expiration time.
  this._defer = false;
  flushRoot(internalRoot, expirationTime);

  // Pop the batch from the list.
  var next = this._next;
  this._next = null;
  firstBatch = internalRoot.firstBatch = next;

  // Append the next earliest batch's children to the update queue.
  if (firstBatch !== null && firstBatch._hasChildren) {
    firstBatch.render(firstBatch._children);
  }
};
ReactBatch.prototype._onComplete = function () {
  if (this._didComplete) {
    return;
  }
  this._didComplete = true;
  var callbacks = this._callbacks;
  if (callbacks === null) {
    return;
  }
  // TODO: Error handling.
  for (var i = 0; i < callbacks.length; i++) {
    var _callback = callbacks[i];
    _callback();
  }
};

function ReactWork() {
  this._callbacks = null;
  this._didCommit = false;
  // TODO: Avoid need to bind by replacing callbacks in the update queue with
  // list of Work objects.
  this._onCommit = this._onCommit.bind(this);
}
ReactWork.prototype.then = function (onCommit) {
  if (this._didCommit) {
    onCommit();
    return;
  }
  var callbacks = this._callbacks;
  if (callbacks === null) {
    callbacks = this._callbacks = [];
  }
  callbacks.push(onCommit);
};
ReactWork.prototype._onCommit = function () {
  if (this._didCommit) {
    return;
  }
  this._didCommit = true;
  var callbacks = this._callbacks;
  if (callbacks === null) {
    return;
  }
  // TODO: Error handling.
  for (var i = 0; i < callbacks.length; i++) {
    var _callback2 = callbacks[i];
    !(typeof _callback2 === 'function') ? invariant(false, 'Invalid argument passed as callback. Expected a function. Instead received: %s', _callback2) : void 0;
    _callback2();
  }
};

function ReactRoot(container, isAsync, hydrate) {
  var root = createContainer(container, isAsync, hydrate);
  this._internalRoot = root;
}
ReactRoot.prototype.render = function (children, callback) {
  var root = this._internalRoot;
  var work = new ReactWork();
  callback = callback === undefined ? null : callback;
  {
    warnOnInvalidCallback(callback, 'render');
  }
  if (callback !== null) {
    work.then(callback);
  }
  updateContainer(children, root, null, work._onCommit);
  return work;
};
ReactRoot.prototype.unmount = function (callback) {
  var root = this._internalRoot;
  var work = new ReactWork();
  callback = callback === undefined ? null : callback;
  {
    warnOnInvalidCallback(callback, 'render');
  }
  if (callback !== null) {
    work.then(callback);
  }
  updateContainer(null, root, null, work._onCommit);
  return work;
};
ReactRoot.prototype.legacy_renderSubtreeIntoContainer = function (parentComponent, children, callback) {
  var root = this._internalRoot;
  var work = new ReactWork();
  callback = callback === undefined ? null : callback;
  {
    warnOnInvalidCallback(callback, 'render');
  }
  if (callback !== null) {
    work.then(callback);
  }
  updateContainer(children, root, parentComponent, work._onCommit);
  return work;
};
ReactRoot.prototype.createBatch = function () {
  var batch = new ReactBatch(this);
  var expirationTime = batch._expirationTime;

  var internalRoot = this._internalRoot;
  var firstBatch = internalRoot.firstBatch;
  if (firstBatch === null) {
    internalRoot.firstBatch = batch;
    batch._next = null;
  } else {
    // Insert sorted by expiration time then insertion order
    var insertAfter = null;
    var insertBefore = firstBatch;
    while (insertBefore !== null && insertBefore._expirationTime <= expirationTime) {
      insertAfter = insertBefore;
      insertBefore = insertBefore._next;
    }
    batch._next = insertBefore;
    if (insertAfter !== null) {
      insertAfter._next = batch;
    }
  }

  return batch;
};

/**
 * True if the supplied DOM node is a valid node element.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM is a valid DOM node.
 * @internal
 */
function isValidContainer(node) {
  return !!(node && (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE || node.nodeType === COMMENT_NODE && node.nodeValue === ' react-mount-point-unstable '));
}

function getReactRootElementInContainer(container) {
  if (!container) {
    return null;
  }

  if (container.nodeType === DOCUMENT_NODE) {
    return container.documentElement;
  } else {
    return container.firstChild;
  }
}

function shouldHydrateDueToLegacyHeuristic(container) {
  var rootElement = getReactRootElementInContainer(container);
  return !!(rootElement && rootElement.nodeType === ELEMENT_NODE && rootElement.hasAttribute(ROOT_ATTRIBUTE_NAME));
}

injection$3.injectRenderer(DOMRenderer);

var warnedAboutHydrateAPI = false;

function legacyCreateRootFromDOMContainer(container, forceHydrate) {
  var shouldHydrate = forceHydrate || shouldHydrateDueToLegacyHeuristic(container);
  // First clear any existing content.
  if (!shouldHydrate) {
    var warned = false;
    var rootSibling = void 0;
    while (rootSibling = container.lastChild) {
      {
        if (!warned && rootSibling.nodeType === ELEMENT_NODE && rootSibling.hasAttribute(ROOT_ATTRIBUTE_NAME)) {
          warned = true;
          warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.');
        }
      }
      container.removeChild(rootSibling);
    }
  }
  {
    if (shouldHydrate && !forceHydrate && !warnedAboutHydrateAPI) {
      warnedAboutHydrateAPI = true;
      lowPriorityWarning$1(false, 'render(): Calling ReactDOM.render() to hydrate server-rendered markup ' + 'will stop working in React v17. Replace the ReactDOM.render() call ' + 'with ReactDOM.hydrate() if you want React to attach to the server HTML.');
    }
  }
  // Legacy roots are not async by default.
  var isAsync = false;
  return new ReactRoot(container, isAsync, shouldHydrate);
}

function legacyRenderSubtreeIntoContainer(parentComponent, children, container, forceHydrate, callback) {
  // TODO: Ensure all entry points contain this check
  !isValidContainer(container) ? invariant(false, 'Target container is not a DOM element.') : void 0;

  {
    topLevelUpdateWarnings(container);
  }

  // TODO: Without `any` type, Flow says "Property cannot be accessed on any
  // member of intersection type." Whyyyyyy.
  var root = container._reactRootContainer;
  if (!root) {
    // Initial mount
    root = container._reactRootContainer = legacyCreateRootFromDOMContainer(container, forceHydrate);
    if (typeof callback === 'function') {
      var originalCallback = callback;
      callback = function () {
        var instance = getPublicRootInstance(root._internalRoot);
        originalCallback.call(instance);
      };
    }
    // Initial mount should not be batched.
    unbatchedUpdates(function () {
      if (parentComponent != null) {
        root.legacy_renderSubtreeIntoContainer(parentComponent, children, callback);
      } else {
        root.render(children, callback);
      }
    });
  } else {
    if (typeof callback === 'function') {
      var _originalCallback = callback;
      callback = function () {
        var instance = getPublicRootInstance(root._internalRoot);
        _originalCallback.call(instance);
      };
    }
    // Update
    if (parentComponent != null) {
      root.legacy_renderSubtreeIntoContainer(parentComponent, children, callback);
    } else {
      root.render(children, callback);
    }
  }
  return getPublicRootInstance(root._internalRoot);
}

function createPortal(children, container) {
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  !isValidContainer(container) ? invariant(false, 'Target container is not a DOM element.') : void 0;
  // TODO: pass ReactDOM portal implementation as third argument
  return createPortal$1(children, container, null, key);
}

var ReactDOM = {
  createPortal: createPortal,

  findDOMNode: function (componentOrElement) {
    {
      var owner = ReactCurrentOwner.current;
      if (owner !== null && owner.stateNode !== null) {
        var warnedAboutRefsInRender = owner.stateNode._warnedAboutRefsInRender;
        !warnedAboutRefsInRender ? warning(false, '%s is accessing findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', getComponentName(owner) || 'A component') : void 0;
        owner.stateNode._warnedAboutRefsInRender = true;
      }
    }
    if (componentOrElement == null) {
      return null;
    }
    if (componentOrElement.nodeType === ELEMENT_NODE) {
      return componentOrElement;
    }

    return findHostInstance(componentOrElement);
  },
  hydrate: function (element, container, callback) {
    // TODO: throw or warn if we couldn't hydrate?
    return legacyRenderSubtreeIntoContainer(null, element, container, true, callback);
  },
  render: function (element, container, callback) {
    return legacyRenderSubtreeIntoContainer(null, element, container, false, callback);
  },
  unstable_renderSubtreeIntoContainer: function (parentComponent, element, containerNode, callback) {
    !(parentComponent != null && has(parentComponent)) ? invariant(false, 'parentComponent must be a valid React Component') : void 0;
    return legacyRenderSubtreeIntoContainer(parentComponent, element, containerNode, false, callback);
  },
  unmountComponentAtNode: function (container) {
    !isValidContainer(container) ? invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : void 0;

    if (container._reactRootContainer) {
      {
        var rootEl = getReactRootElementInContainer(container);
        var renderedByDifferentReact = rootEl && !getInstanceFromNode$1(rootEl);
        !!renderedByDifferentReact ? warning(false, "unmountComponentAtNode(): The node you're attempting to unmount " + 'was rendered by another copy of React.') : void 0;
      }

      // Unmount should not be batched.
      unbatchedUpdates(function () {
        legacyRenderSubtreeIntoContainer(null, null, container, false, function () {
          container._reactRootContainer = null;
        });
      });
      // If you call unmountComponentAtNode twice in quick succession, you'll
      // get `true` twice. That's probably fine?
      return true;
    } else {
      {
        var _rootEl = getReactRootElementInContainer(container);
        var hasNonRootReactChild = !!(_rootEl && getInstanceFromNode$1(_rootEl));

        // Check if the container itself is a React root node.
        var isContainerReactRoot = container.nodeType === 1 && isValidContainer(container.parentNode) && !!container.parentNode._reactRootContainer;

        !!hasNonRootReactChild ? warning(false, "unmountComponentAtNode(): The node you're attempting to unmount " + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.') : void 0;
      }

      return false;
    }
  },


  // Temporary alias since we already shipped React 16 RC with it.
  // TODO: remove in React 17.
  unstable_createPortal: function () {
    if (!didWarnAboutUnstableCreatePortal) {
      didWarnAboutUnstableCreatePortal = true;
      lowPriorityWarning$1(false, 'The ReactDOM.unstable_createPortal() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactDOM.createPortal() instead. It has the exact same API, ' + 'but without the "unstable_" prefix.');
    }
    return createPortal.apply(undefined, arguments);
  },


  unstable_batchedUpdates: batchedUpdates$1,

  unstable_deferredUpdates: deferredUpdates,

  unstable_interactiveUpdates: interactiveUpdates$1,

  flushSync: flushSync,

  unstable_flushControlled: flushControlled,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    // For TapEventPlugin which is popular in open source
    EventPluginHub: EventPluginHub,
    // Used by test-utils
    EventPluginRegistry: EventPluginRegistry,
    EventPropagators: EventPropagators,
    ReactControlledComponent: ReactControlledComponent,
    ReactDOMComponentTree: ReactDOMComponentTree,
    ReactDOMEventListener: ReactDOMEventListener
  }
};

ReactDOM.unstable_createRoot = function createRoot(container, options) {
  var hydrate = options != null && options.hydrate === true;
  return new ReactRoot(container, true, hydrate);
};

var foundDevTools = injectIntoDevTools({
  findFiberByHostInstance: getClosestInstanceFromNode,
  bundleType: 1,
  version: ReactVersion,
  rendererPackageName: 'react-dom'
});

{
  if (!foundDevTools && ExecutionEnvironment.canUseDOM && window.top === window.self) {
    // If we're in Chrome or Firefox, provide a download link if not installed.
    if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
      var protocol = window.location.protocol;
      // Don't warn in exotic cases like chrome-extension://.
      if (/^(https?|file):$/.test(protocol)) {
        console.info('%cDownload the React DevTools ' + 'for a better development experience: ' + 'https://fb.me/react-devtools' + (protocol === 'file:' ? '\nYou might need to use a local HTTP server (instead of file://): ' + 'https://fb.me/react-devtools-faq' : ''), 'font-weight:bold');
      }
    }
  }
}



var ReactDOM$2 = Object.freeze({
	default: ReactDOM
});

var ReactDOM$3 = ( ReactDOM$2 && ReactDOM ) || ReactDOM$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var reactDom = ReactDOM$3.default ? ReactDOM$3.default : ReactDOM$3;

module.exports = reactDom;
  })();
}


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (true) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom.development.js */ "./node_modules/react-dom/cjs/react-dom.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.4.1
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ "./node_modules/fbjs/lib/emptyObject.js");
var warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");
var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.4.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_TIMEOUT_TYPE = hasSymbol ? Symbol.for('react.timeout') : 0xead1;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

// Relying on the `invariant()` implementation lets us
// have preserve the format and params in the www builds.

// Exports ReactDOM.createRoot


// Experimental error-boundary API that can recover from errors within a single
// render phase

// Suspense
var enableSuspense = false;
// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Warn about legacy context API


// Gather advanced timing metrics for Profiler subtrees.


// Only used in www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warning(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var ReactDebugCurrentFrame = {};

{
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum()) : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warning(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    _defaultValue: defaultValue,
    _currentValue: defaultValue,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue2: defaultValue,
    _changedBits: 0,
    _changedBits2: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  context.Consumer = context;

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function forwardRef(render) {
  {
    !(typeof render === 'function') ? warning(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render) : void 0;

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warning(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_TIMEOUT_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_ASYNC_MODE_TYPE:
      return 'AsyncMode';
    case REACT_CONTEXT_TYPE:
      return 'Context.Consumer';
    case REACT_FRAGMENT_TYPE:
      return 'ReactFragment';
    case REACT_PORTAL_TYPE:
      return 'ReactPortal';
    case REACT_PROFILER_TYPE:
      return 'Profiler(' + fiber.pendingProps.id + ')';
    case REACT_PROVIDER_TYPE:
      return 'Context.Provider';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_TIMEOUT_TYPE:
      return 'Timeout';
  }
  if (typeof type === 'object' && type !== null) {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        var functionName = type.render.displayName || type.render.name || '';
        return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    }
  }
  return null;
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var currentlyValidatingElement = void 0;
var propTypesMisspellWarningShown = void 0;

var getDisplayName = function () {};
var getStackAddendum = function () {};

{
  currentlyValidatingElement = null;

  propTypesMisspellWarningShown = false;

  getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    }

    var type = element.type;
    if (type === REACT_FRAGMENT_TYPE) {
      return 'React.Fragment';
    } else if (typeof type === 'object' && type !== null && type.$$typeof === REACT_FORWARD_REF_TYPE) {
      var functionName = type.render.displayName || type.render.name || '';
      return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    } else {
      return type.displayName || type.name || 'Unknown';
    }
  };

  getStackAddendum = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
    }
    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
    return stack;
  };
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  {
    warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  var name = void 0,
      propTypes = void 0;
  if (typeof type === 'function') {
    // Class or functional component
    name = type.displayName || type.name;
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && type !== null && type.$$typeof === REACT_FORWARD_REF_TYPE) {
    // ForwardRef
    var functionName = type.render.displayName || type.render.name || '';
    name = functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
    currentlyValidatingElement = null;
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warning(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  currentlyValidatingElement = fragment;

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
      break;
    }
  }

  if (fragment.ref !== null) {
    warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
  }

  currentlyValidatingElement = null;
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    info += getStackAddendum() || '';

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else {
      typeString = typeof type;
    }

    warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: _assign
  }
};

if (enableSuspense) {
  React.Timeout = REACT_TIMEOUT_TYPE;
}

{
  _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default ? React$3.default : React$3;

module.exports = react;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./public/imgs/computer.svg.png":
/*!**************************************!*\
  !*** ./public/imgs/computer.svg.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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qAzoAAAAAAAAAFAZ0AEAAAAAAACgMqADAAAAAAAAQGVABwAAAAAAAIDKgA4AAAAAAAAAlQEdAAAAAAAAACoDOgAAAAAAAABUBnQAAAAAAAAAqAzoAAAAAAAAAFAZ0AEAAAAAAACgMqADAAAAAAAAQGVABwAAAAAAAIDKgA4AAAAAAAAAlQEdAAAAAAAAACoDOgAAAAAAAABUBnQAAAAAAAAAqAzoAAAAAAAAAFAZ0AEAAAAAAACgMqADAAAAAAAAQGVABwAAAAAAAIDKgA4AAAAAAAAAlQEdAAAAAAAAACoDOgAAAAAAAABUBnQAAAAAAAAAqAzoAAAAAAAAAFAZ0AEAAAAAAACgMqADAAAAAAAAQGVABwAAAAAAAIDKgA4AAAAAAAAAlQEdAAAAAAAAACoDOgAAAAAAAABUBnQAAAAAAAAAqAzoAAAAAAAAAFAZ0AEAAAAAAACgMqADAAAAAAAAQGVABwAAAAAAAIDKgA4AAAAAAAAAlQEdAAAAAAAAACoDOgAAAAAAAABUBnQAAAAAAAAAqAzoAAAAAAAAAFAZ0AEAAAAAAACgMqADAAAAAAAAQGVABwAAAAAAAIDKgA4AAAAAAAAAlQEdAAAAAAAAACoDOgAAAAAAAABUBnQAAAAAAAAAqAzoAAAAAAAAAFAZ0AEAAAAAAACgMqADAAAAAAAAQGVABwAAAAAAAIDKgA4AAAAAAAAAlQEdAAAAAAAAACoDOgAAAAAAAABUBnQAAAAAAAAAqAzoAAAAAAAAAFAZ0AEAAAAAAACgMqADAAAAAAAAQGVABwAAAAAAAIDKgA4AAAAAAAAAlQEdAAAAAAAAACoDOgAAAAAAAABUBnQAAAAAAAAAqAzoAAAAAAAAAFAZ0AEAAAAAAACgMqADAAAAAAAAQGVABwAAAAAAAIDKgA4AAAAAAAAAlQEdAAAAAAAAACoDOgAAAAAAAABUBnQAAAAAAAAAqAzoAAAAAAAAAFAZ0AEAAAAAAACgMqADAAAAAAAAQGVABwAAAAAAAIDKgA4AAAAAAAAAlQEdAAAAAAAAACoDOgAAAAAAAABUBnQAAAAAAAAAqAzoAAAAAAAAAFAZ0AEAAAAAAACgMqADAAAAAAAAQGVABwAAAAAAAIDKgA4AAAAAAAAAlQEdAAAAAAAAACoDOgAAAAAAAABUBnQAAAAAAAAAqAzoAAAAAAAAAFAZ0AEAAAAAAACgMqADAAAAAAAAQGVABwAAAAAAAIDq/7FnBwIAAAAAgvanXqQ0EugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAKmRQ18AACAASURBVAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAAKgEOgAAAAAAAABUAh0AAAAAAAAAKoEOAAAAAAAAAJVABwAAAAAAAIBKoAMAAAAAAABAJdABAAAAAAAAoBLoAAAAAAAAAFAJdAAAAAAAAACoBDoAAAAAAAAAVAIdAAAAAAAAACqBDgAAAAAAAACVQAcAAAAAAACASqADAAAAAAAAQCXQAQAAAAAAAKAS6AAAAAAAAABQCXQAAAAAAAAAqAQ6AAAAAAAAAFQCHQAAAAAAAAAqgQ4AAAAAAAAAlUAHAAAAAAAAgEqgAwAAAAAAAEAl0AEAAAAAAACgEugAAAAAAAAAUAl0AAAAAAAAgNm7l5dNxwCO499heOcdhxJDDhsNQ5hINEpEOQzNbuwpi7G0UPMX+BccysLCglhYII3IQrZyLGQpNmJjJqfJ4i2Zmslj3mfmuu/n/Xz+gl89d8/me1/3BZWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4AAAAAAAAAlYAOAAAAAAAAAJWADgAAAAAAAACVgA4A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6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAK92UgAAIABJREFUAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAAAABQCegAAAAAAAAAUAnoAAAAAAAAAFAJ6AAAAAAA8Dd7dxq060Hf9/17dLSBBAaJzQJkgQPGYBQJcAwYB2xWY6YYg2PsJhgMDjC4XpoXzZu2L9qZutPp1JPp4DQtJEwyNnhNvKRjLAoBm80EEwICbBkQRpgYEIsW0HKO+uKWLMnoSGd5nud/Xff9+cycORIDM1+OeHFz/57/dQEAVAZ0AAAAAAAAAKgM6AAAAAAAAABQGdABAAAAAAAAoDKgAwAAAAAAAEBlQAcAAAAAAACAyoAOAAAAAAAAAJUBHQAAAAAAAAAqAzoAAAAAAAAAVAZ0AAAAAAAAAKgM6AAAAAAAAABQGdABAAAAAAAAoDKgAwAAAAAAAEBlQAcAAAAAAACAyoAOAAAAAAAAAJUBHQAAAAAAAAAqAzoAAAAAAAAAVAZ0AAAAAAAAAKgM6AAAAAAAAABQGdABAAAAAAAAoDKgAwAAAAAAAEBlQAcAAAAAAACAyoAOAAAAAAAAAJUBHQAAAAAAAAAqAzoAAAAAAAAAVAZ0AAAAAAAAAKgM6AAAAAAAAABQGdABAAAAAAAAoDKgAwAAAAAAAEBlQAcAAAAAAACAyoAOAAAAAAAAAJUBHQAAAAAAAAAqAzoAAAAAAAAAVAZ0AAAAAAAAAKgM6AAAAAAAAABQGdABAAAAAAAAoDKgAwAAAAAAAEBlQAcAAAAAAACAyoAOAAAAAAAAANVyB/SbpwMAAAAAAAAA2BM3TQccryUP6LdMRwAAAAAAAABwygzop+iWXKEDAAAAAAAAbIMbpwOO11IH9FrRHyIAAAAAAAAAx7Sa7deADgAAAAAAAMB+Ws32u+QBfTXPwQcAAAAAAADgmAzoe2A1f4gAAAAAAAAAHNNqtl8DOgAAAAAAAAD7aTVPH1/ygH7ddAAAAAAAAAAAp2w12++SB/SrpwMAAAAAAAAAOGVfmg44Xkse0L88HQAAAAAAAADAKVvN9rvkAd0FOgAAAAAAAMD6rWb7NaADAAAAAAAAsJ9coO+B1fwhAgAAAAAAAHBMqzmeNqADAAAAAAAAsJ9Ws/0ueUBfzU8hAAAAAAAAAHBMq9l+lzyg//V0AAAAAAAAAACnbDXb75IH9CunAwAAAAAAAAA4ZavZfg9NB9yNs6rrW/bIDwAAAAAAAMCxfaW6/3TE8VryOH1DKzrlBwAAAAAAAOCbfGY64EQseUCvlf1hAgAAAAAAAHAnq9p8lz6g/+V0AAAAAAAAAAAnbVWb79IH9FX9NAIAAAAAAAAAd2JA30OfnQ4AAAAAAAAA4KQZ0PfQn00HAAAAAAAAAHDSVrX5Ln1A/+h0AAAAAAAAAAAn5Zbq8umIE7H0Af3K6rrpCAAAAAAAAABO2F9W105HnIilD+hHq49PRwAAAAAAAABwwlb3xPGlD+i1wj9UAAAAAAAAANa39a5hQF/VM/EBAAAAAAAAqFa49a5hQF/dTyUAAAAAAAAAYEDfD6v7QwUAAAAAAADYcbdUH5+OOFFrGNA/VX1hOgIAAAAAAACA4/bx6qvTESdqDQP6LdX7piMAAAAAAAAAOG7vmQ44GWsY0MuADgAAAAAAALAmq9x41zKgv3c6AAAAAAAAAIDjtsqN99B0wHG6T/Xl6vB0CAAAAAAAAAB362vV/auj0yEnai0X6Ne0eck8AAAAAAAAAMv2J61wPK/1DOi10hN/AAAAAAAAgB2z2m13TQP6u6cDAAAAAAAAALhHq9121/IO9KqHVp+djgAAAAAAAADgmG6ozquunw45GWu6QL+qunw6AgAAAAAAAIBjencrHc9rXQN61R9OBwAAAAAAAABwTKvedA3oAAAAAAAAAOyVVW+6a3oHetU51Zeqs6ZDAAAAAAAAALiTL1YPro5Oh5ystV2gX1e9dzoCAAAAAAAAgG/y9lY8ntf6BvSqy6YDAAAAAAAAAPgmq99y1/YI96rHVh+djgAAAAAAAADgb9xcfWubx7iv1hov0C+/9RcAAAAAAAAAy/CuVj6e1zoH9KrfmA4AAAAAAAAA4G/85nTAXljjI9yrLq7+03QEAAAAAAAAAB2pHlZ9fjrkVK31Av3D1cenIwAAAAAAAADo3W3BeF7rHdCrfms6AAAAAAAAAIDteHx7rXtA/+3pAAAAAAAAAIAdd0v1b6cj9sqaB/QPVB+djgAAAAAAAADYYe+orpyO2CtrHtCr3jgdAAAAAAAAALDDtmqzPTQdcIrOr66qzpoOAQAAAAAAANgxX64eWn19OmSvrP0C/UvV705HAAAAAAAAAOygN7dF43mtf0CvesN0AAAAAAAAAMAO2rqtdu2PcK/NDwF8qrpwOgQAAAAAAABgR3younQ6Yq9twwX60epN0xEAAAAAAAAAO+RfTgfsh224QK+6qLqiOjzcAQAAAAAAALDtrm/zhPAvTYfstW24QK/6dPVr0xEAAAAAAAAAO+ANbeF4XttzgV71xOoD0xEAAAAAAAAAW+xI9ajqU9Mh+2FbLtCr/mP1rukIAAAAAAAAgC3279rS8by2a0Cv+j+mAwAAAAAAAAC22FZvstv0CPfa/EDAJ6q/Mx0CAAAAAAAAsGXeWz1lOmI/bdsF+tHqn01HAAAAAAAAAGyhX5oO2G/bdoFedW6bZ+4/YDoEAAAAAAAAYEt8snpMddN0yH46PB2wD26sjlTPnQ4BAAAAAAAA2BI/W31oOmK/beMFetXZ1RXVQ6dDAAAAAAAAAFbuY9Xj2xwyb7VtvECvuvnWXz84HQIAAAAAAACwcj9b/efpiIOwrRfoVWe1uUJ/2HQIAAAAAAAAwEp9uLq0OjodchC29QK9No8PuKH6oekQAAAAAAAAgJX6meqj0xEHZZsv0Mu70AEAAAAAAABO1keqv9uOXJ/Xdl+g1+Y96H9d/ch0CAAAAAAAAMDK/ET1yemIg7TtF+i1+e/4zupp0yEAAAAAAAAAK/E71QunIw7aLgzoVU+o/qQ6bToEAAAAAAAAYOFuqB5X/cV0yEHblUH5g9WbpiMAAAAAAAAAVuCX2sHxvHbnAr3qwdUnqm+ZDgEAAAAAAABYqL+qvqO6ZjpkwuHpgAN0XXVL9azpEAAAAAAAAICF+rnqfdMRU3bpAr3qXtVHqkdOhwAAAAAAAAAszAerv1cdmQ6ZsivvQL/N16ufanOJDgAAAAAAAMDGTdXL2+HxvHbrEe63ubK6oHridAgAAAAAAADAQvxi9ebpiGm79gj329y3+mj1sOkQAAAAAAAAgGGXV0+obpgOmbZrj3C/zdeq10xHAAAAAAAAAAw7Wr0y43m1uwN61e9Xb5mOAAAAAAAAABj0y9V7pyOWYlcf4X6bB7R5HMEDp0MAAAAAAAAADthnqu+qrpkOWYrD0wHDrq8+X71oOgQAAAAAAADgAN1S/dfVR6dDlmTXB/SqD1cXVZcMdwAAAAAAAAAclP+9ev10xNLs+iPcb3NO9cHq0dMhAAAAAAAAAPvs/dXTqpumQ5bGgH67J1bvrs6cDgEAAAAAAADYJ9dUT6iumA5ZIo9wv91fVUeqZ06HAAAAAAAAAOyTn6kum45YKhfod3Za9YfVD0yHAAAAAAAAAOyxt1QvnY5YMgP6N7uozfvQ7z/cAQAAAAAAALBXrqouqb44HbJkp00HLNCnq5dUNw93AAAAAAAAAOyF66sXZDy/R96Bftc+Vd1QPXs6BAAAAAAAAOAU/VT11umINTCgH9u7q++sHjcdAgAAAAAAAHCSXl/94nTEWngH+t07t3pP9V3TIQAAAAAAAAAn6F3VM6ubpkPWwoB+zx5Vvb+633QIAAAAAAAAwHG6qnpS9fnpkDU5bTpgBf68elV1y3QIAAAAAAAAwHG4ufpHGc9PmHegH5+PVddUz50OAQAAAAAAALgbt1T/sPq96ZA1MqAfv/dU96+ePB0CAAAAAAAAcAz/ffXL0xFr5R3oJ+a06terH5kOAQAAAAAAAPhbXl+9bjpizQzoJ+5e1WXVU6dDAAAAAAAAAG7176oXV0emQ9bMgH5yzq/+uPqO6RAAAAAAAABg572v+oHq+umQtTOgn7zHtBnRz5sOAQAAAAAAAHbWZ6un3Po7p+i06YAV+3ibn+K4ejoEAAAAAAAA2Emfq74/4/meMaCfmv9UPb+6ZjoEAAAAAAAA2Cn/pc14fsV0yDYxoJ+691XPq66dDgEAAAAAAAB2wtXVc6o/mw7ZNgb0vfHu6kXVN6ZDAAAAAAAAgK12TZunZH94OmQbGdD3zmVtRvQbpkMAAAAAAACArXRdm6djv286ZFsdng7YMldUV1YvrA4NtwAAAAAAAADb46bqH1Rvmw7ZZgb0vffh6vI21+j+fAEAAAAAAIBTdW2bx7a/dTpk27mS3j/Pr36zOns6BAAAAAAAAFitr1UvqN41HbILDOj76xnV71bnDncAAAAAAAAA6/OlNu88/8B0yK4woO+/76t+v7rPdAgAAAAAAACwGl+onlv96XTILjGgH4wnVX9QnTcdAgAAAAAAACze56pnVR+bDtk1p00H7IgPtHkvwdXTIQAAAAAAAMCiXVU9J+P5CAP6wXlPm0v0j0+HAAAAAAAAAIv0H9tsih+dDtlVBvSD9anqe6t3TocAAAAAAAAAi/J71dOrz0+H7DID+sG7us0jF351OgQAAAAAAABYhNdXP1xdNx2y6w5PB+yoI9Vv3frXzxjsAAAAAAAAAOYcrX6h+h+qW4ZbyIA+7R3V9dUzq0OzKQAAAAAAAMABuql6dfXPp0O4ndF2GZ5evaV68HQIAAAAAAAAsO+urH6k+uB0CHfmHejL8B+qJ1Xvnw4BAAAAAAAA9tXb2myDxvMFMqAvx2erv1+9YToEAAAAAAAA2Bf/a/W86ovTIdw170BfliPV71R/VT03/3wAAAAAAABgG1xX/WT1S9XR4RbuhnegL9f3V2+uHjQdAgAAAAAAAJy0K6uXVB+YDuGeeYT7cr29elybi3QAAAAAAABgff5F9fiM56vhAn0dXla9vjpnOgQAAAAAAAC4R1+uXl39+nQIJ8aAvh7fWf1Kdcl0CAAAAAAAAHBMf1T9wzaPbmdlDk8HcNy+WL2pOqN6an74AQAAAAAAAJbkSPU/Va9sc4HOChnQ1+Xm6rLqI9UzqnNHawAAAAAAAIDaXJv/WPXG6uhwC6fAgL5OH6t+uc0/P9foAAAAAAAAMOPG6n+ufrz6xHALe8Dwun5Prf7v6rHTIQAAAAAAALBD/qR6VfXh6RD2zmnTAZyyd1eXVP+0zU+4AAAAAAAAAPvn2urn2xy6Gs+3jAv07fKk6v+qnjAdAgAAAAAAAFvondVr2rxymS3kAn27fKDNiP4PqiuHWwAAAAAAAGBbXF49u3p6xvOtdng6gH1xefUvqpur76nOmM0BAAAAAACAVfpqm1cpv7K6YriFA2BA3143Ve+o3lQ9sLo4j+wHAAAAAACA43Gk+j+rF1dvr47O5nBQDKq747nVL1aXTIcAAAAAAADAgv1xm6vzP5oO4eB5B/ru+IPq0jbvZnj/cAsAAAAAAAAszduq762elvF8Z7lA313Pqv6X6knTIQAAAAAAADDo/6v+x4zm5AJ9l11WfU/1E9XHh1sAAAAAAADgoP1p9cI2h6fGcyoX6NzuadV/V/1Q/ncBAAAAAADAdjpS/Vb1zzKacxcMpfxtF1evq15WnT3cAgAAAAAAAHvhuuoNbYbzvxhuYcEM6BzLg6vXVj9TnT/cAgAAAAAAACfjqup/q/5V9dXZFNbAgM49uW/10uqn2rwzHQAAAAAAAJbsluqd1Rur36iun81hTQzonIiHVz9Rvaa6aDYFAAAAAAAA7uSK6v+p/nX1ueEWVsqAzsk4o3pBm6v059769wAAAAAAAHDQvlH9bvUvq7dWR2ZzWDsDOqfqXtWzqh+tXlSdO5sDAAAAAADAlvtq9TvVr1d/2GZEhz1hQGcv3XFM/+HqPrM5AAAAAAAAbIkvVL9d/V6bS/MbZnPYVgZ09st92zze/VnVs6tHzOYAAAAAAACwMp+oLmtzZf6H1fWzOewCAzoH5cHV328zqD+/ethsDgAAAAAAAAtzZfUHbUbzd7S5OocDZUBnwuHqidVTqydXT6kuHC0CAAAAAADgoF1RvffWX39cfbg6OlrEzjOgsxTf2u1j+pOrS6tzR4sAAAAAAADYK1+rPlC9p81g/r5cmLNABnSW7P7V46rH3vr7E6u/m2EdAAAAAABgqb5Yfai6vProHX7/8mQUHC8DOmtzRvXo6pHVw6sLbv39tr++sLrXWB0AAAAAAMB2u676THXVrb9u++vPtnkk+xXVkbE6OEUGdLbR+dUDb/39/Oq8O/z1bf/6fe7w7z+t+pYDbgQAuKPT2rzCBgDYHUerP52OAAB23leqW+7w919tc0H+pbv4dXX1X279z8DWMqADAMC8+7b5P6gAwO64uc2T9gAAgAU5bToAAADorOkAAODAnZ7v5gAAYHF8SAcAgHlnTgcAACN8BgAAgIUxoAMAwDwX6ACwm3wGAACAhTGgAwDAPF+eA8Bu8hkAAAAWxoAOAADzfHkOALvJZwAAAFgYAzoAAMzz5TkA7CbvQAcAgIUxoAMAwDwDOgDsJp8BAABgYQzoAAAwz/UZAOwmAzoAACyMAR0AAObdezoAABhxznQAAABwZwZ0AACY94DpAABgxAOnAwAAgDszoAMAwDwDOgDsJgM6AAAsjAEdAADmnT8dAACM8EN0AACwMAZ0AACY58tzANhNPgMAAMDCGNABAGCeL88BYDf5DAAAAAtjQAcAgHm+PAeA3eQd6AAAsDAGdAAAmGdAB4Dd5DMAAAAsjAEdAADm+fIcAHaTC3QAAFiYQ9MBAACw4w5XN+aHWwFgF11XnTsdAQAA3M6XdAAAMOuCfC4HgF11TvWg6QgAAOB2vqgDAIBZj5gOAABG+SwAAAALYkAHAIBZvjQHgN32yOkAAADgdgZ0AACYZUAHgN3mswAAACyIAR0AAGa5OgOA3WZABwCABTGgAwDALF+aA8Bu88N0AACwIAZ0AACYZUAHgN1mQAcAgAU5NB0AAAA77Kzq+vxgKwDsspure1c3TYcAAAC+qAMAgEkX5TM5AOy606uHT0cAAAAbvqwDAIA5Ht8OAFQ9ejoAAADYMKADAMCcx08HAACLcMl0AAAAsGFABwCAOQZ0AKDq4ukAAABgw4AOAABzfFkOAJTPBAAAsBiHpgMAAGBHnVldc+vvAMBuu7m6T/WN6RAAANh1LtABAGDGozOeAwAbp1ePnY4AAAAM6AAAMMWjWgGAO/LZAAAAFsCADgAAMx4/HQAALIoBHQAAFsCADgAAM3xJDgDckc8GAACwAAZ0AACY4QIdALgjnw0AAGABDOgAAHDwzq8ePh0BACzKg6pHTkcAAMCuM6ADAMDBe9p0AACwSD4jAADAMAM6AAAcvO+dDgAAFslnBAAAGGZABwCAg/fU6QAAYJEM6AAAMOzQdAAAAOyYs6uvVGdNhwAAi3NL9YDq6ukQAADYVS7QAQDgYD0h4zkAcNcOVU+ZjgAAgF1mQAcAgIPl0awAwN3xWQEAAAYZ0AEA4GD5UhwAuDs+KwAAwCDvQAcAgINzqPrrNu82BQC4K1+v7lfdOB0CAAC7yAU6AAAcnG/PeA4A3L17VZdORwAAwK4yoAMAwMF5+nQAALAKz5kOAACAXWVABwCAg/P86QAAYBV8ZgAAgCHegQ4AAAfjjOqL1X2nQwCAxTtSPbj60nQIAADsGhfoAABwMJ6c8RwAOD6Hq2dPRwAAwC4yoAMAwMF47nQAALAqPjsAAMAAAzoAAByM500HAACr8ry8fhEAAA6cAR0AAPbfg6pLpyMAgFV5SHXxdAQAAOwaAzoAAOy/5+SzNwBw4jzBBgAADpgv8QAAYP95hykAcDJ8hgAAgAPmPUoAALC/DlWfa/MYVgCAE3FDm1fBfG06BAAAdoULdAAA2F9PyXgOAJycs6oXTkcAAMAuMaADAMD+evF0AACwaj5LAADAAfIIdwAA2D+Hqiurh0+HAACr9Y02j3G/ZjoEAAB2gQt0AADYP9+d8RwAODVnVz84HQEAALvCgA4AAPvHI1cBgL3gMwUAABwQj3AHAID988nqEdMRAMDqXdvmMe5fnw4BAIBt5wIdAAD2x6UZzwGAvXFu9ZzpCAAA2AUGdAAA2B8etQoA7CWfLQAA4AB4hDsAAOyPT1SPno4AALbGV6oHVzdOhwAAwDZzgQ4AAHvvsRnPAYC9db/qmdMRAACw7QzoAACw9142HQAAbKWfmg4AAIBt5xHuAACwtw5Xn6kumA4BALbOjW0+Y3xpOgQAALaVC3QAANhbz8l4DgDsjzOrH5uOAACAbWZABwCAvfXy6QAAYKv95HQAAABsM49wBwCAvfOA6qo212EAAPvlsdXHpiMAAGAbuUAHAIC982MZzwGA/ecKHQAA9okLdAAA2Dvvr757OgIA2Hqfqy6sjkyHAADAtnGBDgAAe+PijOcAwMG4oHrWdAQAAGwjAzoAAOyNfzQdAADsFI9xBwCAfeAR7gAAcOpOr65scw0GAHAQrm/z2eOr0yEAALBNXKADAMCpe2HGcwDgYN27esV0BAAAbBsDOgAAnLrXTgcAADvp1XnCJAAA7CkDOgAAnJrvqH5gOgIA2EmPqZ4xHQEAANvEgA4AAKfmNbn8AgDmvGY6AAAAtokv+gAA4OSdU322ut90CACws26qLqo+N9wBAABbwQU6AACcvJdmPAcAZp1RvXw6AgAAtoULdAAAOHl/Wl0yHQEA7LzPVI+sjkyHAADA2rlABwCAk/M9Gc8BgGW4sHredAQAAGwDAzoAAJyc104HAADcwWumAwAAYBt4hDsAAJy486u/rO41HQIAcKuj1bdXnx7uAACAVXOBDgAAJ+7lGc8BgGU5rXrldAQAAKydC3QAADgxp1V/1ubCCwBgST7f5n3oN02HAADAWrlABwCAE/PsjOcAwDI9pPrh6QgAAFgzAzoAAJyY104HAADcjddMBwAAwJp5hDsAABy/b6v+ojo8HQIAcAy3VN9ZfWI6BAAA1sgFOgAAHL9XZTwHAJbtUPWPpyMAAGCtXKADAMDxObO6ss27RQEAluwr1UOr66dDAABgbVygAwDA8XlRxnMAYB3uV/3odAQAAKyRAR0AAI7PT08HAACcgFdNBwAAwBp5hDsAANyzx1YfyednAGBdLq0+NB0BAABr4gIdAADu2T/JeA4ArM9/Ox0AAABr40tAAAC4ew+pPl2dNdwBAHCibqwuqv5quAMAAFbDBToAANy9V2c8BwDW6czqNdMRAACwJi7QAQDg2M6urqweNB0CAHCSvlBdWH1jOgQAANbABToAABzbj2c8BwDW7YHVS6cjAABgLVygAwDAXTtUfbj6rukQAIBT9KHq0ukIAABYAxfoAABw174/4zkAsB0uqZ4+HQEAAGtgQAcAgLv2C9MBAAB76OemAwAAYA08wh0AAL7ZY6rL83kZANgeR6pHV5+cDgEAgCVzgQ4AAN/sv8l4DgBsl8PV66YjAABg6XwpCAAAd3Z+9Znq3tMhAAB77GvVw2/9HQAAuAsu0AEA4M5elfEcANhO961eNh0BAABL5gIdAABud0b1qeqh0yEAAPvkz6vHVEenQwAAYIlcoAMAwO1ekvEcANhuj6qeNx0BAABLZUAHAIDb/ZPpAACAA/Bz0wEAALBUHuEOAAAb31v90XQEAMABubj6z9MRAACwNC7QAQBg4xemAwBeJZ1wAAATqUlEQVQADtDrpgMAAGCJXKADAEB9W3VFdfp0CADAAbm2zWegq6dDAABgSVygAwBA/dOM5wDAbjm3+tnpCAAAWBoX6AAA7LoLqk9WZ02HAAAcsKvbXKFfOx0CAABL4QIdAIBd9/MZzwGA3XRe9arpCAAAWBIX6AAA7LLzqyurc6ZDAACGfLb69urG6RAAAFgCF+gAAOyy12U8BwB228OqH5+OAACApXCBDgDArjq3zfX5edMhAADDPl49rjo6HQIAANNcoAMAsKt+OuM5AEDVY6oXTEcAAMASuEAHAGAXnVl9snrodAgAwEK8r3rydAQAAExzgQ4AwC56WcZzAIA7+p7q+6YjAABg2uHpAAAAOGCHq7fk8e0AAH/bg6pfmY4AAIBJLtABANg1L6m+fToCAGCBfqi6ZDoCAAAmuUAHAGCXHKr+TfWQ6RAAgIU6t/rt6QgAAJhyaDoAAAAO0POr35+OAABYsJurR1WfHu4AAIARLtABANglb6wunI4AAFiw09p8Z/j/TocAAMAEF+gAAOyK76veOR0BALAC11cXVV8Y7gAAgAPnAh0AgF3xz9s8jhQAgLt3RvX16h3DHQAAcOBcoAMAsAsuqT6Yz78AAMfri22u0K8b7gAAgAPlAh0AgF3whurR0xEAACty7zaPcn/XdAgAABwkFzgAAGw77z4HADg5X6kecevvAACwE1ygAwCw7d5YPXI6AgBghc5uc4XuhxEBANgZLtABANhmz6jePh0BALBiX21zhf7l6RAAADgILtABANhm/6a6cDoCAGDFzq6+Xv2H6RAAADgILtABANhWz67eOh0BALAFXKEDALAzXKADALCNDlVvri6YDgEA2AJnVzdU7xjuAACAfecCHQCAbfSC6nenIwAAtsjX2lyhXz0dAgAA+8kFOgAA2+a26/NvnQ4BANgiZ1U3VW+fDgEAgP3kAh0AgG3zI9VvTkcAAGyha6tHVl+YDgEAgP3iAh0AgG1yWvVr1YOmQwAAttCZ1c3V26ZDAABgv7hABwBgm7y0+tXpCACALXZdmyv0v54OAQCA/eACHQCAbXF69RvV+dMhAABb7MzqaHXZdAgAAOwHF+gAAGyLn6z+1XQEAMAOcIUOAMDWcoEOAMA2OL16c67PAQAOgnehAwCwtVygAwCwDV5RvXE6AgBgh1xbPaL64nQIAADsJRfoAACs3VnVb1XfMh0CALBDzqzOqP5gOgQAAPbSadMBAABwil5dPXw6AgBgB722eth0BAAA7CUX6AAArNm51W9W50yHAADsoNPbPA3o30+HAADAXnGBDgDAmr2ueuB0BADADvvp6qLpCAAA2Csu0AEAWKv7Vr9W3Xs6BABghx1u83ns96ZDAABgL7hABwBgrX6hOn86AgCAXlE9cjoCAAD2ggt0AADW6D7Vr1b3mg4BAKDDbT6XuUIHAGD1XKADALBGP1udNx0BAMDfeEXehQ4AwBZwgQ4AwNqcW70l7z4HAFiSw9UZ1b+fDgEAgFPhAh0AgLX5x3n3OQDAEr2yumA6AgAAToULdAAA1uRe1a+1uUIHAGBZTq+OVJdNhwAAwMlygQ4AwJq8vHrIdAQAAMf0uuoB0xEAAHCyXKADALAWh6tfqc6bDgEA4JjOrL5WvWs6BAAATsah6QAAADhOL6l+fToCAIB79IXq26qvT4cAAMCJcoEOAMBavKm6YDoCAIB7dE51VfWB6RAAADhRLtABAFiDp1Tvno4AAOC4/Xn1mOrodAgAAJyI06YDAADgOPz8dAAAACfkUdXzpiMAAOBEuUAHAGDpLqz+ojp9OgQAgBPy1uq50xEAAHAiXKADALB0P5PxHABgjZ5TXTwdAQAAJ+LwdAAAANyNs6p/Xd17OgQAgJP2+9MBAABwvFygAwCwZC+uHjAdAQDASXtZdd/pCAAAOF4GdAAAluxV0wEAAJySc6qXTkcAAMDxOjQdAAAAx/Co6hP5zAoAsHZ/Uv296QgAADgeLtABAFiqV2Q8BwDYBt9dXTodAQAAx8OADgDAEh1u875MAAC2w09OBwAAwPFw0QMAwBL9QPW26QgAAPbM1dW3VjdOhwAAwN1xgQ4AwBK9dDoAAIA9dV71g9MRAABwTwzoAAAszenVi6YjAADYcz82HQAAAPfEgA4AwNJ8f/WA6QgAAPbcf1WdMx0BAAB3x4AOAMDS/Oh0AAAA++KcPMYdAICFM6ADALA0z58OAABg37x4OgAAAO7OoekAAAC4g8dVH5mOAABg33ylemB183QIAADcFRfoAAAsybOmAwAA2Ff3q757OgIAAI7FgA4AwJI8czoAAIB995zpAAAAOBYDOgAAS3G4+r7pCAAA9p0fmgQAYLG8Ax0AgKV4TPWx6QgAAPbdTdV9qhumQwAA4G9zgQ4AwFJcPB0AAMCBOKN63HQEAADcFQM6AABL8fjpAAAADowfngQAYJEM6AAALIUBHQBgdxjQAQBYJAM6AABLcdH/397dhFpeFnAc/86omWmWSS6K1F5QyaS0DApNMCyKIgpcRElFURBBy1Yt2hRREC1LKiwKNCh6IRA3mWZqWZovUakz4yCSOmPqiDqjY4tzXVj3Nm/3nud/zv184HDhrr7LP//feZ4zOgAAgLk5c3QAAACsxoAOAMBUvGJ0AAAAc3PK6AAAAFiNAR0AgKk4aXQAAABzc/LoAAAAWI0BHQCAKTi6On50BAAAc+PLkwAATJIBHQCAKdg/OgAAgLnyXhIAgEnyoAoAwBTsr54cHQEAwNzsHR0AAACrMaADADAVe0YHAAAwNwZ0AAAmyYAOAMBUPDE6AACAufHsBwDAJBnQAQCYCifQAQA2j92jAwAAYDUGdAAApsKADgCweewaHQAAAKsxoAMAMBWPjA4AAGBuHhodAAAAqzGgAwAwFTtGBwAAMDee/QAAmCQDOgAAU7FzdAAAAHNz3+gAAABYjQEdAICp2D46AACAudk+OgAAAFZjQAcAYCruGB0AAMDcePYDAGCStowOAACAFS+q9lTHjA4BAGBDPVy9cnQEAACsxgl0AACmYm/1z9ERAABsuDtHBwAAwFoM6AAATMkNowMAANhwvx8dAAAAazGgAwAwJTeODgAAYMP9YXQAAACsxYAOAMCUeJkKALDc9udLkwAATJgBHQCAKbmr2jE6AgCADXNL9fDoCAAAWIsBHQCAqbl6dAAAABvGsx4AAJNmQAcAYGq8VAUAWF6e9QAAmLQtowMAAOC/vLj6V3Xi6BAAANbVzuq06rnRIQAAsBYn0AEAmJqnqt+MjgAAYN39POM5AAATZ0AHAGCKfjo6AACAdXfV6AAAADgQV7gDADBFR1fbq1cP7gAAYH3cVr1ldAQAAByIE+gAAEzRM9X3R0cAALBuPNsBALAQnEAHAGCqTqvubnYaHQCAxfVEdWq1e3QIAAAciBPoAABM1Y7qytERAAAcscszngMAsCCcQAcAYMrOr24eHQEAwGF7tjqzumd0CAAAHAwn0AEAmLI/Vr8eHQEAwGG7IuM5AAALxAl0AACm7pzq1nz5EwBg0Tzd7PT5jtEhAABwsLyEBABg6m6vfjE6AgCAQ3ZFxnMAABaME+gAACyCU6u/VS8ZHQIAwEHZVZ1R7R4dAgAAh+Ko0QEAAHAQHq2OrS4aHQIAwEH5UnXt6AgAADhUTqADALAoTqjuqE4bHQIAwP/11+pt1b7RIQAAcKj8BjoAAItiT/XJ6rnBHQAArG1fdVnGcwAAFpQr3AEAWCTbq9dU5w3uAABgdd+sfjw6AgAADpcr3AEAWDTHV7dUZ44OAQDgBW6qLqieGR0CAACHy4AOAMAiemt1Q/Wi0SEAAFT1eHVudc/oEAAAOBKucAcAYBE9sPL34qEVAAA874vVNaMjAADgSBnQAQBYVNdVb6zOHh0CALDJfaf6yugIAABYD65wBwBgkZ1Q3ZgRHQBglOub3Qq0b3QIAACsBwM6AACL7oxmp9FPGR0CALDJbKsurO4fHQIAAOtl6+gAAAA4Qv9odupp1+gQAIBN5L7qooznAAAsGQM6AADL4M7q/dWe0SEAAJvAg9Ul1c7RIQAAsN4M6AAALIubqw9VT48OAQBYYo9XH2h2CxAAACydo0YHAADAOtpW3Vt9uNoyuAUAYNnsrS6trh0dAgAAG8VLRQAAltEHqyur40aHAAAsiUeb3fZjPAcAYKkZ0AEAWFbvqn5ZvWx0CADAgnuwel/159EhAACw0QzoAAAsszdVV1evGh0CALCg7qne0+xncgAAYOltHR0AAAAb6I7qguru0SEAAAvoturCjOcAAGwiBnQAAJbdturd1V9GhwAALJDfVZdUD4wOAQCAeTKgAwCwGdxXvaO6fHQIAMDEPVd9vbq4emhwCwAAzN1RowMAAGBOnq1+Ve1q9kL46LE5AACT83j16epbzYZ0AADYdLaMDgAAgAHOqn5SnTs6BABgIq6rPlbtHB0CAAAjOYEOAMBm9HD1o+qE6u35YikAsHntq75afaZ6ZHALAAAM50UhAACb3QXV96ozRocAAMzZrdWnVv4CAADV1tEBAAAw2PXV2dXnqocGtwAAzMMD1Seq8zKeAwDAC7jCHQAAan91S/XD6vjqzXlWBgCWz5PVt6uPVjcNbgEAgElyhTsAAPyv06svV5dVx4xNAQA4Yk9Vl1dfa3b6HAAAWIMBHQAA1nZK9fnqC9XJg1sAAA7V/dU3qh9Ujw1uAQCAhWBABwCAAzux+nj12WbXuwMATNlN1XerK6snBrcAAMBCMaADAMChOb+6tPpI9frBLQAAz7ur+ll1VXX74BYAAFhYBnQAADh851TvrS6pLqyOG5sDAGwie6rfVtdUV1d/H1oDAABLwoAOAADr49hmp9Mvqt5ZnVWdXm0d2AQALIdnqu3NTplfX11X/Wnl/wAAwDoyoAMAwMY5tnpD9brqtc0G9ZOql698XjqsDACYmseqf698dlfbVj73rnz2jksDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYbv8BjmoGYI3x8sUAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/imgs/email.png":
/*!*******************************!*\
  !*** ./public/imgs/email.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAZA5JREFUeNrt3Xe4JFWZP/DvOdU33wnkIQw5pwGGyYGLtIoEkbDqYloV867i6srq/nRx3ZXVDVwxsK6uizmsgpKFBq4zw8wQFRBRMCDJERgYJva9t6vO74+q6qmu27e7qrur663u73ken3m8VH+qz3tO1Xu6wjkACwsLCwsLS9cV1SyQz4+okGMKhTFDjx49evTo0ZPr5RrdsbdzK/y3QmHMoUePHj169OjJ9hoaAHijDguhkQcAmx49evTo0aMn34s9APB2nqu280YuZdCjR48ePXr02u/FGgB4O++tsvPJJipDjx49evTo0WujB8QYAHg776uy84kmKkOPHj169OjRa6Pnm5EGAPn8iAbQX2Xn4w1Whh49evTo0aPXfk8B0ABM3QGAt/OBKjsvNvIEIz169OjRo0cvFc9/gNAAdW4BBHYefN3AAbCjicoMwh190KNHjx49evTa4/kPEAL1BgDexsHLDsr70PYmKjOMqSMZevTo0aNHj15ynv8AofH+B0x3C6DGAwdbW1wZevTo0aNHj16yXm/AAQAUCmNTBwDTvGrgoPUjGUnBoUePHj169DrR60fol3+hMGYDoVsANSYZaOYehvTg0KNHjx49ep3oDQQc/9/yjIHhKwDVphds5ulF6cGhR48ePXr0OtEbDDj+v6Xgq4O5wAeqJf9xQZWhR48ePXr06EXzAPf2ve9NmTQo531AhYxmZizKSnDo0aNHjx69TvWCv/yrThrkXwEI77zRuYqzFBx69OjRo0ev073idPk8/AyAQeOrFGU1OPTo0aNHj16neXUnDdKh/8/kT48ePXr06GXfq/vqfnlawEZ2nPHg0KNHjx49el3rqXobZKky9OjRo0ePHr1oXsMDAImVoUePHj169OhFKw0NAKRWhh49evTo0aMXrcQeAEiuDD169OjRo0cvWok1AJBeGXr06NGjR49etBJ5ACC9MvTo0aNHjx69yKaKNACQXhl69OjRo0ePXiRPwZ0DyOgIG2u4qwpJrQw9evTo0aNHr76n4K76C2DqTIDVdj4Q2k5SZejRo0ePHj169T0Fd/K/sqfrbNwvuDL06NGjR48evfqeAtAb9nI1Nu4TXBl69OjRo0ePXjSvN+AAAAqFsakDgGlGCg4iLCyQ4eDQo0ePHj16nej1e4af/E2hMGYDoeWAq90j8D60Q1Bl6NGjR48ePXr1vYGA4/9r+9uErwBYVXZeFFQZevTo0aNHj159bzDg+P+WCoWx8m2AXOAD1ZL/uKDK0KNHjx49evSieYB7+973JoLJH/AGAN6l/2CpunGHBYcePXr06NHrVC/4y3+8Wj73rwCEdz7J5E+PHj169Ohl3itOl8/DzwAYADaTPz169OjRo5dpz0GdB/jDEwEx+dOjR48ePXrZ9+q+uu9fATCN7DjjwaFHjx49evS61lP1NshSZejRo0ePHj160byGBwASK0OPHj169OjRi1YaGgBIrQw9evTo0aNHL1qJPQCQXBl69OjRo0ePXrQSawAgvTL06NGjR48evWgl8gBAemXo0aNHjx49epFNFWkAIL0y9OjRo0ePHr1InoI7B5DRETbWcFcVkloZevTo0aNHj159T8Fd9RfA1JkAq+18ILSdpMrQo0ePHj169Op7Cu7kf2VP19m4X3Bl6NGjR48ePXr1PQWgN+zlamzcJ7gy9OjRo0ePHr1oXm/AAQAUCmNTBwDTjBQcRFhYIMPBoUePHj169DrR6/cMP/mbQmHMBkLLAVe7R+B9aIegytCjR48ePXr06nsDAcf/1/a3CV8BsKrsvCioMvTo0aNHjx69+t5gwPH/LRUKY+XbALnAB6ol/3FBlaFHjx49evToRfMA9/a9700Ekz/gDQC8S//BUnXjDgsOPXr06NGj16le8Jf/eLV87l8BCO98ksmfHj169OjRy7xXnC6fh58BMABsJn969OjRo0cv056DOg/whycCYvKnR48ePXr0su/VfXXfvwJgGtlxxoNDjx49evToda2n6m2QpcrQo0ePHj169KJ5DQ8AJFaGHj169OjRoxetNDQAkFoZevTo0aNHj160EnsAILky9OjRo0ePHr1oJdYAQHpl6NGjR48ePXrRSuQBgPTK0KNHjx49evQimyrSAEB6ZejRo0ePHj16kTwFdw4goyNsrOGuKiS1MvTo0aNHjx69+p6Cu+ovgKkzAVbb+UBoO0mVoUePHj169OjV9xTcyf/Knq6zcb/gytCjR48ePXr06nsKQG/Yy9XYuE9wZejRo0ePHj160bzegAMAKBTGpg4AphkpOIiwsECGg0OPHj169Oh1otfvGX7yN4XCmA2ElgOudo/A+9AOQZWhR48ePXr06NX3BgKO/6/tbxO+AmBV2XlRUGXo0aNHjx49evW9wYDj/1sqFMbKtwFygQ9US/7jgipDjx49evTo0YvmAe7te9+bCCZ/wBsAeJf+g6Xqxh0WHHr06NGjR69TveAv//Fq+VwFPuTPDgSELhNELUNDQzOGhwf3M8b0GePajuOYl17avL1UKsWuTC6X07NmzRzUWpeDQ48ePXr06HWZ5wB4GsD4dF6VwYR/v3/aZ/jCAwAFwI6R/Pu9/52vlPpby9JHAcHphQ1s24ExsccSUErBsvyvRY8ePXr06HW1VwRQAPBDAGMAXvL+Z6a5kmCjztt74YcAoyR/DeANAN4HYAEALSQ49OjRo0ePXqd6/QDO8v7nl19orS8FcMcUMMKr+/4VABXxV//BAL4DYJHA4NCjR48ePXpd5yml18ycOeNDJ554/G8Q4xkCVX8X5XI8gNsA7J614NCjR48ePXod7k3kctaly5cv+UzUBwijDgB2AfAQgH0zHBx69OjRo0ev071vAHg7gFI9R9fbAEAPgKvA5E+PHj169OhJ994M4Adwc3fNYtX578cBuB7ASAcFhx49evTo0etk7ygAR8B9Y2DaUm8A8C0AywVUhh49evTo0aMX3TsGwCMAHp7WrLG/IwH8yt9GQGXo0aNHjx49etG9R+FeyZ8I/4d8fkTlanzwnSgnf0ipDD169OjRo0cvmnc4gH8H8H7/D97U/xqAqXUF4Dfeh2FZFpQSURl69OjRo0ePXnRvAsBcAM96yd+CO1eAme4tgJWoSP7B/5R6ZejRo0ePHj160UovgHO95J8LgtMNAM4A/Mv+wSKiMvTo0aNHjx696N4CuAOBCnC6AcCBWouuDD169OjRo0cvQtFa7xoCUSiMTR0A5PMjyrKs3uDfjIGYytCjR48ePXr0ohXL0lCqEiwUxmwgtBpg4B5BRXEcG43sW3pw6NGjR48evc70AK2nTPVj4C4TDGBqsrcq9+7uvJEiPzj06NGjR49eZ3rubfyKYgCUgiv/lrfI50dCyR9M/vTo0aNHj14GveDbex4zEUz+gDcA8C79VxTHYfKnR48ePXr0su45jm2Hkz+w8xZAxdZ2gz/9sxocevTo0aNHr/O82lfyw88AVDwgIK8y9OjRo0ePHr16nvv2Xu10Hn5KoOplAgmVoUePHj169OhF8xyn/m95/wqAKRTGeNmfHj169OjR6wiv/uc14M4IFHvPmQ8OPXr06NGj172ejrRVRipDjx49evTo0YtWGhoASK0MPXr06NGjRy9aiT0AkFwZevTo0aNHj160EmsAIL0y9OjRo0ePHr1oJfIAQHpl6NGjR48ePXrRSj4/onJRNlQKoitDjx49evTo0atfvKn/NQATaQDgLikoszINeJMAHqztWZZSwRmVDGzbsRv/fvTo0aNHT7JnjDkWQC7j+a1m8ZK/BcAAU6cCnlIsy4IK7ltQZRr0egDcAuBjVYKjAQxPAYGtjUyURI8ePXr05HurV6/7R9u2T+iA/FarvgqByf+AOgMAd+fBIqcyTXofBTAI4OJAcDLTWenRo0ePXvNeqVTS69bd/a+27byrg/JbFQ8A0OvFzAemvwWgteTKtMT7AIABAO/2RkbiOys9evTo0WuNNz4+bt19932X27bzFgH5KDEPALS2/Pv4ZaBQGDNT3gLI50eUFfrpbwzEVKbF3juVUl/funXbLAjvrPTo0aNHrzXetm3bc3fddd+V3ZD8LUuHbuPDFApjNhB6DTB0j6BcHMcWUZmEvDfdf/8DX9u06aWeMiiss9KjR48evdZ4mza91Hvffb/4muM4rxOYj1rouc/wVXowAMrLBIavAIS2NrBtO9KqQtkLzk7PcZzXPPjgL7/57LPP9UBYZ6VHjx49eq3xnn9+Y/+DD/7yW47jnCM1H7XKc9/eqygGQCm4+F/5134+PzJlqGDbDa0QnInghD3HcU5/6KFffdcYcw6A7XG8rHR+evTo0etW75lnNgw99tjvvmOMGZGej1rjofzj3ft3Irzyr/YCpMKI43RP8g94eQA3we18kUpWOj89evTodav3xBNPzXzssd/9sHuSf6XnOLYdTv7AzlsAFVvbDf70z2pwQt5KALcCmF3Py0rnp0ePHr1u9X7/+8dn/+EPf7zGGLM0g/moSc9/gL/6Z6a+6A+UYu85s8GZ1lsM4HYAu0/nZaXz06NHj163eo899rvdn3zy6euMMSdnOB815Llv79k1PxceAFS9TCChMil4JwIYAzAn/B+y0vnp0aNHr1u9Rx55dM4zz2y4wRhzfAfko9ie49h1P1ueFrCRQGc5OBG9YwCsAnAagCeB7HR+evTo0etW75e/fGTuxo0bf2IMDumgfBTTq/95DbgzAsXec+aDE9k7DO4g4KCsdH569OjR61bvwQcfPmjjxo03dnfyj+bpSFtlpDIJegcqpVbff/8DJ0J456dHjx69bvV+8YuHDn/xxRdvMgb7C8ofYr2GBgBSK5Owt+/mzVtuvP/+B44ug8I6Pz169Oh1q3f//Q8cu2nTSzcag70F5g+RXuwBgOTKtMHbc/PmLdffc8/98yCs89OjR49et3r33vvzEzdv3nI9gD0E5w9xXqwBgPTKtMnbdfPmLdcWCmOL4npZOZjo0aNHLyvePffcv3jr1m3XAtglA/lDjAfEGABIr0ybvVkAbgEwEtXLysFEjx49elnx7r77vpXbtm2/BsDMDOWP1D0vhioXZUN3VSG5lUnJGwZwI4BzAfy0TqAzcTDRo0ePXla8u+669+U7dhS/BaA/g/kjNc+b+l8DMJGuALirCsmsTMreAIBrAZxTI9iZOJjo0aNHLyveunX3nLVjR/E7YPKPGz8Fd9VfABFuAViWBRXct6DKCPF6AfwQwGurBDsTBxM9evToZcVbt+7u88fHx78OoLcD8kfbPC/554JgzQGAv6SgxMoI83IAvgPgLYFgZ+JgokePHr2seGvX3vXG8fGJrwLIZSh/TAD4VrrfD4D7Y7UCnHYAoHWqyfUaAE4LvVZ/v2rFAvC/AN6TlYOJHj169LLi3XnnXe+YmJj8AgAt4Hwf1RsHcB6An6T1/QBAayt8Hx+FwtjUAUA+P6Ks0E9/d1Whtgb7OwDegCorEwpN/gFOfWnNmnWXQPjBRI8ePXpZ8dasWf/Xk5OT/+66Ys739bztAM4CcENa3w9wr+RX3saHKRTGbCB0CyBwj6CiOI6dRrC/B/e++kRSwUnKK5XsT69Zs+7DZVDYwUSPHj16WfHWrFn3kVKp9C8+J+18P423BcCrABTS+37uM3yhH/4GQHmZwPAVgNDWBrZtR1pVKKHKXAP38sl4VpK/75VK9v9bvXrtxyHsYKJHjx69rHirV6/7RKlk/4PPST3fh7yXALwC7iJyqX0/9+29imIAlIKL/5UHAPn8yJShgm3HbrckKnOD1vrVlmXtyEry972JickPFQpj/xHXy8rBSY8ePXrJJf+1n7Ft+0M+J/1873kbAbwMwPq0v1/wsr/HTBRCK/9qL+AqjDiOiOSPfH5Ev+xlK9cPDg5cAGBrq4LTxsHExQD+K7RBzfoiAwcnPXr06CXhlUqlGatXr/2cbTvv9rmMnO+fBXAqgPulfT/Hse1w8gd2XgGo2Npu8Kd/EskfXudauHD+nUNDg+cC2JyRzhDc9F0ArkJgAoZ69a0ABR2c9OjRo5eUt3Xrtllr1979X7bt/JXPZeR8/wyAUwA8JOv7+Q/wV//M1Bf9qzx5n0ZlqnWuBQtOutsYc5p3mSXV79eA92a4bzdUnX45CwcnPXr06CXlvfjiptn33//A1xzHeb3PZST5PwFgJYBfS/p+7tt7ds3PhQcAVS8TtLsyWmuFaTqXbdv3wr3M8mxa368J77UAfgSgL/jHLByc9OjRo5eU9+yzz+360EMPf8txnNf4XEaS/+8ArADwO2nfz3Hsup/1f42aRhouqcr09/f1o3bnegju5ZbbAOwjIdgxvFfDnRTiXAA7snBw0qNHj15S3jPP/Gn3xx77/XeNMS/zuYwk/18DOA3AMzK/X/3Pa8CdESj2nhOsjFIqSuf6NdzLLk/ICHYs75UAbhocHJwJ4QcnPXr06CXl/fGPT+712GO/vzqDyd//ESo0+UfzdKStUqtM3c417eUXicEOeadMTk4U/vCHP86KUd9pSxYOdnr06NHzvd/+9vf7Pv74Ez8xxizzOUHn51re/Yh5G1prrSTmo4YGAEKSv1+mPICRgeQPy9IwBgueeOKp6x577Pe7xqjvlJKFg50ePXr0fO83v3nsgKef/tP1xpgFPift/DyNtx7uZf/ID6Ln8yPava0tLx/lYm3d4p1P5xkXitO5/FcwCkqp47KQ/H3PGDPv6aefuf5Pf9qQn5iY2BzXy8LBTo8ePXq+96tf/frg557beJ0x5kifk3p+DnmrAZwJYEvc+FXe1pZT31hXANoV7GJxvNhA53q2r6/vNMuyHshK8t/p2UdPTEyMAdgvjpeFg50ePXr0fO+hh351+HPPPX9TBpN/AcDpaCD5V4Jy6gvEGAC0M9iO48QG8/kRvWLFkvEDDph7tlLqniS/X0Le4XDnjj4oan0h/GCnR48ePd974IGHjnnhhRd+agwO9bmMnJ9vAHA2gO3NxU9Ofb3vqCLdAnBXFZJ7WT0Y7IMOOmBzLpc79/e//8P3SyVnmYTvF8M7CO4g4DQAj0apbwUo6GCnR48ePd+7//4HTtyyZct1xmBvn5OSP+p41wB4PQKr0jYSP2OMkVJfb+p/DcBEugLgriokP/n7f5s7d98tfX19pxtjbk37+zXg7Qd3EHBs1PpC2MFOjx49er53332/WLB585YbM5j8v4vQkvSNxq9YHC9KqK+X/MtT0tcdAFiWVbGqkKTGq9VZt27dthXuZZsb0vp+TXh7ARgDcGLU+ko52OnRo0fP9+655/5lW7ZsvRHAnj4nJX/U8a4C8EbEmBq/Vvwaua2dUPLPBcGaAwB358Eip/EidtZxAOcBuKbd368F3m4AbgewOEZ9Wx0/evTo0WvIu/vu+162bdv26wHs6nNS8kcd778AvA1A5Hq3On6try8AoDcMTjsA0FpUMqwoMYM9AfcyznfbF+yWebMB3Kq1PjVGfVsdP3r06NGL5d11172nb9++48cAZvqcgPNpFG8UwHu8+qcSv0Se9tdW+D4+CoWxqQOAfH5EWaGf/u6qQjIar8Fgl+Bezrkq6e+XgDestb7hrrvuPS1GfVsdP3r06NGL5K1ff885O3YUfwRgyOcEnU9reZcB+GCa8Usi+bvT61f8yRQKYzYQugUQuEdQURzHFtF4TQbbgXtZ57+S+n7JeRjYsaP43fXr7zkjRn1bHT969OjRq+mtW3f3a4vF8e8B6Pc5eefTqt4/AvhYmvFL4rK/NfWHvwFQXiYwnOxDW7s7b6QIS/7B7d8DoKiUujgbyb/s9RWLxa/ffvuqNzmO8/2U4kePHj16Vb21a+9608TE5FdRziuiz6dB7yMA/i3N+CVRX/c2fkUxAErBxf/KW+TzI1OGCh2W/IPeh3p7e/4jQ8nf93ocx/k2gDenHD969OjRK3t33rn+nRMTk/+DbCV/Y4x5Pzow+Ycv+3vMRHjlX+1VSIURx+nY5K8BDK9YsfRTuZx1WauC3cbBhAX3WYZ3pRk/evTo0cvnR/SaNevfPzlZ+hLK75dn4nzqGGPeBeDzacavXfV1HNsOJ39g5xWAiq3tBn/6ZyX5+97y5Us+Y1nWxzPQWcOegvssw8Vpxo8ePXrd7a1Zs+6SUql0+U4zE8nfNsa8FcBX0oxfm1bV9bzqn5n6on+MiQ+SrEy7Ov+KFUs+7V0GivUlhTxAeDmmeXAlCycPevToZddbvXrdpaWS/ekgl4HkXzLGXAjgG2nGrz2r6gK2bdf8XHgAUPUyQbsro7VWaG/n/zzcS+qRbCHJ3y//AuCfY9a31fGjR49eF3mrV6/9rG3bHw9yGUj+E8aYvwDwgzTj18bL/nU/678FYBqpSFKV6e/v60f7O/9XABQB/C8CcyW3o74t8P4BwACAD2Xh5EGPHr3seqtWrb3CcZz3BbkMJP+iMeY8ADelGb/25o/6n9eAOyNQ7D0nWBmlVFqd/5sALsQ0t0GEJn+//K1S6spSqTQjRn1bHT969Oh1qDdv3rHWqlVrv5LB5L/NGHMmuir5R/N0pK1Sq0wqnf8HAC5AaAUoiY1XxXv32rV3f2nbtu1WGRRy8qBHj152vblz9+155JHffMNxnLcFOWHnv2reZmPM6XDXVUktflprJTF/NDQA6ODk75efADgHwI721bc1nuM4F9533y++8tJLm3WK8aNHj16HeHPm7NW7YcOz33ccc2GQk3j+C3kvGmNeDmBNmvHL50e0e1tbXv7Ixdq6xTufzjMulHbnvxnAWUqpay1LD0lsvOk8x7HPu/fen+e8B14ir2Xd4vjRo0cv497s2bMGNm584YfGmDOCnOTzn+c97yX/X6QZP9+rvK0tJ36xrgC0q/GKxfGihM6fz4+MDQ8PnQeoLUnWNyHv1QCuhftwYFrxo0ePXka9GTOGh7Zt235dBpP/BmPMCIQk/0pPTvyAGAOAdiYvx3Fig0k13qJFJ981PDz0GgCbJDVeRO+VAG7w4pJK/OjRo5c9b3BwcGaxOH6TMea0IJeB899TxphTADycZvyykPzz+REVaQDgriok9x540o138skn3jc8PHSWd1kp9frG9E4F8FMAs9KKHz169LLjDQz07zI5OXGrMWZFkJNyvq/hPW6MWQng0TTjV80zxhgp8cvnR5S/9k+kAYDW4XWC5HSGdh1MJ5984jrvstKGNOvboLcUwG0AdksrfvTo0ZPv9fX17TE5WbrDGCwMclLO9zW8x7zk/4c04zedVyyOFyXEz1v3pzzPTd0BgGVZFasKSeoMKRxMDwM4BcBTadS3SW8+gDsA7JVi/OjRoyfU6+3t3du27TEA84KclPN9De8R77L/k2nGr5bXyG3thJJ/LgjWHAC4Ow8WOZ0hxYPpUQArATzezvq2yDsOwM8A7Cv9ZESPHr32eT09Pfs7jrMKwNFBTsr5vob3gJf8/5Rm/ORPGgQA6A2D0w4AtBaXvMpFQOP9Ae4g4LF21LfF3hFKqVUPPPDLo1OMHz169IR4uVzuEGPMKgCHBjkh56ta3r3GmFMBPJdm/KQnfwDQ2grfx0ehMDZ1AJDPjygr9NPfXVVIRmcQ1HhPwr0d8EiS9U3IO3jTpk03P/DALw9JMX706NFL2cvlckcAWAXggCAn7HxVzVvrvaHwYprxy0Lyd6fXr/iTKRTGbCB0CyBwj6CiOI4tojMIbLw/wR0EPJBEfZP0jMG+L7646cb77vvFESnGjx49eil5lmX5twT3CXISz1chb5Ux5pUANqcZP+nJ3317b8oPfwOgvExg+ApAaGsD27YjrSqUdGUEN95zAE5VSt2bleQf8PbatOmlGwqFsXlxPcHtQY8evTrFsqz5SqkxBB4KzsD5Crbt3OrN7b81zfjJT/7Ke3uvohgApeDif+UBgP9eYHBr225oheBuSv6+99LBBx/4GqX0Xa2ob5uvJOwOd6GMRSnGjx49em3yLEsvVUrdBmDXIJeB89X1xpiz4a3Rklb8spD8w5f9PWYivPKv9iqkwojjMPnH8Q466ICtBx984PlKqTUZOZiC3mwAt8J9sDGV+NGjRy95T2t9qlL6FlRMDJaJ89WPjDHnARhPM35ZSf5hz3FsO5z8gZ1XACq2thv86d+tyd/35s7dd+thhx18vm07twg/mKp5M+Cul/3ytOJHjx695Dyt9ela6xsADAW5DCT/7xhjXgdgMs34ZTP5+w/wV//M1Bf9gVLsPSdQGemNN523zz57Px9YiCe1+DXoDQK4DsBZacWPHj16iST/c7TWP0bF4mCZSP5fM8a8CYEH19KIXxaTv/v2Xu2whQcAVS8TtLsyWmsFwY0XwRsHcAGAH6YRvya9PgBXA/iLFONHjx691iX/12mt/g/usV3mMpD8rzTGXAQgVp2lt0cbL/vX/az/yp9ppCJJVaa/v68fQhsvhjcJ4PUAvg7gDe2MXwu8HgDfBdCfz498O6X40aNHr0lPa/UWrdX/AMoKchlI/v9pjPlQ2vHLavKvddk/WDTgzggUe88JVkYpJbLxGvBsAG8G8D/tjF+LPEsp9fU1a9b/dYrxo0ePXuPJ5t1a6//NYPL/NJN/ezwdaavUKiOn8ZrwHADvAPCl9sevaU+VSqXP3Xnn+vekGD969OjFLEqpiy1LX4nKl8GknV+qeR83xvxD2vFL4DaMkni+b2gAwOQf2zMA3gfgP9oXv9Z5k5Oly1avXndxivGjR49exKKU+phl6cuzcn4JeB82xvxz2vFLwnNva8trj9gDgPY8vWhENV4LvQ8rpT6dpeTvexMTE5cWCmOfTDl+9OjRq1GUUv9iWfpfMnZ+Mbbt/LUx5j/Sjl9SXuVtbTntkYuzcbuSTbE4XpTUeC32PrNmzTqnVLL/X1LxS9D7f3BfI/pwivGjR49elaKU+k/L0h/MWPJ3bNt5pzHmf+J60tujuienPYAYVwDamWwcx4kNZqkzLF++5N9zudw/SOoMMbwPAfhiaMO2xo8ePXoVRSmlrsxg8rcdx3kLk3/D8Wsq+efzIyrSAMBdVUjuZessdoblyxd/wbvslfq8Cw1474X7ZkPV/pPF9qBHL6OeVkr9r2Xpd0s9P0/jTTqOeb3jmG+lHL+2eMYYI6U98vkR5a/9E2kA4K4qJLNzZbEz+J4x5osAYk10ISD5++WtAL6N0G2kLLcHPXoZ83JKqe9Yln6LgPNBDA/jjmMucBwn0kRpCcavbV6xOF6U0B7euj/l10LrDgAsy6p4kURS58pqZwh5X4M7V0DdaZsEJX+/vB7A/wHoTTF+9Oh1o9erlPqhZenXCTofRPCww3Gc1ziOc23K8Wur18ht7YSSfy4I1hwAuDsPFjmdK8udoYr3bQA1F7sQmPz98hoAP5kxY3goxfjRo9dN3oBS6jrL0ucIPB/U8LDNcZyzHMe5OeX4ifda3x4A3B9qFeC0AwCtRSYbAPIbr0HvRwDOQ5XlLgUnf987vVgcv/Hpp58ZTjF+9Oh1gzeslLrRsvQrBJ8PqiX/LY7jnO44zu0px0+8l8jT/toK38dHoTA2dQCQz48oK/TT311VSEbnkt54TXrXA3g1gB1JxS8pzxiz8re//cPVf/zjEzNSjB89ep3szVJK/dSy9Ij080Eo17xojMk7jrMm5fiJ95JI/u70+hV/MoXCmA1MfYBLocrcAI5jR1pYIOnKSG+8Fnm3AHgVgOuVUsNZSP6+Z4xZ9PjjT1z7xBNPv2J8fLxT2oMePQnerkqpWyxLz8/K+cArzxtjXm7b9i9Sjp94L4nL/u4D/BXFIPC8WfgKQOgygYFtM/mn4P3MsvTplmVtztbBblAq2SeOj4/fBmDPFONHj14neXsqpcYymPw3GGNGmPwbjV9z7TFN8i8FF/8rDwD89wKDW9t2QysEM/m3wDv11JUPDQ8PvRrAi83GL4XbCMcD+BmAfdOKHz16HeLtq5RaZVn6uIwl/6cBnGLb9sMpx0+8l9yqugHNZSbCK/9qr0JTZnVzHCb/tL2TTz7xFzNnzjgbwPOyD/aq3pEAVgE4IK340aOXce9AL/kfkbHk/ziAlaVS6dGU4yfea9f52XFsO5z8gZ1XACq2thv86c/k33rvpJPmPWSMGTHG/CmuJ+ABwoMBrAZwaFrxo0cvo95hXvI/OGPJ/7dKqZWlUun3KcdPvNem9vC86p+Z+qI/UIq95wQqI73x2ul5l9FWAngyqicg+ftlLtwrAUenFT969DLmHeMl/7kCjt8YHh7RWp0yOTkZ+TyVUPzEe+1ZVRew7drzy4UHAFUvE7S7MlprBcGNl5L3W7iDgLoja0HJ3y97AxgDcEKK8aNHLwveCd4Df3MEHb8RPDxoWXpkYmLymZTjJ95r42X/up/1X/kzjVQkqcr09/f1Q2jjpew9DncQcDuAw6eLn7Dk75c9ANxuWfoMAL9KKX706En2FimlbrYsPVvg8TutpxTus6zcK4rF4gspx0+8197zc/3Pa8CdESj2nhOsjFJKZOMJ8Z4GcAqAKU/XCk7+vreLUvrWu+++b1mK8aNHT6K3Uil1awaT/7qenp7TmPwbi1/a7asjbZVaZeQ0njBvA4ARAD+vHT+JJw8Mb9++40d33XXvSIrxo0dPkvdypdRNlqVnyD9+g8lfrert7Xvl9u07Xko5fuI9rbWSeH5uaADA5C/Cex7AywDcnZ3kX/YGduwofv/221eNdFB70KPXiHeWt7DPYIaOXyilbh0cHHjVtm3btqQcv0x47m1tee0bewDQnqcXjajGE+xtGhwceEUuZ62T2Llqe3aftx74BSnGjx69NL0LlFJXW5buy9Lxq5S6YcaM4Ve/9NLm7SnHLzNe5W1tOe0bawDQruRQLI4XJTWeZG/p0kXm0EMPvkAptcrnpHSuCF4PgO8BeENa8aNHLyXvjUqp71mW7slY8r9mt912Pe+FF14sphy/jHpy2heIMQBoZ3JwHCc2mM3O0Bpv33332XbUUYe/Vil1q5TOFcOzAHwDwDvSih89em323qGU+rplaStLyV9r9d05c/Z83YYNf55IOX4Z9eS0r/cdVaQBgFIQfY85m52htd6ee+6xY8aM4VcbY34c1xPwDIEG8GUA708rfvTotcn7gFLqvy1La6nn02mS/1VHHXXEm5588unJlOOXSc8YY6S0bz4/ovy1fyINANxVhWR21ix2hqQ877LcXwD4flRPQPIvfxTA5wBcklb86NFL2Pt7pdSokOMtsqe1/vJRRx1x0QMP/LL+zDLJxi+zXrE4XpTQvt66P+VlAusOACzLqlhVSFJnzWpnSNgrwb2n/o16nqDkHyz/CuCTKcaPHr0kvH9SSl0m8Hir6WmtR1euXPpeJv/mvEZuayeU/HNBsOYAwHtvuyU7Z/Jvq2cD+CsA/z2dJzT5++UTSql/SzF+9Oi10vs3pdTHBR9vVT3L0p9ZuXLphwTEr+u81rcvAKA3DE47ANBabmeV3nhCPAPgXQCuCP8H4cnf9z68evXafy+VSqoMZrs96HWfpwB8USn14Qwcb6hM/talK1Ys/ViHtUcmvESe9tdW+D4+CoWxqQOAfH5EWaGf/u6qQjI6q/TGE+h9AMBn/f+TkeQPQMG2nXesXXv354vFokoxfvToNeJpAP+jlHpvVo43v+Ry1t+vWLHkUx3WHpnwkkj+7vT6FX8yhcKYDexcDMivjAr/DQAcx460sEDSlZHeeIK9SwAUlVKfyNrJyHHsN9555105Y8ybAMSKoeD2oNfZXg7AN5VSr8/Y8WZyudzfLl+++IoOa49MeElc9ncf4K8oBu4tYgBTnwEIXSYwsG0m/w7xPtnb23tphk5GQe/1cN9s6E0xfvToRSm9AH6QweTv9PTk3sfkn46XRPtOk/xLwcX/ygMA/73A4Na23dAKwUz+Qr0VK5aM9vTkPupzgk9G1bzzAFwDoD+t+NGjV6f0A/ixUurcjCX/Um9vz0XLli3+coe1Rya85FbVDWguMxFe+Vd7FVJhxHGY/DvRW7Zs8ZW5XO6Dtu0YoSejWt4ZAG4AMJRW/OjRm6YMAbhBKfWqjCX/id7e3rcsXbro6x3WHpnw2nU+dRzbDid/YOcVgIqt7QZ/+jP5Z8NbvnzxFcaYtyHmPXUhDxC+DMBPAcxMK3706IXKTAC3KKVeJuD4iOMV+/p637B06cLvdVh7ZMJr06q6nlf9M1Nf9HcnkmnRzpn8BXtXwZ0wKFJ7C0n+flkG4DYAu6YYP3r0ALcP3qaUWiro+Iji7ejv73vtkiULr+6w9siE155VdQHbrj1/U3gAUPUyQbsro7VWENx4HeR9D8BrAdRc3ENY8vfLyQDuALBHB7UHvWx5ewK4Qyl1ssDjo5a3dWCg/9zFixfc0GHtkQmvjZf9637WHwCYQmFMRPJXSqG/v68fQhuvA71rAJwLoOrynkKTv1+OV0r97Je/fOTQFONHrzu9fQD8TCl1vODjo5q3eXBw4DWLFp18a4e1Rya89p5P639eA+6MQLH3nGBllFIiG6+DvRsBnAVge/CPwpO/7x21cePGmx966FdzU4wfve7yDgCwSil1ZAaOj6D3wtDQ4FkLF86/o8PaIxOexPOpjrRVapWR03hd4N0G4HQAWwCZnXU6zxgc9MILL9z0858/eFCK8aPXHd6hcJP/IVk5Przy3IwZw2cuWHDSnR3WHpnwtNZKYn9paADA5N+x3moAL1dKbZLYWWt5xpj9XnjhxRsLhbEjUowfvc72joab/PfP0vGhFDbMnDnjjPnzT7i7w9ojM557W1tef4k9AGjTyVxU43WZd8/MmTPPBtQLQU5CZ43g7Q3gZwDmpRg/ep3pnQBgTCm1d8aS/1OzZs06/aST5t3fYe2RKa/ytrac/hJrANCuk3mxOF6U1Hjd5i1YcOJDM2fOOAvAs5I6a0RvD7hvByxIK370Os5bCOB2pdQeGUv+f9hll11eecIJxz3UYe2RYU9OfwFiDADaeTJ3HCc2mM3OINc76aR5v5o5c8YZtu08I6GzxvR2AVAAsDyt+NHrGG8FgIJSapdsJX/16G677Xb68ccf8+sOa48Me3L6i/cdVaQBgFIQ/UBYNjuDfO+kk+b93BizEsATcTwhDxDOhDtj4GlpxY9e5r08gJuVUjME9OfInlLqV3vuufurjj32qN92WHtk1jPGGCn9JZ8fUf7aP5EGAO6qQjI7fxY7Q8a838H9FfS7KJ6Q5O+XQQDXAzgzxfjRy6Z3FoDrlVKDgvpzXU8p9cCcOXudedRRRzzeYe2Raa9YHC9K6C/euj/lZQLrDgAsy6pYVUhS589qZ8ig9wSAlQB+XcsTlvz90g93sqPzO6g96CXrXQDgaqVUn8D+PK2nlLpnv/32OeuIIw59osPaI/NeI7e1E0r+uSBYcwDg7jxY5HT+LHeGjHrPADgFwEPVPKHJ3y89Sqnv33nnXW9LMX70suG9AcD3lFI9gvtzteS/9sAD9z/nkEMOeqbD2qMrvdb3FwBAbxicdgCgtdzOL73xOth7FsCpAO4P/lF48vc9a3Jy8str1971phTjR0+2dxGAbyilrAz0ZwSS/x2HHHLQeQccMPfPHdYeXekl8rS/tsL38VEojE0dAOTzI37v37lrAzGdX3rjdYG3Ee6SvOuBzCR/39MTE5NXrFmz/h0pxo+eTO9vAPy3UkpnqD9Da/XTo446/LX77bfPcx3WHl3pJZH83en1K/5kCoUxGwjdAgjcI6gojmOL6PzSG6+LvJfgzhi4OksnS89T4+Pj/1YojH04xfjRk+VdAuAKpZTI6Vqn87TW1x133DEX7rnnHi90WHt0pZfEZX9r6g9/A6C8TGD4CkBoawPbtiOtKpR0ZaQ3Xhd624844rC/UErfEeSkniyreJ8BcGmK8aMnw/skgH/N2JUsaK1/OG/esW/ZZZfZmzqsPbrSS6K/uG/vVRQDoBRc/K88APDfCwxubdux65FIZaQ3Xrd6++23T/GYY458vdbqp5JPljW8f4Q7EEglfvRS9z4L4BMZTP7fWbjwpHfMmjXzpQ5rj670kltVN6C5zEQhtPKv9iqkwojjMPnTq+/tvvtu48cdd8yFtu1cI/FkGcH7CIDPhz7QtvjRS8VTAL4A4O8E9L9YnmXpry1duvC9/f39mzuoPbrWa1f/cxzbDid/YOcVgIqt7QZ/+jP5d6e3yy6zNxljXgvgu3E8QSffvwbw35j6TEwm24NezaIBfAXA+wT1v0ieZVlXrlix9IO5XG5LB7VH13ptWlXX86p/ZuqL/kAp9p4TqIz0xqM3xSsBeCOA/43iCTz5XgTgG/Aegu2A9qA3teQAfBPA2wX2v5qeZVn/uWLFkr9POX70MpT83bf37JqfCz/xX/UyQbsro7VWENx49Kb1HABvB1AE8J7pPMEn3zcAGNhjj90uBNCXQvzoJef1wr1CdZ7g/lfVy+Wsy5YvX/KvKcePXoaSv3fZv+5n/QGAaaQiSVWmv7+vH0Ibj15dzwB4L9xBwAfD/zEDJ9/zNm3afO2zzz735j333KOYQvzotd7rB/AjAGdkoP+Fkn/uE8uXL/5cyvGjl7HkX+uyf7BowJ0RKPaeE6yMUkpk49GL5f0tgE8H/5CVk68x5hWPPPLo9595ZsNgivGj1xpvCMANyF7yNz09uUuY/DvHk9j/cpG2Sq0ychqPXkPeP8C9EvBPEjt/Lc8Yc8pjj/32R48//sdXbd++o1Pao9u8mXCT//KM9T+np6fng8uWLboq5fjRa5GntVbunW1Z/U9H3jKBndf25DQevaa8TymlLsnQybfslUr2ku3bd9wCYJcU40evMW8XAAVkL/nbvb2972Xy7yzPva0tr//FHgC05+lFI6rx6DXnnXbaKf/V09NziedASueP6C0EcAeAPdKKH73Y3h5w22xBxpJ/qa+v96KlSxd+N+X40WuxV3lbW07/izUAaNfBVCyOFyU1Hr3mvWXLFn+5p6fnYsA4Ujp/DG8egJ8B2Dut+NGL7O0Dt63mZSz5T/T3971lyZKFV6ccP3qJenL6HxBjANDOg8lxnNhgNjtDd3nLli26ynGctxpj6r+fEioCTuZHAVgFYP+04kevbjkAbhsdJaC/xPGKAwP9Fy5evOD6lONHr4uSfz4/oiI9BOiuKiT3YMpmZ+hOz3HMN+A+GPhtRHwIVdDJ/FC4CeY0AL9LI370pi2HALgdwP6C+ksUb/vg4MDrFi6cvyrl+NFL0DPGGCn9z5v6XwMwka4AuKsKyTyYstgZ6OEHAC4AMFHPE3gy939lHpli/OhVlvLVGYH9pZa3ZWho8Dwm/873isXxooT+5yX/8jKBdQcAlmVVrCok6WDKamegBwD4CYBzAOyYzhN8Mt8HwM8syzohxfjRc4v/fMY+gvtLNW/T8PDQOQsWnLQu5fjRa8uVz/i3tRNK/rkgWHMA4O48WOQcTFnuDPTK5WYAZwLYFv4PGTiZ76mUuuPee38+P8X4dbu3AN4bGhnoL0Fv44wZw2effPKJ96UcP3pCvdb3PwDudNgV4LQDAK3lHkzSG49eLO8OAK8EsNn/Q3ZO5pi9deu2n9xzz/2LU4xft3rL4b7nv0t2+osCgD/PmjXzrPnzT3gw5fjRE+ol8rS/tsL38VEojE0dAOTzI8oK/fR3VxWScTBJbzx6DXl3AsgDeDFjJ3MAmLFt2/arb7991cIOag/p3mlwrx7NzFh/2TR79qwzTzzx+F+lHD96Qr0kkr87vX7Fn0yhMGYDU9c/9+8RVBTHsUUcTNIbj15T3j2WZeUty9qckZN5wLMHHce5DsCrUoxft3hnALgewFDGkj8AzN66devLU44fPaFeEpf9rak//A2A8mvY4SsAoa0NbNuOtKpQ0pWR3nj0mvd6e3uWApgR5ASfzMNeP4AfAzgvrfh1gXcegGsA9Gcw+QMwGB+fuKxQGHt/SvGjJ9RLov+5b+9VFAOgFFz8rzwAyOdHpgwVbDt2PRKpjPTGo9e8d+ed6983OVm6Yqcp/2RexesF8H0AF7Y7fl3gvQHu66O9WU3+Ae9yABe3OX70hHrJraob0FxmohBa+Vd7FVJhxHGY/Om1x1uzZv3fTE6WPodsJ3+/5AB8E8Db2hW/LvDeDuAbACwB7dsqL9IgQGh70BOe/MOe49h2OPkDO68AVGxtN/jTn8mfXlxvzZr1HyiVSpejM5K/XzSArwJ4X9Lx6wLvrwF8BYAW1L6t8moOAoS2B71MJX//Af7qn5n6oj9Qir3nBCojvfHoNe+tWbP+g6VS6T/RWcm/TAD4AoAPJxW/LvD+DsDnASiB7dsqr+ogQGh70MtQ8nff3qu97Er4if+qlwnaXRmttYLgxqPXvLdmzboPl0r2Z4JcB5zMq5V/U0oNwT3Ri20Pgd4/ArgUEN++rfAu9/4dbWH8yoWeLK+Nl/3rftYfAJhGKpJUZfr7+/ohtPHoNe+tWbPuI6WSfVmQ66CTeTXv0tWr181esWLJpa2IH4S3bwu8zwD4SCB+EN6+rfAu9+J3RQviVy5C27drvfb2v/qf14A7I1DsPSdYGaWUyMaj17y3Zs26S7os+QNQsG374tWr1362VCqhmfhBePs26Sm4l/y7Lfn73uVr1qz7SBPxqygC27erPYn9L9JyrOlVRk7j0WveW7Nm3UdLJfufg5ygk2/inm3b7/zZz+7Uxph3NRI/CG/fJj0N4MsALpouftLbtxVeqWRfdued69WyZYu/FDN+FUVg+3a1p7VW7p1tWf1PR94ygZ3X9uQ0Hr3mvdWr132sm5N/wLsIwNcRWJIzSvwgvH2b9Cy4r/l1dfL3vcnJ0qfXrFn3nhjxqygC27frPfe2trz+F3sA0J6nF42oxqPXdPL/uG3bnwpyEjp/it4bAXwPQE+U+EF4+zbp9cCdPOkNMeIXuWTV44yBneVV3taW0/9iDQDa1fmLxfGipMaj11Ty/0fbti8NclI6f8reBQCuBtBXK34Q3r5Nev1wp/Y9v4H41S0d4EWaLMgvAtuX3hRPTv8DYgwA2tn5HceJDWazM3S2t3r1uk/atv2JICel8wvxzoK7sM1gtfhBePs26Q16dT+zifhNWzrIizQIENi+9IQn/3x+REV6CNBdVUjuwZTNztDZ3urV6z5l2/bHgpyU/iLMy8Nd2vZMAFv8+EF4+zbpzQBwI4DlLYjflNKBXsU8AeEisH3phTxjjJHS/7yp/zUAE+kKgLuqkMyDKYudodO91avX/guTfyxvBYACgF2y0L5Nert4dWXyj+dxxsAMe8XieFFC//OSf/kB5LoDAMuyKlYVknQwZbUzdLK3evXaT9u28/dBTkp/Ee4tVErd/pvfPHYABLdvk94eAO4AsDCB+HWDVzEIENi+9KbxGrmtnVDyzwXBmgMAd+fBIudgynJn6FRv9eq1n7Ft55IgJ6W/ZMQ7YcOGZ2965JFH9yqDgtq3SW9vAGMA5iUYv27wLgdwscD2pSd60iAA7nLlFeC0AwCtRXZ+APIbrxu91avXfta2nQ8HOSn9JUueMeaIZ5999saHHnp4Hwhq3ya9/QGsAnB00vHrEo8zBnawl8jT/toK38dHoTA2dQCQz48oK/TT311VSEbnl9543eitXr32323b+VCQk9JfsugZYw559tnnbyoUxg6M6wnsL4fATf6Htit+3eB5Mwa+twwKOh/Qk5X83en1K/5kCoUxGwjdAgjcI6gojmOL6PzSG68bvVWr1v6nbTsfDHLSTpYZ9Q4AsBrAkVE9gf3lSLjJ/4AU4tfxHmcM7Cwvicv+1tQf/gZAeZnA8BWA0NYGtm1HWlUo6cpIb7xu9FatWjvqOM4HgpzUk2VGvX0A/AzA8fU8gf3leO+775Ni/Dre44yBneEl0V/ct/cqigFQCi7+Vx4A5PMjU4YKtt3QCsFM/l3grVq19grHcf4myEk/Wdq28yljzKOCv181b0+4T87Pn84T2F9O9r7zngLiF9lTSj2Wy1mflfr9aniRJgvyi8D+0tVecv05oLnMRHjlX+1VSIURx2Hyp1fdW7Vq7Rccx3lfkMvAyfJvjTGfALASwC8Ffr9a3q4AbgOwNPwfBPaXZd533VVQ/Op6SulH9tprrzOXL1/y6VzO+qi07xfBizQIENhfutprV39xHNsOJ39g5xWAiq3tBn/6M/l3vrdq1dorHcd5T5DLwMnyb40x/mxqfwYwAuDngr5fFG8WgFsAnOr/QWB/eRmAnwKYKTB+03pK6Qf22WfvM4888rBnAZjly5d81hjzwUa9FOtbcxAgsL90tdemVXU9r/pnpr7oD5Ri7zmBykhvvG7z5s071lq1au2XHcd5Z5CTdjKvk/z9shFuslov4PvF8YbgTqH7KoH95VUAbvC+o9T4TfGU0nfvv/9+Zx922MEvhOo7CiDyIEBQfasOAgT2l6722vM2EWDbds3PhQcAVS8TtLsyWmsFwY3Xbd68ecdajzzy6Jcdx7koyEk7mUdM/n7ZBODlcB9US+v7NeL1K6V+vHbt3a+DnP5yLoAfw13dT3r8gsn/zoMPPvC8gw46YPM09R1FhEGAwPpWDAKkn1+6zWvjZf+6n/UHAKZQGBOR/JVS6O/v64fQxus2z0v+X3Ec5+1BTtrJPGby98tWuL9cb03h+zXj9U5MTHxj3bq7zy+D6fWXvwTwA7izjGUlflBK337EEYdeMHfuvlvr1HcUNQYBgut7OThjoDivvf2l/uc14M4IFHvPCVZGKSWy8brNc5P/b77qOM5bg5yAk1s9L0ry98sOAGcDuF7wybyalxsfn/jKnXeuvxDp9Ze3AfgWvLlDshI/rfXNxxxz5F/OmbPXjoj1HUWVQUAG6ssZAwV5EvuLjrRVapWR03jd5nnJ/2uOY/4qyAk6ubUi+ftlfI89drsgl8v9RNLBGcHTxeL4FwuFsXfH9VrQX94H4KvwziEST27VPK2tHx9//LFv2n333cZj1ncUgUFAVurLGQNleFprJbG/NDQAYPLvbO+QQw7KPfLIb65yHPPmIJd2Z43gNZL8kc+P6Hnzjus7+eQT36a1/kGG6gtjjALwRQAfiuq1oL98GMAX/M9nJRlqbX1//vwT3j579qzJmPX1yyiAD2alvr7HGQPT99zb2vL6S+wBQJvmQhfVeN3kHXLIQbknn3zq645j3hjkJHTWOl7Dyd+P39DQoL1o0fx3a62uykB9w96/A/h4nPpWgNH7yycA/JuA+sbyLMu6aunShe8eGhq0Y9Y3HL8r+vp6Pyq9vmGPMwam61Xe1pbTX2INANrVWYvF8aKkxusWz0v+33Qcc2GQk9JZk0z+/t/6+vrso4464iJjzOcF13c6758AfDpOfRGvv1wG4JOC6hvJsyzryytWLL04l8uZmPWtGr/ly5dc2dOT+5jU+tbwOGNg6p6c/gLEGAC0s7M6jhMbzGZnkOPNnbtvz5NPPvVtxzGvD3JSOms7kr8fvwce+KUN4P0APiuwvvW8j8K9VB25vhH6iwLwOQB/L7C+NT3Lyo2uWLH0kpj1nVLC8Vu2bPGXOGNg4/HrTk/O8eF9RxVpAOCuKiT3YM9mZ5DjzZ27b8+GDc9+23HMa4OclPZtZ/IPxe8SAJcKqm9U7wMAvoydU30301+0Z5UvHwusb1Uvl8tdtmLFkktj1ndKmS5+nDGwufh1k2eMMVKOj3x+RPlr/+SifMBdVUjmwZ7FziDJ85L/d40x5wc5Ke2bYvL3yyfhvir4mZTrG9d7J4CBuXP3fTuAgRj1DRYLwFUAys+DCK5vhZfL9Xxi+fLFV8Ss75QSob+Men+L1BcFxc//vqPBP0o/X2XVKxbHixKOD2/dH8urY/1bAJZlVawqJOlgz2pnkOLNmbNX74YNz36fyb9u/D4L4G+8bdOob6PemzZsePb/Nm16qTdmfQGgB8D3kL3kb3p6ev6uTcnfL6PgjIHNxK/jvUZuayeU/HNBsOYAwN15sMg52LPcGSR4c+bs1btx4ws/MMacG+SktK+g5O+XL8D9Ve20ub5NecaYcx588JfffP75jX0x6tsH4GoAFyT9/VrsOb29ve9ftmzxV8pg+463UXDGwGbiRy9QWt9fALizdVaA094C0FpkZwUgv/Gke3vssVufl/xfHeSktK/A5O+XrwIoKqWusixtST0+wp7jmNMffvjX3+vr63311q3b6tV3EMBPAOTb9f1a5Nm9vX3vWbp04Q/KYPuPt1Hv34o+moH4Xb5mzbr+5cuXXBmzvq2OHz0k9LS/tvz7+GWgUBgzU64A5PMjygr99HdXFZLRWaU3nnRvjz1269u0afP/Mfk33B7fGRjofyugJrMUv1KpdOrWrdtuADCjxsdnALgZ2Uv+k319fW9NOfn7ZRScMVDs+U+6l0Tyd6fXr/iTKRTGbCB0CyBwj6CiOI4torNKbzzpnpf8f2SMOTvISTsZCU7+GsDw0qWLru3v73sTgPGMxM/3VsJd+Gh2lY/vAqAAYEWK368Bzxrv7+9/45IlC68tg+kfb6PgjIHNxK8rvSQu+1tW+AF+GADlZQLDVwBCWxvYth1pVaGkKyO98aR7u+66S/+mTZuvNsacGeSknowCnqjk73uLFy+4ub+/73W27WwXHr+wtwjA7QB2D/xtd+9vCwV8vxietWNgoP91ixcv+GkZFHK8ccbApuPXVV4S7eu+vVdRDIBScPG/8gDAfy8wuLVtx65HIpWR3njSvdmzZw1s2bL1GmPMGUFO+slIavL3vcWLF1xnjHkVgC1C4zeddyKAMQBzvP/9DMAJgr5fBM/aOjg4cP6iRSePlUEhxxtnDGxN/LrFS25V3YDmMhPhlX/9iUJUGHEcJv9O8GbPnjWwbdv2HxtjTg9yGTgZiU7+AW8VgFcA2CQsfvW8Y7zvvgrA0QK/Xw3Peml4eOg1CxfOX1sGhRxvnDGwtfHrdK9d7es4th1O/sDOKwAVW9sN/vRn8pflzZo1c3Dbtu3XGmNeEeQycDLKSvL3y3oALwPwvJD4RfUO8/4n9ftV8ayNM2YMn33yySfeWwaFHG+cMTCZ+HWq16ZVdT2v+memvugPlGLvOYHKSG886d6sWTMHt2/fca0xJh/kZJ3MOyL5++XnAEYAbEg5fh3sWX+eNWvmWfPnn/BgGRRyvEWcMTDyIEBQe1QdBAg43jLttWdVXcC27ZqfCw8Aql4maHdltNYKghtPujdjxvDQ9u07rjfGnBbkZJ3MOyr5++VhAKcAeCql+HWwZz29yy6zzzjxxOMfKYNCjjfOGNi2+HWE18bL/nU/67/yZxqpSFKV6e/v64fQxpPuzZgxPFQsjl9vjBkJcrJO5h2Z/P3yKNzX7W4HcKDAk3kGPeuPu+2269nHHXf0E2VQyPHW4IyBwDRrBwhuj8u9+l6Rcvwy7bW3fet/XgPujECx95xgZZRSIhtPujc8PDRcLI7fyOSfenv8AcAKpdRjQk/mGfKs3+6xx+5ndEjy98soqlwJyEB7XL5mzbqPCIhfJj2J7asjbZVaZeQ0nnRveHhoeHx84kZjzMogJ+jk0S3J3/ee2Xvvvc5QSv864fh1sGf9as6cvc445pgjny6DctqXMwZ2Vnsk6mmtlcT2bWgAwOQvyxsaGpoxPj5+kzFmRZBLu3NF8Do1+WsAw0cffeRz++wz50yl1IMZaQ9BnvXgvvvuc9aRRx72bBkU1r4t8EbBGQObiV9mPPe2trz2jT0AaM/Ti0ZU40n2BgcHZ05MjN9sDJYHOQmdq47X0cnf9w477JCN++6791m27dwlvD3EeLmcdc/+++939mGHHfxCGRTavi3wOGOgrPZIxKu8rS2nfWMNANrVuYrF8aKkxpPqDQ4OzpycnLjZGCwNclI6V7cnf9879NCDnzbGvBzupDutiJ/09m0m+a85+OCDzj344ANfKoPC27dZjzMGymqPZD057QvEGAC0s3M5jhMbzGZnaCb5D8yanJz4qTFYEo6fhM7F5D/F2wLgVXAX42kmftLbt4nkn7vjiCMO+4u5c/fdWiV+sUrW+gtnDGwuftnw5Bxv3ndUkQYA7qpCck8e2ewMjXsDAwOzJycnbzEGi1sRPyb/tnnbAZwN4PoG4ye9fZtJ/jcfc8yRr58zZ68dNeIXqWS1v3DGwObiJ9kzxhgpx1s+P6L8tX8iDQDcVYVknjyy2Bma8QYGBmaXSpO3GLNz5TZJ7cHkX9cbB3AegB/GjJ/09m0m+f9k3rxj37T77ruNR4hfzSKgfZv1RsEZA5uJn0ivWBwvSjjevHV/yssE1h0AWJZVsaqQpJNHVjtDo97AQP8updJkwRgsaEX8mPxT8yYBvB7AtyPGT3r7Nuz19OS+f/LJJ75t9uxZkzHiV7UIat9mvVFwxsBm4ifOa+S2dkLJPxcEaw4A3J0Hi5yTR5Y7QyNef3//rqVSqWAM5rcifkz+qXs2gDcD+Gqd+Elv32aS/1WLFp38nqGhQbsMdk77NuuNosYgQHD7Xg7gYgHxy7TX+vYFAPSGwWkHAFqL7FwA5Dde65N/326lUuk2Y3BSK+LH5C/GcwC8Uyn1RaEn88S8np6eLy9duuiDfX19ThlMvz2keaPgjIGS2qMtXiJP+2srfB8fhcLY1AFAPj+irNBPf3dVIRmdS3rjtdrr6+vbvVSybwNwQivix+QvzlOnnXbKxywrd0UoftLbt5nkP7py5dJLcrmcKYNy2kOaNwrOGCipPRL1kkj+7vT6FX8yhcKYDYRuAQTuEVQUx7FFdC7pjZdE8rdt+zYA81oRPyZ/ud6KFUs+kctZn8lI+zbs9fb2XrZy5dJLWx2/DvdGwRkDm4lfJrwkLvtbU3/4G7i3HwFMfQYgtLWBbduRVhVKujLSGy+B5L+Hbdu3Azi+FfFj8pfvLV++5NO27XxUePs2k/w/sWLFks8kFb8O9zhjoKz2EJ78lff2XkUxAErBxf/KAwD/vcDg1rbd0ArBTP5Nen19vXt6yf+4VsSPyT87njHmXwG83/v/kUoGkr/p6+v7uxUrllxRAWagPSR5nDFQVnu0yktuVd2A5jIT4ZV/tVchFUYch8k/Da+3t3cv23ZuB3BsK+LH5J9J7/MA3gX3IcGaJQPJ3+nv73v/8uWLv9LG+HWsxxkDm4ufNK9d7eE4th1O/sDOKwAVW9sN/vRn8m/O6+3tneM4zh0AjmlF/Jj8M+19BcBfIXC/LlwykPzt/v7+dy9btvibKcSvYz3OGNhc/KR4bVpV1/Oqf2bqi/5AKfaeE6iM9MZLIPnv7SX/o1oRPyb/jvC+CXfCoMnwfxBwMq/nTQ4M9L912bJFP0gxfp3sjYIzBjYTv1S99qyqC9i2XfNz4QFA1csE7a6M1lpBcOO1Pvn37OMl/yNbET8m/47yfgjgfLhTCAMQdTKfzhsfHBx449Kli64VEL9O9kbBGQObiV8qXhsv+9f9rP/Kn2mkIklVpr+/rx9CG6/VXk9Pz76OY24HcHir4sfk33HedXAXEfqxUmpQ2Mk87G0fGhq8cPHiBWOC4tfJ3qj3b9VjUWDy98vlXn2vSDl+bfXa2x71P68Bd0ag2HtOsDJKKZGNl0Dy388YMwYmfxHtIdy7VWt9pmVZ2wSezH1vy/Dw0PlM/pwxMKLXVTMGSmwPHWmr1Cojp/ESSP5zveR/aHLxY/LvJO9lL1t5/9DQ4GsAbPY5Qf1l04wZw+cuWnTyOqnx63BvFJwxUFJ7VBSttZLYHg0NAJj8m/N6enr295L/IcnFj8m/E70FC066Z8aM4bMBvCCovzw/c+bMsxcunH+v9Ph1uDcKzhjYTPwS89zb2vLaI/YAoD1PLxpRjddKr6cnd4CX/A9OKn5M/p3tzZ9/wi+MMacaY/4c10ugv2yYPXvWmQsWnPhQVuLX4R5nDJTVHhrAcOVtbTntEWsA0K7OUCyOFyU1Xqu8np7cgcZgDMBBScaPyb/zPdu2HwSwEsBTUb0E+stTu+66y5nz55/wm6zFr5M9zhgoqz0qPTntAcQYALSzMziOExuU3hlyudxBXvI/MOn4Mfl3jfco3EHA4/W8BPrL47vvvusZJ554/O8yHL+O9ThjYHPxS8aTc773vqOKNABwVxWSe09JemfI5XIHAxgDcIDE+DH5Z9r7A9xBwGPTeQn0l8f23HOPV82bd9wTHRC/jvU4Y2Bz8WulZ4wxUs73+fyI8tf+iTQAcFcVYvJvMPkfAjf57y8xfkz+HeE9CXcQ8HD4PyTQXx7ee++9zjjuuKP/1EHx62RvFJwxsJn4tcQrFseLEs733ro/5WUC6w4ALMuqWFVIUvKS3hlyudyhcJP/XInxY/LvKG8DgBEAv/D/kEB/+fl+++1z9tFHH/mcgPrS44yB7Ypf014jt7UTSv65IFhzAODuPFjkJC/pnSGXyx0GN/nvJzF+TP4d6T0P4FQA6xPoL+sPOGDuOUcccdgLgupLL7o3ihqDAIHJ3y+XA7hYQPza6rW+PQAAvWFw2gGA1iI7AwD5jZfL5Q6Hm/z3lRg/Jv+O9jYNDQ29IpfL3djC/nLd4Ycfcu6hhx68WWB96UX3RsEZAyW1R1viBwBaW+H7+CgUxqYOAPL5EWWFfvq7qwrJ6AzSGy+Xs44EcAeAfVpRXyZ/enG9JUsWqGXLFr2hpyd3CYAtTfSXzUqpD5xyyrI3zZ273w6p9aXHGQPbGL9EvSSSvzu9fsWfTKEwZgOhWwCBewQVxXFsEZ1BeuPlctZRgLodTP4i2qObvVwuZ5YtW/zlOXP2PMG2nX81xjwXg3oOwGW9vb2Hn3baKVflchWnBJH1pccZA9sYv0S8JC77W1N/+BsA5WUCw8k+tLW780ZKFyb/owF1G4A5ragvkz+9VnhHHnn440899cxHAXwc7kOCpwE4Ce58FLt5222EO5fA/QBuAzCWz484WawvvcjeFWvWrOsvlezLgpz085U3Y2ARO1dBTCt+wpO/8m7jVxQDoBRc/K88APDfCwxuzeQfrViWdYyX/PdqRX2Z/Okl4JUAFLz/Sfx+9NrsLV++5Mo771yvJidLn87I+So4YyAQcRAgvT2Six/KSwJ7/06EV/7VXoVUGHEcJv8oxbKsY5VSt4PJX0R70KNHL7rHGQObi1+zXrvi5zi2HU7+wM5nACq2thv86d+Fyf84L/nv2Yr6MvnTo0ev3R5nDGwufo16bVpV1/Oqfyb8DEDFAwJpVkZ641mWdbxS6jYAu7eivkz+9OjRS9Eb9f4W6dwgIPn7pertAOnt0Z5VdQHbrp3Ow08JVL1M0O7KaK0VBDeeZVkneL/8mfwFtAc9evRa4o2CMwY2E7921TeS5zj1f8v7VwBMIxVJqjL9/X39ENp4lmWdqJQqANi1VfVl8qdHj54Qb9T7t+q5QmDy98vlXn2vSDl+7apvBK/+5zXgzggUe88JVkYpJbLxLMua7132Z/IX0B706NFLxBsFZwzMePKP5ulIW6VWGTmNZ1nWyUqpWwHsklx9mfzp0aMnwhsFZwxsWXtorZXE+DU0AOjC5L+AyV9Oe9CjR68t3ig4Y2Az8St77m1tefGLPQBoz9OLRkLnBwBYlrXQS/6zk6ovkz89evSEelf09fV+VGLyquV5Mwa+X0D8NIDhytvacuIXawDQrsYrFseLEjq/ZenFXvKflWR9mfzp0aMn1Vu+fMmVPT25j/lcBs5/wRkDL047fpWenPgBMQYA7Ww8x3Figwkk/6VK6VsAzEy6vkz+9OjRk+xxxsDm4tfG+sb5jirSAMBdVUjuPaAEkv8ypfTNAGZIrC+TPz169NrtccbAxuNnjDFS8kc+P6L8tX8iDQC0Dq8TJCcZJvC05nImf/knI3r06KU2Y2DkQYCA5O+XqoOAdsWvWBwvSsgf3ro/lv//6w4ALMtCxVv5gpJhAsl/pdb6Zs8UV18mf3r06AnwRsEZA2PFr5Hb2gkl/1wQzNX6gL+kYCt2noHkf4rW+gYAQxLry+RPjx49Qd6o92/Vc4/A5O+Xy736dtmMgQCAXu87+YCZ9gqA1iIbD0Aiyf9UrfWNYPIX0fnp0aOXCW8UnDFQfPIHAK2t8H18FApjUwcA+fyIskI//d1VhWQ0XgLJ/zTvl/9gK74fkz89evS6yBsFZwwUnfzd6fUr/mQKhTEbCD0DELhHUFEcxxbReAkk/7zW+joAA634fkz+9OjR60JvFJwxsJn4JVRf9xm+0A9/A6C8TGD4CkBoawPbtiOtKpR0ZRJI/i/XWl8LJn8RnZ8ePXqZ9jhjoKjkr7y39yqKAVAKLv5XHgD47wUGt7bthlYIzkLyf6XW+idg8pdy8qBHj17GPc4YKCf5hy/7e8xEeOVf7VVIhRHH6djkf7rW+sdg8hd18qBHj172Pc4YKLO+jmPb4eQP7LwCULG13eBP/wwk/zO01tcA6G/F92Pyp0ePHj3OGCg3+fsP8Ff/zNQX/YFS7D0nUJkEkv9ZWuurweQv+uRBjx69jvBGwRkDU62v+/aeXfNz4QFA1csE7a6M1lqhtcn/1VrrHwHoa8X3Y/KnR48ePc4YKDX5e5f9637Wf+XPNFKRpCrT39/Xj9Yl/3O01j+AOwtSS74fkz89evToRfJGvX+rnssEJn+/XO7Vt6UzBra3vvU/rwF3RqDYe06wMkqpViX/1zD5Z/rkQY8evex7o+CMgSLrqyNtlVplmkr+52qtmPyzf/KgR49e9r1RdPGMgVprJbG+DQ0AMpD8z9dafR9QPcl9PyZ/evTo0YtBjaJLZwx0b2vLq2/sAUB7nl40zST/v9BafY/JP/WDnR49evTCXlfOGFh5W1tOfWMNANoV7GJxvNhg8n+d1uo7gMoFPSnBZvKnR49et3vdPWOgnPoCMQYA7Qy24zixQa31X2qtvs3kL+tgp0ePHj3OGNi27xe55PMjKtIAwF1VSO49G631hVqrbwLKaoXH5E+PHj16nDGwVTMGGmOMlHyUz48of+2fSAMAd1UhqclfvVFr9Q0mf9kHOz169OhV8UbRBTMGFovjRQn5yFv3p5wr6w4ALMuqWFVIUnLVWr1Za/11Jv/MHOz06NGj13UzBjZyWzuh5J8LgrlaH3B3HixykqvW6q+01v9TeRVDzvdj8qdHjx49zhgoY9IgAO6cOMb7HwCYaa8AaC0y2L73Nib/TB/s9OjRoxcuo+CMgck87a+t8H18FApjUwcA+fyIskI//d1VhcQE+yLL0l9l8s/8wU6PHj164TKKLp4xMInk706vX/EnUyiM2UDoGYDAPYKK4ji2lGC/07L0fwMyJ1Vg8qdHjx49zhgoIfm7b+9N+eFvAJSXCQxfAQhtbWDbdqRVhdoQ7HdZlv4vJv/UD0569OjRS9rrqhkDk/h+7tt7FcUAKAUX/ysPAPz3AoNb23ZDKwQnUZn3WJa+kslfzMFJjx49eol63TJjYHKr6gY0l5kIr/yrvYCrMOI4YpL/+yxLf5HJX9bBSY8ePXqcMXBaL9IgoF3fz3FsO5z8gZ1XACq2thv86Z9AZd5vWfoLTP4yD0569OjRS9rr1BkD27SqrudV/0z4gb+KBwQSDk4972LL0pdn7R4Qkz89evTotdwb9f4W6dwqIPn7xf++T7X7+7lv79VO5+EBQNXLBAkGZzrv3ZalTxPQeHE9Jn969OjRS8Yb9f6teY4VlPz9cjmAQru/n+PU/y3vDwBMIw2XYGWY/LN3cNKjR49e0t6o92/Vc63A5F+uavu/X/3Pa8CdESj2ntteGdEekz89evTotccbRTZnDBTn6UhbZaQyKXlM/vTo0aPXXm8UGZwxUJrX0ABAamVS8Jj86dGjRy8dbxQZnDFQkhd7ACC5Mm32mPzp0aNHL10vkzMGSvFiDQCkV4bJnx49evS6y8vwjIGpekCMAYD0yjD506NHj153ehmeMTAVz4uhijQAcFcVklsZJn969OjR624vwzMGttXL50eUv/ZPpAGAu6qQzMow+dOjR48evcCMgZEHARnORw0nf7ir/gKIcAvAsqyKmfglVYbJnx49evToVZkxsO4gIMP5qJnknwuCNQcA7s6DRU5lmPzp0aNHj16NGQOnHQRkOB816AEAesPgtAMArSVXhsmfHj169OhxxsAoRWsrfB8fhcLY1AFAPj+irNBPf3dVIRmVYfKnR48ePXqcMTBasSwduo0PUyiM2UBoNcDAPYKK4jh2pIUFshYcJn969OjR63hvFACUUpdnNB81fNnffYC/ohgA5WUCw1cAQpcJDGybyT9KEdz56dGjR6/bva6bMXCa5F8KLv5XHgD47wUGt7bt2HHOTHCY/OnRo0eve7xumzEweNnfYyYKoZV/tRcgFUYch8k/SslK56dHjx69bve6dcZAx7HtcPIHdl4BqNjabvCnf1aDw+RPjx49et3hddeMgf4D/NU/E37gr+IBAXmVYfKnR48ePXpNe6Pe3yKd+7OY39y392qn8/BDgFUvE0ioDJM/PXr06NFroTeKDp4x0HHq/5b3rwCYRgKd5eAw+dOjR49e13uj3r9Vc0GG81ukt/c04M4IFHvP2Q4Okz89evTo0QO6eMZAHWmrjFQmosfkT48ePXr0gmUUXThjoJrm7z8EcH7WKhPBKxpjHm7MsywVeLHSGAPbtu3Gvx89evTo0RPmHaOU6s9ofqvl/QjABeE/5hCzCKlMo14/gPmNeQh8n1Z8P3r06NGjJ9PLZH6L7cW6BSC9MvTo0aNHjx69aCXyAEB6ZejRo0ePHj160Uo+P6Ii3QJQCqIrQ48ePXr06NGrX7yp/zUAE+kKgLuqkMzK0KNHjx49evTqFy/5l5cJrDsAsCyrYlUhSZWhR48ePXr06NUvXvLPBcGaAwD/6UqJlaFHjx49evToRfEAAL1hcNoBgNaSK0OPHj169OjRi1K0tsL38VEojE0dAOTzI8oK/fQ3BmIqQ48ePXr06NGLVixLh27jwxQKYzYQmggocI+gojiOjUb2LT049OjRo0ePXmd6/gP8FcUAKC8TGE72ocsE7s4bKfKDQ48ePXr06HWm597GrygGQCm4+F95i3x+ZMo9AiZ/evTo0aNHL3te8LK/x0yEV/7VQPnSf0VxHCZ/evTo0aNHL+ue49h2OPkDO28BVGxtN/jTP6vBoUePHj169DrPq30lP/wMQMUDAvIqQ48ePXr06NGr57lv79VO5+GnBPzLBLEGAVkMDj169OjRo9epnuNUpPGqOd2/AmAKhbHgdYLN0ipDjx49evTo0YvqVWxaNadrwJ0RKPT3P8irDD169OjRo0evAa9qTtfT2D8XXhl69OjRo0ePXjSvak5XqF6GAWyEu3iAxMrQo0ePHj169Op7EwB2A7A1/B+muwKwFcBNQitDjx49evTo0Yvm3YQqyR+ovRzwF4VWhh49evTo0aMXzfvitGadfa4FsERYZejRo0ePHj169b11AJZW+w/5/IiqNwA4GcB6pWBZU5YT7ojg0KNHjx49ep3o2QAWA7g3+Edv6n8NwFioXZ5RSllaW6colXpl6NGjR48ePXrRvE8B+E7wD17yL+f9mgOAfH5Ez5mz571/+tOfjwdweIcFhx49evTo0etE7ycA3gugvKGX/HMeaIAaAwBv44Genh7V3993w8aNL84HzEEdEhx69OjRo0evE71bAFwAYNL/g5fPeyuw6W4BeBv3wb1PoIaHh53h4aGr//SnP+9ljDkh48GhR48ePXr0OtG7CsCFAMb9P+TzIxpuPi//8gfc6f+nvAYYGCkE9+7svvtuLxpj/grAWwC8mNHg0KNHjx49ep3mvQg3N78V7sQ/AMrJvz8MFgpjNhCaByB0j2Dn3oHtgcWCvgHgMAD/CWBbRoJDjx49evTodZq3DW4uPgxubi4XL/kPYGo+L68MGL4CYFXZeEdopUDAnSb4QwD2AXARgGsBPC8wOPTo0aNHj14nec/DzbkXwc3BH4Kbk8vFS/6DmJrPS8HF/1TgAxa8e/7YOTCYqJL8a5XdAcyxLGtgeHhoUAXeHTTGmK1bt+2wbTuOBwCwLEsPDw8N0KNHjx49el3oGbj39Tcg9GM7XLzkP+z9Xwc7f/WPh1f+Vd4H/KTvDwAU3OQfeygT2Hl45LE15mCCHj169OjRo9eYZ+AOABy4V/Kn5POc929455NM/vTo0aNHj17mveJ0+TwX+v8GgM3kT48ePXr06GXa83/5T+uFHwJk8qdHjx49evSy722v5/lXAEwjO854cOjRo0ePHr2u9VS9DbJUGXr06NGjR49eNK/hAYDEytCjR48ePXr0opWGBgBSK0OPHj169OjRi1ZiDwAkV4YePXr06NGjF63EGgBIrww9evTo0aNHL1qJPACQXhl69OjRo0ePXmRTRRoASK8MPXr06NGjRy+Sp+DOAWR0hI01qq8qJKUy9OjRo0ePHr36noK76i+AqTMBVtv5QGg7SZWhR48ePXr06NX3FNzJ/8qerrNxv+DK0KNHjx49evTqewpAb9jL1di4T3Bl6NGjR48ePXrRvN6AAwAoFMamDgCmGSk4iLCwQIaDQ48ePXr06HWi1+8ZfvI3hcKYDYSWA652j8D70A5BlaFHjx49evTo1fcGAo7/r+1vE74CYFXZeVFQZejRo0ePHj169b3BgOP/WyoUxsq3AXKBD1RL/uOCKkOPHj169OjRi+YB7u1735sIJn/AGwB4l/6DperGHRYcevTo0aNHr1O94C//8Wr53L8CEN75JJM/PXr06NGjl3mvOF0+Dz8DYADYTP706NGjR49epj0HdR7gD08ExORPjx49evToZd+r++q+fwXANLLjjAeHHj169OjR61pP1dsgS5WhR48ePXr06EXzGh4ASKwMPXr06NGjRy9aaWgAILUy9OjRo0ePHr1oJfYAQHJl6NGjR48ePXrRSqwBgPTK0KNHjx49evSilcgDAOmVoUePHj169OhFNlWkAYD0ytCjR48ePXr0InkK7hxARkfYWMNdVUhqZejRo0ePHj169T0Fd9VfAFNnAqy284HQdpIqQ48ePXr06NGr7ym4k/+VPV1n437BlaFHjx49evTo1fcUgN6wl6uxcZ/gytCjR48ePXr0onm9AQcAUCiMTR0ATDNScBBhYYEMB4cePXr06NHrRK/fM/zkbwqFMRsILQdc7R6B96EdgipDjx49evTo0avvDQQc/1/b3yZ8BcCqsvOioMrQo0ePHj169Op7gwHH/7dUKIyVbwPkAh+olvzHBVWGHj169OjRoxfNA9zb9743EUz+gDcA8C79B0vVjTssOPTo0aNHj16nesFf/uPV8rl/BSC880kmf3r06NGjRy/zXnG6fB5+BsAAsJn86dGjR48evUx7Duo8wB+eCIjJnx49evTo0cu+V/fVff8KgGlkxxkPDj169OjRo9e1nqq3QZYqQ48ePXr06NGL5jU8AJBYGXr06NGjR49etNLQAEBqZejRo0ePHj160UrsAYDkytCjR48ePXr0opVYAwDplaFHjx49evToRSuRBwDSK0OPHj169OjRi2yqSAMA6ZWhR48ePXr06EXyFNw5gIyOsLGGu6qQ1MrQo0ePHj169Op7Cu6qvwCmzgRYbecDoe0kVYYePXr06NGjV99TcCf/K3u6zsb9gitDjx49evTo0avvKQC9YS9XY+M+wZWhR48ePXr06EXzegMOAKBQGJs6AJhmpOAgwsICGQ4OPXr06NGj14lev2f4yd8UCmM2EFoOuNo9Au9DOwRVhh49evTo0aNX3xsIOP6/tr9N+AqAVWXnRUGVoUePHj169OjV9wYDjv9vqVAYK98GyAU+UC35jwuqDD169OjRo0cvmge4t+99byKY/AFvAOBd+g+Wqht3WHDo0aNHjx69TvWCv/zHq+Vz/wpAeOeTTP706NGjR49e5r3idPk8/AyAAWAz+dOjR48ePXqZ9hzUeYA/PBEQkz89evTo0aOXfa/uq/v+FQDTyI4zHhx69OjRo0evaz1Vb4MsVYYePXr06NGjF81reAAgsTL06NGjR48evWglF3XDKjsPTzLgoLnpgunRo0ePHj16bfJiXwEITC/YyumC6dGjR48ePXpt9GINALydV1siuJnpgunRo0ePHj16bfSAGAOA/PRLBFedYYgePXr06NGjJ8/zzUgDgHz1JYINGp8umB49evTo0aOXjqcBmLoDgPz0SwSXmtg5PXr06NGjR6/9nuUZxoq4cXjnjc4YSI8ePXr06NFL1zNA/dcAtbdheWeFwpgdd8f06NGjR48ePVHe9FcA8lWWCG70SUN69OjRo0ePnijP/H9ZyQMYpyDmsQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNC0yN1QwNToyMzo1Ny0wNTowMMEjjosAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDQtMjdUMDU6MjM6NTctMDU6MDCwfjY3AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./public/imgs/headshot2.jpg":
/*!***********************************!*\
  !*** ./public/imgs/headshot2.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./public/imgs/heart-squiggle.svg":
/*!****************************************!*\
  !*** ./public/imgs/heart-squiggle.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjI0cHgiIGhlaWdodD0iMjczcHgiIHZpZXdCb3g9IjAgMCA2MjQgMjczIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGcgaWQ9ImhlYXJ0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibGl0dGxlc3F1aWdnbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuMDAwMDAwLCA2LjAwMDAwMCkiIHN0cm9rZT0iI0ZGMjIwMCIgc3Ryb2tlLXdpZHRoPSIxMSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02MTUuMTA2NzIzLDEzNC40MzA4OTMgQzU2Mi45ODg4NzgsMjg1LjcxNzY1MiAzNDQuMzAzNzc0LDIzNS43MzU2MDMgNDI0LjYzNzg1MywxOTguMjc1ODEgQzQ1MS41OTQyNzksMTg1LjcwNjAyNSA0NDIuNDkxMTMyLDMyOS4yNjMyNDkgMzIwLjQ4NjAzLDIxOS4xMTM3NDIgQzI5My42MzMwMDYsMTk0Ljg3MDEwNiAyNzguOTk1MDA5LDEzOC41MjcwMzcgMjc4Ljk5NTAwOSwxMTUuMDQ1ODg1IEMyNzguOTk1MDA5LDcxLjc4NTI5NDQgMjgzLjY3NTg1NSwzMC44MTkxODE1IDMyMy45MjU3MjcsNDEuNjIzNzkyOSBDMzM5LjAzMTA1NSw0NS42Nzg2NDI5IDM0NS44MjM3MzcsNjEuMjY3ODY3MyAzNDQuMzAzNzc0LDg4LjM5MTQ2NiBDMzc1LjkzNTI5Miw3OC4wMDQ0NDg5IDM5My44NjU2MTMsODMuOTc5NDcxMyAzOTguMDk0NzM4LDEwNi4zMTY1MzMgQzQwOC4wODA0NjIsMTU5LjA1ODM1NyAyNzAuNzYzNDY4LDE3OS44Njc4MTIgMjQzLjg1ODU0NywxNTMuNzEzOTMxIEM5NS40NjM1NjcyLDkuNDYxMzQwMTEgNDMwLjM3MzE3NywtNjQuMDA5ODk4IDQ2NS4zMzY2NzMsNzIuMzM0MTIyIEM0ODguODcyMjA1LDE2NC4xMTM1MzYgMzA3LjY1OTU2MywyOTAuNDI0NjQxIDAuMjEyNDAyMDM5LDEyNS42MjY1MTYiIGlkPSJoZWFydC1wYXRoIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "./public/imgs/heart.png":
/*!*******************************!*\
  !*** ./public/imgs/heart.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB9AAAAcWCAYAAABdiTnQAAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nOzde7j26Vzw//dlxjAThhiRIZuRSZFNZROyi1KPUFJIenq0oZQHZff0yD5RSoRkF6Fsomwi++witKHy40kqihSabIaZ8/fHd00zxjBzz73WOq9rXa/XcVzHdd33PZu3wz3rXt/v53ueZwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwC1azAwAAAAAA4KyMOqr6ip3XUWf65fNVxxzCP+6I6gLVJ3Z+/OnqMzuf/2Pn/TOr5ecBgC1lgA4Aa24sf15fuOVC/0LVkdUFq/O2XPifdjPhtBsH56+O3vl8vk6/yXCBnb/ngjv/jNOc1U2IY6vznOHH59n5uTM67d+7n854c+Oz1ad2Pn+++s+dz6P6+Bn+nk9Up+58/s+dv7adv/ez1SnVJ6uTdv7Zn6z+a+ff9UWfV3Xyrv4vAgAAOEDGcv160eorz/S6UMt15WnXrqddo16k069zj265pj3t2vfC+5x/ZqddT57ccm1Yp19XnrTz659ouV487fPHz/D5C359dfp1KwCwxgzQAWAPjeWmwLE7r9NuFlz4LH7uS/36sX3xcJu5Tm25AfJfLQP3M3/+9+pjX+59dfoQHwAAYC3tPMz9VdUld15nHoif1esifeHD2Hyh064n/6NlqP4f1Yerj1T/Wv3Lzud/2fnxR1b1uTmpALC9DNAB4BCM5Sn6i1fHtdxI+KqdzxdruaFw3Bl+fGxfuNIbTvOJlmH6v3XWg/Z/rf65+sfqw26YAAAAu2ksu4ldurpEdXzL9ezx1aXO8PkSeaB7HXy0Zaj+kc562P6h6h9Wp29BDwAcJgN0ALbeWLaPu3R1mU6/gfBVLUPw4/rCwfh5J2WyvUbLjZEPdfpQ/UPVP+28PlR9cHX6dvYAAMAWG8vxX8dXJ1SXry678+Ov3nldqi8+oovN94nqA9UHq7/f+fyB6h9aBuwfmxUGAJvGAB2AA28s28hdZud12TN8vnT1NS0Dc38msuk+0elD9Q9W76v+32nvq2V7QAAA4AAYyznhl6+ucBavy2blOF/sP/vCofoZP/+9ATsAnM6wAICNN5YbA19bXWnn/bQB+dfsvC4wrw7WxkdaBur/X/U31d/tvL/PFvEAALB+Rl2w5Tr3tJXkZxySXyr3dtldH6ve03Kt+LdneH1gVafMDAOA/eabLAA2xs7541eqvm7n/cSdz5dr2aIOOHSfa1ml/p6WmyN/ufP6/9wkAQCAvbdzrNjXVV9ffcPO6+tbVpK7f8tsn63e23K9+N7q3af9eFX/NTMMAPaKb8AAWCtj+bPpci0D8it3+qD8xJYzyIH98amWofo7q7+q3lW9a7Vs+wcAAByiUUe2rB6/Sl84LD+h5ddg03yw01es/031F9VfruqkqVUAcJgM0AGYZtR5qitW16yusfN+9erYmV3Al3Rqy02Rt1Vv33l/16pOnloFAABrZtQlW65zr9IyJL/yzut8M7tgH5zassvZO6t37Ly/a1UfnVoFAIfAAB2AfTGWLdZPbLmBcNqw/GotZ7oBm+vklhsib65eX715Vf8yNwkAAPbPqItU31x90xnej58aBevnn9vZ2Wzn9c7q/61qTK0CgLNggA7ArtvZhv3E6tqdPjC/WnXMzC5g37y30wfqr1vV+yf3AADArhjLQ+DX6PRB+Te1bMsOHLqP98VD9Xev6pSpVQBsPQN0AA7bWLag++bqW6vrVtfJeeXA6f6hetXO69VWqAMAsAlGnb/lYfAzriw/seU4MmBv/Gf11uotO683r+rf5yYBsG0M0AE4ZKOObhmU36i6YctNBOe4AefUu6tXVC+vXr+qz0zuAQCAxvIg+PXP8Lpqdd6pUcCo/rZll7O3Vm+q3rNazloHgD1hgA7A2Rp1VMt27DeqblxdKwNzYHd8qmVl+kurl6/qA3NzAADYFqMuXd2gZVh+g5bV5e6Xwvr7RMtA/S0tQ/U3r5afA4Bd4RtCAM7SqOOr76i+q7ppdYG5RcCWeHf1B9ULV/Xns2MAADg4Rl2p01eX36C67NQgYLecWr2nZXX6m6vXrJajxADgXDFAB6CqUUe2bMt+i53XVeYWAfTBlmH6H7Rs9X7K5B4AADbEWM4p/4bq21qG5derLjE1CthP769eXb2mevWq/nVyDwAbxAAdYIuN5ebBaQPzm1bHzi0C+JI+Wj2vek71p867AwDgzEZdrrr5zuuG1YWnBgHrYrSsUH9Vy1D9dav6+NwkANaZATrAlhl19er7qu+srpY/C4DN88/V77cM0/9stdwMAQBgy4zlqLEbV9/ecgTZCXOLgA1xSvXOloH6a6o3rOpTc5MAWCeGJgBbYCyD8u+vbpsbCsDB8v7q6dUznHEHAHCwjeVe5tVahuXfXn1rddTUKOAgOLl6a8vq9FdVb10tPwfAljJABzigdobmt915XXFyDsBeG9UbqqdWz1vVSZN7AADYBTtHj317y7bsN6uOm1sEbIGTqldWL61esqoPT+4BYJ8ZoAMcIKO+sWVg/v0ZmgPb66Tq96onrOpts2MAADjnRh1ZXb/TV5k7egyYaVTvqv6oekn1tlWdOjcJgL3mm0+ADTfqxOqOLYPzr52cA7Bu3l49oXq2M+0AANbTqGNaVpjfqvqu6qJziwC+pI9WL2tZnf7yVX1icg8Ae8AAHWADjTq2ul115+o6c2sANsLHq2e0rEr/m9kxAADbbixD8u9uGZrfrGWIDrBJPl+9sWVl+ktW9Z7JPQDsEgN0gA0x6jzVjVuG5repjp4aBLCZRvW6llXpL1jV5yb3AABsjVGXaRmY36q6QXXE3CKAXfWBlq3eX1q9ZlWfmZsDwLllgA6w5kZdofrhnddlJucAHCT/Wv129cRVfXB2DADAQTTqKi0D8++prjk5B2C/fLJlmP68lq3ePz25B4BDYIAOsIZGXaD6vupHquvn6zXAXvp8y02NR63qz2fHAABssp3d065d3XrndYW5RQDTndSyzfvzqpeu6lOTewA4GwYyAGtk1DdWd61u3zJEB2B/vaZ6ZPXHq2W7dwAAzoFRV2u5lv2B6tKTcwDW1adatnh/Xsu56SdN7gHgLBigA0w26qiWM83vVl1vcg4Ai7+qHl09e1Unz44BAFhHoy5f/WDL4PzKk3MANs2nq5e3DNP/aLVs+w7AGjBAB5hk1KWqH6/uUl1icg4AZ+1D1WNazkl3MwMA2Hqjvqr6/pah+bVyfxFgN3ymekXLMP0PV/XxyT0AW803uAD7aCxfd2/Ystr8e6ojpwYBcE59snpS9eur+sfZMQAA+2nUhapbtQzNb1odMbcI4EA7uWWY/qzqRatlpToA+8gAHWAf7Nxs+KGW881tawewuT5XPbN66KrePzsGAGCvjDpf9Z0tQ/Pvro6eWwSwlT7Rsir9GdUbVjUm9wBsBQN0gD20cx7cT1c/Wl1wcg4Au+fzLasBHraq986OAQDYLaOuV925+t7qwnNrADiDf2gZpD/TdSjA3jJAB9gDo76luld1m2xtB3CQnVI9u2VF+t/OjgEAODdGXby6Y3WX6sTJOQCcvTe3PNT97FX9++wYgIPGAB1gl4w6T8u2dveqrj85B4D9dWr13JZB+rtnxwAAnJ2da9ibtAzNb9myZTsAm+Wz1cuqp1UvWy3npwNwmAzQAQ7TqGOqH67uUV1xcg4Ac53acj7dQ1b1V7NjAADObNTx1Y+0HDX2NZNzANg9/179bvW7q2WFOgDnkgE6wLm0s8Xd3aq7VhebnAPAehnVC6sHreovZscAANtt1HmrW1Q/Vt08R40BHHR/Wz21etqqPjI7BmDTGKADHKJRV6ruWf1Qdf7JOQCst1E9v/qFVf3N7BgAYLuMukLLFu13qi45OQeA/ffZ6g+qJ1avXS3XqACcDQN0gHNo1NWr+1bf23JWHACcU6dUz6x+cVV/PzsGADi4xnKW+fdW/6u6Ye7/AbD4u+pJLavS/312DMA68w00wNkYdb3qftV35OsmAIfn5OrJLWekf3h2DABwcIy6RPUT1Y+3fAaAs/KZ6verJ67qjbNjANaRQRDAlzCWgfl9qxvMbgHgwPl09djqkav62OwYAGBzjfqm6u7V7aqjJucAsFn+unpC9cxVfWJ2DMC6MEAHOIOxbM1+65YV59eYnAPAwfeJ6leqX1nVSbNjAIDNMOq8LdeuP1Ndd3IOAJvvv6rnVE9a1Z/NjgGYzQAdoP+++XD76uerr5ucA8D2+bfqEdXjV8vqdACALzLqYi1nm9+tOn5yDgAH0zurJ1bP8qA3sK0M0IGtNup8LTcf7lVddm4NAPTP1YOqp6zq87NjAID1MOqq1U9Xd6iOnpwDwHb4ePXk6rGr+uDsGID9ZIAObKUzDM7vk6f2AVg/76nuv6o/mB0CAMyxc8TYLVsG5zeenAPA9vp89fyWo8ds7w5sBQN0YKvsDM5/tLpvBucArL8/re69qrfMDgEA9seoC7Zct969utzkHAA4ozdVv1q9cFWnzI4B2CsG6MBWMDgHYIONlpXo91nVe2fHAAB7Y9TFW4bmd60uMjkHAL6cv69+veX4sU/OjgHYbQbowIE26qiWrdoNzgHYdJ+vnlQ9eFX/MjsGANgdoy5f3av6ker8k3MA4FB8suWc9F9f1T/MjgHYLQbowIFkcA7AAXZS9ajq0avlMwCwgUZdo/q56vuqIybnAMDhOKV6QfWrq3rz7BiAw2WADhwoZxic36e69OQcANhLH64eUj1ptaxOBwA2wKjrV/evbj67BQD2wFuqX2k5J921KrCRDNCBA8HgHIAt9t6W89FfODsEAPjSRt20ekD1bbNbAGAf/H31iOppqzp5dgzAoTBABzbazuD8R1u2ajc4B2CbvaW616reODsEAFiM5d7bLVoG59eenAMAM/xT9cjqt1f1qdkxAOeEATqwkXYG5/+zul8G5wBwRi+sHrCq98wOAYBttTM4/56Wwfk1J+cAwDr4SMvW7o9f1X/OjgH4cgzQgY1icA4A58jnq6dUD1wtZ6UDAPtgZ3B+y+pB1VUn5wDAOvr36teqx67qP2bHAJwVA3RgI5xhcH7f6jKTcwBgU5xUPab6pdXyGQDYI6O+u/rF6hqzWwBgA3yy+o3qMav66OwYgDMyQAfWmsE5AOyKj1YPrJ68qpMntwDAgTLqO1sG5988uwUANtB/Vb9VPWpV/zw7BqAM0IE1dYbB+X2qr5mcAwAHxftajkF53qrG7BgA2GSjvr1lcH6d2S0AcAB8tuUoskeu6gOTW4AtZ4AOrJVRR1Z3bFklZ3AOAHvjLdV9V/Xa2SEAsGlGfUv18OrGs1sA4AD6XPXM6mGr5SFwgH1ngA6shbF8Pbpty9P7J07OAYBt8cLq59yUAICzN+rrqodUt849NQDYa5+vnl49eFX/MDsG2C6+2QemG/Xd1YOrq81uAYAtdHL12Oohq/r47BgAWDejLl393+qHW3ZNAwD2z8nVk1pWpH94dgywHQzQgWlG3ajl6f3rzm4BAPq3luHAk1bLk/4AsNVGXaz6+epu1dGTcwBg2326elz1S6vl+hVgzxigA/tu57y4h1Y3nd0CAHyR91T3XNXLZ4cAwAyjjqp+unpAdeHJOQDAFzqpekz1aLuoAXvFAB3YN6OuVD285bw4AGC9vbxlkP6e2SEAsB/Gcp/sB6qHVZedWwMAnI2PtdxrfvxqWZ0OsGsM0IE9N+riLVvC/ljOiwOATfL56vHV//VkPwAH2ajrVb9cXXt2CwBwSD7Ycu/5Gas6dXYMcDAYoAN7ZtQx1T2q+1QXmJwDAJx7H67uXf3uqsbsGADYLaNOqB6ZndIAYNO9u7rvqv5wdgiw+QzQgV036jzVnauHVJecWwMA7KLXVnezrTsAm24sZ5s/oOWs86Mm5wAAu+cN1c+t6i2zQ4DNZYAO7KpR31E9urry7BYAYE98rnpM9aBVnTQ7BgAOxRke+H54y3FjAMDB9MKWQfr7ZocAm8cAHdgVo67eMji/0ewWAGBf/GP1v1f1vNkhAHBOjPrW6rEt168AwMF3csuf/Q9Z1cdnxwCbwwAdOCyjLtayVftdWp7kBwC2yyuqu67q/bNDAOCsjLpM9YjqB3IvDAC20b9VD66esFqG6gBflosG4FwZyxlxP91yZtyFJ+cAAHN9uvqF6jGr+vzsGACo/75uvXd1v+qYyTkAwHzva9nW/YWzQ4D1ZoAOHLKdc85/tTpxdgsAsFbeUf2vVb1zdggA223UzavfqE6Y3QIArJ3XthxJ5toVOEu2WwbOsVEnjnpZy8vwHAA4s2tUfzbql0YdPTsGgO0z6jKjnl+9PMNzAOCs3bDl2vVxO0eUAnwBK9CBszWWLdof0LJl+1GTcwCAzfC+6sdX9erZIQAcfDvbtd+zun/1FZNzAIDN8R8t976f5Egy4DQG6MCXNJavEXeqfrk6bnIOALB5RvXU6l6r5aYEAOy6UTdt2a79SrNbAICN9e7qp1bL9u7AljNAB87SqKtUj6+uN7sFANh4/9KyGv3Fs0MAODhGXbz6leoOs1sAgAPjhdXPruqDs0OAeZyBDnyBURcYyw2Id2R4DgDsjktULxr1tFHHzo4BYLONWo36n9XfZHgOAOyuW1d/O+p+w3GmsLWsQAf+26jvr361+urZLQDAgfVP1V1W9fLZIQBsnrFs0/7E6ttmtwAAB957W7Z1f+XsEGB/WYEONOprR72iem6G5wDA3jq+eumoJ4664OwYADbDqPONemD1lxmeAwD742urV4z6vbFcywJbwgp02GKjjq7uV/1ctqMBAPbf31c/sqrXzQ4BYH2N5XixJ7esPgcAmOGk6kHVr67q87NjgL1lgA5batRNWra9u8LsFgBgq51aPa66z6o+NTsGgPUx6gLVw6u7ZhdFAGA9vLv6iVX96ewQYO8YoMOWGfWV1aOrH87XAABgfby3usOq3j47BID5Rn179aTqspNTAADObFS/Vf38qj4+OwbYfZ7ehS0y6vbV31R3zvAcAFgvX1u9adR9husUgK016sKjfrv64wzPAYD1tKp+rPqbUbebHQPsPgM02AJjuenw+Oo7J6cAAJwTr63utKp/nB0CwP4ZdcvqN6uvnt0CAHAIXlrdbVUfmB0C7A4rO+AAG3XEqJ+t/irDcwBgc9yw+otRt50dAsDeG3WRUb9TvSjDcwBg89yi+utR9x515OwY4PBZgQ4H1KirVk+uvnl2CwDAYXhq9TOr+s/ZIQDsvlE3b9my/VKzWwAAdsE7qh9d1btmhwDnnhXocMCMOu+o/1u9PcNzAGDz/Uj1jlHfMjsEgN0z6ivGctTYyzI8BwAOjmtUbxv14FHnmx0DnDtWoMMBMuobW1ZpXX12CwDALvt89cDq4as6dXILAIdh1PWqp1VXmJwCALCX3tOyGv0ts0OAQ2MFOhwAo44c9QvVn2V4DgAcTEdWD6leNuq42TEAHLpR5x/1y9XrMjwHAA6+K1dvHPUro46ZHQOcc1agw4YbdZXq6RmcAwDb48PVHVb1mtkhAJwzO9euz2p5BwDYNv+vZTX6a2eHAGfPCnTYUDurzh/Qcta54TkAsE0uWb1y1P8ZrmkA1tqo1aifbdkxzfAcANhWl69ePeo3Rn3F7Bjgy7MCHTbQqG9oOS/umpNTAABme011+1X9y+wQAL7QWB54elp1s8kpAADr5P3VnVf1p7NDgLNmtQZskFHnGXXvllXnhucAAHWj6p2jbjI7BIDTjbpV9ZcZngMAnNkVqteN+uVR558dA3wxK9BhQ4y6TMuT+zeanAIAsI5OrR5a/eKqTpkdA7CtdrYk/dXqLrNbAAA2wHuqH14ti+aANWGADhtg1O2rx1fHzm4BAFhzr6p+cFUfnR0CsG1GXa16dnXi7BYAgA3y+eph1UNW9bnZMYABOqy1URepfrO63ewWAIAN8o/V963qz2aHAGyLUXerHpVtSAEAzq0/r+6wqr+bHQLbzhnosKZ2zvH8iwzPAQAO1aWr14/6idkhAAfdqAuPekH1GxmeAwAcjmtW7xj1k8MCWJjKf4CwZsZyw+Gh1T3y3ygAwOF6evUTq/rM7BCAg2bUdarnVJeZ3QIAcMC8pPrRVf3r7BDYRoZzsEZGfUP1u9VVZrcAABwg76pus6q/nx0CcBCMZUfDn6seXB05OQcA4KD6SMsQ/Y9mh8C2sYU7rIlRP1a9NcNzAIDddrXq7aNuMTsEYNONumj10urhGZ4DAOyli1d/OOoJo46ZHQPbxAp0mGzUsdWTqu+f3QIAcMCdWj2oetCqxuwYgE0z6trVc7NlOwDAfvu76gdWyw5rwB6zAh0mGnWt6p0ZngMA7IfzVA+sXjjqApNbADbKqJ+qXp/hOQDADFeq3jLq7sPiWNhz/iODCXb+gLtX9dDqvJNzAAC20V9Xt1rV+2eHAKyzUReqnlzddnYLAABVvbj6n6v62OwQOKgM0GGfjeXckmdUN5/dAgCw5T5W3W5Vr5odArCORn1D9fvVibNbAAD4Av9c3XFVr50dAgeRLdxhH426afUXGZ4DAKyDi1YvH/XTs0MA1s2oO1RvzfAcAGAdXar6k1G/OOrI2TFw0FiBDvtgLA+r/J/qF/LgCgDAOvrt6m6r+uzsEICZdm7APrK6x+wWAADOkTdUP7haVqUDu8AAHfbYqOOqZ1Y3m90CAMCX9abqNqv619khADPsXL8+t7rR7BYAAA7JR1u2dH/F7BA4CKyEhT006trVn2d4DgCwCa5bvX3UNWeHAOy3Udeo3p7hOQDAJjquetmoB406YnYMbDoDdNgjo36men116dktAACcY8dXrxt169khAPtl1A9Vb6wuM7sFAIBz7bSjZF856hKzY2CTGaDDLht1oVG/Vz2mOu/sHgAADtlXVM8bde/ZIQB7adSRo36tekZ1/tk9AADsihtV7xx2FoJzzRnosItGfUP1vOpKs1sAANgVT67uuqrPzQ4B2E2jvrLl4e+bzG4BAGBPnFL9YvXQVZ06OwY2iQE67JJRd6p+szpmdgsAALvqVdVtV/Ufs0MAdsOor6teXJ0wuwUAgD33kuqOq/r47BDYFLZwh8N0hi3vnp7hOQDAQXST6k2jrjA7BOBwjbpF9eYMzwEAtsV3VW8bddXZIbApDNDhMIw6rnpldffZLQAA7KkTq7eM+tbZIQDn1qh7tqw8P3Z2CwAA++qE6s2jbj87BDaBATqcS6OuUb2tuuHkFAAA9sfFqj8Z9QOzQwAOxajzjXpq9ajqiNk9AABMcUz1rFG/Nuq8s2NgnTkDHc6FUXeofqs6enYLAAD7blT3X9XDZ4cAnJ2dndP+oLru7BYAANbGn1a3XdW/zA6BdWSADodg1JHVL1X/e3YLAADTPb66+6pOmR0CcFbGcvzEH1VXmN0CAMDa+VDLEP1Ns0Ng3Rigwzk06qLVc6ubzG4BAGBtvKj6wVV9enYIwBmN+rbqBdVXzm4BAGBtfbb6ydVy3A+wwxnocA6M+sbq7RmeAwDwhb6nevXOw5YAa2HUnapXZHgOAMCXd77qKTvnoh85OwbWhQE6nI1Rt2w5D+Syk1MAAFhP167eNOrys0OA7TZqNeoXq6dVR03OAQBgc9y9ermHw2FhC3f4Mkbdu3pEHjYBAODs/Wv13atl5yKAfTWW1UNPru44uwUAgI31/upWq/rr2SEwkwE6nIWxPKn/xOrOk1MAANgsJ1W3W9VLZ4cA22PUhasXVjecnAIAwOY7qbrTavn+EraSVbVwJqMuVv1JhucAABy6C1QvGr6XBPbJqEtVr8/wHACA3XGB6vmj7jcsxGVL+Y0PZzDq66sXVVeY3QIAwEYb1b1X9ejZIcDBNerK1cuqy8xuAQDgQHpm9b9W9dnZIbCfDNBhx6ibV8+tjp3dAgDAgfHw6v6rZaAOsGtGXa96cXWR2S0AABxof1rdelX/NjsE9ost3KEa9VPVSzI8BwBgd923euKoI2aHAAfHqFtXr8zwHACAvXe96s92dvCFrWCAzlYbdZ5Rj6kem5uaAADsjbtUzx11vtkhwOYbdbfq96vzz24BAGBrXK5646ibzQ6B/WCAztYadXTLTYefmd0CAMCB973VS0ZdcHYIsLlGPbD6jTwADgDA/ju25br2brNDYK85A52tNOpiLWfFXWd2CwAAW+Vt1S2cHQccirHcv3lMdffZLQAA0PK96T1XdersENgLBuhsnVFXqF5WXXF2CwAAW+lvq5uv6oOzQ4D1N+rI6qnVHWe3AADAGTy/+qFVfXp2COw2A3S2yqhrVX9YHTe7BQCArfYP1U1W9f7ZIcD62jl67LnV/5jdAgAAZ+HN1S3tssZB4wx0tsaoW1WvyfAcAID5vqZ6/aivmx0CrKdRF6pemuE5AADr6zrVm0adMDsEdpMBOlthLOfEPa/l6X0AAFgHX129dtTVZocA62UsD36/urrh5BQAADg7V6zePOras0Ngtxigc6CNWo16RPVr1RGzewAA4EwuXr161LfMDgHWw6hLVq+rrjm7BQAAzqGLtVzb3mZ2COwGA3QOrLEMzJ9S/fzsFgAA+DIuUv3JqBvMDgHmGnWZluG54x0AANg0R1e/N+qus0PgcBmgcyCN5Qv1C6o7T04BAIBz4oLVy0bdbHYIMMeoy7cMz684uwUAAM6lI6rHjfrF2SFwOFazA2C3jbpw9eLq+rNbAADgEH22+v7V8v0ssCVGnVj9SXWp2S0AALBLnlTddVWnzA6BQ2WAzoGyc1bcy6urzm4BAIBz6XPVHUACA/8AACAASURBVFb1+7NDgL036irVK6uvmt0CAAC77IXV7Vf1mdkhcCgM0DkwRp1QvaK63OwWAAA4TKe0DNGfOzsE2DujrtFyHXvR2S0AALBHXlfdalUfnx0C55QBOgfCzk2Hl+aJfQAADo5Tqjuu6jmzQ4DdN+qbWrZtP3Z2CwAA7LG/rL5jVR+eHQLnxHlmB8DhGnXD6jUZngMAcLAcUT1z1A/ODgF2187w/JUZngMAsB2uWr1x1OVnh8A5YYDORht1i5aV5xea3QIAAHvgiOp3Rt1+dgiwO0Zds2V4fuHZLQAAsI8uV/3pqK+fHQJnxwCdjTXqNtULq6NntwAAwB46onrGqDvMDgEOz87w/E8yPAcAYDtdsnrdqG+eHQJfjgE6G2nUHavfq46a3QIAAPvgiOrphuiwuaw8BwCAqi5avWrneF5YSwbobJxRP149veUmIgAAbIvThug/NDsEODSjrtEyPL/I7BYAAFgDF6xeOuq7Z4fAWTFAZ6OM+t/Vb+b3LgAA2+mI6qlWosPmGHW1lm3bDc8BAOB0R1cvGPWDs0PgzAwh2RijHlA9ulrNbgEAgIlOW4l+29khwJc36srVKzI8BwCAs3Le6ndG3WV2CJyRQSQbYdQjqp+f3QEAAGvk5Or7VvWHs0OALzbqhOp11VfPbgEAgDU3qp9e1eNmh0AZoLPmxvJ79Nern5rdAgAAa+jk6par+uPZIcDpRl2mekPLOwAAcPZGda9V/crsELCFO2vL8BwAAM7WUS1nxt1wdgiwGHWp6lUZngMAwKFYVY8ediNmDRigs5Z2huePzfAcAADOzjHVH4267uwQ2Hajjms58/yE2S0AALChHjHqF2ZHsN1s4c7a2Rme/0Z119ktAACwQT5Rffuq3jY7BLbRqGNbzjz/xtktAABwADx8VfebHcF2MkBnrRieAwDAYfn36kar+svZIbBNxrITxKuqa89uAQCAA+RRq7r37Ai2jy3cWRs7w/PHZXgOAADn1ldWfzLqxNkhsC1GHVX9fobnAACw2+416lGzI9g+BuishZ3h+eOrn5zdAgAAG+646pWjjp8dAgfdzrXsU6pbzG4BAIAD6p6jHjk7gu1igM50OzccfrP6idktAABwQBxfvWYsw3Rg7zyuusPsCAAAOODuPerhsyPYHgboTHWGbdt/fHYLAAAcMCdUrxh17OwQOIhGPTC7qAEAwH65z6iHzI5gO6xmB7DdRv1KdY/ZHQAAcIC9vvrOVX1qdggcFKPu2vIwOAAAsL8evKpfmB3BwWYFOtOMenCG5wAAsNduUD1n1FGzQ+AgGMuW7b8xuwMAALbU/9nZDQr2jBXoTDHqftVDZ3cAAMAWeVZ1p1WdOjsENtWoG1cvywMpAAAw2y+sloWasOsM0Nl3o362+tXZHQAAsIV+c7VsPQ0colFXqd5QHTu7BQAAqOp/r8yb2AMG6OyrUT9WPSG/9wAAYJaHruoBsyNgk4w6vnpzyzsAALAeRvUTq3rS7BAOFkNM9s2oO1VPy+87AACY7a6r+s3ZEbAJxrLi/A0tK9ABAID1cmp151X9zuwQDg6DTPbFqNtWz66OmN0CAAB0SnWbVb14dgiss1FHV3/UcvY5AACwnk6pbreq588O4WAwQGfPjfof1fOqo2a3AAAA/+1T1Y1X9dbZIbCOxvIA+AuqW85uAQAAztbJ1a1X9dLZIWy+88wO4GAbdf3qORmeAwDAujmmesmwLTV8Kb+U4TkAAGyKo6rnDbtHsQusQGfP7NyIe0PLeXEAAMB6+qfqOqvlHahG/WT1+NkdAADAIfuv6iZ2W+NwGKCzJ0adUL2xuvjsFgAA4Gz9VXX9VX1idgjMNupmLds+HjG7BQAAOFc+Wt1oVe+eHcJmMkBn1406vnptdYXJKQAAwDn36uo7V8u5cbCV7KQGAAAHht3WONecgc6uGnXhlif1Dc8BAGCz3Lh6yvCgNVtqLDuovTTDcwAAOAiOr14z6rjZIWweA3R2zahjqpe3PLEPAABsnjtUD5sdAftt53r2xS032QAAgIPhhOqlw0OyHCIDdHbFqKOq51fXmt0CAAAclvuM+snZEbBfdnZdeFauZwEA4CD6puoFo843O4TNYYDOYdu52fCU6jtmtwAAALvi18aypTtsgwdVt5odAQAA7JkbV7836ojZIWwGA3R2w8NatnoEAAAOhvO2PKHveCYOtFG3q+4/uwMAANhzt6weOzuCzbCaHcBm29na8fGzOwAAgD3xT9U1V/WR2SGw20Zds3p9y/nnAADAdrjvqh4xO4L1ZoDOuTbq9tUzsuUFAAAcZG+tbryqT80Ogd0y6quqt1fHz24BAAD21ah+aFXPmh3C+jJA51zZOQ/xZdVRs1sAAIA99+LqNqs6ZXYIHK6xXMe+rrr27BYAAGCKk6vbrpZrXfgizkDnkO2cg/iCDM8BAGBb3LJ6+OwI2CVPyvAcAAC22VHVs0dda3YI68kKdA7JWLa3e3O2uQMAgG30Y6v6rdkRcG6Numf1qNkdAADAWvhodd1VvW92COvFAJ1zbNSx1RtaVqADAADb5+Tq21f1+tkhcKhG3aT64+qI2S0AAMDaeF/LEP2js0NYHwbonCM7Z8S9rOXscwAAYHt9tPqWVX1gdgicU6MuU729Om52CwAAsHbeWn3bqj47O4T14Ax0zqknZngOAAAsA8gXj7rA7BA4J0adv3p+hucAAMBZu1b128PCY3YYoHO2Rt2nuvPsDgAAYG1cpXqmmwtsiMdV3zQ7AgAAWGt3qB42O4L14GYHX9aoW7c8qe/3CgAAcGYPW9X9Z0fAlzLqx6snzO4AAAA2xp1W9TuzI5jLUJQvaSxbVry6OmZ2CwAAsJZGdYdVPXt2CJzZqOtUr62OmpwCAABsjpOr71wt8zG2lAE6Z2nU8dVbqkvNbgEAANbap6obrerPZofAaUZdvPrzlmtbAACAQ/GJ6lqr+rvZIczhDHS+yKgLVC/N8BwAADh7x1TPH3WJ2SFQNeqI6jkZngMAAOfOsdUfjTpudghzGKDzBXZuNDyrusrsFgAAYGMcX/3+sFU26+GB1Y1mRwAAABvthJaHxV3nbiEDdM7s0dUtZ0cAAAAb53rVL8+OYLuN+o7q/rM7AACAA+H61eNnR7D/nIHOfxv1k/lCAAAAHJ4fXtUzZkewfUZdunpHdbHZLQAAwIFyj1U9ZnYE+8cAnarGsr3dH1fnnd0CAABstE9V11vVO2eHsD12tlV8TXXd2S0AAMCBc0r1XatljsYWsIU7jbpc9dwMzwEAgMN3TPWCURedHcJWeXiG5wAAwN44onruqBNnh7A/rEDfcmO5ufXm6qqzWwAAgAPlFdUtVsuT+rBnRt2mel7ucQAAAHvrfdW3rOo/Zoewt6xA32Jjubnw9AzPAQCA3Xez6iGzIzjYRl22+u0MzwEAgL13QvW8saxI5wAzQN9uD6i+b3YEAABwYP38qO+dHcHBNOrI6nerC89uAQAAtsaNq0fNjmBveUJ7S426ZfUH+T0AAADsrU9U37RatrqDXTPqYdV9Z3cAAABb6U6r+p3ZEewNw9MtNOrK1ZuqY2e3AAAAW+Gd1XVX9ZnZIRwMY1n18YpsnQgAAMzxqer6q3rH7BB2ny3ct8xYtrZ7UYbnAADA/rl69euzIzgYRl2semaG5wAAwDzHVC8YddzsEHafAfoWGcvNhedWJ8xuAQAAts5dRt1xdgSbbSw76T21uuTsFgAAYOt9TfXs4eHeA8cAfbs8qLrZ7AgAAGBrPWHU182OYKPdvfru2REAAAA7blI9cnYEu8sZ6Fti1PdUL8z/5wAAwFzvqb55tZwXB+fYqKtVb6nON7sFAADgTH5wVc+ZHcHuMEzdAqOuWL0t554DAADr4Rmr+uHZEWyOUeev3l59/ewWAACAs/Cp6rqr+ovZIRw+W7gfcKOOqV6Q4TkAALA+7jTqR2dHsFEekeE5AACwvo6pfm+Yxx0IVqAfcKOeVd1+dgcAAMCZfKq61qr+enYI623UTatX5B4GAACw/p5f3XZVY3YI554V6AfYqLtneA4AAKynY6pnjzp6dgjra9RXVk/L8BwAANgM31vdY3YEh8cA/YAa9a3VL8/uAAAA+DK+oXrU7AjW2hOqS82OAAAAOASPGHW92RGce57gPoBGfVX1juqrZ7cAAACcjVHdelUvmh3Cehn1Q9UzZncAAACcCx+qrr6qj8wO4dAZoB8wo46oXl3dYHYLAADAOfSx6htX9c+zQ1gPo76m+svqQrNbAAAAzqVXVzdb1SmzQzg0tnA/eB6S4TkAALBZLlr9zs4DwWy5sTzs/7QMzwEAgM124+pBsyM4dAboB8io76h+fnYHAADAuXCjXM+wuFt1w9kRAAAAu+C+o24+O4JDYwv3A2Is552/qzpudgsAAMC59Pnq+qt6y+wQ5hh1heovqq+Y3QIAALBLPlJdbVUfnh3COWMF+gGws83hszM8BwAANtuR1e8OW3dvpbHco3hKhucAAMDBcvHqmY4t2xwG6AfDg3LuOQAAcDBcrnrM7Aim+Olc2wIAAAfTjav7z47gnLGF+4YbdbPqZXkYAgAAOFhuvao/mB3B/hh1xZZjyY6Z3QIAALBHTqluvKrXzw7hyzNA32CjLtlyg+His1sAAAB22Ueqq6yWdw6wnW0MX1tdb3IKAADAXvtQ9Y2r+rfZIXxpVi1vqJ0bDL+b4TkAAHAwXbx60uwI9sXPZHgOAABsh6+unjYscl5rBuib64HVDSc3AAAA7KXvGfUjsyPYO6OuUD14dgcAAMA++q7qnrMj+NI83bCBRt2oemXLKnQAAICD7JMt29t9YHYIu2tnxcUrq5vMbgEAANhnJ1fXWi1HNbNmrEDfMKO+snpGhucAAMB2uFD11OH69SD6kQzPAQCA7XRU9exRx8wO4Yu5AbF5fqs6fnYEAADAPrphdY/ZEeyeUZesHjW7AwAAYKITc120lmzhvkFG3aV60uwOAACACT5TXX1Vfzs7hMM36nnV987u4P9n796Dbjvr+oB/NyfnnJwk5+R+yAlwyOWEhJDE3ICQcAkJSbgICgTBC6AIyB1DCF6qeKEoaocppdZpp+1YZ9qZTkc7dZyO1qm2Y3HUYini4FDwbrVeGI2ScAnw9I99GEM4efd+915r/dba+/P5JwP72c/zzcA/+/2u37MAAIAR+JpZ8rPVIfh7CvSJaPOnUD6Y5NTqLAAAAEU+kOTps+SL1UFYXUtelOSnq3MAAACMxF8muWqW/L/qIMy5wn0C2vw9CP8uynMAAGC73ZTkzdUhWF1Lzkzy/uocAAAAI3Jukn/TDD6PhgJ9Gn4oyTXVIQAAAEbg3S25qDoEK/uRJOdXhwAAABiZ25O8tToEc55kGLmW3JbkF+J/KwAAgC/5r0lumyWtOgjLa/MbBH4lft8CAACcyGeTXD9Lfrs6yLYzgT5i7fiVDfHHBQAAgAe7NclrqkOwvJbsTfIT8fsWAADg4exP8lPHX+1MIQX6uP3LJEeqQwAAAIzQj7bk0dUhWNpdSa6sDgEAADBy1yT53uoQ286T3yPVklcl+VfVOQAAAEbsP8+S51WHYGctOZrko0lOrc4CAAAwAV9IctMs+fXqINtKgT5CLbkgyW8lOVgcBQAAYOy+aZb82+oQPLyW/KckL6jOAQAAMCH/J8k1s+T+6iDbyBXuI9Pm/5v8ZJTnAAAAy3hvS86qDsGJtXlxrjwHAADYnccleU91iG2lQB+fu5I8ozoEAADARBxO8sPVIfhKLTktyfurcwAAAEzUm1ryrOoQ28gV7iPSkick+WCSk6uzAAAATEhL8tRZ8qvVQfh7LfnRJPdU5wAAAJiwP05y1Sz5m+og20SBPhIt2Zvk15JcW50FAABggj6S5LpZ8kB1EJKWXJbktzL/rQsAAMDqfnKWfEt1iG3iCvfx+N4ozwEAAFZ1ZeavxGIc3hflOQAAQBe+uSXPqQ6xTUygj0BLnpTkA0lOqs4CAAAwYfcnecIs+YPqINusJV+b5D9W5wAAANggf5Lkillyb3WQbWACvVhLDiT5qSjPAQAA1nVKkvdXh9hmLTk5yXurcwAAAGyYRyf5seoQ20KBXu/dSS6tDgEAALAhvrolL64OscXuSXJhdQgAAIAN9OqW3FodYhu4wr1QS56S5FeS7KnOAgAAsEH+KMnjZ/Mr3RlImxfnH818Ch0AAIDu/X6Sq2bJp6qDbDIT6EWOX2v3r6M8BwAA6NrRJN9ZHWILvTfKcwAAgD5dmOQ91SE2nQn0Ii35kSTvqM4BAACwoT6T5NLZfBqdnrXktiT/pToHAADAFmhJnjlL/nt1kE2lQC/Qkicl+dWYPgcAAOjTf5glX1cdYtO1+W/b/53kiuosAAAAW+ITSa6czR8ep2OucB9YS/bH1e0AAABDeElLnlkdYgt8a5TnAAAAQzqW5J3VITaVCfSBteTdSb67OgcAAMCW+O0k18ySz1cH2UQtOZTk40kOV2cBAADYMg8kuX6W/FZ1kE1jAn1ALbku3nsOAAAwpCuSvLY6xAb77ijPAQAAKuxN8s+bW687ZwJ9IG3+f+IPJrmqOgsAAMCW+WSSS2fzf9KRllyQ5HeSnFwcBQAAYJu9ZZa8vzrEJjGBPpzvivIcAACgwtlJvq86xAZ6T5TnAAAA1d7dkkdXh9gkJtAH0JLLk3woyb7qLAAAAFvqgSSXz5JPVAfZBC25Mcn/iL8rAAAAjMHPzpKvqQ6xKUyg96zN/5jwL6I8BwAAqLQ3yQ9Vh9gEx3/nvjfKcwAAgLF4QUvurA6xKRTo/XttkpuqQwAAAJA7W3JDdYgNcGeSJ1eHAAAA4Mu8ryWHqkNsAk+L96glR5J8NMkZ1VkAAABIkvzKLHl6dYipavNJ/o8mOVadBQAAgK/w/lnyluoQU2cCvV//OMpzAACAMXla8164dbwmynMAAICxekNLrq4OMXUm0HvSkucl+bnqHAAAAHyF30ly1Sz5fHWQKWnJaUk+keSR1VkAAAB4WL+W5KZZ8sXqIFNlAr0Hx/+o8BPVOQAAADihxyd5VXWICbo7ynMAAICxuyHJt1aHmDIT6D1o86vb31qdAwAAgIf1Z0mOzZL7q4NMQUsOZz59frA6CwAAAAt9Mslls+SvqoNMkQn0jrXk+iRvqs4BAADAjo4keUN1iAl5Z5TnAAAAU3F2kvdUh5gqE+gdaslJSX4jyTXVWQAAAFjoL5JcNEvuqw4yZi25OPP3xu+tzgIAAMDSWpKnzpJfrQ4yNSbQu/WmKM8BAACm4nDcILaMd0V5DgAAMDWzJD9+fACYXTCB3pGWnJ/5E/mHqrMAAACwtE8muXCW/F11kDFqyRVJPhwP4AMAAEzVm2bJj1eHmBI/gLvzY1GeAwAATM3ZSd5SHWLEfjD+dgAAADBlP9Dmv31Zkgn0DrTkmUl+qToHAAAAK/nrzKfQ760OMiYtuS7J/4y/HQAAAEzdT8ySN1SHmApPka+pzd8D98+qcwAAALCyM5O8tTrECL0rynMAAIBN8NqWXF0dYioU6Ou7O8ll1SEAAABYy9tackZ1iLFoyY1JnlOdAwAAgE7sSfJPmoekl6JAX0NLjib5nuocAAAArO30JK+vDjEi/7A6AAAAAJ16WpI7q0NMgacM1tCSn0nywuocAAAAdOLPM38X+qerg1RqyTOT/FJ1DgAAADr3R0keP0vurw4yZibQV9TmV9kpzwEAADbHI5N8c3WIETB9DgAAsJmOJvnO6hBjZwJ9BS05OclHkhyrzgIAAECnfjfJZbPk89VBKrTkWUl+sToHAAAAvflM5r97/7A6yFiZQF/NPVGeAwAAbKKLs93vhHtndQAAAAB6dXKSH6oOMWYm0HepJY9K8rEkp1ZnAQAAoBcfSnLdLGnVQYbUkmck+W/VOQAAAOhdS3LDLPmN6iBjZAJ99340ynMAAIBNdk2SO6pDFDB9DgAAsB1mSd7bDFufkAJ9F1rylCRfX50DAACA3n1HdYAhteSpSW6pzgEAAMBgbkry4uoQY+SpgiW1+cMGv57k+uosAAAADOLqWfLh6hBDaMkvJLm9OgcAAACD+t0kT5gln60OMiYm0Jf3yijPAQAAtskbqwMMoSVPjvIcAABgG12cLfntuxsm0JfQkkNJPpbkvOosAAAADObTSc6fJX9THaRPLfm5JM+rzgEAAECJv0lybJZ8sjrIWJhAX873RHkOAACwbQ4keXV1iD615Nokz63OAQAAQJkzkryzOsSYmEBfoCWXJPlIkv3VWQAAABjc7yW5ZJZ8sTpIH1ry75N8XXUOAAAASj2Q5PGz+TvRt54J9MXeG+U5AADAtrooyfOrQ/ShJceS3FmdAwAAgHJ7k7yrOsRYKNB30JLbknx1dQ4AAABKvb46QE/uib8LAAAAMPeyllxTHWIMXOH+MFqyJ8n/SnJVdRYAAABKtcyvsvtYdZCutORI5tfTn1ydBQAAgNH4xVlye3WIap40f3ivjPIcAACA+cPnr6oO0bG3RnkOAADAl7utJbdWh6hmAv0EWnJqko9n/kQ+AAAA/FmSo7Pk89VB1tWSM5L8fub/BAAAgAf7YJInzea3sW0lE+gn9vYozwEAAPh7R5LcUR2iI98W5TkAAAAndn2SO6tDVDKB/hDH3wP38cyn0AEAAOBLfno28T8itPm17b8XD40DAADw8D6e5PJNuIVtFSbQv9K7ojwHAADgKz2/JedWh1jTy6M8BwAAYGeXJHlNdYgqJtAfpCVXJvlQkj3VWQAAABilb58l76sOsYo2f4j+o0kurc4CAADA6P3fJMdmyWeqgwzNBPqX+0dRngMAAPDwvqU6wBqeH+U5AAAAy3lUktdVh6hgAv24ltyR5OercwAAADB6V8+SD1eH2K2WfCDJjdU5AAAAmIw/T3LxLLmvOsiQTKAnafOp8x+rzgEAAMAkvLQ6wG615IYozwEAANidRyZ5U3WIoSnQ516e+fvPAQAAYJE7qwOs4DuqAwAAADBJ72jJoeoQQ9r6Ar0l+5N8f3UOAAAAJuOSllxdHWJZLTmW5AXVOQAAAJiks5LcVR1iSFtfoCd5XZLHVocAAABgUl5SHWAX3hG//wEAAFjdXW1epG+FWXWASi05mOQTSQ5XZwEAAGBSPj5LHlcdYpGWnJvkD5McqM4CAADApP3wLPnu6hBD2PYn0O+O8hwAAIDdm8o17m+J8hwAAID1vfn4Q9obb2sL9DYvzt9WnQMAAIDJurM6wE5ackrmry0DAACAdZ2WLXkX+tYW6JlfMXCwOgQAAACT9YLqAAt8a5JzqkMAAACwMd7YkjOrQ/RtKwv0ljw2nsIHAABgPVe25DHVIU6kJScleWt1DgAAADbKocxfFbbRtrJAT/L9SfZXhwAAAGDy7qgO8DBelOTi6hAAAABsnLe2eZG+sbauQG/J5UleXp0DAACAjfDs6gAP4+3VAQAAANhIZyZ5Q3WIPs2qAwytJT+T5IXVOQAAANgI9yY5d5Y8UB3kS1pyc5Jfrs4BAADAxvrLJI+dJZ+uDtKHrZpAb8l1Sb62OgcAAAAb4/QkT64O8RD3VAcAAABgo52b5JXVIfqyVQV6kh/IFk7dAwAA0KvnVQf4kuOvLXtOdQ4AAAA23t1tQ7vmjfyXOpE2nwgYzR81AAAA2Bi3VQd4kHviwXEAAAD6dywb+trsrflR3ZKfT3JHdQ4AAAA2zheTnDNL/royREuOJPmDJPsqcwAAALA1fm2WPKU6RNe2YgK9JTdFeQ4AAEA/HpHk5uoQSb49ynMAAACGc0NLnl4domtbUaAn+cHqAAAAAGy0Z1Ye3pLTkry2MgMAAABb6W3VAbq28QV6m08B3FKdAwAAgI12c/H5r0tyRnEGAAAAts9Xt+RodYgubXyBnuQHqgMAAACw8a5oyeGKg1tyUpI3V5wNAADA1tuT+UPdG2OjC/SWPCsbeO8+AAAAozNL3RT6N2TDnvYHAABgUl7Tkn3VIbqy0QV6TJ8DAAAwnMHfg97mxf1dQ58LAAAAD3JOkpdWh+jKxhboLXl2khurcwAAALA1Bi/Qk9ye5OqCcwEAAODB3lAdoCsbW6An+Z7qAAAAAGyVS1ty/sBn3j3weQAAAHAiN7TkmuoQXdjIAr3Nn/q/qToHAAAAW2ewKfTjf5i4bajzAAAAYIE3VgfowkYW6En+QXUAAAAAttKQ17ibPgcAAGBMvqElZ1aHWNfGFegteUqSW6tzAAAAsJUGKdBbcjTJS4c4CwAAAJZ0IMmrqkOsa+MK9Jg+BwAAoM5FLblggHPuSnLSAOcAAADAbryuTbyDnnT4h2rJtUmeW50DAACArXZzn5u35Iwkr+7zDAAAAFjRsSS3V4dYx0YV6JlPn8+qQwAAALDV+r7G/fVJTuv5DAAAAFjVG6sDrGNjyuaWXJHkw9m8hwIAAACYlj+ZJY/pY+OW7EvyB0mO9LE/AAAAdOALSY7Okj+tDrKKTSqbvyub9e8DAADAND26za+s68MrojwHAABg3PYk+cbqEKvaiMK5JZckeWl1DgAAADjulq43bPNb5O7qel8AAADowSurA6xqIwr0zKfP91SHAAAAgOP6eA/685Nc3sO+AAAA0LUntOS66hCrmHyB3pLzM+ErAAAAANhIN/ewp+lzAAAApmSSU+iTL9Az/wPCvuoQAAAA8CDntQ6nxVtyQ/op5QEAAKAvX98m2ONOukBvyRlJvq06BwAAAJxAl9e4v63DvQAAAGAI5yR5bnWI3Zp0gZ7kdUkOVocAAACAE7i5i01acizJi7vYCwAAAAY2uWvcZ9UBVtWS/Ul+P8mR6iwAAABwAp9McniWfHGdTVryT5O8sZtIAAAAMKjPJXnULPmr6iDLmvIE+iuiPAcAAGC8zk5y5TobtPl1d6/qJg4AAAAMbl+Sr68OsRuTLNDbPPfbq3MAAADAAjev+f03JDnQG+/MTwAAIABJREFUQQ4AAACoMqlr3CdZoCf5miSPqw4BAAAAC9y66hfbvDh/c4dZAAAAoMJ1LXlCdYhlTbVAf0d1AAAAAFjC01qyZ8XvfnPmV7gDAADA1E1mCn1WHWC32vz6u1+uzgEAAABLun6W/OZuvnD81WUfS3Ksn0gAAAAwqD9JcnSWtOogi0xxAv2e6gAAAACwC6tc4/7CKM8BAADYHI9OckN1iGVMqkBvyRVJnlOdAwAAAHbh5hW+8/auQwAAAECxl1QHWMakCvTMp88nd+08AAAAW+2pLdm77OKWPD0TeSofAAAAduHFbQJd72QK9JYcSfKy6hwAAACwSweTPHEX69/WVxAAAAAodDTJk6pDLDKZAj3Jq5Psqw4BAAAAK7h5mUUtuTzJ8/uNAgAAAGVGf437JAr0Ni/OX1+dAwAAAFb0zCXXfXsm8lsdAAAAVvDi6gCLTOVH+csyv8IdAAAApuimluzfacHxV5e9YqA8AAAAUOGCllxfHWInUynQ31wdAAAAANZwIMmTF6x5YxaU7AAAALAB7qwOsJPRF+gtuSEjfwoBAAAAlnDLw33QktMyL9ABAABg0ynQ13RXdQAAAADowE7vQX9VkjOGCgIAAACFLm7JtdUhHs6oC/SWHE3youocAAAA0IEnt/lV7l+mJSclubsgDwAAAFQZ7RT6qAv0JK/N/A8JAAAAMHX7k9x0gv/+JZk/QA4AAADbQoG+W8efyv+26hwAAADQoRNd437P4CkAAACg1iUtubo6xImMtkBP8k1JzqkOAQAAAB26+cH/oSW3JrmmJgoAAACUen51gBMZc4H+5uoAAAAA0LEnteTgg/6z6XMAAAC21fOqA5zIKAv0ljw1yZXVOQAAAKBjJ2X+mzctuSrJ7bVxAAAAoMwTW3K4OsRDjbJAj3efAwAAsLluPv7Pu5PMCnMAAABApUckeU51iIcaXYHekjOTvLg6BwAAAPTk1pYcTfKy6iAAAABQbHTXuI+uQE/yiiQHqkMAAABAT65O8r1J9lUHAQAAgGK3t2RvdYgHG91VcS35SJIrqnMAAABAj1pG+JscAAAACtwyS365OsSXjGoCvSU3RXkOAADA5lOeAwAAwNyornEfVYGe5DXVAQAAAAAAAAAYzKgK9NE88d6SM5L8abz/HAAAAAAAAGCbHJslv1sdIhnXBPrLozwHAAAAAAAA2DajmUIfU4Hu+nYAAAAAAACA7TOaAn0UV7i35MYkH6jOAQAAAAAAAMDgPpvknFnyqeogY5lAf3V1AAAAAAAAAABK7E/yrOoQyQgK9JacluTrqnMAAAAAAAAAUOa51QGSERToSV6Y5NTqEAAAAAAAAACUua06QDKOAv0bqwMAAAAAAAAAUOqCllxYHaK0QG/JeRnJXfYAAAAAAAAAlCrvjqsn0L8hyZ7iDAAAAAAAAADUu6U6wKzy8Jb8ZpJrKzMAAAAAAAAAMAp/keS8WdKqApRNoLfk8ijPAQAAAAAAAJg7nOSKygCVV7h/Y+HZAAAAAAAAAIzPrZWHlxTobX51vAIdAAAAAAAAgAcrfQ961QT605I8tuhsAAAAAAAAAMbpGS05qerwqgLd9DkAAAAAAAAAD3UoyROrDh+8QG/J/iQvGfpcAAAAAAAAACah7Br3ign0O5KcWXAuAAAAAAAAAON3a9XBFQX6CwvOBAAAAAAAAGAabmzJgYqDBy3QW7I3yQuGPBMAAAAAAACASdmf5KaKg4eeQH9GkrMGPhMAAAAAAACAaSm5xn3oAv1FA58HAAAAAAAAwPSUTKDPhjqozcv6P05y/lBnAgAAAAAAADBJn0ly+iz53JCHDjmB/uQozwEAAAAAAABY7OQk1w996JAFuuvbAQAAAAAAAFjW4Ne4K9ABAAAAAAAAGKMbhz5wkHegt+TqJB8a4iwAAAAAAAAANsJfzpLDQx441AT6Cwc6BwAAAAAAAIDNcG5LLh3yQAU6AAAAAAAAAGM16HvQey/QW3JRkiv7PgcAAAAAAACAjbNZBXqSOwY4AwAAAAAAAIDNs3EF+u0DnAEAAAAAAADA5rm0JecOdVivBXpL9ia5pc8zAAAAAAAAANhoNw51UN8T6DckOdTzGQAAAAAAAABsrsGuce+7QH92z/sDAAAAAAAAsNk2pkD3/nMAAAAAAAAA1nF9S04e4qDeCvSWnJPk2r72BwAAAAAAAGAr7MtA3XOfE+i397w/AAAAAAAAANvhiUMc0neBDgAAAAAAAADrum6IQ3op0FsyS3JbH3sDAAAAAAAAsHUmPYF+ZZLze9obAAAAAAAAgO3yuJYc7PuQvgp017cDAAAAAAAA0JVHZIBr3Psq0J/a074AAAAAAAAAbKfpFejH339+U9f7AgAAAAAAALDVntT3AX1MoF+W5Jwe9gUAAAAAAABge01vAj2ubwcAAAAAAACgexe35Kw+D1CgAwAAAAAAADAVvU6h91GgP62HPQEAAAAAAADg+j4377RAb8mjklzY5Z4AAAAAAAAAcNx0CvS4vh0AAAAAAACA/jyxz80V6AAAAAAAAABMxWNa8si+NlegAwAAAAAAADAlvV3j3lmB3pLTk1zZ1X4AAAAAAAAAcALX9bVxlxPoT0myp8P9AAAAAAAAAOChehvs7rJA7/Vl7QAAAAAAAACQiRTo13a4FwAAAAAAAACcyLGWnNrHxgp0AAAAAAAAAKZkT5In9LFxJwV6S85JcrSLvQAAAAAAAABggV6uce9qAt30OQAAAAAAAABDUaADAAAAAAAAQJKr+thUgQ4AAAAAAADA1HxVH5sq0AEAAAAAAACYmrNa8qiuN127QG/JGUku6iALAAAAAAAAACyr8/egdzGBfk2SWQf7AAAAAAAAAMCyRlmgu74dAAAAAAAAgKFd3fWGXU2gAwAAAAAAAMCQTKADAAAAAAAAQJLLWrK3yw3XKtCPh7mkoywAAAAAAAAAsKy9SS7rcsN1J9Afl+SkLoIAAAAAAAAAwC59VZebrVugd9rmAwAAAAAAAMAuXN7lZusW6I/vJAUAAAAAAAAA7N6lXW6mQAcAAAAAAABgqkZVoLvCHQAAAAAAAIAql7TkpK42W7lAb8ksHbf5AAAAAAAAALAL+5Jc2NVm60ygH01yaldBAAAAAAAAAGAFnQ1+r1OgX95VCAAAAAAAAABY0eO72midAt317QAAAAAAAABUG8UE+mVdhQAAAAAAAACAFXXWXbvCHQAAAAAAAIApG0WB3tk98gAAAAAAAACworNbck4XG61UoLfkzHQUAAAAAAAAAADW1MkU+qoT6Bd0cTgAAAAAAAAAdECBDgAAAAAAAABJLu1ik1UL9Au7OBwAAAAAAAAAOmACHQAAAAAAAABSXKA/tovDAQAAAAAAAKADF7Zk37qbKNABAAAAAAAAmLo96eBV5K5wBwAAAAAAAGATXLTuBrsu0FtyZpLT1z0YAAAAAAAAADo0fIEe0+cAAAAAAAAAjE/JFe4XrHsoAAAAAAAAAHTs2LobrFKgr93aAwAAAAAAAEDHTKADAAAAAAAAQIregX503UMBAAAAAAAAoGOnteTwOhusUqA/dp0DAQAAAAAAAKAna02hr1KgH1nnQAAAAAAAAADoyXAFektOSnLuOgcCAAAAAAAAQE8GnUA/d4XvAAAAAAAAAMAQBi3Qz1/nMAAAAAAAAADo0cXrfHm3Bfp56xwGAAAAAAAAAD26cJ0vK9ABAAAAAAAA2BSPasn+Vb+82wL9yKoHAQAAAAAAAEDPHpE1ptBNoAMAAAAAAACwSS5a9YsKdAAAAAAAAAA2yQWrftEV7gAAAAAAAABskkev+sXdFuiPXPUgAAAAAAAAABjAYAX6+aseBAAAAAAAAAADeMyqX1y6QG/J6UkOrHoQAAAAAAAAAAyg/wI9rm8HAAAAAAAAYPwGucL9yKqHAAAAAAAAAMBA9rfk8Cpf3E2BftYqBwAAAAAAAADAwI6u8iUFOgAAAAAAAACbZqVr3HdToJ+5ygEAAAAAAAAAMLDeC3QT6AAAAAAAAABMQe9XuJ+9ygEAAAAAAAAAMDBXuAMAAAAAAABAXOEOAAAAAAAAAEkGuMLdBDoAAAAAAAAAU3B+210fnkSBDgAAAAAAAMDm2Zvkkbv90m4K9HN2uzkAAAAAAAAAFHnMbr+wVIHe5u38wV3HAQAAAAAAAIAa/RTocX07AAAAAAAAANNyZLdfUKADAAAAAAAAsIkO7/YLyxboZ+12YwAAAAAAAAAo1NsEugIdAAAAAAAAgCnpbQLdFe4AAAAAAAAATElvE+gHd7sxAAAAAAAAABTqbQL90G43BgAAAAAAAIBC5+32C8sW6KftdmMAAAAAAAAAKLS/7fJ15Qp0AAAAAAAAADbVrq5xV6ADAAAAAAAAsKmO7GaxAh0AAAAAAACATdXLBPrBFYIAAAAAAAAAQKVeJtAPrRAEAAAAAAAAACp5BzoAAAAAAAAAJDlvN4sV6AAAAAAAAABsKgU6AAAAAAAAAMQV7gAAAAAAAACQJDmym8WzZRa1pK2WBQAAAAAAAADKPDBL9i27eOEEeksOrZcHAAAAAAAAAErs3U3nvcwV7q5vBwAAAAAAAGCqzll2oQIdAAAAAAAAgE121rILFegAAAAAAAAAbLJOC/RT1ggCAAAAAAAAAJXOXnbhMgX6vjWCAAAAAAAAAEClTgv0A2sEAQAAAAAAAIBKnV7hfvIaQQAAAAAAAACgUqcF+v41ggAAAAAAAABApU4LdFe4AwAAAAAAADBV5y67cJkCfd8aQQAAAAAAAACgUqcT6KesEQQAAAAAAAAAKnVaoO9dIwgAAAAAAAAAVOq0QD9tjSAAAAAAAAAAUOnMtlw3vtSiPWuGAQAAAAAAAIAqsyw5hb5MgX5wvSwAAAAAAAAAUKqzAn2pUXYAAAAAAAAAGKnOCvTT1wwCAAAAAAAAAJU6K9BnawYBAAAAAAAAgEpnLLNomQL90JpBAAAAAAAAAKDSUr23d6ADAAAAAAAAsOkOLrNomXJ8qY0AAAAAAAAAYKQ6m0AHAAAAAAAAgCnrbAL9tDWDAAAAAAAAAEClzibQ96wZBAAAAAAAAAAqdTaBDgAAAAAAAABT1tkE+t41gwAAAAAAAABApc4m0E9ZMwgAAAAAAAAAVOpsAh0AAAAAAAAApsw70AEAAAAAAAAgyenLLFqmQD9tzSAAAAAAAAAAUKmzK9z3rBkEAAAAAAAAACrN2hLXuLvCHQAAAAAAAIBt0EmBvreDIAAAAAAAAABQaeE17ssU6Kd0EAQAAAAAAAAAKrnCHQAAAAAAAADS0QQ6AAAAAAAAAEzdyYsW7FigtyVG2AEAAAAAAABgAtaeQDehDgAAAAAAAMAm2LtogYIcAAAAAAAAgG1w6qIFiwr0fR0FAQAAAAAAAIBKBxYtWFSgL9wAAAAAAAAAACZg4QC5K9wBAAAAAAAA2AaHFi1QoAMAAAAAAACwDfYuWqBABwAAAAAAAGAbnLpogQIdAAAAAAAAgG1wYNECBToAAAAAAAAA22DfogUKdAAAAAAAAAC2waFFCxYV6Ac7CgIAAAAAAAAAlfYuWrCoQDehDgAAAAAAAMAmOHXRAgU5AAAAAAAAANvgwKIFCnQAAAAAAAAAtsG+RQsU6AAAAAAAAABsg0OLFijQAQAAAAAAANgGexctUKADAAAAAAAAsA1OXbRAgQ4AAAAAAAAAUaADAAAAAAAAsB0W9uMKdAAAAAAAAAC2wcFFCxYV6Ps7CgIAAAAAAAAAo7aoQD95kBQAAAAAAAAAUMwV7gAAAAAAAABshbZgiFyBDgAAAAAAAMC22PE15gp0AAAAAAAAAIgCHQAAAAAAAACSKNABAAAAAAAA2B6HdvpQgQ4AAAAAAADAtpjt9OGiAv2BDoMAAAAAAAAAwGgtKtDvHyQFAAAAAAAAAPRv704fusIdAAAAAAAAgG1xyk4fKtABAAAAAAAAIAp0AAAAAAAAAEiiQAcAAAAAAABge5y604cKdAAAAAAAAAC2xUk7fbioQL+3wyAAAAAAAAAAMFom0AEAAAAAAAAgCnQAAAAAAAAASKJABwAAAAAAAIAkCnQAAAAAAAAASKJABwAAAAAAAIAkiwv0+wdJAQAAAAAAAADFFhXoDwySAgAAAAAAAACKucIdAAAAAAAAAKJABwAAAAAAAIAkCnQAAAAAAAAASKJABwAAAAAAAGB7fH6nDxcV6A90GAQAAAAAAAAAKt2304c7Fuiz5P5uswAAAAAAAADAOC1zhXvrPQUAAAAAAAAAFFumQP/b3lMAAAAAAAAAQLFlCvQv9J4CAAAAAAAAAIotU6B/qvcUAAAAAAAAAFBsmQL9c72nAAAAAAAAAIBiyxTon+49BQAAAAAAAAAUW6ZA/0zvKQAAAAAAAACgfzsOkC9ToH+2oyAAAAAAAAAAUGnHV5gvU6Df31EQAAAAAAAAABitZQr0B3pPAQAAAAAAAAD9u2+nD5cp0P+uoyAAAAAAAAAAUOnzO324TIH+xY6CAAAAAAAAAMBoLVOg39t7CgAAAAAAAADo36d2+tAEOgAAAAAAAABbYZZ8YafPvQMdAAAAAAAAALJcgb7jS9QBAAAAAAAAYAIWDo8vU6Df10EQAAAAAAAAAKi08PXlyxTon+0gCAAAAAAAAACM2jIF+md6TwEAAAAAAAAA/frbRQuWKdA/3UEQAAAAAAAAAKjUFi1YpkD/XAdBAAAAAAAAAGDUlinQ7+s9BQAAAAAAAAD0695FC5Yp0D/VQRAAAAAAAAAAGLVlCvSFL1IHAAAAAAAAgJFbODyuQAcAAAAAAABgG3x20QIFOgAAAAAAAADb4L5FCxToAAAAAAAAAGyD9a9wn81b+C90EgcAAAAAAAAAanRyhXtiCh0AAAAAAACAaevkCvck+bs1gwAAAAAAAABApc4K9HvXDAIAAAAAAAAAlVzhDgAAAAAAAABJPrVogQIdAAAAAAAAgG1w/6IFCnQAgP/P3p0GbXvW9R3/nhMqUikOuEtVKlqLAlqrdurSOl200xc67UzbqbZTqe20M1p1sKvVLi61VSkMWsSWTWQLQoXgGBYVAgZJiGYlCdlIQiArIfvG8zxXX9w3EkjyPPd9X8txLZ/Pm7w5z+P4cfO8+13//wkAAAAAwC6wwh0AAAAAAAAAqrtP9YACHQAAAAAAAIBdcP+pHlCgAwAAAAAAALALrHAHAAAAAAAAgA7QeyvQAQAAAAAAANgFD5zqAQU6AAAAAAAAALtgYSvc754zCAAAAAAAAACMdOepHjCBDgAAAAAAAMAuuPdUDyjQAQAAAAAAANgFC5tAv2POIAAAAAAAAAAwyr1THTvVQwct0D82ZxgAAAAAAAAAGOWU0+d1wAJ9qgc6wD54AAAAAAAAAFhDB/ps+UEn0KtuPWIQAAAAAAAAABhpcRPo+247YhAAAAAAAAAAGGnhBbrvoAMAAAAAAACwiRZeoN9yxCAAAAAAAAAAMJIJdAAAAAAAAACo7jrIQwp0AAAAAAAAALbdwifQbz5iEAAAAAAAAAAYyQp3AAAAAAAAAGgJBfrtRwwCAAAAAAAAACNZ4Q4AAAAAAAAA1V0HecgKdwAAAAAAAAC23VK+gT47WhYAAAAAAAAAGGaxBfpUx/MddAAAAAAAAAA2z8In0MsadwAAAAAAAAA2zx0HeeiwBfptRwgCAAAAAAAAAKPcOdVDB3nwsAX6LUcIAwAAAAAAAACjHHhQ3Ap3AAAAAAAAALbZgXtuBToAAAAAAAAA22xpBboV7gAAAAAAAABsklsP+uBhC/QDHwwAAAAAAAAAa2BpE+gfOeTzAAAAAAAAADDS7Qd9UIEOAAAAAAAAwDY78KfKD1ugf/SQzwMAAAAAAADASMtZ4T7VXdU9h44DAAAAAAAAAGMsbYV7mUIHAAAAAAAAYHPcetAHj1Kg33CEdwAAAAAAAABghNsO+qAJdAAAAAAAAAC2mRXuAAAAAAAAAOy8u6Z66KAPK9ABAAAAAAAA2FYH/v55+QY6AAAAAAAAANvrwOvbywQ6AAAAAAAAANvrtsM8fJQC/cYjvAMAAAAAAAAAq3bzYR42gQ4AAAAAAADAtrrpMA8fukCf6qHqlsO+BwAAAAAAAAArttwCfZ8pdAAAAAAAAADW3UcO87ACHQAAAAAAAIBtZQIdAAAAAAAAAFpRgX6oMXcAAAAAAAAAGODGwzysQAcAAAAAAABgG9091b2HecEKdwAAAAAAAAC20aGmz+voBfoNR3wPAAAAAAAAAFbh0IPhRy3Qrz3iewAAAAAAAACwCjcd9oUjFehT3VndfpR3AQAAAAAAAGAFVrbCvepDc7wLAAAAAAAAAMu0shXuVdfM8S4AAAAAAAAALNPNh33BBDoAAAAAAAAA28gKdwAAAAAAAABIgQ4AAAAAAAAAVd102BcU6AAAAAAAAABsmwen+thhX5qnQL+2OjHH+wAAAAAAAACwDB85yktHLtCneqj66FHfBwAAAAAAAIAluf4oL80zgV51zZzvAwAAAAAAAMCiDSnQr53zfQAAAAAAAABYtCEF+tVzvg8AAAAAAAAAi3bdUV4ygQ4AAAAAAADAtvENdAAAAAAAAADIN9ABAAAAAAAAoDpigT7Nc+Nsr4C/r3r8POcAAAAAAAAAwILcNtUXHOXFuSbQpzqRKXQAAAAAAAAA1seRps9r/hXu5TvoAAAAAAAAAKyPoQX6tQs4AwAAAAAAAAAWwQQ6AAAAAAAAADS4QL98AWcAAAAAAAAAwCIo0AEAAAAAAACgwQX6h6qHFnAOAAAAAAAAAMxrXIE+1fHqinnPAQAAAAAAAIA5PVTddNSXFzGBXta4AwAAAAAAADDeh6eaHfXlRRXoH1zQOQAAAAAAAABwVFfN8/KiCvTLFnQOAAAAAAAAABzV1fO8bIU7AAAAAAAAANtiLSbQrXAHAAAAAAAAYLTxBfpU91QfXsRZAAAAAAAAAHBEa7HCvUyhAwAAAAAAADDOieqaeQ5YZIHuO+gAAAAAAAAAjHLDVA/Mc8AiC/TLFngWAAAAAAAAABzGXOvbywp3AAAAAAAAALbDlfMeYIU7AAAAAAAAANtgfSbQp/pIddeizgMAAAAAAACAQ7hq3gMWOYFe1rgDAAAAAAAAMMbaFejWuAMAAAAAAAAwwjXzHrDoAv2yBZ8HAAAAAAAAAKfy0anumfcQK9wBAAAAAAAA2HRXL+KQRRfoH1jweQAAAAAAAABwKmtZoF9Z3bvgMwEAAAAAAADgZK5cxCELLdCnOlFdssgzAQAAAAAAAOAUFvK58UVPoFdduIQzAQAAAAAAAOCxXLaIQ5ZRoF+whDMBAAAAAAAA4NF8onVc4b7PBDoAAAAAAAAAq3LltFeiz20ZBfrF7X0LHQAAAAAAAACWbSHr22sJBfpUd1fXLPpcAAAAAAAAAHgUly7qoGVMoJc17gAAAAAAAACsxvpOoO9ToAMAAAAAAACwCh9Y1EEKdAAAAAAAAAA21fHqikUdpkAHAAAAAAAAYFNdM9UDizpsKQX6VNdVH1/G2QAAAAAAAACwb2HfP6/lTaCXKXQAAAAAAAAAluvSRR6mQAcAAAAAAABgUynQAQAAAAAAACAr3AEAAAAAAACgWQsu0KdFHvZws3p8dU/1uGXdAQAAAAAAAMDOum6qpy3ywKVNoE/1YHX5ss4HAAAAAAAAYKd9YNEHLnOFe9UFSz4fAAAAAAAAgN10yaIPXHaB7jvoAAAAAAAAACzD+Ys+cNkF+rlLPh8AAAAAAACA3bTwjejTog98uFn96equ6rRl3gMAAAAAAADATrm3+typji/y0KVOoE91X0vYOw8AAAAAAADATrt40eV5LX+Fe1njDgAAAAAAAMBiXbiMQ1dRoJ+zgjsAAAAAAAAA2B3nL+NQE+gAAAAAAAAAbJoLlnHotIxDH25Wp1V3VE9c9l0AAAAAAAAAbL3j1ZOmum/RBy99An3/w+3vX/Y9AAAAAAAAAOyEK5ZRntdqVriXAh0AAAAAAACAxVjK+vZaXYF+zoruAQAAAAAAAGC7nb+sg1dVoJ+7onsAAAAAAAAA2G4XLuvgaVkHf6ZZ3VA9dVX3AQAAAAAAALCVvmiqW5Zx8Kom0MsUOgAAAAAAAADz+eiyyvNabYHuO+gAAAAAAAAAzOOCZR6+ygL9/Su8CwAAAAAAAIDt88fLPHzVK9xPrPA+AAAAAAAAALbLUge3V1agT3VPddmq7gMAAAAAAABg65y7zMNXOYFe9b4V3wcAAAAAAADAdrh2qpuWecGqC3TfQQcAAAAAAADgKJbeN5tABwAAAAAAAGATLL1vXnWBfnF1x4rvBAAAAAAAAGDznbPsC1ZaoE91ojp7lXcCAAAAAAAAsPGOVecv+5JVT6BXnTXgTgAAAAAAAAA214VT3bfsS0YU6O8ZcCcAAAAAAAAAm+u8VVwyokA/r7p3wL0AAAAAAAAAbKb3reKSlRfo095u+veu+l4AAAAAAAAANtY5q7hkxAR61bsH3QsAAAAAAADAZrmz+uAqLlKgAwAAAAAAALDOzp3qxCouGlWgn1s9MOhuAAAAAAAAADbH+1d10ZACfdorz88dcTcAAAAAAAAAG+V9q7po1AR6WeMOAAAAAAAAwKlt9wT6PgU6AAAAAAAAACdzxVQ3reqykQX6e6tPDLwfAAAAAAAAgPW20sHsYQX6VPdWfzTqfgAAAAAAAADW3m4U6PuscQcAAAAAAADgsZy1yssU6AAAAAAAAACso+umun6VF44u0M+ujg/OAAAAAAAAAMD6Wen0eQ0u0Ke6o7poZAYAAAAAAAAA1tLKN5qPnkAva9wBAAAAAAAAeKTdmkDft/L/0QAAAAAAAACstY9OddWqL12HAv2d+Q46AAAAAAAAAJ8yZJP58AJ9/zvo543OAQAAAAAAAMDa2M0Cfd/vjQ4AAAAAAAAAwNoY8ilKFCcqAAAgAElEQVTwdSnQf3d0AAAAAAAAAADWwm3VZSMuXpcC/b3V/aNDAAAAAAAAADDcu6eajbh4LQr0qR6s3jM6BwAAAAAAAADDDVnfXmtSoO+zxh0AAAAAAAAABXr1jtEBAAAAAAAAABjq5uqiUZevU4F+UXsfgwcAAAAAAABgN71j1PfPa40K9KlOZI07AAAAAAAAwC5728jL16ZA3/fW0QEAAAAAAAAAGGLW4E9/r1uB/vYGjuMDAAAAAAAAMMyF09430IdZqwJ9qhurC0bnAAAAAAAAAGDl3j46wFoV6PuG7rQHAAAAAAAAYAgF+qM4c3QAAAAAAAAAAFbqvuoPRodYxwL9D6s7R4cAAAAAAAAAYGXeNdWDo0OsXYE+1Seq3x+dAwAAAAAAAICVecfoALWGBfo+a9wBAAAAAAAAdsfw759XTaMDPJpZfXl13egcAAAAAAAAACzdh6e9jni4tZxAn+r66qLROQAAAAAAAABYurWYPq81LdD3vXl0AAAAAAAAAACWbi2+f17rXaC/ZXQAAAAAAAAAAJbqeAr0Azmv+ujoEAAAAAAAAAAszR9MdfvoEJ+0tgX6VLPqjNE5AAAAAAAAAFiateqE17ZA32eNOwAAAAAAAMD2evPoAA83jQ5wMrN6fHVb9cTRWQAAAAAAAABYqIunevboEA+31hPoUz1YvW10DgAAAAAAAAAWbq2mz2vNC/R91rgDAAAAAAAAbJ+1K9DXeoV71aw+r7q5Om10FgAAAAAAAAAW4obqy6eajQ7ycGs/gT7Vx6qzR+cAAAAAAAAAYGHOWLfyvDagQN93xugAAAAAAAAAACzM2q1vrw1Y4V41q6+urhidAwAAAAAAAIC53Vl9wVSfGB3kM23EBPpUV1aXj84BAAAAAAAAwNx+Zx3L89qQAn3fm0YHAAAAAAAAAGBua7m+vTarQH/L6AAAAAAAAAAAzOXB6q2jQzyWTSrQ31fdMjoEAAAAAAAAAEd21rT3DfS1tDEF+lQnqt8enQMAAAAAAACAI3vD6AAnszEF+j5r3AEAAAAAAAA200PVG0eHOJlNK9DfVt07OgQAAAAAAAAAh/aOqW4fHeJkNqpAn+r+TKEDAAAAAAAAbKLXjA5wKhtVoO97/egAAAAAAAAAABzKfdWbR4c4lU0s0M+s7h4dAgAAAAAAAIADe8u0AZ/r3rgCfaoHqjNG5wAAAAAAAADgwNZ+fXttYIG+7/TRAQAAAAAAAAA4kDuqt40OcRCbWqC/vb0/MgAAAAAAAADr7Y1TPTg6xEFsZIG+/8d90+gcAAAAAAAAAJzSRqxvrw0t0Pf95ugAAAAAAAAAAJzUTdVZo0Mc1CYX6O+obh8dAgAAAAAAAIDHdPpUx0eHOKiNLdCn+kT1W6NzAAAAAAAAAPCYXjs6wGFsbIG+7/TRAQAAAAAAAAB4VNdU544OcRibXqC/s7p1dAgAAAAAAAAAHuHVU81GhziMjS7QpzpW/b/ROQAAAAAAAAD4NLPq5aNDHNZGF+j7Xj86AAAAAAAAAACf5p1TfWh0iMPahgL9rOqm0SEAAAAAAAAA+BMvGx3gKDa+QJ/qePXG0TkAAAAAAAAAqOqONvRT3BtfoO+zxh0AAAAAAABgPbx2qvtHhziKaXSARZjt/RDgw9WXjs4CAAAAAAAAsOO+earzRoc4iq2YQJ/qRHX66BwAAAAAAAAAO+7iTS3Pa0sK9H2/PjoAAAAAAAAAwI576egA89iKFe6fNKsLqq8fnQMAAAAAAABgBz1UPXWq20YHOaptmkAvU+gAAAAAAAAAo7x5k8vz2r4C/dXVsdEhAAAAAAAAAHbQy0cHmNdWFehT3VKdOToHAAAAAAAAwI65oXrb6BDz2qoCfd8rRwcAAAAAAAAA2DG/PtWJ0SHmNY0OsGizenz10eopo7MAAAAAAAAA7IBZ9dVTXT06yLy2bgJ9qger147OAQAAAAAAALAjztqG8ry2sEDfZ407AAAAAAAAwGq8dHSARdm6Fe6fNKtLq2eMzgEAAAAAAACwxe6svnSq+0YHWYRtnUCv+vXRAQAAAAAAAAC23Ku2pTyv7Z5Af2p1fdv9IwEAAAAAAACAkZ451QdGh1iUrS2Xp/pI9Y7ROQAAAAAAAAC21Lu3qTyvLS7Q971ydAAAAAAAAACALfXi0QEWbWtXuFfN6gnVTdWTRmcBAAAAAAAA2CK3VF821UOjgyzSVk+gT3V/dfroHAAAAAAAAABb5qXbVp7Xlk+gV83q26v3jM4BAAAAAAAAsCVOVF851XWjgyzaVk+g7zu7unp0CAAAAAAAAIAtceY2lue1AwX6VLPqZaNzAAAAAAAAAGyJXx0dYFm2foV71ay+uL1fQHzW6CwAAAAAAAAAG+za6unT3hr3rbP1E+hVU91UnTE6BwAAAAAAAMCG+7VtLc9rRybQq2b1N6rfHZ0DAAAAAAAAYEM9VH3ZVLeMDrIsOzGBvu/3qytGhwAAAAAAAADYUG/c5vK8dqhAn2pW/droHAAAAAAAAAAb6ldHB1i2nVnhXjWrz6tuqD57dBYAAAAAAACADXLJVM8aHWLZdmYCvWqqj1VvGJ0DAAAAAAAAYMO8eHSAVdipCfSqWX1b9QejcwAAAAAAAABsiHuqp0511+ggy7ZTE+hVU51dXTw6BwAAAAAAAMCGePUulOe1gwX6vp1YLwAAAAAAAAAwp1n1wtEhVmXnVrhXzepJ1UeqJ47OAgAAAAAAALDG3jbV3x4dYlV2cgJ9f73A60bnAAAAAAAAAFhzzx8dYJV2cgK9alZ/qTpvdA4AAAAAAACANXVp9cxpb437TtjJCfSqqf6oev/oHAAAAAAAAABr6gW7VJ7XDhfo+148OgAAAAAAAADAGrqtetXoEKu26wX66dUdo0MAAAAAAAAArJkXT3X/6BCrttMF+lT3toO/mgAAAAAAAAA4iYeqF40OMcJOF+j7rHEHAAAAAAAA+JTXTXXj6BAj7HyBPtUHqneNzgEAAAAAAACwJl4wOsAoO1+g79vZfwAAAAAAAAAAD/Ouqc4fHWIUBfqet1RXjw4BAAAAAAAAMNhODx8r0KupTuRb6AAAAAAAAMBuu6q94eOdpUD/lJdU94wOAQAAAAAAADDIC/eHj3eWAn3fVHdULx+dAwAAAAAAAGAAfWkK9M/0omo2OgQAAAAAAADAir1ksrG7aXSAdTOrt1bfPToHAAAAAAAAwIocq54+1fWjg4xmAv2Rnj86AAAAAAAAAMAKvV55vscE+meY7f1NLqm+dnQWAAAAAAAAgCWbVd8w1UWjg6wDE+ifYdr7B/KC0TkAAAAAAAAAVuBM5fmnmEB/FLN6QnVt9YWDowAAAAAAAAAs01+d6j2jQ6wLE+iPYqr7q18enQMAAAAAAABgic5Wnn86E+iPYVafX13f3jQ6AAAAAAAAwLb5nqneMjrEOjGB/himuq161egcAAAAAAAAAEtwSfXbo0OsGwX6yf1CdWJ0CAAAAAAAAIAF+59TzUaHWDdWuJ/CrN5Ufe/oHAAAAAAAAAALcl31VVMdGx1k3ZhAP7UXjA4AAAAAAAAAsEC/pDx/dCbQD2BW51TfMjoHAAAAAAAAwJxurb5iqvtHB1lHJtAP5udGBwAAAAAAAABYgBcqzx+bCfQDmO39nS6qnjk6CwAAAAAAAMAR3VN92VR3jA6yrkygH8BUs+rnR+cAAAAAAAAAmMOLlecnZwL9gGb1uOry6umjswAAAAAAAAAc0kPV06a6cXSQdWYC/YCmOlb94ugcAAAAAAAAAEfwSuX5qZlAP4RZfVb1oepLR2cBAAAAAAAAOKDj1TOmunJ0kHVnAv0Qpr21Bs8bnQMAAAAAAADgEF6rPD8YE+iHNKsntjeF/vmjswAAAAAAAACcwvHqa6e6YnSQTWAC/ZCmuqf65dE5AAAAAAAAAA7gtcrzgzOBfgSzenJ1XfVnRmcBAAAAAAAAeAzHqq9ToB+cCfQjmOrj1a+OzgEAAAAAAABwEq9Tnh+OCfQjmtWXVFdXTxidBQAAAAAAAOAzmD4/AhPoRzTVjdXLR+cAAAAAAAAAeBSvUZ4fngn0OczqadWV1eMGRwEAAAAAAAD4JNPnR2QCfQ5TXVu9ZnQOAAAAAAAAgIcxfX5EJtDnNKtnVJfkxwgAAAAAAADAeMeqr532NmlzSErfOU11WfWm0TkAAAAAAAAA2ps+V54fkQn0BZjVN1bn5e8JAAAAAAAAjHOsesZUV40OsqlMoC/AVH9cvXl0DgAAAAAAAGCnvUZ5Ph8T0wsyq2dVF+RHCQAAAAAAAMDqmT5fAGXvgkx1cfWbo3MAAAAAAAAAO+lVyvP5mUBfoFn9heqS6rTRWQAAAAAAAICdYfp8QUygL9BUl1evHp0DAAAAAAAA2Cm/oTxfDBPoCzarr2yvSP9To7MAAAAAAAAAW++B6mumun50kG1gAn3BprqmesXoHAAAAAAAAMBOeJHyfHFMoC/BrL68uqJ6/OgsAAAAAAAAwNa6q3r6VLeNDrItTKAvwf4vPP7v6BwAAAAAAADAVvsl5flimUBfkll9SXV19YTRWQAAAAAAAICtc3N70+f3jg6yTUygL8lUN1b/e3QOAAAAAAAAYCv9rPJ88UygL9GsvrC9KfQnjs4CAAAAAAAAbI1rqmdM9dDoINvGBPoSTXVL9cLROQAAAAAAAICt8lPK8+Uwgb5ks3py9aHqc0dnAQAAAAAAADbehdU3TnVidJBtZAJ9yab6ePW80TkAAAAAAACArfCflOfLYwJ9BWb1pPam0J8yOgsAAAAAAACwsc6a6jtHh9hmJtBXYKq7ql8YnQMAAAAAAADYaP9xdIBtZwJ9RWb1OdVV1RePzgIAAAAAAABsnDOm+t7RIbadCfQVmere6r+NzgEAAAAAAABsnOOZPl8JBfpqvaS6bHQIAAAAAAAAYKP8xlSXjg6xC6xwX7FZfU/15tE5AAAAAAAAgI3wYPU1U103OsguMIG+YlOdUZ01OgcAAAAAAACwEX5Zeb46JtAHmNU3V+fk7w8AAAAAAAA8tlurPz/VHaOD7AoT6ANM9f7qdaNzAAAAAAAAAGvtvyrPV8sE9CCzelp1efX4wVEAAAAAAACA9fOB6humOjY6yC4xgT7IVNdWvzI6BwAAAAAAALCWflx5vnom0Aea1ZOrq6qnjM4CAAAAAAAArI0zp/o7o0PsIhPoA0318eq/j84BAAAAAAAArI1j1Y+PDrGrFOjj/Up769wBAAAAAAAAXjzVZaND7Cor3NfArP5R9ZrROQAAAAAAAICh7qi+aqqPjQ6yq0ygr4fXVe8fHQIAAAAAAAAY6qeV52OZQF8Ts/pr1btG5wAAAAAAAACGuLL6uqk+MTrILjOBviamOqs6Y3QOAAAAAAAAYIh/pzwfzwT6GpnVM6qLqseNzgIAAAAAAACszDun+uujQ2ACfa1MdVn1ktE5AAAAAAAAgJU5UT13dAj2mEBfM7P6ouqK6kmjswAAAAAAAABL99Kp/vnoEOwxgb5mprq5+unROQAAAAAAAIClu7v6ydEh+BQF+np6YXX56BAAAAAAAADAUv38VDeNDsGnWOG+pmb1XdXbRucAAAAAAAAAluLK6llTPTg6CJ9iAn1NTfX26k2jcwAAAAAAAABL8SPK8/VjAn2NzerPVZdWnz06CwAAAAAAALAwb5rq744OwSOZQF9jU32o+sXROQAAAAAAAICFua/60dEheHQK9PX3P6rrR4cAAAAAAAAAFuLnJv3f2rLCfQPM6u9Xrx+dAwAAAAAAAJjLldWzfPt8fZlA3wBT/Wb1ztE5AAAAAAAAgLn8a+X5ejOBviFm9czq/Opxo7MAAAAAAAAAh/ZbU/290SE4ORPoG2KqS6oXjc4BAAAAAAAAHNp91Y+NDsGpKdA3y3+pbh0dAgAAAAAAADiUn53q+tEhODUF+gaZ6o7qJ0bnAAAAAAAAAA7syup/jQ7BwfgG+oaZ7f3o4Zzqm0ZnAQAAAAAAAE7pu6d6++gQHIwJ9A0z1Ynqh9r7LwAAAAAAALC+3qg83ywK9A001bnVy0bnAAAAAAAAAB7TfdVzR4fgcBTom+sn2vsmOgAAAAAAALB+fmaq60eH4HAU6BtqqlurnxqdAwAAAAAAAHiED1bPHx2Cw5tGB+DoZnVa9d7qW0ZnAQAAAAAAAKqaVX9rqt8bHYTDM4G+waY6Xv3L6tjoLAAAAAAAAEBVr1Seby4F+oab6oLqBaNzAAAAAAAAAN1S/fjoEBydFe5bYFafU11SPW1wFAAAAAAAANhl3z/Va0aH4OhMoG+Bqe6tfnh0DgAAAAAAANhhZyrPN58J9C0yq9OrfzA6BwAAAAAAAOyYe6pnTnXd6CDMxwT6dvmx6o7RIQAAAAAAAGDH/Gfl+XZQoG+RqW6sfmJ0DgAAAAAAANgh51UvHB2CxbDCfcvM9n4U8Z7qW0dnAQAAAAAAgC13rPqmqS4cHYTFMIG+ZaY6Uf2r6hOjswAAAAAAAMCW+yXl+XZRoG+hqS6unjc6BwAAAAAAAGyxq6qfHh2CxbLCfUvN6gntFelPH50FAAAAAAAAtsys+ptT/f7oICyWCfQtNdX91Q+NzgEAAAAAAABb6BXK8+1kAn3LzerV1feNzgEAAAAAAABb4pbqGVPdPjoIi6dA33Kz+sLq8urJo7MAAAAAAADAFvi+qV47OgTLYYX7lpv2fgHz70fnAAAAAAAAgC3wO8rz7WYCfQfM9v5/Pqv6jtFZAAAAAAAAYEPdXT1rqutGB2F5TKDvgKlm1Q9W94/OAgAAAAAAABvq3yrPt58CfUdMdWX1k6NzAAAAAAAAwAZ6e/V/Rodg+axw3yGzOq29Ve7fNjoLAAAAAAAAbIi72lvdfv3oICyfCfQdMtXx6jlZ5Q4AAAAAAAAH9Vzl+e5QoO8Yq9wBAAAAAADgwM6sXjY6BKtjhfsO2l/l/p7qr4zOAgAAAAAAAGvq49Wzp7phdBBWxwT6Dtpf5f5Ps8odAAAAAAAAHstzlee7R4G+o6xyBwAAAAAAgMf0lqleMToEq2eF+w6zyh0AAAAAAAAe4fbqmVPdODoIq2cCfYftr3J/Tla5AwAAAAAAwCf9qPJ8dynQd9xUH8wqdwAAAAAAAKj6raleNToE41jhjlXuAAAAAAAAULdVz5rqptFBGMcEOp9c5f7PssodAAAAAACA3fXDynMU6FQ11eVZ5Q4AAAAAAMBuesNUp48OwXhWuPMnrHIHAAAAAABgB91SPXOqW0cHYTwT6PyJh61yf2B0FgAAAAAAAFiRH1Ke80kKdD6NVe4AAAAAAADskN+Y6g2jQ7A+rHDnEfZXub+r+vbBUQAAAAAAAGBZrqn+4lR3jQ7C+lCg86hm9bTqwupJg6MAAAAAAADAoh2vvmOqPxwdhPVihTuPaqprqx8enQMAAAAAAACW4OeU5zwaE+ic1KxeV/3D0TkAAAAAAABgQc6pvn2qY6ODsH4U6JzUrJ5cXVT92dFZAAAAAAAAYE53V98w7X3/HB7BCndOaqqPVz9QzQZHAQAAAAAAgHn9iPKck1Ggc0pT/V71/NE5AAAAAAAAYA5vmOoVo0Ow3qxw50Bm9fjq3OrZo7MAAAAAAADAIX2kevZUt48Ownozgc6BTPVg9f3VA6OzAAAAAAAAwCGcqP6J8pyDUKBzYFNdUv2H0TkAAAAAAADgEJ431TtHh2AzWOHOocz2/s28tfqu0VkAAAAAAADgFC6o/vJUD40OwmZQoHNos/qS6uLq80ZnAQAAAAAAgMdwX/XNU106Ogibwwp3Dm2qG6t/MToHAAAAAAAAnMS/UZ5zWCbQObJZvaT6wdE5AAAAAAAA4DP8dvU9U81GB2GzKNA5slk9sTq/+qrRWQAAAAAAAGDfzdXXT3v/hUOxwp0jm+qe6h9Xx0ZnAQAAAAAAgPYmzn9Aec5RKdCZy1TnVD8zOgcAAAAAAABUvzDVW0eHYHNZ4c7cZnVa9e7qW0dnAQAAAAAAYGedXX3nZHsyc1CgsxCz+orqj6unjM4CAAAAAADAzvlY9Y1TXT86CJvNCncWYqrrque0910JAAAAAAAAWJVZ9RzlOYugQGdhpjqjesHoHMD/Z+9Ow7a/CvpcXwu2YKMW6JbthG13S+veu1UqECIJAQFBCGMSwDAIAiJTEacipa2gUkWtI2gUqQMIAgIRQgRBQ0UMIIPRUEGJIBq0yhgIgSS8/PeHO1WQDO/wPM+6h/M8jve4v14fkucdfvdaCwAAAAAAdsqPjTp7dgTbwRXu7Kmlrle9rjp+dgsAAAAAAABb743VbUddPjuE7WBAZ88t9X+3eg/9hrNbAAAAAAAA2FofavXu+Z/PDmF7uMKdPTfq3dXDZ3cAAAAAAACwtZbq4cZz9poBnX0x6iXVM2Z3AAAAAAAAsJWeMeqs2RFsH1e4s2+Wun51XnXz2S0AAAAAAABsjbdUJ3r3nP1gQGdfLXXTVj/E/vHsFgAAAAAAADbexdUtRv3Z7BC2kyvc2VejLqy+ZXYHAAAAAAAAW+FbjOfsJwM6+27UC6qfm90BAAAAAADARjtz1AtnR7DdXOHOgVjqH1Wvr242uwUAAAAAAICNc35161GfmB3CdjOgc2CW+orqzdXnz24BAAAAAABgY3y0On7Un8wOYfu5wp0Dc+UPtUfN7gAAAAAAAGCjPNJ4zkExoHOgRj23+oXZHQAAAAAAAGyEnxz1q7Mj2B2ucOfALXVc9fvVv5ndAgAAAAAAwNp6XXXHUZfPDmF3GNCZYqn/t9V76MfNbgEAAAAAAGDt/HV1i7H6hAPjCnemGPX26hGzOwAAAAAAAFg7V1T3M54zgwGdaUY9r/rJ2R0AAAAAAACslSeM1fXtcOBc4c5US12v+u3qNrNbAAAAAAAAmO75o+4/O4LdZUBnuqW+pNV76F86uwUAAAAAAIBp3ladMOrS2SHsLle4M92V71fcr7p8dgsAAAAAAABTXFydZjxnNgM6a2HU71XfNbsDAAAAAACAA7dUDx71ztkhYEBnbYx6evUrszsAAAAAAAA4UD846mWzI6C8gc6aWeq46rzqZrNbAAAAAAAA2Hevqk4ZdWh2CJQBnTW01L+s3lzdcHYLAAAAAAAA++Y91S1HvX92CPxvrnBn7Yz6s+qBrd67AAAAAAAAYPt8ojrdeM66MaCzlkb9RvV9szsAAAAAAADYF48d9ZbZEfAPucKdtbWsvuDx8uqus1sAAAAAAADYM88a9YjZEXBVDOistaVuVL2p1bvoAAAAAAAAbLY3VSePumx2CFwVAzprb6mbVedVx81uAQAAAAAA4Kj9dXWrURfNDoGr4w101t6oP6weObsDAAAAAACAo3ZZdarxnHVnQGcjjPqV6umzOwAAAAAAADgq3zLqjbMj4Nq4wp2NsdT1qnOrk2a3AAAAAAAAcNh+dNR3zY6Aw2FAZ6Ms9cXVm6qbzG4BAAAAAADgWr2yuvuoQ7ND4HAY0Nk4S92iem113OwWAAAAAAAArtafVrcadfHsEDhc3kBn44x6S/XQapndAgAAAAAAwFW6uLqH8ZxNY0BnI416YfXU2R0AAAAAAAB8lkPVGWN1Ah02iivc2VjL6r/fF1enzm4BAAAAAADg73znqB+bHQFHw4DORltW76C/vvqq2S0AAAAAAAD0y6O+aXYEHC0DOhtvqX9avbm68ewWAAAAAACAHfbG6rajLp8dAkfLG+hsvFF/0eoadz+MAQAAAAAA5rioOtV4zqYzoLMVRv1e9ejZHQAAAAAAADvo0uq0UX89OwSOlQGdrTHqF6ofn90BAAAAAACwQ5bqEaPeNDsE9oI30NkqS123Oqf6+tktAAAAAAAAO+Bpo/7j7AjYKwZ0ts5SN6jeWH3F7BYAAAAAAIAtdnard88PzQ6BvWJAZystddPqza3GdAAAAAAAAPbWBdXJoy6eHQJ7yRvobKVRF1b3yTeeAAAAAAAA9tpF1SnGc7aRAZ2tNeq3qu+Y3QEAAAAAALBFLm11bftFs0NgPxjQ2Wqjfqr6+dkdAAAAAAAAW+BQdf+xekYXtpI30Nl6S12venV129ktAAAAAAAAG+zbR/3E7AjYTwZ0dsJSN67Oq246uwUAAAAAAGADnTnqMbMjYL8Z0NkZy2o8P6/VmA4AAAAAAMDhObvVu+eHZofAfjOgs1OWOrF6Tatr3QEAAAAAALhmF1Qnj7p4dggchOvMDoCDNFYn0B9WLbNbAAAAAAAA1txF1SnGc3aJAZ2dM+q51ZNmdwAAAAAAAKyxS6t7j9WIDjvDgM5OGvW06szZHQAAAAAAAGvoUHX/UW+ZHQIHzRvo7KylPqd6ZXWH2S0AAAAAAABr5PGjfmp2BMxgQGenLXWD6nerr5zdAgAAAAAAsAbOHPWY2REwiwGdnbfUTarXt/oEAAAAAADYVS+rThurK9xhJxnQoVrqZtV51XGzWwAAAAAAACa4oDp51MWzQ2Cm68wOgHUw6g+r++cbVQAAAAAAwO65qDrFeA4GdPg7Y3UtyeNmdwAAAAAAABygi1uN5xfNDoF1YECHTzPqzOppszsAAAAAAAAOwOWt3jy/YHYIrAtvoMM/sKy+WHJWdc/ZLQAAAAAAAPtkqb5x1HNnh8A6cQId/oFRn2r1HvobZ7cAAAAAAADskycZz+GzOYEOV2OpG1fnVTed3QIAAAAAALCHzhz1mNkRsI4M6HANltV4/ubqBrNbAAAAAAAA9sALqgeOOjQ7BNaRK9zhGoy6sLp7densFgAAAAAAgGN0bvVg4zlcPSfQ4TAsdc/qJdV1Z7cAAAAAAAAchQuqk0ddPDsE1pkT6HAYRr2semy1zG4BAAAAAAA4QhdVpxjP4doZ0OEwjfq56kmzOwAAAAAAAI7Axa3G84tmh8AmcIU7HKGlfqZ69OwOAAAAAACAa3FpdbdR/2N2CGwKAzocoWX1DvpzqvvPbvWvJwsAACAASURBVAEAAAAAALgah6rTrnymFjhMrnCHIzRWv+F8U3Xu5BQAAAAAAICr8zjjORw5AzochVGXV6dVfzC7BQAAAAAA4B942qgzZ0fAJnKFOxyDpW5cnVfddHYLAAAAAABA9dzqG0cts0NgExnQ4Rgtq/H8vFZjOgAAAAAAwCyvru5+5U26wFEwoMMeWOqrq9dUN5jdAgAAAAAA7KQ3VncYdensENhk3kCHPTBWb6Gflm90AQAAAAAAB+8d1T2M53DsDOiwR0adW31TdWhyCgAAAAAAsDv+srrTqPfNDoFtYECHPTTqV6vHze4AAAAAAAB2wvtaXdt+0ewQ2BYGdNhjo86snja7AwAAAAAA2GoXtzp5fuHsENgmY3YAbKNl9f/WmdUjZ7cAAAAAAABb59LqzqN+b3YIbBsDOuyTpa5bvaS65+wWAAAAAABga1xe3XvUK2aHwDZyhTvsk1GHqjOqc2e3AAAAAAAAW+FQ9RDjOewfAzrso1Efr+5VvXF2CwAAAAAAsNGW6t+Pev7sENhmBnTYZ6Muqe5SXTC7BQAAAAAA2FhPGvWzsyNg23kDHQ7IUjeuXlf969ktAAAAAADARvmhUU+cHQG7wIAOB2ipm7Qa0f/Z7BYAAAAAAGAjPLN61Fhd4Q7sMwM6HLClblq9tvqS2S0AAAAAAMBae0H1wFGHZofArjCgwwRLfWV1bvWFs1sAAAAAAIC19MrqXqMunx0Cu8SADpMsdXz16uoGs1sAAAAAAIC1cl51p1GXzg6BXWNAh4mWum31iuq42S0AAAAAAMBauKA6edTFs0NgF11ndgDssrF6C/30XL8CAAAAAADUhdUdjecwjwEdJhurN0weUB2a3QIAAAAAAEzzl9XXjXrf7BDYZQZ0WAOjXlw9rFpmtwAAAAAAAAfuvdUdRr1ndgjsOgM6rIlRz64eN7sDAAAAAAA4UO9rdfL8wtkhgAEd1sqon66eNLsDAAAAAAA4EO9v9eb5O2aHACsGdFgzo36w+oHZHQAAAAAAwL66uLrLqAtmhwB/b8wOAK7aUk+v/v3sDgAAAAAAYM99pPr6UW+YHQJ8JgM6rKll9f/nL1YPmd0CAAAAAADsmUuru4567ewQ4LO5wh3W1Kilenj1vNktAAAAAADAnvhEdS/jOawvJ9BhzS113VYj+v1mtwAAAAAAAEft8urUUb8xOwS4ek6gw5obdah6QPWi2S0AAAAAAMBR+WR1hvEc1p8BHTbAp43oL5ndAgAAAAAAHJFD1YNGnTU7BLh2BnTYEKOuqO5fvXR2CwAAAAAAcFiW6ptHvWB2CHB4DOiwQcbqfZT7VefMbgEAAAAAAK7RUj1q1C/NDgEOnwEdNsyVI/pp1StmtwAAAAAAAFfr20c9c3YEcGQM6LCBPm1E/83ZLQAAAAAAwGf57lE/OTsCOHIGdNhQoz7RakR/9ewWAAAAAADg7zxl1A/PjgCOzpgdABybpY6rXl7dfnYLAAAAAADsuB8a9cTZEcDRM6DDFrhyRH9FddvZLQAAAAAAsKN+ZNQTZkcAx8aADltiqc+rXlndZnYLAAAAAADsmB8e9d2zI4Bj5w102BKjPladUp03uwUAAAAAAHbIDxnPYXsY0GGLjPpoqxH9DbNbAAAAAABgBzzNm+ewXVzhDltoqRtUr66On90CAAAAAABb6mmj/uPsCGBvGdBhSy11w+q3qlvMbgEAAAAAgC3zg6OeNDsC2HsGdNhiS92o+u3qq2e3AAAAAADAlviBUf9pdgSwP7yBDlts1IeqO1Zvmt0CAAAAAABb4L8az2G7GdBhy105ot+p+r3ZLQAAAAAAsMGeOuo/z44A9pcr3GFHLPX51TnVbWe3AAAAAADAhnnqqP8yOwLYf06gw44YdUl111ZvogMAAAAAAIfn+43nsDsM6LBDRl1a3aN65ewWAAAAAADYAN836ntmRwAHx4AOO2bUx6t7VWfPbgEAAAAAgDX2vaOePDsCOFgGdNhBoy6v7lO9ZHYLAAAAAACsoaeMesrsCODgGdBhR105on9D9fzZLQAAAAAAsEaePOp7Z0cAcxjQYYeN+mT1oOrZs1sAAAAAAGANPHnU982OAOYxoMOOG3Woelj132e3AAAAAADARP/ZeA6M2QHAelhWPw9+unr07BYAAAAAADhgTxj1I7MjgPkM6MDfuXJE//Hq8bNbAAAAAADgACzV48bqgBmAAR34bEv9cPUfZncAAAAAAMA+OlQ9atSzZocA68OADlylpZ5a/afZHQAAAAAAsA8OVQ8Z9dzZIcB6MaADV2tZDehPnd0BAAAAAAB76PLqAaNePDsEWD8GdOAaLfXd1dNmdwAAAAAAwB64rLrPqJfPDgHWkwEduFZLPb768fzMAAAAAABgc11a3XvUq2eHAOvLGAYclqW+qXpWdd3JKQAAAAAAcKQ+Wt191GtnhwDrzYAOHLalTq+eV11vdgsAAAAAABymD1d3HfWG2SHA+jOgA0dkqTtXZ1XHzW4BAAAAAIBr8f7q60e9dXYIsBkM6MARW+rE6pzqhrNbAAAAAADgavxN9XWj3jY7BNgcBnTgqCz11dUrqi+a3QIAAAAAAP/Ae6s7jvqT2SHAZjGgA0dtqa+oXlX909ktAAAAAABwpT+v7jDq3bNDgM1zndkBwOa68pt7t803+AAAAAAAWA9/Wt3OeA4cLSfQgWO2rK5x/83qZrNbAAAAAADYWX/c6s3zv54dAmwuJ9CBYzbqb6qvrc6bnAIAAAAAwG46v/pa4zlwrAzowJ4Y9eHqztWrZ7cAAAAAALBTfr/Vm+fvmx0CbD4DOrBnRn2sunt11uwWAAAAAAB2wrnVHUd9aHYIsB0M6MCeGnV5dd/qlyanAAAAAACw3V5anTLqktkhwPYwoAN7btSh6mHVT81uAQAAAABgKz27On3UZbNDgO1iQAf2xahl1OOr75vdAgAAAADAVvnJ6puuPMwFsKfG7ABg+y317dWP5mcOAAAAAADH5imjvnd2BLC9jFnAgVhWV7o/s7ru7BYAAAAAADbOUn3b8HQosM8M6MCBWer06rnV9We3AAAAAACwMQ5VDxurd88B9pUBHThQS92+emn1BbNbAAAAAABYe5dV3zBW/64MsO8M6MCBW+oW1TnVF81uAQAAAABgbV1S3WvUubNDgN1hQAemWOqm1aurfz45BQAAAACA9fPB6q6jfn92CLBbDOjANEt9SfXK6qtmtwAAAAAAsDb+urrTqP85OwTYPdeZHQDsrrH6Q9DtqtfNbgEAAAAAYC38WXWS8RyYxYAOTDXqw9Wdq5fNbgEAAAAAYKoLqpNHvXt2CLC7DOjAdKM+Xp1e/dLkFAAAAAAA5nhD9bVX3lwKMI0BHVgLoz5ZPaz6kdktAAAAAAAcqN9q9eb5B2eHABjQgbUxahn1hOq7qmV2DwAAAAAA++6s6u6jLpkdAlA1ZgcAXJWlHlI9q/o/ZrcAAAAAALAvfrF6xKhDs0MA/jcn0IG1NOqXq1OrS2e3AAAAAACw536oerjxHFg3TqADa22pk6qzqxvNbgEAAAAA4Jgt1XeM+onZIQBXxYAOrL2l/m31m9WXzm4BAAAAAOCoXV49dNTzZocAXB0DOrARlvrnrUb0fz05BQAAAACAI3dJdfqoV80OAbgmBnRgYyx14+oV1S1mtwAAAAAAcNj+trr7qDfNDgG4NteZHQBwuEa9r7p99duzWwAAAAAAOCzvqk4yngObwoAObJRRH61OqV40uwUAAAAAgGt0fqvx/MLZIQCHy4AObJxRl1dnVGfObgEAAAAA4Cq9prrdqP81OwTgSBjQgY006tCox1TfN7sFAAAAAIDP8KLqrqM+MjsE4EiN2QEAx2pZDelPz5eCAAAAAABm+5nqW0cdmh0CcDQM6MBWWOobqmdX15vdAgAAAACwo5483BoKbDgDOrA1lvq66qzq82e3AAAAAADskEPVY0Y9c3YIwLEyoANbZanjq3OqG89uAQAAAADYAZ+oHjBWh5sANp4BHdg6S/0/1Surfza7BQAAAABgi324uveo35kdArBXDOjAVlrqy6rfrP7N7BYAAAAAgC303uqUUX80OwRgL11ndgDAfhirP7zdtnr97BYAAAAAgC3zjuok4zmwjQzowNYa9cHq66rfmN0CAAAAALAl3ljdZtR7ZocA7AcDOrDVRl1a3bt6zuwWAAAAAIANd3Z1x1EfmB0CsF8M6MDWG3VF9ZDqx2e3AAAAAABsqJ+tTh31sdkhAPvJgA7shFHLqO+onlgts3sAAAAAADbEUj1p1KNHHZodA7DfxuwAgIO21MOrn6uuO7sFAAAAAGCNXV49bNRzZ4cAHBQDOrCTlrpn9YLqc2e3AAAAAACsoQ9Xp416zewQgINkQAd21lK3q369uuHsFgAAAACANfKX1Smj3jY7BOCgGdCBnbbUV1WvqL50dgsAAAAAwBr4w+puo947OwRghuvMDgCYadQfVSdWb5/dAgAAAAAw2aurk43nwC4zoAM7b9R7qttUr5/dAgAAAAAwyS+3Onn+0dkhADMZ0AGqUR+s7li9bHYLAAAAAMAB+/7qoaOumB0CMJs30AE+zVLXrc6sHjG7BQAAAABgn32yeuSoX5gdArAunEAH+DSjDo36lup7Z7cAAAAAAOyjS6p7GM8BPpMT6ABXY1mdQj+z1al0AAAAAIBt8b9avXf+1tkhAOvGgA5wDZa6Z/X86h/NbgEAAAAA2AN/3Go8//PZIQDryIAOcC2WunX18uqfzG4BAAAAADgGr63uPepDs0MA1pU30AGuxajXV7ep3jO7BQAAAADgKL2wurPxHOCaGdABDsOot1cnVX80uwUAAAAA4Aj9t+qMUZfNDgFYd65wBzgCS92wOqv62skpAAAAAADX5lD1+FE/PTsEYFMY0AGO0FLXr55T3Xd2CwAAAADA1bik1anzc2aHAGwSV7gDHKErrzk6o3r67BYAAAAAgKtwUXWy8RzgyBnQAY7CqE+N+tbqidUyuwcAAAAA4ErnVyeM1ScAR8gV7gDHaKkHVz9fXW92CwAAAACw086uHjBW17cDcBScQAc4RqOeXd2t+sjsFgAAAABgZz29OtV4DnBsnEAH2CNLfVX1G9WXzW4BAAAAAHbGoerbRj1jdgjANjCgA+yhpb681Yj+b2e3AAAAAABb75LqjFHnzA4B2BYGdIA9ttQNq5dUt5/dAgAAAABsrYuqe4w6f3YIwDbxBjrAHhv14eou1fNmtwAAAAAAW+n86muM5wB7z4AOsA9GXV49qPqh2S0AAAAAwFY5uzp51HtnhwBsIwM6wD4ZtYx6YvXY6tDsHgAAAABg4z29OnWs3j4HYB94Ax3gACx1r1ZXuh83uwUAAAAA2DiHqm8b9YzZIQDbzoAOcECWOqHV9Uo3nt0CAAAAAGyMS6ozRp0zOwRgFxjQAQ7QUjetXtHqEwAAAADgmlxU3WPU+bNDAHaFN9ABDtCoC6sTqzfObgEAAAAA1tr51dcYzwEOlgEd4ICNel91h+qls1sAAAAAgLV0dnXyqPfODgHYNQZ0gAlGXVqdXv3M7BYAAAAAYK08vTp1rN4+B+CAGdABJhl1aNRjqydWy+weAAAAAGCqT1aPG/Wtow7NjgHYVWN2AAC11BnVL1afO7sFAAAAADhwH66+YdSrZocA7DoDOsCaWOo21VnVF85uAQAAAAAOzIXVPUa9Y3YIAK5wB1gbo15XnVi9c3YLAAAAAHAgzq1OMJ4DrA8DOsAaGavx/NatxnQAAAAAYHv9XHWXUR+cHQLA3zOgA6yZUR+ovq56/uwWAAAAAGDPHaoeP+pRo66YHQPAZzKgA6yhUZdVD6h+YHYLAAAAALBnLq7uNuqnZocAcNXG7AAArtlSD6t+tvqc2S0AAAAAwFH7s+oeo94+OwSAq2dAB9gAS92p+rXqBrNbAAAAAIAj9jvV6Vc+3wjAGnOFO8AGGPXq6jbVX8xuAQAAAACOyLOqOxnPATaDAR1gQ4x6W3VC9ZbZLQAAAADAtTpUfceoR4y6YnYMAIfHFe4AG2apz6ueV91zdgsAAAAAcJU+Up0x6hWzQwA4Mk6gA2yYUR+rTqt+anYLAAAAAPBZ3lWdaDwH2EwGdIANNOrQqMe3+nVodg8AAAAAUNXvVieM+p+zQwA4Oq5wB9hwy+oq9+e1utodAAAAAJjjF6pHj7p8dggAR88JdIANN+pl1e2qv5rdAgAAAAA76FD1H0Y93HgOsPmcQAfYEkvdpDq7+nezWwAAAABgR3y0esCol88OAWBvOIEOsCVGXVSdXJ01uwUAAAAAdsC7q5OM5wDbxYAOsEVGXVLdp/qR2S0AAAAAsMV+t/qaURfMDgFgbxnQAbbMqE+NekL1iOqK2T0AAAAAsGWeWd1x1N/ODgFg73kDHWCLLXX76kXVP5ndAgAAAAAb7orq8aPOnB0CwP4xoANsuaX+VXVOq08AAAAA4Mi9v7rPqN+ZHQLA/nKFO8CWG/XO6mvyh3sAAAAAOBp/WB1vPAfYDQZ0gB0w6oPVnatnzW4BAAAAgA3y4uo2o/58dggAB8OADrAjRl0+6hHVE6pPze4BAAAAgDW2VE+u7jvqktkxABwcb6AD7KClTq2eU33e7BYAAAAAWDOXVA8eddbsEAAOngEdYEctdfPqpdVNZrcAAAAAwJp4V3XvURfMDgFgDle4A+yoUW+tTqjeMrsFAAAAANbAa6pbGc8BdpsBHWCHjfqr6na5jgoAAACA3faM6s6jPjA7BIC5DOgAO27Ux6r7VE+b3QIAAAAAB+zy6hGjHjfqk7NjAJjPG+gA/J2lHlw9s7r+7BYAAAAA2Gd/U50+6vdmhwCwPgzoAHyGpW5dvaT64tktAAAAALBP3lrde9Rfzg4BYL24wh2AzzDq9dWtqj+Y3QIAAAAA++D51cnGcwCuigEdgM9y5V8eTq5eNLsFAAAAAPbIp6onVQ8YdensGADWkyvcAbhay+r3iSdX35PfMwAAAADYXB+pHjjq5bNDAFhvxhAArtVS961+qTpucgoAAAAAHKkLq3uOevvsEADWnwEdgMOy1M2rl1Y3md0CAAAAAIfpN6v7j/rQ7BAANoM30AE4LKPeWh1fvWF2CwAAAABci6X64epuxnMAjoQT6AAckaU+t3pm9Y2zWwAAAADgKlxSffOoF8wOAWDzGNABOCpLfXf1A7nNBAAAAID18WfVaaP+aHYIAJvJgA7AUVvq7tXzqi+Y3QIAAADAzntl9QBXtgNwLJwaBOCojXp5dWL1rtktAAAAAOyspXpadXfjOQDHygl0AI7ZUl9Yvai63ewWAAAAAHbKJdVDx+rfpgDgmDmBDsAxG/X+6k7VM2e3AAAAALAzLqxubTwHYC8Z0AHYE6OuGPXI6lurT87uAQAAAGCrvaI6ftTbZocAsF0M6ADsqVFPr+5SfWB2CwAAAABbZ6n+a6v3zj88OwaA7eMNdAD2xVL/ojqr+qrZLQAAAABshUuqh4x6yewQALaXE+gA7ItR76pOyhtUAAAAABy7P61OMJ4DsN8M6ADsm7H6VvD9qv9SfWpyDgAAAACb6ZxW4/kfzw4BYPu5wh2AA7HUvarnVF8wuwUAAACAjbBUT62eMhzOAOCAGNABODBL/X/VS6ubzm4BAAAAYK19tHrwqF+fHQLAbjGgA3CglrpR9avV189uAQAAAGAt/Ul16qi3zw4BYPd4Ax2AAzXqQ9Xdqh+Z3QIAAADA2jm71XvnxnMApjCgA3DgRh0a9YTqgdXHZ/cAAAAAMN1SfW91r1EXz44BYHe5wh2AqZa6eau3rL58dgsAAAAAU3yk+sZRL5sdAgAGdACmW+r/ql5UnTy7BQAAAIAD9fZW753/yewQAChXuAOwBkb9bXXH6mdntwAAAABwYF5U3cp4DsA6MaADsBZGXTHq0a1+XTG7BwAAAIB988nqu6r7jbpkdgwAfDpXuAOwdpbVVe4vanW1OwAAAADb42+rbxj1P2aHAMBVMaADsJaW+vLq16ubz24BAAAAYE+8vrrvqPfODgGAq+MKdwDW0qi/rG5TPW92CwAAAADH7GeqrzWeA7DuDOgArK1RHx/1wOo7W72NBQAAAMBmubR6yKjHjrp8dgwAXBtXuAOwEZa6Q/X86sazWwAAAAA4LO+qTh91/uwQADhcTqADsBFGnVsdX711dgsAAAAA1+qc6pbGcwA2jQEdgI0x6j3VSdWzZ7cAAAAAcJU+VT2luueoD01uAYAj5gp3ADbSUo+rfrT6nNktAAAAAFSrwfxBo35jdggAHC0DOgAba6nbVi+svmh2CwAAAMCOO786bdS7Z4cAwLFwhTsAG2vUa6tbVr8/uwUAAABghz27OtF4DsA2MKADsNFGXdTqJPp/n90CAAAAsGMuqx4z6iGjPj47BgD2givcAdgaSz26+onqerNbAAAAALbce6v7jHrD7BAA2EsGdAC2ylInVr9WfensFgAAAIAt9ZrqjFF/OzsEAPaaK9wB2CqjzquOb/UJAAAAwN5Zqv9W3dl4DsC2cgIdgK20rK5x/8nqUbNbAAAAALbAR6uHjXrR7BAA2E8GdAC22lIPr366uv7sFgAAAIAN9Y7q1LH6BICtZkAHYOstdavqxdVNZrcAAAAAbJhfqx4+VifQAWDreQMdgK036verW1avnd0CAAAAsCGuqL591P2M5wDsEifQAdgZS31O9aPV42a3AAAAAKyx91b3GfWG2SEAcNAM6ADsnKUeXP1c9bmzWwAAAADWzKuqB4163+wQAJjBFe4A7JxRz65OrN49uwUAAABgTXyq+v7qFOM5ALvMCXQAdtZS/2f1K9VdZrcAAAAATPSBVqfOXzk7BABmcwIdgJ01Vn85vFv11GqZnAMAAAAwwxuqmxvPAWDFCXQAqJa6R6ur3W84uwUAAADggDyj+q5Rl80OAYB1YUAHgCst9a+qF1dfObsFAAAAYB9dUj1i1PNnhwDAujGgA8CnWerzqp+v7j+7BQAAAGAf/HF1+qh3zA4BgHXkDXQA+DSjPjbqAdW3VVfM7gEAAADYQ8+tTjCeA8DVcwIdAK7GUidXL6y+eHYLAAAAwDG4rPrOUT89OwQA1p0BHQCuwVJf2mpEP2l2CwAAAMBR+ItWV7a/eXYIAGwCV7gDwDUY9VfV7aunz24BAAAAOELnVDc3ngPA4TOgA8C1GHXFqG+tvrG6dHYPAAAAwLU4VH1PdY9RH5gdAwCbxBXuAHAElrpZ9eLqX85uAQAAALgK76vOGHXu7BAA2EROoAPAERj1h9UtW12BBgAAALBOXld9tfEcAI6eAR0AjtCoD1f3rJ5SfWpuDQAAAEBL9ePVHUa9d3YMAGwyV7gDwDFY6pTqV6obzW4BAAAAdtJHqoeN1ZNzAMAxMqADwDFa6l+0+kvqv5vdAgAAAOyUP6ruM+qds0MAYFu4wh0AjtGod1UnVc+Z3QIAAADsjGdWtzaeA8DecgIdAPbQUo9t9ebY58xuAQAAALbSJdWjRj13dggAbCMDOgDssaVOrF5YfdnsFgAAAGCrvK2676h3zA4BgG3lCncA2GOjzqtuUb1mdgsAAACwNX6pOsF4DgD7y4AOAPtg1N9Ud65+uFom5wAAAACb69LqoWP169LZMQCw7VzhDgD7bKl7V79c/ePZLQAAAMBGeUerK9vfNjsEAHaFE+gAsM9G/Xp1y+qC2S0AAADAxnhudbzxHAAOlgEdAA7AqHdWX1P9yuwWAAAAYK19onrkqAeNumR2DADsGle4A8ABW+ox1Y9V15/dAgAAAKyVd1b3G3X+7BAA2FUGdACYYKkTqhdW/3R2CwAAALAWfq365lEfmR0CALvMFe4AMMGoN1a3qF41uwUAAACY6rLqcWN18tx4DgCTGdABYJJR769Oqb6/WibnAAAAAAfv3dVtRj1jdggAsOIKdwBYA0vdrXpOdaPZLQAAAMCB+PXqoaM+PDsEAPh7TqADwBoYdU6rK93/YHYLAAAAsK+uqL6jOs14DgDrxwl04P9n716jvT/r+s6/Lzu2jKUsC6WLkVYHO6yFjmMlBkhIAgIGiCFAQiCBBCkBUSvp4JlRQbsYD6DioYCotEFIQBLAiEYUUYrQghKFsahRlAgYRCAQww3k/JsHmxk5hDv3Ye99/Q+v15Pk4fvRnTv7s6/vD1ghS92uen513uwWAAAAYNe9tzpr1FtnhwAAt84LdABYIaOuG/Wk6snVdbN7AAAAgF1zWXWM8RwAVpsBHQBW0Kj/XJ1QXTm7BQAAADgqN1VPr04bdfXsGADg4JxwB4AVttQdq5dUp85uAQAAAA7bVdVjR71pdggAcGi8QAeAFTbqI9XDq2dWt0zOAQAAAA7d66p7Gs8BYL14gQ4Aa2KpB1cvq+40uwUAAAD4vG6qfqB6zqhldgwAcHgM6ACwRpb60uqV1b1mtwAAAACf433VOV6dA8D6csIdANbIqPdWJ1UvnN0CAAAAfIbLcrIdANaeAR0A1syo60d9a/WE6hOzewAAAGDL3Vh9R3XaqKtnxwAAR8cJdwBYY0t9dTsn3e8+uwUAAAC20JXV2aP+YHYIALA7vEAHgDU26o+rY6tXzW4BAACALfOq6hjjOQBsFgM6AKy5UddWj27nXNyNk3MAAABg011XnT/qzFHXzI4BAHaXE+4AsEGWOql6eXXX2S0AAACwgd5VPWbUO2aHAAB7wwt0ANggo95UHVO9YXYLAAAAbJiLqq81ngPAZjOgA8CGGfXB6uTqh6tlcg4AAACsu09UTx517qiPzY4BAPaWE+4AsMGWOrV6SXXH2S0AAACwhv6kOnvUO2eHAAD7wwt0ANhgoy6rjq0un90CAAAAa+aC6t7GcwDYLgZ0ANhwo66sTqx+fnYLAAAArIED7ZxrP2/snG8HALaIE+4AsEWWOredIf2LZrcAAADACnpHddaov5gdAgDMsyjM7gAAIABJREFU4QU6AGyRURdW96mumN0CAAAAK+YF1fHGcwDYbl6gA8AWWuoO1YuqR89uAQAAgMmuqZ4y6pLZIQDAfAZ0ANhiSz2tek71hbNbAAAAYILLq8eMunJ2CACwGgzoALDlljquemV119ktAAAAsE+W6qer7x114+wYAGB1GNABgJa6c3VRdfLsFgAAANhjV1dPHPVrs0MAgNXzBbMDAID5Rn2oOqV6VnXL5BwAAADYK2+ujjGeAwCfjxfoAMBnWHaG9JdWd5rdAgAAALvkluo51TNG3TQ7BgBYXQZ0AOBzLPWl7XwX/V6zWwAAAOAofaB6/KjXzw4BAFafE+4AwOcY9d7qpOr5s1sAAADgKPxm9W+N5wDAoTKgAwC3atT1o55anVsdmN0DAAAAh+HG6rurbxj1wdkxAMD6cMIdALhNS31l9arqHrNbAAAA4Db8VfXYUW+bHQIArB8v0AGA2zTqT9v5HvorZrcAAADAQby8OsZ4DgAcKQM6AHBIRh0YdXZ1fnX97B4AAAD4NB+vzhv1uFHXzo4BANaXE+4AwGFb6t7VJdWXzm4BAABg6/0/1dmjrpgdAgCsPy/QAYDDNuoPqmOqy2a3AAAAsLWW6nnVccZzAGC3GNABgCMy6urqtOrp1U2TcwAAANguV1dnjDp/1HWzYwCAzeGEOwBw1Ja6f/XL1V1mtwAAALDx3lSdM+p9s0MAgM3jBToAcNRGvbG6Z/WG2S0AAABsrJur/1g9wHgOAOwVL9ABgF2z1D+qfrD6/vyiHgAAALvnqnZenb9xdggAsNkM6ADArlvqG6qXVHea3QIAAMDae0113tj57jkAwJ7yMgwA2HWjfqM6pnrr7BYAAADW1vXV/1k90ngOAOwXL9ABgD2z1BdWz66elr93AAAAcOj+vHrsqLfPDgEAtosfZAMAe26pR1cvqu4wuwUAAICV90vVU0cdmB0CAGwfAzoAsC+Wunt1cfU1s1sAAABYSddW/37URbNDAIDt5RvoAMC+GPWu6vjqF2e3AAAAsHIur441ngMAsxnQAYB9M+q6UU+pnlh9YnYPAAAA0y3Vc6sTPvWL1wAAUznhDgBMsdRXVZdU95jdAgAAwBQfqp4w6rWzQwAA/j9eoAMAU4x6Z3Wv6mWzWwAAANh3v1v9W+M5ALBqDOgAwDSjDow6pzq/un52DwAAAHvupuoHqpNH/e3sGACAz+aEOwCwEpY6trq4utvsFgAAAPbEe6tzRr15dggAwOfjBToAsBJGXV4dU71mdgsAAAC77tLqnsZzAGDVGdABgJUx6prqkdXT2znrBwAAwHq7rnrqqNNHfWR2DADAbXHCHQBYSUudVL28uuvsFgAAAI7IFdVjR71jdggAwKHyAh0AWEmj3lTds/qd2S0AAAActhdX9zKeAwDrxoAOAKysUR+qHlI9q7plcg4AAAC37drq3FFPHHVgdgwAwOFywh0AWAtLPbi6sLrz7BYAAABu1R+2c7L9XbNDAACOlBfoAMBaGPW6dk66v2V2CwAAAJ9hqX66OsF4DgCsOwM6ALA2Rl1V3b/6qXZ+QAMAAMBcH64ePurbR10/OwYA4Gg54Q4ArKWlHlldUH3x7BYAAIAt9cbqnE/9sjMAwEbwAh0AWEujLq2Oqd4xuwUAAGDL3Fz9UPUg4zkAsGm8QAcA1tpSt6t+pnrK7BYAAIAt8DftvDr/vdkhAAB7wYAOAGyEpc6pXljdfnYLAADAhrqsesKoq2eHAADsFSfcAYCNMOqi6t7VFbNbAAAANsxN1dOr04znAMCm8wIdANgoy84L9Be28yIdAACAo/O+dk62v2l2CADAfvACHQDYKKMOjDq3+ubqutk9AAAAa+yy6p7GcwBgm3iBDgBsrKWOqV5Z3W12CwAAwBq5qfqB6jmjltkxAAD7yYAOAGy0pb64uqB65OwWAACANXBV9VivzgGAbeWEOwCw0UZdU51RfUd14+QcAACAVfbanGwHALacF+gAwNZY6sTql6u7zm4BAABYIU62AwB8igEdANgqS925urB68OwWAACAFeBkOwDAp3HCHQDYKqM+VJ1SPbO6eXIOAADATK/LyXYAgM/gBToAsLWWOrm6qJ1X6QAAANvipuoZ7Zxsv2V2DADAKjGgAwBbbdn5HvrLq5NmtwAAAOwDJ9sBAA7CCXcAYKuNnR8ePbB6drVMzgEAANhLTrYDANwGAzoAsPVG3TTq6dUZ1TWzewAAAHbZTdUzq1NGfWh2DADAKnPCHQDg0yx1t+ri6tjZLQAAALvgb6uzvDoHADg0XqADAHyaUVdWJ1bPn90CAABwlN5QHWM8BwA4dAZ0AIDPMur6UU+tzq0OzO4BAAA4TEv1o9XJoz4wOwYAYJ044Q4AcBBL3aO6pPqq2S0AAACH4OrqCaMumx0CALCOvEAHADiIUVdU96leMrsFAADgNlxe3ct4DgBw5AzoAAC3YdQnRj2h+ubqutk9AAAAt+IF1YmjrpwdAgCwzpxwBwA4DEt9TXVxdffZLQAAANWB6ltGXTQ7BABgExjQAQAO01J3qC6ozpjdAgAAbLUrqjNG/dnsEACATeGEOwDAYRp1bXVm9R3VjZNzAACA7XRRO987N54DAOwiL9ABAI7CUsdVr6i+dHYLAACwFa6vvmvU82aHAABsIgM6AMBRWupO1YXVQ2e3AAAAG+091ZmjLp8dAgCwqZxwBwA4SqOurk6tnlndPDkHAADYTJdVX2s8BwDYW16gAwDsoqUeUL2susvsFgAAYCPcXP1g9SOjltkxAACbzoAOALDLlp3x/GXtjOkAAABH6gPV40a9YXYIAMC2cMIdAGCXjZ0fcp1cPau6ZXIOAACwnt5UHWs8BwDYX16gAwDsoaUeXF1Y3Xl2CwAAsBaW6qeq7x110+wYAIBtY0AHANhjS921enl10uwWAABgpR2onjTq4tkhAADbygl3AIA9Nuqq6oHVs9t5TQIAAPDZrqjubTwHAJjLC3QAgH201KnVL1V3mt0CAACsjFdVTxz1sdkhAADbzgt0AIB9NOqy6pjqrbNbAACA6W6qvrt6tPEcAGA1eIEOADDBUl/Yzkn3p+XvZAAAsI0+WJ016r/ODgEA4B/4YS0AwERLPbK6oPri2S0AAMC+eUs7r86vmh0CAMBncsIdAGCiUZe2c9L98tktAADAvnh+dX/jOQDAajKgAwBMNurK6sTqebNbAACAPfOJ6vGjnjrqxtkxAADcOifcAQBWyFKPrl5U3WF2CwAAsGv+snrUqD+eHQIAwMEZ0AEAVsxSd68urr5mdgsAAHDUfq36xlHXzA4BAOC2OeEOALBiRr2rOr76hdktAADAEbu5+oHqEcZzAID14QU6AMAKW+qc6oXV7We3AAAAh+zq6nGjXjc7BACAw2NABwBYcUvdo3pV9ZWzWwAAgNt0eXXmqPfMDgEA4PA54Q4AsOJGXVHdp7podgsAAHBQL6pOMp4DAKwvAzoAwBoYdWDUudU3V9fN7gEAAD7D9dVTRn3T8Pd1AIC15oQ7AMCaWeprqouru89uAQAAuqp61Kjfnx0CAMDR8wIdAGDNjHpHdWx1yewWAADYcr9Xfa3xHABgcxjQAQDW0KhrRz2mOr+dc5EAAMD++tnq60f93ewQAAB2jxPuAABrbtl5jX5xdbfZLQAAsAU+WX3zqJfODgEAYPcZ0AEANsBSX1xdUD1ydgsAAGywv67OGPX22SEAAOwNJ9wBADbAqGuqM6rvqG6cnAMAAJvo9dWxxnMAgM3mBToAwIZZ6rjqFdWXzm4BAIANsFQ/Xn3fqJtnxwAAsLcM6AAAG2ipO1W/VJ06uwUAANbYgeq8UZfMDgEAYH844Q4AsIFGXV2dVj29umlyDgAArKN3VccZzwEAtosX6AAAG26pk6qXV3ed3QIAAGvi16vHj7pmdggAAPvLC3QAgA036k3VPavXzW4BAIAVt1T/sXqE8RwAYDt5gQ4AsCWWnV+e/P7qB6t/NDkHAABWzbXtvDp/zewQAADmMaADAGyZpR5Qvay6y+wWAABYEX9WnT7qz2eHAAAwlxPuAABbZtQb2jnp/obZLQAAsAJeXd3HeA4AQBnQAQC20qgPVCdXz6pumZwDAAAz3FI9ozpz1MdmxwAAsBqccAcA2HJLPbi6sLrz7BYAANgnf1+dM+qy2SEAAKwWAzoAAC111+ri6r6zWwAAYI/9efUIJ9sBALg1TrgDANCoq6qvq36qWubWAADAnrks3zsHAOAgDOgAAFQ16sZR31GdUV0zuwcAAHbRUv1w9fCxc74dAABulRPuAAB8jqXu1s5J92NntwAAwFE6UD1x1CtnhwAAsPq8QAcA4HOMurI6sXre7BYAADgK765OMJ4DAHCovEAHAOCglnp09aLqDrNbAADgMPxOddaoq2eHAACwPrxABwDgoEZd0s4p93fMbgEAgEP03OohxnMAAA6XAR0AgNs06l3V8dUvzG4BAICDuK56/KjvHHXz7BgAANaPE+4AAByWpc6pXljdfnYLAAB8mr+pTh91+ewQAADWlwEdAIDDttQ92jnt/lWzWwAAoHpTdeaoD84OAQBgvTnhDgDAYRt1RXWf6sWTUwAA4IXVg4znAADsBi/QAQA4Kkv9u+r51RdNTgEAYLvcUJ0/6hdmhwAAsDkM6AAAHLVl55T7Je2cdgcAgL32t9WjR/232SEAAGwWJ9wBADhqo95Z3au6aHYLAAAb7/LqXsZzAAD2ggEdAIBdMerAqHOrb66um90DAMBGell10qirZocAALCZnHAHAGDXLfU11cXV3We3AACwEW6uvn/Us2eHAACw2QzoAADsiaXuUL2oevTsFgAA1tq11eNGXTY7BACAzeeEOwAAe2LUtaMeU51fXT+7BwCAtfSX1XHGcwAA9osX6AAA7Lmljm3npPvdZrcAALA2frs6a9RHZ4cAALA9vEAHAGDPjbq8Oqb6tdktAACshZ+pTjGeAwCw3wzoAADsi1HXVI+onl7dNDkHAIDVdH31pFFPG3Xz7BgAALaPE+4AAOy7pU6qXl7ddXYLAAAr4++qM0b999khAABsLwM6AABTLHXn6sLqwbNbAACY7o+qR4z6m9khAABsNyfcAQCYYtSHqlOqZ+Y8JwDANntFdZLxHACAVeAFOgAA0y31gOpl1V1mtwAAsG9uqZ5R/eioZXYMAACUAR0AgBWx7IznL2tnTAcAYLN9rDp31GtmhwAAwKdzwh0AgJUw6gPVydWz2nmNBADAZvqr6r7GcwAAVpEX6AAArJylHlxdWN15dgsAALvqd6vHjLp6dggAANwaL9ABAFg5o15X3bN60+wWAAB2zfOqhxjPAQBYZQZ0AABW0qirqgdWz66WyTkAABy5G6tvGXX+qJtmxwAAwME44Q4AwMpb6tTqpdU/n90CAMBh+Uh15qg3zA4BAIBDYUAHAGAtLHW36uLq2NktAAAckiuqh436q9khAABwqJxwBwBgLYy6sjqxesHsFgAAbtNvVccZzwEAWDcGdAAA1sao60d9W3VudWB2DwAAt+pnqlNH/f3sEAAAOFxOuAMAsJaWukf1quorZ7cAAFDVjdW3jfrF2SEAAHCkDOgAAKytpW5fvbA6Z3YLAMCW+3B15qg3zg4BAICjYUAHAGDtLfWU6merfzK7BQBgC/1J9QjfOwcAYBMY0AEA2AhLHVtdXN1tdgsAwBZ5bXX2qGtnhwAAwG74gtkBAACwG0ZdXh1T/ersFgCALfHc6jTjOQAAm8SADgDAxhh1TXV69fTqpsk5AACb6obqyaO+c9TNs2MAAGA3OeEOAMBGWuqk6perL5ndAgCwQT5cnTHqTbNDAABgLxjQAQDYWEvdpXpZ9YDZLQAAG+Cd1cNHXTk7BAAA9ooT7gAAbKxRH6hOrn64WibnAACss1+v7ms8BwBg03mBDgDAVljqtOol1RfPbgEAWDM/UT3d984BANgGBnQAALbGUnevXll99ewWAIA1cEP1LaMumB0CAAD7xYAOAMBWWeqLqp+vzp3dAgCwwj5cnTHqTbNDAABgP/kGOgAAW2XUJ0Y9vjq/unF2DwDACrqiOs54DgDANvICHQCArbXU8dUl1V1ntwAArIjXVWeNumZ2CAAAzOAFOgAAW2vUW6qvrf7r5BQAgFXwwupU4zkAANvMgA4AwFYb9XfVydVPVMvkHACAGW6uzh/1raNumh0DAAAzOeEOAACfstSZ1X+p/tnsFgCAfXJtdfao184OAQCAVWBABwCAT7PUPapXV18xuwUAYI9dWZ026k9mhwAAwKpwwh0AAD7NqCuqe1cXz24BANhD/606zngOAACfyYAOAACfZdSB6uzqO/MdUABg81xYPWjUB2eHAADAqnHCHQAADmKp+1WvqO4yuwUA4Cgt1TOqHxk7/w4AAHwWAzoAANyGpe7azoh+wuwWAIAj9MnqG0e9cnYIAACsMifcAQDgNoy6qnpA9XOzWwAAjsD7q/sZzwEA4LZ5gQ4AAIdhqfOq51e3m90CAHAI3lGdNupvZocAAMA6MKADAMBhWupe1aurfzW7BQDgIH6levyoj88OAQCAdeGEOwAAHKZRb6u+tnrj7BYAgM/jx6szjecAAHB4DOgAAHAERn2w+vrqZ2e3AAB8mhurJ436nlG3zI4BAIB144Q7AAAcpaUeX/189T/PbgEAttpHq0eP+p3ZIQAAsK4M6AAAsAuWumc73xn9stktAMBW+qvqYaOumB0CAADrzAl3AADYBaPeXh2bF18AwP57c3Wc8RwAAI6eAR0AAHbJqA9XD6l+cnYLALA1Xl59/af+HgIAABwlAzoAAOyiUTeP+q7qsdXHZ/cAABtrqZ5VnTPq+tkxAACwKXwDHQAA9shSX93Od9G/fHYLALBRrq+ePOrC2SEAALBpDOgAALCHlrpjdVH10NktAMBG+HB1+tj57jkAALDLnHAHAIA9NOoj1cOqH2vn1CoAwJF6V3W88RwAAPaOF+gAALBPljqzuqC6/ewWAGDtvLE641O/nAcAAOwRL9ABAGCfjHpldUL17tktAMBaeXH1YOM5AADsPQM6AADso1F/XN27+p3ZLQDAyluq7xv1xFE3zI4BAIBtYEAHAIB9Nurq6qHVT89uAQBW1nXVY0f96OwQAADYJr6BDgAAEy31xOrnqn8yuwUAWBkfrB456i2zQwAAYNsY0AEAYLKljqteVX3J7BYAYLo/qU4bdeXsEAAA2EZOuAMAwGSj3lrdq51/AgDb67erE4znAAAwjwEdAABWwKj3V19XXTA5BQCY44Lq1FF/PzsEAAC2mQEdAABWxKjrR51X/Yfqptk9AMC+WKpnjjpv1I2zYwAAYNv5BjoAAKygpR5QXVLdaXYLALBnbqiePOqls0MAAIAdBnQAAFhRS3159SvVV89uAQB23UerR416w+wQAADgHzjhDgAAK2rUu6sTqlfObgEAdtVfVycazwEAYPUY0AEAYIWNOlA9pnpGdcvkHADg6F1eHT/qT2eHAAAAn8sJdwAAWBNLnVZdWN1hdgsAcEReUz1u1MdnhwAAALfOC3QAAFgTo36tOq76y9ktAMBhe351hvEcAABWmwEdAADWyKg/q+5TvX52CwBwSG6pvnPUU0fdPDsGAAA4OAM6AACsmVEfqU6pnje7BQA4qE9Wjxn13NkhAADAofENdAAAWGNLPaWdIf0LZ7cAAJ/hQ9UjRr1ldggAAHDoDOgAALDmlrpf9arqX8xuAQCqeld1yqi/mh0CAAAcHifcAQBgzY36vXa+i/7O2S0AQG+ujjeeAwDAejKgAwDABhj17uq+1WtmtwDAFru4OnnU1bNDAACAI2NABwCADTHqY9Xp1Y9Vy+QcANg2z6nOHnXd7BAAAODI+QY6AABsoKUeV/3n6nazWwBgw91cfduon58dAgAAHD0DOgAAbKil7lVdWn3J7BYA2FAHqrNG/cbsEAAAYHcY0AEAYIMtO+P5pe2M6QDA7nl/9bBRb58dAgAA7B7fQAcAgA02dn64f7/qZbNbAGCDvLM63ngOAACbx4AOAAAbbtR11bnV91W3TM4BgHX3+urEUe+dHQIAAOw+J9wBAGCLLPWI6sLq9rNbAGANvbh6yqgbZ4cAAAB7wwt0AADYIqN+tbpvdeXsFgBYI0v1g9V5xnMAANhsXqADAMAWWupfVq+qTpzdAgAr7obqm0a9ZHYIAACw97xABwCALTTqg9XXVy+d3QIAK+yj1SnGcwAA2B4GdAAA2FKjrh/1jdX3tXOaFgD4B++pThr1u7NDAACA/eOEOwAA0FKnt/Ma/Z/ObgGAFfCH1cNGfWB2CAAAsL8M6AAAQFVL3bN6TfWvZrcAwES/Xp096uOzQwAAgP3nhDsAAFDVqLdX96neNrsFACZ5QfVI4zkAAGwvAzoAAPD/G/X+6v7VJbNbAGAf3VJ916hvG3Xz7BgAAGAeAzoAAPAZRn2yOqt6VrVMzgGAvXZdddaon5wdAgAAzOcb6AAAwOe11NnVBdXtZrcAwB74cPXwUW+ZHQIAAKwGAzoAAHBQSx1X/Up1l9ktALCL3l2dMuovZocAAACrwwl3AADgoEa9tbpP9Y7ZLQCwS/6wOsF4DgAAfDYDOgAAcJtGvbc6qXrN7BYAOEq/VX3dqA/MDgEAAFaPAR0AADgkow5Up1c/PrsFAI7QL1Wnfeq/aQAAAJ/DgA4AAByyUbeM+p7qvOqG2T0AcBh+pHriqBtnhwAAAKtrzA4AAADW01L3r15d3XF2CwAcxM3V+aN+bnYIAACw+gzoAADAEVvq7tVl7fwTAFbNJ6vHjbp0dggAALAeDOgAAMBRWXZeoL+6nRfpALAqPtLO987/++wQAABgffgGOgAAcFTGzkDxkOrC2S0A8Cl/Xd3XeA4AABwuAzoAAHDURl1ffWP1zGqZnAPAdnt7dfyoP58dAgAArB8n3AEAgF211NnVBdXtZrcAsHV+u3rUqI/NDgEAANaTAR0AANh1Sx1fXVr9y9ktAGyNl1ZPHnXD7BAAAGB9OeEOAADsulFvqY6rrpjdAsBW+LHqCcZzAADgaHmBDgAA7Jml/nl1SfWg2S0AbKSbq6eNet7sEAAAYDMY0AEAgD211BdWL6iePLsFgI1yXXXOqFfPDgEAADaHAR0AANgXS313Oyd2fUoKgKP1keoRo948OwQAANgsBnQAAGDfLHV69dLqn85uAWBtvaf6hlF/OjsEAADYPAZ0AABgXy117+pXq7vMbgFg7fxxdcqo988OAQAANpPTiQAAwL4a9QfVfar/MbsFgLXyu9VJxnMAAGAvGdABAIB9N+q91QnVb81uAWAtvLydl+fXzg4BAAA2mwEdAACYYtTHqodVvzi7BYCV9hPVOaNumB0CAABsPgM6AAAwzaibRj2l+r+qZXYPACvlluppo757+G8EAACwT8bsAAAAgKqlzqpeXN1ucgoA811fPX7UJbNDAACA7WJABwAAVsZSJ1aXVnea3QLANB+tTh/1xtkhAADA9jGgAwAAK2Wpu1evrf7N7BYA9t37qm8Y9c7ZIQAAwHbyDXQAAGCljHpXdVz1ltktAOyr/1EdbzwHAABmMqADAAArZ9SHqwdWr5zdAsC+eEN1v1FXzQ4BAAC2mwEdAABYSaOuqx5T/fjsFgD21CuqU0ZdMzsEAADAgA4AAKysUcuo76m+tbp5dg8Au+6nqseOun52CAAAQNWYHQAAAHAoljqluri6/ewWAI7aUn3n2BnQAQAAVoYBHQAAWBtL3bP69epLZrcAcMRuqL5x7JxuBwAAWCkGdAAAYK0s9a+ry6r/Y3YLAIftQPWoUa+bHQIAAHBrfAMdAABYK6PeV52Y8QVg3XyoeqDxHAAAWGUGdAAAYO2MurZ6WPVfZrcAcEjeU5046m2zQwAAAA7GgA4AAKylUTeOelL1Q7NbADiod1YnjPqL2SEAAAC3xTfQAQCAtbfUedXPV//T7BYAPsObq4eP+ujsEAAAgENhQAcAADbCUg+tLqluP7sFgKp+rTpr1CdnhwAAABwqJ9wBAICNMOo3q/tXH5jdAkAvrs4wngMAAOvGgA4AAGyMUX9UHV/92ewWgC327Oq8UTfNDgEAADhcTrgDAAAbZ6k7VpdWJ81uAdgiS/Vdo547OwQAAOBIGdABAICNtNTtqgurR81uAdgCN1ZPGvXS2SEAAABHwwl3AABgI426rnpM9TOzWwA23MerRxjPAQCATeAFOgAAsPGW+vbqJ/JLxAC77SPVqaPeOjsEAABgNxjQAQCArbDUo6uXtHPaHYCj977qoaP+dHYIAADAbjGgAwAAW2Opk6pLqzvObgFYc3/aznj+vtkhAAAAu8mADgAAbJWlvqJ6bfVls1sA1tTvt3O2/erZIQAAALvN9/8AAICtMurPquOrt89uAVhDr60eZDwHAAA2lQEdAADYOqP+trp/9brZLQBr5KXVI0Z9fHYIAADAXjGgAwAAW2nUx6rTqotmtwCsgZ+unjDqxtkhAAAAe8mADgAAbK1RN1SPr35ydgvAilqqp4/69rHz7wAAABttzA4AAABYBUt9eztDuv9PAthxc/XkUS+eHQIAALBf/GAIAADgU5Z6XHVB9Y9ntwBM9snq7FGvmR0CAACwnwzoAAAAn2apB1W/Uv2z2S0Ak3y0evioN88OAQAA2G8GdAAAgM+y1DHVZdVdZrcA7LP3Vw8Z9c7ZIQAAADMY0AEAAG7FUl9e/Vb1v81uAdgnf9HOeP7Xs0MAAABm+YLZAQAAAKto1Lur+1Zvm90CsA/eVp1oPAcAALadAR0AAODzGPWh6oHtvEQH2FSvrx74qT/zAAAAtpoBHQAA4CBGHahOq146uwVgD7yiOvVTf9YBAABsPQM6AADAbRh1Y/WE6jmzWwB20X+qHjfqhtkhAAAAq8KADgAAcAhGLaO+t/r26pbZPQBH6Rmj/sPw5xkAAMA5EaAbAAASxElEQVRnGLMDAAAA1s1SZ1Uvqf7x7BaAw3RL9dRRPzc7BAAAYBUZ0AEAAI7AUg+qLq1uP7sF4BDdWD1h1MtnhwAAAKwqAzoAAMARWupe1W9U/2J2C8Bt+ET1mFGXzQ4BAABYZQZ0AACAo7DUParfrL5sdgvA5/H31cNH/d7sEAAAgFVnQAcAADhKS/3rdkb0r5zdAvBZPlg9dNTbZ4cAAACsgy+YHQAAALDuRr2vul/1+7NbAD7Ne6r7Gc8BAAAOnQEdAABgF4y6unpQ9brZLQDVFe2M538+OwQAAGCdGNABAAB2yaiPV6dVvzy7Bdhqf9TOeP7e2SEAAADrxoAOAACwi0bdUJ1TPX92C7CV3lg9YNSHZocAAACsIwM6AADALht1y6inVj80uwXYKr9enTLq2tkhAAAA62rMDgAAANhkS/376j/lF5iBvfWy6t+NunF2CAAAwDozoAMAAOyxpc6qXlL949ktwEZ6QXX+qFtmhwAAAKw7LyAAAAD22KhXVKdVB2a3ABvn/x71bcZzAACA3eEFOgAAwD5Z6j7VZdWdZrcAa2+pvmvUc2eHAAAAbBIDOgAAwD5a6iuq11dfMrsFWFs3V9806oLZIQAAAJvGgA4AALDPlvpf2xnR/83kFGD9XF89btSrZ4cAAABsIgM6AADABEv9L9VvV//77BZgbRyoTh87v4ADAADAHjCgAwAATLLUHavXVvee3QKsvI9U3zDq92eHAAAAbLIvmB0AAACwrcbOIPb11RtmtwAr7W+r+xvPAQAA9p4BHQCA/7e9u4/Z9izoO/49W1OwYUOHJSgdkzlmfF3MEo1aEfsitQiYihU0ggFUKmYKmonoX5vAlCgaRYYoazYwpBkwXpKKQKWTCDihduB8AUVZFVKqUGofoPTp4R/XI4PZ0uflvu/jvK7r80mOPP9+r/N++sfT330eFzDRUrdWl1Wvmd0CrNKfV1+/1LtmhwAAAOwDAzoAAMBkS32s+vbqN2a3AKvyzuqCpd47OwQAAGBfGNABAABWYKlPVN9T/efZLcAqvLV62LK5vh0AAIAjYkAHAABYiaXurH6w+pnZLcBUb6guXupvZ4cAAADsGwM6AADAiiw1lnpG9ROzW4ApXlE9YqnbZocAAADso2V2AAAAAHdt1JXVL+eXn2FfvLj6/qWOzw4BAADYV/4nDAAAwEot9YLq8dUds1uAQ/fz1ZON5wAAAHN5Ax0AAGDlRj2yurq69+wW4FD81FLPmh0BAACAAR0AAGArjLq4elV17uwW4MDcWf3QidsmAAAAWAEDOgAAwJYY9Q3Va6t/OrsFOGPHqycs9dLZIQAAAPw/BnQAAIAtMuprqmuqz53dApy226vHLvXK2SEAAAB8OgM6AADAlhn1VdVvVZ83uwU4ZceqxyybX4QBAABgZQzoAAAAW2jUl1ZvrB4wuwU4abdWj1zqutkhAAAA3DUDOgAAwJYa9cXV66t/PrsFuEcfqr5lqbfNDgEAAODuGdABAAC22KgHt3kT/cGzW4C7dVP1zUvdMDsEAACAz8yADgAAsOXG5g3017d5Ix1Yl7+qLl7qj2eHAAAAcM8M6AAAADtgbL4L/Q3Vl81uAT7pvdVFy+ZPAAAAtsBZswMAAAA4c0t9oHpYdf3kFGDjj6uHGs8BAAC2iwEdAABgRyx1c3Vh9bbZLbDnbqi+cakbZ4cAAABwagzoAAAAO2SpD1eXVL8zuwX21O9V37TUTbNDAAAAOHUGdAAAgB2z1K3VpdWbJqfAvrmuunipD80OAQAA4PQY0AEAAHbQUseqR1TXzm6BPfGb1WUnfoEFAACALWVABwAA2FEnRvRHVm+c3QI77pXVo0/8NwcAAMAWM6ADAADssBOD3qOqN8xugR310uqKpW6fHQIAAMCZM6ADAADsuBMj+qOr35rdAjvmV6vHL3XH7BAAAAAOhgEdAABgD5wY0b+tet3sFtgRz6uestSds0MAAAA4OAZ0AACAPbHURzOiw0H46aWevtSYHQIAAMDBWmYHAAAAcLRG3bt6ZXXp7BbYQj++1M/OjgAAAOBwGNABAAD20Kh7tRnRv2V2C2yJUf3QUr8yOwQAAIDDY0AHAADYU6POqV5RPWJ2C6zc8erJS101OwQAAIDDZUAHAADYY0Z0uEe3V9+z1NWzQwAAADh8BnQAAIA9d2JEf2V12ewWWJmPVd+x1GtnhwAAAHA0DOgAAAA06t7Va6qLZ7fAStxWPXqpN84OAQAA4OgY0AEAAKhq1LnVNdVDZ7fAZLdUly31u7NDAAAAOFoGdAAAAD5p1D+pXld97ewWmOTm6uFLvWN2CAAAAEfPgA4AAMCnGXXfNtdW/9vZLXDEPlBdvNQfzg4BAABgDgM6AAAA/8io+1XXVl85uwWOyF9VFy31J7NDAAAAmMeADgAAwF0adV51XfUls1vgkL2vzXj+ntkhAAAAzGVABwAA4G6N+oI2I/q/mt0Ch+QvqguXeu/sEAAAAOYzoAMAAPAZjTq/+p3qCyenwEH7szbj+ftmhwAAALAOZ80OAAAAYN2WurG6qM2fsCv+pPpG4zkAAACfyhvoAAAAnJRRD6neXN1/dgucoT9q8+b5B2aHAAAAsC7eQAcAAOCkLPXu6uLqltktcAbeWT3MeA4AAMBdMaADAABw0pbN+Pio6tjsFjgN17d58/ym2SEAAACskwEdAACAU7LU/6weVx2f3QKn4O3VRUvdPDsEAACA9TKgAwAAcMqWenX1hGrMboGT8JY24/mHZocAAACwbgZ0AAAATstSL61+dHYH3IM3V5cudcvsEAAAANbPgA4AAMBpW+p51X+a3QF347o24/lHZocAAACwHZbZAQAAAGy3sfm35fOrK2e3wKd4ffVtSx2bHQIAAMD2MKADAABwxkadXb2seszsFqh+s7p8qY/ODgEAAGC7GNABAAA4EKPOqa6pLpzdwl57bfXtS90+OwQAAIDtY0AHAADgwIy6T/W71VfMbmEvvaJ6nPEcAACA03XW7AAAAAB2x1J/V11W3Ti7hb1zdfVY4zkAAABnwoAOAADAgVo24/ll1S2zW9gbL62+a6lPzA4BAABguxnQAQAAOHBLvbO6PG8Dc/iuqp6w1PHZIQAAAGw/AzoAAACHYqlrqydWY3YLO+tF1ZOM5wAAABwUAzoAAACHZtlcrf3M2R3spF+pfmCpO2eHAAAAsDuW2QEAAADsvrEZO6+c3cHO+MXqaYvbDQAAADhgBnQAAAAO3aizq1dUj5rdwtZ77lL/fnYEAAAAu8mADgAAwJEYdW7129VXz25haz17qZ+cHQEAAMDuMqADAABwZEadX72lzZ9wKp611E/NjgAAAGC3GdABAAA4UqO+ss2Ifu7sFrbGc5Z65uwIAAAAdt9ZswMAAADYL0v97+px1fHZLWyFnzGeAwAAcFQM6AAAABy5pV5dPWN2B6v33MXfEwAAAI6QK9wBAACYZtQLqqfM7mCVfm6pH5sdAQAAwH4xoAMAADDNqHOqa6oLZ7ewKs9b6umzIwAAANg/BnQAAACmGnXf6veqfz27hVX4haWeNjsCAACA/eQ70AEAAJhqqVuqR1R/M7uF6X4xb54DAAAwkQEdAACA6ZZ6T3VFdXx2C9P8UvW0pcbsEAAAAPaXAR0AAIBVWOravH28r55f/bDxHAAAgNl8BzoAAACrMurXqifN7uDIvKB6qvEcAACANTCgAwAAsCqjzmnzNvrXz27h0L2wutJ4DgAAwFoY0AEAAFidUfev3l6dP7uFQ/Oi6geM5wAAAKyJ70AHAABgdZa6qXp0dWx2C4fi1zOeAwAAsEIGdAAAAFZpqXe0+S50I+tueXH1fcZzAAAA1siADgAAwGot9bLqubM7ODD/JeM5AAAAK+Y70AEAAFi1UWdX11SXzG7hjFxVPXmp47NDAAAA4O4Y0AEAAFi9UedVv189aHYLp+W/Vk80ngMAALB2rnAHAABg9Zb6YHV59bHZLZyyl2Q8BwAAYEsY0AEAANgKS729eursDk7Jb1TfazwHAABgWxjQAQAA2BpLvbh64ewOTsrLqscbzwEAANgmvgMdAACArTLqnOpN1ddOTuHuXV19l/EcAACAbWNABwAAYOuMOr96R3Xe7Bb+kf9RXbHUJ2aHAAAAwKlyhTsAAABbZ6kbq+/OG85r87rqO43nAAAAbCsDOgAAAFtpqddXPz27g0+6rrp8qdtnhwAAAMDpcoU7AAAAW2vU2dU11SWzW/bc26pvXuojs0MAAADgTBjQAQAA2Gqj7t/m+9AfOLtlT/1B9U1LfXh2CAAAAJwpV7gDAACw1Za6qXpsdcfslj30f9q8eW48BwAAYCcY0AEAANh6S725eubsjj3znjbj+QdnhwAAAMBBcYU7AAAAO2Fs/o376upbZ7fsgRurC5b6y9khAAAAcJAM6AAAAOyMUZ9X3VB9weyWHfb+6qHL5g10AAAA2CmucAcAAGBnLHVz9d3V8dktO+qDba5tN54DAACwkwzoAAAA7JSl3lQ9e3bHDrqlunSpd80OAQAAgMPiCncAAAB2zqiz2wzpF0xO2RW3VZcs9ZbZIQAAAHCYDOgAAADspFEPqq6v/tnsli13rPrWpX57dggAAAAcNle4AwAAsJOWel/1xNkdW+726jHGcwAAAAAAAIAdMOpFo4ZzyueOUZfP/vkBAADAUXKFOwAAADtt1H2qG6p/Obtlixyvvnepl8wOAQAAgKPkCncAAAB22lJ/Vz2+zSjMPRvVU4znAAAAAAAAADtq1LNXcC36Npwfnv2zAgAAAAAAAOAQjTpn1PUrGKjXfH5y9s8JAAAAAAAAgCMw6stHfXQFQ/Uaz3Nn/3wAAAAAAAAAOEKjnr6CsXpt56pRy+yfDQAAAAAAAABHaNRZo65dwWi9lvOqUWfP/rkAAADAGvjtcgAAAPbOqH9R3VDdd3bLZNdWj1zq2OwQAAAAWIOzZgcAAADAUVvqL6t/N7tjsuury43nAAAAAAAAADTqv6/gCvUZ592jzpv9/AEAAGBtXOEOAADA3hp1v+pd1QNmtxyhG6sLTryFDwAAAHwKV7gDAACwt5b6m+qpszuO0M3VZcZzAAAAAAAAAO7SqJev4Fr1wz63jfqa2c8aAAAAAAAAgBUb9fmj/nYFI/dhnTtGPWr2cwYAAAAAAABgC4x60gqG7sM6V85+vgAAAAAAAABsiVHLqDeuYOw+6POc2c8WAAAAAAAAgC0z6otGHVvB6H1Q5yWjltnPFQAAAAAAAIAtNOrHVjB8H8R5zahzZj9PAAAAAAAAALbUqLNH/f4KBvAzOW8dde7sZwkAAAAAAADAlhv1b0bdvoIh/HTOu0edN/sZAgAAAAAAALAjRj1rBWP4qZ4Pj/qK2c8OAAAAAAAAgB0y6t6j/nQFo/jJno+PunD2cwMAAAAAAABgB426dAXD+Mme75/9vAAAAAAAAADYYaNevoJx/J7Oc2Y/JwAAAAAAAAB23KgHjbptBSP53Z2Xj1pmPycAAAAAAAAA9sCoZ6xgKL+r89ZR585+PgAAAAAAAADsiVH3GvVHKxjMP/X89agHzn42AAAAAAAAAOyZUZesYDT/h/PxUV83+5kAAAAAAAAAsKdGXb2C8XyM+r7ZzwIAAAAAAACAPTbq/FG3Th7PXzj7OQAAAAAAAABAo54xcTx/86hzZj8DAAAAAAAAAGjUvUb9+YTx/AOjHjD78wMAAAAAAADAJ4264ojH8ztHPXz25wYAAAAAAACATzNqOXGd+lEN6D87+zMDAAAAAAAAwF0a9dUn3gw/7PH8f/necwAAAAAAAABWbdR/O+Tx/COjvmj25wQAAAAAAACAz2jUg0YdO8QB/Udmf0YAAAAAAAAAOCmj/uMhjed/MOqzZn8+AAAAAAAAADgpo+4z6v0HPJ7fOeqC2Z8NAAAAAAAAAE7JqCcd8ID+ktmfCQAAAAAAAABO2aizTly5fhDj+SdGPWT2ZwIAAAAAAACA0zLqogMa0H999mcBAAAAAAAAgDMy6lVnOJ5/fNSDZ38OAAAAAAAAADgjo7541O1nMKC/YPZnAAAAAAAAAIADMeoXTnM8/+ioB87uBwAAAAAAAIADMepzRt18GgP6z89uBwAAAAAAAIADNeoHT3E8//Co+83uBgAAAAAAAIADNeqzRr3zFAb0H5/dDAAAAAAAAACHYtTFJzmev2/UZ8/uBQAAAAAAAIBDM+qqkxjQnzC7EwAAAAAAAAAO1ajPHfV/P8N4/qZRy+xOAAAAAAAAADh0ox4+6s67GM9vHfWQ2X0AAAAAAAAAcGRG/Yf/bzy/Y9R3zu4CAAAAAAAAgCM36mmjbh71/lFXzO4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBk/D2wyEfd9Zd2fgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/imgs/line.svg":
/*!******************************!*\
  !*** ./public/imgs/line.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTEwcHgiIGhlaWdodD0iMjk3cHgiIHZpZXdCb3g9IjAgMCA5MTAgMjk3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MS4xICg1NzUwMSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuMzAwMDAwMDEyIj4KICAgICAgICA8cGF0aCBkPSJNMC4yMTA5Mzc1LDI3Ni4wODk4NDQgQzQ4LjQ3NjU2MjUsMjc2LjA4OTg0NCA2MC41MDc4OTUzLDI4NC40MzMwMjMgODQuNDE3OTY4OCwyNzYuMDg5ODQ0IEMxMDAuNDQ3NTIzLDI3MC40OTY0OTIgOTUuNzE0MjM3MiwxOTkuOTk3NDIxIDEyMS42ODM1OTQsMjE5LjI2MTcxOSBDMTI2LjQzMTczNywyMjIuNzgzOTMzIDE4OC4wOTkyMzYsMzExLjgxNTQxMiAyMTIuNjU0Mjk3LDI5MC45NDE0MDYgQzI0Ni41NzE3NzEsMjYyLjEwODUwOSAxOTcuODcxMDAzLDEzNC43MTA4NDYgMjUyLjk0NTMxMywxMzEuNzYxNzE5IEMyNzEuODgyNDQxLDEzMC43NDc2NyAzMzMuODcyNjYyLDI0NS4xOTg2MTMgMzUwLjA3MDMxMywyNDguOTU3MDMxIEM0MjEuMDYyNSwyNjUuNDI5Njg3IDQzMy42NzE4NzUsNjcuNzEwOTI0OCA0MzMuNjcxODc1LDUwLjU1NDY4NzUgQzQzMy42NzE4NzUsNDQuNjYzMjgzNSA0MzMuNjcxODc1LDExLjMzOTg0MzcgNDIxLjA2MjUsNC45NDUzMTI1IEM0MTMuNDc4MzYyLDEuMDk5MjA1NDEgNDA1LjU3ODEyNSwxLjA5OTIwNTQxIDM5Ny4yNDYwOTQsMTEuMzM5ODQzNyBDMzg4LjkxNDA2MywyMS41ODA0ODIxIDM4Mi4yNDIxODgsMzIuNjc1NzgxMiAzODIuMjQyMTg4LDUwLjU1NDY4NzUgQzM4Mi4yNDIxODgsNjEuOTkzNDk1IDM1Ny4yNzAzMDMsMTIuOTY5OTA5MSAzNDIuNzY5NTMxLDQuOTQ1MzEyNSBDMzI3LjIxNDUxLC0zLjY2MjY5NjE0IDMyMi43NjIzMjIsNDIuMjUyODAxOCAzMjEuOTg0Mzc1LDUwLjU1NDY4NzUgQzMxNi44ODYxMTIsMTA0Ljk2MDkzNyA0NjAuNzQyMjE3LDE1Ny4wNzU5MzMgNDY5Ljg5NDUzMSwxNjEuODA4NTk0IEM0ODEuMzE2NDA2LDE2Ny43MTQ4NDQgNTE3LjMyNDQxNSwxODguNTM2NjMgNTQ3LjA4NTkzOCwxNjEuODA4NTk0IEM1ODAuNTQyOTY5LDEzMS43NjE3MTkgNTU3LjU1NTgzMSwxMjcuMjYwODEyIDU5MC42Mjg5MDYsMTA1LjA2NjQwNiBDNjA2Ljc4Nzc2LDk0LjIyMjY1NjIgNjI0LjYyNzYwNCw5NC4yMjI2NTYyIDY0NC4xNDg0MzgsMTA1LjA2NjQwNiBDNjY1LjYyNSwxMjIuODYzMjgxIDY3Ni4zNjMyODEsMTQ3LjQyMDU3MyA2NzYuMzYzMjgxLDE3OC43MzgyODEgQzY3Ni4zNjMyODEsMjAxLjY2MDQ5MSA2NzkuNTMzNzksMjQwLjMyMDc2MiA2OTQuMjczNDM4LDI2NS40Mjk2ODcgQzcwOS4wMTMwODUsMjkwLjUzODYxMyA3NjMuNDYwOTM4LDI3Ni4wODk4NDQgNzc0Ljk1NzAzMSwyNDguOTU3MDMxIEM3ODYuNDUzMTI1LDIyMS44MjQyMTkgNzc1LjQ2NTA1NiwxNTguODg5Mzc1IDc5OC41MzkwNjMsMTUzLjUzMTI1IEM4MDUuMzIwMzEyLDE1MS45NTY1NDQgODIzLjEyNTMwNSwxNTEuOTU2NTQ0IDgzNC45NDE0MDYsMTc4LjczODI4MSBDODQ0LjU0MjY4LDIwMC41MDAwMSA4NDAuMDgzNzY2LDI2Mi44Mjg0NjQgODQ2LjkyNTc4MSwyNzYuMDg5ODQ0IEM4NTEuOTM0Mzc3LDI4NS43OTc2NDEgODcyLjQ0MjE4OSwyODUuNzk3NjQxIDkwOC40NDkyMTksMjc2LjA4OTg0NCIgaWQ9IlBhdGgtMiIgc3Ryb2tlPSIjRjAwMTAxIiBzdHJva2Utd2lkdGg9IjUiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./client/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./client/index.js */"./client/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map