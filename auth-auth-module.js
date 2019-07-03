(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/content/pages/auth/auth-notice/auth-notice.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/auth/auth-notice/auth-notice.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!message\" [ngClass]=\"{show: message, 'alert-danger': type === 'error', 'alert-success': type === 'success', 'alert-info': type === 'info'}\" class=\"m-alert m-alert--outline m-alert--outline-2x alert fade\" role=\"alert\" #alertNotice>\n\t<span [innerHTML]=\"message\"></span>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/auth/auth-notice/auth-notice.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/auth/auth-notice/auth-notice.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/pages/auth/auth-notice/auth-notice.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/content/pages/auth/auth-notice/auth-notice.component.ts ***!
  \*************************************************************************/
/*! exports provided: AuthNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNoticeComponent", function() { return AuthNoticeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/auth/auth-notice.service */ "./src/app/core/auth/auth-notice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthNoticeComponent = /** @class */ (function () {
    function AuthNoticeComponent(authNoticeService) {
        this.authNoticeService = authNoticeService;
        this.message = '';
    }
    AuthNoticeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authNoticeService.onNoticeChanged$.subscribe(function (notice) {
            _this.message = notice.message;
            _this.type = notice.type;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AuthNoticeComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AuthNoticeComponent.prototype, "message", void 0);
    AuthNoticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-auth-notice',
            template: __webpack_require__(/*! ./auth-notice.component.html */ "./src/app/content/pages/auth/auth-notice/auth-notice.component.html"),
            styles: [__webpack_require__(/*! ./auth-notice.component.scss */ "./src/app/content/pages/auth/auth-notice/auth-notice.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_1__["AuthNoticeService"]])
    ], AuthNoticeComponent);
    return AuthNoticeComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/auth/auth.component.html":
/*!********************************************************!*\
  !*** ./src/app/content/pages/auth/auth.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--desktop m-grid--ver-desktop m-grid--hor-tablet-and-mobile m-login m-login--6\" id=\"m_login\">\n\n\n\t<div class=\"m-grid__item m-grid__item--fluid  m-grid__item--order-tablet-and-mobile-1 m-login__wrapper\">\n\t\t<!--begin::Head-->\n\t\t<div class=\"m-login__head\">\n\t\t\t<span translate=\"AUTH.GENERAL.NO_ACCOUNT\">Don't have an account?</span>\n\t\t\t<a href=\"javascript:;\" (click)=\"register()\" class=\"m-link m--font-danger\" translate=\"AUTH.GENERAL.SIGNUP_BUTTON\">Sign Up</a>\n\t\t</div>\n\t\t<!--end::Head-->\n\n\t\t<!--begin::Body-->\n\t\t<div class=\"m-login__body\">\n\t\t\t<m-login *ngIf=\"action === 'login'\" [(action)]=\"action\"></m-login>\n\n\t\t\t<m-register *ngIf=\"action === 'register'\" [(action)]=\"action\"></m-register>\n\n\t\t\t<m-forgot-password *ngIf=\"action === 'forgot-password'\" [(action)]=\"action\"></m-forgot-password>\n\t\t</div>\n\t\t<!--end::Body-->\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/auth/auth.component.scss":
/*!********************************************************!*\
  !*** ./src/app/content/pages/auth/auth.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/pages/auth/auth.component.ts":
/*!******************************************************!*\
  !*** ./src/app/content/pages/auth/auth.component.ts ***!
  \******************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_layout_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/layout-config.service */ "./src/app/core/services/layout-config.service.ts");
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/layout */ "./src/app/config/layout.ts");
/* harmony import */ var _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/auth/auth-notice.service */ "./src/app/core/auth/auth-notice.service.ts");
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/translation.service */ "./src/app/core/services/translation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthComponent = /** @class */ (function () {
    function AuthComponent(layoutConfigService, authNoticeService, translationService) {
        this.layoutConfigService = layoutConfigService;
        this.authNoticeService = authNoticeService;
        this.translationService = translationService;
        this.id = 'm_login';
        // tslint:disable-next-line:max-line-length
        this.classses = 'm-grid m-grid--hor m-grid--root m-page';
        this.action = 'login';
        this.today = Date.now();
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set login layout to blank
        this.layoutConfigService.setModel(new _config_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfig"]({ content: { skin: '' } }), true);
        this.translationService.getSelectedLanguage().subscribe(function (lang) {
            if (lang) {
                setTimeout(function () { return _this.translationService.setLanguage(lang); });
            }
        });
    };
    AuthComponent.prototype.ngOnDestroy = function () {
        // reset back to fluid
        this.layoutConfigService.reloadSavedConfig();
    };
    AuthComponent.prototype.register = function () {
        this.action = 'register';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('id'),
        __metadata("design:type", Object)
    ], AuthComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], AuthComponent.prototype, "classses", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AuthComponent.prototype, "action", void 0);
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/content/pages/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/content/pages/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_layout_config_service__WEBPACK_IMPORTED_MODULE_1__["LayoutConfigService"],
            _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_3__["AuthNoticeService"],
            _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslationService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/auth/auth.module.ts":
/*!***************************************************!*\
  !*** ./src/app/content/pages/auth/auth.module.ts ***!
  \***************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/content/pages/auth/auth.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/content/pages/auth/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/content/pages/auth/register/register.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/content/pages/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _partials_content_general_spinner_button_spinner_button_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../partials/content/general/spinner-button/spinner-button.module */ "./src/app/content/partials/content/general/spinner-button/spinner-button.module.ts");
/* harmony import */ var _auth_notice_auth_notice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth-notice/auth-notice.component */ "./src/app/content/pages/auth/auth-notice/auth-notice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild(),
                _partials_content_general_spinner_button_spinner_button_module__WEBPACK_IMPORTED_MODULE_10__["SpinnerButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"]
                    }
                ])
            ],
            providers: [],
            declarations: [
                _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"],
                _auth_notice_auth_notice_component__WEBPACK_IMPORTED_MODULE_11__["AuthNoticeComponent"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/content/pages/auth/forgot-password/forgot-password.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/auth/forgot-password/forgot-password.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin::Signin-->\n<div class=\"m-login__signin\">\n\t<div class=\"m-login__title\">\n\t\t<h3 class=\"m-login__title\"> <img src=\"./assets/app/media/img/logos/logo.png\"> Forgotten Password ?</h3>\n\t\t<div class=\"m-login__desc\">Enter your email to reset your password:</div>\n\t</div>\n\n\t<m-auth-notice></m-auth-notice>\n\n\t<!--begin::Form-->\n\t<form class=\"m-login__form m-form\" name=\"form\" (ngSubmit)=\"f.form.valid && submit()\" #f=\"ngForm\" novalidate>\n\t\t<div class=\"form-group\">\n\t\t\t<mat-form-field>\n\t\t\t\t<mat-label>Email</mat-label>\n\t\t\t\t<input matInput type=\"email\" name=\"email\" placeholder=\"Email address\" autocomplete=\"off\" [(ngModel)]=\"model.email\" #email=\"ngModel\" email=\"true\" required>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t</form>\n\t<!--end::Form-->\n\n\t<!--begin::Action-->\n\t<div class=\"m-login__action m-login__action--fit\">\n\t\t<button mat-button (click)=\"loginPage($event)\" [disabled]=\"loading\" translate=\"AUTH.GENERAL.BACK_BUTTON\">Back</button>\n\t\t<m-spinner-button [options]=\"spinner\" (click)=\"submit()\">{{'AUTH.GENERAL.SUBMIT_BUTTON' | translate}}</m-spinner-button>\n\t</div>\n\t<!--end::Action-->\n</div>\n<!--end::Signin-->\n"

/***/ }),

/***/ "./src/app/content/pages/auth/forgot-password/forgot-password.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/auth/forgot-password/forgot-password.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-form-field {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/content/pages/auth/forgot-password/forgot-password.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/pages/auth/forgot-password/forgot-password.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/auth/authentication.service */ "./src/app/core/auth/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/auth/auth-notice.service */ "./src/app/core/auth/auth-notice.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService, authNoticeService, translate) {
        this.authService = authService;
        this.authNoticeService = authNoticeService;
        this.translate = translate;
        this.model = { email: '' };
        this.actionChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loading = false;
        this.errors = [];
        this.spinner = {
            active: false,
            spinnerSize: 18,
            raised: true,
            buttonColor: 'primary',
            spinnerColor: 'accent',
            fullWidth: false
        };
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () { };
    ForgotPasswordComponent.prototype.loginPage = function (event) {
        event.preventDefault();
        this.action = 'login';
        this.actionChange.next(this.action);
    };
    ForgotPasswordComponent.prototype.submit = function () {
        var _this = this;
        this.spinner.active = true;
        if (this.validate(this.f)) {
            this.authService.requestPassword(this.model).subscribe(function (response) {
                if (typeof response !== 'undefined') {
                    _this.action = 'login';
                    _this.actionChange.next(_this.action);
                }
                else {
                    // tslint:disable-next-line:max-line-length
                    _this.authNoticeService.setNotice(_this.translate.instant('AUTH.VALIDATION.NOT_FOUND', { name: _this.translate.instant('AUTH.INPUT.EMAIL') }), 'error');
                }
                _this.spinner.active = false;
            });
        }
    };
    ForgotPasswordComponent.prototype.validate = function (f) {
        if (f.form.status === 'VALID') {
            return true;
        }
        this.errors = [];
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](f, 'form.controls.email.errors.email')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](f, 'form.controls.email.errors.required')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
        }
        if (this.errors.length > 0) {
            this.authNoticeService.setNotice(this.errors.join('<br/>'), 'error');
            this.spinner.active = false;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ForgotPasswordComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ForgotPasswordComponent.prototype, "actionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], ForgotPasswordComponent.prototype, "f", void 0);
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/content/pages/auth/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/content/pages/auth/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_5__["AuthNoticeService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/auth/login/login.component.html":
/*!***************************************************************!*\
  !*** ./src/app/content/pages/auth/login/login.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin::Signin-->\n<!--<div class=\"m-login__signin\">-->\n<div class=\"m-login__title\">\n\t<h3 translate=\"AUTH.LOGIN.TITLE\"><img src=\"./assets/app/media/img/logos/logo.png\"> Login Account</h3>\n</div>\n\n<m-auth-notice></m-auth-notice>\n\n<!--begin::Form-->\n<form class=\"m-login__form m-form\" name=\"form\" (ngSubmit)=\"f.form.valid && submit()\" #f=\"ngForm\" novalidate>\n\t<div class=\"form-group\">\n\t\t<mat-form-field>\n\t\t\t<mat-label>Email</mat-label>\n\t\t\t<input matInput type=\"email\" name=\"email\" placeholder=\"Email address\" autocomplete=\"off\"\n\t\t\t\t   [(ngModel)]=\"model.email\" #email=\"ngModel\" email=\"true\" required>\n\t\t</mat-form-field>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<mat-form-field>\n\t\t\t<mat-label>Password</mat-label>\n\t\t\t<input matInput minlength=\"4\" type=\"password\" name=\"password\" placeholder=\"Password\" autocomplete=\"off\"\n\t\t\t\t   [(ngModel)]=\"model.password\" #password=\"ngModel\" required>\n\t\t</mat-form-field>\n\t</div>\n</form>\n<!--end::Form-->\n\n<!--begin::Action-->\n<div class=\"m-login__action m-login__action--fit\">\n\t<a href=\"javascript:;\" (click)=\"forgotPasswordPage($event)\" class=\"m-link\">\n\t\t<span translate=\"AUTH.GENERAL.FORGOT_BUTTON\">Forgot Password?</span>\n\t</a>\n\t<m-spinner-button [options]=\"spinner\" (click)=\"submit()\">{{'AUTH.LOGIN.BUTTON' | translate}}</m-spinner-button>\n</div>\n<!--end::Action-->\n\n\n<!--end::Options-->\n<!--</div>-->\n<!--end::Signin-->\n"

/***/ }),

/***/ "./src/app/content/pages/auth/login/login.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/content/pages/auth/login/login.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-form-field {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/content/pages/auth/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/content/pages/auth/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/auth/authentication.service */ "./src/app/core/auth/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/auth/auth-notice.service */ "./src/app/core/auth/auth-notice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
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
    function LoginComponent(authService, router, authNoticeService, translate, cdr) {
        this.authService = authService;
        this.router = router;
        this.authNoticeService = authNoticeService;
        this.translate = translate;
        this.cdr = cdr;
        this.model = { email: 'admin@demo.com', password: 'demo' };
        this.classes = 'm-login__signin';
        this.actionChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loading = false;
        this.errors = [];
        this.spinner = {
            active: false,
            spinnerSize: 18,
            raised: true,
            buttonColor: 'primary',
            spinnerColor: 'accent',
            fullWidth: false
        };
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.spinner.active = true;
        if (this.validate(this.f)) {
            this.authService.login(this.model).subscribe(function (response) {
                if (typeof response !== 'undefined') {
                    _this.router.navigate(['/']);
                }
                else {
                    _this.authNoticeService.setNotice(_this.translate.instant('AUTH.VALIDATION.INVALID_LOGIN'), 'error');
                }
                _this.spinner.active = false;
                _this.cdr.detectChanges();
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        // demo message to show
        if (!this.authNoticeService.onNoticeChanged$.getValue()) {
            var initialNotice = "Use account\n\t\t\t<strong>admin@demo.com</strong> and password\n\t\t\t<strong>demo</strong> to continue.";
            this.authNoticeService.setNotice(initialNotice, 'success');
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.authNoticeService.setNotice(null);
    };
    LoginComponent.prototype.validate = function (f) {
        if (f.form.status === 'VALID') {
            return true;
        }
        this.errors = [];
        if (object_path__WEBPACK_IMPORTED_MODULE_6__["get"](f, 'form.controls.email.errors.email')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_6__["get"](f, 'form.controls.email.errors.required')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_6__["get"](f, 'form.controls.password.errors.required')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', { name: this.translate.instant('AUTH.INPUT.PASSWORD') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_6__["get"](f, 'form.controls.password.errors.minlength')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.MIN_LENGTH', { name: this.translate.instant('AUTH.INPUT.PASSWORD') }));
        }
        if (this.errors.length > 0) {
            this.authNoticeService.setNotice(this.errors.join('<br/>'), 'error');
            this.spinner.active = false;
        }
        return false;
    };
    LoginComponent.prototype.forgotPasswordPage = function (event) {
        this.action = 'forgot-password';
        this.actionChange.next(this.action);
    };
    LoginComponent.prototype.register = function (event) {
        this.action = 'register';
        this.actionChange.next(this.action);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "classes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "actionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], LoginComponent.prototype, "f", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/content/pages/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/content/pages/auth/login/login.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_core_auth_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_4__["AuthNoticeService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/auth/register/register.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/content/pages/auth/register/register.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin::Signin-->\n<div class=\"m-login__signin\">\n\t<div class=\"m-login__title\">\n\t\t<h3 class=\"m-login__title\"> <img src=\"./assets/app/media/img/logos/logo.png\">Sign Up</h3>\n\t\t<div class=\"m-login__desc\">Enter your details to create your account:</div>\n\t</div>\n\n\t<m-auth-notice></m-auth-notice>\n\n\t<!--begin::Form-->\n\t<form class=\"m-login__form m-form\" name=\"form\" (ngSubmit)=\"f.form.valid && submit()\" #f=\"ngForm\" novalidate>\n\t\t<div class=\"form-group\">\n\t\t\t<mat-form-field>\n\t\t\t\t<mat-label>Fullname</mat-label>\n\t\t\t\t<input matInput type=\"text\" name=\"fullname\" placeholder=\"Fullname\" autocomplete=\"off\" [(ngModel)]=\"model.fullname\" #fullname=\"ngModel\" required>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<mat-form-field>\n\t\t\t\t<mat-label>Email</mat-label>\n\t\t\t\t<input matInput type=\"email\" name=\"email\" placeholder=\"Email address\" autocomplete=\"off\" [(ngModel)]=\"model.email\" #email=\"ngModel\" email=\"true\" required>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<mat-form-field>\n\t\t\t\t<mat-label>Password</mat-label>\n\t\t\t\t<input matInput minlength=\"4\" type=\"password\" name=\"password\" placeholder=\"Password\" autocomplete=\"off\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<mat-form-field>\n\t\t\t\t<mat-label>Confirm Password</mat-label>\n\t\t\t\t<input matInput minlength=\"4\" type=\"password\" name=\"rpassword\" placeholder=\"Confirm password\" autocomplete=\"off\" [(ngModel)]=\"model.rpassword\" #rpassword=\"ngModel\" required>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<mat-checkbox name=\"agree\" required=\"true\" [(ngModel)]=\"model.agree\" #agree=\"ngModel\">I agree the\n\t\t\t\t<a href=\"javascript:;\">terms & conditions</a>\n\t\t\t</mat-checkbox>\n\t\t</div>\n\t</form>\n\t<!--end::Form-->\n\n\t<!--begin::Action-->\n\t<div class=\"m-login__action m-login__action--fit\">\n\t\t<button mat-button (click)=\"loginPage($event)\" [disabled]=\"loading\" translate=\"AUTH.GENERAL.BACK_BUTTON\">Back</button>\n\t\t<m-spinner-button [options]=\"spinner\" (click)=\"submit()\">{{'AUTH.GENERAL.SIGNUP_BUTTON' | translate}}</m-spinner-button>\n\t</div>\n\t<!--end::Action-->\n</div>\n<!--end::Signin-->\n"

/***/ }),

/***/ "./src/app/content/pages/auth/register/register.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/content/pages/auth/register/register.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-form-field {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/content/pages/auth/register/register.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/content/pages/auth/register/register.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/auth/authentication.service */ "./src/app/core/auth/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/auth/auth-notice.service */ "./src/app/core/auth/auth-notice.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, authNoticeService, translate) {
        this.authService = authService;
        this.authNoticeService = authNoticeService;
        this.translate = translate;
        this.model = { email: '' };
        this.actionChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loading = false;
        this.errors = [];
        this.spinner = {
            active: false,
            spinnerSize: 18,
            raised: true,
            buttonColor: 'primary',
            spinnerColor: 'accent',
            fullWidth: false
        };
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.loginPage = function (event) {
        event.preventDefault();
        this.action = 'login';
        this.actionChange.next(this.action);
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        this.spinner.active = true;
        if (this.validate(this.f)) {
            this.authService.register(this.model).subscribe(function (response) {
                _this.action = 'login';
                _this.actionChange.next(_this.action);
                _this.spinner.active = false;
                _this.authNoticeService.setNotice(_this.translate.instant('AUTH.REGISTER.SUCCESS'), 'success');
            });
        }
    };
    RegisterComponent.prototype.validate = function (f) {
        if (f.form.status === 'VALID') {
            return true;
        }
        this.errors = [];
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](f, 'form.controls.fullname.errors.required')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.FULLNAME') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](f, 'form.controls.email.errors.email')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](f, 'form.controls.email.errors.required')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](f, 'form.controls.password.errors.required')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.PASSWORD') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](f, 'form.controls.password.errors.minlength')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.MIN_LENGTH', { name: this.translate.instant('AUTH.INPUT.PASSWORD'), min: 4 }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](f, 'form.controls.rpassword.errors.required')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.CONFIRM_PASSWORD') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](f, 'form.controls.agree.errors.required')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.AGREEMENT_REQUIRED'));
        }
        if (this.errors.length > 0) {
            this.authNoticeService.setNotice(this.errors.join('<br/>'), 'error');
            this.spinner.active = false;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RegisterComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "actionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], RegisterComponent.prototype, "f", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/content/pages/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/content/pages/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_5__["AuthNoticeService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/core/auth/auth-notice.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/auth/auth-notice.service.ts ***!
  \**************************************************/
/*! exports provided: AuthNoticeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNoticeService", function() { return AuthNoticeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthNoticeService = /** @class */ (function () {
    function AuthNoticeService() {
        this.onNoticeChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    AuthNoticeService.prototype.setNotice = function (message, type) {
        var notice = {
            message: message,
            type: type
        };
        this.onNoticeChanged$.next(notice);
    };
    AuthNoticeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthNoticeService);
    return AuthNoticeService;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map