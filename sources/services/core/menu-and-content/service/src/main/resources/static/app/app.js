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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "app";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MenuAndContent = __webpack_require__(9);

var _MenuAndContent2 = _interopRequireDefault(_MenuAndContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApplicationLayoutEvents = function () {
    function ApplicationLayoutEvents() {
        _classCallCheck(this, ApplicationLayoutEvents);
    }

    _createClass(ApplicationLayoutEvents, [{
        key: 'subscribeToRequested',
        value: function subscribeToRequested() {
            var _this = this;

            this.applicationLayoutRequestedSubscriptionToken = PubSub.subscribe('uiEvent.application.applicationLayout.requested', function (msg) {
                _this.publishAvailable();
            });
        }
    }, {
        key: 'publishAvailable',
        value: function publishAvailable() {
            PubSub.publish('uiEvent.application.applicationLayout.available', React.createElement(_MenuAndContent2.default, null));
        }
    }]);

    return ApplicationLayoutEvents;
}();

exports.default = ApplicationLayoutEvents;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ApplicationLayoutEvents = __webpack_require__(1);

var _ApplicationLayoutEvents2 = _interopRequireDefault(_ApplicationLayoutEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var applicationLayoutEvents = new _ApplicationLayoutEvents2.default();
applicationLayoutEvents.subscribeToRequested();
applicationLayoutEvents.publishAvailable();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContentContainerStore = __webpack_require__(4);

var _ContentContainerStore2 = _interopRequireDefault(_ContentContainerStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentContainer = function (_React$Component) {
    _inherits(ContentContainer, _React$Component);

    function ContentContainer() {
        _classCallCheck(this, ContentContainer);

        var _this = _possibleConstructorReturn(this, (ContentContainer.__proto__ || Object.getPrototypeOf(ContentContainer)).call(this));

        _this.contentContainerStore = new _ContentContainerStore2.default(_this);
        _this.state = { contentComponent: null };
        return _this;
    }

    _createClass(ContentContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.contentContainerStore.subscribeToEvents();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.contentContainerStore.unsubscribeFromEvents();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                this.state.contentComponent
            );
        }
    }]);

    return ContentContainer;
}(_react2.default.Component);

exports.default = ContentContainer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContentContainerStore = function () {
    function ContentContainerStore(contentContainerComponent) {
        _classCallCheck(this, ContentContainerStore);

        this.contentContainerComponent = contentContainerComponent;
    }

    _createClass(ContentContainerStore, [{
        key: 'subscribeToEvents',
        value: function subscribeToEvents() {
            var _this = this;

            this.contentIsAvailableSubscriptionToken = PubSub.subscribe('uiEvent.menu-and-content.content.available', function (msg, contentComponent) {
                _this.contentContainerComponent.setState({ contentComponent: contentComponent });
            });
        }
    }, {
        key: 'unsubscribeFromEvents',
        value: function unsubscribeFromEvents() {
            PubSub.unsubscribe(this.contentIsAvailableSubscriptionToken);
        }
    }]);

    return ContentContainerStore;
}();

exports.default = ContentContainerStore;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MenuStore = __webpack_require__(7);

var _MenuStore2 = _interopRequireDefault(_MenuStore);

var _MenuItem = __webpack_require__(6);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _UserInfoPlaceholder = __webpack_require__(8);

var _UserInfoPlaceholder2 = _interopRequireDefault(_UserInfoPlaceholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu() {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this));

        _this.menuStore = new _MenuStore2.default(_this);
        _this.state = { menuItems: [] };
        _this.navigateToFirstMenuItem = _this.navigateToFirstMenuItem.bind(_this);
        _this.navigateTo = _this.navigateTo.bind(_this);
        return _this;
    }

    _createClass(Menu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.menuStore.subscribeToEvents();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.menuStore.unsubscribeFromEvents();
        }
    }, {
        key: 'navigateToFirstMenuItem',
        value: function navigateToFirstMenuItem() {
            this.menuStore.navigateToFirstMenuItem();
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(menuItem) {
            this.menuStore.navigateTo(menuItem);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-default' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'navbar-header' },
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar', 'aria-expanded': 'false', 'aria-controls': 'navbar' },
                            _react2.default.createElement(
                                'span',
                                { className: 'sr-only' },
                                'Toggle navigation'
                            ),
                            _react2.default.createElement('span', { className: 'icon-bar' }),
                            _react2.default.createElement('span', { className: 'icon-bar' }),
                            _react2.default.createElement('span', { className: 'icon-bar' })
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'navbar-brand', href: '#', onClick: this.navigateToFirstMenuItem },
                            _react2.default.createElement('span', { className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'navbar', className: 'collapse navbar-collapse' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'nav navbar-nav' },
                            this.state.menuItems.map(function (menuItem) {
                                return _react2.default.createElement(_MenuItem2.default, { key: 'menuItem' + menuItem.code, menuItem: menuItem, navigateTo: _this2.navigateTo });
                            })
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'nav navbar-nav navbar-right' },
                            _react2.default.createElement(_UserInfoPlaceholder2.default, null)
                        )
                    )
                )
            );
        }
    }]);

    return Menu;
}(_react2.default.Component);

exports.default = Menu;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = function (_React$Component) {
    _inherits(MenuItem, _React$Component);

    function MenuItem(props) {
        _classCallCheck(this, MenuItem);

        var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    _createClass(MenuItem, [{
        key: "onClick",
        value: function onClick(e) {
            e.preventDefault();
            this.props.navigateTo(this.props.menuItem);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    "a",
                    { href: "#", onClick: this.onClick },
                    this.props.menuItem.label
                )
            );
        }
    }]);

    return MenuItem;
}(_react2.default.Component);

exports.default = MenuItem;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuStore = function () {
    function MenuStore(component) {
        _classCallCheck(this, MenuStore);

        this.component = component;
        this.menuItemsMap = new Map();
        this.selectedMenuItem = null;
    }

    _createClass(MenuStore, [{
        key: 'subscribeToEvents',
        value: function subscribeToEvents() {
            var _this = this;

            this.menuItemIsAvailableSubscriptionToken = PubSub.subscribe('uiEvent.menu-and-content.menuItem.available', function (msg, menuItem) {
                _this.menuItemsMap.set(menuItem.code, menuItem);
                _this.rebuildState();
            });
            PubSub.publish('uiEvent.menu-and-content.menuItems.requested');
        }
    }, {
        key: 'unsubscribeFromEvents',
        value: function unsubscribeFromEvents() {
            PubSub.unsubscribe(this.menuItemIsAvailableSubscriptionToken);
        }
    }, {
        key: 'rebuildState',
        value: function rebuildState() {
            var _this2 = this;

            var menuItems = [];
            this.menuItemsMap.forEach(function (value) {
                return menuItems.push(value);
            });
            menuItems.sort(function (mi1, mi2) {
                return mi1.priority - mi2.priority;
            });
            this.component.setState({ menuItems: menuItems, selectedMenuItem: this.selectedMenuItem }, function () {
                return _this2.navigateToFirstMenuItem();
            });
        }
    }, {
        key: 'navigateToFirstMenuItem',
        value: function navigateToFirstMenuItem() {
            if (this.component.state.menuItems.length > 0) {
                this.navigateTo(this.component.state.menuItems[0]);
            }
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(menuItem) {
            this.selectedMenuItem = menuItem;
            PubSub.publish('uiEvent.menu-and-content.content.requested.' + this.selectedMenuItem.code);
        }
    }]);

    return MenuStore;
}();

exports.default = MenuStore;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInfoPlaceholder = function (_React$Component) {
    _inherits(UserInfoPlaceholder, _React$Component);

    function UserInfoPlaceholder() {
        _classCallCheck(this, UserInfoPlaceholder);

        var _this = _possibleConstructorReturn(this, (UserInfoPlaceholder.__proto__ || Object.getPrototypeOf(UserInfoPlaceholder)).call(this));

        _this.state = { component: null };
        return _this;
    }

    _createClass(UserInfoPlaceholder, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.userInfoRequestedSubscriptionToken = PubSub.subscribe('uiEvent.users.userInfo.available', function (msg, component) {
                _this2.setState({ component: component });
            });
            PubSub.publish('uiEvent.users.userInfo.requested');
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            PubSub.unsubscribe(this.userInfoRequestedSubscriptionToken);
        }
    }, {
        key: 'render',
        value: function render() {
            return this.state.component;
        }
    }]);

    return UserInfoPlaceholder;
}(_react2.default.Component);

exports.default = UserInfoPlaceholder;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Menu = __webpack_require__(5);

var _Menu2 = _interopRequireDefault(_Menu);

var _ContentContainer = __webpack_require__(3);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuAndContent = function (_React$Component) {
    _inherits(MenuAndContent, _React$Component);

    function MenuAndContent() {
        _classCallCheck(this, MenuAndContent);

        return _possibleConstructorReturn(this, (MenuAndContent.__proto__ || Object.getPrototypeOf(MenuAndContent)).apply(this, arguments));
    }

    _createClass(MenuAndContent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Menu2.default, null),
                _react2.default.createElement(_ContentContainer2.default, null)
            );
        }
    }]);

    return MenuAndContent;
}(_react2.default.Component);

exports.default = MenuAndContent;

/***/ })
/******/ ]);