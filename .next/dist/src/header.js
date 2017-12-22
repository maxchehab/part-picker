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

var _jsxFileName = "/home/maxchehab/Projects/part-picker/src/header.js";


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
    className: "jsx-2792774720" + " " + (classes.root || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: "2792774720",
    css: "body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJ5QixBQUdvQixTQUNYIiwiZmlsZSI6InNyYy9oZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWF4Y2hlaGFiL1Byb2plY3RzL3BhcnQtcGlja2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcbmltcG9ydCBBcHBCYXIgZnJvbSBcIm1hdGVyaWFsLXVpL0FwcEJhclwiO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIm1hdGVyaWFsLXVpL1Rvb2xiYXJcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJtYXRlcmlhbC11aS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9CdXR0b25cIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgTWVudUljb24gZnJvbSBcIm1hdGVyaWFsLXVpLWljb25zL01lbnVcIjtcblxuaW1wb3J0IExvZ2luIGZyb20gXCIuL2xvZ2luXCI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIlxuICB9LFxuICBmbGV4OiB7XG4gICAgZmxleDogMVxuICB9LFxuICBtZW51QnV0dG9uOiB7XG4gICAgbWFyZ2luTGVmdDogLTEyLFxuICAgIG1hcmdpblJpZ2h0OiAyMFxuICB9XG59O1xuXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259XG4gICAgICAgICAgICBjb2xvcj1cImNvbnRyYXN0XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNZW51XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudUljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdHlwZT1cInRpdGxlXCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXh9PlxuICAgICAgICAgICAgUG9yc2NoZSBQYXJ0IFBpY2tlclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9BcHBCYXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEhlYWRlcik7XG4iXX0= */\n/*@ sourceURL=src/header.js */"
  }), _react2.default.createElement(_AppBar2.default, { position: "static", __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(_Toolbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement(_IconButton2.default, {
    className: classes.menuButton,
    color: "contrast",
    "aria-label": "Menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement(_Menu2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  })), _react2.default.createElement(_Typography2.default, { type: "title", color: "inherit", className: classes.flex, __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "Porsche Part Picker"), _react2.default.createElement(_login2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }))));
}

Header.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(Header);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9oZWFkZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJ3aXRoU3R5bGVzIiwiQXBwQmFyIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJJY29uQnV0dG9uIiwiTWVudUljb24iLCJMb2dpbiIsInN0eWxlcyIsInJvb3QiLCJ3aWR0aCIsImZsZXgiLCJtZW51QnV0dG9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiSGVhZGVyIiwicHJvcHMiLCJjbGFzc2VzIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPLEFBQVc7Ozs7Ozs7OztBQUVsQixJQUFNOztXQUFTLEFBQ1AsQUFDRyxBQUVUO0FBSE0sQUFDSjs7VUFGVyxBQUlQLEFBQ0UsQUFFUjtBQUhNLEFBQ0o7O2dCQUdZLENBREYsQUFDRyxBQUNiO2lCQVRKLEFBQWUsQUFPRCxBQUVHO0FBRkgsQUFDVjtBQVJXLEFBQ2I7O0FBWUYsU0FBQSxBQUFTLE9BQVQsQUFBZ0IsT0FBTztNQUFBLEFBQ2IsVUFEYSxBQUNELE1BREMsQUFDYixBQUNSOzt5QkFDRSxjQUFBO3lDQUFnQixRQUFoQixBQUF3QixRQUF4Qjs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEdBQUE7YUFBQTtTQUFBLEFBTUU7QUFORixzQkFNRSxBQUFDLGtDQUFPLFVBQVIsQUFBaUI7Z0JBQWpCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDO2VBQ1ksUUFEYixBQUNxQixBQUNuQjtXQUZGLEFBRVEsQUFDTjtrQkFIRixBQUdhOztnQkFIYjtrQkFBQSxBQUtFO0FBTEY7QUFDRSxxQkFJQSxBQUFDOztnQkFBRDtrQkFOSixBQUNFLEFBS0UsQUFFRjtBQUZFO0FBQUEsdUJBRUYsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCLFNBQVEsT0FBekIsQUFBK0IsV0FBVSxXQUFXLFFBQXBELEFBQTREO2dCQUE1RDtrQkFBQTtBQUFBO0tBUkYsQUFRRSxBQUdBLHdDQUFBLEFBQUM7O2dCQUFEO2tCQW5CUixBQUNFLEFBTUUsQUFDRSxBQVdFLEFBS1Q7QUFMUztBQUFBOzs7QUFPVixPQUFBLEFBQU87V0FDSSxvQkFBQSxBQUFVLE9BRHJCLEFBQW1CLEFBQ1MsQUFHNUI7QUFKbUIsQUFDakI7O2tCQUdhLHdCQUFBLEFBQVcsUUFBMUIsQUFBZSxBQUFtQiIsImZpbGUiOiJoZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWF4Y2hlaGFiL1Byb2plY3RzL3BhcnQtcGlja2VyIn0=