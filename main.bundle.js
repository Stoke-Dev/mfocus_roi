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
exports.push([module.i, "/* These can be imported into any CSS file where global elements need to be overwritten. I'll be putting Mirco Focus specific styling in here */\n\n.btn-light {\n    color: #355ED4;\n    border-color: blue;\n    background-color: white;\n    border-width: thin;\n  }\n\n.btn-light:hover, .btn-light:focus, .btn-light:active {\n    background-color: #355ED4;\n    color: white;\n  }\n\n.btn-primary {\n    background-color: #355ED4; \n}\n\n.btn-primary:hover, btn-primary:focus, btn-primary:active {\n    color: #355ED4;\n    background-color: white;\n}\n\n.btn {\n    border-radius: 20px;\n}\n\n.footer {\n    position: relative;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    padding: 3rem;\n    background-color: #192122;\n    text-align: center;\n    color: white;\n  }\n\ninput {\n  border-radius: 20px;\n}\n\n/* a:hover{\n  color: white;\n} */\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-faded\">\n\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <a class=\"navbar-brand\" href=\"#\" >\n    <img src=\"/assets/MicroFocusLogo.png\" height=\"30\" width=\"auto\" class=\"d-inline-block align-top\" alt=\"\">\n  </a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n      <li class=\"nav-item active\">\n        <button class=\"btn btn-light my-2 my-sm-0\" routerLink=\"/about\" routerLinkActive=\"active\">Our Solutions <span class=\"sr-only\">(current)</span></button>\n      </li>\n\n      <li class=\"nav-item active\">\n          <button class=\"btn btn-light my-2 my-sm-0\" style=\"margin-left: 7px;\" routerLink=\"/calculator\" routerLinkActive=\"active\">Let's Begin <span class=\"sr-only\">(current)</span></button>\n      </li>\n    </ul>\n\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button type=\"submit\" class=\"btn btn-light my-2 my-sm-0\" >Search</button>\n    </form>\n\n  </div>\n</nav>\n\n\n<router-outlet></router-outlet> <!-- All routes are loaded in here -->\n\n<div class=\"footer\">Footer in progress</div>"

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], data: { title: 'Heroes List' } },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
    { path: 'calculator', component: __WEBPACK_IMPORTED_MODULE_6__calculator_calculator_component__["a" /* CalculatorComponent */] }
    /*   { path: 'crisis-center', component: CrisisListComponent },
      { path: 'hero/:id',      component: HeroDetailComponent },
      ,
        { path: '**', component: PageNotFoundComponent } */
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
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calculator/calculator.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  calculator page here\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/calculator/calculator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorComponent; });
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

var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
    }
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    CalculatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calculator',
            template: __webpack_require__("../../../../../src/app/calculator/calculator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calculator/calculator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* These can be imported into any CSS file where global elements need to be overwritten. I'll be putting Mirco Focus specific styling in here */\n\n.btn-light {\n    color: #355ED4;\n    border-color: blue;\n    background-color: white;\n    border-width: thin;\n  }\n\n.btn-light:hover, .btn-light:focus, .btn-light:active {\n    background-color: #355ED4;\n    color: white;\n  }\n\n.btn-primary {\n    background-color: #355ED4; \n}\n\n.btn-primary:hover, btn-primary:focus, btn-primary:active {\n    color: #355ED4;\n    background-color: white;\n}\n\n.btn {\n    border-radius: 20px;\n}\n\n.home-objects {\n\n}\n\n.home-left {\n  height: calc(100vh - 56px);\n}\n\n.home-right {\ntext-align: left;\nheight: calc(100vh - 56px);\n}\n\n.main-stuff {\npadding-top: 32vh;\nmax-width: 440px;\n}\n\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n}\n\n.animatedFadeInUp {\n  opacity: 0\n}\n\n.fadeInUp {\n  opacity: 0;\n  animation-name: fadeInUp;\n  -webkit-animation-name: fadeInUp;\n}\n\n.fade-in {\n  opacity:0;  /* make things invisible upon start */\n  -webkit-animation: fadeIn ease-in 1;\n          animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode:forwards;\n          animation-fill-mode:forwards;\n  -webkit-animation-duration: .5s;\n          animation-duration: .5s;\n\n}\n\n.fade-in.btn-primary {\n  -webkit-animation-delay: .6s;\n          animation-delay: .6s;\n}\n\n.fade-in.btn-light {\n  -webkit-animation-delay: .5s;\n          animation-delay: .5s;\n}\n\n.fade-in.info-text {\n  -webkit-animation-delay: .4s;\n          animation-delay: .4s;\n}\n\n.fadeInUp.heading {\n\n}\n\n.fade-in.pie {\n  -webkit-animation-delay: .1s;\n          animation-delay: .1s;\n}\n\n/* Pie animation here */\n\n.pie {\n position: absolute;\n left: calc(-150px - 8px); /* adding a margin distance */\n padding-top: calc(32vh + 26px);\n}\n\n.back {\n    width: 150px;\n    height: 150px;\n    position: relative;\n    border-radius: 150px;\n    background-color: #B9DCFC;\n  }\n\n.mask {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 150px;\n    height: 150px;\n    border-radius: 150px;\n    clip: rect(0px, 150px, 150px, 75px);\n  }\n\n.part {\n    background-color: #3D90F9;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 150px;\n    height: 150px;\n    border-radius: 150px;\n    clip: rect(0px, 75px, 150px, 0px);\n  }\n\n.anim {\n    -webkit-animation: progress 2.5s;\n            animation: progress 2.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n  }\n\n@-webkit-keyframes progress\n  {\n  from {-webkit-transform: rotate(0);transform: rotate(0)}\n  to {-webkit-transform: rotate(135deg);transform: rotate(135deg)}\n  }\n\n@keyframes progress\n  {\n  from {-webkit-transform: rotate(0);transform: rotate(0)}\n  to {-webkit-transform: rotate(135deg);transform: rotate(135deg)}\n  }\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@-webkit-keyframes fadeInUp {\n    from {\n        -webkit-transform: translate3d(0,40px,0);\n                transform: translate3d(0,40px,0)\n    }\n\n    to {\n        -webkit-transform: translate3d(0,0,0);\n                transform: translate3d(0,0,0);\n        opacity: 1\n    }\n}\n\n@keyframes fadeInUp {\n    from {\n        -webkit-transform: translate3d(0,40px,0);\n                transform: translate3d(0,40px,0)\n    }\n\n    to {\n        -webkit-transform: translate3d(0,0,0);\n                transform: translate3d(0,0,0);\n        opacity: 1\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<div class=\"row home-objects\">\n  <div class=\"col-5 home-left\" >\n\n  </div>\n    <div class=\"col home-right\"> \n\n        <div class=\"pie fade-in\">\n            <div class=\"back\">\n                <div class=\"mask\">\n                <div class=\"part anim\">\n                </div>\n              </div>\n              <div class=hole>\n                </div>\n            </div>\n          </div>\n\n      <div class=\"main-stuff\">\n        <h1 class=\"animated animatedFadeInUp fadeInUp heading\">Calculate your ROI from choosing Micro Focus</h1>\n        <p class=\"info-text fade-in\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n          incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n          exercitation ullamco.</p>\n        <nav>\n          <a class=\"btn btn-light fade-in\" routerLink=\"/about\" routerLinkActive=\"active\">Our Solutions</a>\n          <a class=\"btn btn-primary fade-in\" routerLink=\"/calculator\" routerLinkActive=\"active\">Let's Begin</a>\n        </nav>\n      </div>\n    </div>\n\n</div>\n</html>"

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