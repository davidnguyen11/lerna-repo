"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNone;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isNone(input) {
  if (typeof input === 'undefined') return true;
  if (input === undefined || input === null) return true;
  if (_typeof(input) === 'object' && Object.keys(input).length === 0) return true;
  if (Array.isArray(input) && input.length === 0) return true;
  if (typeof input === 'string' && input.trim() === '') return true;
  if (typeof input === 'number') return false;
  if (typeof input === 'boolean') return false;
  return false;
}