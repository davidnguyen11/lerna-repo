"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  a: {
    color: "white",
    display: "block",
    border: "1px solid #d3d3d3",
    borderRadius: "2px",
    background: "black",
    padding: "10px",
    textDecoration: "none"
  }
};

function A(props) {
  return _react.default.createElement("a", _extends({}, props, {
    style: styles.a
  }), props.children);
}

var _default = A;
exports.default = _default;