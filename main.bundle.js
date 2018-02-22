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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__charts_charts_component__ = __webpack_require__("../../../../../src/app/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tooltip_data_service__ = __webpack_require__("../../../../../src/app/tooltip-data.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__calculator_calculator_component__["a" /* CalculatorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__questionnaire_questionnaire_component__["a" /* QuestionnaireComponent */],
                __WEBPACK_IMPORTED_MODULE_11__helper_box_helper_box_component__["a" /* HelperBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_15__charts_charts_component__["a" /* ChartsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__mf_client_data_service__["a" /* MfClientDataService */],
                __WEBPACK_IMPORTED_MODULE_16__tooltip_data_service__["a" /* TooltipDataService */],
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
exports.push([module.i, "/* These can be imported into any CSS file where global elements need to be overwritten. I'll be putting Mirco Focus specific styling in here */\n\n/* Buttons */\n\n.btn-light {\n    color: #007AE7;\n    background-color: white;\n    border-color: transparent;\n  }\n\n.btn-light:hover, .btn-light:focus, .btn-light:active {\n    background-color: #007AE7;\n    color: white;\n  }\n\n.btn-primary {\n    background-color: #007AE7;\n    color: white;\n}\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n    color: #007AE7;\n    background-color: white;\n}\n\n.btn.mf-featured-cta, .btn:focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);\n            box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);\n    border-color: transparent;\n}\n\n.btn {\n    border-radius: 99px;\n    text-transform: uppercase;\n    font-size: 11px;\n    font-weight: 500;\n    letter-spacing: 1px;\n    padding: 14px 22px;\n    /* margin-right: 11px; */\n    min-width: 140px;\n    text-align: center;\n}\n\n@media (max-width: 767px) {\n    .btn {\n        width: 100%;\n    }\n}\n\n/* Checkboxes */\n\n.checkbox {\n    position: relative;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    padding-left: 0;\n }\n\n.checkbox label {\n    position: relative;\n    display: inline-block;\n    cursor: pointer;\n    width: 30px;\n    height: 30px;\n    margin: 0;\n    border: 2px solid #00CFFB;\n    border-radius: 8px;\n    background-color: #fff;\n    -webkit-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\n    transition: border 0.15s ease-in-out, color 0.15s ease-in-out; \n}\n\n.checkbox input[type=\"checkbox\"] {\n    display: none;\n}\n\n.checkbox input[type=\"checkbox\"]:focus + label {\n    outline: none;\n}\n\n.checkbox input[type=\"checkbox\"]:checked + label::after {\n    /* Brandyn's magical checkbox */\n    content: \"\";\n    display: inline-block;\n    width: 8.65px; /*golden ratio*/\n    height: 14px;\n    border: 2px #881FD3 solid;\n    border-top: 0;\n    border-left: 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    margin-left: 8px;\n}\n\n.checkbox input[type=\"checkbox\"]:disabled + label {\n    opacity: 0.65; \n    cursor: default; \n}\n\n.checkbox.checkbox-inline {\n    margin-top: 0; \n}\n\n.animated {\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s; /* Default Duration */\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n\n.fade-in-up {\n    opacity: 0;\n    -webkit-animation-name: fadeInUp;\n            animation-name: fadeInUp;\n}\n\n.fade-in {\n    opacity: 0;  /* make things invisible upon start */\n    -webkit-animation: fadeIn ease-in 1;\n            animation: fadeIn ease-in 1;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-duration: .5s;\n            animation-duration: .5s;\n}\n\n.fade-in.btn {\n    -webkit-animation-delay: .5s;\n            animation-delay: .5s;\n}\n\n.fade-in.info-text {\n    -webkit-animation-delay: .4s;\n            animation-delay: .4s;\n}\n\n.fade-in.pie {\n    -webkit-animation-delay: .1s;\n            animation-delay: .1s;\n}\n\n/* Keyframes */\n\n@-webkit-keyframes progress { from {-webkit-transform: rotate(0);transform: rotate(0)} to {-webkit-transform: rotate(135deg);transform: rotate(135deg)} }\n\n@keyframes progress { from {-webkit-transform: rotate(0);transform: rotate(0)} to {-webkit-transform: rotate(135deg);transform: rotate(135deg)} }\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@-webkit-keyframes fadeInUp { from { -webkit-transform: translate3d(0, 40px, 0); transform: translate3d(0, 40px, 0) } to {-webkit-transform: translate3d(0,0,0);transform: translate3d(0,0,0);opacity: 1;} }\n\n@keyframes fadeInUp { from { -webkit-transform: translate3d(0, 40px, 0); transform: translate3d(0, 40px, 0) } to {-webkit-transform: translate3d(0,0,0);transform: translate3d(0,0,0);opacity: 1;} }\n\n.mf-calc {\n    padding: 50px 20px;\n}\n\n.mf-solutions-list {\n    position: relative;\n}\n\n.box {\n    border-radius: 6px;\n    border-style: solid;\n    border-width: 1px;\n    border-color: #00CFFB;\n    margin: 15px 0;\n    background-color: white;\n    overflow: hidden;\n}\n\n.mf-title {\n    font-weight: bold;\n    font-size: 20px;\n    border-bottom: 1px solid #293138;\n    padding: 20px 0 9px;\n    margin: 0 15px 11px;\n}\n\n.mf-subtitle {\n    font-size: 14px;\n}\n\n.mf-solution-desc {\n    font-size: 14px;\n    padding: 15px 30px 0 30px;\n}\n\n.mf-solution-cta {\n    position: relative;\n    background: #881FD3;\n    padding: 15px 30px;\n    margin-top: 15px;\n}\n\n.mf-savings {\n    text-align: center;\n    color: white;\n    padding: 7px 0;\n    font-size: 20px;\n}\n\n.mf-change-btn {\n    float: right;\n}\n\n@media (min-width: 750px) {\n    .mf-savings {\n        float: right;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calculator/calculator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mf-calc container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h2 class=\"animated fade-in-up heading\">Explore what Micro Focus can do for you</h2>\n      <p class=\"animated fade-in info-text mf-subtitle\">Please review our solutions below</p>\n    </div>\n    <div class=\"mf-solutions-list col-12\">\n      <div class=\"box row animated fade-in\" style=\"animation-delay: .2s;\" *ngFor=\"let cat of categories\">\n        <div class=\"col-12\">\n          <div class=\"mf-title\">\n            {{ cat.name }}\n          </div>\n        </div>\n\n        <div class=\"mf-solution-desc col-md-4\">\n            {{ cat.description }}\n        </div>\n\n        <div class=\"mf-charts col-md-8\">\n          <app-charts [data]=\"cat.savings.yearRoi\"></app-charts>\n        </div>\n\n        <div class=\"mf-solution-cta col-12\">\n            <a class=\"btn btn-light\" href=\"#\">Learn More</a> <div class=\"mf-savings\">Save {{ cat.savings.savings | currency: dollar }} / year</div>\n        </div>\n      </div>\n      <a class=\"btn btn-primary mf-change-btn\" routerLink=\"/begin\" routerLinkActive=\"active\">Change Information</a>\n    </div>\n  </div>\n</div>"

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
                savings: {},
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie libero elit, quis placerat erat vehicula sed. Sed vitae orci efficitur, dignissim diam sit amet, tempor velit. Nam imperdiet, turpis in dictum maximus, nisl diam dapibus nibh, sit amet lacinia eros ante ut orci."
            },
            {
                id: 'ac_mgmt',
                name: "Access Management",
                savings: {},
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie libero elit, quis placerat erat vehicula sed. Sed vitae orci efficitur, dignissim diam sit amet, tempor velit. Nam imperdiet, turpis in dictum maximus, nisl diam dapibus nibh, sit amet lacinia eros ante ut orci."
            },
            {
                id: 'prv_mgmt',
                name: "Privilege Management",
                savings: {},
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

/***/ "../../../../../src/app/charts/charts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* CSS is taken by node_modules/chart.js/src/chart.js. Any overrides will go here. */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/charts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div style=\"display: block;\">\n    <canvas baseChart width=\"400\" height=\"100\"\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [legend]=\"lineChartLegend\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n  </div>\n\n<!-- Below is here in case we decide we want to add the table-info to the right (will need to adjust col-md-12 to 8 above). -->\n\n<!--   <div class=\"col-md-4\" style=\"margin-bottom: 10px\">\n    <table class=\"table table-responsive table-condensed\">\n      <tr>\n        <th *ngFor=\"let label of lineChartLabels\">{{label}}</th>\n      </tr>\n      <tr *ngFor=\"let d of lineChartData\">\n        <td *ngFor=\"let label of lineChartLabels; let j=index\">{{d && d.data[j]}}</td>\n      </tr>\n    </table>\n  </div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/charts/charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
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

// import { MfClientDataService } from '../mf-client-data.service';
var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
        this.lineChartLabels = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];
        this.lineChartOptions = {
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 500000,
                            // Return an empty string to draw the tick line but hide the tick label
                            // Return `null` or `undefined` to hide the tick line entirely
                            userCallback: function (value, index, values) {
                                // Convert the number to a string and splite the string every 3 charaters from the end
                                value = value.toString();
                                value = value.split(/(?=(?:...)*$)/);
                                // Convert the array to a string and format the output
                                value = value.join(',');
                                return '$' + value;
                            }
                        }
                    }]
            }
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    ChartsComponent.prototype.ngOnInit = function () {
        this.lineChartData = [
            { data: this.data, label: 'ROI With Micro Focus' },
        ];
    };
    // events
    ChartsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ChartsComponent.prototype, "data", void 0);
    ChartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__("../../../../../src/app/charts/charts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/charts/charts.component.css")]
        })
    ], ChartsComponent);
    return ChartsComponent;
}());



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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, ".mf-tooltip {\n    margin-top: 96px;\n    border-radius: 4px;\n    -webkit-box-shadow: 0 3px 10px rgba(0,0,0,.16);\n            box-shadow: 0 3px 10px rgba(0,0,0,.16);\n    width: 100%;\n    overflow: hidden;\n    -webkit-transition: margin-top 1s;\n    transition: margin-top 1s;\n}\n\n.mf-tooltip img{\n    display: block;\n    width: 100%;\n    height: 150px;\n    background-color: #00CFFB;\n}\n\n.mf-tooltip .mf-desc {\n    background: white;\n    padding: 20px;\n}\n\n.mf-tooltip .mf-tooltop-caret {\n    height: 0;\n}\n\n.mf-tooltip .mf-tooltop-caret:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 0;\n    height: 0;\n    border: 25px transparent solid;\n    border-right-color: #00CFFB;\n    border-left-width: 0;\n    margin-left: 0;\n    margin-top: 20px;\n    -webkit-transition: margin-left .5s;\n    transition: margin-left .5s;\n    -webkit-transition-delay: .5s;\n            transition-delay: .5s;\n    z-index: -1;\n}\n\n.mf-tooltip .mf-tooltop-caret.active:before {\n    margin-left: -25px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/helper-box/helper-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'margin-top.px':_data.caretOffset}\" class=\"mf-tooltip\">\n  <div [class.active]=\"_data.showCaret\" class=\"mf-tooltop-caret\"></div>\n  <img [attr.src]=\"_data.imageUrl\" alt=\"\">\n  <div class=\"mf-desc\">\n    <h4>{{ _data.title }}</h4>\n    <p>{{ _data.description }}</p>\n    <a [attr.href]=\"_data.learnMoreUrl\" target=\"_blank\" class=\"mf-learn-more\">Learn More</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/helper-box/helper-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_data_service__ = __webpack_require__("../../../../../src/app/tooltip-data.service.ts");
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
    function HelperBoxComponent(_data) {
        this._data = _data;
    }
    HelperBoxComponent.prototype.ngOnInit = function () {
    };
    HelperBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-helper-box',
            template: __webpack_require__("../../../../../src/app/helper-box/helper-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/helper-box/helper-box.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tooltip_data_service__["a" /* TooltipDataService */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        var idenGov = {
            "savings": 0,
            "yearRoi": [0, 0, 0, 0, 0]
        };
        var accMgmt = {
            "savings": 0,
            "roiY1": 0,
            "yearRoi": [0, 0, 0, 0, 0]
        };
        var privMgmt = {
            "savings": 0,
            "yearRoi": [0, 0, 0, 0, 0]
        };
        //Remap form input variables
        var SFT_Count = this.numStaff;
        var SFT_Wage = this.avgWage;
        var SFT_AM_apps = this.numApps;
        var LCL_ITOps_wage = this.avgItWage;
        var STF_Churn = this.anTurnover;
        var SFT_IDM_apps = this.numApps;
        /* Static Constants */
        var SFT_AM_apps_used = 8;
        var LCL_SSO_avoidance_time = 10;
        var LCL_working_days = 220;
        var LCL_AB_app_cust_time = 115;
        var LCL_AB_savings_rate = .5;
        var LCL_IB_maintenance_rate = .2;
        var LCL_helpdesk_PR_cost = 25;
        var SFT_Entitlement_count = 15;
        var INF_Fulfilment_average_saving = 42;
        var SFT_password_forgets = 5;
        var SFT_SSPR_Rate = .5;
        var SFT_Projects_proportion = .2;
        var SFT_Projects_entitlements = 8;
        var SFT_workflows = 2;
        var INF_WF_average_saving = 57.50;
        var SFT_entitlement_approval_rate = .3;
        var LCL_approver_time = 10;
        var LCL_approver_reduction_rate = .5;
        var LCL_approver_wage = 70;
        var LCL_IB_connections_avg = 2;
        var LCL_IB_app_cust_time = 115;
        var LCL_IB_savings_rate = .5;
        var LFR_IDM_base = 1140;
        var MFR_rate = .25;
        var LFR_IDM_user = 46;
        var LCL_CR_rate = 2000;
        var LCL_CR_IDM_setup = 8;
        var LCL_CR_IDM_Conn_simple = 5;
        var INF_idm_connectors_simple = 4;
        var LCL_CR_IDM_Conn_medium = 10;
        var INF_idm_connectors_medium = 6;
        var LCL_CR_IDM_Conn_complex = 20;
        var INF_idm_connectors_complex = 10;
        var LCL_CR_IDM_WF_simple = 5;
        var INF_WF_simple = 3;
        var LCL_CR_IDM_WF_medium = 10;
        var INF_WF_medium = 4;
        var LCL_CR_IDM_WF_complex = 20;
        var INF_WF_complex = 3;
        var LCL_CR_requirements_OH = .3;
        var LCL_CR_post_OH = .25;
        var LFR_AM_user = 18;
        var LCL_CR_AM_setup = 1;
        var LCL_CR_AM_integration = 1;
        //Savings Computations
        var S_SSO = (SFT_AM_apps_used - 1) * (LCL_SSO_avoidance_time / 3600 * SFT_Wage * LCL_working_days) * SFT_Count;
        var ACCESS_BUS_DEVTEST = (SFT_AM_apps * LCL_AB_app_cust_time * LCL_ITOps_wage) * LCL_AB_savings_rate;
        var ACCESS_BUS_MAINTSAV = ACCESS_BUS_DEVTEST * LCL_IB_maintenance_rate;
        var ID_REGIST = SFT_Count * STF_Churn * (LCL_helpdesk_PR_cost);
        var BIRTHRIGHT_ENT = SFT_Count * STF_Churn * (SFT_Entitlement_count * INF_Fulfilment_average_saving);
        var PASS_RESET = SFT_Count * LCL_helpdesk_PR_cost * SFT_password_forgets * SFT_SSPR_Rate;
        var ENT_CHANGES = SFT_Count * SFT_Projects_proportion * SFT_Projects_entitlements * INF_Fulfilment_average_saving;
        var WORKFLOWS = SFT_Count * SFT_workflows * INF_WF_average_saving;
        var DECISION_SPT = SFT_Count * (STF_Churn * SFT_Entitlement_count + SFT_Projects_proportion * SFT_Projects_entitlements) * SFT_entitlement_approval_rate * (LCL_approver_time / 60) * LCL_approver_reduction_rate * LCL_approver_wage;
        var ID_SEP = ID_REGIST + BIRTHRIGHT_ENT;
        var ID_BUS_DEVTEST = ((SFT_IDM_apps * LCL_IB_app_cust_time * LCL_ITOps_wage) + ((SFT_IDM_apps - 1) * (LCL_IB_connections_avg * LCL_IB_app_cust_time * LCL_ITOps_wage * 0.5))) * LCL_IB_savings_rate;
        var ID_BUS_MAINTSAV = ID_BUS_DEVTEST * LCL_IB_maintenance_rate;
        //Year ROI Computations
        var ID_MGMT_COST_LFR = LFR_IDM_base + SFT_Count * LFR_IDM_user;
        var ID_MGMT_COST_MFR = ID_MGMT_COST_LFR * MFR_rate;
        var ID_MGMT_COST_CFR = LCL_CR_rate * (LCL_CR_IDM_setup + LCL_CR_IDM_Conn_simple * INF_idm_connectors_simple + LCL_CR_IDM_Conn_medium * INF_idm_connectors_medium + LCL_CR_IDM_Conn_complex * INF_idm_connectors_complex + LCL_CR_IDM_WF_simple * INF_WF_simple + LCL_CR_IDM_WF_medium * INF_WF_medium + LCL_CR_IDM_WF_complex * INF_WF_complex) * (1 + LCL_CR_requirements_OH + LCL_CR_post_OH);
        var ACC_MGMT_COST_LFR = LFR_AM_user * SFT_Count;
        var ACC_MGMT_COST_MFR = ACC_MGMT_COST_LFR * MFR_rate;
        var ACC_MGMT_COST_CFR = LCL_CR_rate * (LCL_CR_AM_setup + LCL_CR_AM_integration * SFT_AM_apps) * (1 + LCL_CR_requirements_OH + LCL_CR_post_OH);
        console.log("S_SSO-" + S_SSO);
        console.log("ACCESS_BUS_DEVTEST-" + ACCESS_BUS_DEVTEST);
        console.log("ACCESS_BUS_MAINTSAV-" + ACCESS_BUS_MAINTSAV);
        console.log("ID_REGIST-" + ID_REGIST);
        console.log("BIRTHRIGHT_ENT-" + BIRTHRIGHT_ENT);
        console.log("PASS_RESET-" + PASS_RESET);
        console.log("ENT_CHANGES-" + ENT_CHANGES);
        console.log("WORKFLOWS-" + WORKFLOWS);
        console.log("DECISION_SPT-" + DECISION_SPT);
        console.log("ID_SEP-" + ID_SEP);
        console.log("ID_BUS_DEVTEST-" + ID_BUS_DEVTEST);
        console.log("ID_BUS_MAINTSAV-" + ID_BUS_MAINTSAV);
        //Savings
        idenGov.savings = ID_REGIST + BIRTHRIGHT_ENT + PASS_RESET + ENT_CHANGES + WORKFLOWS + DECISION_SPT + ID_SEP + ID_BUS_DEVTEST + ID_BUS_MAINTSAV;
        accMgmt.savings = S_SSO + ACCESS_BUS_DEVTEST + ACCESS_BUS_MAINTSAV;
        privMgmt.savings = 0; //FINISH ME
        //IDMGMT ROI
        var year1 = idenGov.savings - (ID_MGMT_COST_LFR + ID_MGMT_COST_MFR + ID_MGMT_COST_CFR);
        var year2 = year1 + idenGov.savings - (0 + ID_MGMT_COST_MFR + 0);
        var year3 = year2 + idenGov.savings - (0 + ID_MGMT_COST_MFR + 0);
        var year4 = year3 + idenGov.savings - (0 + ID_MGMT_COST_MFR + 0);
        var year5 = year4 + idenGov.savings - (0 + ID_MGMT_COST_MFR + 0);
        idenGov.yearRoi = [year1, year2, year3, year4, year5];
        //IDMGMT ROI
        year1 = accMgmt.savings - (ACC_MGMT_COST_LFR + ACC_MGMT_COST_MFR + ACC_MGMT_COST_CFR);
        year2 = year1 + accMgmt.savings - (0 + ACC_MGMT_COST_MFR + 0);
        year3 = year2 + accMgmt.savings - (0 + ACC_MGMT_COST_MFR + 0);
        year4 = year3 + accMgmt.savings - (0 + ACC_MGMT_COST_MFR + 0);
        year5 = year4 + accMgmt.savings - (0 + ACC_MGMT_COST_MFR + 0);
        accMgmt.yearRoi = [year1, year2, year3, year4, year5];
        return [idenGov, accMgmt, privMgmt];
    };
    MfClientDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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

module.exports = "<div class=\"mf-questn container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h2 class=\"animated fade-in-up mf-title\">Tell us a little about your organization</h2>\n      <div class=\"mf-questn-form\">\n\n        <div class=\"mf-input-row animated fade-in-up\" style=\"animation-delay: .2s;\">\n          <label for=\"num_staff\">Number of Staff</label>\n          <input [(ngModel)]=\"mfNumStaff\" (focus)=\"focused($event, 1)\" id=\"num_staff\" name=\"num_staff\" type=\"text\" placeholder=\"0\">\n        </div>\n        <div class=\"mf-input-row percentage animated fade-in-up\" style=\"animation-delay: .3s;\">\n          <label for=\"annual_turnover\">Annual Turnover (%)</label>\n          <input [(ngModel)]=\"mfAnTurnover\" (focus)=\"focused($event, 10)\" id=\"annual_turnover\" name=\"annual_turnover\" type=\"text\" placeholder=\"0.0\">\n        </div>\n        <div class=\"mf-input-row dollar animated fade-in-up\" style=\"animation-delay: .4s;\">\n          <label for=\"avg_wage\">Average Hourly Wage</label>\n          <input [(ngModel)]=\"mfAvgWage\" (focus)=\"focused($event, 100)\" id=\"avg_wage\" name=\"avg_wage\" type=\"text\" placeholder=\"0.00\">\n        </div>\n        <div class=\"mf-input-row dollar animated fade-in-up\" style=\"animation-delay: .5s;\">\n          <label for=\"avg_it\">Average IT Hourly Wage</label>\n          <input [(ngModel)]=\"mfAvgItWage\" (focus)=\"focused($event, 150)\" id=\"avg_it\" name=\"avg_it\" type=\"text\" placeholder=\"0.00\">\n        </div>\n        <div class=\"mf-input-row animated fade-in-up\" style=\"animation-delay: .6s;\">\n          <label for=\"num_app\">Number of Applications</label>\n          <input [(ngModel)]=\"mfNumApps\" (focus)=\"focused($event, 200)\" id=\"num_app\" name=\"num_app\" type=\"text\" placeholder=\"0\">\n        </div>\n        <a class=\"btn btn-primary mf-cont-btn\" routerLink=\"/savings\">continue</a>\n\n      </div>\n    </div>\n    <div class=\"col-md-5 offset-md-1 d-none d-md-block animated fade-in\" style=\"animation-delay:.5s;\">\n      <app-helper-box></app-helper-box>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/questionnaire/questionnaire.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mf_client_data_service__ = __webpack_require__("../../../../../src/app/mf-client-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_data_service__ = __webpack_require__("../../../../../src/app/tooltip-data.service.ts");
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
    function QuestionnaireComponent(_data, _toolTip) {
        this._data = _data;
        this._toolTip = _toolTip;
        this.tooltipData = {
            'num_staff': {
                "title": "Number of Full Time Staff",
                "description": "Consectetur adipiscing elit. Nulla ut ultricies diam. Pellentesque malesuada eget neque quis vestibulum. Integer faucibus ipsum nibh, ut lobortis mauris sagittis a. Maecenas eu sapien in erat dapibus semper sit amet vel risus.",
                "learnmore": new URL(window.location.href),
                "image": new URL("http://via.placeholder.com/350x151")
            },
            'annual_turnover': {
                "title": "Average Annual Employee Turnover",
                "description": "Nulla ut ultricies diam. Pellentesque malesuada eget neque quis vestibulum. Integer faucibus ipsum nibh, ut lobortis mauris sagittis a. Maecenas eu sapien in erat dapibus semper sit amet vel risus.",
                "learnmore": new URL(window.location.href),
                "image": new URL("http://via.placeholder.com/350x152")
            },
            'avg_wage': {
                "title": "Average Wage of Full Time Staff",
                "description": "Pellentesque malesuada eget neque quis vestibulum. Consectetur adipiscing elit. Nulla ut ultricies diam.  Integer faucibus ipsum nibh, ut lobortis mauris sagittis a. Maecenas eu sapien in erat dapibus semper sit amet vel risus.",
                "learnmore": new URL(window.location.href),
                "image": new URL("http://via.placeholder.com/350x153")
            },
            'avg_it': {
                "title": "Average Wage of IT Staff",
                "description": "Integer faucibus ipsum nibh pellentesque malesuada eget neque quis vestibulum. Pellentesque malesuada eget neque quis vestibulum. Consectetur adipiscing elit. Nulla ut ultricies diam.  Integer faucibus ipsum nibh, ut lobortis mauris sagittis a. Maecenas eu sapien in erat dapibus semper sit amet vel risus.",
                "learnmore": new URL(window.location.href),
                "image": new URL("http://via.placeholder.com/350x154")
            },
            'num_app': {
                "title": "Number of Applications",
                "description": "Maecenas eu sapien in erat dapibus semper sit amet vel risus. Consectetur adipiscing elit. Nulla ut ultricies diam. Pellentesque malesuada eget neque quis vestibulum. Integer faucibus ipsum nibh, ut lobortis mauris sagittis a. ",
                "learnmore": new URL(window.location.href),
                "image": new URL("http://via.placeholder.com/350x155")
            }
        };
    }
    Object.defineProperty(QuestionnaireComponent.prototype, "mfNumStaff", {
        get: function () { return this._data.numStaff; },
        set: function (value) { this._data.numStaff = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionnaireComponent.prototype, "mfAnTurnover", {
        get: function () { return (this._data.anTurnover) ? this._data.anTurnover * 100 : null; },
        set: function (value) { this._data.anTurnover = value / 100; },
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
        this._toolTip.title = "The Micro Focus Advantage";
        this._toolTip.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ultricies diam. Pellentesque malesuada eget neque quis vestibulum. Integer faucibus ipsum nibh, ut lobortis mauris sagittis a. Maecenas eu sapien in erat dapibus semper sit amet vel risus.";
        this._toolTip.showCaret = false;
        this._toolTip.caretOffset = 90;
        this._toolTip.learnMoreUrl = new URL(window.location.href);
        this._toolTip.imageUrl = new URL("http://via.placeholder.com/350x150");
    };
    QuestionnaireComponent.prototype.focused = function (event) {
        var offset = event.target.offsetTop + event.target.offsetParent.offsetTop - 20;
        var currentElementData = this.tooltipData[event.target.id];
        this._toolTip.caretOffset = offset;
        this._toolTip.showCaret = true;
        this._toolTip.title = currentElementData.title;
        this._toolTip.description = currentElementData.description;
        this._toolTip.learnMoreUrl = currentElementData.learnmore;
        this._toolTip.imageUrl = currentElementData.image;
    };
    QuestionnaireComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-questionnaire',
            template: __webpack_require__("../../../../../src/app/questionnaire/questionnaire.component.html"),
            styles: [__webpack_require__("../../../../../src/app/questionnaire/questionnaire.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mf_client_data_service__["a" /* MfClientDataService */], __WEBPACK_IMPORTED_MODULE_2__tooltip_data_service__["a" /* TooltipDataService */]])
    ], QuestionnaireComponent);
    return QuestionnaireComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tooltip-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDataService; });
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

var TooltipDataService = /** @class */ (function () {
    function TooltipDataService() {
    }
    TooltipDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TooltipDataService);
    return TooltipDataService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map