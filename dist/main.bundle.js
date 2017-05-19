webpackJsonp([1,4],{

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 145;


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(166);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_language_language_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_clickers_clicker_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_progress_progress_service__ = __webpack_require__(18);
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
    function AppComponent(lang, currency, clickers, progress) {
        this.lang = lang;
        this.currency = currency;
        this.clickers = clickers;
        this.progress = progress;
        this.isOnClickMeButtonShakeAnimation = false;
        var self = this;
        this.progress.addCondition("clicker_panel_unlocked", function () { return self.currency.hasEnough(0, 20); });
        this.progress.addCondition("free_click_0_reveal", function () { return self.clickers.xcount(0) == 2; });
        this.progress.addCondition("events_feed_unlocked", function () { return self.clickers.xcount(0) == 2; });
    }
    AppComponent.prototype.click = function () {
        var _this = this;
        this.progress.trigger("button_pressed");
        this.isOnClickMeButtonShakeAnimation = false;
        setTimeout(function () { _this.isOnClickMeButtonShakeAnimation = true; }, 1);
        this.currency.add(0, 1);
    };
    AppComponent.prototype.gameTick = function () {
        this.progress.tick();
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
        setInterval(function () { _this.gameTick(); }, 100);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(227),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_language_language_service__["a" /* LanguageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_clickers_clicker_service__["a" /* ClickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_clickers_clicker_service__["a" /* ClickerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_currency_currency_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_clickers_clicker_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_progress_progress_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_events_events_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__clickers_clicker_panel_clicker_panel_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__clickers_clicker_item_clicker_item_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__events_event_feed_event_feed_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__events_event_item_event_item_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__events_event_item_single_button_event_single_button_event_component__ = __webpack_require__(163);
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
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__clickers_clicker_panel_clicker_panel_component__["a" /* ClickerPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_12__clickers_clicker_item_clicker_item_component__["a" /* ClickerItemComponent */],
            __WEBPACK_IMPORTED_MODULE_13__events_event_feed_event_feed_component__["a" /* EventFeedComponent */],
            __WEBPACK_IMPORTED_MODULE_14__events_event_item_event_item_component__["a" /* EventItemComponent */],
            __WEBPACK_IMPORTED_MODULE_15__events_event_item_single_button_event_single_button_event_component__["a" /* SingleButtonEventComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_5_app_currency_currency_service__["a" /* CurrencyService */],
            __WEBPACK_IMPORTED_MODULE_6_app_clickers_clicker_service__["a" /* ClickerService */],
            __WEBPACK_IMPORTED_MODULE_7_app_progress_progress_service__["a" /* ProgressService */],
            __WEBPACK_IMPORTED_MODULE_8_app_events_events_service__["a" /* EventsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_clickers_clicker_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_language_language_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_progress_progress_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(99);
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
    function ClickerItemComponent(lang, currency, clickers, progress) {
        this.lang = lang;
        this.currency = currency;
        this.clickers = clickers;
        this.progress = progress;
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
            this.clickers.purchase(this.clicker_index);
        }
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbTooltip */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbTooltip */]) === "function" && _a || Object)
], ClickerItemComponent.prototype, "tooltip", void 0);
ClickerItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-clicker-item',
        template: __webpack_require__(228),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_language_language_service__["a" /* LanguageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_app_clickers_clicker_service__["a" /* ClickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_clickers_clicker_service__["a" /* ClickerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _e || Object])
], ClickerItemComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=clicker-item.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_clickers_clicker_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_currency_currency_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__ = __webpack_require__(23);
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
    function ClickerPanelComponent(clickers, progress, currency, lang) {
        this.clickers = clickers;
        this.progress = progress;
        this.currency = currency;
        this.lang = lang;
        this.clicker_panel_price = 100;
        this.clicker_panel_currency = 0;
    }
    ClickerPanelComponent.prototype.ngOnInit = function () {
    };
    ClickerPanelComponent.prototype.canPurchase = function () {
        return this.currency.hasEnough(this.clicker_panel_currency, this.clicker_panel_price);
    };
    ClickerPanelComponent.prototype.purchase = function () {
        if (this.canPurchase()) {
            this.currency.add(this.clicker_panel_currency, (-1) * this.clicker_panel_price);
            this.progress.trigger("clicker_panel_purchase");
        }
    };
    ClickerPanelComponent.prototype.currencyTagP = function () {
        return this.currency.tagP(this.clicker_panel_currency);
    };
    ClickerPanelComponent.prototype.xcost = function () {
        return Math.floor(this.clicker_panel_price);
    };
    return ClickerPanelComponent;
}());
ClickerPanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-clicker-panel',
        template: __webpack_require__(229),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_clickers_clicker_service__["a" /* ClickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_clickers_clicker_service__["a" /* ClickerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__["a" /* LanguageService */]) === "function" && _d || Object])
], ClickerPanelComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=clicker-panel.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clicker; });
var Clicker = (function () {
    function Clicker(currencyService, progressService, tag_singular, tag_plural, tag_description, reveal, reveal_cost, reveal_name, power, currency, cost, cost_multiplier) {
        this.currencyService = currencyService;
        this.progressService = progressService;
        this.tag_singular = tag_singular;
        this.tag_plural = tag_plural;
        this.tag_description = tag_description;
        this.reveal = reveal;
        this.reveal_cost = reveal_cost;
        this.reveal_name = reveal_name;
        this.power = power;
        this.currency = currency;
        this.cost = cost;
        this.cost_multiplier = cost_multiplier;
        this.enabled = false;
        this.count = 0;
        var self = this;
        this.progressService.addCondition(this.tag_singular + "_reveal", function () { return self.progressService.isActive('clicker_panel_purchase') && self.currencyService.hasEnough(self.currency, self.reveal); });
        this.progressService.addCondition(this.tag_singular + "_reveal_cost", function () { return self.progressService.isActive('clicker_panel_purchase') && self.currencyService.hasEnough(self.currency, self.reveal_cost); });
        this.progressService.addCondition(this.tag_singular + "_reveal_name", function () { return self.progressService.isActive('clicker_panel_purchase') && self.currencyService.hasEnough(self.currency, self.reveal_name); });
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
        this.currencyService.add(0, this.cps() / 10.0);
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
            this.progressService.trigger(this.tag_singular + "_purchase");
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

/***/ 160:
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

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_events_events_service__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventFeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventFeedComponent = (function () {
    function EventFeedComponent(events) {
        this.events = events;
    }
    EventFeedComponent.prototype.ngOnInit = function () {
    };
    return EventFeedComponent;
}());
EventFeedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-event-feed',
        template: __webpack_require__(230),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_events_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_events_events_service__["a" /* EventsService */]) === "function" && _a || Object])
], EventFeedComponent);

var _a;
//# sourceMappingURL=event-feed.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_events_events_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_language_language_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_progress_progress_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_events_event__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventItemComponent = (function () {
    function EventItemComponent(events, lang, progress) {
        this.events = events;
        this.lang = lang;
        this.progress = progress;
        this.is_closed = false;
        this.Event = __WEBPACK_IMPORTED_MODULE_4_app_events_event__["b" /* Event */];
        this.SingleButtonEvent = __WEBPACK_IMPORTED_MODULE_4_app_events_event__["a" /* SingleButtonEvent */];
    }
    EventItemComponent.prototype.ngOnInit = function () {
        this.actual_event = this.events.getActualEvent(this.eventTag);
        this.actual_event.activate();
    };
    EventItemComponent.prototype.onClose = function () {
        this.is_closed = true;
        this.actual_event.close();
    };
    EventItemComponent.prototype.isSingleButtonEvent = function () {
        return this.actual_event.constructor.name === this.SingleButtonEvent.name;
    };
    return EventItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])("eventTag"),
    __metadata("design:type", String)
], EventItemComponent.prototype, "eventTag", void 0);
EventItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-event-item',
        template: __webpack_require__(231),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_events_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_events_events_service__["a" /* EventsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_language_language_service__["a" /* LanguageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _c || Object])
], EventItemComponent);

var _a, _b, _c;
//# sourceMappingURL=event-item.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_events_event__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_language_language_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleButtonEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleButtonEventComponent = (function () {
    function SingleButtonEventComponent(lang) {
        this.lang = lang;
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    SingleButtonEventComponent.prototype.ngOnInit = function () {
    };
    SingleButtonEventComponent.prototype.onClickButton = function () {
        this.event.click();
        this.onClose.emit();
    };
    return SingleButtonEventComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('event'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_events_event__["a" /* SingleButtonEvent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_events_event__["a" /* SingleButtonEvent */]) === "function" && _a || Object)
], SingleButtonEventComponent.prototype, "event", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])('close'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _b || Object)
], SingleButtonEventComponent.prototype, "onClose", void 0);
SingleButtonEventComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-single-button-event',
        template: __webpack_require__(232),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_language_language_service__["a" /* LanguageService */]) === "function" && _c || Object])
], SingleButtonEventComponent);

var _a, _b, _c;
//# sourceMappingURL=single-button-event.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnUs; });
var EnUs = {
    "title": "The Clicker Saga",
    "credits": "Made by Ian Albuquerque",
    "clicker": "clicker",
    "clickers": "clickers",
    "clicker_description": "You might ask yourself what does a clicker do. The answer might not be that obvious, but it is certainly mesmerizing once you contemplate it.",
    "intern": "intern",
    "interns": "interns",
    "intern_description": "A multi-use, cheap, expandable resource. It features two hands, which allows it to operate at two clicks per second. Amazing!",
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
    "buy": "buy",
    "click_button_text": "Click Me",
    "clicker_panel_button_text": "Get Some Help",
    "free_click_0_name": "Off To a Great Start!",
    "free_click_0_description": "Congrats, you have just won something!",
    "free_click_0_button": "Redeem 150 Free Clicks",
};
//# sourceMappingURL=en-us.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trigger; });
var Trigger = (function () {
    function Trigger() {
        this.active = false;
        this.callbacks = [];
        this.conditions = [];
    }
    Trigger.prototype.isActive = function () {
        return this.active;
    };
    Trigger.prototype.activate = function () {
        if (this.active === false) {
            this.active = true;
            for (var _i = 0, _a = this.callbacks; _i < _a.length; _i++) {
                var callback = _a[_i];
                callback();
            }
        }
    };
    Trigger.prototype.addCallBack = function (callback_function) {
        this.callbacks.push(callback_function);
    };
    Trigger.prototype.addCondition = function (condition_function) {
        this.conditions.push(condition_function);
    };
    Trigger.prototype.tick = function () {
        if (this.conditions.length === 0) {
            return;
        }
        for (var _i = 0, _a = this.conditions; _i < _a.length; _i++) {
            var condition = _a[_i];
            if (condition() === false) {
                return;
            }
        }
        this.activate();
    };
    return Trigger;
}());

//# sourceMappingURL=trigger.js.map

/***/ }),

/***/ 166:
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

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_currency_currency__ = __webpack_require__(160);
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

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_progress_trigger__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgressService = (function () {
    function ProgressService(currencyService) {
        this.currencyService = currencyService;
        this.triggers = [];
        this.triggers["button_pressed"] = (new __WEBPACK_IMPORTED_MODULE_1_app_progress_trigger__["a" /* Trigger */]());
        this.triggers["generic_clicker_purchase"] = (new __WEBPACK_IMPORTED_MODULE_1_app_progress_trigger__["a" /* Trigger */]());
        this.triggers["clicker_reveal"] = (new __WEBPACK_IMPORTED_MODULE_1_app_progress_trigger__["a" /* Trigger */]());
        this.triggers["clicker_reveal_cost"] = (new __WEBPACK_IMPORTED_MODULE_1_app_progress_trigger__["a" /* Trigger */]());
        this.triggers["clicker_reveal_name"] = (new __WEBPACK_IMPORTED_MODULE_1_app_progress_trigger__["a" /* Trigger */]());
        this.triggers["clicker_purchase"] = (new __WEBPACK_IMPORTED_MODULE_1_app_progress_trigger__["a" /* Trigger */]());
        this.triggers["intern_reveal"] = (new __WEBPACK_IMPORTED_MODULE_1_app_progress_trigger__["a" /* Trigger */]());
        this.triggers["intern_reveal_cost"] = (new __WEBPACK_IMPORTED_MODULE_1_app_progress_trigger__["a" /* Trigger */]());
        this.triggers["intern_reveal_name"] = (new __WEBPACK_IMPORTED_MODULE_1_app_progress_trigger__["a" /* Trigger */]());
        this.triggers["intern_purchase"] = (new __WEBPACK_IMPORTED_MODULE_1_app_progress_trigger__["a" /* Trigger */]());
        this.triggers["clicker_panel_unlocked"] = (new __WEBPACK_IMPORTED_MODULE_1_app_progress_trigger__["a" /* Trigger */]());
        this.triggers["clicker_panel_purchase"] = (new __WEBPACK_IMPORTED_MODULE_1_app_progress_trigger__["a" /* Trigger */]());
        this.triggers["events_feed_unlocked"] = (new __WEBPACK_IMPORTED_MODULE_1_app_progress_trigger__["a" /* Trigger */]());
        this.triggers["free_click_0_reveal"] = (new __WEBPACK_IMPORTED_MODULE_1_app_progress_trigger__["a" /* Trigger */]());
    }
    ProgressService.prototype.trigger = function (trigger_label) {
        this.triggers[trigger_label].activate();
    };
    ProgressService.prototype.isActive = function (trigger_label) {
        return this.triggers[trigger_label].isActive();
    };
    ProgressService.prototype.addCallBack = function (trigger_label, callback_function) {
        this.triggers[trigger_label].addCallBack(callback_function);
    };
    ProgressService.prototype.addCondition = function (trigger_label, condition_function) {
        this.triggers[trigger_label].addCondition(condition_function);
    };
    ProgressService.prototype.tick = function () {
        for (var key in this.triggers) {
            this.triggers[key].tick();
        }
    };
    return ProgressService;
}());
ProgressService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _a || Object])
], ProgressService);

var _a;
//# sourceMappingURL=progress.service.js.map

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".holder {\n  margin: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col text-center\">\r\n      <h1>\r\n        {{lang.txt(\"title\")}}\r\n      </h1>\r\n      {{lang.txt(\"credits\")}}\r\n      <br/>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row justify-content-center\" *ngIf=\"progress.isActive('button_pressed')\">\r\n    <div class=\"col text-center\">\r\n      <h4>\r\n        <div [class.hop-animation] = \"isOnClickMeButtonShakeAnimation\">\r\n          {{lang.Txt(currency.tagP(0))}}: {{currency.xcount(0)}}\r\n        </div>\r\n        <small *ngIf=\"progress.isActive('generic_clicker_purchase')\">\r\n          (\r\n            {{xcps()}}\r\n            {{lang.Txt(\"clicks\")}}/{{lang.txt(\"s\")}}\r\n          )\r\n        </small>\r\n      </h4>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row main-row align-items-top\">\r\n\r\n    <div class=\"col\" *ngIf=\"progress.isActive('events_feed_unlocked')\">\r\n      <div class=\"row justify-content-top\">\r\n        <div class=\"col text-center\">\r\n          <app-event-feed></app-event-feed>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n\r\n      <div class=\"row justify-content-top\">\r\n        <div class=\"col text-center\">\r\n          <button type=\"button\" \r\n                  class=\"btn btn-lg btn-primary big-button\" \r\n                  (click)=\"click()\"\r\n                  [class.shake-animation] = \"isOnClickMeButtonShakeAnimation\">\r\n            <h2>\r\n              {{lang.txt(\"click_button_text\")}}\r\n            </h2>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col\"\r\n      *ngIf=\"progress.isActive('clicker_panel_unlocked')\">\r\n\r\n      <div class=\"row justify-content-top\">\r\n        <div class=\"col text-center\">\r\n          <app-clicker-panel></app-clicker-panel>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<div  class=\"card panel-item btn\"\r\n      *ngIf=\"progress.isActive(clickers.tagS(clicker_index) + '_reveal')\"\r\n      #tooltip=\"ngbTooltip\"\r\n      triggers=\"manual\"\r\n      placement=\"top\"\r\n      ngbTooltip=\"{{progress.isActive(clickers.tagS(clicker_index)+'_reveal_name')?\r\n                    lang.Txt(clickers.tagDescription(clicker_index)):\r\n                    ''}}\"\r\n      [class.disabled]=\"!clickers.canPurchase(clicker_index)\"\r\n      [class.hop-animation]=\"isOnAnimation\" \r\n      (click)=\"onClick()\"\r\n      (mouseenter)=\"onMouseEnter()\"\r\n      (mouseleave)=\"onMouseLeave()\"\r\n      (press)=\"onPress()\"\r\n      (tap)=\"onMouseLeave()\">\r\n  <div class=\"card-block\" >\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5>\r\n\r\n          <span *ngIf=\"progress.isActive(clickers.tagS(clicker_index)+'_reveal_name')\">\r\n            {{lang.Txt(clickers.tagS(clicker_index))}}\r\n          </span>\r\n          <span *ngIf=\"!progress.isActive(clickers.tagS(clicker_index)+'_reveal_name')\">\r\n            ???\r\n          </span>\r\n\r\n          <br/>\r\n\r\n          <small>\r\n            {{lang.Txt(\"costs\")}}\r\n            <span *ngIf=\"progress.isActive(clickers.tagS(clicker_index)+'_reveal_cost')\">\r\n              {{clickers.xcost(clicker_index)}}\r\n            </span>\r\n            <span *ngIf=\"!progress.isActive(clickers.tagS(clicker_index)+'_reveal_cost')\">\r\n              ???\r\n            </span>\r\n            {{lang.Txt(currency.tagP(clickers.getCurrency(clicker_index)))}}\r\n          </small>\r\n\r\n        </h5>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div *ngIf=\"progress.isActive(clickers.tagS(clicker_index)+'_purchase')\">\r\n          <b>\r\n            {{lang.Txt(\"count\")}}:\r\n            {{clickers.xcount(clicker_index)}}\r\n          </b>\r\n          <br/>\r\n          {{lang.Txt(\"produces\")}}\r\n          {{clickers.xpower(clicker_index)}}\r\n          {{lang.Txt(\"clicks\")}}/{{lang.txt(\"s\")}}\r\n          <br/>\r\n          {{lang.Txt(\"total\")}}\r\n          {{lang.txt(\"of\")}}\r\n          {{clickers.totalPower(clicker_index)}}\r\n          {{lang.Txt(\"clicks\")}}/{{lang.txt(\"s\")}}\r\n        </div>\r\n        <div *ngIf=\"!progress.isActive(clickers.tagS(clicker_index)+'_purchase')\">\r\n          <h1>???</h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"progress.isActive('clicker_panel_purchase')\">\r\n  <h2 class=\"text-center\">\r\n    Clickers\r\n  </h2>\r\n  <div class=\"item-panel text-center\">\r\n    <app-clicker-item *ngFor=\"let i of clickers.indexes()\" \r\n                    [clickerIndex]='i'>\r\n    </app-clicker-item>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!progress.isActive('clicker_panel_purchase')\">\r\n  <button type=\"button\" \r\n          class=\"btn btn-lg btn-outline-primary big-button\"\r\n          [class.disabled]=\"!canPurchase()\" \r\n          (click)=\"purchase()\">\r\n    <h2>\r\n      {{lang.txt(\"clicker_panel_button_text\")}}\r\n      <br/>\r\n      <small>\r\n        (\r\n          {{lang.Txt(\"costs\")}}\r\n          {{xcost()}}\r\n          {{lang.Txt(currencyTagP())}}\r\n        )\r\n      </small>\r\n    </h2>\r\n  </button>  \r\n</div>"

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_language_en_us__ = __webpack_require__(164);
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

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 class=\"text-center\">\n    Events Feed\n  </h2>\n  <div class=\"item-panel text-center\">\n    <app-event-item *ngFor=\"let tag of events.tags()\" \n                    [eventTag]='tag'>\n    </app-event-item>\n  </div>\n</div>"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<div  class=\"card panel-item\"\n    *ngIf=\"!is_closed && progress.isActive(actual_event.tagR())\">\n  <div class=\"card-block\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h4>\n          {{lang.Txt(events.tagN(eventTag))}}\n        </h4>\n        {{lang.Txt(events.tagD(eventTag))}}\n        <app-single-button-event *ngIf=\"isSingleButtonEvent()\"\n                                  [event]=\"actual_event\"\n                                  (close)=\"onClose()\" >\n        </app-single-button-event>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<div class=\"holder\">\n  <button class=\"btn btn-primary\" (click)=\"onClickButton()\">\n    {{lang.txt(event.tagB())}}\n  </button>\n</div>"

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(146);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_clickers_clicker__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_progress_progress_service__ = __webpack_require__(18);
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
    function ClickerService(currencyService, progressService) {
        this.currencyService = currencyService;
        this.progressService = progressService;
        this.clickers = [];
        this.clickers.push(new __WEBPACK_IMPORTED_MODULE_1_app_clickers_clicker__["a" /* Clicker */](currencyService, progressService, "clicker", "clickers", "clicker_description", 0, // reveal
        0, // reveal_cost
        0, // reveal_name
        0.1, // power
        0, // currency
        15, // cost
        1.05)); // cost_multiplier
        this.clickers.push(new __WEBPACK_IMPORTED_MODULE_1_app_clickers_clicker__["a" /* Clicker */](currencyService, progressService, "intern", "interns", "intern_description", 150, 200, 250, 2, 0, 300, 1.10));
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
        if (this.canPurchase(clicker_index)) {
            this.progressService.trigger('generic_clicker_purchase');
            return this.clickers[clicker_index].purchase();
        }
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _b || Object])
], ClickerService);

var _a, _b;
//# sourceMappingURL=clicker.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleButtonEvent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Event = (function () {
    function Event(reveal_progress_tag, name_tag, description_tag, activation_function, close_function) {
        this.reveal_progress_tag = reveal_progress_tag;
        this.name_tag = name_tag;
        this.description_tag = description_tag;
        this.activation_function = activation_function;
        this.close_function = close_function;
    }
    Event.prototype.tagR = function () {
        return this.reveal_progress_tag;
    };
    Event.prototype.tagN = function () {
        return this.name_tag;
    };
    Event.prototype.tagD = function () {
        return this.description_tag;
    };
    Event.prototype.activate = function () {
        this.activation_function();
    };
    Event.prototype.close = function () {
        this.close_function();
    };
    return Event;
}());

var SingleButtonEvent = (function (_super) {
    __extends(SingleButtonEvent, _super);
    function SingleButtonEvent(reveal_progress_tag, name_tag, description_tag, activation_function, close_function, button_tag, button_function) {
        var _this = _super.call(this, reveal_progress_tag, name_tag, description_tag, activation_function, close_function) || this;
        _this.button_tag = button_tag;
        _this.button_function = button_function;
        return _this;
    }
    SingleButtonEvent.prototype.tagB = function () {
        return this.button_tag;
    };
    SingleButtonEvent.prototype.click = function () {
        this.button_function();
    };
    return SingleButtonEvent;
}(Event));

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_events_event__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsService = (function () {
    function EventsService(currency, progress) {
        this.currency = currency;
        this.progress = progress;
        this.events = [];
        var self = this;
        this.events["free_click_0"] = new __WEBPACK_IMPORTED_MODULE_3_app_events_event__["a" /* SingleButtonEvent */]("free_click_0_reveal", "free_click_0_name", "free_click_0_description", function () { }, function () { }, "free_click_0_button", function () { self.currency.add(0, 150); });
    }
    EventsService.prototype.tagN = function (event_tag) {
        return this.events[event_tag].tagN();
    };
    EventsService.prototype.tagD = function (event_tag) {
        return this.events[event_tag].tagD();
    };
    EventsService.prototype.total = function () {
        return this.events.length;
    };
    EventsService.prototype.tags = function () {
        var array = [];
        for (var tag in this.events) {
            array.push(tag);
        }
        return array;
    };
    EventsService.prototype.getActualEvent = function (event_tag) {
        return this.events[event_tag];
    };
    return EventsService;
}());
EventsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _b || Object])
], EventsService);

var _a, _b;
//# sourceMappingURL=events.service.js.map

/***/ })

},[260]);
//# sourceMappingURL=main.bundle.js.map