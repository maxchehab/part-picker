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

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _materialUi = require("material-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/maxchehab/Projects/part-picker/src/login.js";


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

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_materialUi.Button, {
        ref: function ref(node) {
          _this2.button = node;
        },
        onClick: this.handleClickButton,
        color: "contrast",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_materialUi.Card, {
        style: {
          maxWidth: 380
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_materialUi.CardContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_materialUi.TextField, {
        fullWidth: true,
        id: "email",
        label: "Email",
        type: "email",
        margin: "normal",
        autoFocus: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), _react2.default.createElement(_materialUi.TextField, {
        fullWidth: true,
        id: "password",
        label: "Password",
        type: "password",
        margin: "normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), _react2.default.createElement(_materialUi.Button, { style: { width: "100%" }, raised: true, color: "primary", __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Login"), _react2.default.createElement(_materialUi.Typography, {
        color: "accent",
        style: {
          marginTop: 8,
          cursor: "pointer"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Don't have an account? Why not register?")))));
    }
  }]);

  return Login;
}(_react2.default.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJmaW5kRE9NTm9kZSIsIkxpbmsiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkQWN0aW9ucyIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJUZXh0RmllbGQiLCJQb3BvdmVyIiwiTG9naW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrQnV0dG9uIiwic2V0U3RhdGUiLCJvcGVuIiwiYW5jaG9yRWwiLCJidXR0b24iLCJoYW5kbGVDbG9zZSIsInN0YXRlIiwicG9zaXRpb25Ub3AiLCJwb3NpdGlvbkxlZnQiLCJhbmNob3JSZWZlcmVuY2UiLCJjbGFzc2VzIiwibm9kZSIsInRvcCIsImxlZnQiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJtYXhXaWR0aCIsIndpZHRoIiwibWFyZ2luVG9wIiwiY3Vyc29yIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7Ozs7Ozs7SUFHbUIsQTtpQ0FDbkI7O2lCQUFBLEFBQVksT0FBTzt3Q0FBQTs7b0lBQUEsQUFDWDs7VUFEVyxBQVduQixvQkFBb0IsWUFBTSxBQUN4QjtZQUFBLEFBQUs7Y0FBUyxBQUNOLEFBQ047a0JBQVUsMkJBQVksTUFGeEIsQUFBYyxBQUVGLEFBQWlCLEFBRTlCO0FBSmUsQUFDWjtBQWJlOztVQUFBLEFBa0JuQixjQUFjLFlBQU0sQUFDbEI7WUFBQSxBQUFLO2NBQUwsQUFBYyxBQUNOLEFBRVQ7QUFIZSxBQUNaO0FBcEJlLEFBRWpCOztVQUFBLEFBQUs7WUFBUSxBQUNMLEFBQ047Z0JBRlcsQUFFRCxBQUNWO21CQUhXLEFBR0UsS0FBSyxBQUNsQjtvQkFKVyxBQUlHLEtBQUssQUFDbkI7dUJBUGUsQUFFakIsQUFBYSxBQUtNO0FBTE4sQUFDWDtXQU1IOzs7Ozs2QkFlUTttQkFBQTs7VUFBQSxBQUNDLFVBQVksS0FEYixBQUNrQixNQURsQixBQUNDLEFBQ1I7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzthQUNNLG1CQUFRLEFBQ1g7aUJBQUEsQUFBSyxTQUFMLEFBQWMsQUFDZjtBQUhILEFBSUU7aUJBQVMsS0FKWCxBQUlnQixBQUNkO2VBTEYsQUFLUTs7b0JBTFI7c0JBQUE7QUFBQTtBQUNFLFNBRkosQUFDRSxBQVVBLDBCQUFBLEFBQUM7Y0FDTyxLQUFBLEFBQUssTUFEYixBQUNtQixBQUNqQjtrQkFBVSxLQUFBLEFBQUssTUFGakIsQUFFdUIsQUFDckI7eUJBQWlCLEtBQUEsQUFBSyxNQUh4QixBQUc4QixBQUM1Qjs7ZUFDTyxLQUFBLEFBQUssTUFESSxBQUNFLEFBQ2hCO2dCQUFNLEtBQUEsQUFBSyxNQU5mLEFBSWtCLEFBRUcsQUFFbkI7QUFKZ0IsQUFDZDtpQkFHTyxLQVJYLEFBUWdCLEFBQ2Q7O29CQUFjLEFBQ0YsQUFDVjtzQkFYSixBQVNnQixBQUVBLEFBRWQ7QUFKYyxBQUNaOztvQkFHZSxBQUNMLEFBQ1Y7c0JBZkosQUFhbUIsQUFFSDtBQUZHLEFBQ2Y7O29CQWRKO3NCQUFBLEFBa0JFO0FBbEJGO0FBQ0UseUJBaUJBLEFBQUM7O29CQUFELEFBQ1MsQUFDSztBQURMLEFBQ0w7O29CQUZKO3NCQUFBLEFBS0U7QUFMRjtBQUNFLHlCQUlBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7bUJBQUQsQUFFRTtZQUZGLEFBRUssQUFDSDtlQUhGLEFBR1EsQUFDTjtjQUpGLEFBSU8sQUFDTDtnQkFMRixBQUtTLEFBQ1A7bUJBTkY7O29CQUFBO3NCQURGLEFBQ0UsQUFRQTtBQVJBO0FBQ0UsMEJBT0YsQUFBQzttQkFBRCxBQUVFO1lBRkYsQUFFSyxBQUNIO2VBSEYsQUFHUSxBQUNOO2NBSkYsQUFJTyxBQUNMO2dCQUxGLEFBS1M7O29CQUxUO3NCQVRGLEFBU0UsQUFPQTtBQVBBO0FBQ0UsMEJBTUYsQUFBQyxvQ0FBTyxPQUFPLEVBQUUsT0FBakIsQUFBZSxBQUFTLFVBQVUsUUFBbEMsTUFBeUMsT0FBekMsQUFBK0M7b0JBQS9DO3NCQUFBO0FBQUE7U0FoQkYsQUFnQkUsQUFHQSwwQkFBQSxBQUFDO2VBQUQsQUFDUyxBQUNQOztxQkFBTyxBQUNNLEFBQ1g7a0JBSkosQUFFUyxBQUVHO0FBRkgsQUFDTDs7b0JBSEo7c0JBQUE7QUFBQTtBQUNFLFNBdkRaLEFBQ0UsQUFXRSxBQWtCRSxBQUtFLEFBbUJFLEFBY1g7Ozs7O0VBL0ZnQyxnQkFBTSxBOztrQkFBcEIsQSIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXhjaGVoYWIvUHJvamVjdHMvcGFydC1waWNrZXIifQ==