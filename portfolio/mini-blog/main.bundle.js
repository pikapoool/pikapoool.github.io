webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/admin/admin.module": [
		"../../../../../src/app/modules/admin/admin.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_admin_guards_auth_admin_guard__ = __webpack_require__("../../../../../src/app/modules/admin/guards/auth-admin.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var msRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components__["c" /* HomeComponent */] },
    { path: 'posts', component: __WEBPACK_IMPORTED_MODULE_2__components__["h" /* PostsComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components__["i" /* PostsListComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_2__components__["g" /* PostComponent */] },
        ]
    },
    { path: 'registration', data: { registration: true }, component: __WEBPACK_IMPORTED_MODULE_2__components__["a" /* AuthorizationComponent */] },
    { path: 'login', data: { registration: false }, component: __WEBPACK_IMPORTED_MODULE_2__components__["a" /* AuthorizationComponent */] },
    {
        path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__modules_admin_guards_auth_admin_guard__["a" /* AuthAdminGuard */]]
    },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_2__components__["e" /* NotFoundComponent */] },
    { path: '**', redirectTo: '/404' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(msRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    __WEBPACK_IMPORTED_MODULE_2__components__["c" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_2__components__["e" /* NotFoundComponent */],
    __WEBPACK_IMPORTED_MODULE_2__components__["a" /* AuthorizationComponent */]
];


/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: auto;\n  padding: 40px 20px;\n  width: 1140px; }\n  @media screen and (max-width: 1200px) {\n    .container {\n      width: 950px; } }\n  @media screen and (max-width: 992px) {\n    .container {\n      width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.template.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fb_config__ = __webpack_require__("../../../../../src/app/fb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_admin__ = __webpack_require__("../../../../../src/app/modules/admin/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_admin_guards_auth_admin_guard__ = __webpack_require__("../../../../../src/app/modules/admin/guards/auth-admin.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            entryComponents: [__WEBPACK_IMPORTED_MODULE_12__components__["f" /* PopupComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["b" /* routingComponents */],
                __WEBPACK_IMPORTED_MODULE_12__components__["b" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components__["d" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components__["j" /* UserStateComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components__["f" /* PopupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__fb_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_15__modules_admin__["a" /* AdminModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__shared_services__["b" /* FirebaseService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_services__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_16__modules_admin_guards_auth_admin_guard__["a" /* AuthAdminGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.template.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/authorization/authorization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\" *ngIf=\"registration;else loginContent\">\r\n  <form (ngSubmit)=\"save()\" [formGroup]=\"regFormGroup\" class=\"form\" novalidate> \r\n    <div class=\"form-title\">Create an account</div>\r\n    <div class=\"form-inner\">\r\n      <div class=\"form-radio-group\">\r\n        <label>Social title: </label>\r\n        <mat-radio-group formControlName=\"radioGroup\">\r\n          <mat-radio-button value=\"mr\">Mr.</mat-radio-button>\r\n          <mat-radio-button value=\"mrs\">Mrs.</mat-radio-button>\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class =\"form-fields\" *ngFor=\"let field of regFormFields; let i = index;\">\r\n        <mat-form-field>\r\n          <input *ngIf=\"field.name !== 'password'\" matInput placeholder=\"{{field.placeholder}}\" formControlName=\"{{field.name}}\" required>\r\n          <input *ngIf=\"field.name === 'password'\" matInput placeholder=\"{{field.placeholder}}\" formControlName=\"{{field.name}}\" [type]=\"hidePass ? field.name : 'text'\" required>\r\n          <mat-icon *ngIf=\"field.name === 'password'\" matSuffix (click)=\"hidePass = !hidePass\">{{hidePass ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n          <mat-error>{{getErrorMessage(field.name)}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-avatar\">\r\n        <button mat-raised-button type=\"button\" (click)=\"uploadImage()\">Add a photo</button>\r\n        <input hidden type=\"file\" #imgFileInput formControlName=\"avatar\" (change)=\"previewImage($event)\"/>\r\n        <div class=\"form-avatar__preview\">\r\n          <img alt='' class=\"form-avatar__img\" #imgFilePreview src=\"data:image/png;base64,null\" />\r\n        </div>\r\n        <mat-error>{{getErrorMessage('avatar')}}</mat-error>\r\n      </div>\r\n      <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\r\n    </div>\r\n    <div class=\"form-bottom\">\r\n      <span>Already have an account? <a routerLink=\"/login\">Log in instead!</a></span>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<ng-template #loginContent>\r\n  <div class=\"form-container\">\r\n    <form (ngSubmit)=\"login()\" [formGroup]=\"loginFormGroup\" class=\"form\" novalidate>       \r\n      <div class=\"form-title\">Log in to your account</div>\r\n      <div class=\"form-inner\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Enter your email\" formControlName=\"email\" required>\r\n          <mat-error>{{getErrorMessage('emailLogin')}}</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Enter your password\" formControlName=\"password\" [type]=\"hidePass ? 'password' : 'text'\" required>\r\n          <mat-icon matSuffix (click)=\"hidePass = !hidePass\">{{hidePass ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n          <mat-error>{{getErrorMessage('passwordLogin')}}</mat-error>\r\n        </mat-form-field> \r\n        <button mat-raised-button color=\"primary\" type=\"submit\">Log in</button>\r\n      </div>\r\n      <div class=\"form-bottom\">\r\n        <a routerLink=\"/registration\">No account? Create one here</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/authorization/authorization.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-container {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 50px auto 0;\n  box-shadow: 2px 2px 11px 0 rgba(0, 0, 0, 0.3);\n  width: 500px; }\n\n.form-title {\n  background: rgba(0, 0, 0, 0.1);\n  padding: 20px 20px 15px;\n  font-family: 'AndrewScript16';\n  font-size: 20px; }\n\n.form-inner {\n  padding: 20px; }\n  .form-inner > * {\n    width: 100%; }\n\n.form-fields > * {\n  width: 100%; }\n\n.form-avatar {\n  padding: 10px 0 20px; }\n  .form-avatar__preview {\n    display: inline-block;\n    margin: 0 0 0 20px;\n    border-radius: 50%;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDI1RDU0ODQ0NkM1MTFFN0E4QzY5QTQyMjM3RjgxRTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDI1RDU0ODU0NkM1MTFFN0E4QzY5QTQyMjM3RjgxRTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMjVENTQ4MjQ2QzUxMUU3QThDNjlBNDIyMzdGODFFMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMjVENTQ4MzQ2QzUxMUU3QThDNjlBNDIyMzdGODFFMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg7qevAAAAXnSURBVHja3FtLiFtV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\");\n    background-size: cover;\n    width: 100px;\n    height: 100px;\n    overflow: hidden;\n    vertical-align: middle; }\n  .form-avatar__img {\n    display: block;\n    width: 100%; }\n\n.form-bottom {\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 20px;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/authorization/authorization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthorizationComponent = (function () {
    function AuthorizationComponent(activatedRoute, firebaseService, authService, router) {
        this.activatedRoute = activatedRoute;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.router = router;
        this.registration = false;
        this.hidePass = true;
        this.loginFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('test@gmail.com', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('qqqqqq78', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_3__shared_constants_constants__["a" /* patterns */].patternPassword)
            ]),
        });
        this.regFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            avatar: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null),
            radioGroup: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('mr'),
            nickname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_3__shared_constants_constants__["a" /* patterns */].patternNickname),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(2)
            ]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_3__shared_constants_constants__["a" /* patterns */].patternPassword)
            ]),
        });
        this.avatar = this.regFormGroup.get('avatar');
        this.avatarFile = '';
        this.nickname = this.regFormGroup.get('nickname');
        this.emailReg = this.regFormGroup.get('email');
        this.passwordReg = this.regFormGroup.get('password');
        this.emailLogin = this.loginFormGroup.get('email');
        this.passwordLogin = this.loginFormGroup.get('password');
    }
    AuthorizationComponent.prototype.ngOnInit = function () {
        if (this.activatedRoute.snapshot && this.activatedRoute.snapshot.data) {
            this.registration = this.activatedRoute.snapshot.data.registration;
        }
        this.regFormFields = __WEBPACK_IMPORTED_MODULE_3__shared_constants_constants__["b" /* regFormFields */];
    };
    AuthorizationComponent.prototype.getErrorMessage = function (fieldName) {
        switch (fieldName) {
            case 'avatar':
                return this.avatar.hasError('fileTypeError') ? 'Not valid image file type' :
                    this.avatar.hasError('fileSizeError') ? 'Avatar need to be max 200kb)' : '';
            case 'nickname':
                return this.nickname.hasError('required') ? 'You must enter a value' :
                    this.nickname.hasError('minlength') ? 'Minimun 2 characters' :
                        this.nickname.hasError('pattern') ? 'Not a valid nickname - consist forbidden characters' : '';
            case 'email':
                return this.emailReg.hasError('required') ? 'You must enter a value' :
                    this.emailReg.hasError('email') ? 'Not a valid email' : '';
            case 'password':
                return this.passwordReg.hasError('required') ? 'You must enter a value' :
                    this.passwordReg.hasError('pattern') ? 'Minimum 8 characters, at least one letter and one number' : '';
            case 'emailLogin':
                return this.emailLogin.hasError('required') ? 'You must enter a value' :
                    this.emailLogin.hasError('wronglogin') ? 'Wrong email or password' :
                        this.emailLogin.hasError('email') ? 'Not a valid email' : '';
            case 'passwordLogin':
                return this.passwordLogin.hasError('required') ? 'You must enter a value' :
                    this.passwordLogin.hasError('wronglogin') ? 'Wrong email or password' :
                        this.passwordLogin.hasError('pattern') ? 'Minimum 8 characters, at least one letter and one number' : '';
            default:
                return '';
        }
    };
    AuthorizationComponent.prototype.uploadImage = function () {
        this.elFileInput.nativeElement.click();
    };
    AuthorizationComponent.prototype.previewImage = function (e) {
        var _this = this;
        var reader = new FileReader();
        var file = e.target.files[0];
        if (file) {
            if (file.type.indexOf('image') < 0) {
                this.elFilePreview.nativeElement.src = '';
                this.avatar.setErrors({ 'fileTypeError': true });
                this.avatarFile = '';
            }
            else if (file.size > 200000) {
                this.avatar.setErrors({ 'fileSizeError': true });
                this.avatarFile = '';
            }
            else {
                this.avatar.setErrors(null);
                this.avatarFile = file;
                reader.onloadend = function () {
                    _this.elFilePreview.nativeElement.src = reader.result;
                };
                reader.readAsDataURL(file);
            }
        }
    };
    AuthorizationComponent.prototype.save = function () {
        if (this.isRegFieldsValid()) {
            this.account = {
                avatar: this.avatarFile,
                socialTitle: this.regFormGroup.get('radioGroup').value,
                nickname: this.nickname.value,
                email: this.emailReg.value,
                password: this.passwordReg.value,
                role: 'ROLE_ADMIN'
            };
            this.firebaseService.addAccount(this.account);
            this.router.navigate(['login']);
        }
    };
    AuthorizationComponent.prototype.isRegFieldsValid = function () {
        return this.nickname.valid &&
            this.emailReg.valid &&
            this.passwordReg.valid;
    };
    AuthorizationComponent.prototype.login = function () {
        if (this.isLoginFieldsVaild()) {
            this.authService.login({
                email: this.emailLogin.value,
                password: this.passwordLogin.value
            });
            if (this.authService.loginError()) {
                this.emailLogin.setErrors({ 'wronglogin': true });
                this.passwordLogin.setErrors({ 'wronglogin': true });
            }
            else {
                this.emailLogin.setErrors(null);
                this.passwordLogin.setErrors(null);
                this.router.navigate(['admin/posts']);
            }
        }
    };
    AuthorizationComponent.prototype.isLoginFieldsVaild = function () {
        return this.emailLogin.valid && this.passwordLogin.valid;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('imgFileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AuthorizationComponent.prototype, "elFileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('imgFilePreview'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AuthorizationComponent.prototype, "elFilePreview", void 0);
    AuthorizationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-authorization',
            template: __webpack_require__("../../../../../src/app/components/authorization/authorization.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/authorization/authorization.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services__["b" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthorizationComponent);
    return AuthorizationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
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

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.template.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.styles.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);\n  padding: 5px 20px;\n  height: 90px; }\n\n.logo {\n  float: left;\n  width: 20%; }\n  .logo-img {\n    display: block;\n    margin: 0 auto;\n    width: 150px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.template.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header clearfix\">\r\n  <div class=\"logo\">\r\n    <a class=\"logo-link\" routerLink=\"/\">\r\n      <img class=\"logo-img\" src=\"./assets/logo.png\" alt=\"\">\r\n    </a>\r\n  </div>\r\n  <app-navigation></app-navigation>\r\n  <app-user-state></app-user-state>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/header/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(authService) {
        this.authService = authService;
        this.MenuLinks = [
            {
                name: 'Home',
                link: ''
            },
            {
                name: 'Posts',
                link: 'posts'
            }
        ];
    }
    NavigationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn;
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/components/header/navigation/navigation.template.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/navigation/navigation.styles.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* AuthService */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/navigation/navigation.styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav {\n  float: left;\n  width: 60%;\n  text-align: right; }\n  .nav-list {\n    display: inline-block;\n    margin: 0;\n    padding: 25px 0 0;\n    list-style-type: none; }\n  .nav-item {\n    display: inline-block;\n    position: relative;\n    margin: 0;\n    padding: 0 15px; }\n    .nav-item:first-child::before {\n      display: none; }\n    .nav-item::before {\n      content: '';\n      position: absolute;\n      top: 0%;\n      left: 0;\n      background-color: #4c4c4c;\n      width: 1px;\n      height: 80%; }\n    .nav-item.active .nav-link:before {\n      -webkit-transform: scale(1);\n              transform: scale(1); }\n  .nav-link {\n    position: relative;\n    text-decoration: none;\n    color: #4c4c4c;\n    font-family: 'AndrewScript16';\n    font-size: 24px; }\n    .nav-link:before {\n      content: '';\n      position: absolute;\n      bottom: 10px;\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      transition: .3s all ease;\n      background-color: #4c4c4c;\n      width: 100%;\n      height: 2px; }\n    .nav-link:hover:before {\n      -webkit-transform: scale(1);\n              transform: scale(1); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/navigation/navigation.template.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\r\n  <ul class=\"nav-list\">\r\n    <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" *ngFor=\"let item of MenuLinks\">\r\n      <a class=\"nav-link\" [routerLink]=\"item.link\">{{item.name}}</a>\r\n    </li>\r\n    <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" *ngIf=\"isLoggedIn()\">\r\n      <a class=\"nav-link\" routerLink=\"/admin/posts\">Admin</a>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/header/user-state/user-state.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-state\">\r\n  <a class=\"user-state__link\"\r\n    routerLink=\"/\"\r\n    (click)=\"logOut()\"\r\n    *ngIf=\"isLoggedIn()\">\r\n    Log Out   \r\n  </a>\r\n  <a class=\"user-state__link\"\r\n    routerLink=\"/login\"\r\n    *ngIf=\"!isLoggedIn()\">\r\n    Log In\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/header/user-state/user-state.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-state {\n  float: left;\n  padding: 25px 0 0;\n  width: 20%;\n  text-align: right; }\n  .user-state__link {\n    text-decoration: none;\n    color: #4c4c4c;\n    font-family: 'AndrewScript16';\n    font-size: 24px; }\n    .user-state__link:hover {\n      text-decoration: underline;\n      color: #000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/user-state/user-state.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserStateComponent = (function () {
    function UserStateComponent(authService) {
        this.authService = authService;
    }
    UserStateComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn;
    };
    UserStateComponent.prototype.logOut = function () {
        this.authService.logOut();
    };
    UserStateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-state',
            template: __webpack_require__("../../../../../src/app/components/header/user-state/user-state.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/user-state/user-state.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* AuthService */]])
    ], UserStateComponent);
    return UserStateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.template.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.styles.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.template.html":
/***/ (function(module, exports) {

module.exports = "<h1>You can read blog on this <a class=\"nav-link\" routerLink=\"/posts\">link</a></h1>"

/***/ }),

/***/ "../../../../../src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/header/navigation/navigation.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__header_navigation_navigation_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_user_state_user_state_component__ = __webpack_require__("../../../../../src/app/components/header/user-state/user-state.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_3__header_user_state_user_state_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found/not-found.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__not_found_not_found_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__posts_posts_component__ = __webpack_require__("../../../../../src/app/components/posts/posts.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__posts_posts_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__post_post_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__posts_posts_list_posts_list_component__ = __webpack_require__("../../../../../src/app/components/posts/posts-list/posts-list.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__posts_posts_list_posts_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authorization_authorization_component__ = __webpack_require__("../../../../../src/app/components/authorization/authorization.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__authorization_authorization_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__popup_popup_component__ = __webpack_require__("../../../../../src/app/components/popup/popup.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_9__popup_popup_component__["a"]; });












/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
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

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () { };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/components/not-found/not-found.template.html"),
            styles: [__webpack_require__("../../../../../src/app/components/not-found/not-found.styles.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.template.html":
/***/ (function(module, exports) {

module.exports = "<h1>not found</h1>"

/***/ }),

/***/ "../../../../../src/app/components/popup/popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup-container\">\n  <h1 mat-dialog-title class=\"popup-title\">Add post</h1>\n  <form (ngSubmit)=\"addPost()\" [formGroup]=\"postFormGroup\" class=\"form\" novalidate>       \n    <div mat-dialog-content class=\"popup-fields\">\n      <mat-form-field>\n        <input matInput placeholder=\"Post title\" formControlName=\"title\" required>  \n        <mat-error>{{getErrorMessage('title')}}</mat-error>        \n      </mat-form-field>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Post text\"  formControlName=\"text\" matTextareaAutosize matAutosizeMinRows=\"5\" required></textarea>\n        <mat-error>{{getErrorMessage('text')}}</mat-error>        \n      </mat-form-field>\n    </div>\n    <div mat-dialog-actions class=\"popup-buttons\">\n      <button mat-raised-button (click)=\"onNoClick()\" type=\"button\" color=\"accent\">Cancel</button>\n      <button mat-raised-button type=\"submit\" cdkFocusInitial color=\"primary\">Add</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/popup/popup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".popup-title {\n  text-align: center;\n  font-family: 'AndrewScript16';\n  font-size: 30px; }\n\n.popup-fields > * {\n  width: 100%; }\n\n.popup-buttons {\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/popup/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var PopupComponent = (function () {
    function PopupComponent(firebaseService, authService, dialogRef, data) {
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.postFormGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].minLength(2)
            ]),
            text: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].minLength(2)
            ]),
        });
        this.title = this.postFormGroup.get('title');
        this.text = this.postFormGroup.get('text');
    }
    PopupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PopupComponent.prototype.getErrorMessage = function (fieldName) {
        switch (fieldName) {
            case fieldName:
                return this[fieldName].hasError('required') ? 'You must enter a value' :
                    this[fieldName].hasError('minlength') ? 'Minimun 2 characters' : '';
            default:
                return '';
        }
    };
    PopupComponent.prototype.addPost = function () {
        if (this.isPostFieldsValid()) {
            this.post = {
                title: this.title.value,
                text: this.text.value,
                author: {
                    nickname: this.authService.loggedUser.nickname,
                    avatar: this.authService.loggedUser.avatar,
                },
                comments: []
            };
            this.firebaseService.addPost(this.post);
            this.dialogRef.close();
        }
    };
    PopupComponent.prototype.isPostFieldsValid = function () {
        return this.title.valid &&
            this.text.valid;
    };
    PopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-popup',
            template: __webpack_require__("../../../../../src/app/components/popup/popup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/popup/popup.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post\">\n  <article class=\"post-item\">\n    <mat-icon class=\"post-icon__delete\" *ngIf=\"edit && canEditPost(post.author.nickname)\" (click)=\"deletePost(postId)\">delete</mat-icon>\n    <h3 class=\"post-title\" *ngIf=\"!fieldEdit.title\">\n      {{post.title}} \n      <mat-icon class=\"post-icon__edit\" *ngIf=\"edit && canEditPost(post.author.nickname)\" (click)=\"editField('title', post.title)\">mode_edit</mat-icon>\n    </h3>\n    <div class=\"post-form__title\" *ngIf=\"fieldEdit.title\">\n      <form (ngSubmit)=\"saveField('title')\" [formGroup]=\"editFormGroup\" novalidate>\n        <mat-form-field>\n          <input matInput placeholder=\"Post title\" formControlName=\"title\">\n        </mat-form-field>\n        <button mat-raised-button (click)=\"cancel('title')\" type=\"button\" color=\"accent\">Cancel</button>\n        <button mat-raised-button type=\"submit\" color=\"primary\">Save</button>\n      </form>\n    </div>\n    <div class=\"post-author\">\n      <span class=\"post-author-avatar\">\n        <img class=\"post-author-img\" src=\"{{post.author.avatar}}\" alt=\"\">\n      </span>\n      <span class=\"post-author-text\">{{post.author.nickname}}</span>\n    </div>\n    <div class=\"post-text\" *ngIf=\"!fieldEdit.text\">\n      <mat-icon class=\"post-icon__edit post-icon__edit-text\" *ngIf=\"edit && canEditPost(post.author.nickname)\" (click)=\"editField('text', post.text)\">mode_edit</mat-icon>\n      {{post.text}}\n    </div>\n    <div class=\"post-form__text\" *ngIf=\"fieldEdit.text\">  \n      <form (ngSubmit)=\"saveField('text')\" class=\"clearfix\" [formGroup]=\"editFormGroup\" novalidate>          \n        <mat-form-field>\n          <textarea matInput placeholder=\"Post text\" formControlName=\"text\" matTextareaAutosize matAutosizeMinRows=\"5\"></textarea>\n        </mat-form-field>\n        <div class=\"post-buttons\">\n          <button mat-raised-button (click)=\"cancel('text')\" type=\"button\" color=\"accent\">Cancel</button>\n          <button mat-raised-button type=\"submit\" color=\"primary\">Save</button>\n        </div>\n      </form>\n    </div>\n  </article>\n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-icon__delete {\n  float: right;\n  cursor: pointer; }\n  .post-icon__delete:hover {\n    color: #673ab7; }\n\n.post-icon__edit {\n  cursor: pointer; }\n  .post-icon__edit:hover {\n    color: #673ab7; }\n  .post-icon__edit-text {\n    float: right;\n    margin: 0 0 10px 10px; }\n\n.post-item {\n  position: relative;\n  transition: all ease .2s;\n  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.3);\n  padding: 20px; }\n  .post-item:hover {\n    transition: all ease .2s;\n    box-shadow: 5px 5px 25px 0 rgba(0, 0, 0, 0.3); }\n\n.post-more {\n  position: absolute;\n  right: 25px;\n  bottom: 5px;\n  z-index: 10;\n  font-family: 'AndrewScript16'; }\n\n.post-edit {\n  display: inline-block;\n  margin-right: 5px;\n  text-decoration: none; }\n\n.post-title {\n  margin: 0;\n  text-align: center;\n  font-family: 'AndrewScript16'; }\n\n.post-author {\n  margin: 0 0 16px;\n  font-family: 'AndrewScript16'; }\n  .post-author-avatar {\n    display: inline-block;\n    margin: 0 5px 0 0;\n    border-radius: 50%;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDI1RDU0ODQ0NkM1MTFFN0E4QzY5QTQyMjM3RjgxRTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDI1RDU0ODU0NkM1MTFFN0E4QzY5QTQyMjM3RjgxRTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMjVENTQ4MjQ2QzUxMUU3QThDNjlBNDIyMzdGODFFMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMjVENTQ4MzQ2QzUxMUU3QThDNjlBNDIyMzdGODFFMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg7qevAAAAXnSURBVHja3FtLiFtV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\");\n    background-size: cover;\n    width: 30px;\n    height: 30px;\n    overflow: hidden;\n    vertical-align: middle; }\n  .post-author-img {\n    display: block;\n    width: 100%; }\n\n.post-text {\n  text-align: justify; }\n\n.post-form__title {\n  text-align: center; }\n\n.post-form__text mat-form-field {\n  width: 100%; }\n\n.post-buttons {\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostComponent = (function () {
    function PostComponent(activatedRoute, router, authService, firebaseService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.authService = authService;
        this.firebaseService = firebaseService;
        this.post = {
            author: {
                nickname: '',
                avatar: '',
            },
            title: '',
            text: '',
            comments: []
        };
        this.edit = false;
        this.fieldEdit = {
            title: false,
            text: false
        };
        this.editFormGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](''),
            text: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('')
        });
        this.postId = activatedRoute.snapshot.params.id;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.activatedRoute.snapshot && this.activatedRoute.snapshot.data) {
            this.edit = this.activatedRoute.snapshot.data.edit;
        }
        this.firebaseService.getPost(this.postId).subscribe(function (res) { return _this.post = res; });
    };
    PostComponent.prototype.deletePost = function (id) {
        this.firebaseService.deletePost(id);
        this.router.navigate(['admin/posts']);
    };
    PostComponent.prototype.canEditPost = function (nickname) {
        return this.authService.isAuthor(nickname);
    };
    PostComponent.prototype.editField = function (type, field) {
        this.editFormGroup.patchValue((_a = {},
            _a[type] = field,
            _a));
        this.fieldEdit[type] = true;
        var _a;
    };
    PostComponent.prototype.saveField = function (type) {
        this.firebaseService.updatePost(this.postId, (_a = {},
            _a[type] = this.editFormGroup.get(type).value,
            _a));
        this.fieldEdit[type] = false;
        var _a;
    };
    PostComponent.prototype.cancel = function (type) {
        this.fieldEdit[type] = false;
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("../../../../../src/app/components/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/post/post.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["b" /* FirebaseService */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/posts/posts-list/posts-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"posts-list\">\r\n  <div class=\"post\" *ngFor=\"let post of posts | async\">\r\n    <article class=\"post-item\">\r\n      <div class=\"post-icons\" *ngIf=\"edit && canEditPost(post.author.nickname)\">\r\n        <a [routerLink]=\"post.key\" class=\"post-edit\">\r\n          <mat-icon>mode_edit</mat-icon>\r\n        </a>\r\n        <mat-icon (click)=\"deletePost(post.key)\">delete</mat-icon>\r\n      </div>\r\n      <h3 class=\"post-title\">{{post.title}}</h3>\r\n      <div class=\"post-author\">\r\n        <span class=\"post-author-avatar\">\r\n          <img class=\"post-author-img\" *ngIf=\"post.author.avatar\" src=\"{{post.author.avatar}}\" alt=\"\">\r\n        </span>\r\n        <span class=\"post-author-text\">{{post.author.nickname}}</span>\r\n      </div>\r\n      <div class=\"post-text\">{{post.text}}</div>\r\n      <a [routerLink]=\"post.key\" *ngIf=\"!edit\" class=\"post-more\">Read more ></a>\r\n    </article>\r\n  </div>\r\n  <div class=\"post\" *ngIf=\"edit\">\r\n    <article class=\"post-item\">\r\n      <div class=\"post-icons post-icons__add\">\r\n        <mat-icon (click)=\"openDialog()\">note_add</mat-icon>\r\n      </div>\r\n    </article>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/posts/posts-list/posts-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post {\n  float: left;\n  margin: 20px 0 0;\n  padding: 0 10px;\n  width: 25%; }\n  .post-icons {\n    text-align: right; }\n    .post-icons mat-icon {\n      cursor: pointer; }\n      .post-icons mat-icon:hover {\n        color: #673ab7; }\n    .post-icons__add {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      height: 260px; }\n      .post-icons__add mat-icon {\n        width: 60px;\n        height: 60px;\n        font-size: 60px; }\n  .post-item {\n    position: relative;\n    transition: all ease .2s;\n    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.3);\n    padding: 20px;\n    height: 300px;\n    overflow: hidden; }\n    .post-item:hover {\n      transition: all ease .2s;\n      box-shadow: 5px 5px 25px 0 rgba(0, 0, 0, 0.3); }\n    .post-item::before {\n      content: '';\n      position: absolute;\n      bottom: 20px;\n      left: 0;\n      z-index: 5;\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAYAAADtlXTHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzZCNUNDQkJBRDc1MTFFNkJDODhBMTI3ODk5ODk3NDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzZCNUNDQkNBRDc1MTFFNkJDODhBMTI3ODk5ODk3NDIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NkI1Q0NCOUFENzUxMUU2QkM4OEExMjc4OTk4OTc0MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NkI1Q0NCQUFENzUxMUU2QkM4OEExMjc4OTk4OTc0MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlEAzlgAAAAySURBVHjaYvj//78rEwMDAxeI4EZlYSPQ1CEIThDBASfYQQQbA9D4XyDiPynEH4AAAwDqtS/iQ7bThgAAAABJRU5ErkJggg==\");\n      width: 100%;\n      height: 30px; }\n    .post-item::after {\n      content: '';\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      z-index: 5;\n      background-color: #fff;\n      width: 100%;\n      height: 30px; }\n  .post-more {\n    position: absolute;\n    right: 25px;\n    bottom: 5px;\n    z-index: 10;\n    font-family: 'AndrewScript16'; }\n  .post-edit {\n    display: inline-block;\n    margin-right: 5px;\n    text-decoration: none; }\n  .post-title {\n    margin: 0;\n    text-align: center;\n    font-family: 'AndrewScript16'; }\n  .post-author {\n    margin: 0 0 16px;\n    font-family: 'AndrewScript16'; }\n    .post-author-avatar {\n      display: inline-block;\n      margin: 0 5px 0 0;\n      border-radius: 50%;\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDI1RDU0ODQ0NkM1MTFFN0E4QzY5QTQyMjM3RjgxRTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDI1RDU0ODU0NkM1MTFFN0E4QzY5QTQyMjM3RjgxRTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMjVENTQ4MjQ2QzUxMUU3QThDNjlBNDIyMzdGODFFMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMjVENTQ4MzQ2QzUxMUU3QThDNjlBNDIyMzdGODFFMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg7qevAAAAXnSURBVHja3FtLiFtVGP5zc/Ocm0lmJtOxVoVZF8FHUZT6aLVQ0YVtUaHdVooPXKizVKQuqwgqunAtgmJ1oYggPqpSlIqI7daCj+rUScxMMpN34v/dnIxp5t5Mzj3nJMEPvl3y53y55/znf93Qyj8lMoQ08zbmHuZu5iJzFzPDdMRn8OMF5iXmL8wLzHPMs8xVE4sKaRZ8DfMR5mHmrcxwQDtN5nfM08z3mL9OmuA7mUvM+xREDhL/CfMl5lfjFnw38yTzDhoNvmY+z/xy1IJ3Mk8xj9F48LbYUX+OQvBDzLeEUxon4NQeFWfciOAo82Xmk0FWV63VqVSuUqXaoEajSc1Wi0KhEIWtENnhMCXiEUrGoxSLRmRNv858Fj+hU3CK+QHzHnmhDcoVSlRhwcMgzoLnMg4Lt2V+5gzzEDOvQ/C88JI3y4pdK5Upt1qidlvynIWI5tIOTTsJma/9xDzA/FtFMM7p58ybgohdKahdedmMtOgfmfsGBS3WNmf2dBCxtXrDfbKqgA3YksCNYs3RIIJfYe4PtNCC/Db2Amzk5HfJfrF2KcG4eh4P5o0bVK7WSRdgCzYlgbU/POwZRoB/XgT5gZ7uKp9frVlIKuE6MUkgKbme+ft2T/i1oGKBjUpNe4RRCbZjoOHV7bb0PnGfBUKLD1290dQuuMZbuhXMKRzqjx36BZ9UWZgJsa7zUrP9gp9gpHh7lfK4ZstY4Kxge6/QtkXwkuqiWq22McGKtpf6Be9gHqT/Lw4KjZuCjzJtVasWZz6moGjbFho3BR/RsqiQQcHqto90BXeri8oIhy1jgm1b2TY0pmHldtJUeLPtsJvU6wZsokig+jyg1QqSDfkujBmL2NoFa7S5xxLxpjbEYxHtgjXa3A3BizoXh7qUbmi0uQjBV+t+GhrO239+gW1pfMK7LJXMyA/TTnwibcEcBDvaBU8ltAQhsAFbGpEycnFioTPTU8p2YENz9FaDYCP90rSTkK0tX3kVRSOuDc0oWaIUYgQLs9MUtuQ3kc0R28LctIklFbGaS+bCwTDtnM+4AmTEXpVNS31HAsuwetFkXhaNhCk7kxr68/P82aiBaE3gIgSfN52MtiXqUa122+RSLkDwD6YFy3QPqvWGyaWcQ10a6WGO9I8quG3Ry/ni0J3DLhIcWeEYRGytS0IVMIsnjMbTWRN/51+5NWmxALoNy/xdzYDGQtcVvq/d/69XZBthW44BbGiEq7HbakGB6w/SUNfqOCmi35bz7pZWvdauXZglDTUF/PNoIV3u7S19xLxfxRNjK6LVUmbqKsrjHCc4PUSKiLMdsKLyMfOB3icMoFgtPQeFzl5xo0Ilpsm6dDdGd5JxSjElw9a7qDMWsaV7iDmooboPaHDl19aDNrq05N2znFwMkSt/Qz1zZP2C0Xj6bNC3sVUxylA20CUMAmx3jEYMuMIO9Gry6g9jZMCzg4i+b351XSpyGgVwrmfTU17ZFSaPDl9xLDy+/5RfBgV/MWliuw7Tw5cVhBbaTjA65if8KhmYoZo0YE0elZET1Nf999vSXbzBfMwzqGCPjO+N+2ljK2dnHNdr9+FN8plRGSQYtdFPqTMx6+mll/NrRnvCg4C2DgoMHl76jHBUNVnB7m5hfkE+xXrcuyuFIt/B1ZGKdZIx9swpr3rXz9QZ28j57oohRg93iCd9g98HNso1vpMxRNY0KhTFhNm041eYh9h7ET4OPAZDDpeiwPSh+PcGJgyF4ob2WQ/csZlUklJTvjVqBEwPkqbh0i5i1BkffmKY9A6hJp48xoQDnVHLomQi6oaSicHRFJzr06R5fLgXUgPiiLWREyPdw5ZvNjEr3d708DiHFouDQGxZ1LMwQjxErIyE+TgZHBDvBV4BwEsXR8d0I73DfIZG9ApAL3BlvUiK404S+Jb5nLg5gt3dml7jQfrVfY1Hd0EZTgAD6qdoAl7j6cd11JliRcB+C6m9qPW9SGTepQl8UcsLva/iIXBB4z1L3q/irVCnIYC71OireP8KMACl5RAM7Vnm3gAAAABJRU5ErkJggg==\");\n      background-size: cover;\n      width: 30px;\n      height: 30px;\n      overflow: hidden;\n      vertical-align: middle; }\n    .post-author-img {\n      display: block;\n      width: 100%; }\n  .post-text {\n    text-align: justify; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/posts/posts-list/posts-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popup_popup_component__ = __webpack_require__("../../../../../src/app/components/popup/popup.component.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostsListComponent = (function () {
    function PostsListComponent(activatedRoute, dialog, authService, firebaseService) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.authService = authService;
        this.firebaseService = firebaseService;
        this.edit = false;
        this.itemsRef = firebaseService.getPosts();
        this.posts = this.itemsRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    PostsListComponent.prototype.ngOnInit = function () {
        if (this.activatedRoute.snapshot && this.activatedRoute.snapshot.data) {
            this.edit = this.activatedRoute.snapshot.data.edit;
        }
    };
    PostsListComponent.prototype.canEditPost = function (nickname) {
        return this.authService.isAuthor(nickname);
    };
    PostsListComponent.prototype.deletePost = function (key) {
        this.firebaseService.deletePost(key);
    };
    PostsListComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__popup_popup_component__["a" /* PopupComponent */], {
            width: '640px',
            data: { name: this.name, animal: this.animal }
        });
    };
    PostsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-posts-list',
            template: __webpack_require__("../../../../../src/app/components/posts/posts-list/posts-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/posts/posts-list/posts-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["b" /* FirebaseService */]])
    ], PostsListComponent);
    return PostsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/components/posts/posts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
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

var PostsComponent = (function () {
    function PostsComponent() {
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-posts',
            template: __webpack_require__("../../../../../src/app/components/posts/posts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/posts/posts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fb.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: 'AIzaSyB8df0O3rZ-QsfhlHhGvmGPhsRitkQLKVA',
    authDomain: 'mini-blog-56fe6.firebaseapp.com',
    databaseURL: 'https://mini-blog-56fe6.firebaseio.com',
    projectId: 'mini-blog-56fe6',
    storageBucket: 'mini-blog-56fe6.appspot.com',
    messagingSenderId: '537479407654'
};


/***/ }),

/***/ "../../../../../src/app/modules/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("../../../../../src/app/modules/admin/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var adminRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__components__["a" /* InitialPageComponent */],
        children: [
            {
                path: 'posts', component: __WEBPACK_IMPORTED_MODULE_3__components__["h" /* PostsComponent */],
                children: [
                    { path: '', data: { edit: true }, component: __WEBPACK_IMPORTED_MODULE_3__components__["i" /* PostsListComponent */] },
                    { path: ':id', data: { edit: true }, component: __WEBPACK_IMPORTED_MODULE_3__components__["g" /* PostComponent */] },
                ]
            },
        ]
    },
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(adminRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());

var routingComponents = [
    __WEBPACK_IMPORTED_MODULE_2__components__["a" /* InitialPageComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["g" /* PostComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["h" /* PostsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["i" /* PostsListComponent */]
];


/***/ }),

/***/ "../../../../../src/app/modules/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__ = __webpack_require__("../../../../../src/app/modules/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__["b" /* routingComponents */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__["a" /* AdminRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* ReactiveFormsModule */]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/admin/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initial_page_initial_page_component__ = __webpack_require__("../../../../../src/app/modules/admin/components/initial-page/initial-page.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__initial_page_initial_page_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/modules/admin/components/initial-page/initial-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InitialPageComponent = (function () {
    function InitialPageComponent(authService) {
        this.authService = authService;
        this.isAdmin = this.authService.isLoggedIn;
    }
    InitialPageComponent.prototype.ngOnInit = function () { };
    InitialPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-initial-page',
            template: __webpack_require__("../../../../../src/app/modules/admin/components/initial-page/initial-page.template.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/admin/components/initial-page/initial-page.styles.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* AuthService */]])
    ], InitialPageComponent);
    return InitialPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/admin/components/initial-page/initial-page.styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/admin/components/initial-page/initial-page.template.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"admin-page clearfix\">\r\n  admin\r\n  <router-outlet></router-outlet>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/admin/guards/auth-admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthAdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthAdminGuard = (function () {
    function AuthAdminGuard(authService) {
        this.authService = authService;
    }
    AuthAdminGuard.prototype.canActivate = function () {
        return this.authService.isLoggedIn;
    };
    AuthAdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* AuthService */]])
    ], AuthAdminGuard);
    return AuthAdminGuard;
}());



/***/ }),

/***/ "../../../../../src/app/modules/admin/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_module__ = __webpack_require__("../../../../../src/app/modules/admin/admin.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__admin_module__["AdminModule"]; });



/***/ }),

/***/ "../../../../../src/app/shared/constants/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return regFormFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patterns; });
var regFormFields = [
    {
        name: 'nickname',
        placeholder: 'Enter your nickname'
    },
    {
        name: 'email',
        placeholder: 'Enter your email'
    },
    {
        name: 'password',
        placeholder: 'Enter your password',
        type: 'password'
    }
];
var patterns = {
    patternNickname: /^[A-Za-z\-\s]*$/,
    patternPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};


/***/ }),

/***/ "../../../../../src/app/shared/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_firebase_service__ = __webpack_require__("../../../../../src/app/shared/services/firebase/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(firebaseService) {
        this.firebaseService = firebaseService;
        this.checkPermission(localStorage.getItem('role'));
    }
    AuthService.prototype.login = function (_a) {
        var _this = this;
        var email = _a.email, password = _a.password;
        this.firebaseService
            .getUsers()
            .subscribe(function (users) {
            _this._account = users.filter(function (user) { return email === user.email && password === user.password; })[0];
            if (_this._account !== undefined) {
                _this.checkPermission(_this._account.role);
                _this._isLoginError = false;
                localStorage.setItem('role', _this._account.role);
                __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref().child(_this._account.avatar).getDownloadURL().then(function (url) {
                    localStorage.setItem('user', JSON.stringify([{
                            avatar: url,
                            email: _this._account.email,
                            nickname: _this._account.nickname,
                        }]));
                });
            }
            else {
                _this._isLoginError = true;
            }
        });
    };
    Object.defineProperty(AuthService.prototype, "loggedUser", {
        get: function () {
            return JSON.parse(localStorage.getItem('user'))[0];
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.checkPermission = function (role) {
        this._isLoggedIn = (role === 'ROLE_ADMIN');
    };
    AuthService.prototype.loginError = function () {
        return this._isLoginError;
    };
    AuthService.prototype.logOut = function () {
        this._isLoggedIn = false;
        localStorage.setItem('role', '');
        localStorage.setItem('user', '');
    };
    AuthService.prototype.isAuthor = function (nickname) {
        return nickname === this.loggedUser.nickname;
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this._isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__firebase_firebase_service__["a" /* FirebaseService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/firebase/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseService = (function () {
    function FirebaseService(db) {
        this.db = db;
        this.folder = 'usersavatars';
    }
    FirebaseService.prototype.getUsers = function () {
        this.users = this.db.list('/users').valueChanges();
        return this.users;
    };
    FirebaseService.prototype.getPosts = function () {
        this.posts = this.db.list('/posts');
        return this.posts;
    };
    FirebaseService.prototype.getPost = function (id) {
        this.post = this.db.object("/posts/" + id).valueChanges();
        return this.post;
    };
    FirebaseService.prototype.addPost = function (newPost) {
        this.db.list('/posts').push(newPost);
    };
    FirebaseService.prototype.updatePost = function (id, el) {
        this.db.object("/posts/" + id).update(el);
    };
    FirebaseService.prototype.deletePost = function (key) {
        this.db.list('/posts').remove(key);
    };
    FirebaseService.prototype.addAccount = function (newAccount) {
        var _this = this;
        if (newAccount.avatar !== '') {
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            var path_1 = "/" + this.folder + "/" + newAccount.avatar.name;
            var iRef = storageRef.child(path_1);
            iRef.put(newAccount.avatar).then(function (snapshot) {
                newAccount.avatar = path_1;
                return _this.db.list('/users').push(newAccount);
            });
        }
        else {
            this.db.list('/users').push(newAccount);
        }
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_firebase_service__ = __webpack_require__("../../../../../src/app/shared/services/firebase/firebase.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__firebase_firebase_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth/auth.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a"]; });




/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map