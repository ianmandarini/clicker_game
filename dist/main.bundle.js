webpackJsonp([1,4],{

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 142;


/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(159);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_language_language_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_clickers_clicker_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(lang, currency, clickers) {
        this.lang = lang;
        this.currency = currency;
        this.clickers = clickers;
        this.isOnClickMeButtonShakeAnimation = false;
    }
    AppComponent.prototype.click = function () {
        var _this = this;
        this.isOnClickMeButtonShakeAnimation = false;
        setTimeout(function () { _this.isOnClickMeButtonShakeAnimation = true; }, 1);
        this.currency.add(0, 1);
    };
    AppComponent.prototype.gameTick = function () {
        for (var i = 0; i < this.clickers.total(); i++) {
            this.clickers.tick(i);
        }
    };
    AppComponent.prototype.xcps = function () {
        var cps = 0;
        for (var i = 0; i < this.clickers.total(); i++) {
            cps += this.clickers.cps(i);
        }
        return Math.floor(10.0 * cps) / 10.0;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () { _this.gameTick(); }, 1);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(217),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_language_language_service__["a" /* LanguageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_clickers_clicker_service__["a" /* ClickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_clickers_clicker_service__["a" /* ClickerService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_currency_currency_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_clickers_clicker_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__clickers_clicker_panel_clicker_panel_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__clickers_clicker_item_clicker_item_component__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__clickers_clicker_panel_clicker_panel_component__["a" /* ClickerPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_10__clickers_clicker_item_clicker_item_component__["a" /* ClickerItemComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_5_app_currency_currency_service__["a" /* CurrencyService */],
            __WEBPACK_IMPORTED_MODULE_6_app_clickers_clicker_service__["a" /* ClickerService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_clickers_clicker_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_language_language_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickerItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClickerItemComponent = (function () {
    function ClickerItemComponent(lang, currency, clickers) {
        this.lang = lang;
        this.currency = currency;
        this.clickers = clickers;
        this.canActivateTooltip = false;
        this.isOnAnimation = false;
    }
    ClickerItemComponent.prototype.ngOnInit = function () {
    };
    ClickerItemComponent.prototype.onClick = function () {
        var _this = this;
        if (this.clickers.canPurchase(this.clicker_index)) {
            this.isOnAnimation = false;
            setTimeout(function () { _this.isOnAnimation = true; }, 1);
        }
        this.clickers.purchase(this.clicker_index);
    };
    ClickerItemComponent.prototype.onMouseEnter = function () {
        var _this = this;
        this.canActivateTooltip = true;
        setTimeout(function () {
            if (_this.canActivateTooltip) {
                _this.tooltip.open();
            }
        }, 1000);
    };
    ClickerItemComponent.prototype.onMouseLeave = function () {
        var _this = this;
        this.canActivateTooltip = false;
        this.tooltip.close();
        setTimeout(function () {
            _this.canActivateTooltip = false;
            _this.tooltip.close();
        }, 1);
    };
    ClickerItemComponent.prototype.onPress = function () {
        this.tooltip.open();
    };
    return ClickerItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])("clickerIndex"),
    __metadata("design:type", Number)
], ClickerItemComponent.prototype, "clicker_index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('tooltip'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbTooltip */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbTooltip */]) === "function" && _a || Object)
], ClickerItemComponent.prototype, "tooltip", void 0);
ClickerItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-clicker-item',
        template: __webpack_require__(218),
        styles: [__webpack_require__(214)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_language_language_service__["a" /* LanguageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_app_clickers_clicker_service__["a" /* ClickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_clickers_clicker_service__["a" /* ClickerService */]) === "function" && _d || Object])
], ClickerItemComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=clicker-item.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_clickers_clicker_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickerPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClickerPanelComponent = (function () {
    function ClickerPanelComponent(clickers) {
        this.clickers = clickers;
    }
    ClickerPanelComponent.prototype.ngOnInit = function () {
    };
    return ClickerPanelComponent;
}());
ClickerPanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-clicker-panel',
        template: __webpack_require__(219),
        styles: [__webpack_require__(215)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_clickers_clicker_service__["a" /* ClickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_clickers_clicker_service__["a" /* ClickerService */]) === "function" && _a || Object])
], ClickerPanelComponent);

var _a;
//# sourceMappingURL=clicker-panel.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clicker; });
var Clicker = (function () {
    function Clicker(currencyService, tag_singular, tag_plural, tag_description, power, currency, cost, cost_multiplier) {
        this.currencyService = currencyService;
        this.tag_singular = tag_singular;
        this.tag_plural = tag_plural;
        this.tag_description = tag_description;
        this.power = power;
        this.currency = currency;
        this.cost = cost;
        this.cost_multiplier = cost_multiplier;
        this.enabled = false;
        this.count = 0;
    }
    Clicker.prototype.setup = function () {
        this.enabled = false;
        this.count = 0;
    };
    Clicker.prototype.tagS = function () {
        return this.tag_singular;
    };
    Clicker.prototype.tagP = function () {
        return this.tag_plural;
    };
    Clicker.prototype.tagDescription = function () {
        return this.tag_description;
    };
    Clicker.prototype.enable = function () {
        this.enabled = true;
    };
    Clicker.prototype.isEnabled = function () {
        return this.enabled;
    };
    Clicker.prototype.xcost = function () {
        return Math.floor(this.cost);
    };
    Clicker.prototype.cps = function () {
        return this.count * this.power;
    };
    Clicker.prototype.tick = function () {
        this.currencyService.add(0, this.cps() / 1000.0);
    };
    Clicker.prototype.xcount = function () {
        return this.count;
    };
    Clicker.prototype.xpower = function () {
        return this.power;
    };
    Clicker.prototype.purchase = function () {
        if (this.currencyService.hasEnough(this.currency, this.xcost())) {
            this.currencyService.add(this.currency, (-1) * this.xcost());
            this.cost *= this.cost_multiplier;
            this.count += 1;
        }
    };
    Clicker.prototype.getCurrency = function () {
        return this.currency;
    };
    Clicker.prototype.totalPower = function () {
        return this.count * this.power;
    };
    return Clicker;
}());

//# sourceMappingURL=clicker.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Currency; });
var Currency = (function () {
    function Currency(tag_singular, tag_plural) {
        this.tag_singular = tag_singular;
        this.tag_plural = tag_plural;
        this.count = 0;
    }
    Currency.prototype.add = function (value) {
        this.count += value;
    };
    Currency.prototype.xcount = function () {
        return Math.floor(this.count);
    };
    Currency.prototype.tagS = function () {
        return this.tag_singular;
    };
    Currency.prototype.tagP = function () {
        return this.tag_plural;
    };
    Currency.prototype.hasEnough = function (value) {
        return this.count >= value;
    };
    return Currency;
}());

//# sourceMappingURL=currency.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnUs; });
var EnUs = {
    "title": "The Clicker Saga",
    "credits": "Made by Ian Albuquerque",
    "for": "for",
    "count": "count",
    "total": "total",
    "produces": "produces",
    "of": "of",
    "s": "s",
    "click": "click",
    "clicks": "clicks",
    "cost": "cost",
    "costs": "costs",
    "clicker": "clicker",
    "clickers": "clickers",
    "clicker_description": "You might ask yourself what does a clicker do. The answer might not be that obvious, but it is certainly mesmerizing once you contemplate it.",
    "buy": "buy",
    "click_button_text": "Click Me",
    "intern": "intern",
    "interns": "interns",
    "intern_description": "A multi-use, cheap, expandable resource. It features two hands, which allows it to operate at two clicks per second. Amazing!",
};
//# sourceMappingURL=en-us.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, ".clicker-panel {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: 80%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col text-center\">\r\n      <h1>\r\n        {{lang.txt(\"title\")}}\r\n      </h1>\r\n      {{lang.txt(\"credits\")}}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col text-center\">\r\n      <h4>\r\n        <div [class.hop-animation] = \"isOnClickMeButtonShakeAnimation\">\r\n          {{lang.Txt(currency.tagP(0))}}: {{currency.xcount(0)}}\r\n        </div>\r\n        <small>\r\n          (\r\n            {{xcps()}}\r\n            {{lang.Txt(\"clicks\")}}/{{lang.txt(\"s\")}}\r\n          )\r\n        </small>\r\n      </h4>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row main-row align-items-top\">\r\n    <div class=\"col col-sm-8\">\r\n\r\n      <div class=\"row justify-content-top\">\r\n        <div class=\"col text-center\">\r\n          <button type=\"button\" \r\n                  class=\"btn btn-lg btn-primary click-me-button\" \r\n                  (click)=\"click()\"\r\n                  [class.shake-animation] = \"isOnClickMeButtonShakeAnimation\">\r\n            <h2>\r\n              {{lang.txt(\"click_button_text\")}}\r\n            </h2>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col col-sm-4\">\r\n      <app-clicker-panel></app-clicker-panel>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<div  class=\"card panel-item btn\"\r\n      #tooltip=\"ngbTooltip\"\r\n      triggers=\"manual\"\r\n      placement=\"top\"\r\n      ngbTooltip=\"{{lang.Txt(clickers.tagDescription(clicker_index))}}\"\r\n      [class.disabled]=\"!clickers.canPurchase(clicker_index)\"\r\n      [class.hop-animation]=\"isOnAnimation\" \r\n      (click)=\"onClick()\"\r\n      (mouseenter)=\"onMouseEnter()\"\r\n      (mouseleave)=\"onMouseLeave()\"\r\n      (press)=\"onPress()\"\r\n      (tap)=\"onMouseLeave()\">\r\n  <div class=\"card-block\" >\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5>\r\n          {{lang.Txt(clickers.tagS(clicker_index))}}\r\n          <br/>\r\n          <small>\r\n            {{lang.Txt(\"costs\")}}\r\n            {{clickers.xcost(clicker_index)}}\r\n            {{lang.Txt(currency.tagP(clickers.getCurrency(clicker_index)))}}\r\n          </small>\r\n        </h5>\r\n      </div>\r\n      <div class=\"col\">\r\n        <b>\r\n          {{lang.Txt(\"count\")}}:\r\n          {{clickers.xcount(clicker_index)}}\r\n        </b>\r\n        <br/>\r\n        {{lang.Txt(\"produces\")}}\r\n        {{clickers.xpower(clicker_index)}}\r\n        {{lang.Txt(\"clicks\")}}/{{lang.txt(\"s\")}}\r\n        <br/>\r\n        {{lang.Txt(\"total\")}}\r\n        {{lang.txt(\"of\")}}\r\n        {{clickers.totalPower(clicker_index)}}\r\n        {{lang.Txt(\"clicks\")}}/{{lang.txt(\"s\")}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">\r\n  Clickers\r\n</h2>\r\n<div class=\"clicker-panel text-center\">\r\n  <app-clicker-item *ngFor=\"let i of clickers.indexes()\" \r\n                  [clickerIndex]='i'>\r\n  </app-clicker-item>\r\n</div>"

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(143);


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_clickers_clicker__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClickerService = (function () {
    function ClickerService(currencyService) {
        this.currencyService = currencyService;
        this.clickers = [];
        this.clickers.push(new __WEBPACK_IMPORTED_MODULE_1_app_clickers_clicker__["a" /* Clicker */](currencyService, "clicker", "clickers", "clicker_description", 0.1, 0, 20, 1.05));
        this.clickers.push(new __WEBPACK_IMPORTED_MODULE_1_app_clickers_clicker__["a" /* Clicker */](currencyService, "intern", "interns", "intern_description", 2, 0, 300, 1.10));
    }
    ClickerService.prototype.tagS = function (clicker_index) {
        return this.clickers[clicker_index].tagS();
    };
    ClickerService.prototype.tagP = function (clicker_index) {
        return this.clickers[clicker_index].tagP();
    };
    ClickerService.prototype.tagDescription = function (clicker_index) {
        return this.clickers[clicker_index].tagDescription();
    };
    ClickerService.prototype.enableClicker = function (clicker_index) {
        this.clickers[clicker_index].enable();
    };
    ClickerService.prototype.isEnabled = function (clicker_index) {
        return this.clickers[clicker_index].isEnabled();
    };
    ClickerService.prototype.xcost = function (clicker_index) {
        return this.clickers[clicker_index].xcost();
    };
    ClickerService.prototype.xpower = function (clicker_index) {
        return Math.floor(10.0 * this.clickers[clicker_index].xpower()) / 10.0;
    };
    ClickerService.prototype.xcount = function (clicker_index) {
        return this.clickers[clicker_index].xcount();
    };
    ClickerService.prototype.purchase = function (clicker_index) {
        return this.clickers[clicker_index].purchase();
    };
    ClickerService.prototype.total = function () {
        return this.clickers.length;
    };
    ClickerService.prototype.indexes = function () {
        var array = [];
        for (var i = 0; i < this.total(); i++) {
            array.push(i);
        }
        return array;
    };
    ClickerService.prototype.getCurrency = function (clicker_index) {
        return this.clickers[clicker_index].getCurrency();
    };
    ClickerService.prototype.canPurchase = function (clicker_index) {
        var currency = this.getCurrency(clicker_index);
        return this.currencyService.hasEnough(currency, this.xcost(clicker_index));
    };
    ClickerService.prototype.tick = function (clicker_index) {
        this.clickers[clicker_index].tick();
    };
    ClickerService.prototype.cps = function (clicker_index) {
        return this.clickers[clicker_index].cps();
    };
    ClickerService.prototype.totalPower = function (clicker_index) {
        return Math.floor(10.0 * this.clickers[clicker_index].totalPower()) / 10.0;
    };
    return ClickerService;
}());
ClickerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _a || Object])
], ClickerService);

var _a;
//# sourceMappingURL=clicker.service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_currency_currency__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrencyService = (function () {
    function CurrencyService() {
        this.currency = [];
        this.currency.push(new __WEBPACK_IMPORTED_MODULE_1_app_currency_currency__["a" /* Currency */]("click", "clicks"));
        this.currency.push(new __WEBPACK_IMPORTED_MODULE_1_app_currency_currency__["a" /* Currency */]("money", "money"));
    }
    CurrencyService.prototype.add = function (currency_index, value) {
        this.currency[currency_index].add(value);
    };
    CurrencyService.prototype.tagS = function (currency_index) {
        return this.currency[currency_index].tagS();
    };
    CurrencyService.prototype.tagP = function (currency_index) {
        return this.currency[currency_index].tagP();
    };
    CurrencyService.prototype.hasEnough = function (currency_index, value) {
        return this.currency[currency_index].hasEnough(value);
    };
    CurrencyService.prototype.xcount = function (currency_index) {
        return this.currency[currency_index].xcount();
    };
    CurrencyService.prototype.total = function () {
        return this.currency.length;
    };
    CurrencyService.prototype.indexes = function () {
        var array = [];
        for (var i = 0; i < this.total(); i++) {
            array.push(i);
        }
        return array;
    };
    return CurrencyService;
}());
CurrencyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CurrencyService);

//# sourceMappingURL=currency.service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_language_en_us__ = __webpack_require__(158);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguageService = (function () {
    function LanguageService() {
        this.languages = { "en-us": __WEBPACK_IMPORTED_MODULE_1_app_language_en_us__["a" /* EnUs */] };
        this.current_language_string = "en-us";
        this.current_language = this.languages["en-us"];
    }
    LanguageService.prototype.txt = function (text) {
        if (text in this.current_language) {
            return this.current_language[text];
        }
        else {
            console.error("Language Error: " + text + " has not been translated to " + this.current_language_string);
            return "LANGUAGE ERROR";
        }
    };
    LanguageService.prototype.Txt = function (text) {
        var display_string = this.txt(text);
        display_string = display_string.slice(0, 1).toUpperCase() + display_string.slice(1);
        return display_string;
    };
    return LanguageService;
}());
LanguageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LanguageService);

//# sourceMappingURL=language.service.js.map

/***/ })

},[247]);
//# sourceMappingURL=main.bundle.js.map