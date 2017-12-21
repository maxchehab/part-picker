"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require("material-ui/styles");

var _AppBar = require("material-ui/AppBar");

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require("material-ui/Toolbar");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require("material-ui/Typography");

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = require("material-ui/Button");

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = require("material-ui/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require("material-ui-icons/Menu");

var _Menu2 = _interopRequireDefault(_Menu);

var _login = require("./login");

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    width: "100%"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Header(props) {
  var classes = props.classes;

  return _react2.default.createElement("div", {
    className: "jsx-2792774720" + " " + (classes.root || "")
  }, _react2.default.createElement(_style2.default, {
    styleId: "2792774720",
    css: ["body{margin:0;}"]
  }), _react2.default.createElement(_AppBar2.default, { position: "static" }, _react2.default.createElement(_Toolbar2.default, null, _react2.default.createElement(_IconButton2.default, {
    className: classes.menuButton,
    color: "contrast",
    "aria-label": "Menu"
  }, _react2.default.createElement(_Menu2.default, null)), _react2.default.createElement(_Typography2.default, { type: "title", color: "inherit", className: classes.flex }, "Porsche Part Picker"), _react2.default.createElement(_login2.default, null))));
}

exports.default = (0, _styles.withStyles)(styles)(Header);