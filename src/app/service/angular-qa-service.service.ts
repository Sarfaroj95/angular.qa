import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularQaServiceService {

  constructor() { }
  getCompanies(): any[] {
    return companies;
}
}


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

let companies: any = [
  {
    "ID": 1,
    "Question": "What is angular ?",
    "Answer": "<p>Angular is a TypeScript based <b>open source single page web application framework</b>, developed and maintained by <b>Google</b>. Easy and powerful way of building front end web based applications. Angular integrates a range of features like declarative templates dependency injection end-to-end tooling.</p>",
    "Website": "https://angular.io/"
},
{
  "ID": 2,
  "Question": "What is Dependency Injection (DI) in Angular ?",
  "Answer": "<p><b>Dependency Injection (DI)</b> is a core concept of Angular and allows a class to receive dependency from another class.Most of the  time in angular dependency injection is done into a component or module class. You can use Angular dependency to increase flexibility and modularity in your application.</p>",
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
  "Answer": "<p>RsJs <b>(Reactive Extension for JavaScript)</b> is a library for reactive programming using observables. That  makes it easier to compose asynchronous or callback based code. The library also provided utility functions for creating and working with observables.  </p>",
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
  "Question": "How to data pass child to parent - parent to child components ?",
  "Answer": "<p>In the above parent component, we are passing “data” property to the following child component: <br/> Follow No 13 Question below link </p>",
  "Website": "https://www.interviewbit.com/angular-interview-questions/"
},
{
  "ID": 9,
  "Question": "What is lazy loading ?",
  "Answer": "<p><b>Lazy loading</b> is a technique in Angular that allows you to load components <b>asynchronously</b> when a specific route is activated. It improves the speed of application load time. </p>",
  "Website": ""
},
{
  "ID": 10,
  "Question": "Life cycle hooks ?",
  "Answer": "<p>An Angular component has a discrete life-cycle <br/> <ul><li>constructor</li><li>ngOnChanges</li><li>ngOnInit</li><li>ngDoCheck</li><li>ngOnDestroy</li></ul></p>",
  "Website": ""
},
{
  "ID": 11,
  "Question": "What are templates in Angular ?",
  "Answer": "<p>Templates in Angular are written Html that contains Angular specific elements and attributes; these templates are combined with information coming from the module.</p>",
  "Website": ""
},
{
  "ID": 12,
  "Question": "What are Angular expressions ?",
  "Answer": "<p>Angular expressions are code snippets that are usually pleased in binding such as <b>{{}}</b> expressions similar to JavaScript. This expression is used to binding data to Html in application.</p>",
  "Website": ""
},
{
  "ID": 13,
  "Question": "What is data binding ?",
  "Answer": "<p>In Angular, data binding is one of the most powerful and important features that allow you to define the communication between the component and <b>DOM(Document Object Model)</b>.</p>",
  "Website": ""
},
{
  "ID": 14,
  "Question": "What is AOT ?",
  "Answer": "<p>AOT stands for Angular <b>Ahead-of-Time</b> compiler. It is used for pre-compiling the application components and along with their templates during the build process. Angular applications which are compiled with AOT have a smaller launching time.</p>",
  "Website": ""
},
{
  "ID": 15,
  "Question": "What are events in Angular ?",
  "Answer": "<p>Events in Angular are specific directives that help in customizing the behavior of various DOM events<br/><ul><li>ng-click</li><li>ng-copy</li><li>ng-cut</li><li>ng-dblclick</li><li>ng-keydown</li><li>ng-keypress</li><li>ng-keyup</li><li>ng-mousedown</li><li>ng-mouseenter</li><li>ng-mouseleave</li><li>ng-mousemove</li><li>ng-mouseover</li><li>ng-mouseup</li><li>ng-blur</li></ul></p>",
  "Website": ""
},
{
  "ID": 16,
  "Question": "What is HttpClient ?",
  "Answer": "<p><b>HttpClient</b> is introduced in Angular 6 and it will help us fetch external data, post to it, etc. We need to import the http module to make use of the http service.</p>",
  "Website": ""
},
{
  "ID": 17,
  "Question": "Differences between Promises and observables ?",
  "Answer": "<p>Differences are: <ul><li><b>Promise</b> emits a single value</li><li><b>Observable</b> emits multiple values over a period of a time</li><li>Promise not lazy</li><li>Observable are lazy an observable is not called until unsubscribe to the Observable</li><li>Promise can’t be cancelled</li><li>Observable can be cancelled by using unsubscribe() method</li><li>Observable provide operators like: <ul><li>Map, forEach, filter, reduce, retry, retryWhen etc</li></ul></li></ul></p>",
  "Website": ""
},
{
  "ID": 18,
  "Question": "Differentiate between Angular and AngularJS ?",
  "Answer": "<p>Differences are: <ul><li><b>Angular Js</b> using JavaScript Based</li><li><b>Angular</b> using TypeScript Based</li><li>AngularJs is controller Architecture </li><li>Angular is components Architecture</li><li>AngularJs is not mobile supported</li><li>Angular is mobile supported</li><li>AngularJs not Have CLI (command-line interfaces)</li><li>Angular have CLI (command-line interfaces)</li></ul></p>",
  "Website": ""
},
{
  "ID": 19,
  "Question": "Differentiate between One-Way and Two-Way ?",
  "Answer": "<p>Follow this link: </p>",
  "Website": "https://www.pluralsight.com/guides/one-and-two-way-data-binding-angular"
},



];


