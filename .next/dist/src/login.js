"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _materialUi = require("material-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function (_React$Component) {
  (0, _inherits3.default)(Login, _React$Component);

  function Login(props) {
    (0, _classCallCheck3.default)(this, Login);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));

    _this.handleClickButton = function () {
      _this.setState({
        open: true,
        anchorEl: (0, _reactDom.findDOMNode)(_this.button)
      });
    };

    _this.handleClose = function () {
      _this.setState({
        open: false
      });
    };

    _this.state = {
      open: false,
      anchorEl: null,
      positionTop: 200, // Just so the popover can be spotted more easily
      positionLeft: 400, // Same as above
      anchorReference: "anchorEl"
    };
    return _this;
  }

  (0, _createClass3.default)(Login, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;

      return _react2.default.createElement("div", null, _react2.default.createElement(_materialUi.Button, {
        ref: function ref(node) {
          _this2.button = node;
        },
        onClick: this.handleClickButton,
        color: "contrast"
      }, "Login"), _react2.default.createElement(_materialUi.Popover, {
        open: this.state.open,
        anchorEl: this.state.anchorEl,
        anchorReference: this.state.anchorReference,
        anchorPosition: {
          top: this.state.positionTop,
          left: this.state.positionLeft
        },
        onClose: this.handleClose,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center"
        }
      }, _react2.default.createElement(_materialUi.Card, {
        style: {
          maxWidth: 380
        }
      }, _react2.default.createElement(_materialUi.CardContent, null, _react2.default.createElement(_materialUi.TextField, {
        fullWidth: true,
        id: "email",
        label: "Email",
        type: "email",
        margin: "normal",
        autoFocus: true
      }), _react2.default.createElement(_materialUi.TextField, {
        fullWidth: true,
        id: "password",
        label: "Password",
        type: "password",
        margin: "normal"
      }), _react2.default.createElement(_materialUi.Button, { style: { width: "100%" }, raised: true, color: "primary" }, "Login")))));
    }
  }]);

  return Login;
}(_react2.default.Component);

exports.default = Login;