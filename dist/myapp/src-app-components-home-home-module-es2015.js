(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-components-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"body-bg\">\r\n  <div class=\"d-flex justify-content-center\">\r\n    <div class=\"col-lg-8 col-sm-12\">\r\n      <h3 class=\"pt-4\">\r\n        <span class=\"text-danger\">&#9830;</span> Question & Answer\r\n      </h3>\r\n      <div id=\"accordion\" class=\"pb-5 pt-3\">\r\n        <dx-accordion\r\n          #accordion\r\n          [dataSource]=\"questionAnswer\"\r\n          [collapsible]=\"false\"\r\n          [multiple]=\"true\"\r\n          [animationDuration]=\"300\"\r\n          [selectedItems]=\"[questionAnswer[0]]\"\r\n        >\r\n          <div *dxTemplate=\"let company of 'title'\">\r\n            <p class=\"question\"><span class=\"sl_no\">{{ company.ID }}. </span>  <span class=\"question_q\">{{ company.Question }}</span></p>\r\n          </div>\r\n          <div class=\"answer-section\" *dxTemplate=\"let company of 'item'\">\r\n            <div  innerHtml=\"{{ company?.Answer }}\">\r\n            </div>\r\n            <div>\r\n              <p *ngIf=\"company?.Website\">\r\n                Website:\r\n                <a href=\"{{ company?.Website }}\" target=\"_blank\">Click me </a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </dx-accordion>\r\n      </div>\r\n      <!-- <div class=\"pb-3\">\r\n        <div class=\"user-question-section\">\r\n          <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4 col-md-4 col-sm-12 pt-1\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email\"\r\n                name=\"email\" [(ngModel)]=\"formData.email\" #email=\"ngModel\" ngModel required>\r\n                <p class=\"text-white\" *ngIf=\"email.hasError('required')\">It is requered</p>\r\n              </div>\r\n              <div class=\"col-lg-6 col-md-6 col-sm-12 pt-1\">\r\n                <input type=\"text\" class=\"form-control pt-sm-2\" \r\n                placeholder=\"Question\"\r\n                name=\"question\" [(ngModel)]=\"formData.question\"\r\n                >\r\n              </div>\r\n              <div class=\"col-lg-2 col-md-2 col-sm-12 pt-1\">\r\n                <button type=\"submit\" class=\"btn btn-danger btn-block\">Submit</button>\r\n              </div>\r\n            </div>\r\n            <p class=\"mt-3\">If you have real time interview question. Please provide for next interview.</p>\r\n          </form>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".question {\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.user-question-section {\n  padding: 20px;\n  border-radius: 6px;\n  background: linear-gradient(90deg, #fd1d1d 15%, #eeb8b8 100%);\n}\n\n.answer-section {\n  padding: 0px 0px 0px 36px;\n}\n\n@media (min-width: 320px) and (max-width: 640px) {\n  .answer-section {\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0Q6XFxGaWxlc1xcQ29kZVxcUHJvamVjdHNcXG93bi1wcm9qZWN0c1xcYW5ndWxhci5xYS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUVBLDZEQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtBQ0VKOztBRENBO0VBRUk7SUFDSSxhQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXN0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4udXNlci1xdWVzdGlvbi1zZWN0aW9ue1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIC8vIGJveC1zaGFkb3c6IDAgMCA5cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTMsMjksMjksMSkgMTUlLCByZ2IoMjM4LCAxODQsIDE4NCkgMTAwJSk7O1xyXG59XHJcbi5hbnN3ZXItc2VjdGlvbntcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDM2cHg7XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6MzIwcHgpIGFuZCAobWF4LXdpZHRoOjY0MHB4KSB7XHJcbiAgIFxyXG4gICAgLmFuc3dlci1zZWN0aW9ue1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbn0iLCIucXVlc3Rpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi51c2VyLXF1ZXN0aW9uLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZkMWQxZCAxNSUsICNlZWI4YjggMTAwJSk7XG59XG5cbi5hbnN3ZXItc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDM2cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5hbnN3ZXItc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_regex_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/regex.service */ "./src/app/service/regex.service.ts");
/* harmony import */ var _service_angular_qa_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/angular-qa-service.service */ "./src/app/service/angular-qa-service.service.ts");




let HomeComponent = class HomeComponent {
    constructor(service) {
        this.formData = {};
        this.modelPattern = src_app_service_regex_service__WEBPACK_IMPORTED_MODULE_2__["appPattern"];
        this.questionAnswer = service.getCompanies();
    }
    ngOnInit() {
        this.formData = {
            email: '',
            question: ''
        };
    }
    onSubmit(form) {
        if (form.invalid) {
            return;
        }
        console.log("Data=", this.formData);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _service_angular_qa_service_service__WEBPACK_IMPORTED_MODULE_3__["AngularQaServiceService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        providers: [_service_angular_qa_service_service__WEBPACK_IMPORTED_MODULE_3__["AngularQaServiceService"]],
        preserveWhitespaces: true,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm2015/devextreme-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxAccordionModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxCheckBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxSliderModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxTagBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxTemplateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }])
        ],
    })
], HomeModule);



/***/ }),

/***/ "./src/app/service/angular-qa-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/angular-qa-service.service.ts ***!
  \*******************************************************/
/*! exports provided: AngularQaServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularQaServiceService", function() { return AngularQaServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AngularQaServiceService = class AngularQaServiceService {
    constructor() { }
    getCompanies() {
        return companies;
    }
};
AngularQaServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AngularQaServiceService);

// export class Company {
//     ID: number;
//     Question: string;
//     Answer: string;
//     City: string;
//     State: string;
//     Zipcode: number;
//     Phone: string;
//     Fax: string;
//     Website: string;
// }
let companies = [
    {
        "ID": 1,
        "Question": "What is angular ?",
        "Answer": "<p>Angular is a TypeScript based <b>open source single page web application framework</b>, developed and maintained by <b>Google</b>. Easy and powerful way of building front end web based applications. Angular integrates a range of features like declarative templates dependency injection end-to-end tooling.</p>",
        "Website": "https://angular.io/"
    },
    {
        "ID": 2,
        "Question": "What is Dependency Injection (DI) in Angular ?",
        "Answer": "<p><b>Dependency Injection (DI)</b> is a core concept of Angular and allows a class to receive dependency from another class. Most of the  time in angular dependency injection is done into a component or module class. You can use Angular dependency to increase flexibility and modularity in your application.</p>",
        "Website": ""
    },
    {
        "ID": 3,
        "Question": "What is Observable ?",
        "Answer": "<p>Angular makes use of observables as an interface to handle a variety of common asynchronous operation</p>",
        "Website": ""
    },
    {
        "ID": 4,
        "Question": "What is RxJs In Angular ?",
        "Answer": "<p>RsJs <b>(Reactive Extension for JavaScript)</b> is a library for composing asynchronous and event-based programs by using observable sequences.  </p>",
        "Website": ""
    },
    {
        "ID": 5,
        "Question": "What is Deractive & explain ?",
        "Answer": "<p>A core feature of <b>Angular</b>. Directives are classes that add additional behavior to elements in your Angular applications. With Angular's built-in directives, you can manage forms, lists, styles.<br/>There type of Directive: <b>(CSA)</b><ul><li>Component Directives - @Component</li><li>Structural Directives - *ngIf, *ngFor, *ngSwitch</li><li>Attribute Directives - [ngStyle], [ngClass] </li></ul></p>",
        "Website": ""
    },
    {
        "ID": 6,
        "Question": "What is a module in Angular ?",
        "Answer": "<p>All the Angular apps are modular and follow a modularity system known as NgModules. These are the containers which hold a cohesive block of code dedicated specifically to an application domain, a workflow, or some closely related set of capabilities. These modules generally contain components, service providers.</p>",
        "Website": ""
    },
    {
        "ID": 7,
        "Question": "What is Interpolation in Angular or String  Interpolation?",
        "Answer": "<p>String  Interpolation in Angular is a specific syntax use Html template within double curly brackets for displaying data.</p>",
        "Website": ""
    },
    {
        "ID": 8,
        "Question": "What is Interceptor in Anguklar?",
        "Answer": "<p>Interceptor is a medium in angular. This is connect to <b>Back-end</b> to <b>Front-end</b> Application. When any request is made that time interceptor can hanlde it.   </p>",
        "Website": ""
    },
    {
        "ID": 9,
        "Question": "What is Pipe in Angular?",
        "Answer": "<p>Pipes are simply a function that can directly apply on any Expression or value in Tamplate to Transform into some others value. <ul><li>Example</li><li>DatePipe - date - {{valueDate | date: 'dd/MM/yyyy'}}</li> <li>UpperCase - uppercase</li><li>LowerCase - lowercase</li><li>CurrencyPipe - currency</li><li>PercentPipe - percent</li><li><b>Custom Pipe</b> - We can create custom pipe also as per diplay data</li></li></ul</p>",
        "Website": ""
    },
    {
        "ID": 10,
        "Question": "What is Data Buinding in Angular?",
        "Answer": "<p>Data binding is the core concept of Angular 8 and used to define the communication between a component and the tamplate </br><ul><li><b>Two Type Data Buinding</b></li><li>One way Data Buinding - {{ value }}</li><li>Two way Data Buinding - Using [(ngModel)]</li><ul/></p>",
        "Website": ""
    },
    {
        "ID": 11,
        "Question": "How to data pass child to parent - parent to child components ?",
        "Answer": "<p>In the above parent component, we are passing “data” property to the following child component: <br/> Follow No 13 Question below link </p>",
        "Website": "https://www.interviewbit.com/angular-interview-questions/"
    },
    {
        "ID": 12,
        "Question": "What is lazy loading ?",
        "Answer": "<p><b>Lazy loading</b> is a technique in Angular that allows you to load components <b>asynchronously</b> when a specific route is activated. It improves the speed of application load time. </p>",
        "Website": ""
    },
    {
        "ID": 13,
        "Question": "Life cycle hooks ?",
        "Answer": "<p>An Angular component has a discrete life-cycle <br/> <ul><li>ngOnChanges - Called before ngOnInit function when one or more data bounds what  time properties changes</li><li>ngOnInit - Called once when rednder this page after ngOnChanges function. </li><li>ngDoCheck - Called immediatly after ngOnChanges on every changes detection run and immediatly After ngOnInit function.</li><li>ngAfterContentInit</li><li>ngAfterContentchecked</li><li>ngAfterViewInit</li><li>ngAfterViewChecked</li><li>ngOnDestroy</li></ul></p>",
        "Website": ""
    },
    {
        "ID": 14,
        "Question": "What are templates in Angular ?",
        "Answer": "<p>Templates in Angular are written Html that contains Angular specific elements and attributes; these templates are combined with information coming from the module.</p>",
        "Website": ""
    },
    {
        "ID": 15,
        "Question": "What are Angular expressions ?",
        "Answer": "<p>Angular expressions are code snippets that are usually pleased in binding such as <b>{{}}</b> expressions similar to JavaScript. This expression is used to binding data to Html in application.</p>",
        "Website": ""
    },
    {
        "ID": 16,
        "Question": "What is AOT ?",
        "Answer": "<p>AOT stands for Angular <b>Ahead-of-Time</b> compiler. It is used for pre-compiling the application components and along with their templates during the build process. Angular applications which are compiled with AOT have a smaller launching time.</p>",
        "Website": ""
    },
    {
        "ID": 17,
        "Question": "What are events in Angular ?",
        "Answer": "<p>Events in Angular are specific directives that help in customizing the behavior of various DOM events<br/><ul><li>ng-click</li><li>ng-copy</li><li>ng-cut</li><li>ng-dblclick</li><li>ng-keydown</li><li>ng-keypress</li><li>ng-keyup</li><li>ng-mousedown</li><li>ng-mouseenter</li><li>ng-mouseleave</li><li>ng-mousemove</li><li>ng-mouseover</li><li>ng-mouseup</li><li>ng-blur</li></ul></p>",
        "Website": ""
    },
    {
        "ID": 18,
        "Question": "What is HttpClient ?",
        "Answer": "<p><b>HttpClient</b> is introduced in Angular 6 and it will help us fetch external data, post to it, etc. We need to import the http module to make use of the http service.</p>",
        "Website": ""
    },
    {
        "ID": 19,
        "Question": "Differences between Promises and observables ?",
        "Answer": "<p>Differences are: <ul><li><b>Promise</b> emits a single value</li><li><b>Observable</b> emits multiple values over a period of a time</li><li>Promise not lazy</li><li>Observable are lazy an observable is not called until unsubscribe to the Observable</li><li>Promise can’t be cancelled</li><li>Observable can be cancelled by using unsubscribe() method</li><li>Observable provide operators like: <ul><li>Map, forEach, filter, reduce, retry, retryWhen etc</li></ul></li></ul></p>",
        "Website": ""
    },
    {
        "ID": 20,
        "Question": "Differentiate between Angular and AngularJS ?",
        "Answer": "<p>Differences are: <ul><li><b>Angular Js</b> using JavaScript Based</li><li><b>Angular</b> using TypeScript Based</li><li>AngularJs is controller Architecture </li><li>Angular is components Architecture</li><li>AngularJs is not mobile supported</li><li>Angular is mobile supported</li><li>AngularJs not Have CLI (command-line interfaces)</li><li>Angular have CLI (command-line interfaces)</li></ul></p>",
        "Website": ""
    },
    {
        "ID": 21,
        "Question": "Differentiate between One-Way and Two-Way ?",
        "Answer": "<p>Follow this link: </p>",
        "Website": "https://www.pluralsight.com/guides/one-and-two-way-data-binding-angular"
    },
];


/***/ }),

/***/ "./src/app/service/regex.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/regex.service.ts ***!
  \******************************************/
/*! exports provided: appPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appPattern", function() { return appPattern; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const appPattern = {
    score: /^((100)|([0-9]{1,2}[\.][0-9]{1,2})|([A-D])(?:-|\+)|([A-F])|([0-9]{1,2}))$/,
    dropDownNumericValue: /^[1-9]\d*$/,
    title: /^[a-zA-Z0-9](.*[a-zA-Z0-9])?$/,
    dropDownNumericValueWithMinus: /^[1-9\-]\d*$/,
    dropDownNumericValueWith0: /^[0-9]\d*$/,
    dropDownNumericValueWithMinusAnd0: /^[0-9\-]\d*$/,
    //phoneno: /^([+][1-9]{1,3}[\s\-][1-9]{3}[\s\-]{0,1}[0-9]{3}[\s\-]{0,1}[0-9]{4,11})$/,
    phoneno: /(^\+\d[0-9\s\-()]{1,48}$)|(^\d{8,15}$)/,
    fileexplorename: /^[0-9a-zA-Z ... ]+$/,
    newPhoneno: /^(?=.*[0-9])[+()0-9]+$/,
    PhoneWithPlusAtStart: /^\+*\d(?=.*[0-9])[()0-9]+$/,
    newPhoneRegrex: /^[\+\d]?(?:[\d-.\s()]*)$/,
    //custom : /^[\+\d]?(?:[\d-.\s()]*)[\)\d]$/,
    customphone: /(^\+\d[0-9\s-()]{1,48}$)|(^\d{8,15}$)/,
    //mobileno: /^([+][1-9]{1,3}[\s\-][1-9]{3}[\s\-]{0,1}[0-9]{3}[\s\-]{0,1}[0-9]{4,11})$/,
    mobileno: /(^\+\d[0-9\s\-()]{1,48}$)|(^\d{8,15}$)/,
    email: /^(?=[^@]*[A-Za-z])[^\W|_/\s][\w\-\.]+@([\w\-]+\.)+[\w\-]{2,20}$/,
    //phoneNoHintTooltip: "+11 111-111-1111XXXXXXX, +11 111 111 1111XXXXXXX, +11 1111111111XXXXXXX",
    phoneNoHintTooltip: "",
    //phoneNoHintLabel: "with country code e.g.",
    phoneNoHintLabel: "",
    //mobileNoHintTooltip: "+11 111-111-1111XXXXXXX, +11 111 111 1111XXXXXXX, +11 1111111111XXXXXXX",
    mobileNoHintTooltip: "",
    //mobileNoHintLabel: "with country code e.g.",
    mobileNoHintLabel: "",
    smtpPort: /^\d{0,4}$/,
    UserName: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$|^(?=[^@]*[A-Za-z])[^\W|_/\s][\w\-\.]+@([\w\-]+\.)+[\w\-]{2,20}$/,
    // InstPort:/^[0-9]*$/,
    // ipv4:/\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b)/,
    // ipv6:/(^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$)/,
    // hostname:/^(?:[a-z0-9]+(?:-[a-z0-9]+)*\.){1,2}[a-z]{2,12}$/,
    //newHost:(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))
    //smtpServer:/\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b|^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$|^(?:[a-z0-9]+(?:-[a-z0-9]+)*\.){1,2}[a-z]{2,12}$/,
    smtpServer: /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$|^[a-zA-z0-9][a-zA-z0-9-]+\.(.[a-zA-Z]{1,})+/,
    ifcsPattern: /^[A-Za-z]{4}[0]{1}[0-9A-Za-z]{6}/,
    swiftCodePattern: /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?/,
    pincode: null,
    pincodeMaxLength: 11,
    alphaNumericWithSpace: /^[a-z][0-9]|^[a-z][a-z0-9\s]+$/i,
    alphaNumericWithSpecialCharacters: /^[^\W|_/\s][ \w\d\W|_/]*$/i,
    alphaNumericWithoutSpecialCharacters: /^[a-zA-Z]+\.[a-zA-Z]{4,10}^/,
    custom: /^(?=.*[^\W|_/\s])[ \w\d\W|_/]*$/i,
    nameWithoutSpecialCharWithSpace: /^(?!\d+$)(?:[a-zA-Z0-9][a-zA-Z0-9 ]*)?$/,
    //new aplhanumeric -alternative one 
    alphaNumericWithSpecialReg: /^(?=.*[a-zA-Z])(?=.*[0-9a-z])[A-Za-z0-9\s]+$/,
    //Sep-2001 pattern
    monthWithYear: /^[A-Za-z]{3}\-(?!0+$)\d{4}$/,
    //numberic ||  N/A 
    numbericOrNA: /^(?:(?!0+$)[0-9]{1,2}|NA|n\/a)$/i,
    // alphanumeric with rang 
    alphaNumericWithSpaceWithRang: /^(?!\s)[a-z]([a-zA-Z0-9\s]{2,100})(?!\s)$/i,
    // /^[a-z0-9](?!.*?[^\na-z-@&$]{2}).*?[a-z0-9]+$/i,
    campusName: /^[^\d|\W|_/\s][a-zA-Z-\s0-9@]*$/i,
    alphaNumericWithSpaceNew: /^[^\d|\W|_/\s][a-zA-Z0-9-\s]*$/i,
    agentCode: /^[a-z0-9][a-z0-9\s]+$/i,
    studentID: /^[a-z0-9][a-z0-9-/\\s]+$/i,
    fax: '^(\+?\d{1,}(\s?|\-?)\d*(\s?|\-?)\(?\d{2,}\)?(\s?|\-?)\d{3,}\s?\d{3,})$',
    url: /^(ftp|http|https):\/\/[^ "]+$/,
    panNo: /^[A-Z]{5}[0-9]{4}[A-Z]{1}/,
    onlyNumbers: /^[0-9]{1,9}$/,
    skypeId: /^[^\W|_/\s][\w\d\S|_/]*$/i,
    personName: /^[^\d][a-z0-9]+$/i,
    personFullName: /^[^\d|\W|_/\s][a-zA-Z0-9-\s]*$/i,
    numberwithDecimals: /^-?[\d]{0,10}((\.)[\d]{1,2})?$/,
    companyName: /^[A-Za-z0-9]([a-zA-Z0-9]|[- @\.#&!])*$/
};


/***/ })

}]);
//# sourceMappingURL=src-app-components-home-home-module-es2015.js.map