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

var _UrlItem = __webpack_require__(11);

var _UrlItem2 = _interopRequireDefault(_UrlItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UrlLinksListSlice = function () {
    function UrlLinksListSlice() {
        _classCallCheck(this, UrlLinksListSlice);
    }

    _createClass(UrlLinksListSlice, [{
        key: 'loadTransformAndPublish',
        value: function loadTransformAndPublish() {
            HttpClient.sendGet('/urls-service/urls').then(function (urls) {
                return urls.jsonObject;
            }).then(this.transformIntoSlice).then(this.publish);
        }
    }, {
        key: 'transformIntoSlice',
        value: function transformIntoSlice(urls) {
            var slice = {
                name: 'url',
                priority: 100,
                items: urls.map(function (url) {
                    return {
                        linkSharedId: url.linkSharedId,
                        key: 'urlItem-' + url.linkSharedId,
                        component: _react2.default.createElement(_UrlItem2.default, { url: url.url })
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

    return UrlLinksListSlice;
}();

exports.default = UrlLinksListSlice;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UrlLinkCreationSlice = __webpack_require__(10);

var _UrlLinkCreationSlice2 = _interopRequireDefault(_UrlLinkCreationSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkCreationSlicesEvents = function () {
    function LinkCreationSlicesEvents() {
        _classCallCheck(this, LinkCreationSlicesEvents);

        this.urlLinkCreationSlice = new _UrlLinkCreationSlice2.default();
    }

    _createClass(LinkCreationSlicesEvents, [{
        key: 'subscribeToRequested',
        value: function subscribeToRequested() {
            var _this = this;

            this.linkCreationSlicesRequestedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreationSlices.requested', function (msg) {
                _this.urlLinkCreationSlice.prepareAndPublish();
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

var _UrlLinksListSlice = __webpack_require__(1);

var _UrlLinksListSlice2 = _interopRequireDefault(_UrlLinksListSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinksListSlicesEvents = function () {
    function LinksListSlicesEvents() {
        _classCallCheck(this, LinksListSlicesEvents);

        this.urlLinksListSlice = new _UrlLinksListSlice2.default();
    }

    _createClass(LinksListSlicesEvents, [{
        key: 'subscribeToRequested',
        value: function subscribeToRequested() {
            var _this = this;

            this.linksListSlicesRequestedSubscriptionToken = PubSub.subscribe('uiEvent.links.linksListSlices.requested', function (msg) {
                _this.urlLinksListSlice.loadTransformAndPublish();
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InputGroup = __webpack_require__(6);

var _InputGroup2 = _interopRequireDefault(_InputGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Url = function (_React$Component) {
    _inherits(Url, _React$Component);

    function Url() {
        _classCallCheck(this, Url);

        var _this = _possibleConstructorReturn(this, (Url.__proto__ || Object.getPrototypeOf(Url)).call(this));

        _this.validate = _this.validate.bind(_this);
        return _this;
    }

    _createClass(Url, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.inputGroup.focus();
        }
    }, {
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
                label: 'URL',
                placeholder: 'http://paste-a-link-here.com'
            });
        }
    }, {
        key: 'validate',
        value: function validate(e) {
            var url = e.target.value;
            return url != '' && /^.+((\.\w{2,})|(localhost)).*$/.test(url);
        }
    }]);

    return Url;
}(_react2.default.Component);

exports.default = Url;

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

var _Url = __webpack_require__(7);

var _Url2 = _interopRequireDefault(_Url);

var _UrlCreationFormStore = __webpack_require__(9);

var _UrlCreationFormStore2 = _interopRequireDefault(_UrlCreationFormStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UrlCreationForm = function (_React$Component) {
    _inherits(UrlCreationForm, _React$Component);

    function UrlCreationForm() {
        _classCallCheck(this, UrlCreationForm);

        var _this = _possibleConstructorReturn(this, (UrlCreationForm.__proto__ || Object.getPrototypeOf(UrlCreationForm)).call(this));

        _this.store = new _UrlCreationFormStore2.default(_this);
        return _this;
    }

    _createClass(UrlCreationForm, [{
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

            return _react2.default.createElement(_Url2.default, {
                id: this.state.keyPrefix + '-url-creation',
                key: this.state.keyPrefix + '-url-creation',
                ref: function ref(url) {
                    _this2.store.addAttributeComponent('url', url);
                },
                attributeName: 'url',
                initialValue: '',
                onChange: this.store.onChange
            });
        }
    }]);

    return UrlCreationForm;
}(_react2.default.Component);

exports.default = UrlCreationForm;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AttributesStore = __webpack_require__(5);

var _AttributesStore2 = _interopRequireDefault(_AttributesStore);

var _UrlLinksListSlice = __webpack_require__(1);

var _UrlLinksListSlice2 = _interopRequireDefault(_UrlLinksListSlice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkCreationFormStore = function () {
    function LinkCreationFormStore(component) {
        _classCallCheck(this, LinkCreationFormStore);

        this.attributesStore = new _AttributesStore2.default(component);
        this.component = component;
        this.component.state = this.initialState();
        this.onChange = this.onChange.bind(this);
        this.addAttributeComponent = this.addAttributeComponent.bind(this);
    }

    _createClass(LinkCreationFormStore, [{
        key: 'initialState',
        value: function initialState() {
            var initialState = this.attributesStore.initialState();
            initialState.attributes = {
                url: {
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
            var _this = this;
            if (this.component.state.linkSharedId == '') {
                uniqueIds.withNext(function (uniqueId) {
                    return _this.component.setState({ linkSharedId: uniqueId }, function () {
                        PubSub.publish('uiEvent.links.linkCreation.initiatedWithLinkId', _this.component.state.linkSharedId);
                        _this.attributesStore.onChange(attributeName, attributeValue, attributeValid);
                    });
                });
            } else {
                this.attributesStore.onChange(attributeName, attributeValue, attributeValid);
            }
        }
    }, {
        key: 'addAttributeComponent',
        value: function addAttributeComponent(attributeName, attributeComponent) {
            this.attributesStore.addAttributeComponent(attributeName, attributeComponent);
        }
    }, {
        key: 'subscribeToEvents',
        value: function subscribeToEvents() {
            var _this2 = this;

            this.linkCreationValidationRequestedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreationValidation.requested', function (msg, slice) {
                if (_this2.attributesStore.allAttributesAreValid()) {
                    PubSub.publish('uiEvent.links.linkCreationValidation.successfull', { name: 'url' });
                } else {
                    PubSub.publish('uiEvent.links.linkCreationValidation.failed', { name: 'url' });
                }
            });
            this.linkCreationApprovedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreation.approved', function (msg, slice) {
                _this2.createUrl();
            });
            this.linkCreationDeniedSubscriptionToken = PubSub.subscribe('uiEvent.links.linkCreation.denied', function (msg, slice) {
                _this2.attributesStore.focusOnFirstInvalidAttributeComponent();
            });
        }
    }, {
        key: 'createUrl',
        value: function createUrl() {
            var _this3 = this;

            var createUrlCommand = {
                linkSharedId: this.component.state.linkSharedId,
                url: this.component.state.attributes.url.value
            };
            HttpClient.sendPost('/urls-service/urls', createUrlCommand).then(function (response) {
                if (response.status == 204) {
                    _this3.reset();
                    new _UrlLinksListSlice2.default().loadTransformAndPublish();
                }
            });
        }
    }, {
        key: 'unsubscribeFromEvents',
        value: function unsubscribeFromEvents() {
            PubSub.unsubscribe(this.linkCreationValidationRequestedSubscriptionToken);
            PubSub.unsubscribe(this.linkCreationApprovedSubscriptionToken);
            PubSub.unsubscribe(this.linkCreationDeniedSubscriptionToken);
        }
    }]);

    return LinkCreationFormStore;
}();

exports.default = LinkCreationFormStore;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _UrlCreationForm = __webpack_require__(8);

var _UrlCreationForm2 = _interopRequireDefault(_UrlCreationForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UrlLinkCreationSlice = function () {
    function UrlLinkCreationSlice() {
        _classCallCheck(this, UrlLinkCreationSlice);
    }

    _createClass(UrlLinkCreationSlice, [{
        key: 'prepareAndPublish',
        value: function prepareAndPublish() {
            var slice = {
                name: 'url',
                priority: 100,
                component: _react2.default.createElement(_UrlCreationForm2.default, null)
            };
            PubSub.publish('uiEvent.links.linkCreationSlice.available', slice);
        }
    }]);

    return UrlLinkCreationSlice;
}();

exports.default = UrlLinkCreationSlice;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UrlItem = function (_React$Component) {
    _inherits(UrlItem, _React$Component);

    function UrlItem() {
        _classCallCheck(this, UrlItem);

        return _possibleConstructorReturn(this, (UrlItem.__proto__ || Object.getPrototypeOf(UrlItem)).apply(this, arguments));
    }

    _createClass(UrlItem, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "h4",
                { className: "list-group-item-heading" },
                this.props.url
            );
        }
    }]);

    return UrlItem;
}(_react2.default.Component);

exports.default = UrlItem;

/***/ })
/******/ ]);