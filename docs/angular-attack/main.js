(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n    <h1 class=\"text-center\">Welcome to Angular Attack Simulator!</h1>\n  <div class=\"row\">\n    <div class=\"mx-auto col-6\">\n        <div class=\"d-flex justify-content-between\">\n            <h2 class=\"p-2\">Hours remaining: {{hours}}</h2>\n            <h2 class=\"p-2\">Score: {{score}}</h2>\n        </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-3\">\n      <app-points></app-points>\n      <app-feed></app-feed>\n    </div>\n    <div class=\"col-6\" style=\"border: 1px solid\">\n      <app-page></app-page>\n    </div>\n    <div class=\"col-3\">\n      <app-login></app-login>\n    </div>\n  </div>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(feedService) {
        this.feedService = feedService;
        this.hourInterval = setInterval(function () {
            game.hours -= 1;
        }, 20000);
        game.multiplier += 0.1;
        this._feedService = feedService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._feedService.pushFeed("Welcome to Angular Attack simulator. You have 48 hours to build the best Angular app you can.");
    };
    Object.defineProperty(AppComponent.prototype, "hours", {
        get: function () {
            return game.hours;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "score", {
        get: function () {
            return game.score;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_feed_feed_component__WEBPACK_IMPORTED_MODULE_1__["FeedService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _points_points_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./points/points.component */ "./src/app/points/points.component.ts");
/* harmony import */ var _features_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/login/login.component */ "./src/app/features/login/login.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _points_points_component__WEBPACK_IMPORTED_MODULE_3__["PointsComponent"],
                _features_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_5__["PageComponent"],
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_6__["FeedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [_feed_feed_component__WEBPACK_IMPORTED_MODULE_6__["FeedService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/features/login/login.component.css":
/*!****************************************************!*\
  !*** ./src/app/features/login/login.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/features/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngIf=\"loginLevel === 0\">\n      <button (click)=\"createLogin()\">Create login page (Cost: {{loginCost}})</button>\n  </div>\n  <div *ngIf=\"loginLevel > 0\">\n      <button (click)=\"createLogin()\">Upgrade login page (Cost: {{loginCost}})</button>\n      <p>Login level: {{loginLevel}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/features/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../feed/feed.component */ "./src/app/feed/feed.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(feedService) {
        this.feedService = feedService;
        this.loginLevel = 0;
        this.loginCost = 2;
        this._feedService = feedService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.createLogin = function () {
        if (game.points >= this.loginCost) {
            this._feedService.pushFeed("Purchased Login Page");
            game.points -= this.loginCost;
            game.multiplier += 0.1;
            this.loginLevel += 1;
            this.loginCost += 0.5 * this.loginLevel;
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/features/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/features/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_feed_feed_component__WEBPACK_IMPORTED_MODULE_1__["FeedService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.css":
/*!*****************************************!*\
  !*** ./src/app/feed/feed.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5\">\n  <h5>Feed:</h5>\n  <ul style=\"list-style: none; max-height: 300px; height: 300px; overflow: auto;\">\n    <li *ngFor=\"let item of feedStack\">\n      {{item}}\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedService, FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedService = /** @class */ (function () {
    function FeedService() {
        this.onPush = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FeedService.prototype.pushFeed = function (message) {
        this.onPush.emit(message);
    };
    return FeedService;
}());

var FeedComponent = /** @class */ (function () {
    function FeedComponent(service) {
        var _this = this;
        this.service = service;
        this.feedStack = [];
        this.service.onPush.subscribe({
            next: function (message) {
                //console.log(`Received message ${message}`);
                _this.feedStack.unshift(message);
            }
        });
    }
    FeedComponent.prototype.ngOnInit = function () {
    };
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [FeedService])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/page/page.component.css":
/*!*****************************************!*\
  !*** ./src/app/page/page.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/page.component.html":
/*!******************************************!*\
  !*** ./src/app/page/page.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">Homepage</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu1\">Login</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"#\">Store</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link disabled\" href=\"#\">Profile</a>\n  </li>\n</ul>\n\n<hr/>\n\n<div class=\"tab-content\">\n    <div id=\"home\" class=\"tab-pane fade show active\">\n      <div style=\"text-align:center\">\n          <h1>\n            Welcome to app!\n          </h1>\n          <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n        </div>\n        <h2>Here are some links to help you start: </h2>\n        <ul>\n          <li>\n            <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n          </li>\n          <li>\n            <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n          </li>\n          <li>\n            <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n          </li>\n        </ul>\n    </div>\n    <div id=\"menu1\" class=\"tab-pane fade\">\n      <form class=\"form-signin\">\n          <img class=\"mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\n          <h1 class=\"h3 mb-3 font-weight-normal\">{{name}}</h1>\n          <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n          <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n          <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n          <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n          <div class=\"checkbox mb-3\">\n            <label>\n              <input type=\"checkbox\" value=\"remember-me\"> Remember me\n            </label>\n          </div>\n          <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n          <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2018</p>\n        </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageComponent = /** @class */ (function () {
    function PageComponent() {
        this.name = this.randomTypo('Please sign in');
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent.prototype.repeatRandomChar = function (str) {
        var i = Math.floor(Math.random() * str.length);
        return str.slice(0, i + 1) + str.slice(i);
    };
    PageComponent.prototype.randomTypo = function (str) {
        return Math.random() > 0 ? this.repeatRandomChar(str) : str;
    };
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/page/page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/points/points.component.css":
/*!*********************************************!*\
  !*** ./src/app/points/points.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/points/points.component.html":
/*!**********************************************!*\
  !*** ./src/app/points/points.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h3>Productivity Points</h3>\n  <h5 style=\"color: grey\">{{multiplier*10 | number: '1.2-2'}} per second</h5>\n  <h5>Fatigue: {{fatigue}} <button class=\"btn btn-sm btn-secondary\" (click)=\"sleep()\">Sleep</button></h5>\n  <h1>{{points | number: '1.2-2'}}</h1>\n</div>"

/***/ }),

/***/ "./src/app/points/points.component.ts":
/*!********************************************!*\
  !*** ./src/app/points/points.component.ts ***!
  \********************************************/
/*! exports provided: PointsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsComponent", function() { return PointsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PointsComponent = /** @class */ (function () {
    function PointsComponent() {
        this.fatigueInterval = setInterval(this.fatigueCount, 1000);
        this.pointInterval = setInterval(this.pointCount, 100);
    }
    PointsComponent.prototype.ngOnInit = function () {
    };
    PointsComponent.prototype.sleep = function () {
        game.fatigue = 0;
        clearInterval(this.fatigueInterval);
        this.fatigueInterval = setInterval(this.fatigueCount, 1000);
    };
    Object.defineProperty(PointsComponent.prototype, "points", {
        get: function () {
            return game.points;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PointsComponent.prototype, "multiplier", {
        get: function () {
            return game.multiplier - game.fatigue * game.multiplier * 0.01;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PointsComponent.prototype, "fatigue", {
        get: function () {
            return game.fatigue;
        },
        enumerable: true,
        configurable: true
    });
    PointsComponent.prototype.pointCount = function () {
        game.points += 1 * (game.multiplier - game.fatigue * game.multiplier * 0.01);
        console.log(game.multiplier);
    };
    PointsComponent.prototype.fatigueCount = function () {
        game.fatigue = (game.fatigue + 1).clamp(0, 100);
    };
    PointsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-points',
            template: __webpack_require__(/*! ./points.component.html */ "./src/app/points/points.component.html"),
            styles: [__webpack_require__(/*! ./points.component.css */ "./src/app/points/points.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PointsComponent);
    return PointsComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/taylor/personal/angular-attack/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map