"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e11) { throw _e11; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e12) { didErr = true; err = _e12; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var __defProp = Object.defineProperty,
  __defNormalProp = function __defNormalProp(e, i, t) {
    return i in e ? __defProp(e, i, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }) : e[i] = t;
  },
  __publicField = function __publicField(e, i, t) {
    return __defNormalProp(e, "symbol" != _typeof(i) ? i + "" : i, t), t;
  };
!function (e, i) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).JustValidate = i();
}(void 0, function () {
  "use strict";

  var e = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    i = /^-?[0-9]\d*$/,
    t = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
    s = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    l = function l(e) {
      return "string" != typeof e || "" === e;
    };
  var r = function (e) {
      return e.Required = "required", e.Email = "email", e.MinLength = "minLength", e.MaxLength = "maxLength", e.Password = "password", e.Number = "number", e.Integer = "integer", e.MaxNumber = "maxNumber", e.MinNumber = "minNumber", e.StrongPassword = "strongPassword", e.CustomRegexp = "customRegexp", e.MinFilesCount = "minFilesCount", e.MaxFilesCount = "maxFilesCount", e.Files = "files", e;
    }(r || {}),
    o = function (e) {
      return e.Required = "required", e;
    }(o || {}),
    a = function (e) {
      return e.Label = "label", e.LabelArrow = "labelArrow", e;
    }(a || {});
  var n = [{
      key: r.Required,
      dict: {
        en: "The field is required"
      }
    }, {
      key: r.Email,
      dict: {
        en: "Email has invalid format"
      }
    }, {
      key: r.MaxLength,
      dict: {
        en: "The field must contain a maximum of :value characters"
      }
    }, {
      key: r.MinLength,
      dict: {
        en: "The field must contain a minimum of :value characters"
      }
    }, {
      key: r.Password,
      dict: {
        en: "Password must contain minimum eight characters, at least one letter and one number"
      }
    }, {
      key: r.StrongPassword,
      dict: {
        en: "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      }
    }, {
      key: r.Number,
      dict: {
        en: "Value should be a number"
      }
    }, {
      key: r.MaxNumber,
      dict: {
        en: "Number should be less or equal than :value"
      }
    }, {
      key: r.MinNumber,
      dict: {
        en: "Number should be more or equal than :value"
      }
    }, {
      key: r.MinFilesCount,
      dict: {
        en: "Files count should be more or equal than :value"
      }
    }, {
      key: r.MaxFilesCount,
      dict: {
        en: "Files count should be less or equal than :value"
      }
    }, {
      key: r.Files,
      dict: {
        en: "Uploaded files have one or several invalid properties (extension/size/type etc)."
      }
    }],
    d = function d(e) {
      return "object" == _typeof(e) && null !== e && "then" in e && "function" == typeof e.then;
    },
    c = function c(e) {
      return Array.isArray(e) ? e.filter(function (e) {
        return e.length > 0;
      }) : "string" == typeof e && e.trim() ? _toConsumableArray(e.split(" ").filter(function (e) {
        return e.length > 0;
      })) : [];
    },
    u = function u(e) {
      return e instanceof Element || e instanceof HTMLDocument;
    },
    h = {
      errorFieldStyle: {
        color: "#b81111",
        border: "1px solid #B81111"
      },
      errorFieldCssClass: "just-validate-error-field",
      successFieldCssClass: "just-validate-success-field",
      errorLabelStyle: {
        color: "#b81111"
      },
      errorLabelCssClass: "just-validate-error-label",
      successLabelCssClass: "just-validate-success-label",
      focusInvalidField: !0,
      lockForm: !0,
      testingMode: !1,
      validateBeforeSubmitting: !1
    };
  return /*#__PURE__*/function () {
    function _class(e, i, t) {
      var _this = this;
      _classCallCheck(this, _class);
      __publicField(this, "form", null), __publicField(this, "fields", {}), __publicField(this, "groupFields", {}), __publicField(this, "errors", {}), __publicField(this, "isValid", !1), __publicField(this, "isSubmitted", !1), __publicField(this, "globalConfig", h), __publicField(this, "errorLabels", {}), __publicField(this, "successLabels", {}), __publicField(this, "eventListeners", []), __publicField(this, "dictLocale", n), __publicField(this, "currentLocale", "en"), __publicField(this, "customStyleTags", {}), __publicField(this, "onSuccessCallback"), __publicField(this, "onFailCallback"), __publicField(this, "onValidateCallback"), __publicField(this, "tooltips", []), __publicField(this, "lastScrollPosition"), __publicField(this, "isScrollTick"), __publicField(this, "fieldIds", new Map()), __publicField(this, "getKeyByFieldSelector", function (e) {
        return _this.fieldIds.get(e);
      }), __publicField(this, "getFieldSelectorByKey", function (e) {
        var _iterator = _createForOfIteratorHelper(_this.fieldIds),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
              _i2 = _step$value[0],
              _t = _step$value[1];
            if (e === _t) return _i2;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }), __publicField(this, "getCompatibleFields", function () {
        var e = {};
        return Object.keys(_this.fields).forEach(function (i) {
          var t = i;
          var s = _this.getFieldSelectorByKey(i);
          "string" == typeof s && (t = s), e[t] = _objectSpread({}, _this.fields[i]);
        }), e;
      }), __publicField(this, "setKeyByFieldSelector", function (e) {
        if (_this.fieldIds.has(e)) return _this.fieldIds.get(e);
        var i = String(_this.fieldIds.size + 1);
        return _this.fieldIds.set(e, i), i;
      }), __publicField(this, "refreshAllTooltips", function () {
        _this.tooltips.forEach(function (e) {
          e.refresh();
        });
      }), __publicField(this, "handleDocumentScroll", function () {
        _this.lastScrollPosition = window.scrollY, _this.isScrollTick || (window.requestAnimationFrame(function () {
          _this.refreshAllTooltips(), _this.isScrollTick = !1;
        }), _this.isScrollTick = !0);
      }), __publicField(this, "formSubmitHandler", function (e) {
        e.preventDefault(), _this.isSubmitted = !0, _this.validateHandler(e);
      }), __publicField(this, "handleFieldChange", function (e) {
        var i;
        for (var _t2 in _this.fields) {
          if (_this.fields[_t2].elem === e) {
            i = _t2;
            break;
          }
        }
        i && (_this.fields[i].touched = !0, _this.validateField(i, !0));
      }), __publicField(this, "handleGroupChange", function (e) {
        var i;
        for (var _t3 in _this.groupFields) {
          if (_this.groupFields[_t3].elems.find(function (i) {
            return i === e;
          })) {
            i = _t3;
            break;
          }
        }
        i && (_this.groupFields[i].touched = !0, _this.validateGroup(i, !0));
      }), __publicField(this, "handlerChange", function (e) {
        e.target && (_this.handleFieldChange(e.target), _this.handleGroupChange(e.target), _this.renderErrors());
      }), this.initialize(e, i, t);
    }
    _createClass(_class, [{
      key: "initialize",
      value: function initialize(e, i, t) {
        if (this.form = null, this.errors = {}, this.isValid = !1, this.isSubmitted = !1, this.globalConfig = h, this.errorLabels = {}, this.successLabels = {}, this.eventListeners = [], this.customStyleTags = {}, this.tooltips = [], this.currentLocale = "en", "string" == typeof e) {
          var _i3 = document.querySelector(e);
          if (!_i3) throw Error("Form with ".concat(e, " selector not found! Please check the form selector"));
          this.setForm(_i3);
        } else {
          if (!(e instanceof HTMLFormElement)) throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");
          this.setForm(e);
        }
        if (this.globalConfig = _objectSpread(_objectSpread({}, h), i), t && (this.dictLocale = [].concat(_toConsumableArray(t), n)), this.isTooltip()) {
          var _e2 = document.createElement("style");
          _e2.textContent = ".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}", this.customStyleTags[a.Label] = document.head.appendChild(_e2), this.addListener("scroll", document, this.handleDocumentScroll);
        }
      }
    }, {
      key: "getLocalisedString",
      value: function getLocalisedString(e, i, t) {
        var s;
        var l = null != t ? t : e;
        var o = null == (s = this.dictLocale.find(function (e) {
          return e.key === l;
        })) ? void 0 : s.dict[this.currentLocale];
        if (o || t && (o = t), o && void 0 !== i) switch (e) {
          case r.MaxLength:
          case r.MinLength:
          case r.MaxNumber:
          case r.MinNumber:
          case r.MinFilesCount:
          case r.MaxFilesCount:
            o = o.replace(":value", String(i));
        }
        return o || t || "Value is incorrect";
      }
    }, {
      key: "getFieldErrorMessage",
      value: function getFieldErrorMessage(e, i) {
        var t = "function" == typeof e.errorMessage ? e.errorMessage(this.getElemValue(i), this.fields) : e.errorMessage;
        return this.getLocalisedString(e.rule, e.value, t);
      }
    }, {
      key: "getFieldSuccessMessage",
      value: function getFieldSuccessMessage(e, i) {
        var t = "function" == typeof e ? e(this.getElemValue(i), this.fields) : e;
        return this.getLocalisedString(void 0, void 0, t);
      }
    }, {
      key: "getGroupErrorMessage",
      value: function getGroupErrorMessage(e) {
        return this.getLocalisedString(e.rule, void 0, e.errorMessage);
      }
    }, {
      key: "getGroupSuccessMessage",
      value: function getGroupSuccessMessage(e) {
        if (e.successMessage) return this.getLocalisedString(void 0, void 0, e.successMessage);
      }
    }, {
      key: "setFieldInvalid",
      value: function setFieldInvalid(e, i) {
        this.fields[e].isValid = !1, this.fields[e].errorMessage = this.getFieldErrorMessage(i, this.fields[e].elem);
      }
    }, {
      key: "setFieldValid",
      value: function setFieldValid(e, i) {
        this.fields[e].isValid = !0, void 0 !== i && (this.fields[e].successMessage = this.getFieldSuccessMessage(i, this.fields[e].elem));
      }
    }, {
      key: "setGroupInvalid",
      value: function setGroupInvalid(e, i) {
        this.groupFields[e].isValid = !1, this.groupFields[e].errorMessage = this.getGroupErrorMessage(i);
      }
    }, {
      key: "setGroupValid",
      value: function setGroupValid(e, i) {
        this.groupFields[e].isValid = !0, this.groupFields[e].successMessage = this.getGroupSuccessMessage(i);
      }
    }, {
      key: "getElemValue",
      value: function getElemValue(e) {
        switch (e.type) {
          case "checkbox":
            return e.checked;
          case "file":
            return e.files;
          default:
            return e.value;
        }
      }
    }, {
      key: "validateGroupRule",
      value: function validateGroupRule(e, i, t) {
        if (t.rule === o.Required) i.every(function (e) {
          return !e.checked;
        }) ? this.setGroupInvalid(e, t) : this.setGroupValid(e, t);
      }
    }, {
      key: "validateFieldRule",
      value: function validateFieldRule(o, a, n) {
        var _this2 = this;
        var c = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
        var u = n.value,
          h = this.getElemValue(a);
        if (n.plugin) {
          n.plugin(h, this.getCompatibleFields()) || this.setFieldInvalid(o, n);
        } else {
          switch (n.rule) {
            case r.Required:
              (function (e) {
                var i = e;
                return "string" == typeof e && (i = e.trim()), !i;
              })(h) && this.setFieldInvalid(o, n);
              break;
            case r.Email:
              if (l(h)) break;
              f = h, e.test(f) || this.setFieldInvalid(o, n);
              break;
            case r.MaxLength:
              if (void 0 === u) {
                console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] field is not defined. The field will be always invalid.")), this.setFieldInvalid(o, n);
                break;
              }
              if ("number" != typeof u) {
                console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] should be a number. The field will be always invalid.")), this.setFieldInvalid(o, n);
                break;
              }
              if (l(h)) break;
              (function (e, i) {
                return e.length > i;
              })(h, u) && this.setFieldInvalid(o, n);
              break;
            case r.MinLength:
              if (void 0 === u) {
                console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] field is not defined. The field will be always invalid.")), this.setFieldInvalid(o, n);
                break;
              }
              if ("number" != typeof u) {
                console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] should be a number. The field will be always invalid.")), this.setFieldInvalid(o, n);
                break;
              }
              if (l(h)) break;
              (function (e, i) {
                return e.length < i;
              })(h, u) && this.setFieldInvalid(o, n);
              break;
            case r.Password:
              if (l(h)) break;
              (function (e) {
                return t.test(e);
              })(h) || this.setFieldInvalid(o, n);
              break;
            case r.StrongPassword:
              if (l(h)) break;
              (function (e) {
                return s.test(e);
              })(h) || this.setFieldInvalid(o, n);
              break;
            case r.Number:
              if (l(h)) break;
              (function (e) {
                return "string" == typeof e && !isNaN(+e) && !isNaN(parseFloat(e));
              })(h) || this.setFieldInvalid(o, n);
              break;
            case r.Integer:
              if (l(h)) break;
              (function (e) {
                return i.test(e);
              })(h) || this.setFieldInvalid(o, n);
              break;
            case r.MaxNumber:
              {
                if (void 0 === u) {
                  console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] field is not defined. The field will be always invalid.")), this.setFieldInvalid(o, n);
                  break;
                }
                if ("number" != typeof u) {
                  console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] field should be a number. The field will be always invalid.")), this.setFieldInvalid(o, n);
                  break;
                }
                if (l(h)) break;
                var _e3 = +h;
                (Number.isNaN(_e3) || function (e, i) {
                  return e > i;
                }(_e3, u)) && this.setFieldInvalid(o, n);
                break;
              }
            case r.MinNumber:
              {
                if (void 0 === u) {
                  console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] field is not defined. The field will be always invalid.")), this.setFieldInvalid(o, n);
                  break;
                }
                if ("number" != typeof u) {
                  console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] field should be a number. The field will be always invalid.")), this.setFieldInvalid(o, n);
                  break;
                }
                if (l(h)) break;
                var _e4 = +h;
                (Number.isNaN(_e4) || function (e, i) {
                  return e < i;
                }(_e4, u)) && this.setFieldInvalid(o, n);
                break;
              }
            case r.CustomRegexp:
              {
                if (void 0 === u) return console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] field is not defined. This field will be always invalid.")), void this.setFieldInvalid(o, n);
                var _e5;
                try {
                  _e5 = new RegExp(u);
                } catch (b) {
                  console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] should be a valid regexp. This field will be always invalid.")), this.setFieldInvalid(o, n);
                  break;
                }
                var _i4 = String(h);
                "" === _i4 || _e5.test(_i4) || this.setFieldInvalid(o, n);
                break;
              }
            case r.MinFilesCount:
              if (void 0 === u) {
                console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] field is not defined. This field will be always invalid.")), this.setFieldInvalid(o, n);
                break;
              }
              if ("number" != typeof u) {
                console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] field should be a number. The field will be always invalid.")), this.setFieldInvalid(o, n);
                break;
              }
              if (Number.isFinite(null == h ? void 0 : h.length) && h.length < u) {
                this.setFieldInvalid(o, n);
                break;
              }
              break;
            case r.MaxFilesCount:
              if (void 0 === u) {
                console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] field is not defined. This field will be always invalid.")), this.setFieldInvalid(o, n);
                break;
              }
              if ("number" != typeof u) {
                console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] field should be a number. The field will be always invalid.")), this.setFieldInvalid(o, n);
                break;
              }
              if (Number.isFinite(null == h ? void 0 : h.length) && h.length > u) {
                this.setFieldInvalid(o, n);
                break;
              }
              break;
            case r.Files:
              {
                if (void 0 === u) return console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] field is not defined. This field will be always invalid.")), void this.setFieldInvalid(o, n);
                if ("object" != _typeof(u)) return console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] field should be an object. This field will be always invalid.")), void this.setFieldInvalid(o, n);
                var _e6 = u.files;
                if ("object" != _typeof(_e6)) return console.error("Value for ".concat(n.rule, " rule for [").concat(o, "] field should be an object with files array. This field will be always invalid.")), void this.setFieldInvalid(o, n);
                var _i5 = function _i5(e, i) {
                  var t = Number.isFinite(i.minSize) && e.size < i.minSize,
                    s = Number.isFinite(i.maxSize) && e.size > i.maxSize,
                    l = Array.isArray(i.names) && !i.names.includes(e.name),
                    r = Array.isArray(i.extensions) && !i.extensions.includes(e.name.split(".")[e.name.split(".").length - 1]),
                    o = Array.isArray(i.types) && !i.types.includes(e.type);
                  return t || s || l || r || o;
                };
                if ("object" == _typeof(h) && null !== h) for (var _t4 = 0, _s2 = h.length; _t4 < _s2; ++_t4) {
                  var _s3 = h.item(_t4);
                  if (!_s3) {
                    this.setFieldInvalid(o, n);
                    break;
                  }
                  if (_i5(_s3, _e6)) {
                    this.setFieldInvalid(o, n);
                    break;
                  }
                }
                break;
              }
            default:
              {
                if ("function" != typeof n.validator) return console.error("Validator for custom rule for [".concat(o, "] field should be a function. This field will be always invalid.")), void this.setFieldInvalid(o, n);
                var _e7 = n.validator(h, this.getCompatibleFields());
                if ("boolean" != typeof _e7 && "function" != typeof _e7 && console.error("Validator return value for [".concat(o, "] field should be boolean or function. It will be cast to boolean.")), "function" == typeof _e7) {
                  if (!c) {
                    this.fields[o].asyncCheckPending = !1;
                    var _i6 = _e7();
                    return d(_i6) ? _i6.then(function (e) {
                      e || _this2.setFieldInvalid(o, n);
                    })["catch"](function () {
                      _this2.setFieldInvalid(o, n);
                    }) : (console.error("Validator function for custom rule for [".concat(o, "] field should return a Promise. This field will be always invalid.")), void this.setFieldInvalid(o, n));
                  }
                  this.fields[o].asyncCheckPending = !0;
                }
                _e7 || this.setFieldInvalid(o, n);
              }
          }
          var f;
        }
      }
    }, {
      key: "isFormValid",
      value: function isFormValid() {
        var e = !0;
        for (var _i7 = 0, _t5 = Object.values(this.fields).length; _i7 < _t5; ++_i7) {
          var _t6 = Object.values(this.fields)[_i7];
          if (void 0 === _t6.isValid) {
            e = void 0;
            break;
          }
          if (!1 === _t6.isValid) {
            e = !1;
            break;
          }
        }
        for (var _i8 = 0, _t7 = Object.values(this.groupFields).length; _i8 < _t7; ++_i8) {
          var _t8 = Object.values(this.groupFields)[_i8];
          if (void 0 === _t8.isValid) {
            e = void 0;
            break;
          }
          if (!1 === _t8.isValid) {
            e = !1;
            break;
          }
        }
        return e;
      }
    }, {
      key: "validateField",
      value: function validateField(e) {
        var _this3 = this;
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var t;
        var s = this.fields[e];
        s.isValid = !0;
        var l = [];
        return _toConsumableArray(s.rules).reverse().forEach(function (t) {
          var r = _this3.validateFieldRule(e, s.elem, t, i);
          d(r) && l.push(r);
        }), s.isValid && this.setFieldValid(e, null == (t = s.config) ? void 0 : t.successMessage), Promise.allSettled(l)["finally"](function () {
          var e;
          i && (null == (e = _this3.onValidateCallback) || e.call(_this3, {
            isValid: _this3.isFormValid(),
            isSubmitted: _this3.isSubmitted,
            fields: _this3.getCompatibleFields(),
            groups: _objectSpread({}, _this3.groupFields)
          }));
        });
      }
    }, {
      key: "revalidateField",
      value: function revalidateField(e) {
        var _this4 = this;
        if ("string" != typeof e && !u(e)) throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");
        var i = this.getKeyByFieldSelector(e);
        return i && this.fields[i] ? new Promise(function (e) {
          _this4.validateField(i, !0)["finally"](function () {
            _this4.clearFieldStyle(i), _this4.clearFieldLabel(i), _this4.renderFieldError(i, !0), e(!!_this4.fields[i].isValid);
          });
        }) : (console.error("Field not found. Check the field selector."), Promise.reject());
      }
    }, {
      key: "revalidateGroup",
      value: function revalidateGroup(e) {
        var _this5 = this;
        if ("string" != typeof e && !u(e)) throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");
        var i = this.getKeyByFieldSelector(e);
        return i && this.groupFields[i] ? new Promise(function (e) {
          _this5.validateGroup(i)["finally"](function () {
            _this5.clearFieldLabel(i), _this5.renderGroupError(i, !0), e(!!_this5.groupFields[i].isValid);
          });
        }) : (console.error("Group not found. Check the group selector."), Promise.reject());
      }
    }, {
      key: "validateGroup",
      value: function validateGroup(e) {
        var _this6 = this;
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var t = this.groupFields[e],
          s = [];
        return _toConsumableArray(t.rules).reverse().forEach(function (i) {
          var l = _this6.validateGroupRule(e, t.elems, i);
          d(l) && s.push(l);
        }), Promise.allSettled(s)["finally"](function () {
          var e;
          i && (null == (e = _this6.onValidateCallback) || e.call(_this6, {
            isValid: _this6.isFormValid(),
            isSubmitted: _this6.isSubmitted,
            fields: _this6.getCompatibleFields(),
            groups: _objectSpread({}, _this6.groupFields)
          }));
        });
      }
    }, {
      key: "focusInvalidField",
      value: function focusInvalidField() {
        var _this7 = this;
        var _loop = function _loop() {
          var i = _this7.fields[_e8];
          if (!i.isValid) {
            setTimeout(function () {
              return i.elem.focus();
            }, 0);
            return "break";
          }
        };
        for (var _e8 in this.fields) {
          var _ret = _loop();
          if (_ret === "break") break;
        }
      }
    }, {
      key: "afterSubmitValidation",
      value: function afterSubmitValidation() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        this.renderErrors(e), this.globalConfig.focusInvalidField && this.focusInvalidField();
      }
    }, {
      key: "validate",
      value: function validate() {
        var _this8 = this;
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        return new Promise(function (i) {
          var t = [];
          Object.keys(_this8.fields).forEach(function (e) {
            var i = _this8.validateField(e);
            d(i) && t.push(i);
          }), Object.keys(_this8.groupFields).forEach(function (e) {
            var i = _this8.validateGroup(e);
            d(i) && t.push(i);
          }), Promise.allSettled(t).then(function () {
            var s;
            _this8.afterSubmitValidation(e), null == (s = _this8.onValidateCallback) || s.call(_this8, {
              isValid: _this8.isFormValid(),
              isSubmitted: _this8.isSubmitted,
              fields: _this8.getCompatibleFields(),
              groups: _objectSpread({}, _this8.groupFields)
            }), i(!!t.length);
          });
        });
      }
    }, {
      key: "revalidate",
      value: function revalidate() {
        var _this9 = this;
        return new Promise(function (e) {
          _this9.validateHandler(void 0, !0)["finally"](function () {
            _this9.globalConfig.focusInvalidField && _this9.focusInvalidField(), e(_this9.isValid);
          });
        });
      }
    }, {
      key: "validateHandler",
      value: function validateHandler(e) {
        var _this10 = this;
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        return this.globalConfig.lockForm && this.lockForm(), this.validate(i)["finally"](function () {
          var i, t;
          _this10.globalConfig.lockForm && _this10.unlockForm(), _this10.isValid ? null == (i = _this10.onSuccessCallback) || i.call(_this10, e) : null == (t = _this10.onFailCallback) || t.call(_this10, _this10.getCompatibleFields(), _this10.groupFields);
        });
      }
    }, {
      key: "setForm",
      value: function setForm(e) {
        this.form = e, this.form.setAttribute("novalidate", "novalidate"), this.removeListener("submit", this.form, this.formSubmitHandler), this.addListener("submit", this.form, this.formSubmitHandler);
      }
    }, {
      key: "addListener",
      value: function addListener(e, i, t) {
        i.addEventListener(e, t), this.eventListeners.push({
          type: e,
          elem: i,
          func: t
        });
      }
    }, {
      key: "removeListener",
      value: function removeListener(e, i, t) {
        i.removeEventListener(e, t), this.eventListeners = this.eventListeners.filter(function (t) {
          return t.type !== e || t.elem !== i;
        });
      }
    }, {
      key: "addField",
      value: function addField(e, i, t) {
        if ("string" != typeof e && !u(e)) throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");
        var s;
        if (s = "string" == typeof e ? this.form.querySelector(e) : e, !s) throw Error("Field doesn't exist in the DOM! Please check the field selector.");
        if (!Array.isArray(i) || !i.length) throw Error("Rules argument should be an array and should contain at least 1 element.");
        i.forEach(function (e) {
          if (!("rule" in e || "validator" in e || "plugin" in e)) throw Error("Rules argument must contain at least one rule or validator property.");
          if (!(e.validator || e.plugin || e.rule && Object.values(r).includes(e.rule))) throw Error("Rule should be one of these types: ".concat(Object.values(r).join(", "), ". Provided value: ").concat(e.rule));
        });
        var l = this.setKeyByFieldSelector(e);
        return this.fields[l] = {
          elem: s,
          rules: i,
          isValid: void 0,
          touched: !1,
          config: t
        }, this.setListeners(s), (this.isSubmitted || this.globalConfig.validateBeforeSubmitting) && this.validateField(l), this;
      }
    }, {
      key: "removeField",
      value: function removeField(e) {
        if ("string" != typeof e && !u(e)) throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");
        var i = this.getKeyByFieldSelector(e);
        if (!i || !this.fields[i]) return console.error("Field not found. Check the field selector."), this;
        var t = this.getListenerType(this.fields[i].elem.type);
        return this.removeListener(t, this.fields[i].elem, this.handlerChange), this.clearErrors(), delete this.fields[i], this;
      }
    }, {
      key: "removeGroup",
      value: function removeGroup(e) {
        var _this11 = this;
        if ("string" != typeof e) throw Error("Group selector is not valid. Please specify a string selector.");
        var i = this.getKeyByFieldSelector(e);
        return i && this.groupFields[i] ? (this.groupFields[i].elems.forEach(function (e) {
          var i = _this11.getListenerType(e.type);
          _this11.removeListener(i, e, _this11.handlerChange);
        }), this.clearErrors(), delete this.groupFields[i], this) : (console.error("Group not found. Check the group selector."), this);
      }
    }, {
      key: "addRequiredGroup",
      value: function addRequiredGroup(e, i, t, s) {
        var _this12 = this;
        if ("string" != typeof e && !u(e)) throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");
        var l;
        if (l = "string" == typeof e ? this.form.querySelector(e) : e, !l) throw Error("Group selector not found! Please check the group selector.");
        var r = l.querySelectorAll("input"),
          a = Array.from(r).filter(function (e) {
            var i = function (e, i) {
              var t = _toConsumableArray(i).reverse();
              for (var _s4 = 0, _l = t.length; _s4 < _l; ++_s4) {
                var _i9 = t[_s4];
                for (var _t9 in e) {
                  var _s5 = e[_t9];
                  if (_s5.groupElem === _i9) return [_t9, _s5];
                }
              }
              return null;
            }(_this12.groupFields, function (e) {
              var i = e;
              var t = [];
              for (; i;) t.unshift(i), i = i.parentNode;
              return t;
            }(e));
            return !i || i[1].elems.find(function (i) {
              return i !== e;
            });
          }),
          n = this.setKeyByFieldSelector(e);
        return this.groupFields[n] = {
          rules: [{
            rule: o.Required,
            errorMessage: i,
            successMessage: s
          }],
          groupElem: l,
          elems: a,
          touched: !1,
          isValid: void 0,
          config: t
        }, r.forEach(function (e) {
          _this12.setListeners(e);
        }), this;
      }
    }, {
      key: "getListenerType",
      value: function getListenerType(e) {
        switch (e) {
          case "checkbox":
          case "select-one":
          case "file":
          case "radio":
            return "change";
          default:
            return "input";
        }
      }
    }, {
      key: "setListeners",
      value: function setListeners(e) {
        var i = this.getListenerType(e.type);
        this.removeListener(i, e, this.handlerChange), this.addListener(i, e, this.handlerChange);
      }
    }, {
      key: "clearFieldLabel",
      value: function clearFieldLabel(e) {
        var i, t;
        null == (i = this.errorLabels[e]) || i.remove(), null == (t = this.successLabels[e]) || t.remove();
      }
    }, {
      key: "clearFieldStyle",
      value: function clearFieldStyle(e) {
        var _r$elem$classList;
        var i, t, s, l;
        var r = this.fields[e],
          o = (null == (i = r.config) ? void 0 : i.errorFieldStyle) || this.globalConfig.errorFieldStyle;
        Object.keys(o).forEach(function (e) {
          r.elem.style[e] = "";
        });
        var a = (null == (t = r.config) ? void 0 : t.successFieldStyle) || this.globalConfig.successFieldStyle || {};
        Object.keys(a).forEach(function (e) {
          r.elem.style[e] = "";
        }), (_r$elem$classList = r.elem.classList).remove.apply(_r$elem$classList, _toConsumableArray(c((null == (s = r.config) ? void 0 : s.errorFieldCssClass) || this.globalConfig.errorFieldCssClass)).concat(_toConsumableArray(c((null == (l = r.config) ? void 0 : l.successFieldCssClass) || this.globalConfig.successFieldCssClass))));
      }
    }, {
      key: "clearErrors",
      value: function clearErrors() {
        var _this13 = this;
        var e, i;
        Object.keys(this.errorLabels).forEach(function (e) {
          return _this13.errorLabels[e].remove();
        }), Object.keys(this.successLabels).forEach(function (e) {
          return _this13.successLabels[e].remove();
        });
        for (var _t10 in this.fields) this.clearFieldStyle(_t10);
        var _loop2 = function _loop2() {
          var s = _this13.groupFields[_t11],
            l = (null == (e = s.config) ? void 0 : e.errorFieldStyle) || _this13.globalConfig.errorFieldStyle;
          Object.keys(l).forEach(function (e) {
            s.elems.forEach(function (i) {
              var _i$classList;
              var t;
              i.style[e] = "", (_i$classList = i.classList).remove.apply(_i$classList, _toConsumableArray(c((null == (t = s.config) ? void 0 : t.errorFieldCssClass) || _this13.globalConfig.errorFieldCssClass)));
            });
          });
          var r = (null == (i = s.config) ? void 0 : i.successFieldStyle) || _this13.globalConfig.successFieldStyle || {};
          Object.keys(r).forEach(function (e) {
            s.elems.forEach(function (i) {
              var _i$classList2;
              var t;
              i.style[e] = "", (_i$classList2 = i.classList).remove.apply(_i$classList2, _toConsumableArray(c((null == (t = s.config) ? void 0 : t.successFieldCssClass) || _this13.globalConfig.successFieldCssClass)));
            });
          });
        };
        for (var _t11 in this.groupFields) {
          _loop2();
        }
        this.tooltips = [];
      }
    }, {
      key: "isTooltip",
      value: function isTooltip() {
        return !!this.globalConfig.tooltip;
      }
    }, {
      key: "lockForm",
      value: function lockForm() {
        var e = this.form.querySelectorAll("input, textarea, button, select");
        for (var _i10 = 0, _t12 = e.length; _i10 < _t12; ++_i10) e[_i10].setAttribute("data-just-validate-fallback-disabled", e[_i10].disabled ? "true" : "false"), e[_i10].setAttribute("disabled", "disabled"), e[_i10].style.pointerEvents = "none", e[_i10].style.webkitFilter = "grayscale(100%)", e[_i10].style.filter = "grayscale(100%)";
      }
    }, {
      key: "unlockForm",
      value: function unlockForm() {
        var e = this.form.querySelectorAll("input, textarea, button, select");
        for (var _i11 = 0, _t13 = e.length; _i11 < _t13; ++_i11) "true" !== e[_i11].getAttribute("data-just-validate-fallback-disabled") && e[_i11].removeAttribute("disabled"), e[_i11].style.pointerEvents = "", e[_i11].style.webkitFilter = "", e[_i11].style.filter = "";
      }
    }, {
      key: "renderTooltip",
      value: function renderTooltip(e, i, t) {
        var _this14 = this;
        var s;
        var _e$getBoundingClientR = e.getBoundingClientRect(),
          l = _e$getBoundingClientR.top,
          r = _e$getBoundingClientR.left,
          o = _e$getBoundingClientR.width,
          a = _e$getBoundingClientR.height,
          n = i.getBoundingClientRect(),
          d = t || (null == (s = this.globalConfig.tooltip) ? void 0 : s.position);
        switch (d) {
          case "left":
            i.style.top = l + a / 2 - n.height / 2 + "px", i.style.left = r - n.width - 5 + "px";
            break;
          case "top":
            i.style.top = l - n.height - 5 + "px", i.style.left = r + o / 2 - n.width / 2 + "px";
            break;
          case "right":
            i.style.top = l + a / 2 - n.height / 2 + "px", i.style.left = "".concat(r + o + 5, "px");
            break;
          case "bottom":
            i.style.top = "".concat(l + a + 5, "px"), i.style.left = r + o / 2 - n.width / 2 + "px";
        }
        i.dataset.direction = d;
        return {
          refresh: function refresh() {
            _this14.renderTooltip(e, i, t);
          }
        };
      }
    }, {
      key: "createErrorLabelElem",
      value: function createErrorLabelElem(e, i, t) {
        var _s$classList;
        var s = document.createElement("div");
        s.innerHTML = i;
        var l = this.isTooltip() ? null == t ? void 0 : t.errorLabelStyle : (null == t ? void 0 : t.errorLabelStyle) || this.globalConfig.errorLabelStyle;
        return Object.assign(s.style, l), (_s$classList = s.classList).add.apply(_s$classList, _toConsumableArray(c((null == t ? void 0 : t.errorLabelCssClass) || this.globalConfig.errorLabelCssClass)).concat(["just-validate-error-label"])), this.isTooltip() && (s.dataset.tooltip = "true"), this.globalConfig.testingMode && (s.dataset.testId = "error-label-".concat(e)), this.errorLabels[e] = s, s;
      }
    }, {
      key: "createSuccessLabelElem",
      value: function createSuccessLabelElem(e, i, t) {
        var _s$classList2;
        if (void 0 === i) return null;
        var s = document.createElement("div");
        s.innerHTML = i;
        var l = (null == t ? void 0 : t.successLabelStyle) || this.globalConfig.successLabelStyle;
        return Object.assign(s.style, l), (_s$classList2 = s.classList).add.apply(_s$classList2, _toConsumableArray(c((null == t ? void 0 : t.successLabelCssClass) || this.globalConfig.successLabelCssClass)).concat(["just-validate-success-label"])), this.globalConfig.testingMode && (s.dataset.testId = "success-label-".concat(e)), this.successLabels[e] = s, s;
      }
    }, {
      key: "renderErrorsContainer",
      value: function renderErrorsContainer(e, i) {
        var t = i || this.globalConfig.errorsContainer;
        if ("string" == typeof t) {
          var _i12 = this.form.querySelector(t);
          if (_i12) return _i12.appendChild(e), !0;
          console.error("Error container with ".concat(t, " selector not found. Errors will be rendered as usual"));
        }
        return t instanceof Element ? (t.appendChild(e), !0) : (void 0 !== t && console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"), !1);
      }
    }, {
      key: "renderGroupLabel",
      value: function renderGroupLabel(e, i, t, s) {
        if (!s) {
          if (this.renderErrorsContainer(i, t)) return;
        }
        e.appendChild(i);
      }
    }, {
      key: "renderFieldLabel",
      value: function renderFieldLabel(e, i, t, s) {
        var l, r, o, a, n, d, c;
        if (!s) {
          if (this.renderErrorsContainer(i, t)) return;
        }
        if ("checkbox" === e.type || "radio" === e.type) {
          var _t14 = document.querySelector("label[for=\"".concat(e.getAttribute("id"), "\"]"));
          "label" === (null == (r = null == (l = e.parentElement) ? void 0 : l.tagName) ? void 0 : r.toLowerCase()) ? null == (a = null == (o = e.parentElement) ? void 0 : o.parentElement) || a.appendChild(i) : _t14 ? null == (n = _t14.parentElement) || n.appendChild(i) : null == (d = e.parentElement) || d.appendChild(i);
        } else null == (c = e.parentElement) || c.appendChild(i);
      }
    }, {
      key: "showLabels",
      value: function showLabels(e, i) {
        var _this15 = this;
        Object.keys(e).forEach(function (t, s) {
          var l = e[t],
            r = _this15.getKeyByFieldSelector(t);
          if (!r || !_this15.fields[r]) return void console.error("Field not found. Check the field selector.");
          var o = _this15.fields[r];
          o.isValid = !i, _this15.clearFieldStyle(r), _this15.clearFieldLabel(r), _this15.renderFieldError(r, !1, l), 0 === s && _this15.globalConfig.focusInvalidField && setTimeout(function () {
            return o.elem.focus();
          }, 0);
        });
      }
    }, {
      key: "showErrors",
      value: function showErrors(e) {
        if ("object" != _typeof(e)) throw Error("[showErrors]: Errors should be an object with key: value format");
        this.showLabels(e, !0);
      }
    }, {
      key: "showSuccessLabels",
      value: function showSuccessLabels(e) {
        if ("object" != _typeof(e)) throw Error("[showSuccessLabels]: Labels should be an object with key: value format");
        this.showLabels(e, !1);
      }
    }, {
      key: "renderFieldError",
      value: function renderFieldError(e) {
        var _d$elem$classList2;
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var t = arguments.length > 2 ? arguments[2] : undefined;
        var s, l, r, o, a, n;
        var d = this.fields[e];
        if (!1 === d.isValid && (this.isValid = !1), void 0 === d.isValid || !i && !this.isSubmitted && !d.touched && void 0 === t) return;
        if (d.isValid) {
          if (!d.asyncCheckPending) {
            var _d$elem$classList;
            var _i13 = this.createSuccessLabelElem(e, void 0 !== t ? t : d.successMessage, d.config);
            _i13 && this.renderFieldLabel(d.elem, _i13, null == (s = d.config) ? void 0 : s.errorsContainer, !0), (_d$elem$classList = d.elem.classList).add.apply(_d$elem$classList, _toConsumableArray(c((null == (l = d.config) ? void 0 : l.successFieldCssClass) || this.globalConfig.successFieldCssClass)));
          }
          return;
        }
        (_d$elem$classList2 = d.elem.classList).add.apply(_d$elem$classList2, _toConsumableArray(c((null == (r = d.config) ? void 0 : r.errorFieldCssClass) || this.globalConfig.errorFieldCssClass)));
        var u = this.createErrorLabelElem(e, void 0 !== t ? t : d.errorMessage, d.config);
        this.renderFieldLabel(d.elem, u, null == (o = d.config) ? void 0 : o.errorsContainer), this.isTooltip() && this.tooltips.push(this.renderTooltip(d.elem, u, null == (n = null == (a = d.config) ? void 0 : a.tooltip) ? void 0 : n.position));
      }
    }, {
      key: "renderGroupError",
      value: function renderGroupError(e) {
        var _this16 = this;
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var t, s, l, r;
        var o = this.groupFields[e];
        if (!1 === o.isValid && (this.isValid = !1), void 0 === o.isValid || !i && !this.isSubmitted && !o.touched) return;
        if (o.isValid) {
          o.elems.forEach(function (e) {
            var _e$classList;
            var i, t;
            Object.assign(e.style, (null == (i = o.config) ? void 0 : i.successFieldStyle) || _this16.globalConfig.successFieldStyle), (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(c((null == (t = o.config) ? void 0 : t.successFieldCssClass) || _this16.globalConfig.successFieldCssClass)));
          });
          var _i14 = this.createSuccessLabelElem(e, o.successMessage, o.config);
          return void (_i14 && this.renderGroupLabel(o.groupElem, _i14, null == (t = o.config) ? void 0 : t.errorsContainer, !0));
        }
        this.isValid = !1, o.elems.forEach(function (e) {
          var _e$classList2;
          var i, t;
          Object.assign(e.style, (null == (i = o.config) ? void 0 : i.errorFieldStyle) || _this16.globalConfig.errorFieldStyle), (_e$classList2 = e.classList).add.apply(_e$classList2, _toConsumableArray(c((null == (t = o.config) ? void 0 : t.errorFieldCssClass) || _this16.globalConfig.errorFieldCssClass)));
        });
        var a = this.createErrorLabelElem(e, o.errorMessage, o.config);
        this.renderGroupLabel(o.groupElem, a, null == (s = o.config) ? void 0 : s.errorsContainer), this.isTooltip() && this.tooltips.push(this.renderTooltip(o.groupElem, a, null == (r = null == (l = o.config) ? void 0 : l.tooltip) ? void 0 : r.position));
      }
    }, {
      key: "renderErrors",
      value: function renderErrors() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        if (this.isSubmitted || e || this.globalConfig.validateBeforeSubmitting) {
          this.clearErrors(), this.isValid = !0;
          for (var _e9 in this.groupFields) this.renderGroupError(_e9);
          for (var _e10 in this.fields) this.renderFieldError(_e10);
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this17 = this;
        this.eventListeners.forEach(function (e) {
          _this17.removeListener(e.type, e.elem, e.func);
        }), Object.keys(this.customStyleTags).forEach(function (e) {
          _this17.customStyleTags[e].remove();
        }), this.clearErrors(), this.globalConfig.lockForm && this.unlockForm();
      }
    }, {
      key: "refresh",
      value: function refresh() {
        var _this18 = this;
        this.destroy(), this.form ? (this.initialize(this.form, this.globalConfig), Object.keys(this.fields).forEach(function (e) {
          var i = _this18.getFieldSelectorByKey(e);
          i && _this18.addField(i, _toConsumableArray(_this18.fields[e].rules), _this18.fields[e].config);
        })) : console.error("Cannot initialize the library! Form is not defined");
      }
    }, {
      key: "setCurrentLocale",
      value: function setCurrentLocale(e) {
        "string" == typeof e || void 0 === e ? (this.currentLocale = e, this.isSubmitted && this.validate()) : console.error("Current locale should be a string");
      }
    }, {
      key: "onSuccess",
      value: function onSuccess(e) {
        return this.onSuccessCallback = e, this;
      }
    }, {
      key: "onFail",
      value: function onFail(e) {
        return this.onFailCallback = e, this;
      }
    }, {
      key: "onValidate",
      value: function onValidate(e) {
        return this.onValidateCallback = e, this;
      }
    }]);
    return _class;
  }();
});
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Btn menu
  document.querySelector(".js-open").addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(".js-menu").classList.toggle("is-open");
    document.querySelector("body").classList.toggle("menu-is-open");
  });
  document.querySelector(".js-close").addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(".js-menu").classList.toggle("is-open");
    document.querySelector("body").classList.toggle("menu-is-open");
  });

  // menu
  var els = document.querySelectorAll(".main-nav__link");
  els.forEach(function (el) {
    el.addEventListener("click", function () {
      if (window.innerWidth < 1000) {
        console.log(el);
        document.querySelector(".js-menu").classList.toggle("is-open");
        document.querySelector("body").classList.toggle("menu-is-open");
      }
    });
  });
  document.querySelector("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var name = this.name.value;
    var email = this.email.value;
    var send = "mailto:blog@test.ru?body=\u0418\u043C\u044F: ".concat(name, "%0D%0AE-mail: ").concat(email);
    window.location.href = send;
  });
  var validatorNewsletter = new JustValidate(document.querySelector('#newsletterForm'), {
    errorLabelStyle: {
      color: '#F06666'
    }
  });
  validatorNewsletter.addField(document.querySelector('#emailNewsletter'), [{
    rule: 'required',
    errorMessage: 'Поле обязательно для заполнения'
  }, {
    rule: 'required',
    errorMessage: 'Недопустимый формат'
  }, {
    rule: 'email',
    errorMessage: 'Недопустимый формат'
  }]);
  var validatorContact = new JustValidate(document.querySelector('#contactForm'), {
    errorLabelStyle: {
      color: '#F06666'
    }
  });
  validatorContact.addField(document.querySelector('#nameInput'), [{
    rule: 'required',
    errorMessage: 'Поле обязательно для заполнения'
  }, {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Недопустимый формат'
  }, {
    rule: 'maxLength',
    value: 15,
    errorMessage: 'Недопустимый формат'
  }]).addField(document.querySelector('#emailInput'), [{
    rule: 'required',
    errorMessage: 'Поле обязательно для заполнения'
  }, {
    rule: 'required',
    errorMessage: 'Недопустимый формат'
  }, {
    rule: 'email',
    errorMessage: 'Недопустимый формат'
  }]);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp1c3QtdmFsaWRhdGUubWluLmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6WyJfX2RlZlByb3AiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fZGVmTm9ybWFsUHJvcCIsImUiLCJpIiwidCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInZhbHVlIiwiX19wdWJsaWNGaWVsZCIsIl90eXBlb2YiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwiZ2xvYmFsVGhpcyIsInNlbGYiLCJKdXN0VmFsaWRhdGUiLCJzIiwibCIsInIiLCJSZXF1aXJlZCIsIkVtYWlsIiwiTWluTGVuZ3RoIiwiTWF4TGVuZ3RoIiwiUGFzc3dvcmQiLCJOdW1iZXIiLCJJbnRlZ2VyIiwiTWF4TnVtYmVyIiwiTWluTnVtYmVyIiwiU3Ryb25nUGFzc3dvcmQiLCJDdXN0b21SZWdleHAiLCJNaW5GaWxlc0NvdW50IiwiTWF4RmlsZXNDb3VudCIsIkZpbGVzIiwibyIsImEiLCJMYWJlbCIsIkxhYmVsQXJyb3ciLCJuIiwia2V5IiwiZGljdCIsImVuIiwiZCIsInRoZW4iLCJjIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIiwibGVuZ3RoIiwidHJpbSIsIl90b0NvbnN1bWFibGVBcnJheSIsInNwbGl0IiwidSIsIkVsZW1lbnQiLCJIVE1MRG9jdW1lbnQiLCJoIiwiZXJyb3JGaWVsZFN0eWxlIiwiY29sb3IiLCJib3JkZXIiLCJlcnJvckZpZWxkQ3NzQ2xhc3MiLCJzdWNjZXNzRmllbGRDc3NDbGFzcyIsImVycm9yTGFiZWxTdHlsZSIsImVycm9yTGFiZWxDc3NDbGFzcyIsInN1Y2Nlc3NMYWJlbENzc0NsYXNzIiwiZm9jdXNJbnZhbGlkRmllbGQiLCJsb2NrRm9ybSIsInRlc3RpbmdNb2RlIiwidmFsaWRhdGVCZWZvcmVTdWJtaXR0aW5nIiwiX2NsYXNzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJNYXAiLCJmaWVsZElkcyIsImdldCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJkb25lIiwiX3N0ZXAkdmFsdWUiLCJfc2xpY2VkVG9BcnJheSIsImVyciIsImYiLCJrZXlzIiwiZmllbGRzIiwiZm9yRWFjaCIsImdldEZpZWxkU2VsZWN0b3JCeUtleSIsIl9vYmplY3RTcHJlYWQiLCJoYXMiLCJTdHJpbmciLCJzaXplIiwic2V0IiwidG9vbHRpcHMiLCJyZWZyZXNoIiwibGFzdFNjcm9sbFBvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsWSIsImlzU2Nyb2xsVGljayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlZnJlc2hBbGxUb29sdGlwcyIsInByZXZlbnREZWZhdWx0IiwiaXNTdWJtaXR0ZWQiLCJ2YWxpZGF0ZUhhbmRsZXIiLCJlbGVtIiwidG91Y2hlZCIsInZhbGlkYXRlRmllbGQiLCJncm91cEZpZWxkcyIsImVsZW1zIiwiZmluZCIsInZhbGlkYXRlR3JvdXAiLCJ0YXJnZXQiLCJoYW5kbGVGaWVsZENoYW5nZSIsImhhbmRsZUdyb3VwQ2hhbmdlIiwicmVuZGVyRXJyb3JzIiwiaW5pdGlhbGl6ZSIsIl9jcmVhdGVDbGFzcyIsImZvcm0iLCJlcnJvcnMiLCJpc1ZhbGlkIiwiZ2xvYmFsQ29uZmlnIiwiZXJyb3JMYWJlbHMiLCJzdWNjZXNzTGFiZWxzIiwiZXZlbnRMaXN0ZW5lcnMiLCJjdXN0b21TdHlsZVRhZ3MiLCJjdXJyZW50TG9jYWxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiRXJyb3IiLCJjb25jYXQiLCJzZXRGb3JtIiwiSFRNTEZvcm1FbGVtZW50IiwiZGljdExvY2FsZSIsImlzVG9vbHRpcCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImFkZExpc3RlbmVyIiwiaGFuZGxlRG9jdW1lbnRTY3JvbGwiLCJnZXRMb2NhbGlzZWRTdHJpbmciLCJyZXBsYWNlIiwiZ2V0RmllbGRFcnJvck1lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJnZXRFbGVtVmFsdWUiLCJydWxlIiwiZ2V0RmllbGRTdWNjZXNzTWVzc2FnZSIsImdldEdyb3VwRXJyb3JNZXNzYWdlIiwiZ2V0R3JvdXBTdWNjZXNzTWVzc2FnZSIsInN1Y2Nlc3NNZXNzYWdlIiwic2V0RmllbGRJbnZhbGlkIiwic2V0RmllbGRWYWxpZCIsInNldEdyb3VwSW52YWxpZCIsInNldEdyb3VwVmFsaWQiLCJ0eXBlIiwiY2hlY2tlZCIsImZpbGVzIiwidmFsaWRhdGVHcm91cFJ1bGUiLCJldmVyeSIsInZhbGlkYXRlRmllbGRSdWxlIiwiX3RoaXMyIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwicGx1Z2luIiwiZ2V0Q29tcGF0aWJsZUZpZWxkcyIsInRlc3QiLCJjb25zb2xlIiwiZXJyb3IiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJSZWdFeHAiLCJiIiwiaXNGaW5pdGUiLCJtaW5TaXplIiwibWF4U2l6ZSIsIm5hbWVzIiwiaW5jbHVkZXMiLCJuYW1lIiwiZXh0ZW5zaW9ucyIsInR5cGVzIiwiaXRlbSIsInZhbGlkYXRvciIsImFzeW5jQ2hlY2tQZW5kaW5nIiwiaXNGb3JtVmFsaWQiLCJ2YWx1ZXMiLCJfdGhpczMiLCJydWxlcyIsInJldmVyc2UiLCJwdXNoIiwiY29uZmlnIiwiUHJvbWlzZSIsImFsbFNldHRsZWQiLCJvblZhbGlkYXRlQ2FsbGJhY2siLCJjYWxsIiwiZ3JvdXBzIiwicmV2YWxpZGF0ZUZpZWxkIiwiX3RoaXM0IiwiZ2V0S2V5QnlGaWVsZFNlbGVjdG9yIiwiY2xlYXJGaWVsZFN0eWxlIiwiY2xlYXJGaWVsZExhYmVsIiwicmVuZGVyRmllbGRFcnJvciIsInJlamVjdCIsInJldmFsaWRhdGVHcm91cCIsIl90aGlzNSIsInJlbmRlckdyb3VwRXJyb3IiLCJfdGhpczYiLCJfdGhpczciLCJfbG9vcCIsInNldFRpbWVvdXQiLCJmb2N1cyIsIl9yZXQiLCJhZnRlclN1Ym1pdFZhbGlkYXRpb24iLCJ2YWxpZGF0ZSIsIl90aGlzOCIsInJldmFsaWRhdGUiLCJfdGhpczkiLCJfdGhpczEwIiwidW5sb2NrRm9ybSIsIm9uU3VjY2Vzc0NhbGxiYWNrIiwib25GYWlsQ2FsbGJhY2siLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVMaXN0ZW5lciIsImZvcm1TdWJtaXRIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZ1bmMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRmllbGQiLCJqb2luIiwic2V0S2V5QnlGaWVsZFNlbGVjdG9yIiwic2V0TGlzdGVuZXJzIiwicmVtb3ZlRmllbGQiLCJnZXRMaXN0ZW5lclR5cGUiLCJoYW5kbGVyQ2hhbmdlIiwiY2xlYXJFcnJvcnMiLCJyZW1vdmVHcm91cCIsIl90aGlzMTEiLCJhZGRSZXF1aXJlZEdyb3VwIiwiX3RoaXMxMiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmcm9tIiwiZ3JvdXBFbGVtIiwidW5zaGlmdCIsInBhcmVudE5vZGUiLCJyZW1vdmUiLCJfciRlbGVtJGNsYXNzTGlzdCIsInN0eWxlIiwic3VjY2Vzc0ZpZWxkU3R5bGUiLCJjbGFzc0xpc3QiLCJhcHBseSIsIl90aGlzMTMiLCJfbG9vcDIiLCJfaSRjbGFzc0xpc3QiLCJfaSRjbGFzc0xpc3QyIiwidG9vbHRpcCIsImRpc2FibGVkIiwicG9pbnRlckV2ZW50cyIsIndlYmtpdEZpbHRlciIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInJlbmRlclRvb2x0aXAiLCJfdGhpczE0IiwiX2UkZ2V0Qm91bmRpbmdDbGllbnRSIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJkYXRhc2V0IiwiZGlyZWN0aW9uIiwiY3JlYXRlRXJyb3JMYWJlbEVsZW0iLCJfcyRjbGFzc0xpc3QiLCJpbm5lckhUTUwiLCJhc3NpZ24iLCJhZGQiLCJ0ZXN0SWQiLCJjcmVhdGVTdWNjZXNzTGFiZWxFbGVtIiwiX3MkY2xhc3NMaXN0MiIsInN1Y2Nlc3NMYWJlbFN0eWxlIiwicmVuZGVyRXJyb3JzQ29udGFpbmVyIiwiZXJyb3JzQ29udGFpbmVyIiwicmVuZGVyR3JvdXBMYWJlbCIsInJlbmRlckZpZWxkTGFiZWwiLCJwYXJlbnRFbGVtZW50IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwic2hvd0xhYmVscyIsIl90aGlzMTUiLCJzaG93RXJyb3JzIiwic2hvd1N1Y2Nlc3NMYWJlbHMiLCJfZCRlbGVtJGNsYXNzTGlzdDIiLCJfZCRlbGVtJGNsYXNzTGlzdCIsIl90aGlzMTYiLCJfZSRjbGFzc0xpc3QiLCJfZSRjbGFzc0xpc3QyIiwiZGVzdHJveSIsIl90aGlzMTciLCJfdGhpczE4Iiwic2V0Q3VycmVudExvY2FsZSIsIm9uU3VjY2VzcyIsIm9uRmFpbCIsIm9uVmFsaWRhdGUiLCJ0b2dnbGUiLCJlbHMiLCJlbCIsImlubmVyV2lkdGgiLCJsb2ciLCJlbWFpbCIsInNlbmQiLCJsb2NhdGlvbiIsImhyZWYiLCJ2YWxpZGF0b3JOZXdzbGV0dGVyIiwidmFsaWRhdG9yQ29udGFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBQ0MsTUFBTSxDQUFDQyxjQUFjO0VBQUNDLGVBQWUsR0FBQyxTQUFoQkEsZUFBZUEsQ0FBRUMsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUM7SUFBQSxPQUFHRCxDQUFDLElBQUlELENBQUMsR0FBQ0osU0FBUyxDQUFDSSxDQUFDLEVBQUNDLENBQUMsRUFBQztNQUFDRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO01BQUNDLFlBQVksRUFBQyxDQUFDLENBQUM7TUFBQ0MsUUFBUSxFQUFDLENBQUMsQ0FBQztNQUFDQyxLQUFLLEVBQUNKO0lBQUMsQ0FBQyxDQUFDLEdBQUNGLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEdBQUNDLENBQUM7RUFBQTtFQUFDSyxhQUFhLEdBQUMsU0FBZEEsYUFBYUEsQ0FBRVAsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUM7SUFBQSxPQUFJSCxlQUFlLENBQUNDLENBQUMsRUFBQyxRQUFRLElBQUFRLE9BQUEs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QTtNQUFDNUQsYUFBYSxDQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLEVBQUNBLGFBQWEsQ0FBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNBLGFBQWEsQ0FBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNBLGFBQWEsQ0FBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNBLGFBQWEsQ0FBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNBLGFBQWEsQ0FBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNBLGFBQWEsQ0FBQyxJQUFJLEVBQUMsY0FBYyxFQUFDK0MsQ0FBQyxDQUFDLEVBQUMvQyxhQUFhLENBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDQSxhQUFhLENBQUMsSUFBSSxFQUFDLGVBQWUsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDQSxhQUFhLENBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLEVBQUUsQ0FBQyxFQUFDQSxhQUFhLENBQUMsSUFBSSxFQUFDLFlBQVksRUFBQzhCLENBQUMsQ0FBQyxFQUFDOUIsYUFBYSxDQUFDLElBQUksRUFBQyxlQUFlLEVBQUMsSUFBSSxDQUFDLEVBQUNBLGFBQWEsQ0FBQyxJQUFJLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ0EsYUFBYSxDQUFDLElBQUksRUFBQyxtQkFBbUIsQ0FBQyxFQUFDQSxhQUFhLENBQUMsSUFBSSxFQUFDLGdCQUFnQixDQUFDLEVBQUNBLGFBQWEsQ0FBQyxJQUFJLEVBQUMsb0JBQW9CLENBQUMsRUFBQ0EsYUFBYSxDQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsRUFBRSxDQUFDLEVBQUNBLGFBQWEsQ0FBQyxJQUFJLEVBQUMsb0JBQW9CLENBQUMsRUFBQ0EsYUFBYSxDQUFDLElBQUksRUFBQyxjQUFjLENBQUMsRUFBQ0EsYUFBYSxDQUFD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YSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQzlDO0lBQ0VrQixJQUFJLEVBQUUsVUFBVTtJQUNoQkYsWUFBWSxFQUFFO0VBQ2hCLENBQUMsRUFDRDtJQUNFRSxJQUFJLEVBQUUsV0FBVztJQUNqQnhJLEtBQUssRUFBRSxDQUFDO0lBQ1JzSSxZQUFZLEVBQUU7RUFDaEIsQ0FBQyxFQUNEO0lBQ0VFLElBQUksRUFBRSxXQUFXO0lBQ2pCeEksS0FBSyxFQUFFLEVBQUU7SUFDVHNJLFlBQVksRUFBRTtFQUNoQixDQUFDLENBQ0YsQ0FBQyxDQUNEbUYsUUFBUSxDQUFDcEcsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FDL0M7SUFDRWtCLElBQUksRUFBRSxVQUFVO0lBQ2hCRixZQUFZLEVBQUU7RUFDaEIsQ0FBQyxFQUNEO0lBQ0VFLElBQUksRUFBRSxVQUFVO0lBQ2hCRixZQUFZLEVBQUU7RUFDaEIsQ0FBQyxFQUNEO0lBQ0VFLElBQUksRUFBRSxPQUFPO0lBQ2JGLFlBQVksRUFBRTtFQUNoQixDQUFDLENBQ0YsQ0FBQztBQUNOLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19kZWZQcm9wPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSxfX2RlZk5vcm1hbFByb3A9KGUsaSx0KT0+aSBpbiBlP19fZGVmUHJvcChlLGkse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KTplW2ldPXQsX19wdWJsaWNGaWVsZD0oZSxpLHQpPT4oX19kZWZOb3JtYWxQcm9wKGUsXCJzeW1ib2xcIiE9dHlwZW9mIGk/aStcIlwiOmksdCksdCk7IWZ1bmN0aW9uKGUsaSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9aSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoaSk6KGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczplfHxzZWxmKS5KdXN0VmFsaWRhdGU9aSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2NvbnN0IGU9L14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyxpPS9eLT9bMC05XVxcZCokLyx0PS9eKD89LipbQS1aYS16XSkoPz0uKlxcZCkuezgsfSQvLHM9L14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipcXGQpKD89LipbQCQhJSo/Jl0pW0EtWmEtelxcZEAkISUqPyZdezgsfSQvLGw9ZT0+XCJzdHJpbmdcIiE9dHlwZW9mIGV8fFwiXCI9PT1lO3ZhciByPShlPT4oZS5SZXF1aXJlZD1cInJlcXVpcmVkXCIsZS5FbWFpbD1cImVtYWlsXCIsZS5NaW5MZW5ndGg9XCJtaW5MZW5ndGhcIixlLk1heExlbmd0aD1cIm1heExlbmd0aFwiLGUuUGFzc3dvcmQ9XCJwYXNzd29yZFwiLGUuTnVtYmVyPVwibnVtYmVyXCIsZS5JbnRlZ2VyPVwiaW50ZWdlclwiLGUuTWF4TnVtYmVyPVwibWF4TnVtYmVyXCIsZS5NaW5OdW1iZXI9XCJtaW5OdW1iZXJcIixlLlN0cm9uZ1Bhc3N3b3JkPVwic3Ryb25nUGFzc3dvcmRcIixlLkN1c3RvbVJlZ2V4cD1cImN1c3RvbVJlZ2V4cFwiLGUuTWluRmlsZXNDb3VudD1cIm1pbkZpbGVzQ291bnRcIixlLk1heEZpbGVzQ291bnQ9XCJtYXhGaWxlc0NvdW50XCIsZS5GaWxlcz1cImZpbGVzXCIsZSkpKHJ8fHt9KSxvPShlPT4oZS5SZXF1aXJlZD1cInJlcXVpcmVkXCIsZSkpKG98fHt9KSxhPShlPT4oZS5MYWJlbD1cImxhYmVsXCIsZS5MYWJlbEFycm93PVwibGFiZWxBcnJvd1wiLGUpKShhfHx7fSk7Y29uc3Qgbj1be2tleTpyLlJlcXVpcmVkLGRpY3Q6e2VuOlwiVGhlIGZpZWxkIGlzIHJlcXVpcmVkXCJ9fSx7a2V5OnIuRW1haWwsZGljdDp7ZW46XCJFbWFpbCBoYXMgaW52YWxpZCBmb3JtYXRcIn19LHtrZXk6ci5NYXhMZW5ndGgsZGljdDp7ZW46XCJUaGUgZmllbGQgbXVzdCBjb250YWluIGEgbWF4aW11bSBvZiA6dmFsdWUgY2hhcmFjdGVyc1wifX0se2tleTpyLk1pbkxlbmd0aCxkaWN0OntlbjpcIlRoZSBmaWVsZCBtdXN0IGNvbnRhaW4gYSBtaW5pbXVtIG9mIDp2YWx1ZSBjaGFyYWN0ZXJzXCJ9fSx7a2V5OnIuUGFzc3dvcmQsZGljdDp7ZW46XCJQYXNzd29yZCBtdXN0IGNvbnRhaW4gbWluaW11bSBlaWdodCBjaGFyYWN0ZXJzLCBhdCBsZWFzdCBvbmUgbGV0dGVyIGFuZCBvbmUgbnVtYmVyXCJ9fSx7a2V5OnIuU3Ryb25nUGFzc3dvcmQsZGljdDp7ZW46XCJQYXNzd29yZCBzaG91bGQgY29udGFpbiBtaW5pbXVtIGVpZ2h0IGNoYXJhY3RlcnMsIGF0IGxlYXN0IG9uZSB1cHBlcmNhc2UgbGV0dGVyLCBvbmUgbG93ZXJjYXNlIGxldHRlciwgb25lIG51bWJlciBhbmQgb25lIHNwZWNpYWwgY2hhcmFjdGVyXCJ9fSx7a2V5OnIuTnVtYmVyLGRpY3Q6e2VuOlwiVmFsdWUgc2hvdWxkIGJlIGEgbnVtYmVyXCJ9fSx7a2V5OnIuTWF4TnVtYmVyLGRpY3Q6e2VuOlwiTnVtYmVyIHNob3VsZCBiZSBsZXNzIG9yIGVxdWFsIHRoYW4gOnZhbHVlXCJ9fSx7a2V5OnIuTWluTnVtYmVyLGRpY3Q6e2VuOlwiTnVtYmVyIHNob3VsZCBiZSBtb3JlIG9yIGVxdWFsIHRoYW4gOnZhbHVlXCJ9fSx7a2V5OnIuTWluRmlsZXNDb3VudCxkaWN0OntlbjpcIkZpbGVzIGNvdW50IHNob3VsZCBiZSBtb3JlIG9yIGVxdWFsIHRoYW4gOnZhbHVlXCJ9fSx7a2V5OnIuTWF4RmlsZXNDb3VudCxkaWN0OntlbjpcIkZpbGVzIGNvdW50IHNob3VsZCBiZSBsZXNzIG9yIGVxdWFsIHRoYW4gOnZhbHVlXCJ9fSx7a2V5OnIuRmlsZXMsZGljdDp7ZW46XCJVcGxvYWRlZCBmaWxlcyBoYXZlIG9uZSBvciBzZXZlcmFsIGludmFsaWQgcHJvcGVydGllcyAoZXh0ZW5zaW9uL3NpemUvdHlwZSBldGMpLlwifX1dLGQ9ZT0+XCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPT1lJiZcInRoZW5cImluIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUudGhlbixjPWU9PkFycmF5LmlzQXJyYXkoZSk/ZS5maWx0ZXIoKGU9PmUubGVuZ3RoPjApKTpcInN0cmluZ1wiPT10eXBlb2YgZSYmZS50cmltKCk/Wy4uLmUuc3BsaXQoXCIgXCIpLmZpbHRlcigoZT0+ZS5sZW5ndGg+MCkpXTpbXSx1PWU9PmUgaW5zdGFuY2VvZiBFbGVtZW50fHxlIGluc3RhbmNlb2YgSFRNTERvY3VtZW50LGg9e2Vycm9yRmllbGRTdHlsZTp7Y29sb3I6XCIjYjgxMTExXCIsYm9yZGVyOlwiMXB4IHNvbGlkICNCODExMTFcIn0sZXJyb3JGaWVsZENzc0NsYXNzOlwianVzdC12YWxpZGF0ZS1lcnJvci1maWVsZFwiLHN1Y2Nlc3NGaWVsZENzc0NsYXNzOlwianVzdC12YWxpZGF0ZS1zdWNjZXNzLWZpZWxkXCIsZXJyb3JMYWJlbFN0eWxlOntjb2xvcjpcIiNiODExMTFcIn0sZXJyb3JMYWJlbENzc0NsYXNzOlwianVzdC12YWxpZGF0ZS1lcnJvci1sYWJlbFwiLHN1Y2Nlc3NMYWJlbENzc0NsYXNzOlwianVzdC12YWxpZGF0ZS1zdWNjZXNzLWxhYmVsXCIsZm9jdXNJbnZhbGlkRmllbGQ6ITAsbG9ja0Zvcm06ITAsdGVzdGluZ01vZGU6ITEsdmFsaWRhdGVCZWZvcmVTdWJtaXR0aW5nOiExfTtyZXR1cm4gY2xhc3N7Y29uc3RydWN0b3IoZSxpLHQpe19fcHVibGljRmllbGQodGhpcyxcImZvcm1cIixudWxsKSxfX3B1YmxpY0ZpZWxkKHRoaXMsXCJmaWVsZHNcIix7fSksX19wdWJsaWNGaWVsZCh0aGlzLFwiZ3JvdXBGaWVsZHNcIix7fSksX19wdWJsaWNGaWVsZCh0aGlzLFwiZXJyb3JzXCIse30pLF9fcHVibGljRmllbGQodGhpcyxcImlzVmFsaWRcIiwhMSksX19wdWJsaWNGaWVsZCh0aGlzLFwiaXNTdWJtaXR0ZWRcIiwhMSksX19wdWJsaWNGaWVsZCh0aGlzLFwiZ2xvYmFsQ29uZmlnXCIsaCksX19wdWJsaWNGaWVsZCh0aGlzLFwiZXJyb3JMYWJlbHNcIix7fSksX19wdWJsaWNGaWVsZCh0aGlzLFwic3VjY2Vzc0xhYmVsc1wiLHt9KSxfX3B1YmxpY0ZpZWxkKHRoaXMsXCJldmVudExpc3RlbmVyc1wiLFtdKSxfX3B1YmxpY0ZpZWxkKHRoaXMsXCJkaWN0TG9jYWxlXCIsbiksX19wdWJsaWNGaWVsZCh0aGlzLFwiY3VycmVudExvY2FsZVwiLFwiZW5cIiksX19wdWJsaWNGaWVsZCh0aGlzLFwiY3VzdG9tU3R5bGVUYWdzXCIse30pLF9fcHVibGljRmllbGQodGhpcyxcIm9uU3VjY2Vzc0NhbGxiYWNrXCIpLF9fcHVibGljRmllbGQodGhpcyxcIm9uRmFpbENhbGxiYWNrXCIpLF9fcHVibGljRmllbGQodGhpcyxcIm9uVmFsaWRhdGVDYWxsYmFja1wiKSxfX3B1YmxpY0ZpZWxkKHRoaXMsXCJ0b29sdGlwc1wiLFtdKSxfX3B1YmxpY0ZpZWxkKHRoaXMsXCJsYXN0U2Nyb2xsUG9zaXRpb25cIiksX19wdWJsaWNGaWVsZCh0aGlzLFwiaXNTY3JvbGxUaWNrXCIpLF9fcHVibGljRmllbGQodGhpcyxcImZpZWxkSWRzXCIsbmV3IE1hcCksX19wdWJsaWNGaWVsZCh0aGlzLFwiZ2V0S2V5QnlGaWVsZFNlbGVjdG9yXCIsKGU9PnRoaXMuZmllbGRJZHMuZ2V0KGUpKSksX19wdWJsaWNGaWVsZCh0aGlzLFwiZ2V0RmllbGRTZWxlY3RvckJ5S2V5XCIsKGU9Pntmb3IoY29uc3RbaSx0XW9mIHRoaXMuZmllbGRJZHMpaWYoZT09PXQpcmV0dXJuIGl9KSksX19wdWJsaWNGaWVsZCh0aGlzLFwiZ2V0Q29tcGF0aWJsZUZpZWxkc1wiLCgoKT0+e2NvbnN0IGU9e307cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZmllbGRzKS5mb3JFYWNoKChpPT57bGV0IHQ9aTtjb25zdCBzPXRoaXMuZ2V0RmllbGRTZWxlY3RvckJ5S2V5KGkpO1wic3RyaW5nXCI9PXR5cGVvZiBzJiYodD1zKSxlW3RdPXsuLi50aGlzLmZpZWxkc1tpXX19KSksZX0pKSxfX3B1YmxpY0ZpZWxkKHRoaXMsXCJzZXRLZXlCeUZpZWxkU2VsZWN0b3JcIiwoZT0+e2lmKHRoaXMuZmllbGRJZHMuaGFzKGUpKXJldHVybiB0aGlzLmZpZWxkSWRzLmdldChlKTtjb25zdCBpPVN0cmluZyh0aGlzLmZpZWxkSWRzLnNpemUrMSk7cmV0dXJuIHRoaXMuZmllbGRJZHMuc2V0KGUsaSksaX0pKSxfX3B1YmxpY0ZpZWxkKHRoaXMsXCJyZWZyZXNoQWxsVG9vbHRpcHNcIiwoKCk9Pnt0aGlzLnRvb2x0aXBzLmZvckVhY2goKGU9PntlLnJlZnJlc2goKX0pKX0pKSxfX3B1YmxpY0ZpZWxkKHRoaXMsXCJoYW5kbGVEb2N1bWVudFNjcm9sbFwiLCgoKT0+e3RoaXMubGFzdFNjcm9sbFBvc2l0aW9uPXdpbmRvdy5zY3JvbGxZLHRoaXMuaXNTY3JvbGxUaWNrfHwod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKCk9Pnt0aGlzLnJlZnJlc2hBbGxUb29sdGlwcygpLHRoaXMuaXNTY3JvbGxUaWNrPSExfSkpLHRoaXMuaXNTY3JvbGxUaWNrPSEwKX0pKSxfX3B1YmxpY0ZpZWxkKHRoaXMsXCJmb3JtU3VibWl0SGFuZGxlclwiLChlPT57ZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuaXNTdWJtaXR0ZWQ9ITAsdGhpcy52YWxpZGF0ZUhhbmRsZXIoZSl9KSksX19wdWJsaWNGaWVsZCh0aGlzLFwiaGFuZGxlRmllbGRDaGFuZ2VcIiwoZT0+e2xldCBpO2Zvcihjb25zdCB0IGluIHRoaXMuZmllbGRzKXtpZih0aGlzLmZpZWxkc1t0XS5lbGVtPT09ZSl7aT10O2JyZWFrfX1pJiYodGhpcy5maWVsZHNbaV0udG91Y2hlZD0hMCx0aGlzLnZhbGlkYXRlRmllbGQoaSwhMCkpfSkpLF9fcHVibGljRmllbGQodGhpcyxcImhhbmRsZUdyb3VwQ2hhbmdlXCIsKGU9PntsZXQgaTtmb3IoY29uc3QgdCBpbiB0aGlzLmdyb3VwRmllbGRzKXtpZih0aGlzLmdyb3VwRmllbGRzW3RdLmVsZW1zLmZpbmQoKGk9Pmk9PT1lKSkpe2k9dDticmVha319aSYmKHRoaXMuZ3JvdXBGaWVsZHNbaV0udG91Y2hlZD0hMCx0aGlzLnZhbGlkYXRlR3JvdXAoaSwhMCkpfSkpLF9fcHVibGljRmllbGQodGhpcyxcImhhbmRsZXJDaGFuZ2VcIiwoZT0+e2UudGFyZ2V0JiYodGhpcy5oYW5kbGVGaWVsZENoYW5nZShlLnRhcmdldCksdGhpcy5oYW5kbGVHcm91cENoYW5nZShlLnRhcmdldCksdGhpcy5yZW5kZXJFcnJvcnMoKSl9KSksdGhpcy5pbml0aWFsaXplKGUsaSx0KX1pbml0aWFsaXplKGUsaSx0KXtpZih0aGlzLmZvcm09bnVsbCx0aGlzLmVycm9ycz17fSx0aGlzLmlzVmFsaWQ9ITEsdGhpcy5pc1N1Ym1pdHRlZD0hMSx0aGlzLmdsb2JhbENvbmZpZz1oLHRoaXMuZXJyb3JMYWJlbHM9e30sdGhpcy5zdWNjZXNzTGFiZWxzPXt9LHRoaXMuZXZlbnRMaXN0ZW5lcnM9W10sdGhpcy5jdXN0b21TdHlsZVRhZ3M9e30sdGhpcy50b29sdGlwcz1bXSx0aGlzLmN1cnJlbnRMb2NhbGU9XCJlblwiLFwic3RyaW5nXCI9PXR5cGVvZiBlKXtjb25zdCBpPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSk7aWYoIWkpdGhyb3cgRXJyb3IoYEZvcm0gd2l0aCAke2V9IHNlbGVjdG9yIG5vdCBmb3VuZCEgUGxlYXNlIGNoZWNrIHRoZSBmb3JtIHNlbGVjdG9yYCk7dGhpcy5zZXRGb3JtKGkpfWVsc2V7aWYoIShlIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSl0aHJvdyBFcnJvcihcIkZvcm0gc2VsZWN0b3IgaXMgbm90IHZhbGlkLiBQbGVhc2Ugc3BlY2lmeSBhIHN0cmluZyBzZWxlY3RvciBvciBhIERPTSBlbGVtZW50LlwiKTt0aGlzLnNldEZvcm0oZSl9aWYodGhpcy5nbG9iYWxDb25maWc9ey4uLmgsLi4uaX0sdCYmKHRoaXMuZGljdExvY2FsZT1bLi4udCwuLi5uXSksdGhpcy5pc1Rvb2x0aXAoKSl7Y29uc3QgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7ZS50ZXh0Q29udGVudD1cIi5qdXN0LXZhbGlkYXRlLWVycm9yLWxhYmVsW2RhdGEtdG9vbHRpcD10cnVlXXtwb3NpdGlvbjpmaXhlZDtwYWRkaW5nOjRweCA4cHg7YmFja2dyb3VuZDojNDIzZjNmO2NvbG9yOiNmZmY7d2hpdGUtc3BhY2U6bm93cmFwO3otaW5kZXg6MTA7Ym9yZGVyLXJhZGl1czo0cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTVweCl9Lmp1c3QtdmFsaWRhdGUtZXJyb3ItbGFiZWxbZGF0YS10b29sdGlwPXRydWVdOmJlZm9yZXtjb250ZW50OicnO3dpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyLWxlZnQ6c29saWQgNXB4IHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDpzb2xpZCA1cHggdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbTpzb2xpZCA1cHggIzQyM2YzZjtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjM7ZGlzcGxheTpibG9jaztib3R0b206LTVweDt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7bGVmdDpjYWxjKDUwJSAtIDVweCl9Lmp1c3QtdmFsaWRhdGUtZXJyb3ItbGFiZWxbZGF0YS10b29sdGlwPXRydWVdW2RhdGEtZGlyZWN0aW9uPWxlZnRde3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01cHgpfS5qdXN0LXZhbGlkYXRlLWVycm9yLWxhYmVsW2RhdGEtdG9vbHRpcD10cnVlXVtkYXRhLWRpcmVjdGlvbj1sZWZ0XTpiZWZvcmV7cmlnaHQ6LTdweDtib3R0b206YXV0bztsZWZ0OmF1dG87dG9wOmNhbGMoNTAlIC0gMnB4KTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0uanVzdC12YWxpZGF0ZS1lcnJvci1sYWJlbFtkYXRhLXRvb2x0aXA9dHJ1ZV1bZGF0YS1kaXJlY3Rpb249cmlnaHRde3RyYW5zZm9ybTp0cmFuc2xhdGVYKDVweCl9Lmp1c3QtdmFsaWRhdGUtZXJyb3ItbGFiZWxbZGF0YS10b29sdGlwPXRydWVdW2RhdGEtZGlyZWN0aW9uPXJpZ2h0XTpiZWZvcmV7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0Oi03cHg7dG9wOmNhbGMoNTAlIC0gMnB4KTt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyl9Lmp1c3QtdmFsaWRhdGUtZXJyb3ItbGFiZWxbZGF0YS10b29sdGlwPXRydWVdW2RhdGEtZGlyZWN0aW9uPWJvdHRvbV17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNXB4KX0uanVzdC12YWxpZGF0ZS1lcnJvci1sYWJlbFtkYXRhLXRvb2x0aXA9dHJ1ZV1bZGF0YS1kaXJlY3Rpb249Ym90dG9tXTpiZWZvcmV7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OmNhbGMoNTAlIC0gNXB4KTt0b3A6LTVweDt0cmFuc2Zvcm06cm90YXRlKDApfVwiLHRoaXMuY3VzdG9tU3R5bGVUYWdzW2EuTGFiZWxdPWRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZSksdGhpcy5hZGRMaXN0ZW5lcihcInNjcm9sbFwiLGRvY3VtZW50LHRoaXMuaGFuZGxlRG9jdW1lbnRTY3JvbGwpfX1nZXRMb2NhbGlzZWRTdHJpbmcoZSxpLHQpe3ZhciBzO2NvbnN0IGw9bnVsbCE9dD90OmU7bGV0IG89bnVsbD09KHM9dGhpcy5kaWN0TG9jYWxlLmZpbmQoKGU9PmUua2V5PT09bCkpKT92b2lkIDA6cy5kaWN0W3RoaXMuY3VycmVudExvY2FsZV07aWYob3x8dCYmKG89dCksbyYmdm9pZCAwIT09aSlzd2l0Y2goZSl7Y2FzZSByLk1heExlbmd0aDpjYXNlIHIuTWluTGVuZ3RoOmNhc2Ugci5NYXhOdW1iZXI6Y2FzZSByLk1pbk51bWJlcjpjYXNlIHIuTWluRmlsZXNDb3VudDpjYXNlIHIuTWF4RmlsZXNDb3VudDpvPW8ucmVwbGFjZShcIjp2YWx1ZVwiLFN0cmluZyhpKSl9cmV0dXJuIG98fHR8fFwiVmFsdWUgaXMgaW5jb3JyZWN0XCJ9Z2V0RmllbGRFcnJvck1lc3NhZ2UoZSxpKXtjb25zdCB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGUuZXJyb3JNZXNzYWdlP2UuZXJyb3JNZXNzYWdlKHRoaXMuZ2V0RWxlbVZhbHVlKGkpLHRoaXMuZmllbGRzKTplLmVycm9yTWVzc2FnZTtyZXR1cm4gdGhpcy5nZXRMb2NhbGlzZWRTdHJpbmcoZS5ydWxlLGUudmFsdWUsdCl9Z2V0RmllbGRTdWNjZXNzTWVzc2FnZShlLGkpe2NvbnN0IHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lKHRoaXMuZ2V0RWxlbVZhbHVlKGkpLHRoaXMuZmllbGRzKTplO3JldHVybiB0aGlzLmdldExvY2FsaXNlZFN0cmluZyh2b2lkIDAsdm9pZCAwLHQpfWdldEdyb3VwRXJyb3JNZXNzYWdlKGUpe3JldHVybiB0aGlzLmdldExvY2FsaXNlZFN0cmluZyhlLnJ1bGUsdm9pZCAwLGUuZXJyb3JNZXNzYWdlKX1nZXRHcm91cFN1Y2Nlc3NNZXNzYWdlKGUpe2lmKGUuc3VjY2Vzc01lc3NhZ2UpcmV0dXJuIHRoaXMuZ2V0TG9jYWxpc2VkU3RyaW5nKHZvaWQgMCx2b2lkIDAsZS5zdWNjZXNzTWVzc2FnZSl9c2V0RmllbGRJbnZhbGlkKGUsaSl7dGhpcy5maWVsZHNbZV0uaXNWYWxpZD0hMSx0aGlzLmZpZWxkc1tlXS5lcnJvck1lc3NhZ2U9dGhpcy5nZXRGaWVsZEVycm9yTWVzc2FnZShpLHRoaXMuZmllbGRzW2VdLmVsZW0pfXNldEZpZWxkVmFsaWQoZSxpKXt0aGlzLmZpZWxkc1tlXS5pc1ZhbGlkPSEwLHZvaWQgMCE9PWkmJih0aGlzLmZpZWxkc1tlXS5zdWNjZXNzTWVzc2FnZT10aGlzLmdldEZpZWxkU3VjY2Vzc01lc3NhZ2UoaSx0aGlzLmZpZWxkc1tlXS5lbGVtKSl9c2V0R3JvdXBJbnZhbGlkKGUsaSl7dGhpcy5ncm91cEZpZWxkc1tlXS5pc1ZhbGlkPSExLHRoaXMuZ3JvdXBGaWVsZHNbZV0uZXJyb3JNZXNzYWdlPXRoaXMuZ2V0R3JvdXBFcnJvck1lc3NhZ2UoaSl9c2V0R3JvdXBWYWxpZChlLGkpe3RoaXMuZ3JvdXBGaWVsZHNbZV0uaXNWYWxpZD0hMCx0aGlzLmdyb3VwRmllbGRzW2VdLnN1Y2Nlc3NNZXNzYWdlPXRoaXMuZ2V0R3JvdXBTdWNjZXNzTWVzc2FnZShpKX1nZXRFbGVtVmFsdWUoZSl7c3dpdGNoKGUudHlwZSl7Y2FzZVwiY2hlY2tib3hcIjpyZXR1cm4gZS5jaGVja2VkO2Nhc2VcImZpbGVcIjpyZXR1cm4gZS5maWxlcztkZWZhdWx0OnJldHVybiBlLnZhbHVlfX12YWxpZGF0ZUdyb3VwUnVsZShlLGksdCl7aWYodC5ydWxlPT09by5SZXF1aXJlZClpLmV2ZXJ5KChlPT4hZS5jaGVja2VkKSk/dGhpcy5zZXRHcm91cEludmFsaWQoZSx0KTp0aGlzLnNldEdyb3VwVmFsaWQoZSx0KX12YWxpZGF0ZUZpZWxkUnVsZShvLGEsbixjPSExKXtjb25zdCB1PW4udmFsdWUsaD10aGlzLmdldEVsZW1WYWx1ZShhKTtpZihuLnBsdWdpbil7bi5wbHVnaW4oaCx0aGlzLmdldENvbXBhdGlibGVGaWVsZHMoKSl8fHRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbil9ZWxzZXtzd2l0Y2gobi5ydWxlKXtjYXNlIHIuUmVxdWlyZWQ6KGU9PntsZXQgaT1lO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYoaT1lLnRyaW0oKSksIWl9KShoKSYmdGhpcy5zZXRGaWVsZEludmFsaWQobyxuKTticmVhaztjYXNlIHIuRW1haWw6aWYobChoKSlicmVhaztmPWgsZS50ZXN0KGYpfHx0aGlzLnNldEZpZWxkSW52YWxpZChvLG4pO2JyZWFrO2Nhc2Ugci5NYXhMZW5ndGg6aWYodm9pZCAwPT09dSl7Y29uc29sZS5lcnJvcihgVmFsdWUgZm9yICR7bi5ydWxlfSBydWxlIGZvciBbJHtvfV0gZmllbGQgaXMgbm90IGRlZmluZWQuIFRoZSBmaWVsZCB3aWxsIGJlIGFsd2F5cyBpbnZhbGlkLmApLHRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbik7YnJlYWt9aWYoXCJudW1iZXJcIiE9dHlwZW9mIHUpe2NvbnNvbGUuZXJyb3IoYFZhbHVlIGZvciAke24ucnVsZX0gcnVsZSBmb3IgWyR7b31dIHNob3VsZCBiZSBhIG51bWJlci4gVGhlIGZpZWxkIHdpbGwgYmUgYWx3YXlzIGludmFsaWQuYCksdGhpcy5zZXRGaWVsZEludmFsaWQobyxuKTticmVha31pZihsKGgpKWJyZWFrOygoZSxpKT0+ZS5sZW5ndGg+aSkoaCx1KSYmdGhpcy5zZXRGaWVsZEludmFsaWQobyxuKTticmVhaztjYXNlIHIuTWluTGVuZ3RoOmlmKHZvaWQgMD09PXUpe2NvbnNvbGUuZXJyb3IoYFZhbHVlIGZvciAke24ucnVsZX0gcnVsZSBmb3IgWyR7b31dIGZpZWxkIGlzIG5vdCBkZWZpbmVkLiBUaGUgZmllbGQgd2lsbCBiZSBhbHdheXMgaW52YWxpZC5gKSx0aGlzLnNldEZpZWxkSW52YWxpZChvLG4pO2JyZWFrfWlmKFwibnVtYmVyXCIhPXR5cGVvZiB1KXtjb25zb2xlLmVycm9yKGBWYWx1ZSBmb3IgJHtuLnJ1bGV9IHJ1bGUgZm9yIFske299XSBzaG91bGQgYmUgYSBudW1iZXIuIFRoZSBmaWVsZCB3aWxsIGJlIGFsd2F5cyBpbnZhbGlkLmApLHRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbik7YnJlYWt9aWYobChoKSlicmVhazsoKGUsaSk9PmUubGVuZ3RoPGkpKGgsdSkmJnRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbik7YnJlYWs7Y2FzZSByLlBhc3N3b3JkOmlmKGwoaCkpYnJlYWs7KGU9PnQudGVzdChlKSkoaCl8fHRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbik7YnJlYWs7Y2FzZSByLlN0cm9uZ1Bhc3N3b3JkOmlmKGwoaCkpYnJlYWs7KGU9PnMudGVzdChlKSkoaCl8fHRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbik7YnJlYWs7Y2FzZSByLk51bWJlcjppZihsKGgpKWJyZWFrOyhlPT5cInN0cmluZ1wiPT10eXBlb2YgZSYmIWlzTmFOKCtlKSYmIWlzTmFOKHBhcnNlRmxvYXQoZSkpKShoKXx8dGhpcy5zZXRGaWVsZEludmFsaWQobyxuKTticmVhaztjYXNlIHIuSW50ZWdlcjppZihsKGgpKWJyZWFrOyhlPT5pLnRlc3QoZSkpKGgpfHx0aGlzLnNldEZpZWxkSW52YWxpZChvLG4pO2JyZWFrO2Nhc2Ugci5NYXhOdW1iZXI6e2lmKHZvaWQgMD09PXUpe2NvbnNvbGUuZXJyb3IoYFZhbHVlIGZvciAke24ucnVsZX0gcnVsZSBmb3IgWyR7b31dIGZpZWxkIGlzIG5vdCBkZWZpbmVkLiBUaGUgZmllbGQgd2lsbCBiZSBhbHdheXMgaW52YWxpZC5gKSx0aGlzLnNldEZpZWxkSW52YWxpZChvLG4pO2JyZWFrfWlmKFwibnVtYmVyXCIhPXR5cGVvZiB1KXtjb25zb2xlLmVycm9yKGBWYWx1ZSBmb3IgJHtuLnJ1bGV9IHJ1bGUgZm9yIFske299XSBmaWVsZCBzaG91bGQgYmUgYSBudW1iZXIuIFRoZSBmaWVsZCB3aWxsIGJlIGFsd2F5cyBpbnZhbGlkLmApLHRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbik7YnJlYWt9aWYobChoKSlicmVhaztjb25zdCBlPStoOyhOdW1iZXIuaXNOYU4oZSl8fCgoZSxpKT0+ZT5pKShlLHUpKSYmdGhpcy5zZXRGaWVsZEludmFsaWQobyxuKTticmVha31jYXNlIHIuTWluTnVtYmVyOntpZih2b2lkIDA9PT11KXtjb25zb2xlLmVycm9yKGBWYWx1ZSBmb3IgJHtuLnJ1bGV9IHJ1bGUgZm9yIFske299XSBmaWVsZCBpcyBub3QgZGVmaW5lZC4gVGhlIGZpZWxkIHdpbGwgYmUgYWx3YXlzIGludmFsaWQuYCksdGhpcy5zZXRGaWVsZEludmFsaWQobyxuKTticmVha31pZihcIm51bWJlclwiIT10eXBlb2YgdSl7Y29uc29sZS5lcnJvcihgVmFsdWUgZm9yICR7bi5ydWxlfSBydWxlIGZvciBbJHtvfV0gZmllbGQgc2hvdWxkIGJlIGEgbnVtYmVyLiBUaGUgZmllbGQgd2lsbCBiZSBhbHdheXMgaW52YWxpZC5gKSx0aGlzLnNldEZpZWxkSW52YWxpZChvLG4pO2JyZWFrfWlmKGwoaCkpYnJlYWs7Y29uc3QgZT0raDsoTnVtYmVyLmlzTmFOKGUpfHwoKGUsaSk9PmU8aSkoZSx1KSkmJnRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbik7YnJlYWt9Y2FzZSByLkN1c3RvbVJlZ2V4cDp7aWYodm9pZCAwPT09dSlyZXR1cm4gY29uc29sZS5lcnJvcihgVmFsdWUgZm9yICR7bi5ydWxlfSBydWxlIGZvciBbJHtvfV0gZmllbGQgaXMgbm90IGRlZmluZWQuIFRoaXMgZmllbGQgd2lsbCBiZSBhbHdheXMgaW52YWxpZC5gKSx2b2lkIHRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbik7bGV0IGU7dHJ5e2U9bmV3IFJlZ0V4cCh1KX1jYXRjaChiKXtjb25zb2xlLmVycm9yKGBWYWx1ZSBmb3IgJHtuLnJ1bGV9IHJ1bGUgZm9yIFske299XSBzaG91bGQgYmUgYSB2YWxpZCByZWdleHAuIFRoaXMgZmllbGQgd2lsbCBiZSBhbHdheXMgaW52YWxpZC5gKSx0aGlzLnNldEZpZWxkSW52YWxpZChvLG4pO2JyZWFrfWNvbnN0IGk9U3RyaW5nKGgpO1wiXCI9PT1pfHxlLnRlc3QoaSl8fHRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbik7YnJlYWt9Y2FzZSByLk1pbkZpbGVzQ291bnQ6aWYodm9pZCAwPT09dSl7Y29uc29sZS5lcnJvcihgVmFsdWUgZm9yICR7bi5ydWxlfSBydWxlIGZvciBbJHtvfV0gZmllbGQgaXMgbm90IGRlZmluZWQuIFRoaXMgZmllbGQgd2lsbCBiZSBhbHdheXMgaW52YWxpZC5gKSx0aGlzLnNldEZpZWxkSW52YWxpZChvLG4pO2JyZWFrfWlmKFwibnVtYmVyXCIhPXR5cGVvZiB1KXtjb25zb2xlLmVycm9yKGBWYWx1ZSBmb3IgJHtuLnJ1bGV9IHJ1bGUgZm9yIFske299XSBmaWVsZCBzaG91bGQgYmUgYSBudW1iZXIuIFRoZSBmaWVsZCB3aWxsIGJlIGFsd2F5cyBpbnZhbGlkLmApLHRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbik7YnJlYWt9aWYoTnVtYmVyLmlzRmluaXRlKG51bGw9PWg/dm9pZCAwOmgubGVuZ3RoKSYmaC5sZW5ndGg8dSl7dGhpcy5zZXRGaWVsZEludmFsaWQobyxuKTticmVha31icmVhaztjYXNlIHIuTWF4RmlsZXNDb3VudDppZih2b2lkIDA9PT11KXtjb25zb2xlLmVycm9yKGBWYWx1ZSBmb3IgJHtuLnJ1bGV9IHJ1bGUgZm9yIFske299XSBmaWVsZCBpcyBub3QgZGVmaW5lZC4gVGhpcyBmaWVsZCB3aWxsIGJlIGFsd2F5cyBpbnZhbGlkLmApLHRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbik7YnJlYWt9aWYoXCJudW1iZXJcIiE9dHlwZW9mIHUpe2NvbnNvbGUuZXJyb3IoYFZhbHVlIGZvciAke24ucnVsZX0gcnVsZSBmb3IgWyR7b31dIGZpZWxkIHNob3VsZCBiZSBhIG51bWJlci4gVGhlIGZpZWxkIHdpbGwgYmUgYWx3YXlzIGludmFsaWQuYCksdGhpcy5zZXRGaWVsZEludmFsaWQobyxuKTticmVha31pZihOdW1iZXIuaXNGaW5pdGUobnVsbD09aD92b2lkIDA6aC5sZW5ndGgpJiZoLmxlbmd0aD51KXt0aGlzLnNldEZpZWxkSW52YWxpZChvLG4pO2JyZWFrfWJyZWFrO2Nhc2Ugci5GaWxlczp7aWYodm9pZCAwPT09dSlyZXR1cm4gY29uc29sZS5lcnJvcihgVmFsdWUgZm9yICR7bi5ydWxlfSBydWxlIGZvciBbJHtvfV0gZmllbGQgaXMgbm90IGRlZmluZWQuIFRoaXMgZmllbGQgd2lsbCBiZSBhbHdheXMgaW52YWxpZC5gKSx2b2lkIHRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbik7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHUpcmV0dXJuIGNvbnNvbGUuZXJyb3IoYFZhbHVlIGZvciAke24ucnVsZX0gcnVsZSBmb3IgWyR7b31dIGZpZWxkIHNob3VsZCBiZSBhbiBvYmplY3QuIFRoaXMgZmllbGQgd2lsbCBiZSBhbHdheXMgaW52YWxpZC5gKSx2b2lkIHRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbik7Y29uc3QgZT11LmZpbGVzO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlKXJldHVybiBjb25zb2xlLmVycm9yKGBWYWx1ZSBmb3IgJHtuLnJ1bGV9IHJ1bGUgZm9yIFske299XSBmaWVsZCBzaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggZmlsZXMgYXJyYXkuIFRoaXMgZmllbGQgd2lsbCBiZSBhbHdheXMgaW52YWxpZC5gKSx2b2lkIHRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbik7Y29uc3QgaT0oZSxpKT0+e2NvbnN0IHQ9TnVtYmVyLmlzRmluaXRlKGkubWluU2l6ZSkmJmUuc2l6ZTxpLm1pblNpemUscz1OdW1iZXIuaXNGaW5pdGUoaS5tYXhTaXplKSYmZS5zaXplPmkubWF4U2l6ZSxsPUFycmF5LmlzQXJyYXkoaS5uYW1lcykmJiFpLm5hbWVzLmluY2x1ZGVzKGUubmFtZSkscj1BcnJheS5pc0FycmF5KGkuZXh0ZW5zaW9ucykmJiFpLmV4dGVuc2lvbnMuaW5jbHVkZXMoZS5uYW1lLnNwbGl0KFwiLlwiKVtlLm5hbWUuc3BsaXQoXCIuXCIpLmxlbmd0aC0xXSksbz1BcnJheS5pc0FycmF5KGkudHlwZXMpJiYhaS50eXBlcy5pbmNsdWRlcyhlLnR5cGUpO3JldHVybiB0fHxzfHxsfHxyfHxvfTtpZihcIm9iamVjdFwiPT10eXBlb2YgaCYmbnVsbCE9PWgpZm9yKGxldCB0PTAscz1oLmxlbmd0aDt0PHM7Kyt0KXtjb25zdCBzPWguaXRlbSh0KTtpZighcyl7dGhpcy5zZXRGaWVsZEludmFsaWQobyxuKTticmVha31pZihpKHMsZSkpe3RoaXMuc2V0RmllbGRJbnZhbGlkKG8sbik7YnJlYWt9fWJyZWFrfWRlZmF1bHQ6e2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udmFsaWRhdG9yKXJldHVybiBjb25zb2xlLmVycm9yKGBWYWxpZGF0b3IgZm9yIGN1c3RvbSBydWxlIGZvciBbJHtvfV0gZmllbGQgc2hvdWxkIGJlIGEgZnVuY3Rpb24uIFRoaXMgZmllbGQgd2lsbCBiZSBhbHdheXMgaW52YWxpZC5gKSx2b2lkIHRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbik7Y29uc3QgZT1uLnZhbGlkYXRvcihoLHRoaXMuZ2V0Q29tcGF0aWJsZUZpZWxkcygpKTtpZihcImJvb2xlYW5cIiE9dHlwZW9mIGUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJmNvbnNvbGUuZXJyb3IoYFZhbGlkYXRvciByZXR1cm4gdmFsdWUgZm9yIFske299XSBmaWVsZCBzaG91bGQgYmUgYm9vbGVhbiBvciBmdW5jdGlvbi4gSXQgd2lsbCBiZSBjYXN0IHRvIGJvb2xlYW4uYCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSl7aWYoIWMpe3RoaXMuZmllbGRzW29dLmFzeW5jQ2hlY2tQZW5kaW5nPSExO2NvbnN0IGk9ZSgpO3JldHVybiBkKGkpP2kudGhlbigoZT0+e2V8fHRoaXMuc2V0RmllbGRJbnZhbGlkKG8sbil9KSkuY2F0Y2goKCgpPT57dGhpcy5zZXRGaWVsZEludmFsaWQobyxuKX0pKTooY29uc29sZS5lcnJvcihgVmFsaWRhdG9yIGZ1bmN0aW9uIGZvciBjdXN0b20gcnVsZSBmb3IgWyR7b31dIGZpZWxkIHNob3VsZCByZXR1cm4gYSBQcm9taXNlLiBUaGlzIGZpZWxkIHdpbGwgYmUgYWx3YXlzIGludmFsaWQuYCksdm9pZCB0aGlzLnNldEZpZWxkSW52YWxpZChvLG4pKX10aGlzLmZpZWxkc1tvXS5hc3luY0NoZWNrUGVuZGluZz0hMH1lfHx0aGlzLnNldEZpZWxkSW52YWxpZChvLG4pfX12YXIgZn19aXNGb3JtVmFsaWQoKXtsZXQgZT0hMDtmb3IobGV0IGk9MCx0PU9iamVjdC52YWx1ZXModGhpcy5maWVsZHMpLmxlbmd0aDtpPHQ7KytpKXtjb25zdCB0PU9iamVjdC52YWx1ZXModGhpcy5maWVsZHMpW2ldO2lmKHZvaWQgMD09PXQuaXNWYWxpZCl7ZT12b2lkIDA7YnJlYWt9aWYoITE9PT10LmlzVmFsaWQpe2U9ITE7YnJlYWt9fWZvcihsZXQgaT0wLHQ9T2JqZWN0LnZhbHVlcyh0aGlzLmdyb3VwRmllbGRzKS5sZW5ndGg7aTx0OysraSl7Y29uc3QgdD1PYmplY3QudmFsdWVzKHRoaXMuZ3JvdXBGaWVsZHMpW2ldO2lmKHZvaWQgMD09PXQuaXNWYWxpZCl7ZT12b2lkIDA7YnJlYWt9aWYoITE9PT10LmlzVmFsaWQpe2U9ITE7YnJlYWt9fXJldHVybiBlfXZhbGlkYXRlRmllbGQoZSxpPSExKXt2YXIgdDtjb25zdCBzPXRoaXMuZmllbGRzW2VdO3MuaXNWYWxpZD0hMDtjb25zdCBsPVtdO3JldHVyblsuLi5zLnJ1bGVzXS5yZXZlcnNlKCkuZm9yRWFjaCgodD0+e2NvbnN0IHI9dGhpcy52YWxpZGF0ZUZpZWxkUnVsZShlLHMuZWxlbSx0LGkpO2QocikmJmwucHVzaChyKX0pKSxzLmlzVmFsaWQmJnRoaXMuc2V0RmllbGRWYWxpZChlLG51bGw9PSh0PXMuY29uZmlnKT92b2lkIDA6dC5zdWNjZXNzTWVzc2FnZSksUHJvbWlzZS5hbGxTZXR0bGVkKGwpLmZpbmFsbHkoKCgpPT57dmFyIGU7aSYmKG51bGw9PShlPXRoaXMub25WYWxpZGF0ZUNhbGxiYWNrKXx8ZS5jYWxsKHRoaXMse2lzVmFsaWQ6dGhpcy5pc0Zvcm1WYWxpZCgpLGlzU3VibWl0dGVkOnRoaXMuaXNTdWJtaXR0ZWQsZmllbGRzOnRoaXMuZ2V0Q29tcGF0aWJsZUZpZWxkcygpLGdyb3Vwczp7Li4udGhpcy5ncm91cEZpZWxkc319KSl9KSl9cmV2YWxpZGF0ZUZpZWxkKGUpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlJiYhdShlKSl0aHJvdyBFcnJvcihcIkZpZWxkIHNlbGVjdG9yIGlzIG5vdCB2YWxpZC4gUGxlYXNlIHNwZWNpZnkgYSBzdHJpbmcgc2VsZWN0b3Igb3IgYSB2YWxpZCBET00gZWxlbWVudC5cIik7Y29uc3QgaT10aGlzLmdldEtleUJ5RmllbGRTZWxlY3RvcihlKTtyZXR1cm4gaSYmdGhpcy5maWVsZHNbaV0/bmV3IFByb21pc2UoKGU9Pnt0aGlzLnZhbGlkYXRlRmllbGQoaSwhMCkuZmluYWxseSgoKCk9Pnt0aGlzLmNsZWFyRmllbGRTdHlsZShpKSx0aGlzLmNsZWFyRmllbGRMYWJlbChpKSx0aGlzLnJlbmRlckZpZWxkRXJyb3IoaSwhMCksZSghIXRoaXMuZmllbGRzW2ldLmlzVmFsaWQpfSkpfSkpOihjb25zb2xlLmVycm9yKFwiRmllbGQgbm90IGZvdW5kLiBDaGVjayB0aGUgZmllbGQgc2VsZWN0b3IuXCIpLFByb21pc2UucmVqZWN0KCkpfXJldmFsaWRhdGVHcm91cChlKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSYmIXUoZSkpdGhyb3cgRXJyb3IoXCJHcm91cCBzZWxlY3RvciBpcyBub3QgdmFsaWQuIFBsZWFzZSBzcGVjaWZ5IGEgc3RyaW5nIHNlbGVjdG9yIG9yIGEgdmFsaWQgRE9NIGVsZW1lbnQuXCIpO2NvbnN0IGk9dGhpcy5nZXRLZXlCeUZpZWxkU2VsZWN0b3IoZSk7cmV0dXJuIGkmJnRoaXMuZ3JvdXBGaWVsZHNbaV0/bmV3IFByb21pc2UoKGU9Pnt0aGlzLnZhbGlkYXRlR3JvdXAoaSkuZmluYWxseSgoKCk9Pnt0aGlzLmNsZWFyRmllbGRMYWJlbChpKSx0aGlzLnJlbmRlckdyb3VwRXJyb3IoaSwhMCksZSghIXRoaXMuZ3JvdXBGaWVsZHNbaV0uaXNWYWxpZCl9KSl9KSk6KGNvbnNvbGUuZXJyb3IoXCJHcm91cCBub3QgZm91bmQuIENoZWNrIHRoZSBncm91cCBzZWxlY3Rvci5cIiksUHJvbWlzZS5yZWplY3QoKSl9dmFsaWRhdGVHcm91cChlLGk9ITEpe2NvbnN0IHQ9dGhpcy5ncm91cEZpZWxkc1tlXSxzPVtdO3JldHVyblsuLi50LnJ1bGVzXS5yZXZlcnNlKCkuZm9yRWFjaCgoaT0+e2NvbnN0IGw9dGhpcy52YWxpZGF0ZUdyb3VwUnVsZShlLHQuZWxlbXMsaSk7ZChsKSYmcy5wdXNoKGwpfSkpLFByb21pc2UuYWxsU2V0dGxlZChzKS5maW5hbGx5KCgoKT0+e3ZhciBlO2kmJihudWxsPT0oZT10aGlzLm9uVmFsaWRhdGVDYWxsYmFjayl8fGUuY2FsbCh0aGlzLHtpc1ZhbGlkOnRoaXMuaXNGb3JtVmFsaWQoKSxpc1N1Ym1pdHRlZDp0aGlzLmlzU3VibWl0dGVkLGZpZWxkczp0aGlzLmdldENvbXBhdGlibGVGaWVsZHMoKSxncm91cHM6ey4uLnRoaXMuZ3JvdXBGaWVsZHN9fSkpfSkpfWZvY3VzSW52YWxpZEZpZWxkKCl7Zm9yKGNvbnN0IGUgaW4gdGhpcy5maWVsZHMpe2NvbnN0IGk9dGhpcy5maWVsZHNbZV07aWYoIWkuaXNWYWxpZCl7c2V0VGltZW91dCgoKCk9PmkuZWxlbS5mb2N1cygpKSwwKTticmVha319fWFmdGVyU3VibWl0VmFsaWRhdGlvbihlPSExKXt0aGlzLnJlbmRlckVycm9ycyhlKSx0aGlzLmdsb2JhbENvbmZpZy5mb2N1c0ludmFsaWRGaWVsZCYmdGhpcy5mb2N1c0ludmFsaWRGaWVsZCgpfXZhbGlkYXRlKGU9ITEpe3JldHVybiBuZXcgUHJvbWlzZSgoaT0+e2NvbnN0IHQ9W107T2JqZWN0LmtleXModGhpcy5maWVsZHMpLmZvckVhY2goKGU9Pntjb25zdCBpPXRoaXMudmFsaWRhdGVGaWVsZChlKTtkKGkpJiZ0LnB1c2goaSl9KSksT2JqZWN0LmtleXModGhpcy5ncm91cEZpZWxkcykuZm9yRWFjaCgoZT0+e2NvbnN0IGk9dGhpcy52YWxpZGF0ZUdyb3VwKGUpO2QoaSkmJnQucHVzaChpKX0pKSxQcm9taXNlLmFsbFNldHRsZWQodCkudGhlbigoKCk9Pnt2YXIgczt0aGlzLmFmdGVyU3VibWl0VmFsaWRhdGlvbihlKSxudWxsPT0ocz10aGlzLm9uVmFsaWRhdGVDYWxsYmFjayl8fHMuY2FsbCh0aGlzLHtpc1ZhbGlkOnRoaXMuaXNGb3JtVmFsaWQoKSxpc1N1Ym1pdHRlZDp0aGlzLmlzU3VibWl0dGVkLGZpZWxkczp0aGlzLmdldENvbXBhdGlibGVGaWVsZHMoKSxncm91cHM6ey4uLnRoaXMuZ3JvdXBGaWVsZHN9fSksaSghIXQubGVuZ3RoKX0pKX0pKX1yZXZhbGlkYXRlKCl7cmV0dXJuIG5ldyBQcm9taXNlKChlPT57dGhpcy52YWxpZGF0ZUhhbmRsZXIodm9pZCAwLCEwKS5maW5hbGx5KCgoKT0+e3RoaXMuZ2xvYmFsQ29uZmlnLmZvY3VzSW52YWxpZEZpZWxkJiZ0aGlzLmZvY3VzSW52YWxpZEZpZWxkKCksZSh0aGlzLmlzVmFsaWQpfSkpfSkpfXZhbGlkYXRlSGFuZGxlcihlLGk9ITEpe3JldHVybiB0aGlzLmdsb2JhbENvbmZpZy5sb2NrRm9ybSYmdGhpcy5sb2NrRm9ybSgpLHRoaXMudmFsaWRhdGUoaSkuZmluYWxseSgoKCk9Pnt2YXIgaSx0O3RoaXMuZ2xvYmFsQ29uZmlnLmxvY2tGb3JtJiZ0aGlzLnVubG9ja0Zvcm0oKSx0aGlzLmlzVmFsaWQ/bnVsbD09KGk9dGhpcy5vblN1Y2Nlc3NDYWxsYmFjayl8fGkuY2FsbCh0aGlzLGUpOm51bGw9PSh0PXRoaXMub25GYWlsQ2FsbGJhY2spfHx0LmNhbGwodGhpcyx0aGlzLmdldENvbXBhdGlibGVGaWVsZHMoKSx0aGlzLmdyb3VwRmllbGRzKX0pKX1zZXRGb3JtKGUpe3RoaXMuZm9ybT1lLHRoaXMuZm9ybS5zZXRBdHRyaWJ1dGUoXCJub3ZhbGlkYXRlXCIsXCJub3ZhbGlkYXRlXCIpLHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJzdWJtaXRcIix0aGlzLmZvcm0sdGhpcy5mb3JtU3VibWl0SGFuZGxlciksdGhpcy5hZGRMaXN0ZW5lcihcInN1Ym1pdFwiLHRoaXMuZm9ybSx0aGlzLmZvcm1TdWJtaXRIYW5kbGVyKX1hZGRMaXN0ZW5lcihlLGksdCl7aS5hZGRFdmVudExpc3RlbmVyKGUsdCksdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKHt0eXBlOmUsZWxlbTppLGZ1bmM6dH0pfXJlbW92ZUxpc3RlbmVyKGUsaSx0KXtpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSx0KSx0aGlzLmV2ZW50TGlzdGVuZXJzPXRoaXMuZXZlbnRMaXN0ZW5lcnMuZmlsdGVyKCh0PT50LnR5cGUhPT1lfHx0LmVsZW0hPT1pKSl9YWRkRmllbGQoZSxpLHQpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlJiYhdShlKSl0aHJvdyBFcnJvcihcIkZpZWxkIHNlbGVjdG9yIGlzIG5vdCB2YWxpZC4gUGxlYXNlIHNwZWNpZnkgYSBzdHJpbmcgc2VsZWN0b3Igb3IgYSB2YWxpZCBET00gZWxlbWVudC5cIik7bGV0IHM7aWYocz1cInN0cmluZ1wiPT10eXBlb2YgZT90aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihlKTplLCFzKXRocm93IEVycm9yKFwiRmllbGQgZG9lc24ndCBleGlzdCBpbiB0aGUgRE9NISBQbGVhc2UgY2hlY2sgdGhlIGZpZWxkIHNlbGVjdG9yLlwiKTtpZighQXJyYXkuaXNBcnJheShpKXx8IWkubGVuZ3RoKXRocm93IEVycm9yKFwiUnVsZXMgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5IGFuZCBzaG91bGQgY29udGFpbiBhdCBsZWFzdCAxIGVsZW1lbnQuXCIpO2kuZm9yRWFjaCgoZT0+e2lmKCEoXCJydWxlXCJpbiBlfHxcInZhbGlkYXRvclwiaW4gZXx8XCJwbHVnaW5cImluIGUpKXRocm93IEVycm9yKFwiUnVsZXMgYXJndW1lbnQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBydWxlIG9yIHZhbGlkYXRvciBwcm9wZXJ0eS5cIik7aWYoIShlLnZhbGlkYXRvcnx8ZS5wbHVnaW58fGUucnVsZSYmT2JqZWN0LnZhbHVlcyhyKS5pbmNsdWRlcyhlLnJ1bGUpKSl0aHJvdyBFcnJvcihgUnVsZSBzaG91bGQgYmUgb25lIG9mIHRoZXNlIHR5cGVzOiAke09iamVjdC52YWx1ZXMocikuam9pbihcIiwgXCIpfS4gUHJvdmlkZWQgdmFsdWU6ICR7ZS5ydWxlfWApfSkpO2NvbnN0IGw9dGhpcy5zZXRLZXlCeUZpZWxkU2VsZWN0b3IoZSk7cmV0dXJuIHRoaXMuZmllbGRzW2xdPXtlbGVtOnMscnVsZXM6aSxpc1ZhbGlkOnZvaWQgMCx0b3VjaGVkOiExLGNvbmZpZzp0fSx0aGlzLnNldExpc3RlbmVycyhzKSwodGhpcy5pc1N1Ym1pdHRlZHx8dGhpcy5nbG9iYWxDb25maWcudmFsaWRhdGVCZWZvcmVTdWJtaXR0aW5nKSYmdGhpcy52YWxpZGF0ZUZpZWxkKGwpLHRoaXN9cmVtb3ZlRmllbGQoZSl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUmJiF1KGUpKXRocm93IEVycm9yKFwiRmllbGQgc2VsZWN0b3IgaXMgbm90IHZhbGlkLiBQbGVhc2Ugc3BlY2lmeSBhIHN0cmluZyBzZWxlY3RvciBvciBhIHZhbGlkIERPTSBlbGVtZW50LlwiKTtjb25zdCBpPXRoaXMuZ2V0S2V5QnlGaWVsZFNlbGVjdG9yKGUpO2lmKCFpfHwhdGhpcy5maWVsZHNbaV0pcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJGaWVsZCBub3QgZm91bmQuIENoZWNrIHRoZSBmaWVsZCBzZWxlY3Rvci5cIiksdGhpcztjb25zdCB0PXRoaXMuZ2V0TGlzdGVuZXJUeXBlKHRoaXMuZmllbGRzW2ldLmVsZW0udHlwZSk7cmV0dXJuIHRoaXMucmVtb3ZlTGlzdGVuZXIodCx0aGlzLmZpZWxkc1tpXS5lbGVtLHRoaXMuaGFuZGxlckNoYW5nZSksdGhpcy5jbGVhckVycm9ycygpLGRlbGV0ZSB0aGlzLmZpZWxkc1tpXSx0aGlzfXJlbW92ZUdyb3VwKGUpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXRocm93IEVycm9yKFwiR3JvdXAgc2VsZWN0b3IgaXMgbm90IHZhbGlkLiBQbGVhc2Ugc3BlY2lmeSBhIHN0cmluZyBzZWxlY3Rvci5cIik7Y29uc3QgaT10aGlzLmdldEtleUJ5RmllbGRTZWxlY3RvcihlKTtyZXR1cm4gaSYmdGhpcy5ncm91cEZpZWxkc1tpXT8odGhpcy5ncm91cEZpZWxkc1tpXS5lbGVtcy5mb3JFYWNoKChlPT57Y29uc3QgaT10aGlzLmdldExpc3RlbmVyVHlwZShlLnR5cGUpO3RoaXMucmVtb3ZlTGlzdGVuZXIoaSxlLHRoaXMuaGFuZGxlckNoYW5nZSl9KSksdGhpcy5jbGVhckVycm9ycygpLGRlbGV0ZSB0aGlzLmdyb3VwRmllbGRzW2ldLHRoaXMpOihjb25zb2xlLmVycm9yKFwiR3JvdXAgbm90IGZvdW5kLiBDaGVjayB0aGUgZ3JvdXAgc2VsZWN0b3IuXCIpLHRoaXMpfWFkZFJlcXVpcmVkR3JvdXAoZSxpLHQscyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUmJiF1KGUpKXRocm93IEVycm9yKFwiR3JvdXAgc2VsZWN0b3IgaXMgbm90IHZhbGlkLiBQbGVhc2Ugc3BlY2lmeSBhIHN0cmluZyBzZWxlY3RvciBvciBhIHZhbGlkIERPTSBlbGVtZW50LlwiKTtsZXQgbDtpZihsPVwic3RyaW5nXCI9PXR5cGVvZiBlP3RoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKGUpOmUsIWwpdGhyb3cgRXJyb3IoXCJHcm91cCBzZWxlY3RvciBub3QgZm91bmQhIFBsZWFzZSBjaGVjayB0aGUgZ3JvdXAgc2VsZWN0b3IuXCIpO2NvbnN0IHI9bC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIiksYT1BcnJheS5mcm9tKHIpLmZpbHRlcigoZT0+e2NvbnN0IGk9KChlLGkpPT57Y29uc3QgdD1bLi4uaV0ucmV2ZXJzZSgpO2ZvcihsZXQgcz0wLGw9dC5sZW5ndGg7czxsOysrcyl7Y29uc3QgaT10W3NdO2Zvcihjb25zdCB0IGluIGUpe2NvbnN0IHM9ZVt0XTtpZihzLmdyb3VwRWxlbT09PWkpcmV0dXJuW3Qsc119fXJldHVybiBudWxsfSkodGhpcy5ncm91cEZpZWxkcywoZT0+e2xldCBpPWU7Y29uc3QgdD1bXTtmb3IoO2k7KXQudW5zaGlmdChpKSxpPWkucGFyZW50Tm9kZTtyZXR1cm4gdH0pKGUpKTtyZXR1cm4haXx8aVsxXS5lbGVtcy5maW5kKChpPT5pIT09ZSkpfSkpLG49dGhpcy5zZXRLZXlCeUZpZWxkU2VsZWN0b3IoZSk7cmV0dXJuIHRoaXMuZ3JvdXBGaWVsZHNbbl09e3J1bGVzOlt7cnVsZTpvLlJlcXVpcmVkLGVycm9yTWVzc2FnZTppLHN1Y2Nlc3NNZXNzYWdlOnN9XSxncm91cEVsZW06bCxlbGVtczphLHRvdWNoZWQ6ITEsaXNWYWxpZDp2b2lkIDAsY29uZmlnOnR9LHIuZm9yRWFjaCgoZT0+e3RoaXMuc2V0TGlzdGVuZXJzKGUpfSkpLHRoaXN9Z2V0TGlzdGVuZXJUeXBlKGUpe3N3aXRjaChlKXtjYXNlXCJjaGVja2JveFwiOmNhc2VcInNlbGVjdC1vbmVcIjpjYXNlXCJmaWxlXCI6Y2FzZVwicmFkaW9cIjpyZXR1cm5cImNoYW5nZVwiO2RlZmF1bHQ6cmV0dXJuXCJpbnB1dFwifX1zZXRMaXN0ZW5lcnMoZSl7Y29uc3QgaT10aGlzLmdldExpc3RlbmVyVHlwZShlLnR5cGUpO3RoaXMucmVtb3ZlTGlzdGVuZXIoaSxlLHRoaXMuaGFuZGxlckNoYW5nZSksdGhpcy5hZGRMaXN0ZW5lcihpLGUsdGhpcy5oYW5kbGVyQ2hhbmdlKX1jbGVhckZpZWxkTGFiZWwoZSl7dmFyIGksdDtudWxsPT0oaT10aGlzLmVycm9yTGFiZWxzW2VdKXx8aS5yZW1vdmUoKSxudWxsPT0odD10aGlzLnN1Y2Nlc3NMYWJlbHNbZV0pfHx0LnJlbW92ZSgpfWNsZWFyRmllbGRTdHlsZShlKXt2YXIgaSx0LHMsbDtjb25zdCByPXRoaXMuZmllbGRzW2VdLG89KG51bGw9PShpPXIuY29uZmlnKT92b2lkIDA6aS5lcnJvckZpZWxkU3R5bGUpfHx0aGlzLmdsb2JhbENvbmZpZy5lcnJvckZpZWxkU3R5bGU7T2JqZWN0LmtleXMobykuZm9yRWFjaCgoZT0+e3IuZWxlbS5zdHlsZVtlXT1cIlwifSkpO2NvbnN0IGE9KG51bGw9PSh0PXIuY29uZmlnKT92b2lkIDA6dC5zdWNjZXNzRmllbGRTdHlsZSl8fHRoaXMuZ2xvYmFsQ29uZmlnLnN1Y2Nlc3NGaWVsZFN0eWxlfHx7fTtPYmplY3Qua2V5cyhhKS5mb3JFYWNoKChlPT57ci5lbGVtLnN0eWxlW2VdPVwiXCJ9KSksci5lbGVtLmNsYXNzTGlzdC5yZW1vdmUoLi4uYygobnVsbD09KHM9ci5jb25maWcpP3ZvaWQgMDpzLmVycm9yRmllbGRDc3NDbGFzcyl8fHRoaXMuZ2xvYmFsQ29uZmlnLmVycm9yRmllbGRDc3NDbGFzcyksLi4uYygobnVsbD09KGw9ci5jb25maWcpP3ZvaWQgMDpsLnN1Y2Nlc3NGaWVsZENzc0NsYXNzKXx8dGhpcy5nbG9iYWxDb25maWcuc3VjY2Vzc0ZpZWxkQ3NzQ2xhc3MpKX1jbGVhckVycm9ycygpe3ZhciBlLGk7T2JqZWN0LmtleXModGhpcy5lcnJvckxhYmVscykuZm9yRWFjaCgoZT0+dGhpcy5lcnJvckxhYmVsc1tlXS5yZW1vdmUoKSkpLE9iamVjdC5rZXlzKHRoaXMuc3VjY2Vzc0xhYmVscykuZm9yRWFjaCgoZT0+dGhpcy5zdWNjZXNzTGFiZWxzW2VdLnJlbW92ZSgpKSk7Zm9yKGNvbnN0IHQgaW4gdGhpcy5maWVsZHMpdGhpcy5jbGVhckZpZWxkU3R5bGUodCk7Zm9yKGNvbnN0IHQgaW4gdGhpcy5ncm91cEZpZWxkcyl7Y29uc3Qgcz10aGlzLmdyb3VwRmllbGRzW3RdLGw9KG51bGw9PShlPXMuY29uZmlnKT92b2lkIDA6ZS5lcnJvckZpZWxkU3R5bGUpfHx0aGlzLmdsb2JhbENvbmZpZy5lcnJvckZpZWxkU3R5bGU7T2JqZWN0LmtleXMobCkuZm9yRWFjaCgoZT0+e3MuZWxlbXMuZm9yRWFjaCgoaT0+e3ZhciB0O2kuc3R5bGVbZV09XCJcIixpLmNsYXNzTGlzdC5yZW1vdmUoLi4uYygobnVsbD09KHQ9cy5jb25maWcpP3ZvaWQgMDp0LmVycm9yRmllbGRDc3NDbGFzcyl8fHRoaXMuZ2xvYmFsQ29uZmlnLmVycm9yRmllbGRDc3NDbGFzcykpfSkpfSkpO2NvbnN0IHI9KG51bGw9PShpPXMuY29uZmlnKT92b2lkIDA6aS5zdWNjZXNzRmllbGRTdHlsZSl8fHRoaXMuZ2xvYmFsQ29uZmlnLnN1Y2Nlc3NGaWVsZFN0eWxlfHx7fTtPYmplY3Qua2V5cyhyKS5mb3JFYWNoKChlPT57cy5lbGVtcy5mb3JFYWNoKChpPT57dmFyIHQ7aS5zdHlsZVtlXT1cIlwiLGkuY2xhc3NMaXN0LnJlbW92ZSguLi5jKChudWxsPT0odD1zLmNvbmZpZyk/dm9pZCAwOnQuc3VjY2Vzc0ZpZWxkQ3NzQ2xhc3MpfHx0aGlzLmdsb2JhbENvbmZpZy5zdWNjZXNzRmllbGRDc3NDbGFzcykpfSkpfSkpfXRoaXMudG9vbHRpcHM9W119aXNUb29sdGlwKCl7cmV0dXJuISF0aGlzLmdsb2JhbENvbmZpZy50b29sdGlwfWxvY2tGb3JtKCl7Y29uc3QgZT10aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uLCBzZWxlY3RcIik7Zm9yKGxldCBpPTAsdD1lLmxlbmd0aDtpPHQ7KytpKWVbaV0uc2V0QXR0cmlidXRlKFwiZGF0YS1qdXN0LXZhbGlkYXRlLWZhbGxiYWNrLWRpc2FibGVkXCIsZVtpXS5kaXNhYmxlZD9cInRydWVcIjpcImZhbHNlXCIpLGVbaV0uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpLGVbaV0uc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIixlW2ldLnN0eWxlLndlYmtpdEZpbHRlcj1cImdyYXlzY2FsZSgxMDAlKVwiLGVbaV0uc3R5bGUuZmlsdGVyPVwiZ3JheXNjYWxlKDEwMCUpXCJ9dW5sb2NrRm9ybSgpe2NvbnN0IGU9dGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiwgc2VsZWN0XCIpO2ZvcihsZXQgaT0wLHQ9ZS5sZW5ndGg7aTx0OysraSlcInRydWVcIiE9PWVbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1qdXN0LXZhbGlkYXRlLWZhbGxiYWNrLWRpc2FibGVkXCIpJiZlW2ldLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpLGVbaV0uc3R5bGUucG9pbnRlckV2ZW50cz1cIlwiLGVbaV0uc3R5bGUud2Via2l0RmlsdGVyPVwiXCIsZVtpXS5zdHlsZS5maWx0ZXI9XCJcIn1yZW5kZXJUb29sdGlwKGUsaSx0KXt2YXIgcztjb25zdHt0b3A6bCxsZWZ0OnIsd2lkdGg6byxoZWlnaHQ6YX09ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuPWkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksZD10fHwobnVsbD09KHM9dGhpcy5nbG9iYWxDb25maWcudG9vbHRpcCk/dm9pZCAwOnMucG9zaXRpb24pO3N3aXRjaChkKXtjYXNlXCJsZWZ0XCI6aS5zdHlsZS50b3A9bCthLzItbi5oZWlnaHQvMitcInB4XCIsaS5zdHlsZS5sZWZ0PXItbi53aWR0aC01K1wicHhcIjticmVhaztjYXNlXCJ0b3BcIjppLnN0eWxlLnRvcD1sLW4uaGVpZ2h0LTUrXCJweFwiLGkuc3R5bGUubGVmdD1yK28vMi1uLndpZHRoLzIrXCJweFwiO2JyZWFrO2Nhc2VcInJpZ2h0XCI6aS5zdHlsZS50b3A9bCthLzItbi5oZWlnaHQvMitcInB4XCIsaS5zdHlsZS5sZWZ0PWAke3Irbys1fXB4YDticmVhaztjYXNlXCJib3R0b21cIjppLnN0eWxlLnRvcD1gJHtsK2ErNX1weGAsaS5zdHlsZS5sZWZ0PXIrby8yLW4ud2lkdGgvMitcInB4XCJ9aS5kYXRhc2V0LmRpcmVjdGlvbj1kO3JldHVybntyZWZyZXNoOigpPT57dGhpcy5yZW5kZXJUb29sdGlwKGUsaSx0KX19fWNyZWF0ZUVycm9yTGFiZWxFbGVtKGUsaSx0KXtjb25zdCBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cy5pbm5lckhUTUw9aTtjb25zdCBsPXRoaXMuaXNUb29sdGlwKCk/bnVsbD09dD92b2lkIDA6dC5lcnJvckxhYmVsU3R5bGU6KG51bGw9PXQ/dm9pZCAwOnQuZXJyb3JMYWJlbFN0eWxlKXx8dGhpcy5nbG9iYWxDb25maWcuZXJyb3JMYWJlbFN0eWxlO3JldHVybiBPYmplY3QuYXNzaWduKHMuc3R5bGUsbCkscy5jbGFzc0xpc3QuYWRkKC4uLmMoKG51bGw9PXQ/dm9pZCAwOnQuZXJyb3JMYWJlbENzc0NsYXNzKXx8dGhpcy5nbG9iYWxDb25maWcuZXJyb3JMYWJlbENzc0NsYXNzKSxcImp1c3QtdmFsaWRhdGUtZXJyb3ItbGFiZWxcIiksdGhpcy5pc1Rvb2x0aXAoKSYmKHMuZGF0YXNldC50b29sdGlwPVwidHJ1ZVwiKSx0aGlzLmdsb2JhbENvbmZpZy50ZXN0aW5nTW9kZSYmKHMuZGF0YXNldC50ZXN0SWQ9YGVycm9yLWxhYmVsLSR7ZX1gKSx0aGlzLmVycm9yTGFiZWxzW2VdPXMsc31jcmVhdGVTdWNjZXNzTGFiZWxFbGVtKGUsaSx0KXtpZih2b2lkIDA9PT1pKXJldHVybiBudWxsO2NvbnN0IHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtzLmlubmVySFRNTD1pO2NvbnN0IGw9KG51bGw9PXQ/dm9pZCAwOnQuc3VjY2Vzc0xhYmVsU3R5bGUpfHx0aGlzLmdsb2JhbENvbmZpZy5zdWNjZXNzTGFiZWxTdHlsZTtyZXR1cm4gT2JqZWN0LmFzc2lnbihzLnN0eWxlLGwpLHMuY2xhc3NMaXN0LmFkZCguLi5jKChudWxsPT10P3ZvaWQgMDp0LnN1Y2Nlc3NMYWJlbENzc0NsYXNzKXx8dGhpcy5nbG9iYWxDb25maWcuc3VjY2Vzc0xhYmVsQ3NzQ2xhc3MpLFwianVzdC12YWxpZGF0ZS1zdWNjZXNzLWxhYmVsXCIpLHRoaXMuZ2xvYmFsQ29uZmlnLnRlc3RpbmdNb2RlJiYocy5kYXRhc2V0LnRlc3RJZD1gc3VjY2Vzcy1sYWJlbC0ke2V9YCksdGhpcy5zdWNjZXNzTGFiZWxzW2VdPXMsc31yZW5kZXJFcnJvcnNDb250YWluZXIoZSxpKXtjb25zdCB0PWl8fHRoaXMuZ2xvYmFsQ29uZmlnLmVycm9yc0NvbnRhaW5lcjtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7Y29uc3QgaT10aGlzLmZvcm0ucXVlcnlTZWxlY3Rvcih0KTtpZihpKXJldHVybiBpLmFwcGVuZENoaWxkKGUpLCEwO2NvbnNvbGUuZXJyb3IoYEVycm9yIGNvbnRhaW5lciB3aXRoICR7dH0gc2VsZWN0b3Igbm90IGZvdW5kLiBFcnJvcnMgd2lsbCBiZSByZW5kZXJlZCBhcyB1c3VhbGApfXJldHVybiB0IGluc3RhbmNlb2YgRWxlbWVudD8odC5hcHBlbmRDaGlsZChlKSwhMCk6KHZvaWQgMCE9PXQmJmNvbnNvbGUuZXJyb3IoXCJFcnJvciBjb250YWluZXIgbm90IGZvdW5kLiBJdCBzaG91bGQgYmUgYSBzdHJpbmcgb3IgZXhpc3RpbmcgRWxlbWVudC4gRXJyb3JzIHdpbGwgYmUgcmVuZGVyZWQgYXMgdXN1YWxcIiksITEpfXJlbmRlckdyb3VwTGFiZWwoZSxpLHQscyl7aWYoIXMpe2lmKHRoaXMucmVuZGVyRXJyb3JzQ29udGFpbmVyKGksdCkpcmV0dXJufWUuYXBwZW5kQ2hpbGQoaSl9cmVuZGVyRmllbGRMYWJlbChlLGksdCxzKXt2YXIgbCxyLG8sYSxuLGQsYztpZighcyl7aWYodGhpcy5yZW5kZXJFcnJvcnNDb250YWluZXIoaSx0KSlyZXR1cm59aWYoXCJjaGVja2JveFwiPT09ZS50eXBlfHxcInJhZGlvXCI9PT1lLnR5cGUpe2NvbnN0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtlLmdldEF0dHJpYnV0ZShcImlkXCIpfVwiXWApO1wibGFiZWxcIj09PShudWxsPT0ocj1udWxsPT0obD1lLnBhcmVudEVsZW1lbnQpP3ZvaWQgMDpsLnRhZ05hbWUpP3ZvaWQgMDpyLnRvTG93ZXJDYXNlKCkpP251bGw9PShhPW51bGw9PShvPWUucGFyZW50RWxlbWVudCk/dm9pZCAwOm8ucGFyZW50RWxlbWVudCl8fGEuYXBwZW5kQ2hpbGQoaSk6dD9udWxsPT0obj10LnBhcmVudEVsZW1lbnQpfHxuLmFwcGVuZENoaWxkKGkpOm51bGw9PShkPWUucGFyZW50RWxlbWVudCl8fGQuYXBwZW5kQ2hpbGQoaSl9ZWxzZSBudWxsPT0oYz1lLnBhcmVudEVsZW1lbnQpfHxjLmFwcGVuZENoaWxkKGkpfXNob3dMYWJlbHMoZSxpKXtPYmplY3Qua2V5cyhlKS5mb3JFYWNoKCgodCxzKT0+e2NvbnN0IGw9ZVt0XSxyPXRoaXMuZ2V0S2V5QnlGaWVsZFNlbGVjdG9yKHQpO2lmKCFyfHwhdGhpcy5maWVsZHNbcl0pcmV0dXJuIHZvaWQgY29uc29sZS5lcnJvcihcIkZpZWxkIG5vdCBmb3VuZC4gQ2hlY2sgdGhlIGZpZWxkIHNlbGVjdG9yLlwiKTtjb25zdCBvPXRoaXMuZmllbGRzW3JdO28uaXNWYWxpZD0haSx0aGlzLmNsZWFyRmllbGRTdHlsZShyKSx0aGlzLmNsZWFyRmllbGRMYWJlbChyKSx0aGlzLnJlbmRlckZpZWxkRXJyb3IociwhMSxsKSwwPT09cyYmdGhpcy5nbG9iYWxDb25maWcuZm9jdXNJbnZhbGlkRmllbGQmJnNldFRpbWVvdXQoKCgpPT5vLmVsZW0uZm9jdXMoKSksMCl9KSl9c2hvd0Vycm9ycyhlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgZSl0aHJvdyBFcnJvcihcIltzaG93RXJyb3JzXTogRXJyb3JzIHNob3VsZCBiZSBhbiBvYmplY3Qgd2l0aCBrZXk6IHZhbHVlIGZvcm1hdFwiKTt0aGlzLnNob3dMYWJlbHMoZSwhMCl9c2hvd1N1Y2Nlc3NMYWJlbHMoZSl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGUpdGhyb3cgRXJyb3IoXCJbc2hvd1N1Y2Nlc3NMYWJlbHNdOiBMYWJlbHMgc2hvdWxkIGJlIGFuIG9iamVjdCB3aXRoIGtleTogdmFsdWUgZm9ybWF0XCIpO3RoaXMuc2hvd0xhYmVscyhlLCExKX1yZW5kZXJGaWVsZEVycm9yKGUsaT0hMSx0KXt2YXIgcyxsLHIsbyxhLG47Y29uc3QgZD10aGlzLmZpZWxkc1tlXTtpZighMT09PWQuaXNWYWxpZCYmKHRoaXMuaXNWYWxpZD0hMSksdm9pZCAwPT09ZC5pc1ZhbGlkfHwhaSYmIXRoaXMuaXNTdWJtaXR0ZWQmJiFkLnRvdWNoZWQmJnZvaWQgMD09PXQpcmV0dXJuO2lmKGQuaXNWYWxpZCl7aWYoIWQuYXN5bmNDaGVja1BlbmRpbmcpe2NvbnN0IGk9dGhpcy5jcmVhdGVTdWNjZXNzTGFiZWxFbGVtKGUsdm9pZCAwIT09dD90OmQuc3VjY2Vzc01lc3NhZ2UsZC5jb25maWcpO2kmJnRoaXMucmVuZGVyRmllbGRMYWJlbChkLmVsZW0saSxudWxsPT0ocz1kLmNvbmZpZyk/dm9pZCAwOnMuZXJyb3JzQ29udGFpbmVyLCEwKSxkLmVsZW0uY2xhc3NMaXN0LmFkZCguLi5jKChudWxsPT0obD1kLmNvbmZpZyk/dm9pZCAwOmwuc3VjY2Vzc0ZpZWxkQ3NzQ2xhc3MpfHx0aGlzLmdsb2JhbENvbmZpZy5zdWNjZXNzRmllbGRDc3NDbGFzcykpfXJldHVybn1kLmVsZW0uY2xhc3NMaXN0LmFkZCguLi5jKChudWxsPT0ocj1kLmNvbmZpZyk/dm9pZCAwOnIuZXJyb3JGaWVsZENzc0NsYXNzKXx8dGhpcy5nbG9iYWxDb25maWcuZXJyb3JGaWVsZENzc0NsYXNzKSk7Y29uc3QgdT10aGlzLmNyZWF0ZUVycm9yTGFiZWxFbGVtKGUsdm9pZCAwIT09dD90OmQuZXJyb3JNZXNzYWdlLGQuY29uZmlnKTt0aGlzLnJlbmRlckZpZWxkTGFiZWwoZC5lbGVtLHUsbnVsbD09KG89ZC5jb25maWcpP3ZvaWQgMDpvLmVycm9yc0NvbnRhaW5lciksdGhpcy5pc1Rvb2x0aXAoKSYmdGhpcy50b29sdGlwcy5wdXNoKHRoaXMucmVuZGVyVG9vbHRpcChkLmVsZW0sdSxudWxsPT0obj1udWxsPT0oYT1kLmNvbmZpZyk/dm9pZCAwOmEudG9vbHRpcCk/dm9pZCAwOm4ucG9zaXRpb24pKX1yZW5kZXJHcm91cEVycm9yKGUsaT0hMCl7dmFyIHQscyxsLHI7Y29uc3Qgbz10aGlzLmdyb3VwRmllbGRzW2VdO2lmKCExPT09by5pc1ZhbGlkJiYodGhpcy5pc1ZhbGlkPSExKSx2b2lkIDA9PT1vLmlzVmFsaWR8fCFpJiYhdGhpcy5pc1N1Ym1pdHRlZCYmIW8udG91Y2hlZClyZXR1cm47aWYoby5pc1ZhbGlkKXtvLmVsZW1zLmZvckVhY2goKGU9Pnt2YXIgaSx0O09iamVjdC5hc3NpZ24oZS5zdHlsZSwobnVsbD09KGk9by5jb25maWcpP3ZvaWQgMDppLnN1Y2Nlc3NGaWVsZFN0eWxlKXx8dGhpcy5nbG9iYWxDb25maWcuc3VjY2Vzc0ZpZWxkU3R5bGUpLGUuY2xhc3NMaXN0LmFkZCguLi5jKChudWxsPT0odD1vLmNvbmZpZyk/dm9pZCAwOnQuc3VjY2Vzc0ZpZWxkQ3NzQ2xhc3MpfHx0aGlzLmdsb2JhbENvbmZpZy5zdWNjZXNzRmllbGRDc3NDbGFzcykpfSkpO2NvbnN0IGk9dGhpcy5jcmVhdGVTdWNjZXNzTGFiZWxFbGVtKGUsby5zdWNjZXNzTWVzc2FnZSxvLmNvbmZpZyk7cmV0dXJuIHZvaWQoaSYmdGhpcy5yZW5kZXJHcm91cExhYmVsKG8uZ3JvdXBFbGVtLGksbnVsbD09KHQ9by5jb25maWcpP3ZvaWQgMDp0LmVycm9yc0NvbnRhaW5lciwhMCkpfXRoaXMuaXNWYWxpZD0hMSxvLmVsZW1zLmZvckVhY2goKGU9Pnt2YXIgaSx0O09iamVjdC5hc3NpZ24oZS5zdHlsZSwobnVsbD09KGk9by5jb25maWcpP3ZvaWQgMDppLmVycm9yRmllbGRTdHlsZSl8fHRoaXMuZ2xvYmFsQ29uZmlnLmVycm9yRmllbGRTdHlsZSksZS5jbGFzc0xpc3QuYWRkKC4uLmMoKG51bGw9PSh0PW8uY29uZmlnKT92b2lkIDA6dC5lcnJvckZpZWxkQ3NzQ2xhc3MpfHx0aGlzLmdsb2JhbENvbmZpZy5lcnJvckZpZWxkQ3NzQ2xhc3MpKX0pKTtjb25zdCBhPXRoaXMuY3JlYXRlRXJyb3JMYWJlbEVsZW0oZSxvLmVycm9yTWVzc2FnZSxvLmNvbmZpZyk7dGhpcy5yZW5kZXJHcm91cExhYmVsKG8uZ3JvdXBFbGVtLGEsbnVsbD09KHM9by5jb25maWcpP3ZvaWQgMDpzLmVycm9yc0NvbnRhaW5lciksdGhpcy5pc1Rvb2x0aXAoKSYmdGhpcy50b29sdGlwcy5wdXNoKHRoaXMucmVuZGVyVG9vbHRpcChvLmdyb3VwRWxlbSxhLG51bGw9PShyPW51bGw9PShsPW8uY29uZmlnKT92b2lkIDA6bC50b29sdGlwKT92b2lkIDA6ci5wb3NpdGlvbikpfXJlbmRlckVycm9ycyhlPSExKXtpZih0aGlzLmlzU3VibWl0dGVkfHxlfHx0aGlzLmdsb2JhbENvbmZpZy52YWxpZGF0ZUJlZm9yZVN1Ym1pdHRpbmcpe3RoaXMuY2xlYXJFcnJvcnMoKSx0aGlzLmlzVmFsaWQ9ITA7Zm9yKGNvbnN0IGUgaW4gdGhpcy5ncm91cEZpZWxkcyl0aGlzLnJlbmRlckdyb3VwRXJyb3IoZSk7Zm9yKGNvbnN0IGUgaW4gdGhpcy5maWVsZHMpdGhpcy5yZW5kZXJGaWVsZEVycm9yKGUpfX1kZXN0cm95KCl7dGhpcy5ldmVudExpc3RlbmVycy5mb3JFYWNoKChlPT57dGhpcy5yZW1vdmVMaXN0ZW5lcihlLnR5cGUsZS5lbGVtLGUuZnVuYyl9KSksT2JqZWN0LmtleXModGhpcy5jdXN0b21TdHlsZVRhZ3MpLmZvckVhY2goKGU9Pnt0aGlzLmN1c3RvbVN0eWxlVGFnc1tlXS5yZW1vdmUoKX0pKSx0aGlzLmNsZWFyRXJyb3JzKCksdGhpcy5nbG9iYWxDb25maWcubG9ja0Zvcm0mJnRoaXMudW5sb2NrRm9ybSgpfXJlZnJlc2goKXt0aGlzLmRlc3Ryb3koKSx0aGlzLmZvcm0/KHRoaXMuaW5pdGlhbGl6ZSh0aGlzLmZvcm0sdGhpcy5nbG9iYWxDb25maWcpLE9iamVjdC5rZXlzKHRoaXMuZmllbGRzKS5mb3JFYWNoKChlPT57Y29uc3QgaT10aGlzLmdldEZpZWxkU2VsZWN0b3JCeUtleShlKTtpJiZ0aGlzLmFkZEZpZWxkKGksWy4uLnRoaXMuZmllbGRzW2VdLnJ1bGVzXSx0aGlzLmZpZWxkc1tlXS5jb25maWcpfSkpKTpjb25zb2xlLmVycm9yKFwiQ2Fubm90IGluaXRpYWxpemUgdGhlIGxpYnJhcnkhIEZvcm0gaXMgbm90IGRlZmluZWRcIil9c2V0Q3VycmVudExvY2FsZShlKXtcInN0cmluZ1wiPT10eXBlb2YgZXx8dm9pZCAwPT09ZT8odGhpcy5jdXJyZW50TG9jYWxlPWUsdGhpcy5pc1N1Ym1pdHRlZCYmdGhpcy52YWxpZGF0ZSgpKTpjb25zb2xlLmVycm9yKFwiQ3VycmVudCBsb2NhbGUgc2hvdWxkIGJlIGEgc3RyaW5nXCIpfW9uU3VjY2VzcyhlKXtyZXR1cm4gdGhpcy5vblN1Y2Nlc3NDYWxsYmFjaz1lLHRoaXN9b25GYWlsKGUpe3JldHVybiB0aGlzLm9uRmFpbENhbGxiYWNrPWUsdGhpc31vblZhbGlkYXRlKGUpe3JldHVybiB0aGlzLm9uVmFsaWRhdGVDYWxsYmFjaz1lLHRoaXN9fX0pKTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgLy8gQnRuIG1lbnVcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1vcGVuXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tZW51XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1vcGVuXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LWlzLW9wZW5cIik7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1lbnVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImlzLW9wZW5cIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnUtaXMtb3BlblwiKTtcbiAgfSk7XG5cbiAgICAvLyBtZW51XG4gICAgY29uc3QgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluLW5hdl9fbGlua1wiKTtcbiAgICBlbHMuZm9yRWFjaCgoZWwpID0+IHtcblxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMDAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZWwpXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tZW51XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1vcGVuXCIpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LWlzLW9wZW5cIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0Rm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUudmFsdWU7XG4gICAgY29uc3QgZW1haWwgPSB0aGlzLmVtYWlsLnZhbHVlO1xuICAgIGNvbnN0IHNlbmQgPSBgbWFpbHRvOmJsb2dAdGVzdC5ydT9ib2R5PdCY0LzRjzogJHtuYW1lfSUwRCUwQUUtbWFpbDogJHtlbWFpbH1gO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gc2VuZDtcbiAgfSlcblxuICBjb25zdCB2YWxpZGF0b3JOZXdzbGV0dGVyID0gbmV3IEp1c3RWYWxpZGF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3c2xldHRlckZvcm0nKSwge1xuICAgIGVycm9yTGFiZWxTdHlsZToge1xuICAgICAgY29sb3I6ICcjRjA2NjY2JyxcbiAgICB9XG4gIH0pO1xuXG4gIHZhbGlkYXRvck5ld3NsZXR0ZXJcbiAgICAuYWRkRmllbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsTmV3c2xldHRlcicpLCBbXG4gICAgICB7XG4gICAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcnVsZTogJ2VtYWlsJyxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXG4gICAgICB9LFxuICAgIF0pO1xuXG4gIGNvbnN0IHZhbGlkYXRvckNvbnRhY3QgPSBuZXcgSnVzdFZhbGlkYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0Rm9ybScpLCB7XG4gICAgZXJyb3JMYWJlbFN0eWxlOiB7XG4gICAgICBjb2xvcjogJyNGMDY2NjYnLFxuICAgIH1cbiAgfSk7XG5cbiAgdmFsaWRhdG9yQ29udGFjdFxuICAgIC5hZGRGaWVsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZUlucHV0JyksIFtcbiAgICAgIHtcbiAgICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcnVsZTogJ21pbkxlbmd0aCcsXG4gICAgICAgIHZhbHVlOiAzLFxuICAgICAgICBlcnJvck1lc3NhZ2U6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJ1bGU6ICdtYXhMZW5ndGgnLFxuICAgICAgICB2YWx1ZTogMTUsXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxuICAgICAgfSxcbiAgICBdKVxuICAgIC5hZGRGaWVsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWxJbnB1dCcpLCBbXG4gICAgICB7XG4gICAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcnVsZTogJ2VtYWlsJyxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXG4gICAgICB9LFxuICAgIF0pO1xufSk7XG4iXX0=
