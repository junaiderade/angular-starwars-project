(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./create-character/create-character.module": [
		"./src/app/create-character/create-character.module.ts",
		"create-character-create-character-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/tabs/tabs.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");





// u need to import all the components u use in the routes
var appRoutes = [
    { path: 'characters', component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"], children: [
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            // this appends all to the existing path, loads side with all as the value of the default tab, the pathMatch parameter changes
            // in this it would be /characters or /characters/all or /characters/full
            // the default matching strategy which is preifx
            { path: ':side', component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"] }
        ] },
    // here u r loading the tabs component for an ampty path.
    // path is the part after your domain
    { path: 'new-character', loadChildren: './create-character/create-character.module#CreateCharacterModule' },
    // HERE U HAD A HUGE ERROR WHERE U OG HAD .ts IN THIS ABOVE ROUTE BUT HAD TO REMOVE IT AND THEN IT WORKED
    // the # specifies the name of the module from th export class in the create character module ts
    // loadChildren allows u to point to a route to a specific module,the create character module ts
    // u need to restart ng Serve if u implement the loadCHildren feature
    // no need for a slash
    { path: '**', redirectTo: '/characters' }
    // this route is added so an invalid route does not crash ur application, must be the last route to work.
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
                // this registers our routes in the router module provided by angular
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                // by default feautures in a module are encapsulated to that module, so simply importing this
                // into app module aint gon help so u use this. this makes it available to any module which imports it
            ]
        }) // a module is only a module if it has this
    ], AppRoutingModule);
    return AppRoutingModule;
}());

// u import this into the app module
// by default feautures in a module are encapsulated to that module, so simply importing this
// into app module aint gon help


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <app-header></app-header>\n      <!-- <app-create-character></app-create-character> -->\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n        <!-- <app-tabs></app-tabs> -->\n        <router-outlet></router-outlet>\n        <!-- this is where angular puts the to-be loaded content,\n        this tells angular to load your root routes (from app module)\n      -->\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _star_wars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star-wars.service */ "./src/app/star-wars.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(swService) {
        this.swService = swService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.swService.fetchCharacters(); // you use this to access API
        // this was originally in the list ts componenet but u moved it here because u dont want it to reset everytime
        // the list componenet gets initialized
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_star_wars_service__WEBPACK_IMPORTED_MODULE_2__["StarWarsService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/tabs/tabs.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _star_wars_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./star-wars.service */ "./src/app/star-wars.service.ts");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./log.service */ "./src/app/log.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _item_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]
            ],
            providers: [_star_wars_service__WEBPACK_IMPORTED_MODULE_7__["StarWarsService"], _log_service__WEBPACK_IMPORTED_MODULE_8__["LogService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-fill\">\n    <li class=\"nav-item\" routerLinkActive=\"active\" >\n      <a class=\"nav-link\" routerLink=\"/characters\">Home</a>\n      <!-- the routerlink is an angulardirective and has to do with router module -->\n    </li>\n    <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"new-character\">New Character</a>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/item/item.component.css":
/*!*****************************************!*\
  !*** ./src/app/item/item.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <a style=\"cursor: pointer\" class=\"list-group-item\"> <!-- this a tag used to be an href but u set the style so it gives u a nice looking cursor -->\n        <h4 class=\"mb-1\"> {{character.name}} </h4>\n        <!-- this character.name comes from the list component ngFor, there is also an input for it in item ts file -->\n<div>\n<button class=\"btn btn-primary\" (click)= \" onAssign('light')\">Light</button>\n<button class=\"btn btn-danger\" (click)= \" onAssign('dark')\">Dark</button>\n</div>\n    </a>\n"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _star_wars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../star-wars.service */ "./src/app/star-wars.service.ts");



var ItemComponent = /** @class */ (function () {
    // swService is of type StarWarsService
    function ItemComponent(swService) {
        this.swService = swService;
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent.prototype.onAssign = function (side1) {
        this.swService.onSideAssigned2({ name: this.character.name, side: side1 });
        // here u import from the service and use its onSideAssigned2 method
        // this method is called in the item html
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemComponent.prototype, "character", void 0);
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/item/item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_star_wars_service__WEBPACK_IMPORTED_MODULE_2__["StarWarsService"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <app-item\n  *ngFor=\"let char of characters\"\n  [character]=\"char\"\n  >\n  <!-- this loop shows each item in list.char is the var name u assigned in the loop and characters is the name of the array  -->\n  <!-- the ngfor inside app item means it creates  an <app-item> for every character in the data-->\n  <!-- the [character] =\"char\" means that the word character in the app-item represents char from here -->\n</app-item>\n</div>\n\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _star_wars_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../star-wars.service */ "./src/app/star-wars.service.ts");




var ListComponent = /** @class */ (function () {
    function ListComponent(activatedRoute, swService) {
        this.characters = [];
        // i think the reason you pass these parameters in specific is because you only set the type when u initialized the variabls
        // but u didnt set the value and this sets that value
        this.activatedRoute = activatedRoute;
        this.swService = swService;
        // this constructer function sets the values the object needs with the info from parameters
        // Use the constructor to initialize class members and
        // for dependency injection. Use ngOnInit for initialization and logic work.
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ngOnInit signals that Angular has finished initializing and setting up component.
        //  The ngOnInit is called after the constructor is executed.
        this.activatedRoute.params.subscribe(// subscribe can fit 3 functions
        // subscribe is a method from rxjs which angular uses internally
        // how this method works. you get the params from the activated route.
        // if you go to routes u will see where params comes from. subscribe listens for changes in params aka the url
        // it uses getcharacters from the swService to get the characters for whichiver side u are on
        function (params) {
            _this.characters = _this.swService.getCharacters(params.side); // params.side comes from the routing in app module.it is an observable
            _this.loadedSide = params.side;
        });
        this.subscription = this.swService.charactersChanged.subscribe(
        // this subscribes to the charactersChanged variable in swService, which is an observable so it can be subscribed to
        // chractersChanged gets .next in the onSideAssigned2 method which triggers this
        function () {
            _this.characters = _this.swService.getCharacters(_this.loadedSide); // gets characters for currently loaded list
            // u were having a problem of when u switched a character while in light or dark,
            // it doesnt dissapear and go until u click on the other. this fixes that by making it reactive
        });
    };
    ListComponent.prototype.ngOnDestroy = function () {
        // a componenent is destroyed when routes changed, but there are other ways too
        this.subscription.unsubscribe(); // this removes the subscription so it doesnt pollute memory
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _star_wars_service__WEBPACK_IMPORTED_MODULE_3__["StarWarsService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/log.service.ts":
/*!********************************!*\
  !*** ./src/app/log.service.ts ***!
  \********************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogService = /** @class */ (function () {
    function LogService() {
    }
    LogService.prototype.writeLog = function (logText) {
        console.log(logText);
    };
    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/app/star-wars.service.ts":
/*!**************************************!*\
  !*** ./src/app/star-wars.service.ts ***!
  \**************************************/
/*! exports provided: StarWarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarWarsService", function() { return StarWarsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.service */ "./src/app/log.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




 // note that both response and http come from angular/http

var StarWarsService = /** @class */ (function () {
    // u had to import this in app module
    function StarWarsService(logService, http) {
        this.characters = [
            { name: 'Luke Skywalker', side: '' },
            // side is null because user should assign them, defaults to all
            { name: 'Darth Vader', side: '' },
            { name: 'Obi-wan Kenobi', side: '' },
            { name: 'Darth Maul', side: '' }
        ];
        // u created this because the constructor needs to bind to a property
        this.charactersChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"](); // indicates something abt the characters array changed
        this.logService = logService;
        this.http = http;
    }
    // ------------------------
    // so far this function gets an api, transforms the data, then logs it
    StarWarsService.prototype.fetchCharacters = function () {
        var _this = this;
        this.http.get('https://swapi.co/api/people/').map(function (response) {
            var data1 = response.json(); // this extracts the data and turns it from json to a real js object
            var extractedCharacters = data1.results; // this is here because you dont need all the data, just the objects in the results property
            var charsToChange = extractedCharacters.map(function (char2) {
                return { name: char2.name, side: '' }; // char name is a property of the data u would get back if you console.logged the api
            }); // THIS MAP FUNCTION IS A WHOLE DIFF TYPE THAN THE ABOVE, it comes form js not rxjs
            // the purpose of the second map function is to transform the old object arrays with all the stuff we dont need and turn it into a new
            // array with just the stuff we need. char.name exists because name is a property of the og object from the API
            return charsToChange; // remember, charsToChange is an array
        })
            // you have to import the map operator, you use map to transform the response
            .subscribe(// you use in this function on what is returned from the map function
        function (data) {
            console.log(data);
            _this.characters = data;
            _this.charactersChanged.next(); // this lets the subscribe function in list ts know of a change! so data is loaded right
        });
        // angular uses observables to manage requests.if there is no subscription, it does not send a request. that's why u have the console.log
        // this.http.post(url, data) // this is how a post request would work. just an ex
        // the get method takes one argument at least, but u can pass a optional second. get(url, js object where u can configure extra options)
    };
    // -----------------------
    StarWarsService.prototype.getCharacters = function (chosenList) {
        if (chosenList === 'all') {
            return this.characters.slice();
        }
        return this.characters.filter(function (char) {
            return char.side === chosenList;
        });
    };
    //  slice returns a copy of the array, this is here so u cant edit the original array
    // remember that return statements cease execution in a function! so if this return
    // is reached it's over
    // gets the characters in THIS class
    // filter method only returns a subset of the characters that satisfies that condtion
    // the chole char => means the char will be passed into the
    // you are checking if the char matches your chosen list, which is all rn
    // says char is equal or greater than than the boolean expression
    // ---------------------------
    StarWarsService.prototype.onSideAssigned2 = function (charInfo2) {
        var pos = this.characters.findIndex(function (char) {
            // the findIndex function works like this: it returns the index of the first element which satisifes the condition
            // it executes the function once for each element in the array. if it doesnt find anything it returns -1
            return char.name === charInfo2.name;
        });
        this.characters[pos].side = charInfo2.side;
        // this part of the function takes pos, the const from above and switches its side
        this.charactersChanged.next(); // this means u emit the next value for the subject, this is for purposes of reactivity.
        this.logService.writeLog('Changed side of ' + charInfo2.name + ' to ' + charInfo2.side);
        // this calls the logService property u made in this class
    };
    // const means the function does not modify observable state of the object
    // pos represents position
    // the find index method finds the index where the boolean equals true
    // (char => {} ) is the same as function(char) {}
    // that func returns a boolean, it returns true if char.name is the same as charInfo2.name
    // once it returns true, findIndex will give u the position of that element which u labeled pos
    // last line is self explanatory. it sets the side to the side of the data recieved
    // -----------------------
    StarWarsService.prototype.addCharacter = function (name, side) {
        var pos = this.characters.findIndex(function (char) {
            return char.name === name;
        }); // same method inluded as onSideAssigned
        if (pos !== -1) {
            // position will be -1 if no name is found, preventing user from not entering name or entering the same name
            return;
        }
        // remember that returning exits from the function
        var newChar = { name: name, side: side };
        this.characters.push(newChar);
    };
    StarWarsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], StarWarsService);
    return StarWarsService;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.component.css":
/*!*****************************************!*\
  !*** ./src/app/tabs/tabs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tabs/tabs.component.html":
/*!******************************************!*\
  !*** ./src/app/tabs/tabs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n<ul class=\"nav nav-tabs\" >\n\n\n<li class=\"nav-item\" routerLinkActive=\"active\">\n    <a class=\"nav-link\" routerLink=\"/characters/all\">All</a>\n  </li>\n\n<li class=\"nav-item\" routerLinkActive=\"active\">\n      <a class=\"nav-link\" routerLink=\"/characters/light\">Light</a>\n  </li>\n<li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/characters/dark\">Dark</a>\n  </li>\n\n</ul>\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.component.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/tabs.component.ts ***!
  \****************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// u removed a ton of code during the cleanup

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/tabs/tabs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/junaiderade/AngularBootcamp/ABS5/CourseProjectV1/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map