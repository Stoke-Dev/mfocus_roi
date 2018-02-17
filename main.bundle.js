webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about page here\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* These can be imported into any CSS file where global elements need to be overwritten. I'll be putting Mirco Focus specific styling in here */\n\n/* Buttons */\n\n.btn-light {\n    color: #007AE7;\n    background-color: white;\n    border-color: transparent;\n  }\n\n.btn-light:hover, .btn-light:focus, .btn-light:active {\n    background-color: #007AE7;\n    color: white;\n  }\n\n.btn-primary {\n    background-color: #007AE7;\n    color: white;\n}\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n    color: #007AE7;\n    background-color: white;\n}\n\n.btn.mf-featured-cta, .btn:focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);\n            box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);\n    border-color: transparent;\n}\n\n.btn {\n    border-radius: 99px;\n    text-transform: uppercase;\n    font-size: 11px;\n    font-weight: 500;\n    letter-spacing: 1px;\n    padding: 14px 22px;\n    /* margin-right: 11px; */\n    min-width: 140px;\n    text-align: center;\n}\n\n@media (max-width: 767px) {\n    .btn {\n        width: 100%;\n    }\n}\n\nnav.navbar {\n  background: white;\n  padding: 19px 50px;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-faded\"><app-header></app-header></nav>\n<div class=\"main\">\n  <router-outlet></router-outlet>  <!-- All routes are loaded in here -->\n</div>\n<app-footer></app-footer> <!-- Footer route here -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AppComponent';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calculator_calculator_component__ = __webpack_require__("../../../../../src/app/calculator/calculator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__questionnaire_questionnaire_component__ = __webpack_require__("../../../../../src/app/questionnaire/questionnaire.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helper_box_helper_box_component__ = __webpack_require__("../../../../../src/app/helper-box/helper-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mf_client_data_service__ = __webpack_require__("../../../../../src/app/mf-client-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
    { path: 'savings', component: __WEBPACK_IMPORTED_MODULE_6__calculator_calculator_component__["a" /* CalculatorComponent */] },
    { path: 'begin', component: __WEBPACK_IMPORTED_MODULE_10__questionnaire_questionnaire_component__["a" /* QuestionnaireComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__calculator_calculator_component__["a" /* CalculatorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__questionnaire_questionnaire_component__["a" /* QuestionnaireComponent */],
                __WEBPACK_IMPORTED_MODULE_11__helper_box_helper_box_component__["a" /* HelperBoxComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__mf_client_data_service__["a" /* MfClientDataService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/calculator/calculator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* These can be imported into any CSS file where global elements need to be overwritten. I'll be putting Mirco Focus specific styling in here */\n\n/* Buttons */\n\n.btn-light {\n    color: #007AE7;\n    background-color: white;\n    border-color: transparent;\n  }\n\n.btn-light:hover, .btn-light:focus, .btn-light:active {\n    background-color: #007AE7;\n    color: white;\n  }\n\n.btn-primary {\n    background-color: #007AE7;\n    color: white;\n}\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n    color: #007AE7;\n    background-color: white;\n}\n\n.btn.mf-featured-cta, .btn:focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);\n            box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);\n    border-color: transparent;\n}\n\n.btn {\n    border-radius: 99px;\n    text-transform: uppercase;\n    font-size: 11px;\n    font-weight: 500;\n    letter-spacing: 1px;\n    padding: 14px 22px;\n    /* margin-right: 11px; */\n    min-width: 140px;\n    text-align: center;\n}\n\n@media (max-width: 767px) {\n    .btn {\n        width: 100%;\n    }\n}\n\n/* Checkboxes */\n\n.checkbox {\n    position: relative;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    padding-left: 0;\n }\n\n.checkbox label {\n    position: relative;\n    display: inline-block;\n    cursor: pointer;\n    width: 30px;\n    height: 30px;\n    margin: 0;\n    border: 2px solid #00CFFB;\n    border-radius: 8px;\n    background-color: #fff;\n    -webkit-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\n    transition: border 0.15s ease-in-out, color 0.15s ease-in-out; \n}\n\n.checkbox input[type=\"checkbox\"] {\n    display: none;\n}\n\n.checkbox input[type=\"checkbox\"]:focus + label {\n    outline: none;\n}\n\n.checkbox input[type=\"checkbox\"]:checked + label::after {\n    /* Brandyn's magical checkbox */\n    content: \"\";\n    display: inline-block;\n    width: 8.65px; /*golden ratio*/\n    height: 14px;\n    border: 2px #881FD3 solid;\n    border-top: 0;\n    border-left: 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    margin-left: 8px;\n}\n\n.checkbox input[type=\"checkbox\"]:disabled + label {\n    opacity: 0.65; \n    cursor: default; \n}\n\n.checkbox.checkbox-inline {\n    margin-top: 0; \n}\n\n.animated {\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s; /* Default Duration */\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n\n.fade-in-up {\n    opacity: 0;\n    -webkit-animation-name: fadeInUp;\n            animation-name: fadeInUp;\n}\n\n.fade-in {\n    opacity: 0;  /* make things invisible upon start */\n    -webkit-animation: fadeIn ease-in 1;\n            animation: fadeIn ease-in 1;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-duration: .5s;\n            animation-duration: .5s;\n}\n\n.fade-in.btn {\n    -webkit-animation-delay: .5s;\n            animation-delay: .5s;\n}\n\n.fade-in.info-text {\n    -webkit-animation-delay: .4s;\n            animation-delay: .4s;\n}\n\n.fade-in.pie {\n    -webkit-animation-delay: .1s;\n            animation-delay: .1s;\n}\n\n/* Keyframes */\n\n@-webkit-keyframes progress { from {-webkit-transform: rotate(0);transform: rotate(0)} to {-webkit-transform: rotate(135deg);transform: rotate(135deg)} }\n\n@keyframes progress { from {-webkit-transform: rotate(0);transform: rotate(0)} to {-webkit-transform: rotate(135deg);transform: rotate(135deg)} }\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@-webkit-keyframes fadeInUp { from { -webkit-transform: translate3d(0, 40px, 0); transform: translate3d(0, 40px, 0) } to {-webkit-transform: translate3d(0,0,0);transform: translate3d(0,0,0);opacity: 1;} }\n\n@keyframes fadeInUp { from { -webkit-transform: translate3d(0, 40px, 0); transform: translate3d(0, 40px, 0) } to {-webkit-transform: translate3d(0,0,0);transform: translate3d(0,0,0);opacity: 1;} }\n\n.mf-calc {\n    padding: 50px 20px;\n}\n\n.mf-solutions-list {\n    position: relative;\n}\n\n.box {\n    border-radius: 6px;\n    border-style: solid;\n    border-width: 1px;\n    border-color: #00CFFB;\n    margin: 15px 0;\n    background-color: white;\n    overflow: hidden;\n}\n\n.mf-title {\n    font-weight: bold;\n    font-size: 20px;\n    border-bottom: 1px solid #293138;\n    padding: 20px 0 9px;\n    margin: 0 15px 11px;\n}\n\n.mf-subtitle {\n    font-size: 14px;\n}\n\n.mf-solution-desc {\n    font-size: 14px;\n    padding: 0 30px;\n}\n\n.mf-solution-cta {\n    position: relative;\n    background: #881FD3;\n    padding: 15px 30px;\n    margin-top: 15px;\n}\n\n.mf-savings {\n    text-align: center;\n    color: white;\n    padding: 7px 0;\n    font-size: 20px;\n}\n\n.mf-change-btn {\n    float: right;\n}\n\n@media (min-width: 750px) {\n    .mf-savings {\n        float: right;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calculator/calculator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mf-calc container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h2 class=\"animated fade-in-up heading\">Explore what Micro Focus can do for you</h2>\n      <p class=\"animated fade-in info-text mf-subtitle\">Please review our solutions below</p>\n    </div>\n    <div class=\"mf-solutions-list col-12\">\n      <div class=\"box row animated fade-in\" style=\"animation-delay: .2s;\" *ngFor=\"let cat of categories\">\n        <div class=\"col-12\">\n          <div class=\"mf-title\">\n            {{ cat.name }}\n          </div>\n        </div>\n\n        <div class=\"mf-solution-desc col-md-4\">\n            {{ cat.description }}\n        </div>\n\n        <div class=\"mf-charts col-md-8\">\n          <img src=\"assets/TempImage.png\" style=\"max-height: 165px; width:100%;\" class=\"detail-image\">\n        </div>\n\n        <div class=\"mf-solution-cta col-12\">\n            <a class=\"btn btn-light\" href=\"#\">Learn More</a> <div class=\"mf-savings\">Save {{ cat.savings | currency: dollar }} / year</div>\n        </div>\n      </div>\n      <a class=\"btn btn-primary mf-change-btn\" routerLink=\"/begin\" routerLinkActive=\"active\">Change Information</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/calculator/calculator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mf_client_data_service__ = __webpack_require__("../../../../../src/app/mf-client-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent(_data) {
        this._data = _data;
        this.categories = [
            {
                id: 'id_gov',
                name: "Identity Governance",
                savings: 99,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie libero elit, quis placerat erat vehicula sed. Sed vitae orci efficitur, dignissim diam sit amet, tempor velit. Nam imperdiet, turpis in dictum maximus, nisl diam dapibus nibh, sit amet lacinia eros ante ut orci."
            },
            {
                id: 'ac_mgmt',
                name: "Access Management",
                savings: 99,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie libero elit, quis placerat erat vehicula sed. Sed vitae orci efficitur, dignissim diam sit amet, tempor velit. Nam imperdiet, turpis in dictum maximus, nisl diam dapibus nibh, sit amet lacinia eros ante ut orci."
            },
            {
                id: 'prv_mgmt',
                name: "Privilege Management",
                savings: 99,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie libero elit, quis placerat erat vehicula sed. Sed vitae orci efficitur, dignissim diam sit amet, tempor velit. Nam imperdiet, turpis in dictum maximus, nisl diam dapibus nibh, sit amet lacinia eros ante ut orci."
            }
        ];
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        _a = this._data.computeSavings(), this.categories[0].savings = _a[0], this.categories[1].savings = _a[1], this.categories[2].savings = _a[2];
        this.categories.sort(compareSavings);
        var _a;
    };
    CalculatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calculator',
            template: __webpack_require__("../../../../../src/app/calculator/calculator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calculator/calculator.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mf_client_data_service__["a" /* MfClientDataService */]])
    ], CalculatorComponent);
    return CalculatorComponent;
}());

function compareSavings(a, b) {
    if (a.savings < b.savings)
        return 1;
    if (a.savings > b.savings)
        return -1;
    return 0;
}


/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n    position: relative;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    padding: 3rem;\n    background-color: #272A2A;\n    text-align: center;\n    color: white;\n}\n\n.footer-text, p {\n    color: rgb(218, 218, 218);\n}\n\na:link, a:active, a:visited {\n    color: #29CEFF; \n}\n\na:hover {\n    color: #29CEFF; \n    text-decoration: underline;\n}\n\ndiv[class^=\"col\"] {\n    text-align: left;\n    margin: 0;\n    padding: 0;\n}\n\nul {\n    padding: 0;\n    list-style-type: none;\n    text-align: left;\n}\n\n.copyright {\n        color: grey;\n}\n\np {\n    margin: 0;\n}\n\n@media (max-width: 992px) {\n    .footer {\n        max-height: none;\n    }\n}\n\n@media (min-width: 992px) {\n    .footer {\n        max-height: 256px;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n\n<div class=\"container\">\n\n<div class=\"row justify-content-md-center border-bottom border-dark\" >\n\n<div class=\"col-md-2 footer-text\">\n  \n    <ul>\n        <li><i class=\"fas fa-globe\"></i><a href=\"#\">  Language</a></li>\n        <li><i class=\"far fa-comments\"></i><a href=\"#\">  Contact Us</a></li>\n        <li><i class=\"far fa-user\"></i>  <a href=\"#\">  Feedback</a></li>\n    </ul>\n  \n  </div>\n\n<div class=\"col-md-1\"></div>\n\n<div class=\"col-md-2 footer-text\"><p>Legal</p>\n    <ul>\n        <li>  <a href=\"#\">Privacy Policy</a></li>\n        <li>  <a href=\"#\">Terms of Use</a></li>\n    </ul>\n</div>\n\n<div class=\"col-md-2 footer-text\"><p>Compliance</p>\n    <ul>\n        <li>  <a href=\"#\">Accessibility</a></li>\n        <li>  <a href=\"#\">Anti-Slavory Statement</a></li>\n    </ul>\n</div>\n\n<div class=\"col-md-2 footer-text\"><p>Help</p>\n    <ul>\n        <li>  <a href=\"#\">Support</a></li>\n        <li>  <a href=\"#\">How To Buy</a></li>\n    </ul>\n</div>\n\n<div class=\"col-md-2 footer-text\"><p>Company</p>\n    <ul>\n        <li>  <a href=\"#\">Careers</a></li>\n        <li>  <a href=\"#\">Investor Relations</a></li>\n        <li>  <a href=\"#\">Corproate Blog</a></li>\n    </ul>\n</div>\n\n</div>\n\n<!-- Second row here -->\n\n<div class=\"row justify-content-md-center\">\n\n    <div class=\"col-md-1 footer-text\">\n        <a href=\"#\">Community ></a>\n    </div>\n    <div class=\"col-md-2 footer-text\">\n     <a>Follow us on:</a>\n     <a href=\"#\"><i class=\"fab fa-twitter-square fa-lg footer-text\"></i></a>\n     <a href=\"#\"><i class=\"fab fa-facebook-square fa-lg footer-text\"></i></a>\n     <a href=\"#\"><i class=\"fab fa-linkedin fa-lg footer-text\"></i></a>\n     <a href=\"#\"><i class=\"fab fa-youtube-square fa-lg footer-text\"></i></a>\n     <a href=\"#\"><i class=\"fab fa-google-plus-square fa-lg footer-text\"></i></a>\n    </div>\n    <div class=\"col-md-1\"></div>\n    <div class=\"col-md-5 footer-text\">\n     <a href=\"#\">Subscribe</a> <a>to Micro Focus</a>\n    </div>\n    <div class=\"col-md-2 footer-text\">\n        <p class=\"copyright\">© 2018 Micro Focus</p>\n    </div>\n\n    \n\n\n    \n</div>\n</div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mf-nav-logo {\n    height: 32px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  <span class=\"navbar-toggler-icon\"></span>\n</button> -->\n\n<a class=\"navbar-brand\" href=\"#\" >\n  <img src=\"assets/MicroFocus_logo_blue.png\" width=\"auto\" class=\"d-inline-block align-top mf-nav-logo\" alt=\"\">\n</a>\n<!-- V In case we ever decide we actually want buttons for our navbar -->\n<!--   <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n  <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n    <li class=\"nav-item active\">\n      <button class=\"btn btn-light my-2 my-sm-0\" routerLink=\"/about\" routerLinkActive=\"active\">Our Solutions <span class=\"sr-only\">(current)</span></button>\n    </li>\n\n    <li class=\"nav-item active\">\n        <button class=\"btn btn-light my-2 my-sm-0\" style=\"margin-left: 7px;\" routerLink=\"/calculator\" routerLinkActive=\"active\">Let's Begin <span class=\"sr-only\">(current)</span></button>\n    </li>\n  </ul>\n\n  <form class=\"form-inline my-2 my-lg-0\">\n    <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n    <button type=\"submit\" class=\"btn btn-light my-2 my-sm-0\" >Search</button>\n  </form>\n\n -->"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/helper-box/helper-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mf-tooltip {\n    /* position: absolute; */\n    margin-top: 96px;\n    border-radius: 4px;\n    -webkit-box-shadow: 0 3px 10px rgba(0,0,0,.16);\n            box-shadow: 0 3px 10px rgba(0,0,0,.16);\n    width: 100%;\n    overflow: hidden;\n}\n\n.mf-tooltip img{\n    display: block;\n    width: 100%;\n    height: 150px;\n    background-color: #00CFFB;\n}\n\n.mf-tooltip .mf-desc {\n    background: white;\n    padding: 20px;\n}\n\n/* .helper-box {\n    width: 250px;\n    height: 300px;\n    background: grey;\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/helper-box/helper-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mf-tooltip\">\n  <img src=\"#\" alt=\"\">\n  <div class=\"mf-desc\">\n    <h4>Tooltip Box</h4>\n    <p>Lorem Ipsum and things</p>\n    <a href=\"#\" class=\"mf-learn-more\">Learn More</a>\n  </div>\n</div>\n\n\n\n<!-- <div class=\"helper-box\">\n\n<div class=\"blue-top\"></div>\n<div class=\"text\">\n<h4>The Micro Focus Difference</h4>\n<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>\n</div>\n\n<div class=\"learn-more\">Learn More</div>\n\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/helper-box/helper-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelperBoxComponent = /** @class */ (function () {
    function HelperBoxComponent() {
    }
    HelperBoxComponent.prototype.ngOnInit = function () {
    };
    HelperBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-helper-box',
            template: __webpack_require__("../../../../../src/app/helper-box/helper-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/helper-box/helper-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelperBoxComponent);
    return HelperBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* These can be imported into any CSS file where global elements need to be overwritten. I'll be putting Mirco Focus specific styling in here */\n\n/* Buttons */\n\n.btn-light {\n    color: #007AE7;\n    background-color: white;\n    border-color: transparent;\n  }\n\n.btn-light:hover, .btn-light:focus, .btn-light:active {\n    background-color: #007AE7;\n    color: white;\n  }\n\n.btn-primary {\n    background-color: #007AE7;\n    color: white;\n}\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n    color: #007AE7;\n    background-color: white;\n}\n\n.btn.mf-featured-cta, .btn:focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);\n            box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);\n    border-color: transparent;\n}\n\n.btn {\n    border-radius: 99px;\n    text-transform: uppercase;\n    font-size: 11px;\n    font-weight: 500;\n    letter-spacing: 1px;\n    padding: 14px 22px;\n    /* margin-right: 11px; */\n    min-width: 140px;\n    text-align: center;\n}\n\n@media (max-width: 767px) {\n    .btn {\n        width: 100%;\n    }\n}\n\n.animated {\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s; /* Default Duration */\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n\n.fade-in-up {\n    opacity: 0;\n    -webkit-animation-name: fadeInUp;\n            animation-name: fadeInUp;\n}\n\n.fade-in {\n    opacity: 0;  /* make things invisible upon start */\n    -webkit-animation: fadeIn ease-in 1;\n            animation: fadeIn ease-in 1;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-duration: .5s;\n            animation-duration: .5s;\n}\n\n.fade-in.btn {\n    -webkit-animation-delay: .5s;\n            animation-delay: .5s;\n}\n\n.fade-in.info-text {\n    -webkit-animation-delay: .4s;\n            animation-delay: .4s;\n}\n\n.fade-in.pie {\n    -webkit-animation-delay: .1s;\n            animation-delay: .1s;\n}\n\n/* Keyframes */\n\n@-webkit-keyframes progress { from {-webkit-transform: rotate(0);transform: rotate(0)} to {-webkit-transform: rotate(135deg);transform: rotate(135deg)} }\n\n@keyframes progress { from {-webkit-transform: rotate(0);transform: rotate(0)} to {-webkit-transform: rotate(135deg);transform: rotate(135deg)} }\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@-webkit-keyframes fadeInUp { from { -webkit-transform: translate3d(0, 40px, 0); transform: translate3d(0, 40px, 0) } to {-webkit-transform: translate3d(0,0,0);transform: translate3d(0,0,0);opacity: 1;} }\n\n@keyframes fadeInUp { from { -webkit-transform: translate3d(0, 40px, 0); transform: translate3d(0, 40px, 0) } to {-webkit-transform: translate3d(0,0,0);transform: translate3d(0,0,0);opacity: 1;} }\n\n.mf-sub-text {\n  font-size: 14px;\n  line-height: 24px;\n}\n\n.home-objects {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.spacing-divs {\n  height: calc(100vh - 80px);\n}\n\n.main-stuff {\n  padding-top: 32vh;\n  height: calc(100vh - 80px);\n  max-width: 800px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex\n}\n\n/* Pie animation here */\n\n.pie {\n  margin-right: 50px;\n  margin-top: 20px;\n}\n\n.back {\n    width: 150px;\n    height: 150px;\n    position: relative;\n    border-radius: 150px;\n    background-color: #B9DCFC;\n    -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.16);\n            box-shadow: 0 3px 6px rgba(0,0,0,.16);\n  }\n\n.mask {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 150px;\n    height: 150px;\n    border-radius: 150px;\n    clip: rect(0, 150px, 150px, 75px);\n  }\n\n.part {\n    background-color: #3D90F9;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 150px;\n    height: 150px;\n    border-radius: 150px;\n    clip: rect(0, 75px, 150px, 0px);\n  }\n\n.anim {\n    -webkit-animation: progress 2.5s;\n            animation: progress 2.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n  }\n\n/* Media Queries */\n\n@media (max-width: 835px) {\n  .pie {\n    display: none;\n  }\n  .main-stuff {\n    padding: 30px 45px;\n    height: auto;\n  }\n  .btn {\n    margin-bottom: 10px;\n  }\n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<div class=\"row home-objects\">\n  <div class=\"col main-stuff\"> \n    <div class=\"pie fade-in\">\n      <div class=\"back\">\n          <div class=\"mask\">\n            <div class=\"part anim\">\n            </div>\n          </div>\n          <div class=hole></div>\n        </div>\n      </div>\n      <div class=\"not-pie\">\n        <h1 class=\"animated fade-in-up heading\">Calculate your ROI from choosing Micro Focus</h1>\n        <p class=\"info-text fade-in mf-sub-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n          incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n          exercitation ullamco.</p>\n        <nav>\n          <a class=\"btn btn-primary fade-in\" style=\"margin-right:8px;\" routerLink=\"/about\" routerLinkActive=\"active\">Our Solutions</a>\n          <a class=\"btn btn-primary fade-in mf-featured-cta\" routerLink=\"/begin\" routerLinkActive=\"active\">Let's Begin</a>\n        </nav>\n      </div>\n    </div>\n  </div>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'Micro Focus ROI';
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mf-client-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MfClientDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MfClientDataService = /** @class */ (function () {
    function MfClientDataService() {
    }
    MfClientDataService.prototype.computeSavings = function () {
        //OUTPUT VARIABLES
        var idenGov;
        var accMgmt;
        var privMgmt;
        //Remap form input variables
        var FTES = this.numStaff;
        var Average_IT_staff_wage = this.avgItWage;
        /* Static Constants */
        var FTES_AM_inj = 6;
        var FTES_AM_fed = 3;
        var FTES_AM_avg_login_time = 10;
        var FTES_working_days = 220;
        var FTES_Wage = 1;
        var FTES_cust_AM_dev_hrs = 230;
        var FTES_AM_cust_apps_mtce = .30;
        var FTES_AB_apps_savings = .95;
        var FTES_AB_apps_mtce = .20;
        //Computations
        var SSO = (FTES_AM_inj + FTES_AM_fed - 1) * FTES_AM_avg_login_time * FTES_working_days * FTES_Wage / 3600 * FTES;
        var ACCESS_BUS = (FTES_AM_inj + FTES_AM_fed) * FTES_cust_AM_dev_hrs * Average_IT_staff_wage * (FTES_AM_cust_apps_mtce - (1 - FTES_AB_apps_savings) * FTES_AB_apps_mtce);
        idenGov = 0; //FINISH ME
        accMgmt = SSO + ACCESS_BUS;
        privMgmt = 0; //FINISH ME
        return [idenGov, accMgmt, privMgmt];
    };
    MfClientDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MfClientDataService);
    return MfClientDataService;
}());



/***/ }),

/***/ "../../../../../src/app/questionnaire/questionnaire.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* These can be imported into any CSS file where global elements need to be overwritten. I'll be putting Mirco Focus specific styling in here */\n\n/* Buttons */\n\n.btn-light {\n    color: #007AE7;\n    background-color: white;\n    border-color: transparent;\n  }\n\n.btn-light:hover, .btn-light:focus, .btn-light:active {\n    background-color: #007AE7;\n    color: white;\n  }\n\n.btn-primary {\n    background-color: #007AE7;\n    color: white;\n}\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n    color: #007AE7;\n    background-color: white;\n}\n\n.btn.mf-featured-cta, .btn:focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);\n            box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);\n    border-color: transparent;\n}\n\n.btn {\n    border-radius: 99px;\n    text-transform: uppercase;\n    font-size: 11px;\n    font-weight: 500;\n    letter-spacing: 1px;\n    padding: 14px 22px;\n    /* margin-right: 11px; */\n    min-width: 140px;\n    text-align: center;\n}\n\n@media (max-width: 767px) {\n    .btn {\n        width: 100%;\n    }\n}\n\n.animated {\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s; /* Default Duration */\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n\n.fade-in-up {\n    opacity: 0;\n    -webkit-animation-name: fadeInUp;\n            animation-name: fadeInUp;\n}\n\n.fade-in {\n    opacity: 0;  /* make things invisible upon start */\n    -webkit-animation: fadeIn ease-in 1;\n            animation: fadeIn ease-in 1;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-duration: .5s;\n            animation-duration: .5s;\n}\n\n.fade-in.btn {\n    -webkit-animation-delay: .5s;\n            animation-delay: .5s;\n}\n\n.fade-in.info-text {\n    -webkit-animation-delay: .4s;\n            animation-delay: .4s;\n}\n\n.fade-in.pie {\n    -webkit-animation-delay: .1s;\n            animation-delay: .1s;\n}\n\n/* Keyframes */\n\n@-webkit-keyframes progress { from {-webkit-transform: rotate(0);transform: rotate(0)} to {-webkit-transform: rotate(135deg);transform: rotate(135deg)} }\n\n@keyframes progress { from {-webkit-transform: rotate(0);transform: rotate(0)} to {-webkit-transform: rotate(135deg);transform: rotate(135deg)} }\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@-webkit-keyframes fadeInUp { from { -webkit-transform: translate3d(0, 40px, 0); transform: translate3d(0, 40px, 0) } to {-webkit-transform: translate3d(0,0,0);transform: translate3d(0,0,0);opacity: 1;} }\n\n@keyframes fadeInUp { from { -webkit-transform: translate3d(0, 40px, 0); transform: translate3d(0, 40px, 0) } to {-webkit-transform: translate3d(0,0,0);transform: translate3d(0,0,0);opacity: 1;} }\n\n.mf-questn {\n    padding: 3% 30px;\n    position: relative;\n}\n\n.container {\n    min-height: calc(100vh - 80px);\n}\n\n.mf-questn-form {\n    text-align: right;\n}\n\n.mf-questn-form .mf-input-row {\n    padding: 10px 0;\n    position: relative;\n}\n\n.mf-questn-form .mf-input-row label {\n    margin-right: 30px;\n    font-weight: 500;\n}\n\n.mf-questn-form .mf-input-row input[type=text] {\n    border-radius: 6px;\n    border: 3px solid #00CFFB;\n    padding: 13px 18px 11px;\n    font-size: 14px;\n    -webkit-transition: .3s border-color;\n    transition: .3s border-color;\n    color: #881FD3;\n    position: relative;\n    width: 100px;\n}\n\n.mf-questn-form .mf-input-row.percentage:after {\n    content: '%';\n    position: absolute;\n    right: 14px;\n    top: 50%;\n    margin-top: -9px;\n    color: #BCE0FD;\n    font-size: 13px;\n}\n\n.mf-questn-form .mf-input-row.dollar:after {\n    content: '$';\n    position: absolute;\n    right: 78px;\n    top: 50%;\n    margin-top: -9px;\n    color: #BCE0FD;\n    font-size: 13px;\n}\n\n.mf-questn-form .mf-input-row.dollar input[type=text] {\n    padding-left: 25px;\n}\n\n.mf-questn-form .mf-input-row input[type=text]::-webkit-input-placeholder {\n    color: #BCE0FD;\n}\n\n.mf-questn-form .mf-input-row input[type=text]:-ms-input-placeholder {\n    color: #BCE0FD;\n}\n\n.mf-questn-form .mf-input-row input[type=text]::-ms-input-placeholder {\n    color: #BCE0FD;\n}\n\n.mf-questn-form .mf-input-row input[type=text]::placeholder {\n    color: #BCE0FD;\n}\n\n.mf-questn-form .mf-input-row input[type=text]:focus {\n    outline: none;\n    border-color: #0078EF;\n}\n\n.mf-questn-form .mf-cont-btn {\n    margin-top: 40px;\n}\n\n@media (min-width: 768px) {\n    .mf-title {\n        margin-left: 28%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questionnaire/questionnaire.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mf-questn container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h2 class=\"animated fade-in-up mf-title\">Tell us a little about your organization</h2>\n      <div class=\"mf-questn-form\">\n\n        <div class=\"mf-input-row animated fade-in-up\" style=\"animation-delay: .2s;\">\n          <label for=\"num_staff\">Number of Staff</label>\n          <input [(ngModel)]=\"mfNumStaff\" id=\"num_staff\" name=\"num_staff\" type=\"text\" placeholder=\"0\">\n        </div>\n        <div class=\"mf-input-row percentage animated fade-in-up\" style=\"animation-delay: .3s;\">\n          <label for=\"annual_turnover\">Annual Turnover (%)</label>\n          <input [(ngModel)]=\"mfAnTurnover\" id=\"annual_turnover\" name=\"annual_turnover\" type=\"text\" placeholder=\"0.0\">\n        </div>\n        <div class=\"mf-input-row dollar animated fade-in-up\" style=\"animation-delay: .4s;\">\n          <label for=\"avg_wage\">Average Hourly Wage</label>\n          <input [(ngModel)]=\"mfAvgWage\" id=\"avg_wage\" name=\"avg_wage\" type=\"text\" placeholder=\"0.00\">\n        </div>\n        <div class=\"mf-input-row dollar animated fade-in-up\" style=\"animation-delay: .5s;\">\n          <label for=\"avg_it\">Average IT Hourly Wage</label>\n          <input [(ngModel)]=\"mfAvgItWage\" id=\"avg_it\" name=\"avg_it\" type=\"text\" placeholder=\"0.00\">\n        </div>\n        <div class=\"mf-input-row animated fade-in-up\" style=\"animation-delay: .6s;\">\n          <label for=\"num_app\">Number of Applications</label>\n          <input [(ngModel)]=\"mfNumApps\" id=\"num_app\" name=\"num_app\" type=\"text\" placeholder=\"0\">\n        </div>\n        <a class=\"btn btn-primary mf-cont-btn\" routerLink=\"/savings\">continue</a>\n\n      </div>\n    </div>\n    <div class=\"col-md-5 offset-md-1 animated fade-in\" style=\"animation-delay:.5s;\">\n      <app-helper-box></app-helper-box>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/questionnaire/questionnaire.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mf_client_data_service__ = __webpack_require__("../../../../../src/app/mf-client-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionnaireComponent = /** @class */ (function () {
    function QuestionnaireComponent(_data) {
        this._data = _data;
    }
    Object.defineProperty(QuestionnaireComponent.prototype, "mfNumStaff", {
        get: function () { return this._data.numStaff; },
        set: function (value) { this._data.numStaff = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionnaireComponent.prototype, "mfAnTurnover", {
        get: function () { return this._data.anTurnover; },
        set: function (value) { this._data.anTurnover = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionnaireComponent.prototype, "mfAvgWage", {
        get: function () { return this._data.avgWage; },
        set: function (value) { this._data.avgWage = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionnaireComponent.prototype, "mfAvgItWage", {
        get: function () { return this._data.avgItWage; },
        set: function (value) { this._data.avgItWage = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionnaireComponent.prototype, "mfNumApps", {
        get: function () { return this._data.numApps; },
        set: function (value) { this._data.numApps = value; },
        enumerable: true,
        configurable: true
    });
    QuestionnaireComponent.prototype.ngOnInit = function () {
    };
    QuestionnaireComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-questionnaire',
            template: __webpack_require__("../../../../../src/app/questionnaire/questionnaire.component.html"),
            styles: [__webpack_require__("../../../../../src/app/questionnaire/questionnaire.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mf_client_data_service__["a" /* MfClientDataService */]])
    ], QuestionnaireComponent);
    return QuestionnaireComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map