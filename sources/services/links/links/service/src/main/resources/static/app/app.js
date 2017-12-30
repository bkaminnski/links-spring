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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

var _LinksPage = __webpack_require__(12);

var _LinksPage2 = _interopRequireDefault(_LinksPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContentEvents = function () {
    function ContentEvents() {
        _classCallCheck(this, ContentEvents);
    }

    _createClass(ContentEvents, [{
        key: 'subscribeToRequested',
        value: function subscribeToRequested() {
            var _this = this;

            this.contentRequestedSubscriptionToken = PubSub.subscribe('uiEvent.menu-and-content.content.requested.links', function (msg) {
                _this.publishAvailable();
            });
        }
    }, {
        key: 'publishAvailable',
        value: function publishAvailable() {
            PubSub.publish('uiEvent.menu-and-content.content.available', React.createElement(_LinksPage2.default, null));
        }
    }]);

    return ContentEvents;
}();

exports.default = ContentEvents;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuItemsEvents = function () {
    function MenuItemsEvents() {
        _classCallCheck(this, MenuItemsEvents);
    }

    _createClass(MenuItemsEvents, [{
        key: 'subscribeToRequested',
        value: function subscribeToRequested() {
            var _this = this;

            this.menuItemRequestedSubscriptionToken = PubSub.subscribe('uiEvent.menu-and-content.menuItems.requested', function (msg) {
                _this.publishAvailable();
            });
        }
    }, {
        key: 'publishAvailable',
        value: function publishAvailable() {
            PubSub.publish('uiEvent.menu-and-content.menuItem.available', {
                code: 'links',
                label: 'Links',
                priority: 100
            });
        }
    }]);

    return MenuItemsEvents;
}();

exports.default = MenuItemsEvents;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MenuItemsEvents = __webpack_require__(2);

var _MenuItemsEvents2 = _interopRequireDefault(_MenuItemsEvents);

var _ContentEvents = __webpack_require__(1);

var _ContentEvents2 = _interopRequireDefault(_ContentEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentEvents = new _ContentEvents2.default();
contentEvents.subscribeToRequested();

var menuItemsEvents = new _MenuItemsEvents2.default();
menuItemsEvents.subscribeToRequested();
menuItemsEvents.publishAvailable();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LinkCreationFormStore = __webpack_require__(6);

var _LinkCreationFormStore2 = _interopRequireDefault(_LinkCreationFormStore);

var _LinkCreationFormItem = __webpack_require__(5);

var _LinkCreationFormItem2 = _interopRequireDefault(_LinkCreationFormItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkCreationForm = function (_React$Component) {
    _inherits(LinkCreationForm, _React$Component);

    function LinkCreationForm() {
        _classCallCheck(this, LinkCreationForm);

        var _this = _possibleConstructorReturn(this, (LinkCreationForm.__proto__ || Object.getPrototypeOf(LinkCreationForm)).call(this));

        _this.store = new _LinkCreationFormStore2.default(_this);
        _this.onSubmit = _this.onSubmit.bind(_this);
        return _this;
    }

    _createClass(LinkCreationForm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.store.subscribeToEvents();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.store.unsubscribeFromEvents();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'bottom-buffer-double' },
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.onSubmit },
                    this.state.slices.map(function (slice) {
                        return _react2.default.createElement(_LinkCreationFormItem2.default, { key: slice.name, slice: slice });
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'text-right', role: 'group', 'aria-label': 'Add' },
                        _react2.default.createElement(
                            'button',
                            { type: 'submit', className: 'btn btn-default' },
                            'Add'
                        )
                    )
                )
            );
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(e) {
            e.preventDefault();
            this.store.onSubmit();
        }
    }]);

    return LinkCreationForm;
}(_react2.default.Component);

exports.default = LinkCreationForm;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkCreationFormItem = function (_React$Component) {
    _inherits(LinkCreationFormItem, _React$Component);

    function LinkCreationFormItem() {
        _classCallCheck(this, LinkCreationFormItem);

        return _possibleConstructorReturn(this, (LinkCreationFormItem.__proto__ || Object.getPrototypeOf(LinkCreationFormItem)).call(this));
    }

    _createClass(LinkCreationFormItem, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.props.slice.component
            );
        }
    }]);

    return LinkCreationFormItem;
}(React.Component);

exports.default = LinkCreationFormItem;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LinkCreationWorkflow = __webpack_require__(7);

var _LinkCreationWorkflow2 = _interopRequireDefault(_LinkCreationWorkflow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkCreationFormStore = function () {
    function LinkCreationFormStore(component) {
        _classCallCheck(this, LinkCreationFormStore);

        this.component = component;
        this.component.state = { slices: [] };
        this.slices = {};
        this.linkCreationWorkflow = new _LinkCreationWorkflow2.default();
    }

    _createClass(LinkCreationFormStore, [{
        key: 'subscribeToEvents',
        value: function subscribeToEvents() {
            var _this = this;

            this.linkCreationWorkflow.subscribeToEvents();
            this.linkCreationSliceAvailableSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreationSlice.available', function (msg, slice) {
                _this.slices[slice.name] = slice;
                _this.linkCreationWorkflow.registerSliceWith(slice.name);
                _this.rebuildState();
            });
            PubSub.publish('uiEvent.links.linkCreationSlices.requested');
        }
    }, {
        key: 'rebuildState',
        value: function rebuildState() {
            var _this2 = this;

            var slices = Object.keys(this.slices).map(function (k) {
                return _this2.slices[k];
            }).map(function (slice) {
                return {
                    name: slice.name,
                    url: slice.url,
                    priority: slice.priority,
                    component: slice.component
                };
            }).sort(function (s1, s2) {
                return s1.priority - s2.priority;
            });
            this.component.setState({ slices: slices });
        }
    }, {
        key: 'unsubscribeFromEvents',
        value: function unsubscribeFromEvents() {
            this.linkCreationWorkflow.unsubscribeFromEvents();
            PubSub.unsubscribe(this.linkCreationSliceAvailableSubscriptionToken);
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit() {
            this.linkCreationWorkflow.start();
        }
    }]);

    return LinkCreationFormStore;
}();

exports.default = LinkCreationFormStore;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkCreationWorkflow = function () {
    function LinkCreationWorkflow() {
        _classCallCheck(this, LinkCreationWorkflow);

        this.slices = {};
    }

    _createClass(LinkCreationWorkflow, [{
        key: 'subscribeToEvents',
        value: function subscribeToEvents() {
            var _this = this;

            this.linkCreationValidationSuccessfullSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreationValidation.successfull', function (msg, slice) {
                _this.slices[slice.name].validationSuccessful = true;
                _this.approveOrDeny();
            });
            this.linkCreationValidationFailedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreationValidation.failed', function (msg, slice) {
                _this.slices[slice.name].validationFailed = true;
                _this.approveOrDeny();
            });
        }
    }, {
        key: 'unsubscribeFromEvents',
        value: function unsubscribeFromEvents() {
            PubSub.unsubscribe(this.linkCreationValidationSuccessfullSubscriptionToken);
            PubSub.unsubscribe(this.linkCreationValidationFailedSubscriptionToken);
        }
    }, {
        key: 'registerSliceWith',
        value: function registerSliceWith(name) {
            this.slices[name] = {
                validationRequested: false,
                validationSuccessful: false,
                validationFailed: false,
                creationApproved: false,
                creationDenied: false
            };
        }
    }, {
        key: 'start',
        value: function start() {
            if (!this.workflowWasStarted() || this.workflowIsFinished()) {
                this.resetWorkflow();
                this.requestValidation();
            }
        }
    }, {
        key: 'workflowWasStarted',
        value: function workflowWasStarted() {
            return this.numberOfValidationRequests() > 0;
        }
    }, {
        key: 'workflowIsFinished',
        value: function workflowIsFinished() {
            return this.numberOfValidationRequests() > 0 && this.validationIsFinished() && this.numberOfValidationRequests() == this.numberOfCreationDecisions();
        }
    }, {
        key: 'validationIsFinished',
        value: function validationIsFinished() {
            return this.numberOfValidationRequests() == this.numberOfValidationResponses();
        }
    }, {
        key: 'numberOfValidationRequests',
        value: function numberOfValidationRequests() {
            var _this2 = this;

            return Object.keys(this.slices).map(function (k) {
                return _this2.slices[k];
            }).filter(function (s) {
                return s.validationRequested;
            }).length;
        }
    }, {
        key: 'numberOfValidationResponses',
        value: function numberOfValidationResponses() {
            var _this3 = this;

            return Object.keys(this.slices).map(function (k) {
                return _this3.slices[k];
            }).filter(function (s) {
                return s.validationSuccessful || s.validationFailed;
            }).length;
        }
    }, {
        key: 'numberOfCreationDecisions',
        value: function numberOfCreationDecisions() {
            var _this4 = this;

            return Object.keys(this.slices).map(function (k) {
                return _this4.slices[k];
            }).filter(function (s) {
                return s.creationApproved || s.creationDenied;
            }).length;
        }
    }, {
        key: 'resetWorkflow',
        value: function resetWorkflow() {
            var _this5 = this;

            Object.keys(this.slices).map(function (k) {
                return _this5.slices[k];
            }).forEach(function (s) {
                s.validationRequested = false;
                s.validationSuccessful = false;
                s.validationFailed = false;
                s.creationApproved = false;
                s.creationDenied = false;
            });
        }
    }, {
        key: 'requestValidation',
        value: function requestValidation() {
            var _this6 = this;

            Object.keys(this.slices).map(function (k) {
                return _this6.slices[k];
            }).forEach(function (s) {
                s.validationRequested = true;
            });
            PubSub.publish('uiEvent.links.linkCreationValidation.requested');
        }
    }, {
        key: 'approveOrDeny',
        value: function approveOrDeny() {
            if (this.allWereSuccessfullyValidated()) {
                this.approveLinkCreation();
            } else if (this.validationIsFinished()) {
                this.denyLinkCreation();
            }
        }
    }, {
        key: 'allWereSuccessfullyValidated',
        value: function allWereSuccessfullyValidated() {
            var _this7 = this;

            return Object.keys(this.slices).map(function (k) {
                return _this7.slices[k];
            }).every(function (s) {
                return s.validationSuccessful;
            });
        }
    }, {
        key: 'approveLinkCreation',
        value: function approveLinkCreation() {
            var _this8 = this;

            Object.keys(this.slices).map(function (k) {
                return _this8.slices[k];
            }).forEach(function (s) {
                s.creationApproved = true;
            });
            PubSub.publish('uiEvent.links.linkCreation.approved');
        }
    }, {
        key: 'denyLinkCreation',
        value: function denyLinkCreation() {
            var _this9 = this;

            Object.keys(this.slices).map(function (k) {
                return _this9.slices[k];
            }).forEach(function (s) {
                s.creationDenied = true;
            });
            PubSub.publish('uiEvent.links.linkCreation.denied');
        }
    }]);

    return LinkCreationWorkflow;
}();

exports.default = LinkCreationWorkflow;

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

var _LinksListStore = __webpack_require__(11);

var _LinksListStore2 = _interopRequireDefault(_LinksListStore);

var _LinksListItem = __webpack_require__(9);

var _LinksListItem2 = _interopRequireDefault(_LinksListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinksList = function (_React$Component) {
    _inherits(LinksList, _React$Component);

    function LinksList() {
        _classCallCheck(this, LinksList);

        var _this = _possibleConstructorReturn(this, (LinksList.__proto__ || Object.getPrototypeOf(LinksList)).call(this));

        _this.store = new _LinksListStore2.default(_this);
        return _this;
    }

    _createClass(LinksList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.store.subscribeToEvents();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.store.unsubscribeFromEvents();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.state.links.map(function (link) {
                    return _react2.default.createElement(_LinksListItem2.default, { key: 'linksListItem-' + link.sharedId, link: link });
                })
            );
        }
    }]);

    return LinksList;
}(_react2.default.Component);

exports.default = LinksList;

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

var _LinksListItemSlice = __webpack_require__(10);

var _LinksListItemSlice2 = _interopRequireDefault(_LinksListItemSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkListItem = function (_React$Component) {
    _inherits(LinkListItem, _React$Component);

    function LinkListItem() {
        _classCallCheck(this, LinkListItem);

        return _possibleConstructorReturn(this, (LinkListItem.__proto__ || Object.getPrototypeOf(LinkListItem)).apply(this, arguments));
    }

    _createClass(LinkListItem, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'list-group' },
                _react2.default.createElement(
                    'div',
                    { className: 'list-group-item' },
                    this.props.link.itemSlices.map(function (itemSlice) {
                        return _react2.default.createElement(_LinksListItemSlice2.default, { key: itemSlice.key, slice: itemSlice });
                    })
                )
            );
        }
    }]);

    return LinkListItem;
}(_react2.default.Component);

exports.default = LinkListItem;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinksListItemSlice = function (_React$Component) {
    _inherits(LinksListItemSlice, _React$Component);

    function LinksListItemSlice() {
        _classCallCheck(this, LinksListItemSlice);

        return _possibleConstructorReturn(this, (LinksListItemSlice.__proto__ || Object.getPrototypeOf(LinksListItemSlice)).call(this));
    }

    _createClass(LinksListItemSlice, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.props.slice.component
            );
        }
    }]);

    return LinksListItemSlice;
}(React.Component);

exports.default = LinksListItemSlice;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinksListStore = function () {
    function LinksListStore(linksListComponent) {
        _classCallCheck(this, LinksListStore);

        this.component = linksListComponent;
        this.component.state = { links: [] };
        this.listSlices = {};
    }

    _createClass(LinksListStore, [{
        key: 'subscribeToEvents',
        value: function subscribeToEvents() {
            var _this = this;

            this.linksListSliceAvailableSubscriptionToken = PubSub.subscribe('uiEvent.links.linksListSlice.available', function (msg, listSlice) {
                _this.listSlices[listSlice.name] = listSlice;
                _this.rebuildState();
            });
            PubSub.publish('uiEvent.links.linksListSlices.requested');
        }
    }, {
        key: 'rebuildState',
        value: function rebuildState() {
            var linkIdToLinkListItemMap = this.distinctLinkListItemsForAllListSlices();
            this.fillInItemSlicesIn(linkIdToLinkListItemMap);
            this.component.setState({ links: this.flatten(linkIdToLinkListItemMap) });
        }
    }, {
        key: 'distinctLinkListItemsForAllListSlices',
        value: function distinctLinkListItemsForAllListSlices() {
            var _this2 = this;

            var linkIdToLinkListItemMap = {};
            Object.keys(this.listSlices).map(function (k) {
                return _this2.listSlices[k];
            }).forEach(function (listSlice) {
                return listSlice.items.forEach(function (item) {
                    if (linkIdToLinkListItemMap[item.linkSharedId] == null) {
                        var linkListItem = {
                            sharedId: item.linkSharedId,
                            itemSlices: []
                        };
                        linkIdToLinkListItemMap[item.linkSharedId] = linkListItem;
                    }
                });
            });
            return linkIdToLinkListItemMap;
        }
    }, {
        key: 'fillInItemSlicesIn',
        value: function fillInItemSlicesIn(linkIdToLinkListItemMap) {
            var _this3 = this;

            Object.keys(this.listSlices).map(function (k) {
                return _this3.listSlices[k];
            }).sort(function (s1, s2) {
                return s1.priority - s2.priority;
            }).forEach(function (listSlice) {
                return listSlice.items.forEach(function (item) {
                    var itemSlice = {
                        name: listSlice.name,
                        component: item.component,
                        key: item.key
                    };
                    _this3.addOrReplaceItemSliceInLinkListItem(itemSlice, linkIdToLinkListItemMap[item.linkSharedId]);
                });
            });
        }
    }, {
        key: 'addOrReplaceItemSliceInLinkListItem',
        value: function addOrReplaceItemSliceInLinkListItem(itemSlice, linkListItem) {
            var itemSlicesMap = {};
            linkListItem.itemSlices.forEach(function (is) {
                return itemSlicesMap[is.name] = is;
            });
            itemSlicesMap[itemSlice.name] = itemSlice;
            linkListItem.itemSlices = [];
            Object.keys(itemSlicesMap).map(function (k) {
                return itemSlicesMap[k];
            }).forEach(function (is) {
                return linkListItem.itemSlices.push(is);
            });
        }
    }, {
        key: 'flatten',
        value: function flatten(linkIdToLinkListItemMap) {
            var linkListItems = [];
            Object.keys(linkIdToLinkListItemMap).map(function (k) {
                return linkIdToLinkListItemMap[k];
            }).forEach(function (linkListItem) {
                return linkListItems.push(linkListItem);
            });
            return linkListItems;
        }
    }, {
        key: 'unsubscribeFromEvents',
        value: function unsubscribeFromEvents() {
            PubSub.unsubscribe(this.linksListSliceAvailableSubscriptionToken);
        }
    }]);

    return LinksListStore;
}();

exports.default = LinksListStore;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LinkCreationForm = __webpack_require__(4);

var _LinkCreationForm2 = _interopRequireDefault(_LinkCreationForm);

var _LinksList = __webpack_require__(8);

var _LinksList2 = _interopRequireDefault(_LinksList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinksPage = function (_React$Component) {
    _inherits(LinksPage, _React$Component);

    function LinksPage() {
        _classCallCheck(this, LinksPage);

        return _possibleConstructorReturn(this, (LinksPage.__proto__ || Object.getPrototypeOf(LinksPage)).apply(this, arguments));
    }

    _createClass(LinksPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_LinkCreationForm2.default, null),
                _react2.default.createElement(_LinksList2.default, null)
            );
        }
    }]);

    return LinksPage;
}(_react2.default.Component);

exports.default = LinksPage;

/***/ })
/******/ ]);