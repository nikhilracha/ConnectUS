webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/tabs/tabs.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Search" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="My Applied" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutPage = (function () {
    function AboutPage(navCtrl, http, NP, fb, toastCtrl, storage, viewctrl) {
        //this.getvalue();
        //this.fetchData();
        this.navCtrl = navCtrl;
        this.http = http;
        this.NP = NP;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.viewctrl = viewctrl;
        this.d = "apl";
    }
    AboutPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('userid').then(function (sval) {
            console.log('user id is', sval);
            var options;
            var headers;
            //this.storage.get('name').then((val) => {
            //console.log('about', val);
            headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
            options = { "key": "myapplied", "userid": sval };
            _this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                .subscribe(function (data) {
                console.log(data);
                _this.items = data;
                //this.sendNotification(JSON.stringify(data));
            }, function (error) {
                console.log(error);
                //this.sendNotification('Something went wrong!');
            });
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    \n    <ion-toolbar no-border-top >\n        <ion-segment [(ngModel)]="d">\n            <ion-segment-button value="apl">\n              My Applied Events\n            </ion-segment-button>\n            </ion-segment>\n            </ion-toolbar>\n  </ion-navbar>\n \n</ion-header>\n\n\n<ion-content >\n\n    <ng-container>\n        <ion-list *ngFor="let item of items">\n        \n           \n           <ion-card>\n           \n            <ion-card-content>\n              {{item.ename}} <div style=" padding:30px; text-align:right;"> <button default ion-button item-end disabled round>{{item.status}}</button> </div>        \n             </ion-card-content>\n          </ion-card>\n          \n        </ion-list>\n  </ng-container>\n  \n  \n\n  \n\n\n  \n  </ion-content>\n\n\n\n\n'/*ion-inline-end:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = (function () {
    function DetailPage(navCtrl, navParams, http, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.dataa = {};
        this.info = this.navParams.get('value');
        //this.getData();
        this.getDetail();
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad DetailPage');
    };
    DetailPage.prototype.getData = function () {
        var _this = this;
        var url = 'http://www.edudesk.co.in/edudesk/app/item.php';
        var data = this.http.get(url);
        data.subscribe(function (result) {
            _this.items = result;
            console.log(result);
        });
    };
    DetailPage.prototype.getDetail = function () {
        var _this = this;
        var options;
        var headers;
        console.log('about detail', this.info);
        headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        options = { "key": "detail", "name": this.info };
        this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
            .subscribe(function (data) {
            console.log(data);
            _this.items = data;
            //this.sendNotification(JSON.stringify(data));
        }, function (error) {
            console.log(error);
            _this.sendNotification('Something went wrong!');
        });
    };
    DetailPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    DetailPage.prototype.itemClick = function (item) {
        var _this = this;
        this.storage.get('userid').then(function (sval) {
            console.log('user id is', sval);
            console.log(item);
            var options;
            var headers;
            console.log('about detail', _this.info);
            headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
            options = { "key": "apply", "eventid": item, "userid": sval, "status": "pending" };
            _this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                .subscribe(function (data) {
                console.log(data);
                _this.items = Array.of(data);
                _this.sendNotification(JSON.stringify(data));
                //this.navCtrl.setRoot(HomePage);
                _this.getDetail();
            }, function (error) {
                console.log(error);
                _this.sendNotification('Something went wrong!');
            });
            _this.disableButton = true;
        });
        /*
         */
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/detail/detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let item of items">\n    <img src= {{item.eimage}}/>\n   \n  </ion-card>\n\n<p *ngFor="let item of items" class="vis">\n  <b>\n    <div align="center">\n      {{item.ename}}\n    </div>\n  </b>\n</p>\n\n<p *ngFor="let item of items">\n    <ion-icon name="calendar"></ion-icon>\n    {{item.edate}}\n  </p>\n  <p *ngFor="let item of items">\n      <ion-icon name="pin"></ion-icon>\n      {{item.venue}}\n    </p>\n\n<p *ngFor="let item of items">\n    <ion-icon name="time"></ion-icon>\n    {{item.etimefrom}}\n  </p>\n<p *ngFor="let item of items">\n  <b>Description</b><br>\n  {{item.description}}\n</p>\n\n<div align="center">\n<ion-item padding *ngFor="let item of items">\n  <button default ion-button [disabled]="disableButton" round (click)="itemClick(item.eid)" align="center">Apply</button>\n</ion-item>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 130:
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
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 172:
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
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = (function () {
    function ContactPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.d = "apl";
    }
    ContactPage.prototype.onLogout = function () {
        this.storage.set('status', false);
        this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/contact/contact.html"*/'<ion-header>\n    <ion-navbar color="dark">\n    \n        <ion-toolbar no-border-top >\n            <ion-segment [(ngModel)]="d">\n                <ion-segment-button value="apl">\n                  Profile\n                </ion-segment-button>\n                </ion-segment>\n                </ion-toolbar>\n      </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @EduDesk\n    </ion-item>\n\n  </ion-list>\n  <ion-item>\n    <button ion-button color="success" (click)="onLogout()" block>Logout</button>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(navCtrl, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.hideForm = false;
    }
    SignupPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { 'equalTo': { isValid: isValid } };
            else
                return null;
        };
    };
    SignupPage.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]),
            phone: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]),
            qualification: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]),
            re_password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, this.equalto('password')])
        });
    };
    SignupPage.prototype.onSubmit = function () {
        //this.navCtrl.push(WelcomePage,name);
        //console.log('Name:' + this.user.get('name').value);
        this.namee = this.user.get('name').value;
        this.emaill = this.user.get('email').value;
        this.pnoo = this.user.get('phone').value;
        this.qualification = this.user.get('qualification').value;
        console.log("qualification" + this.qualification);
        this.passd = this.user.get('password').value;
        this.createEntry(this.namee, this.emaill, this.pnoo, this.qualification, this.passd);
        /*this.navCtrl.push(WelcomePage,{
         'value':this.emaill
          });*/
    };
    SignupPage.prototype.createEntry = function (nam, em, pn, qual, pas) {
        var _this = this;
        console.log("inside create " + em);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { "key": "signup", "name": nam, "emaill": em, "phone": pn, "qualification": qual, "password": pas } // "description" : description },
        ;
        this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
            .subscribe(function (data) {
            console.log(data);
            // If the request was successful notify the user
            _this.hideForm = true;
            _this.sendNotification("successfully registered");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }, function (error) {
            _this.sendNotification('Something went wrong!');
            console.log(error);
        });
    };
    SignupPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    SignupPage.prototype.goLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/signup/signup.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-card-header><b ion-text color="new1"> Register </b> </ion-card-header>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-list>\n<form novalidate (ngSubmit)="onSubmit()" [formGroup]="user">\n<ion-item>\n<ion-label stacked>Name</ion-label>\n<ion-input formControlName="name" value="" type="text"></ion-input>\n</ion-item>\n\n<ion-item no-lines *ngIf="( user.get(\'name\').hasError(\'required\') ) && user.get(\'name\').touched">\n<div class="error" *ngIf="user.get(\'name\').hasError(\'required\') && user.get(\'name\').touched"><p ion-text color="danger">Name is required</p></div>\n</ion-item>\n\n<ion-item>\n  <ion-label stacked>Email</ion-label>\n  <ion-input formControlName="email" value="" type="email" pattern="[A-Za-z0-9._%+-]{5,}@[a-zA-Z]{4,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"></ion-input>\n</ion-item>\n\n<ion-item no-lines *ngIf="( user.get(\'email\').hasError(\'required\') ) && user.get(\'email\').touched">\n<div class="error" *ngIf="user.get(\'email\').hasError(\'required\') && user.get(\'email\').touched"><p ion-text color="danger">Email is required</p></div>\n</ion-item>\n\n<ion-item>\n  <ion-label stacked>Ph no.</ion-label>\n  <ion-input formControlName="phone" type="tel" pattern="[0-9]{10,10}" minlength="10" maxlength="10" value=""></ion-input>\n</ion-item>\n\n<ion-item no-lines *ngIf="( user.get(\'phone\').hasError(\'required\') ) && user.get(\'phone\').touched">\n<div class="error" *ngIf="user.get(\'phone\').hasError(\'required\') && user.get(\'phone\').touched"><p ion-text color="danger">Ph no. is required</p></div>\n</ion-item>\n\n<ion-item>\n    <ion-label>Education Qualification</ion-label>\n    <ion-select interface="action-sheet" formControlName="qualification">\n      <ion-option>10th /10+2 </ion-option>\n      <ion-option>Graduate</ion-option>\n      <ion-option>Post Graduate</ion-option> \n    </ion-select>\n  </ion-item>\n\n<ion-item>\n<ion-label stacked >Password</ion-label>\n<ion-input type="password" value="" formControlName="password"></ion-input>\n</ion-item>\n\n\n  \n<ion-item no-lines *ngIf="( user.get(\'password\').hasError(\'required\') ) && user.get(\'password\').touched">\n<div class="error" *ngIf="user.get(\'password\').hasError(\'required\') && user.get(\'password\').touched"><p ion-text color="danger">Password is required</p></div>\n</ion-item>\n\n\n\n<ion-item>\n<ion-label stacked >Confirm Password</ion-label>\n<ion-input type="text" value="" formControlName="re_password"></ion-input>\n</ion-item>\n\n<ion-item no-lines *ngIf="( user.get(\'re_password\').hasError(\'equalTo\') || user.get(\'re_password\').hasError(\'required\') ) && user.get(\'re_password\').touched">\n<div class="error" *ngIf="user.get(\'re_password\').hasError(\'required\') && user.get(\'re_password\').touched"><p ion-text color="danger">Confirm password is required</p></div>\n<div class="error" *ngIf="user.get(\'re_password\').hasError(\'equalTo\') && user.get(\'re_password\').touched"><p ion-text color="danger">Password Mismatch</p></div>\n</ion-item>\n  \n<ion-item>\n<button ion-button color="success" [disabled]="user.invalid" block>Sign Up</button>\n</ion-item>\n</form>\n<ion-item>\n  <button ion-button color="success" (click)="goLogin()" block>Already Registered ?</button>\n  </ion-item>\n</ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(platform, http, toastCtrl, storage, navCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.districts = "North Sikkim";
        this.catg = "All";
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
        this.storage.get('status').then(function (sval) {
            console.log('status check', sval);
        });
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.districts == "North Sikkim") {
            this.storage.remove('dname');
            //this.storage.clear();
            this.storage.set('dname', 'North Sikkim');
            console.log("this is nothsikkim tab");
            console.log("north tab update page cat" + this.catg);
            if (this.catg == "All") {
                console.log("this is  All tab in North Sikkim");
                var options = void 0;
                var headers = void 0;
                //this.storage.get('name').then((val) => {
                //console.log('about', val);
                headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                options = { "key": "locateall", "disname": "North Sikkim" };
                this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.items = data;
                    //this.sendNotification(JSON.stringify(data));
                }, function (error) {
                    console.log(error);
                    _this.sendNotification('Something went wrong!');
                });
            }
        }
        else if (this.districts == "South Sikkim") {
            this.storage.remove('dname');
            //this.storage.clear();
            this.storage.set('dname', 'South Sikkim');
            console.log("this is south sikkim tab");
            console.log("north tab update page cat" + this.catg);
            if (this.catg == "All") {
                console.log("this is  All tab in South Sikkim");
                var options = void 0;
                var headers = void 0;
                //this.storage.get('name').then((val) => {
                //console.log('about', val);
                headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                options = { "key": "locateall", "disname": "South Sikkim" };
                this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.items = data;
                    //this.sendNotification(JSON.stringify(data));
                }, function (error) {
                    console.log(error);
                    _this.sendNotification('Something went wrong!');
                });
            }
        }
        else if (this.districts == "East Sikkim") {
            this.storage.remove('dname');
            // this.storage.clear();
            this.storage.set('dname', 'East Sikkim');
            console.log("this is east sikkim tab");
            console.log("north tab update page cat" + this.catg);
            if (this.catg == "All") {
                console.log("this is  All tab in East Sikkim");
                var options = void 0;
                var headers = void 0;
                //this.storage.get('name').then((val) => {
                //console.log('about', val);
                headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                options = { "key": "locateall", "disname": "East Sikkim" };
                this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.items = data;
                    //this.sendNotification(JSON.stringify(data));
                }, function (error) {
                    console.log(error);
                    _this.sendNotification('Something went wrong!');
                });
            }
        }
        else if (this.districts == "West Sikkim") {
            this.storage.remove('dname');
            //this.storage.clear();
            this.storage.set('dname', 'West Sikkim');
            console.log("this is west sikkim tab");
            console.log("north tab update page cat" + this.catg);
            if (this.catg == "All") {
                console.log("this is  All tab in West Sikkim");
                var options = void 0;
                var headers = void 0;
                //this.storage.get('name').then((val) => {
                //console.log('about', val);
                headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                options = { "key": "locateall", "disname": "West Sikkim" };
                this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.items = data;
                    //this.sendNotification(JSON.stringify(data));
                }, function (error) {
                    console.log(error);
                    _this.sendNotification('Something went wrong!');
                });
            }
        }
        this.storage.get('dname').then(function (val) {
            if (_this.catg == "Health") {
                console.log("this is health tab in " + val);
            }
            else if (_this.catg == "Environment") {
                console.log("this is Environment tab in " + val);
            }
            else if (_this.catg == "All") {
                val = "North Sikkim";
                console.log("this is  All tab in " + val);
            }
            else if (_this.catg == "Social") {
                console.log("this is Social tab in " + val);
            }
            else if (_this.catg == "Agriculture") {
                console.log("this is Agriculture tab in " + val);
            }
            else if (_this.catg == "Education") {
                console.log("this is Education tab in " + val);
            }
            else if (_this.catg == "Cultural") {
                console.log("this is Cultural tab in " + val);
            }
        });
    };
    HomePage.prototype.selectupdate = function () {
        console.log("reset");
        this.catg = "All";
    };
    HomePage.prototype.itemClick = function (item) {
        //this.viewctrl.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */], {
            'value': item
        });
        //console.log(item);
    };
    HomePage.prototype.updatePage = function (districts) {
        var _this = this;
        if (this.districts == "North Sikkim") {
            this.storage.remove('dname');
            //this.storage.clear();
            this.storage.set('dname', 'North Sikkim');
            console.log("this is nothsikkim tab");
            console.log("north tab update page cat" + this.catg);
            if (this.catg == "All") {
                console.log("this is  All tab in North Sikkim");
                var options = void 0;
                var headers = void 0;
                //this.storage.get('name').then((val) => {
                //console.log('about', val);
                headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                options = { "key": "locateall", "disname": "North Sikkim" };
                this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.items = data;
                    //this.sendNotification(JSON.stringify(data));
                }, function (error) {
                    console.log(error);
                    _this.sendNotification('Something went wrong!');
                });
            }
        }
        else if (this.districts == "South Sikkim") {
            this.storage.remove('dname');
            //this.storage.clear();
            this.storage.set('dname', 'South Sikkim');
            console.log("this is south sikkim tab");
            console.log("north tab update page cat" + this.catg);
            if (this.catg == "All") {
                console.log("this is  All tab in South Sikkim");
                var options = void 0;
                var headers = void 0;
                //this.storage.get('name').then((val) => {
                //console.log('about', val);
                headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                options = { "key": "locateall", "disname": "South Sikkim" };
                this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.items = data;
                    //this.sendNotification(JSON.stringify(data));
                }, function (error) {
                    console.log(error);
                    _this.sendNotification('Something went wrong!');
                });
            }
        }
        else if (this.districts == "East Sikkim") {
            this.storage.remove('dname');
            // this.storage.clear();
            this.storage.set('dname', 'East Sikkim');
            console.log("this is east sikkim tab");
            console.log("north tab update page cat" + this.catg);
            if (this.catg == "All") {
                console.log("this is  All tab in East Sikkim");
                var options = void 0;
                var headers = void 0;
                //this.storage.get('name').then((val) => {
                //console.log('about', val);
                headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                options = { "key": "locateall", "disname": "East Sikkim" };
                this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.items = data;
                    //this.sendNotification(JSON.stringify(data));
                }, function (error) {
                    console.log(error);
                    _this.sendNotification('Something went wrong!');
                });
            }
        }
        else if (this.districts == "West Sikkim") {
            this.storage.remove('dname');
            //this.storage.clear();
            this.storage.set('dname', 'West Sikkim');
            console.log("this is west sikkim tab");
            console.log("north tab update page cat" + this.catg);
            if (this.catg == "All") {
                console.log("this is  All tab in West Sikkim");
                var options = void 0;
                var headers = void 0;
                //this.storage.get('name').then((val) => {
                //console.log('about', val);
                headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                options = { "key": "locateall", "disname": "West Sikkim" };
                this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.items = data;
                    //this.sendNotification(JSON.stringify(data));
                }, function (error) {
                    console.log(error);
                    _this.sendNotification('Something went wrong!');
                });
            }
        }
    };
    HomePage.prototype.updatePagecat = function (catg) {
        var _this = this;
        this.storage.get('dname').then(function (val) {
            if (_this.catg == "Health") {
                console.log("this is health tab in " + val);
                var options = void 0;
                var headers = void 0;
                //this.storage.get('name').then((val) => {
                //console.log('about', val);
                headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                options = { "key": "locateupdate", "disname": val, "cat": "health" };
                _this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.items = data;
                    //this.sendNotification(JSON.stringify(data));
                }, function (error) {
                    console.log(error);
                    _this.sendNotification('Something went wrong!');
                });
            }
            else if (_this.catg == "Environment") {
                console.log("this is Environment tab in " + val);
                var options = void 0;
                var headers = void 0;
                //this.storage.get('name').then((val) => {
                //console.log('about', val);
                headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                options = { "key": "locateupdate", "disname": val, "cat": "environment" };
                _this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.items = data;
                    //this.sendNotification(JSON.stringify(data));
                }, function (error) {
                    console.log(error);
                    _this.sendNotification('Something went wrong!');
                });
            }
            else if (_this.catg == "All") {
                console.log("this is  All tab in " + val);
                var options = void 0;
                var headers = void 0;
                //this.storage.get('name').then((val) => {
                //console.log('about', val);
                headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                options = { "key": "locateall", "disname": val };
                _this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.items = data;
                    //this.sendNotification(JSON.stringify(data));
                }, function (error) {
                    console.log(error);
                    _this.sendNotification('Something went wrong!');
                });
            }
            else if (_this.catg == "Cultural") {
                console.log("this is  Cultural tab in " + val);
                var options = void 0;
                var headers = void 0;
                //this.storage.get('name').then((val) => {
                //console.log('about', val);
                headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                options = { "key": "locateupdate", "disname": val, "cat": "cultural" };
                _this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.items = data;
                    //this.sendNotification(JSON.stringify(data));
                }, function (error) {
                    console.log(error);
                    _this.sendNotification('Something went wrong!');
                });
            }
            else if (_this.catg == "Education") {
                console.log("this is  Education tab in " + val);
                var options = void 0;
                var headers = void 0;
                //this.storage.get('name').then((val) => {
                //console.log('about', val);
                headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                options = { "key": "locateupdate", "disname": val, "cat": "education" };
                _this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.items = data;
                    //this.sendNotification(JSON.stringify(data));
                }, function (error) {
                    console.log(error);
                    _this.sendNotification('Something went wrong!');
                });
            }
            else if (_this.catg == "Agriculture") {
                console.log("this is  Agriculture tab in " + val);
                var options = void 0;
                var headers = void 0;
                //this.storage.get('name').then((val) => {
                //console.log('about', val);
                headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                options = { "key": "locateupdate", "disname": val, "cat": "agriculture" };
                _this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.items = data;
                    //this.sendNotification(JSON.stringify(data));
                }, function (error) {
                    console.log(error);
                    _this.sendNotification('Something went wrong!');
                });
            }
            else if (_this.catg == "Social") {
                console.log("this is Social tab in " + val);
                var options = void 0;
                var headers = void 0;
                //this.storage.get('name').then((val) => {
                //console.log('about', val);
                headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                options = { "key": "locateupdate", "disname": val, "cat": "social" };
                _this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.items = data;
                    //this.sendNotification(JSON.stringify(data));
                }, function (error) {
                    console.log(error);
                    _this.sendNotification('Something went wrong!');
                });
            }
        });
    };
    HomePage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar no-border-bottom no-lines ion-text color="dark">\n    \n  \n\n  <ion-toolbar no-border-top >\n    <ion-segment [(ngModel)]="districts" (ionChange)="updatePage(districts)" >\n      <ion-segment-button  value="North Sikkim" (ionSelect)="selectupdate()">\n        North\n      </ion-segment-button>\n      <ion-segment-button value="South Sikkim" (ionSelect)="selectupdate()" >\n        South\n      </ion-segment-button>\n      <ion-segment-button value="East Sikkim" (ionSelect)="selectupdate()" >\n        East\n      </ion-segment-button>\n      <ion-segment-button value="West Sikkim" (ionSelect)="selectupdate()">\n        West\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <ion-toolbar no-border-top no-border class="scrollable-segments">\n      <ion-segment [(ngModel)]="catg"  (ionChange)="updatePagecat(catg)">\n          <ion-segment-button value="All">\n              All\n            </ion-segment-button>\n        <ion-segment-button value="Health">\n          Health\n        </ion-segment-button>\n        <ion-segment-button value="Environment">\n          Environment\n        </ion-segment-button>\n        <ion-segment-button value="Cultural">\n          Cultural\n        </ion-segment-button>\n        <ion-segment-button value="Education">\n          Education\n        </ion-segment-button>\n        <ion-segment-button value="Agriculture">\n            Agriculture\n          </ion-segment-button>\n          <ion-segment-button value="Social">\n              Social\n            </ion-segment-button>\n            \n      </ion-segment>\n    </ion-toolbar>\n</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    \n\n  <div [ngSwitch]="districts">\n\n      <div [ngSwitch]="catg">\n\n\n          <ion-list *ngSwitchCase="\'All\'">\n            <ng-container>\n              <ion-list *ngFor="let item of items">\n              <img src={{item.eimage}} /> \n                 <ion-item>{{item.ename}}</ion-item> \n                    <p>\n                      {{item.description}}\n                  </p>\n                  <ion-item padding>\n                      <button default ion-button item-right round (click)="itemClick(item.eid)">More</button>\n                    </ion-item>\n              </ion-list>\n        </ng-container>\n          </ion-list>\n\n          <ion-list *ngSwitchCase="\'Health\'">\n               \n\n            <ng-container *ngFor="let item of items">\n                  <ion-list *ngFor="let item of items">\n                  <img src={{item.eimage}} /> \n                     <ion-item>{{item.ename}}</ion-item> \n                        <p>\n                          {{item.description}}\n                      </p>\n                      <ion-item padding>\n                          <button default ion-button item-right round (click)="itemClick(item.eid)">More</button>\n                        </ion-item>\n                  </ion-list>\n            </ng-container>\n          </ion-list>\n\n\n          <ion-list *ngSwitchCase="\'Environment\'">\n              \n              <ng-container *ngFor="let item of items">\n                  <ion-list *ngFor="let item of items">\n                  <img src={{item.eimage}} /> \n                     <ion-item>{{item.ename}}</ion-item> \n                        <p>\n                          {{item.description}}\n                      </p>\n                      <ion-item padding>\n                          <button default ion-button item-right round (click)="itemClick(item.eid)">More</button>\n                        </ion-item>\n                  </ion-list>\n            </ng-container>\n         </ion-list>\n\n\n         <ion-list *ngSwitchCase="\'Cultural\'">\n            \n            <ng-container *ngFor="let item of items">\n                <ion-list *ngFor="let item of items">\n                <img src={{item.eimage}} /> \n                   <ion-item>{{item.ename}}</ion-item> \n                      <p>\n                        {{item.description}}\n                    </p>\n                    <ion-item padding>\n                        <button default ion-button item-right round (click)="itemClick(item.eid)">More</button>\n                      </ion-item>\n                </ion-list>\n          </ng-container>\n       </ion-list>\n\n\n       <ion-list *ngSwitchCase="\'Education\'">\n          \n          <ng-container *ngFor="let item of items">\n              <ion-list *ngFor="let item of items">\n              <img src={{item.eimage}} /> \n                 <ion-item>{{item.ename}}</ion-item> \n                    <p>\n                      {{item.description}}\n                  </p>\n                  <ion-item padding>\n                      <button default ion-button item-right round (click)="itemClick(item.eid)">More</button>\n                    </ion-item>\n              </ion-list>\n        </ng-container>\n     </ion-list>\n\n\n     <ion-list *ngSwitchCase="\'Agriculture\'">\n       \n        <ng-container *ngFor="let item of items">\n            <ion-list *ngFor="let item of items">\n            <img src={{item.eimage}} /> \n               <ion-item>{{item.ename}}</ion-item> \n                  <p>\n                    {{item.description}}\n                </p>\n                <ion-item padding>\n                    <button default ion-button item-right round (click)="itemClick(item.eid)">More</button>\n                  </ion-item>\n            </ion-list>\n      </ng-container>\n   </ion-list>\n\n\n   <ion-list *ngSwitchCase="\'Social\'">\n      \n      <ng-container *ngFor="let item of items">\n          <ion-list *ngFor="let item of items">\n          <img src={{item.eimage}} /> \n             <ion-item>{{item.ename}}</ion-item> \n                <p>\n                  {{item.description}}\n              </p>\n              <ion-item padding>\n                  <button default ion-button item-right round (click)="itemClick(item.eid)">More</button>\n                </ion-item>\n          </ion-list>\n    </ng-container>\n </ion-list>\n\n</div>\n\n  <!--  <ion-list *ngSwitchCase="\'North Sikkim\'">\n        <ng-container *ngFor="let item of items">\n            <ion-list *ngFor="let item of items">\n            <img src={{item.eimage}} />\n                <ion-item>{{item.ename}}</ion-item> \n                  <p>\n                    {{item.edescription}}\n                 </p>\n                <ion-item padding>\n                    <button default ion-button item-right round (click)="itemClick(item.ename)">More</button>\n                  </ion-item>\n              </ion-list>\n        </ng-container>\n    </ion-list>\n    \n    \n\n    <ion-list *ngSwitchCase="\'South Sikkim\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-kitten-1.jpg">\n        </ion-thumbnail>\n        <h2>southsikkim</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-kitten-3.jpg">\n        </ion-thumbnail>\n        <h2>southsikkim</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-kitten-4.jpg">\n        </ion-thumbnail>\n        <h2>southsikkim</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-kitten-2.jpg">\n        </ion-thumbnail>\n        <h2>southsikkim</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'East Sikkim\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-1.jpg">\n        </ion-thumbnail>\n        <h2>eastsikkim</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-2.jpg">\n        </ion-thumbnail>\n        <h2>eastsikkim</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-3.jpg">\n        </ion-thumbnail>\n        <h2>eastsikkim</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-4.jpg">\n        </ion-thumbnail>\n        <h2>eastsikkim</h2>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-list *ngSwitchCase="\'wsikkim\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-1.jpg">\n        </ion-thumbnail>\n        <h2>westsikkim</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-2.jpg">\n        </ion-thumbnail>\n        <h2>westsikkim</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-3.jpg">\n        </ion-thumbnail>\n        <h2>westsikkim</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-4.jpg">\n        </ion-thumbnail>\n        <h2>westsikkim</h2>\n      </ion-item>\n    </ion-list>\n\n  -->\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_detail__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, http, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.searchQuery = '';
        this.initializeItems();
    }
    SearchPage.prototype.initializeItems = function () {
        var _this = this;
        var options;
        var headers;
        //this.storage.get('name').then((val) => {
        //console.log('about', val);
        headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        options = { "key": "all" };
        this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
            .subscribe(function (data) {
            console.log(data);
            _this.items = data;
            _this.tempitems = data;
            _this.setItems();
            //this.sendNotification(JSON.stringify(data));
        }, function (error) {
            console.log(error);
            //this.sendNotification('Something went wrong!');
        });
        // this.items = [
        //   'Amsterdam',
        //   'Bogota'
        // ];
    };
    SearchPage.prototype.setItems = function () {
        this.finalitems = this.tempitems;
        console.log("in setItems" + JSON.stringify(this.finalitems));
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.getItems = function (ev) {
        //this.typval=ev.target.value;
        // Reset items back to all of the items
        this.setItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.finalitems = this.finalitems.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
                //return item;
            });
        }
    };
    SearchPage.prototype.itemClick = function (item) {
        //this.viewctrl.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_detail__["a" /* DetailPage */], {
            'value': item
        });
        //console.log(item);
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/search/search.html"*/'<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n  \n<ion-list>\n    <ion-item *ngFor="let item of finalitems">\n    \n      <ion-item (click)="itemClick(item.eid)">{{item.ename}}</ion-item> \n      \n         \n        \n        </ion-item>\n</ion-list>\n\n\n'/*ion-inline-end:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(251);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_location_location__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_geocoder__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_innerlocation_innerlocation__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__agm_core__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_search_search__ = __webpack_require__(218);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_innerlocation_innerlocation__["a" /* InnerlocationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_search_search__["a" /* SearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { mode: 'md' }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_17__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCBQej7aM75kydJvqATsjn5_xQPa_GXJ4E'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_innerlocation_innerlocation__["a" /* InnerlocationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_search_search__["a" /* SearchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_geocoder__["a" /* NativeGeocoder */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.storage = storage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //this.storage.set('status',false);
            _this.storage.get('status').then(function (val) {
                console.log('status check', val);
                if (val == false) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                }
                else if (val == true) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                }
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationPage = (function () {
    // Initialise module classes
    function LocationPage(navCtrl, http, NP, fb, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.NP = NP;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        //public technologyDescription  : any;
        this.isEdited = false;
        this.hideForm = false;
        this.recordID = null;
        // Create form builder validation rules
        this.form = fb.group({
            "name": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
        });
    }
    ;
    LocationPage.prototype.ionViewWillEnter = function () {
        this.resetFields();
        if (this.NP.get("record")) {
            this.isEdited = true;
            this.selectEntry(this.NP.get("record"));
            this.pageTitle = 'Amend entry';
        }
        else {
            this.isEdited = false;
            this.pageTitle = 'Create entry';
        }
    };
    LocationPage.prototype.resetFields = function () {
        this.technologyName = "";
        //this.technologyDescription    = "";
    };
    LocationPage.prototype.selectEntry = function (item) {
        this.technologyName = item.name;
        // this.technologyDescription = item.description;
        this.recordID = item.id;
    };
    LocationPage.prototype.saveEntry = function () {
        var name = this.form.controls["name"].value;
        //,description   : string    = this.form.controls["description"].value;
        // console.log(name);
        this.storage.set('name', name);
        console.log("location saved");
        this.createEntry(name); //, description);
    };
    LocationPage.prototype.resetLocation = function () {
        this.storage.clear();
        console.log("location reset successful");
    };
    LocationPage.prototype.createEntry = function (name) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { "key": "locate", "name": name } // "description" : description },
        ;
        this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
            .subscribe(function (data) {
            console.log(data);
            // If the request was successful notify the user
            _this.hideForm = true;
            _this.sendNotification(JSON.stringify(data));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__about_about__["a" /* AboutPage */]);
        }, function (error) {
            _this.sendNotification('Something went wrong!');
            console.log(error);
        });
    };
    LocationPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/location/location.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="form" (ngSubmit)="saveEntry()">\n\n    <ion-list>\n       <ion-item-group>\n          <ion-item-divider color="light">Technology Name *</ion-item-divider>\n          <ion-item>\n             <ion-input\n                type="text"\n                placeholder="Enter a name..."\n                formControlName="name"\n                [(ngModel)]="technologyName"></ion-input>\n          </ion-item>\n       </ion-item-group>\n\n       <ion-item>\n          <button\n             ion-button\n             color="primary"\n             text-center\n             block\n             [disabled]="!form.valid">Save Entry</button>\n       </ion-item>\n\n    </ion-list>\n\n </form>\n <button default ion-button   style="height: 15px;\n    width: 60px; font-size:13px"  (click)="resetLocation()">Reset Location</button>\n</ion-content>\n'/*ion-inline-end:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/location/location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InnerlocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InnerlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InnerlocationPage = (function () {
    function InnerlocationPage(navCtrl, navParams, geolocation, nativeGeocoder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.lng = resp.coords.longitude;
            _this.location = resp;
            console.log("fetched");
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        this.nativeGeocoder.reverseGeocode(17.4700015, 78.7216569)
            .then(function (result) {
            return _this.plac = JSON.stringify(result);
        }
        /*console.log(JSON.stringify(result))*/ )
            .catch(function (error) { return console.log(error); });
    }
    InnerlocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InnerlocationPage');
    };
    InnerlocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-innerlocation',template:/*ion-inline-start:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/innerlocation/innerlocation.html"*/'<!--\n  Generated template for the InnerlocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>innerlocation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="17">\n        <agm-marker [latitude]="lat" [longitude]="lng" ></agm-marker>\n      </agm-map>\n      <ion-row>\n        <ion-col><p>Your Location is {{plac}}</p></ion-col>\n      </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/innerlocation/innerlocation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], InnerlocationPage);
    return InnerlocationPage;
}());

//# sourceMappingURL=innerlocation.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(navCtrl, http, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.hideForm = false;
        this.logstatus = false;
    }
    LoginPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { 'equalTo': { isValid: isValid } };
            else
                return null;
        };
    };
    LoginPage.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])
        });
    };
    LoginPage.prototype.onSubmit = function () {
        this.emaill = this.user.get('email').value;
        this.passd = this.user.get('password').value;
        this.LoginEntry(this.emaill, this.passd);
        console.log(this.emaill, this.passd);
        this.storage.set('status', true);
        this.storage.get('status').then(function (sval) {
            console.log('status updated', sval);
        });
        this.storage.set('userid', this.emaill);
    };
    LoginPage.prototype.LoginEntry = function (emLogin, pasLogin) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { "key": "Login", "emaill": emLogin, "password": pasLogin };
        console.log("inside entry" + emLogin, pasLogin);
        this.http.post('http://edudesk.co.in/edudesk/app/manage-data.php', JSON.stringify(options), headers)
            .subscribe(function (data) {
            console.log(data);
            // If the request was successful notify the user
            _this.hideForm = true;
            _this.sendNotification(JSON.stringify(data));
            console.log(data);
            if (data == "Login successful!!") {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                console.log(data);
            }
        }, function (error) {
            _this.sendNotification('Something went wrong!');
            console.log(error);
        });
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    \n    <ion-card-header><b ion-text color="new1"> LOGIN </b> </ion-card-header>\n    \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-list>\n    <form novalidate (ngSubmit)="onSubmit()" [formGroup]="user">\n    \n    \n    <ion-item>\n    <ion-label stacked>Email</ion-label>\n    <ion-input formControlName="email" value="" type="text"></ion-input>\n    </ion-item>\n    \n    <ion-item no-lines *ngIf="( user.get(\'email\').hasError(\'required\') ) && user.get(\'email\').touched">\n    <div class="error" *ngIf="user.get(\'email\').hasError(\'required\') && user.get(\'email\').touched"><p ion-text color="danger">Email is required</p></div>\n    </ion-item>\n    \n    \n    \n    <ion-item>\n    <ion-label stacked >Password</ion-label>\n    <ion-input type="password" value="" formControlName="password"></ion-input>\n    </ion-item>\n      \n    <ion-item no-lines *ngIf="( user.get(\'password\').hasError(\'required\') ) && user.get(\'password\').touched">\n    <div class="error" *ngIf="user.get(\'password\').hasError(\'required\') && user.get(\'password\').touched"><p ion-text color="danger">Password is required</p></div>\n    </ion-item>\n    \n    \n      \n    <ion-item>\n    <button ion-button color="success" [disabled]="user.invalid" block>Login</button>\n    </ion-item>\n    </form>\n    <ion-item>\n      <button ion-button color="success" (click)="onSignup()" block>Sign Up</button>\n      </ion-item>\n    </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/rachanikhil/Downloads/ionic/Edu-desk/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[229]);
//# sourceMappingURL=main.js.map