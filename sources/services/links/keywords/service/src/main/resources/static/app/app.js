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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _KeywordsItem = __webpack_require__(12);

var _KeywordsItem2 = _interopRequireDefault(_KeywordsItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeywordsLinksListSlice = function () {
    function KeywordsLinksListSlice() {
        _classCallCheck(this, KeywordsLinksListSlice);
    }

    _createClass(KeywordsLinksListSlice, [{
        key: 'loadTransformAndPublish',
        value: function loadTransformAndPublish() {
            HttpClient.sendGet('/keywords-service/keywords').then(function (keywords) {
                return keywords.jsonObject;
            }).then(this.transformIntoSlice).then(this.publish);
        }
    }, {
        key: 'transformIntoSlice',
        value: function transformIntoSlice(keywords) {
            var slice = {
                name: 'keywords',
                priority: 200,
                items: keywords.map(function (keywords) {
                    return {
                        linkSharedId: keywords.linkSharedId,
                        key: 'keywordsItem-' + keywords.linkSharedId,
                        component: _react2.default.createElement(_KeywordsItem2.default, { keywords: keywords.keywords })
                    };
                })
            };
            return slice;
        }
    }, {
        key: 'publish',
        value: function publish(slice) {
            PubSub.publish('uiEvent.links.linksListSlice.available', slice);
        }
    }]);

    return KeywordsLinksListSlice;
}();

exports.default = KeywordsLinksListSlice;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KeywordsLinkCreationSlice = __webpack_require__(11);

var _KeywordsLinkCreationSlice2 = _interopRequireDefault(_KeywordsLinkCreationSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkCreationSlicesEvents = function () {
    function LinkCreationSlicesEvents() {
        _classCallCheck(this, LinkCreationSlicesEvents);

        this.keywordsLinkCreationSlice = new _KeywordsLinkCreationSlice2.default();
    }

    _createClass(LinkCreationSlicesEvents, [{
        key: 'subscribeToRequested',
        value: function subscribeToRequested() {
            var _this = this;

            this.linkCreationSlicesRequestedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreationSlices.requested', function (msg) {
                _this.keywordsLinkCreationSlice.prepareAndPublish();
            });
        }
    }]);

    return LinkCreationSlicesEvents;
}();

exports.default = LinkCreationSlicesEvents;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KeywordsLinksListSlice = __webpack_require__(1);

var _KeywordsLinksListSlice2 = _interopRequireDefault(_KeywordsLinksListSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinksListSlicesEvents = function () {
    function LinksListSlicesEvents() {
        _classCallCheck(this, LinksListSlicesEvents);

        this.keywordsLinksListSlice = new _KeywordsLinksListSlice2.default();
    }

    _createClass(LinksListSlicesEvents, [{
        key: 'subscribeToRequested',
        value: function subscribeToRequested() {
            var _this = this;

            this.linksListSlicesRequestedSubscriptionToken = PubSub.subscribe('uiEvent.links.linksListSlices.requested', function (msg) {
                _this.keywordsLinksListSlice.loadTransformAndPublish();
            });
        }
    }]);

    return LinksListSlicesEvents;
}();

exports.default = LinksListSlicesEvents;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _LinksListSlicesEvents = __webpack_require__(3);

var _LinksListSlicesEvents2 = _interopRequireDefault(_LinksListSlicesEvents);

var _LinkCreationSlicesEvents = __webpack_require__(2);

var _LinkCreationSlicesEvents2 = _interopRequireDefault(_LinkCreationSlicesEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linksListSlicesEvents = new _LinksListSlicesEvents2.default();
linksListSlicesEvents.subscribeToRequested();

var linkCreationSlicesEvents = new _LinkCreationSlicesEvents2.default();
linkCreationSlicesEvents.subscribeToRequested();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AttributesStore = function () {
    function AttributesStore(formComponent) {
        _classCallCheck(this, AttributesStore);

        this.formComponent = formComponent;
        this.attributesComponents = {};
        this.keyPrefix = 0;
    }

    _createClass(AttributesStore, [{
        key: "initialState",
        value: function initialState() {
            this.keyPrefix++;
            return {
                attributes: {},
                allValid: false,
                keyPrefix: this.keyPrefix
            };
        }
    }, {
        key: "onChange",
        value: function onChange(attributeName, attributeValue, attributeValid) {
            var attributes = this.formComponent.state.attributes;
            attributes[attributeName].value = attributeValue;
            attributes[attributeName].valid = attributeValid;
            this.formComponent.setState({
                attributes: attributes,
                allValid: this.allAttributesAreValid()
            });
        }
    }, {
        key: "allAttributesAreValid",
        value: function allAttributesAreValid() {
            return !Object.values(this.formComponent.state.attributes).some(function (a) {
                return !a.valid;
            });
        }
    }, {
        key: "focusOnFirstInvalidAttributeComponent",
        value: function focusOnFirstInvalidAttributeComponent() {
            var _this = this;

            var attributes = this.formComponent.state.attributes;
            Object.keys(attributes).filter(function (a) {
                return !attributes[a].valid;
            }).map(function (a) {
                return _this.attributesComponents[a];
            }).some(function (ac) {
                ac.showErrorAndFocus();
                return true;
            });
        }
    }, {
        key: "addAttributeComponent",
        value: function addAttributeComponent(attributeName, attributeComponent) {
            this.attributesComponents[attributeName] = attributeComponent;
        }
    }]);

    return AttributesStore;
}();

exports.default = AttributesStore;

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

var CollapsibleWrapper = function (_React$Component) {
    _inherits(CollapsibleWrapper, _React$Component);

    function CollapsibleWrapper() {
        _classCallCheck(this, CollapsibleWrapper);

        return _possibleConstructorReturn(this, (CollapsibleWrapper.__proto__ || Object.getPrototypeOf(CollapsibleWrapper)).call(this));
    }

    _createClass(CollapsibleWrapper, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'collapse', ref: function ref(collapsibleWrapper) {
                        _this2.collapsibleWrapper = collapsibleWrapper;
                    } },
                this.props.children
            );
        }
    }, {
        key: 'show',
        value: function show() {
            $(this.collapsibleWrapper).collapse('show');
        }
    }, {
        key: 'hide',
        value: function hide() {
            $(this.collapsibleWrapper).collapse('hide');
        }
    }]);

    return CollapsibleWrapper;
}(_react2.default.Component);

exports.default = CollapsibleWrapper;

/***/ }),
/* 7 */
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

var InputGroup = function (_React$Component) {
    _inherits(InputGroup, _React$Component);

    function InputGroup() {
        _classCallCheck(this, InputGroup);

        var _this = _possibleConstructorReturn(this, (InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).call(this));

        _this.onChange = _this.onChange.bind(_this);
        _this.shouldShowError = _this.shouldShowError.bind(_this);
        _this.state = {
            value: null,
            valid: false,
            touched: false
        };
        return _this;
    }

    _createClass(InputGroup, [{
        key: 'focus',
        value: function focus() {
            this.input.focus();
        }
    }, {
        key: 'showErrorAndFocus',
        value: function showErrorAndFocus() {
            var _this2 = this;

            this.setState({ touched: true }, function () {
                _this2.input.focus();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var inputGroupErrorClassName = this.shouldShowError() ? ' has-feedback has-error' : '';
            var ariaDescribedBy = this.props.id + this.shouldShowError() ? '-invalid-description' : '-label';
            var errorIcon = this.shouldShowError() ? _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove form-control-feedback', 'aria-hidden': 'true' }) : null;
            var errorDescription = this.shouldShowError() ? _react2.default.createElement(
                'span',
                { id: this.props.id + '-invalid-description', className: 'sr-only' },
                'Invalid ',
                this.props.label
            ) : null;

            return _react2.default.createElement(
                'div',
                { className: 'input-group bottom-buffer' + inputGroupErrorClassName },
                _react2.default.createElement(
                    'span',
                    { className: 'input-group-addon', id: this.props.id + '-label' },
                    this.props.label
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    ref: function ref(input) {
                        _this3.input = input;
                    },
                    onChange: this.onChange,
                    value: this.state.value == null ? this.props.initialValue : this.state.value,
                    className: 'form-control',
                    placeholder: this.props.placeholder,
                    'aria-describedby': ariaDescribedBy
                }),
                errorIcon,
                errorDescription
            );
        }
    }, {
        key: 'shouldShowError',
        value: function shouldShowError() {
            return !this.state.valid && this.state.touched;
        }
    }, {
        key: 'onChange',
        value: function onChange(e) {
            var _this4 = this;

            this.setState({ value: e.target.value, valid: this.props.validate(e), touched: true }, function () {
                _this4.props.onChange(_this4.props.attributeName, _this4.state.value, _this4.state.valid);
            });
        }
    }]);

    return InputGroup;
}(_react2.default.Component);

exports.default = InputGroup;

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

var _InputGroup = __webpack_require__(7);

var _InputGroup2 = _interopRequireDefault(_InputGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Keywords = function (_React$Component) {
    _inherits(Keywords, _React$Component);

    function Keywords() {
        _classCallCheck(this, Keywords);

        var _this = _possibleConstructorReturn(this, (Keywords.__proto__ || Object.getPrototypeOf(Keywords)).call(this));

        _this.validate = _this.validate.bind(_this);
        return _this;
    }

    _createClass(Keywords, [{
        key: 'showErrorAndFocus',
        value: function showErrorAndFocus() {
            this.inputGroup.showErrorAndFocus();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_InputGroup2.default, {
                id: this.props.id,
                ref: function ref(inputGroup) {
                    _this2.inputGroup = inputGroup;
                },
                attributeName: this.props.attributeName,
                initialValue: this.props.initialValue,
                onChange: this.props.onChange,
                validate: this.validate,
                label: 'Keywords',
                placeholder: ''
            });
        }
    }, {
        key: 'validate',
        value: function validate(e) {
            return true;
        }
    }]);

    return Keywords;
}(_react2.default.Component);

exports.default = Keywords;

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

var _Keywords = __webpack_require__(8);

var _Keywords2 = _interopRequireDefault(_Keywords);

var _CollapsibleWrapper = __webpack_require__(6);

var _CollapsibleWrapper2 = _interopRequireDefault(_CollapsibleWrapper);

var _KeywordsCreationFormStore = __webpack_require__(10);

var _KeywordsCreationFormStore2 = _interopRequireDefault(_KeywordsCreationFormStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeywordsCreationForm = function (_React$Component) {
    _inherits(KeywordsCreationForm, _React$Component);

    function KeywordsCreationForm() {
        _classCallCheck(this, KeywordsCreationForm);

        var _this = _possibleConstructorReturn(this, (KeywordsCreationForm.__proto__ || Object.getPrototypeOf(KeywordsCreationForm)).call(this));

        _this.store = new _KeywordsCreationFormStore2.default(_this);
        return _this;
    }

    _createClass(KeywordsCreationForm, [{
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
            var _this2 = this;

            return _react2.default.createElement(
                _CollapsibleWrapper2.default,
                { ref: function ref(collapsibleWrapper) {
                        _this2.store.collapsibleWrapper = collapsibleWrapper;
                    } },
                _react2.default.createElement(_Keywords2.default, {
                    id: this.state.keyPrefix + '-keywords-creation',
                    key: this.state.keyPrefix + '-keywords-creation',
                    ref: function ref(keywords) {
                        _this2.store.addAttributeComponent('keywords', keywords);
                    },
                    attributeName: 'keywords',
                    initialValue: '',
                    onChange: this.store.onChange
                })
            );
        }
    }]);

    return KeywordsCreationForm;
}(_react2.default.Component);

exports.default = KeywordsCreationForm;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AttributesStore = __webpack_require__(5);

var _AttributesStore2 = _interopRequireDefault(_AttributesStore);

var _KeywordsLinksListSlice = __webpack_require__(1);

var _KeywordsLinksListSlice2 = _interopRequireDefault(_KeywordsLinksListSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeywordsCreationFormStore = function () {
    function KeywordsCreationFormStore(component) {
        _classCallCheck(this, KeywordsCreationFormStore);

        this.attributesStore = new _AttributesStore2.default(component);
        this.component = component;
        this.component.state = this.initialState();
        this.onChange = this.onChange.bind(this);
        this.addAttributeComponent = this.addAttributeComponent.bind(this);
    }

    _createClass(KeywordsCreationFormStore, [{
        key: 'initialState',
        value: function initialState() {
            var initialState = this.attributesStore.initialState();
            initialState.attributes = {
                keywords: {
                    value: '',
                    valid: false
                }
            };
            initialState.linkSharedId = '';
            return initialState;
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.component.setState(this.initialState());
        }
    }, {
        key: 'onChange',
        value: function onChange(attributeName, attributeValue, attributeValid) {
            this.attributesStore.onChange(attributeName, attributeValue, attributeValid);
        }
    }, {
        key: 'addAttributeComponent',
        value: function addAttributeComponent(attributeName, attributeComponent) {
            this.attributesStore.addAttributeComponent(attributeName, attributeComponent);
        }
    }, {
        key: 'allAttributesAreValid',
        value: function allAttributesAreValid() {
            return this.attributesStore.allAttributesAreValid();
        }
    }, {
        key: 'focusOnFirstInvalidAttributeComponent',
        value: function focusOnFirstInvalidAttributeComponent() {
            this.attributesStore.focusOnFirstInvalidAttributeComponent();
        }
    }, {
        key: 'subscribeToEvents',
        value: function subscribeToEvents() {
            var _this = this;

            this.linkCreationWasInitiatedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreation.initiatedWithLinkId', function (msg, linkSharedId) {
                _this.component.setState({ linkSharedId: linkSharedId }, function () {
                    return _this.collapsibleWrapper.show();
                });
            });
            this.linkCreationValidationRequestedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreationValidation.requested', function (msg, slice) {
                PubSub.publish('uiEvent.links.linkCreationValidation.successfull', { name: 'keywords' });
            });
            this.linkCreationApprovedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreation.approved', function (msg, slice) {
                _this.createKeywords();
            });
            this.linkCreationDeniedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreation.denied', function (msg, slice) {
                // do nothing
            });
        }
    }, {
        key: 'createKeywords',
        value: function createKeywords() {
            var _this2 = this;

            var createKeywordsCommand = {
                linkSharedId: this.component.state.linkSharedId,
                keywords: this.component.state.attributes.keywords.value
            };
            HttpClient.sendPost('/keywords-service/keywords', createKeywordsCommand).then(function (response) {
                if (response.status == 204) {
                    _this2.collapsibleWrapper.hide();
                    _this2.reset();
                    new _KeywordsLinksListSlice2.default().loadTransformAndPublish();
                }
            });
        }
    }, {
        key: 'unsubscribeFromEvents',
        value: function unsubscribeFromEvents() {
            PubSub.unsubscribe(this.linkCreationWasInitiatedSubscriptionToken);
            PubSub.unsubscribe(this.linkCreationValidationRequestedSubscriptionToken);
            PubSub.unsubscribe(this.linkCreationApprovedSubscriptionToken);
            PubSub.unsubscribe(this.linkCreationDeniedSubscriptionToken);
        }
    }]);

    return KeywordsCreationFormStore;
}();

exports.default = KeywordsCreationFormStore;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _KeywordsCreationForm = __webpack_require__(9);

var _KeywordsCreationForm2 = _interopRequireDefault(_KeywordsCreationForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeywordsLinkCreationSlice = function () {
    function KeywordsLinkCreationSlice() {
        _classCallCheck(this, KeywordsLinkCreationSlice);
    }

    _createClass(KeywordsLinkCreationSlice, [{
        key: 'prepareAndPublish',
        value: function prepareAndPublish() {
            var slice = {
                name: 'keywords',
                priority: 200,
                component: _react2.default.createElement(_KeywordsCreationForm2.default, null)
            };
            PubSub.publish('uiEvent.links.linkCreationSlice.available', slice);
        }
    }]);

    return KeywordsLinkCreationSlice;
}();

exports.default = KeywordsLinkCreationSlice;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeywordsItem = function (_React$Component) {
    _inherits(KeywordsItem, _React$Component);

    function KeywordsItem() {
        _classCallCheck(this, KeywordsItem);

        return _possibleConstructorReturn(this, (KeywordsItem.__proto__ || Object.getPrototypeOf(KeywordsItem)).apply(this, arguments));
    }

    _createClass(KeywordsItem, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "p",
                { className: "list-group-item-text top-buffer" },
                _react2.default.createElement(
                    "kbd",
                    null,
                    this.props.keywords
                )
            );
        }
    }]);

    return KeywordsItem;
}(_react2.default.Component);

exports.default = KeywordsItem;

/***/ })
/******/ ]);