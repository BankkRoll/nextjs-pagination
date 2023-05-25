"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Button = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var style = _ref.style,
    onClick = _ref.onClick,
    disabled = _ref.disabled,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("button", {
    style: style,
    onClick: onClick,
    disabled: disabled
  }, children);
});
var Pagination = function Pagination(_ref2) {
  var totalItems = _ref2.totalItems,
    itemsPerPage = _ref2.itemsPerPage,
    _ref2$color = _ref2.color,
    color = _ref2$color === void 0 ? '#007bff' : _ref2$color,
    _ref2$shape = _ref2.shape,
    shape = _ref2$shape === void 0 ? 'square' : _ref2$shape,
    _ref2$buttonCount = _ref2.buttonCount,
    buttonCount = _ref2$buttonCount === void 0 ? 5 : _ref2$buttonCount,
    _ref2$showNextPrev = _ref2.showNextPrev,
    showNextPrev = _ref2$showNextPrev === void 0 ? false : _ref2$showNextPrev,
    _ref2$showFirstLast = _ref2.showFirstLast,
    showFirstLast = _ref2$showFirstLast === void 0 ? false : _ref2$showFirstLast,
    _ref2$onPageChange = _ref2.onPageChange,
    onPageChange = _ref2$onPageChange === void 0 ? function () {} : _ref2$onPageChange,
    _ref2$onSuccess = _ref2.onSuccess,
    onSuccess = _ref2$onSuccess === void 0 ? function () {} : _ref2$onSuccess,
    _ref2$onError = _ref2.onError,
    onError = _ref2$onError === void 0 ? function () {} : _ref2$onError,
    _ref2$customStyles = _ref2.customStyles,
    customStyles = _ref2$customStyles === void 0 ? {} : _ref2$customStyles,
    _ref2$firstText = _ref2.firstText,
    firstText = _ref2$firstText === void 0 ? 'First' : _ref2$firstText,
    _ref2$prevText = _ref2.prevText,
    prevText = _ref2$prevText === void 0 ? 'Prev' : _ref2$prevText,
    _ref2$nextText = _ref2.nextText,
    nextText = _ref2$nextText === void 0 ? 'Next' : _ref2$nextText,
    _ref2$lastText = _ref2.lastText,
    lastText = _ref2$lastText === void 0 ? 'Last' : _ref2$lastText;
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var totalPages = Math.ceil(totalItems / itemsPerPage);
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    buttonNumbers = _useState4[0],
    setButtonNumbers = _useState4[1];
  (0, _react.useEffect)(function () {
    var startPage = Math.max(1, currentPage - Math.floor(buttonCount / 2));
    var endPage = startPage + buttonCount - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - buttonCount + 1);
    }
    var newButtonNumbers = [];
    for (var i = startPage; i <= endPage; i++) {
      newButtonNumbers.push(i);
    }
    setButtonNumbers(newButtonNumbers);
  }, [currentPage, totalPages, buttonCount]);
  var buttonStyle = _objectSpread({
    color: 'white',
    backgroundColor: color,
    borderRadius: shape === 'circle' ? '50%' : '0',
    padding: '0.5rem 1rem',
    margin: '0 0.2rem',
    border: 'none',
    cursor: 'pointer'
  }, customStyles);
  var handlePageChange = (0, _react.useCallback)(function (page) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page);
      onSuccess(page);
    } else {
      onError(new Error('Page number is out of range'));
    }
  }, [totalPages, onPageChange, onSuccess, onError]);
  return /*#__PURE__*/_react["default"].createElement("div", null, showFirstLast && /*#__PURE__*/_react["default"].createElement(Button, {
    style: buttonStyle,
    onClick: function onClick() {
      return handlePageChange(1);
    },
    disabled: currentPage === 1
  }, firstText), showNextPrev && /*#__PURE__*/_react["default"].createElement(Button, {
    style: buttonStyle,
    onClick: function onClick() {
      return handlePageChange(currentPage - 1);
    },
    disabled: currentPage === 1
  }, prevText), buttonNumbers.map(function (number) {
    return /*#__PURE__*/_react["default"].createElement(Button, {
      key: number,
      style: buttonStyle,
      onClick: function onClick() {
        return handlePageChange(number);
      },
      disabled: false
    }, number);
  }), showNextPrev && /*#__PURE__*/_react["default"].createElement(Button, {
    style: buttonStyle,
    onClick: function onClick() {
      return handlePageChange(currentPage + 1);
    },
    disabled: currentPage === totalPages
  }, nextText), showFirstLast && /*#__PURE__*/_react["default"].createElement(Button, {
    style: buttonStyle,
    onClick: function onClick() {
      return handlePageChange(totalPages);
    },
    disabled: currentPage === totalPages
  }, lastText));
};
var _default = Pagination;
exports["default"] = _default;