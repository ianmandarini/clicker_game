webpackJsonp([1,4],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_language_en_us__ = __webpack_require__(152);
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
        }
    };
    return LanguageService;
}());
LanguageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LanguageService);

//# sourceMappingURL=language.service.js.map

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 139;


/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(153);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_language_language_service__ = __webpack_require__(118);
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
    function AppComponent(lang) {
        this.lang = lang;
        this.Math = Math;
        this.reveal_modifier = 0.7;
        this.click_enabled = false;
        this.num_clicks = 0;
        this.num_clicks_shown = this.num_clicks;
        this.money_enabled = false;
        this.money_base_cost = 0;
        this.money_extra_cost = 5;
        this.money_cost_multiplier = 1.05;
        this.money_cost = this.money_base_cost + this.money_extra_cost;
        this.money_cost_shown = this.money_cost;
        this.num_money = 0;
        this.num_money_shown = this.num_money;
        this.clickers_enabled = false;
        this.clicker_cost_multiplier = 1.05;
        this.clicker_cost = 5;
        this.clicker_cost_shown = this.clicker_cost;
        this.num_clickers = 0;
        this.num_clickers_shown = this.num_clickers;
        this.investiments_enabled = false;
        this.investiments_collapsed = true;
        this.investiments_min_clicks_to_enable = 200;
        this.money_invested = 0;
        this.money_invested_shown = this.money_invested;
        this.money_invested_multiplier = 1.01;
        this.money_invested_withdraw = 0;
        this.money_invested_withdraw_shown = Math.floor(this.money_invested_withdraw);
        this.money_investiment_added_per_second = 0;
        this.money_investiment_added_per_second_shown = this.money_investiment_added_per_second;
    }
    AppComponent.prototype.click = function () {
        this.click_enabled = true;
        this.num_clicks += 1;
        this.num_clicks_shown = Math.floor(this.num_clicks);
    };
    AppComponent.prototype.buyMoney = function () {
        this.money_enabled = true;
        if (this.num_clicks_shown >= this.money_cost_shown) {
            this.money_base_cost += this.money_extra_cost;
            this.money_extra_cost *= this.money_cost_multiplier;
            this.money_cost = this.money_base_cost + this.money_extra_cost;
            this.money_cost_shown = Math.floor(this.money_cost);
            this.num_money += 1;
            this.num_money_shown = Math.floor(this.num_money);
        }
    };
    AppComponent.prototype.buyClicker = function () {
        this.clickers_enabled = true;
        if (this.num_money_shown >= this.clicker_cost_shown) {
            this.num_money -= this.clicker_cost_shown;
            this.num_money_shown = Math.floor(this.num_money);
            this.clicker_cost *= this.clicker_cost_multiplier;
            this.clicker_cost_shown = Math.floor(this.clicker_cost);
            this.num_clickers += 1;
            this.num_clickers_shown = Math.floor(this.num_clickers);
        }
    };
    AppComponent.prototype.addInvestiment = function () {
        this.investiments_enabled = true;
        if (this.num_money_shown >= 1) {
            this.num_money -= 1;
            this.num_money_shown = Math.floor(this.num_money);
            this.money_invested += 1;
            this.money_invested_shown = Math.floor(this.money_invested);
            this.money_investiment_added_per_second = this.money_invested * this.money_invested_multiplier - this.money_invested;
            this.money_investiment_added_per_second_shown = Math.floor(this.money_investiment_added_per_second * 100.0) / 100.0;
        }
    };
    AppComponent.prototype.withdrawInvestiment = function () {
        this.investiments_enabled = true;
        if (this.money_invested_withdraw_shown >= 1) {
            this.num_money += 1;
            this.num_money_shown = Math.floor(this.num_money);
            this.money_invested_withdraw -= 1;
            this.money_invested_withdraw_shown = Math.floor(this.money_invested_withdraw);
        }
    };
    AppComponent.prototype.clickerTick = function () {
        this.num_clicks += this.num_clickers;
        this.num_clicks_shown = Math.floor(this.num_clicks);
        this.money_invested_withdraw += this.money_investiment_added_per_second;
        this.money_invested_withdraw_shown = Math.floor(this.money_invested_withdraw);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () { _this.clickerTick(); }, 1000);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(209),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_language_language_service__["a" /* LanguageService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(150);
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
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__["a" /* LanguageService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnUs; });
var EnUs = {
    "title": "The Clicker Saga",
    "credits": "Made by Ian Albuquerque",
    "click": "click",
    "Click": "Click",
    "Clicks": "Clicks",
    "clicks": "clicks",
    "clicker": "clicker",
    "Clicker": "Clicker",
    "Clickers": "Clickers",
    "clickers": "clickers",
    "money": "money",
    "Money": "Money",
    "Buy": "Buy",
    "cost": "cost",
    "Cost": "Cost",
    "Costs": "Costs",
    "Click Me": "Click Me",
    "Convert": "Convert",
    "to Money": "to Money",
    "requires": "requires",
    "Requires": "Requires",
    "For": "For",
    "Sell": "Sell",
    "Show": "Show",
    "Hide": "Hide",
    "Investiments": "Investiments",
    "Invested": "Invested",
    "Add": "Add",
    "Remove": "Remove",
    "Multiplier": "Multiplier",
    "per": "per",
    "second": "second",
    "Permanently": "Permanently",
    "Withdraw": "Withdraw",
    "for": "for",
    "Available": "Available"
};
//# sourceMappingURL=en-us.js.map

/***/ }),

/***/ 153:
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

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(68)(false);
// imports


// module
exports.push([module.i, ".container {\r\n\tmargin-top: 50px;\r\n}\r\n\r\n.card {\r\n\tpadding: 20px;\r\n  margin: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col text-center\">\n      <h1>\n        {{lang.txt(\"title\")}}\n      </h1>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col text-center\">\n      <div *ngIf=\"click_enabled\">\n        {{lang.txt(\"Clicks\")}}: {{num_clicks_shown}}\n      </div>\n      <div *ngIf=\"money_enabled\">\n        {{lang.txt(\"Money\")}}: {{num_money_shown}}\n      </div>\n      <div *ngIf=\"clickers_enabled\">\n        {{lang.txt(\"Clickers\")}}: {{num_clickers_shown}}\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col text-center\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"click()\">{{lang.txt(\"Click Me\")}}</button>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col text-center\">\n      <button type=\"button\" \n              *ngIf=\"num_clicks_shown >= money_cost_shown * reveal_modifier || money_enabled\" \n              class=\"btn btn-primary\" \n              [disabled]=\"num_clicks_shown < money_cost_shown\" \n              (click)=\"buyMoney()\">\n\n        {{lang.txt(\"Convert\")}}\n        {{lang.txt(\"Clicks\")}}\n        {{lang.txt(\"to Money\")}}\n        <br/>\n        (\n        {{lang.txt(\"Requires\")}}\n        {{money_cost_shown}}\n        {{lang.txt(\"Clicks\")}}\n        )\n\n      </button>\n    </div>\n  </div>\n\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col text-center\">\n      <button type=\"button\" \n              *ngIf=\"num_money >= clicker_cost_shown * reveal_modifier || clickers_enabled\"\n              class=\"btn btn-primary\" \n              [disabled]=\"num_money_shown < clicker_cost_shown\" \n              (click)=\"buyClicker()\">\n\n        {{lang.txt(\"Buy\")}}\n        1\n        {{lang.txt(\"Clicker\")}}\n        <br/>\n        (\n        {{lang.txt(\"Costs\")}}\n        {{clicker_cost_shown}}\n        {{lang.txt(\"Money\")}}\n        )\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col text-center\">\n      <button\n            *ngIf=\"num_clicks_shown >= investiments_min_clicks_to_enable || investiments_enabled\" \n            type=\"button\" \n            class=\"btn btn-outline-primary\" \n            (click)=\"investiments_collapsed = !investiments_collapsed\">\n        {{lang.txt(\"Show\")}}/{{lang.txt(\"Hide\")}} {{lang.txt(\"Investiments\")}}\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center\" [ngbCollapse]=\"investiments_collapsed\">\n    <div class=\"col text-center\">\n\n      <div class=\"card\">\n\n        <div class=\"row justify-content-center\">\n          <div class=\"col text-center\">\n            {{lang.txt(\"Multiplier\")}}: \n            {{money_invested_multiplier}} \n            ( \n            {{money_investiment_added_per_second_shown}} \n            {{lang.txt(\"money\")}} \n            {{lang.txt(\"per\")}} \n            {{lang.txt(\"second\")}}\n            )\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col text-center\">\n            {{lang.txt(\"Money\")}} {{lang.txt(\"Invested\")}}: {{money_invested_shown}}\n            <button\n                  type=\"button\" \n                  class=\"btn btn-primary\" \n                  (click)=\"addInvestiment()\">\n              {{lang.txt(\"Permanently\")}} {{lang.txt(\"Add\")}}\n            </button>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col text-center\">\n            {{lang.txt(\"Money\")}}\n            {{lang.txt(\"Available\")}}\n            {{lang.txt(\"for\")}}\n            {{lang.txt(\"Withdraw\")}}:\n            {{money_invested_withdraw_shown}}\n            <button\n                  type=\"button\" \n                  class=\"btn btn-primary\" \n                  (click)=\"withdrawInvestiment()\">\n              {{lang.txt(\"Withdraw\")}}\n            </button>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col text-center\">\n      <small>\n        {{lang.txt(\"credits\")}}\n      </small>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(140);


/***/ })

},[237]);
//# sourceMappingURL=main.bundle.js.map