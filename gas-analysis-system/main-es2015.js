(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./packages/@g-a-s-features/control-panel/src/app/components/details/details.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./packages/@g-a-s-features/control-panel/src/app/components/details/details.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"container__header\">\n    <span class=\"container__header__text\">Детальніше про ....</span>\n    <!-- <span class=\"container__header__text\">Детальніше про {{fakeDataItem.name}}</span> -->\n    <button (click)=\"close()\" class=\"container__header__close-button\">Х</button>\n  </div>\n  <div class=\"container__content\">\n    <div class=\"container__content__field\">\n      <span class=\"container__content__field__text\">Виміряне значення конентрації:</span>\n    </div>\n    <div class=\"container__content__field\">\n      <span class=\"container__content__field__text\">Гранично-допустиме значення конентраці:</span>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./packages/@g-a-s-features/control-panel/src/app/components/info/info.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./packages/@g-a-s-features/control-panel/src/app/components/info/info.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"container__header\">\n    <span class=\"container__header__text\">Про проект</span>\n    <button (click)=\"close()\" class=\"container__header__close-button\">Х</button>\n  </div>\n  <div class=\"container__content\">\n    <div class=\"container__content__field\">\n      <span class=\"container__content__field__text\">Автор: \n        <span style=\"font-weight: 400;\">Мельник Ольга, студент 6-го курсу, ВВ-81мп, ПБФ, КПІ</span>\n        </span>\n    </div>\n    <div class=\"container__content__field\">\n      <span class=\"container__content__field__text\">Тема магістерської дисертації:\n        <span style=\"font-weight: 400;\">Система аналізу газів</span>\n      </span>\n    </div>\n    <div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./packages/@g-a-s-features/control-panel/src/app/control-panel.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./packages/@g-a-s-features/control-panel/src/app/control-panel.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"container__header\">\r\n        <span class=\"container__header__text\">Дослідження виміряних значень</span>\r\n        <button (click)=\"showInfo()\" class=\"button\">Про проект</button>\r\n    </div>\r\n    <div class=\"container__grid\">\r\n        <span class=\"container__grid__text\">Статистика вимірювань</span>\r\n\r\n        <kendo-grid class=\"grid\" [data]=\"gridView\" [pageSize]=\"pageSize\" [skip]=\"skip\" [columnMenu]=\"true\" [pageable]=\"{\r\n          buttonCount: buttonCount,\r\n          info: info,\r\n          type: type,\r\n          pageSizes: pageSizes,\r\n          previousNext: previousNext\r\n        }\" [scrollable]=\"'none'\" (pageChange)=\"pageChange($event)\">\r\n            <kendo-grid-column *ngFor=\"let column of columns\" field=\"{{column.field}}\" title=\"{{column.title}}\"\r\n                [columnMenu]=\"column.columnMenu\">\r\n                <ng-template *ngIf=\"column.button\" kendoGridCellTemplate let-dataItem>\r\n                    <div style=\"display: flex;justify-content: center;\">\r\n                        <button (click)=\"showHistory(dataItem)\" class=\"button\">Детальніше</button>\r\n                    </div>\r\n                </ng-template>\r\n            </kendo-grid-column>\r\n        </kendo-grid>\r\n    </div>\r\n</div>\r\n<div kendoDialogContainer></div>\r\n\r\n<!-- <div class=\"control-panel-container\">\r\n    <div class=\"control-panel-container__header\">\r\n        <div *ngIf=\"isDeviceConnected\" class=\"control-panel-container__header__connection-message\">\r\n            <span class=\"control-panel-container__header__connection-message__text\">Connection with device has\r\n                established</span>\r\n            <div>\r\n                <span>Serial number</span>\r\n                <span>Model of device</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"control-panel-container__header__show-history\">\r\n            <span class=\"control-panel-container__header__show-history__text\">Show history of measurements</span>\r\n            <button (click)=\"showHistory()\"\r\n                class=\"control-panel-container__header__show-history__button\">Append</button>\r\n            <div kendoDialogContainer></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"control-panel-container__selector-control\">\r\n        <span class=\"control-panel-container__selector-control__label\">Unit of Concentration measurement: </span>\r\n        <kendo-dropdownlist [data]=\"unitsOfMeasurement\" [value]=\"'mg/m3'\">\r\n        </kendo-dropdownlist>\r\n    </div>\r\n    <form [formGroup]=\"reactiveForm\" class=\"control-panel-container__form\">\r\n        <div class=\"control-panel-container__form__container\">\r\n            <div class=\"control-panel-container__form__container__item\">\r\n                <span class=\"control-panel-container__form__container__item__text\">Date of Measurement: </span>\r\n                <input formControlName=\"date\" class=\"control-panel-container__form__container__item__value\">\r\n            </div>\r\n            <div class=\"control-panel-container__form__container__item\">\r\n                <span class=\"control-panel-container__form__container__item__text\">Measured Temperature,\r\n                    <span>°С</span>: </span>\r\n                <input formControlName=\"temperature\" class=\"control-panel-container__form__container__item__value\">\r\n                <div *ngIf=\"reactiveForm.controls.temperature.invalid\">\r\n                    {{validationMessages.temperature.required}}\r\n                </div>\r\n            </div>\r\n            <div class=\"control-panel-container__form__container__item\">\r\n                <span class=\"control-panel-container__form__container__item__text\">Measured\r\n                    Concentration, <span>mg/m3</span> :</span>\r\n                <input formControlName=\"concentration\" class=\"control-panel-container__form__container__item__value\">\r\n            </div>\r\n            <div class=\"control-panel-container__form__container__item\">\r\n                <span class=\"control-panel-container__form__container__item__text\">Measured Humidity,\r\n                    <span>mg/m3</span>:</span>\r\n                <input formControlName=\"humidity\" class=\"control-panel-container__form__container__item__value\">\r\n            </div>\r\n            <div class=\"control-panel-container__form__container__item\">\r\n                <span class=\"control-panel-container__form__container__item__text\">Name of Measured Gas:\r\n                </span>\r\n                <input formControlName=\"name\" class=\"control-panel-container__form__container__item__value\">\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"control-panel-container__check-normality\">\r\n        <span class=\"control-panel-container__check-normality__text\">Check normality of concetration with current\r\n            values</span>\r\n        <button (click)=\"checkNormality()\" class=\"control-panel-container__check-normality__button\">Apply</button>\r\n    </div>\r\n</div> -->\r\n\r\n<!-- <span *ngif=\"reactiveForm.invalid\"> Validation message</span> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/index.js":
/*!*********************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(__webpack_require__(/*! ./src/app/index */ "./packages/@g-a-s-features/control-panel/src/app/index.ts"));


/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/src/app/components/details/details.component.scss":
/*!**************************************************************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/src/app/components/details/details.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n  .container__header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\n    margin-bottom: 30px;\n    padding: 25px 15px;\n    background-color: #8080801f; }\n  .container__header__text {\n      font-size: 20px;\n      font-weight: 600; }\n  .container__header__close-button {\n      border-radius: 50%;\n      padding: 2px 5px;\n      font-weight: 600; }\n  .container__content {\n    display: flex;\n    justify-content: space-around; }\n  .container__content__field__text {\n      font-size: 17px;\n      font-weight: 500; }\n  .button {\n  color: white;\n  background-color: #3f51b5;\n  border: 1px solid #3f51b5;\n  border-radius: 20px;\n  padding: 8px;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL0BnLWEtcy1mZWF0dXJlcy9jb250cm9sLXBhbmVsL3NyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL0Q6XFxPTEdBXFzQndCw0LLRh9Cw0L3QvdGPXFxLUElcXDExIHNlbWVzdHJcXNC00LjQv9C70L7QvFxcd2ViLWFwcGxpY2F0aW9uXFxnYXMtYW5hbHlzaXMtc3lzdGVtL3BhY2thZ2VzXFxAZy1hLXMtZmVhdHVyZXNcXGNvbnRyb2wtcGFuZWxcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxkZXRhaWxzXFxkZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQUN0QjtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdGQUFnRjtJQUNoRixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDJCQUEyQixFQUFBO0VBQzNCO01BQ0UsZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBRWxCO01BQ0Usa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixnQkFBZ0IsRUFBQTtFQUdwQjtJQUNFLGFBQWE7SUFDYiw2QkFBNkIsRUFBQTtFQUUzQjtNQUNFLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtFQUt4QjtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUEiLCJmaWxlIjoicGFja2FnZXMvQGctYS1zLWZlYXR1cmVzL2NvbnRyb2wtcGFuZWwvc3JjL2FwcC9jb21wb25lbnRzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgJl9faGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMjVweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDFmO1xyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgICZfX2Nsb3NlLWJ1dHRvbiB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAmX19maWVsZCB7XHJcbiAgICAgICZfX3RleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZjUxYjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/src/app/components/details/details.component.ts":
/*!************************************************************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/src/app/components/details/details.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");



let DetailsComponent = class DetailsComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.fakeData = [
            {
                date: '11/29/2019 -- 15:00',
                temperature: 25,
                concentration: 1.2,
                humidity: 60,
                type: 1,
                name: 'CO',
                id: 1
            },
            {
                date: '11/29/2019 -- 23:00',
                temperature: 21,
                concentration: 7.2,
                humidity: 50,
                type: 1,
                name: 'CO',
                id: 2
            }
        ];
    }
    ngOnInit() {
        // this.fakeDataItem = this.controlPanelComponent.fakeDataItem;
    }
    close() {
        this.dialog.close();
    }
};
DetailsComponent.ctorParameters = () => [
    { type: _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__["DialogRef"] }
];
DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./packages/@g-a-s-features/control-panel/src/app/components/details/details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details.component.scss */ "./packages/@g-a-s-features/control-panel/src/app/components/details/details.component.scss")).default]
    })
], DetailsComponent);



/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/src/app/components/info/info.component.scss":
/*!********************************************************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/src/app/components/info/info.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n  .container__header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\n    margin-bottom: 30px;\n    padding: 25px 15px;\n    background-color: #8080801f; }\n  .container__header__text {\n      font-size: 20px;\n      font-weight: 600; }\n  .container__header__close-button {\n      border-radius: 50%;\n      padding: 2px 5px;\n      font-weight: 600; }\n  .container__content {\n    padding: 25px 15px; }\n  .container__content__field__text {\n      font-size: 20px;\n      font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL0BnLWEtcy1mZWF0dXJlcy9jb250cm9sLXBhbmVsL3NyYy9hcHAvY29tcG9uZW50cy9pbmZvL0Q6XFxPTEdBXFzQndCw0LLRh9Cw0L3QvdGPXFxLUElcXDExIHNlbWVzdHJcXNC00LjQv9C70L7QvFxcd2ViLWFwcGxpY2F0aW9uXFxnYXMtYW5hbHlzaXMtc3lzdGVtL3BhY2thZ2VzXFxAZy1hLXMtZmVhdHVyZXNcXGNvbnRyb2wtcGFuZWxcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxpbmZvXFxpbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQUN0QjtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdGQUFnRjtJQUNoRixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDJCQUEyQixFQUFBO0VBQzNCO01BQ0UsZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBRWxCO01BQ0Usa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixnQkFBZ0IsRUFBQTtFQUdwQjtJQUNFLGtCQUFrQixFQUFBO0VBRWhCO01BQ0UsZUFBZTtNQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InBhY2thZ2VzL0BnLWEtcy1mZWF0dXJlcy9jb250cm9sLXBhbmVsL3NyYy9hcHAvY29tcG9uZW50cy9pbmZvL2luZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICZfX2hlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODAxZjtcclxuICAgICZfX3RleHQge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICAmX19jbG9zZS1idXR0b24ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjVweCAxNXB4O1xyXG4gICAgJl9fZmllbGQge1xyXG4gICAgICAmX190ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/src/app/components/info/info.component.ts":
/*!******************************************************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/src/app/components/info/info.component.ts ***!
  \******************************************************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");



let InfoComponent = class InfoComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    close() {
        this.dialog.close();
    }
};
InfoComponent.ctorParameters = () => [
    { type: _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__["DialogRef"] }
];
InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./packages/@g-a-s-features/control-panel/src/app/components/info/info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info.component.scss */ "./packages/@g-a-s-features/control-panel/src/app/components/info/info.component.scss")).default]
    })
], InfoComponent);



/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/src/app/control-panel.component.scss":
/*!*************************************************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/src/app/control-panel.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host/deep/ .k-content.k-window-content.k-dialog-content {\n  height: 80vh;\n  width: 80vw;\n  padding: 0; }\n\n.container {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.container__header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\n    margin-bottom: 30px;\n    padding: 25px 15px; }\n\n.container__header__text {\n      font-size: 20px;\n      font-weight: 600; }\n\n.container__grid {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    flex: 1 1; }\n\n.container__grid__text {\n      font-size: 20px;\n      font-weight: 600;\n      padding: 0 0 20px 15px; }\n\n.grid {\n  height: 100%;\n  margin: 0 5px 5px; }\n\n.button {\n  color: white;\n  background-color: #3f51b5;\n  border: 1px solid #3f51b5;\n  border-radius: 20px;\n  padding: 8px;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL0BnLWEtcy1mZWF0dXJlcy9jb250cm9sLXBhbmVsL3NyYy9hcHAvRDpcXE9MR0FcXNCd0LDQstGH0LDQvdC90Y9cXEtQSVxcMTEgc2VtZXN0clxc0LTQuNC/0LvQvtC8XFx3ZWItYXBwbGljYXRpb25cXGdhcy1hbmFseXNpcy1zeXN0ZW0vcGFja2FnZXNcXEBnLWEtcy1mZWF0dXJlc1xcY29udHJvbC1wYW5lbFxcc3JjXFxhcHBcXGNvbnRyb2wtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBQ3RCO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0ZBQWdGO0lBQ2hGLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTs7QUFDbEI7TUFDRSxlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUyxFQUFBOztBQUNUO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixzQkFBc0IsRUFBQTs7QUFLNUI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0IsRUFBQSIsImZpbGUiOiJwYWNrYWdlcy9AZy1hLXMtZmVhdHVyZXMvY29udHJvbC1wYW5lbC9zcmMvYXBwL2NvbnRyb2wtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC9kZWVwLyAuay1jb250ZW50Lmstd2luZG93LWNvbnRlbnQuay1kaWFsb2ctY29udGVudCB7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgJl9faGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMjVweCAxNXB4O1xyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fZ3JpZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXg6IDEgMTtcclxuICAgICZfX3RleHQge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAyMHB4IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMCA1cHggNXB4O1xyXG59XHJcbi5idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZjUxYjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4vLyA6aG9zdC9kZWVwLyBrZW5kby1kcm9wZG93bmxpc3Qge1xyXG4vLyAgIHdpZHRoOiA1MDBweDtcclxuLy8gfVxyXG5cclxuLy8gOmhvc3QvZGVlcC8gLmstZHJvcGRvd24uay1kcm9wZG93bi13cmFwLmstaW5wdXQge1xyXG4vLyAgIHBhZGRpbmc6IDhweCA4cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5jb250cm9sLXBhbmVsLWNvbnRhaW5lciB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICZfX2hlYWRlciB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgMTJweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuLy8gICAgIHBhZGRpbmc6IDE1cHg7XHJcbi8vICAgICAmX19jb25uZWN0aW9uLW1lc3NhZ2Uge1xyXG4vLyAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAmX190ZXh0IHtcclxuLy8gICAgICAgICBjb2xvcjogZ3JlZW47XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgICZfX3Nob3ctaGlzdG9yeSB7XHJcbi8vICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICZfX3RleHQge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAmX19idXR0b24ge1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VlO1xyXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbi8vICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgICZfX3NlbGVjdG9yLWNvbnRyb2wge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIHBhZGRpbmc6IDAgMTVweDtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAmX19sYWJlbCB7XHJcbi8vICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuLy8gICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICAmX19mb3JtIHtcclxuLy8gICAgIG1hcmdpbjogMTVweCAwO1xyXG4vLyAgICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M2YzZjNjFhO1xyXG4vLyAgICAgJl9fY29udGFpbmVyIHtcclxuLy8gICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgICAgJl9faXRlbSB7XHJcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbi8vICAgICAgICAgJl9fdGV4dCB7XHJcbi8vICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAmX192YWx1ZSB7XHJcbi8vICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VlO1xyXG4vLyAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbi8vICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbi8vICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4vLyAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAmX19pdGVtOmxhc3QtY2hpbGQge1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgJl9fY2hlY2stbm9ybWFsaXR5IHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgJl9fdGV4dCB7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICAgIH1cclxuLy8gICAgICZfX2J1dHRvbiB7XHJcbi8vICAgICAgIHdpZHRoOiAxMDBweDtcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlZTtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbi8vICAgICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuIl19 */");

/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/src/app/control-panel.component.ts":
/*!***********************************************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/src/app/control-panel.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ControlPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanelComponent", function() { return ControlPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
/* harmony import */ var _models_measured_data_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/measured-data.model */ "./packages/@g-a-s-features/control-panel/src/app/models/measured-data.model.ts");
/* harmony import */ var packages_g_a_s_shared_shared_src_app_grid_grid_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! packages/@g-a-s-shared/shared/src/app/grid/grid-base.component */ "./packages/@g-a-s-shared/shared/src/app/grid/grid-base.component.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/details/details.component */ "./packages/@g-a-s-features/control-panel/src/app/components/details/details.component.ts");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/info/info.component */ "./packages/@g-a-s-features/control-panel/src/app/components/info/info.component.ts");







let ControlPanelComponent = class ControlPanelComponent extends packages_g_a_s_shared_shared_src_app_grid_grid_base_component__WEBPACK_IMPORTED_MODULE_4__["GridBaseComponent"] {
    constructor(dialogService) {
        super();
        this.dialogService = dialogService;
        this.fakeDataItem = new _models_measured_data_model__WEBPACK_IMPORTED_MODULE_3__["MeasuredData"]();
        this.fakeData = [
            {
                date: '11/29/2019 -- 15:00',
                temperature: 25,
                concentration: 1.2,
                humidity: 60,
                type: 1,
                name: 'CO',
                id: 1
            },
            {
                date: '11/29/2019 -- 23:00',
                temperature: 21,
                concentration: 7.2,
                humidity: 50,
                type: 1,
                name: 'CO',
                id: 2
            }
        ];
        this.columns = [
            {
                field: 'date',
                title: 'Дата',
                columnMenu: true
            }, {
                field: 'temperature',
                title: 'Температура',
                columnMenu: true
            }, {
                field: 'concentration',
                title: 'Концентрація',
                columnMenu: true
            }, {
                field: 'name',
                title: 'Назва сполуки',
                columnMenu: true
            }, {
                button: 'details',
                title: '',
                columnMenu: false
            }
        ];
    }
    ngOnInit() {
        this.loadData(this.fakeData);
    }
    showHistory(item) {
        this.fakeDataItem = item;
        this.dialogService.open({ content: _components_details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"] });
    }
    showInfo() {
        this.dialogService.open({ content: _components_info_info_component__WEBPACK_IMPORTED_MODULE_6__["InfoComponent"] });
    }
};
ControlPanelComponent.ctorParameters = () => [
    { type: _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"] }
];
ControlPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-control-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./control-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./packages/@g-a-s-features/control-panel/src/app/control-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./control-panel.component.scss */ "./packages/@g-a-s-features/control-panel/src/app/control-panel.component.scss")).default]
    })
], ControlPanelComponent);



/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/src/app/control-panel.module.ts":
/*!********************************************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/src/app/control-panel.module.ts ***!
  \********************************************************************************/
/*! exports provided: ControlPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanelModule", function() { return ControlPanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _control_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control-panel.component */ "./packages/@g-a-s-features/control-panel/src/app/control-panel.component.ts");
/* harmony import */ var _control_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control-panel.service */ "./packages/@g-a-s-features/control-panel/src/app/control-panel.service.ts");
/* harmony import */ var _control_panel_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./control-panel.routing */ "./packages/@g-a-s-features/control-panel/src/app/control-panel.routing.ts");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/details/details.component */ "./packages/@g-a-s-features/control-panel/src/app/components/details/details.component.ts");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/info/info.component */ "./packages/@g-a-s-features/control-panel/src/app/components/info/info.component.ts");












let ControlPanelModule = class ControlPanelModule {
};
ControlPanelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _control_panel_component__WEBPACK_IMPORTED_MODULE_4__["ControlPanelComponent"],
            _components_details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
            _components_info_info_component__WEBPACK_IMPORTED_MODULE_11__["InfoComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _control_panel_routing__WEBPACK_IMPORTED_MODULE_6__["ControlPanelRoutingModule"],
            _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__["DropDownsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["GridModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [
            _control_panel_service__WEBPACK_IMPORTED_MODULE_5__["ControlPanelService"],
        ],
        entryComponents: [_components_details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"], _components_info_info_component__WEBPACK_IMPORTED_MODULE_11__["InfoComponent"]],
        exports: [_control_panel_component__WEBPACK_IMPORTED_MODULE_4__["ControlPanelComponent"], _components_details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"], _components_info_info_component__WEBPACK_IMPORTED_MODULE_11__["InfoComponent"]]
    })
], ControlPanelModule);



/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/src/app/control-panel.routing.ts":
/*!*********************************************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/src/app/control-panel.routing.ts ***!
  \*********************************************************************************/
/*! exports provided: ControlPanelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanelRoutingModule", function() { return ControlPanelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _control_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-panel.component */ "./packages/@g-a-s-features/control-panel/src/app/control-panel.component.ts");



const controlPanelRoutes = [
    { path: '', component: _control_panel_component__WEBPACK_IMPORTED_MODULE_2__["ControlPanelComponent"], pathMatch: 'full' },
];
const ControlPanelRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(controlPanelRoutes);


/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/src/app/control-panel.service.ts":
/*!*********************************************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/src/app/control-panel.service.ts ***!
  \*********************************************************************************/
/*! exports provided: ControlPanelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanelService", function() { return ControlPanelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// import { MasterDataApiUrls, MasterDataContext, ServiceBase } from '@vynamic-connect-shared/shared';
let ControlPanelService = class ControlPanelService {
    constructor() {
    }
};
ControlPanelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ControlPanelService);

// export class ControlPanelService extends ServiceBase<Bank> {
//   constructor(private context: MasterDataContext) {
//     super(MasterDataApiUrls.bank.main, context);
//   }
// }


/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/src/app/index.ts":
/*!*****************************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/src/app/index.ts ***!
  \*****************************************************************/
/*! exports provided: ControlPanelModule, ControlPanelRoutingModule, ControlPanelComponent, ControlPanelService, MeasuredData, GasType, MeasuredDataFormErrorsViewModel, AppropriateConcentration, CO, CO2, NO2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _control_panel_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-panel.module */ "./packages/@g-a-s-features/control-panel/src/app/control-panel.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlPanelModule", function() { return _control_panel_module__WEBPACK_IMPORTED_MODULE_1__["ControlPanelModule"]; });

/* harmony import */ var _control_panel_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-panel.routing */ "./packages/@g-a-s-features/control-panel/src/app/control-panel.routing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlPanelRoutingModule", function() { return _control_panel_routing__WEBPACK_IMPORTED_MODULE_2__["ControlPanelRoutingModule"]; });

/* harmony import */ var _control_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control-panel.component */ "./packages/@g-a-s-features/control-panel/src/app/control-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlPanelComponent", function() { return _control_panel_component__WEBPACK_IMPORTED_MODULE_3__["ControlPanelComponent"]; });

/* harmony import */ var _control_panel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control-panel.service */ "./packages/@g-a-s-features/control-panel/src/app/control-panel.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlPanelService", function() { return _control_panel_service__WEBPACK_IMPORTED_MODULE_4__["ControlPanelService"]; });

/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models */ "./packages/@g-a-s-features/control-panel/src/app/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeasuredData", function() { return _models__WEBPACK_IMPORTED_MODULE_5__["MeasuredData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GasType", function() { return _models__WEBPACK_IMPORTED_MODULE_5__["GasType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeasuredDataFormErrorsViewModel", function() { return _models__WEBPACK_IMPORTED_MODULE_5__["MeasuredDataFormErrorsViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppropriateConcentration", function() { return _models__WEBPACK_IMPORTED_MODULE_5__["AppropriateConcentration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CO", function() { return _models__WEBPACK_IMPORTED_MODULE_5__["CO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CO2", function() { return _models__WEBPACK_IMPORTED_MODULE_5__["CO2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NO2", function() { return _models__WEBPACK_IMPORTED_MODULE_5__["NO2"]; });









/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/src/app/models/appropriate-concentration.model.ts":
/*!**************************************************************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/src/app/models/appropriate-concentration.model.ts ***!
  \**************************************************************************************************/
/*! exports provided: AppropriateConcentration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppropriateConcentration", function() { return AppropriateConcentration; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AppropriateConcentration;
(function (AppropriateConcentration) {
    AppropriateConcentration[AppropriateConcentration["CO"] = 20] = "CO";
    AppropriateConcentration[AppropriateConcentration["CO2"] = 7302.88] = "CO2";
    AppropriateConcentration[AppropriateConcentration["NO2"] = 2] = "NO2";
})(AppropriateConcentration || (AppropriateConcentration = {}));


/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/src/app/models/co.model.ts":
/*!***************************************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/src/app/models/co.model.ts ***!
  \***************************************************************************/
/*! exports provided: CO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CO", function() { return CO; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CO {
    constructor() {
        this.date = null;
        this.temperature = null;
        this.concentration = null;
        this.humidity = null;
        this.type = null;
        this.id = null;
        this.name = null;
    }
}


/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/src/app/models/co2.model.ts":
/*!****************************************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/src/app/models/co2.model.ts ***!
  \****************************************************************************/
/*! exports provided: CO2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CO2", function() { return CO2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CO2 {
    constructor() {
        this.date = null;
        this.temperature = null;
        this.concentration = null;
        this.humidity = null;
        this.type = null;
        this.id = null;
        this.name = null;
    }
}


/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/src/app/models/index.ts":
/*!************************************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/src/app/models/index.ts ***!
  \************************************************************************/
/*! exports provided: MeasuredData, GasType, MeasuredDataFormErrorsViewModel, AppropriateConcentration, CO, CO2, NO2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _measured_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./measured-data.model */ "./packages/@g-a-s-features/control-panel/src/app/models/measured-data.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeasuredData", function() { return _measured_data_model__WEBPACK_IMPORTED_MODULE_1__["MeasuredData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GasType", function() { return _measured_data_model__WEBPACK_IMPORTED_MODULE_1__["GasType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeasuredDataFormErrorsViewModel", function() { return _measured_data_model__WEBPACK_IMPORTED_MODULE_1__["MeasuredDataFormErrorsViewModel"]; });

/* harmony import */ var _appropriate_concentration_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appropriate-concentration.model */ "./packages/@g-a-s-features/control-panel/src/app/models/appropriate-concentration.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppropriateConcentration", function() { return _appropriate_concentration_model__WEBPACK_IMPORTED_MODULE_2__["AppropriateConcentration"]; });

/* harmony import */ var _co_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./co.model */ "./packages/@g-a-s-features/control-panel/src/app/models/co.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CO", function() { return _co_model__WEBPACK_IMPORTED_MODULE_3__["CO"]; });

/* harmony import */ var _co2_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./co2.model */ "./packages/@g-a-s-features/control-panel/src/app/models/co2.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CO2", function() { return _co2_model__WEBPACK_IMPORTED_MODULE_4__["CO2"]; });

/* harmony import */ var _no2_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./no2.model */ "./packages/@g-a-s-features/control-panel/src/app/models/no2.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NO2", function() { return _no2_model__WEBPACK_IMPORTED_MODULE_5__["NO2"]; });









/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/src/app/models/measured-data.model.ts":
/*!**************************************************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/src/app/models/measured-data.model.ts ***!
  \**************************************************************************************/
/*! exports provided: MeasuredData, GasType, MeasuredDataFormErrorsViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasuredData", function() { return MeasuredData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GasType", function() { return GasType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasuredDataFormErrorsViewModel", function() { return MeasuredDataFormErrorsViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MeasuredData {
}
var GasType;
(function (GasType) {
    GasType[GasType["co"] = 1] = "co";
    GasType[GasType["co2"] = 2] = "co2";
    GasType[GasType["no2"] = 3] = "no2";
    GasType[GasType["ch2o"] = 4] = "ch2o";
    GasType[GasType["h2s"] = 5] = "h2s";
})(GasType || (GasType = {}));
class MeasuredDataFormErrorsViewModel {
    constructor() {
        this.date = null;
        this.temperature = null;
        this.concentration = null;
        this.humidity = null;
        this.type = null;
        this.name = null;
    }
}


/***/ }),

/***/ "./packages/@g-a-s-features/control-panel/src/app/models/no2.model.ts":
/*!****************************************************************************!*\
  !*** ./packages/@g-a-s-features/control-panel/src/app/models/no2.model.ts ***!
  \****************************************************************************/
/*! exports provided: NO2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO2", function() { return NO2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class NO2 {
    constructor() {
        this.date = null;
        this.temperature = null;
        this.concentration = null;
        this.humidity = null;
        this.type = null;
        this.id = null;
        this.name = null;
    }
}


/***/ }),

/***/ "./packages/@g-a-s-shared/shared/src/app/grid/grid-base.component.ts":
/*!***************************************************************************!*\
  !*** ./packages/@g-a-s-shared/shared/src/app/grid/grid-base.component.ts ***!
  \***************************************************************************/
/*! exports provided: GridBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBaseComponent", function() { return GridBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GridBaseComponent {
    constructor() {
        this.pageSize = 15;
        this.skip = 0;
    }
    get searchValue() {
        return this._searchValue;
    }
    set searchValue(value) {
        this._searchValue = value;
        this.loadGridView();
    }
    // TODO:
    // constructor(private observableData: Observable<T>) {
    //     observableData.subscribe((data: T[]) => {
    //         this.loadData(data)
    //     });
    // }
    loadData(data) {
        this.data = data;
        this.loadGridView();
    }
    pageChange({ skip, take }) {
        this.skip = skip;
        this.pageSize = take;
        this.loadGridView();
    }
    loadGridView() {
        let filteredData = this.applyPagination(this.applySearch());
        this.gridView = {
            data: filteredData,
            total: this.data.length
        };
    }
    applySearch() {
        if (!this.searchValue) {
            return this.data;
        }
        return this.data.filter((item) => {
            return this.checkIfItemContainsText(item, this.searchValue);
        });
    }
    applyPagination(data) {
        return data.slice(this.skip, this.skip + this.pageSize);
    }
    checkIfItemContainsText(item, text) {
        let itemFound = false;
        Object.getOwnPropertyNames(item).forEach(prop => {
            if (item[prop].toString().toUpperCase().indexOf(text.toUpperCase()) > -1) {
                itemFound = true;
                // TODO: Exit from loop
            }
        });
        return itemFound;
    }
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'gas-analysis-system';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var packages_g_a_s_features_control_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! packages/@g-a-s-features/control-panel */ "./packages/@g-a-s-features/control-panel/index.js");
/* harmony import */ var packages_g_a_s_features_control_panel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(packages_g_a_s_features_control_panel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientJsonpModule"],
            packages_g_a_s_features_control_panel__WEBPACK_IMPORTED_MODULE_6__["ControlPanelModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var packages_g_a_s_features_control_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! packages/@g-a-s-features/control-panel */ "./packages/@g-a-s-features/control-panel/index.js");
/* harmony import */ var packages_g_a_s_features_control_panel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(packages_g_a_s_features_control_panel__WEBPACK_IMPORTED_MODULE_2__);



const routes = [
    {
        path: '',
        component: packages_g_a_s_features_control_panel__WEBPACK_IMPORTED_MODULE_2__["ControlPanelComponent"]
    }
];
const AppRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\OLGA\Навчання\KPI\11 semestr\диплом\web-application\gas-analysis-system\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map