webpackJsonp([1,4],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_language_en_us__ = __webpack_require__(168);
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
        display_string = display_string.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
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

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_progress_progress_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_clickers_clicker_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_events_events_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_upgrade_upgrade_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_upgrade_upgrade__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_clickers_clicker__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_currency_currency__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_events_event__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_progress_trigger__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ContentService = (function () {
    function ContentService(progress, currency, clickers, events, upgrades) {
        this.progress = progress;
        this.currency = currency;
        this.clickers = clickers;
        this.events = events;
        this.upgrades = upgrades;
        this.initProgress();
        this.initEvents();
        this.initClickers();
        this.initCurrency();
        this.initUpgrades();
    }
    ContentService.prototype.initUpgrades = function () {
        var self = this;
        this.upgrades.addUpgrade(new __WEBPACK_IMPORTED_MODULE_6_app_upgrade_upgrade__["a" /* Upgrade */](this.currency, this.progress, 'clicker_upgrade_0', 0, 150, function () { return self.progress.isActive("clicker_purchase"); }, function () { self.clickers.multiplyPower(0, 2); }));
        this.upgrades.addUpgrade(new __WEBPACK_IMPORTED_MODULE_6_app_upgrade_upgrade__["a" /* Upgrade */](this.currency, this.progress, 'clicker_upgrade_1', 0, 500, function () { return self.progress.isActive("clicker_purchase"); }, function () { self.clickers.multiplyPower(0, 2.5); }));
        this.upgrades.addUpgrade(new __WEBPACK_IMPORTED_MODULE_6_app_upgrade_upgrade__["a" /* Upgrade */](this.currency, this.progress, 'clicker_upgrade_2', 0, 1500, function () { return self.progress.isActive("clicker_purchase"); }, function () { self.clickers.multiplyPower(0, 3); }));
        this.upgrades.addUpgrade(new __WEBPACK_IMPORTED_MODULE_6_app_upgrade_upgrade__["a" /* Upgrade */](this.currency, this.progress, 'silver_tape_upgrade_0', 0, 750, function () { return self.progress.isActive("silver_tape_purchase"); }, function () { self.clickers.multiplyPower(1, 2); }));
        this.upgrades.addUpgrade(new __WEBPACK_IMPORTED_MODULE_6_app_upgrade_upgrade__["a" /* Upgrade */](this.currency, this.progress, 'silver_tape_upgrade_1', 0, 1500, function () { return self.progress.isActive("silver_tape_purchase"); }, function () { self.clickers.multiplyPower(1, 3); }));
    };
    ContentService.prototype.initProgress = function () {
        var self = this;
        this.progress.addTrigger("button_pressed", new __WEBPACK_IMPORTED_MODULE_10_app_progress_trigger__["a" /* Trigger */]());
        this.progress.addTrigger("clicker_panel_unlocked", new __WEBPACK_IMPORTED_MODULE_10_app_progress_trigger__["a" /* Trigger */]());
        this.progress.addTrigger("events_feed_unlocked", new __WEBPACK_IMPORTED_MODULE_10_app_progress_trigger__["a" /* Trigger */]());
        this.progress.addTrigger("upgrade_tab_unlocked", new __WEBPACK_IMPORTED_MODULE_10_app_progress_trigger__["a" /* Trigger */]());
        this.progress.addTrigger("top_menu_unlocked", new __WEBPACK_IMPORTED_MODULE_10_app_progress_trigger__["a" /* Trigger */]());
        this.progress.addCondition("events_feed_unlocked", function () { return self.currency.hasEnough(0, 10); });
        this.progress.addTrigger("10s_after_generic_clicker_purchase", new __WEBPACK_IMPORTED_MODULE_10_app_progress_trigger__["a" /* Trigger */]());
        this.progress.addTrigger("10s_after_generic_upgrade_purchase", new __WEBPACK_IMPORTED_MODULE_10_app_progress_trigger__["a" /* Trigger */]());
        this.progress.addTrigger("generic_clicker_purchase", new __WEBPACK_IMPORTED_MODULE_10_app_progress_trigger__["a" /* Trigger */]());
        this.progress.addCallBack("generic_clicker_purchase", function () {
            setTimeout(function () { self.progress.trigger("10s_after_generic_clicker_purchase"); }, 10000);
        });
        this.progress.addTrigger("generic_upgrade_purchase", new __WEBPACK_IMPORTED_MODULE_10_app_progress_trigger__["a" /* Trigger */]());
        this.progress.addCallBack("generic_upgrade_purchase", function () {
            setTimeout(function () { self.progress.trigger("10s_after_generic_upgrade_purchase"); }, 10000);
        });
    };
    ContentService.prototype.initEvents = function () {
        var self = this;
        this.events.addEvent("events_feed_unlock_event", new __WEBPACK_IMPORTED_MODULE_9_app_events_event__["a" /* SingleButtonEvent */](this.progress, function () { return self.progress.isActive("events_feed_unlocked"); }, "events_feed_unlock_event", function () { }, function () { }, function () { self.currency.add(0, 10); }));
        this.events.addEvent("top_menu_reveal_event", new __WEBPACK_IMPORTED_MODULE_9_app_events_event__["a" /* SingleButtonEvent */](this.progress, function () { return self.currency.hasEnough(0, 30); }, "top_menu_reveal_event", function () { }, function () { }, function () { self.progress.trigger("top_menu_unlocked"); }));
        this.events.addEvent("save_notification_event", new __WEBPACK_IMPORTED_MODULE_9_app_events_event__["a" /* SingleButtonEvent */](this.progress, function () { return self.currency.hasEnough(0, 40); }, "save_notification_event", function () { }, function () { }, function () { }));
        this.events.addEvent("annoying_notifications_event", new __WEBPACK_IMPORTED_MODULE_9_app_events_event__["a" /* SingleButtonEvent */](this.progress, function () { return self.currency.hasEnough(0, 50); }, "annoying_notifications_event", function () { }, function () { }, function () { }));
        this.events.addEvent("unlock_clickers_event", new __WEBPACK_IMPORTED_MODULE_9_app_events_event__["a" /* SingleButtonEvent */](this.progress, function () { return self.currency.hasEnough(0, 70); }, "unlock_clickers_event", function () { }, function () { }, function () { self.progress.trigger("clicker_panel_unlocked"); }));
        this.events.addEvent("offline_notification_event", new __WEBPACK_IMPORTED_MODULE_9_app_events_event__["a" /* SingleButtonEvent */](this.progress, function () { return self.progress.isActive("10s_after_generic_clicker_purchase"); }, "offline_notification_event", function () { }, function () { }, function () { }));
        this.events.addEvent("free_click_0", new __WEBPACK_IMPORTED_MODULE_9_app_events_event__["a" /* SingleButtonEvent */](this.progress, function () { return self.clickers.xcount(0) == 5; }, "free_click_0", function () { }, function () { }, function () { self.currency.add(0, 50); }));
        this.events.addEvent("unlock_upgrades_event", new __WEBPACK_IMPORTED_MODULE_9_app_events_event__["a" /* SingleButtonEvent */](this.progress, function () { return self.clickers.xcount(1) == 1; }, "unlock_upgrades_event", function () { }, function () { }, function () { self.progress.trigger("upgrade_tab_unlocked"); }));
        this.events.addEvent("upgrades_stack_event", new __WEBPACK_IMPORTED_MODULE_9_app_events_event__["a" /* SingleButtonEvent */](this.progress, function () { return self.progress.isActive("10s_after_generic_upgrade_purchase"); }, "upgrades_stack_event", function () { }, function () { }, function () { }));
    };
    ContentService.prototype.initCurrency = function () {
        this.currency.addCurrency(new __WEBPACK_IMPORTED_MODULE_8_app_currency_currency__["a" /* Currency */]("click"));
    };
    ContentService.prototype.initClickers = function () {
        this.clickers.addClicker(new __WEBPACK_IMPORTED_MODULE_7_app_clickers_clicker__["a" /* Clicker */](this.currency, this.progress, "clicker", 0, // reveal
        0, // reveal_cost
        0, // reveal_name
        0.1, // power
        0, // currency
        15, // cost
        1.15)); // cost_multiplier
        this.clickers.addClicker(new __WEBPACK_IMPORTED_MODULE_7_app_clickers_clicker__["a" /* Clicker */](this.currency, this.progress, "silver_tape", 0, 30, 50, 1, 0, 100, 1.15));
        this.clickers.addClicker(new __WEBPACK_IMPORTED_MODULE_7_app_clickers_clicker__["a" /* Clicker */](this.currency, this.progress, "intern", 100, 120, 150, 2, 0, 250, 1.15));
    };
    return ContentService;
}());
ContentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_clickers_clicker_service__["a" /* ClickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_clickers_clicker_service__["a" /* ClickerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_events_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_events_events_service__["a" /* EventsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_app_upgrade_upgrade_service__["a" /* UpgradeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_upgrade_upgrade_service__["a" /* UpgradeService */]) === "function" && _e || Object])
], ContentService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=content.service.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_progress_progress_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_clickers_clicker_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_events_events_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_upgrade_upgrade_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SaveService = (function () {
    function SaveService(progress, currency, clickers, events, upgrades) {
        this.progress = progress;
        this.currency = currency;
        this.clickers = clickers;
        this.events = events;
        this.upgrades = upgrades;
    }
    SaveService.prototype.clear = function () {
        this.progress.clearState();
        this.currency.clearState();
        this.clickers.clearState();
        this.events.clearState();
        this.upgrades.clearState();
        localStorage.clear();
        this.save();
    };
    SaveService.prototype.save = function () {
        var save = {};
        save['progress'] = this.progress.getState();
        save['currency'] = this.currency.getState();
        save['clickers'] = this.clickers.getState();
        save['events'] = this.events.getState();
        save['upgrades'] = this.upgrades.getState();
        save['timestamp'] = new Date();
        localStorage.setItem('save', JSON.stringify(save));
    };
    SaveService.prototype.load = function () {
        var save = JSON.parse(localStorage.getItem('save'));
        if (save === null) {
            return undefined;
        }
        this.progress.setState(save["progress"]);
        this.currency.setState(save["currency"]);
        this.clickers.setState(save["clickers"]);
        this.events.setState(save["events"]);
        this.upgrades.setState(save["upgrades"]);
        return save;
    };
    return SaveService;
}());
SaveService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_clickers_clicker_service__["a" /* ClickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_clickers_clicker_service__["a" /* ClickerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_events_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_events_events_service__["a" /* EventsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_app_upgrade_upgrade_service__["a" /* UpgradeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_upgrade_upgrade_service__["a" /* UpgradeService */]) === "function" && _e || Object])
], SaveService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=save.service.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 149;


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(172);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_language_language_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_clickers_clicker_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_progress_progress_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_content_content_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_save_save_service__ = __webpack_require__(128);
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
    function AppComponent(content, lang, currency, clickers, progress, save) {
        this.content = content;
        this.lang = lang;
        this.currency = currency;
        this.clickers = clickers;
        this.progress = progress;
        this.save = save;
        this.isOnClickMeButtonShakeAnimation = false;
        var saveData = this.save.load();
        if (saveData !== undefined) {
            var currentTimestamp = new Date();
            var lastTimestamp = new Date(saveData['timestamp']);
            var msPassed = currentTimestamp.getTime() - lastTimestamp.getTime();
            this.currency.add(0, msPassed / 1000 * this.xcps());
        }
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
        this.save.save();
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
        template: __webpack_require__(235),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_app_content_content_service__["a" /* ContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_content_content_service__["a" /* ContentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_language_language_service__["a" /* LanguageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_clickers_clicker_service__["a" /* ClickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_clickers_clicker_service__["a" /* ClickerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_app_save_save_service__["a" /* SaveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_save_save_service__["a" /* SaveService */]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_currency_currency_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_clickers_clicker_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_progress_progress_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_events_events_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_content_content_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_save_save_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_upgrade_upgrade_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__clickers_clicker_panel_clicker_panel_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__clickers_clicker_item_clicker_item_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__events_event_feed_event_feed_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__events_event_item_event_item_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__events_event_item_single_button_event_single_button_event_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__upgrade_upgrade_item_upgrade_item_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__upgrade_upgrade_panel_upgrade_panel_component__ = __webpack_require__(170);
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
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__clickers_clicker_panel_clicker_panel_component__["a" /* ClickerPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_15__clickers_clicker_item_clicker_item_component__["a" /* ClickerItemComponent */],
            __WEBPACK_IMPORTED_MODULE_16__events_event_feed_event_feed_component__["a" /* EventFeedComponent */],
            __WEBPACK_IMPORTED_MODULE_17__events_event_item_event_item_component__["a" /* EventItemComponent */],
            __WEBPACK_IMPORTED_MODULE_18__events_event_item_single_button_event_single_button_event_component__["a" /* SingleButtonEventComponent */],
            __WEBPACK_IMPORTED_MODULE_19__upgrade_upgrade_item_upgrade_item_component__["a" /* UpgradeItemComponent */],
            __WEBPACK_IMPORTED_MODULE_20__upgrade_upgrade_panel_upgrade_panel_component__["a" /* UpgradePanelComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_5_app_currency_currency_service__["a" /* CurrencyService */],
            __WEBPACK_IMPORTED_MODULE_6_app_clickers_clicker_service__["a" /* ClickerService */],
            __WEBPACK_IMPORTED_MODULE_7_app_progress_progress_service__["a" /* ProgressService */],
            __WEBPACK_IMPORTED_MODULE_8_app_events_events_service__["a" /* EventsService */],
            __WEBPACK_IMPORTED_MODULE_9_app_content_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_10_app_save_save_service__["a" /* SaveService */],
            __WEBPACK_IMPORTED_MODULE_11_app_upgrade_upgrade_service__["a" /* UpgradeService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_clickers_clicker_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_language_language_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_progress_progress_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(101);
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
        template: __webpack_require__(236),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_language_language_service__["a" /* LanguageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_app_clickers_clicker_service__["a" /* ClickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_clickers_clicker_service__["a" /* ClickerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _e || Object])
], ClickerItemComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=clicker-item.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_clickers_clicker_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_currency_currency_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__ = __webpack_require__(12);
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
    }
    ClickerPanelComponent.prototype.ngOnInit = function () {
    };
    return ClickerPanelComponent;
}());
ClickerPanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-clicker-panel',
        template: __webpack_require__(237),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_clickers_clicker_service__["a" /* ClickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_clickers_clicker_service__["a" /* ClickerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__["a" /* LanguageService */]) === "function" && _d || Object])
], ClickerPanelComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=clicker-panel.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_progress_trigger__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clicker; });

var Clicker = (function () {
    function Clicker(currencyService, progressService, id_tag, reveal, reveal_cost, reveal_name, power, currency, cost, cost_multiplier) {
        this.currencyService = currencyService;
        this.progressService = progressService;
        this.id_tag = id_tag;
        this.reveal = reveal;
        this.reveal_cost = reveal_cost;
        this.reveal_name = reveal_name;
        this.power = power;
        this.currency = currency;
        this.cost = cost;
        this.cost_multiplier = cost_multiplier;
        this.enabled = false;
        this.count = 0;
        this.tag_singular = id_tag + "_singular";
        this.tag_plural = id_tag + "_plural";
        this.tag_description = id_tag + "_description";
        var self = this;
        this.progressService.addTrigger(this.id_tag + "_reveal", new __WEBPACK_IMPORTED_MODULE_0_app_progress_trigger__["a" /* Trigger */]());
        this.progressService.addTrigger(this.id_tag + "_reveal_cost", new __WEBPACK_IMPORTED_MODULE_0_app_progress_trigger__["a" /* Trigger */]());
        this.progressService.addTrigger(this.id_tag + "_reveal_name", new __WEBPACK_IMPORTED_MODULE_0_app_progress_trigger__["a" /* Trigger */]());
        this.progressService.addTrigger(this.id_tag + "_purchase", new __WEBPACK_IMPORTED_MODULE_0_app_progress_trigger__["a" /* Trigger */]());
        this.progressService.addCondition(this.id_tag + "_reveal", function () { return self.currencyService.hasEnough(self.currency, self.reveal); });
        this.progressService.addCondition(this.id_tag + "_reveal_cost", function () { return self.currencyService.hasEnough(self.currency, self.reveal_cost); });
        this.progressService.addCondition(this.id_tag + "_reveal_name", function () { return self.currencyService.hasEnough(self.currency, self.reveal_name); });
    }
    Clicker.prototype.tag = function () {
        return this.id_tag;
    };
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
        return Math.floor(this.cost * Math.pow(this.cost_multiplier, this.count));
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
    Clicker.prototype.multiplyPower = function (multiplier) {
        this.power *= multiplier;
    };
    Clicker.prototype.purchase = function () {
        if (this.currencyService.hasEnough(this.currency, this.xcost())) {
            this.currencyService.add(this.currency, (-1) * this.xcost());
            this.count += 1;
            this.progressService.trigger(this.id_tag + "_purchase");
        }
    };
    Clicker.prototype.getCurrency = function () {
        return this.currency;
    };
    Clicker.prototype.totalPower = function () {
        return this.count * this.power;
    };
    Clicker.prototype.getState = function () {
        var state = {};
        state["count"] = this.count;
        return state;
    };
    Clicker.prototype.setState = function (state) {
        this.count = state["count"];
    };
    Clicker.prototype.clearState = function () {
        this.count = 0;
    };
    return Clicker;
}());

//# sourceMappingURL=clicker.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Currency; });
var Currency = (function () {
    function Currency(id_tag) {
        this.id_tag = id_tag;
        this.tag_singular = id_tag + "_singular";
        this.tag_plural = id_tag + "_plural";
        this.count = 0;
    }
    Currency.prototype.add = function (value) {
        this.count += value;
    };
    Currency.prototype.xcount = function () {
        return Math.floor(this.count);
    };
    Currency.prototype.tag = function () {
        return this.id_tag;
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
    Currency.prototype.getState = function () {
        var state = {};
        state["count"] = this.count;
        return state;
    };
    Currency.prototype.setState = function (state) {
        this.count = state["count"];
    };
    Currency.prototype.clearState = function () {
        this.count = 0;
    };
    return Currency;
}());

//# sourceMappingURL=currency.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_events_events_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_currency_currency_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__ = __webpack_require__(12);
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
    function EventFeedComponent(events, progress, currency, lang) {
        this.events = events;
        this.progress = progress;
        this.currency = currency;
        this.lang = lang;
    }
    EventFeedComponent.prototype.ngOnInit = function () {
    };
    return EventFeedComponent;
}());
EventFeedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-event-feed',
        template: __webpack_require__(238),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_events_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_events_events_service__["a" /* EventsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_language_language_service__["a" /* LanguageService */]) === "function" && _d || Object])
], EventFeedComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=event-feed.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_events_events_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_language_language_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_progress_progress_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_events_event__ = __webpack_require__(60);
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
        template: __webpack_require__(239),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_events_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_events_events_service__["a" /* EventsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_language_language_service__["a" /* LanguageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _c || Object])
], EventItemComponent);

var _a, _b, _c;
//# sourceMappingURL=event-item.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_events_event__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_language_language_service__ = __webpack_require__(12);
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
        template: __webpack_require__(240),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_language_language_service__["a" /* LanguageService */]) === "function" && _c || Object])
], SingleButtonEventComponent);

var _a, _b, _c;
//# sourceMappingURL=single-button-event.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnUs; });
var EnUs = {
    "title": "The Clicker Saga",
    "credits": "Made by Ian Albuquerque",
    "reset_save_file": "Reset Save File",
    "menu_label": "The Clicker Saga",
    "options_dropdown": "Options",
    "danger_badge": "Danger",
    "click_singular": "click",
    "click_plural": "clicks",
    "clicker_singular": "clicker",
    "clicker_plural": "clickers",
    "clicker_description": "You might ask yourself what does a clicker do. The answer might not be that obvious, but it is certainly mesmerizing once you contemplate it.",
    "silver_tape_singular": "silver tape",
    "silver_tape_plural": "silver tapes",
    "silver_tape_description": "Some use to repair space stations. You use it for this game.",
    "intern_singular": "intern",
    "intern_plural": "interns",
    "intern_description": "A multi-use, cheap, expandable resource. It features two hands, which allows it to operate at two clicks per second. Amazing!",
    "for": "for",
    "count": "count",
    "total": "total",
    "produces": "produces",
    "of": "of",
    "s": "s",
    "cost": "cost",
    "costs": "costs",
    "buy": "buy",
    "click_button_text": "Click Me",
    "empty_events_feed": "This list is empty.",
    // UPGRADES
    "clicker_upgrade_0_title": "Double Clicker",
    "clicker_upgrade_0_description": "The basic clicker clicks 2x more",
    "clicker_upgrade_1_title": "Migthy Clicker",
    "clicker_upgrade_1_description": "The basic clicker clicks 2.5x more",
    "clicker_upgrade_2_title": "Wombo Clicker",
    "clicker_upgrade_2_description": "The basic clicker clicks 3x more",
    "silver_tape_upgrade_0_title": "Double Thickness",
    "silver_tape_upgrade_0_description": "The silver tape clicks 2x more",
    "silver_tape_upgrade_1_title": "Gorilla Tape",
    "silver_tape_upgrade_1_description": "The silver tape clicks 3x more",
    // EVENTS
    "events_feed_unlock_event_name": "Welcome, My Friend",
    "events_feed_unlock_event_description": "Whenever something different happens, you will be notified here. How about some free clicks to celebrate this? Just click the button below. Do not be shy.",
    "events_feed_unlock_event_button": "Redeem 10 Free Clicks",
    "top_menu_reveal_event_name": "Give Me The Control",
    "top_menu_reveal_event_description": "We known you would love to have some control over your life. We cannot offer that, but we can unlock a top menu for you.",
    "top_menu_reveal_event_button": "Unlock Top Menu",
    "save_notification_event_name": "Do not Worry, You Are Safe",
    "save_notification_event_description": "The game is saved automatically. You can come back at any time, and your progress will still be there.",
    "save_notification_event_button": "Thank You, Handsome Developer",
    "annoying_notifications_event_name": "Hey, Listen",
    "annoying_notifications_event_description": "If notifications start annoying you, well... nothing I can do. There is no disable button in this game. Just to let you know.",
    "annoying_notifications_event_button": "Thanks",
    "unlock_clickers_event_name": "Bored?",
    "unlock_clickers_event_description": "Ok. Clicking the button by yourself is a little bit too harsh. How about some help?",
    "unlock_clickers_event_button": "Get Some Help",
    "offline_notification_event_name": "Paid Rest",
    "offline_notification_event_description": "The game will continue to run even if it is closed. When you get back, you will receive everything you earned during that time!",
    "offline_notification_event_button": "So Cool",
    "free_click_0_name": "Off To a Great Start!",
    "free_click_0_description": "Here is a boost to help your journey.",
    "free_click_0_button": "Redeem 50 Free Clicks",
    "unlock_upgrades_event_name": "Keeping Things Fresh",
    "unlock_upgrades_event_description": "As you probably noticed, prices go up a little too fast. You might need this.",
    "unlock_upgrades_event_button": "Unlock Upgrades",
    "upgrades_stack_event_name": "Upgrades Stack",
    "upgrades_stack_event_description": "For example, if you buy a x2 upgrade and a x3 for a clicker, the clicker will produce x6 the original amount.",
    "upgrades_stack_event_button": "Makes Sense",
};
//# sourceMappingURL=en-us.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_upgrade_upgrade_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_language_language_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_progress_progress_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_currency_currency_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpgradeItemComponent = (function () {
    function UpgradeItemComponent(lang, currency, upgrades, progress) {
        this.lang = lang;
        this.currency = currency;
        this.upgrades = upgrades;
        this.progress = progress;
    }
    UpgradeItemComponent.prototype.ngOnInit = function () {
    };
    UpgradeItemComponent.prototype.onClick = function () {
        if (this.upgrades.canPurchase(this.eventTag) && !this.upgrades.isPurchased(this.eventTag)) {
            this.upgrades.purchase(this.eventTag);
        }
    };
    return UpgradeItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])("eventTag"),
    __metadata("design:type", String)
], UpgradeItemComponent.prototype, "eventTag", void 0);
UpgradeItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-upgrade-item',
        template: __webpack_require__(241),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_language_language_service__["a" /* LanguageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_upgrade_upgrade_service__["a" /* UpgradeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_upgrade_upgrade_service__["a" /* UpgradeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _d || Object])
], UpgradeItemComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=upgrade-item.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_progress_progress_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_upgrade_upgrade_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_language_language_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradePanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpgradePanelComponent = (function () {
    function UpgradePanelComponent(upgrades, progress, lang) {
        this.upgrades = upgrades;
        this.progress = progress;
        this.lang = lang;
    }
    UpgradePanelComponent.prototype.ngOnInit = function () {
    };
    return UpgradePanelComponent;
}());
UpgradePanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-upgrade-panel',
        template: __webpack_require__(242),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_upgrade_upgrade_service__["a" /* UpgradeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_upgrade_upgrade_service__["a" /* UpgradeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_language_language_service__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_language_language_service__["a" /* LanguageService */]) === "function" && _c || Object])
], UpgradePanelComponent);

var _a, _b, _c;
//# sourceMappingURL=upgrade-panel.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_progress_trigger__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upgrade; });

var Upgrade = (function () {
    function Upgrade(currencyService, progressService, id_tag, currency, cost, reveal_condition, purchase_callback) {
        this.currencyService = currencyService;
        this.progressService = progressService;
        this.id_tag = id_tag;
        this.currency = currency;
        this.cost = cost;
        this.tag_title = id_tag + "_title";
        this.tag_description = id_tag + "_description";
        var self = this;
        this.progressService.addTrigger(this.id_tag + "_reveal", new __WEBPACK_IMPORTED_MODULE_0_app_progress_trigger__["a" /* Trigger */]());
        this.progressService.addTrigger(this.id_tag + "_purchased", new __WEBPACK_IMPORTED_MODULE_0_app_progress_trigger__["a" /* Trigger */]());
        this.progressService.addCondition(this.id_tag + "_reveal", reveal_condition);
        this.progressService.addCallBack(this.id_tag + "_purchased", purchase_callback);
    }
    Upgrade.prototype.tag = function () {
        return this.id_tag;
    };
    Upgrade.prototype.tagT = function () {
        return this.tag_title;
    };
    Upgrade.prototype.tagD = function () {
        return this.tag_description;
    };
    Upgrade.prototype.xcost = function () {
        return Math.floor(this.cost);
    };
    Upgrade.prototype.canPurchase = function () {
        return this.currencyService.hasEnough(this.currency, this.xcost());
    };
    Upgrade.prototype.purchase = function () {
        if (this.canPurchase()) {
            this.currencyService.add(this.currency, (-1) * this.xcost());
            this.progressService.trigger(this.id_tag + "_purchased");
        }
    };
    Upgrade.prototype.isPurchased = function () {
        return this.progressService.isActive(this.id_tag + "_purchased");
    };
    Upgrade.prototype.getCurrency = function () {
        return this.currency;
    };
    Upgrade.prototype.getState = function () {
        var state = {};
        return state;
    };
    Upgrade.prototype.setState = function (state) {
    };
    Upgrade.prototype.clearState = function () {
    };
    return Upgrade;
}());

//# sourceMappingURL=upgrade.js.map

/***/ }),

/***/ 172:
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

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".holder {\n  margin: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light navbar-custom\" \r\n  *ngIf=\"progress.isActive('top_menu_unlocked')\">\r\n  <button class=\"navbar-toggler navbar-toggler-right\" \r\n          type=\"button\" \r\n          data-toggle=\"collapse\" \r\n          data-target=\"#navbarNavDropdown\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\">\r\n    {{lang.txt(\"menu_label\")}}\r\n  </a>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item dropdown\">\r\n        <a  class=\"nav-link dropdown-toggle\" \r\n            data-toggle=\"dropdown\">\r\n          {{lang.txt(\"options_dropdown\")}}\r\n        </a>\r\n        <div class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item btn\" (click)=\"save.clear()\">\r\n            <span class=\"badge badge-danger\">{{lang.txt(\"danger_badge\")}}</span>\r\n            {{lang.txt(\"reset_save_file\")}}\r\n          </a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col text-center\">\r\n      <h1>\r\n        {{lang.txt(\"title\")}}\r\n      </h1>\r\n      {{lang.txt(\"credits\")}}\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row justify-content-center\" *ngIf=\"progress.isActive('button_pressed')\">\r\n    <div class=\"col text-center\">\r\n      <h4>\r\n        <div [class.hop-animation] = \"isOnClickMeButtonShakeAnimation\">\r\n          {{lang.Txt(currency.tagP(0))}}: {{currency.xcount(0)}}\r\n        </div>\r\n        <small *ngIf=\"progress.isActive('generic_clicker_purchase')\">\r\n          (\r\n            {{xcps()}}\r\n            {{lang.Txt(currency.tagS(0))}}/{{lang.txt(\"s\")}}\r\n          )\r\n        </small>\r\n      </h4>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row core-row align-items-top\">\r\n\r\n    <div class=\"col\">\r\n      <div class=\"row justify-content-top\" *ngIf=\"progress.isActive('upgrade_tab_unlocked')\">\r\n        <div class=\"col text-center\">\r\n          <app-upgrade-panel></app-upgrade-panel>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <div class=\"row justify-content-top\">\r\n        <div class=\"col text-center\">\r\n          <button type=\"button\" \r\n                  class=\"btn btn-lg btn-primary big-button\" \r\n                  (click)=\"click()\"\r\n                  [class.shake-animation] = \"isOnClickMeButtonShakeAnimation\">\r\n            <h2>\r\n              {{lang.txt(\"click_button_text\")}}\r\n            </h2>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <div class=\"row justify-content-top\" *ngIf=\"progress.isActive('clicker_panel_unlocked')\">\r\n        <div class=\"col text-center\">\r\n          <app-clicker-panel></app-clicker-panel>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  \r\n  <div class=\"row core-row align-items-top\">\r\n    <div class=\"col\">\r\n      <div class=\"row justify-content-top\" *ngIf=\"progress.isActive('events_feed_unlocked')\">\r\n        <div class=\"col text-center\">\r\n          <app-event-feed></app-event-feed>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<div  class=\"card panel-item btn\"\r\n      *ngIf=\"progress.isActive(clickers.tag(clicker_index) + '_reveal')\"\r\n      #tooltip=\"ngbTooltip\"\r\n      triggers=\"manual\"\r\n      placement=\"top\"\r\n      ngbTooltip=\"{{progress.isActive(clickers.tag(clicker_index)+'_reveal_name')?\r\n                    lang.txt(clickers.tagDescription(clicker_index)):\r\n                    ''}}\"\r\n      [class.disabled]=\"!clickers.canPurchase(clicker_index)\"\r\n      [class.hop-animation]=\"isOnAnimation\" \r\n      (click)=\"onClick()\"\r\n      (mouseenter)=\"onMouseEnter()\"\r\n      (mouseleave)=\"onMouseLeave()\"\r\n      (press)=\"onPress()\"\r\n      (tap)=\"onMouseLeave()\">\r\n  <div class=\"card-block\" >\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5>\r\n\r\n          <span *ngIf=\"progress.isActive(clickers.tag(clicker_index)+'_reveal_name')\">\r\n            {{lang.Txt(clickers.tagS(clicker_index))}}\r\n          </span>\r\n          <span *ngIf=\"!progress.isActive(clickers.tag(clicker_index)+'_reveal_name')\">\r\n            ???\r\n          </span>\r\n\r\n          <br/>\r\n\r\n          <small>\r\n            {{lang.Txt(\"costs\")}}\r\n            <span *ngIf=\"progress.isActive(clickers.tag(clicker_index)+'_reveal_cost')\">\r\n              {{clickers.xcost(clicker_index)}}\r\n            </span>\r\n            <span *ngIf=\"!progress.isActive(clickers.tag(clicker_index)+'_reveal_cost')\">\r\n              ???\r\n            </span>\r\n            {{lang.Txt(currency.tagP(clickers.getCurrency(clicker_index)))}}\r\n          </small>\r\n\r\n        </h5>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div *ngIf=\"progress.isActive(clickers.tag(clicker_index)+'_purchase')\">\r\n          <b>\r\n            {{lang.Txt(\"count\")}}:\r\n            {{clickers.xcount(clicker_index)}}\r\n          </b>\r\n          <br/>\r\n          {{lang.Txt(\"produces\")}}\r\n          {{clickers.xpower(clicker_index)}}\r\n          {{lang.Txt(currency.tagS(0))}}/{{lang.txt(\"s\")}}\r\n          <br/>\r\n          {{lang.Txt(\"total\")}}\r\n          {{lang.txt(\"of\")}}\r\n          {{clickers.totalPower(clicker_index)}}\r\n          {{lang.Txt(currency.tagS(0))}}/{{lang.txt(\"s\")}}\r\n        </div>\r\n        <div *ngIf=\"!progress.isActive(clickers.tag(clicker_index)+'_purchase')\">\r\n          <h1>???</h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"progress.isActive('clicker_panel_unlocked')\">\r\n  <h2 class=\"text-center\">\r\n    Clickers\r\n  </h2>\r\n  <div class=\"item-panel text-center\">\r\n    <app-clicker-item *ngFor=\"let i of clickers.indexes()\" \r\n                    [clickerIndex]='i'>\r\n    </app-clicker-item>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"progress.isActive('events_feed_unlocked')\">\n  <h2 class=\"text-center\">\n    Events Feed\n  </h2>\n  <div class=\"item-panel text-center\">\n    <app-event-item *ngFor=\"let tag of events.tags()\" \n                    [eventTag]='tag'>\n    </app-event-item>\n    <div *ngIf=\"events.numShownEvents() <= 0\">\n      {{lang.txt(\"empty_events_feed\")}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<div  class=\"card panel-item left-in-animation\"\n    *ngIf=\"!is_closed && progress.isActive(actual_event.tagR()) && !progress.isActive(actual_event.tagDone())\">\n  <div class=\"card-block\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h4>\n          {{lang.txt(events.tagN(eventTag))}}\n        </h4>\n        {{lang.txt(events.tagD(eventTag))}}\n        <app-single-button-event *ngIf=\"isSingleButtonEvent()\"\n                                  [event]=\"actual_event\"\n                                  (close)=\"onClose()\" >\n        </app-single-button-event>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__ = __webpack_require__(5);
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
    function ClickerService(currency, progress) {
        this.currency = currency;
        this.progress = progress;
        this.clickers = [];
    }
    ClickerService.prototype.addClicker = function (clicker) {
        this.clickers.push(clicker);
    };
    ClickerService.prototype.tag = function (clicker_index) {
        return this.clickers[clicker_index].tag();
    };
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
    ClickerService.prototype.multiplyPower = function (clicker_index, multiplier) {
        this.clickers[clicker_index].multiplyPower(multiplier);
    };
    ClickerService.prototype.xcount = function (clicker_index) {
        return this.clickers[clicker_index].xcount();
    };
    ClickerService.prototype.purchase = function (clicker_index) {
        if (this.canPurchase(clicker_index)) {
            this.progress.trigger('generic_clicker_purchase');
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
        return this.currency.hasEnough(currency, this.xcost(clicker_index));
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
    ClickerService.prototype.getState = function () {
        var state = {};
        for (var _i = 0, _a = this.clickers; _i < _a.length; _i++) {
            var clicker = _a[_i];
            state[clicker.tag()] = clicker.getState();
        }
        return state;
    };
    ClickerService.prototype.setState = function (state) {
        for (var _i = 0, _a = this.clickers; _i < _a.length; _i++) {
            var clicker = _a[_i];
            clicker.setState(state[clicker.tag()]);
        }
    };
    ClickerService.prototype.clearState = function () {
        for (var _i = 0, _a = this.clickers; _i < _a.length; _i++) {
            var clicker = _a[_i];
            clicker.clearState();
        }
    };
    return ClickerService;
}());
ClickerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _b || Object])
], ClickerService);

var _a, _b;
//# sourceMappingURL=clicker.service.js.map

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<div class=\"holder\">\n  <button class=\"btn btn-primary\" (click)=\"onClickButton()\">\n    {{lang.txt(event.tagB())}}\n  </button>\n</div>"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<div  class=\"card panel-item btn left-in-animation\"\n  *ngIf=\"progress.isActive(eventTag + '_reveal')\"\n  (click)=\"onClick()\"\n  [class.disabled]=\"!upgrades.canPurchase(eventTag) || upgrades.isPurchased(eventTag)\"\n  [class.btn]=\"!upgrades.isPurchased(eventTag)\">\n  <div class=\"card-block\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h4>\n          {{lang.txt(upgrades.tagT(eventTag))}}\n        </h4>\n        {{lang.txt(upgrades.tagD(eventTag))}}\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"!upgrades.isPurchased(eventTag)\">\n      <div class=\"col\">\n        <h6>\n          (\n          {{lang.Txt(\"costs\")}}\n          {{upgrades.xcost(eventTag)}}\n          {{lang.Txt(currency.tagP(upgrades.getCurrency(eventTag)))}}\n          )\n        </h6>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"progress.isActive('upgrade_tab_unlocked')\">\n  <h2 class=\"text-center\">\n    Upgrades Purchased\n  </h2>\n  <div class=\"item-panel text-center\">\n    <div *ngFor=\"let tag of upgrades.tags()\">\n      <app-upgrade-item *ngIf=\"upgrades.isPurchased(tag)\" \n                      [eventTag]='tag'>\n      </app-upgrade-item>\n    </div>\n  </div>\n  <h2 class=\"text-center\">\n    Upgrades Available\n  </h2>\n  <div class=\"item-panel text-center\">\n    <div *ngFor=\"let tag of upgrades.tags()\">\n      <app-upgrade-item *ngIf=\"!upgrades.isPurchased(tag)\" \n                      [eventTag]='tag'>\n      </app-upgrade-item>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__ = __webpack_require__(5);
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
        this.events = {};
    }
    EventsService.prototype.addEvent = function (event_tag, event) {
        this.events[event_tag] = event;
    };
    EventsService.prototype.tagN = function (event_tag) {
        return this.events[event_tag].tagN();
    };
    EventsService.prototype.tagD = function (event_tag) {
        return this.events[event_tag].tagD();
    };
    EventsService.prototype.tags = function () {
        var array = [];
        for (var tag in this.events) {
            array.push(tag);
        }
        return array;
    };
    EventsService.prototype.numShownEvents = function () {
        var num = 0;
        for (var tag in this.events) {
            var actual_event = this.getActualEvent(tag);
            if (this.progress.isActive(actual_event.tagR()) && !this.progress.isActive(actual_event.tagDone())) {
                num += 1;
            }
        }
        return num;
    };
    EventsService.prototype.getActualEvent = function (event_tag) {
        return this.events[event_tag];
    };
    EventsService.prototype.getState = function () {
        var state = {};
        return state;
    };
    EventsService.prototype.setState = function (state) {
    };
    EventsService.prototype.clearState = function () {
    };
    return EventsService;
}());
EventsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _b || Object])
], EventsService);

var _a, _b;
//# sourceMappingURL=events.service.js.map

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(150);


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpgradeService = (function () {
    function UpgradeService(currency, progress) {
        this.currency = currency;
        this.progress = progress;
        this.upgrades = {};
    }
    UpgradeService.prototype.addUpgrade = function (upgrade) {
        this.upgrades[upgrade.tag()] = upgrade;
    };
    UpgradeService.prototype.tags = function () {
        var array = [];
        for (var tag in this.upgrades) {
            array.push(tag);
        }
        return array;
    };
    UpgradeService.prototype.tag = function (upgrade_id) {
        return this.upgrades[upgrade_id].tag();
    };
    UpgradeService.prototype.tagT = function (upgrade_id) {
        return this.upgrades[upgrade_id].tagT();
    };
    UpgradeService.prototype.tagD = function (upgrade_id) {
        return this.upgrades[upgrade_id].tagD();
    };
    UpgradeService.prototype.xcost = function (upgrade_id) {
        return this.upgrades[upgrade_id].xcost();
    };
    UpgradeService.prototype.canPurchase = function (upgrade_id) {
        return this.upgrades[upgrade_id].canPurchase();
    };
    UpgradeService.prototype.purchase = function (upgrade_id) {
        if (this.canPurchase(upgrade_id)) {
            this.progress.trigger("generic_upgrade_purchase");
            this.upgrades[upgrade_id].purchase();
        }
    };
    UpgradeService.prototype.getCurrency = function (upgrade_id) {
        return this.upgrades[upgrade_id].getCurrency();
    };
    UpgradeService.prototype.isPurchased = function (upgrade_id) {
        return this.upgrades[upgrade_id].isPurchased();
    };
    UpgradeService.prototype.getState = function () {
        var state = {};
        return state;
    };
    UpgradeService.prototype.setState = function (state) {
    };
    UpgradeService.prototype.clearState = function () {
    };
    return UpgradeService;
}());
UpgradeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_progress_progress_service__["a" /* ProgressService */]) === "function" && _b || Object])
], UpgradeService);

var _a, _b;
//# sourceMappingURL=upgrade.service.js.map

/***/ }),

/***/ 37:
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
    Trigger.prototype.getState = function () {
        var state = {};
        state["active"] = this.active;
        return state;
    };
    Trigger.prototype.setState = function (state) {
        this.active = state["active"];
        if (this.active === true) {
            for (var _i = 0, _a = this.callbacks; _i < _a.length; _i++) {
                var callback = _a[_i];
                callback();
            }
        }
    };
    Trigger.prototype.clearState = function () {
        this.active = false;
    };
    return Trigger;
}());

//# sourceMappingURL=trigger.js.map

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__ = __webpack_require__(7);
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
        this.triggers = {};
    }
    ProgressService.prototype.addTrigger = function (trigger_label, trigger) {
        this.triggers[trigger_label] = trigger;
    };
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
    ProgressService.prototype.labels = function () {
        return Object.keys(this.triggers);
    };
    ProgressService.prototype.getState = function () {
        var state = {};
        for (var _i = 0, _a = this.labels(); _i < _a.length; _i++) {
            var trigger_label = _a[_i];
            var trigger = this.triggers[trigger_label];
            state[trigger_label] = trigger.getState();
        }
        return state;
    };
    ProgressService.prototype.setState = function (state) {
        for (var _i = 0, _a = this.labels(); _i < _a.length; _i++) {
            var trigger_label = _a[_i];
            var trigger = this.triggers[trigger_label];
            trigger.setState(state[trigger_label]);
        }
    };
    ProgressService.prototype.clearState = function () {
        for (var _i = 0, _a = this.labels(); _i < _a.length; _i++) {
            var trigger_label = _a[_i];
            var trigger = this.triggers[trigger_label];
            trigger.clearState();
        }
    };
    return ProgressService;
}());
ProgressService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_currency_currency_service__["a" /* CurrencyService */]) === "function" && _a || Object])
], ProgressService);

var _a;
//# sourceMappingURL=progress.service.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_progress_trigger__ = __webpack_require__(37);
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
    function Event(progress, condition_function, tag, activation_function, close_function) {
        this.progress = progress;
        this.condition_function = condition_function;
        this.tag = tag;
        this.activation_function = activation_function;
        this.close_function = close_function;
        this.reveal_progress_tag = tag + "_reveal";
        this.done_progress_tag = tag + "_done";
        this.name_tag = tag + "_name";
        this.description_tag = tag + "_description";
        this.progress.addTrigger(this.reveal_progress_tag, new __WEBPACK_IMPORTED_MODULE_0_app_progress_trigger__["a" /* Trigger */]());
        this.progress.addCondition(this.reveal_progress_tag, condition_function);
        this.progress.addTrigger(this.done_progress_tag, new __WEBPACK_IMPORTED_MODULE_0_app_progress_trigger__["a" /* Trigger */]());
    }
    Event.prototype.tagR = function () {
        return this.reveal_progress_tag;
    };
    Event.prototype.tagDone = function () {
        return this.done_progress_tag;
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
        this.progress.trigger(this.done_progress_tag);
    };
    return Event;
}());

var SingleButtonEvent = (function (_super) {
    __extends(SingleButtonEvent, _super);
    function SingleButtonEvent(progress, condition_function, tag, activation_function, close_function, button_function) {
        var _this = _super.call(this, progress, condition_function, tag, activation_function, close_function) || this;
        _this.button_function = button_function;
        _this.button_tag = _this.tag + "_button";
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

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    }
    CurrencyService.prototype.addCurrency = function (currency) {
        this.currency.push(currency);
    };
    CurrencyService.prototype.add = function (currency_index, value) {
        this.currency[currency_index].add(value);
    };
    CurrencyService.prototype.tag = function (currency_index) {
        return this.currency[currency_index].tag();
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
    CurrencyService.prototype.getState = function () {
        var state = {};
        for (var _i = 0, _a = this.currency; _i < _a.length; _i++) {
            var currency_instance = _a[_i];
            state[currency_instance.tag()] = currency_instance.getState();
        }
        return state;
    };
    CurrencyService.prototype.setState = function (state) {
        for (var _i = 0, _a = this.currency; _i < _a.length; _i++) {
            var currency_instance = _a[_i];
            currency_instance.setState(state[currency_instance.tag()]);
        }
    };
    CurrencyService.prototype.clearState = function () {
        for (var _i = 0, _a = this.currency; _i < _a.length; _i++) {
            var currency_instance = _a[_i];
            currency_instance.clearState();
        }
    };
    return CurrencyService;
}());
CurrencyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CurrencyService);

//# sourceMappingURL=currency.service.js.map

/***/ })

},[270]);
//# sourceMappingURL=main.bundle.js.map