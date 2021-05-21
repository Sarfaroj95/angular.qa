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
    "Answer": "<p><b>Angular is a platform</b> for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces</p> ",
    "Website": "http://www.nowebsitesupermart.com"
},
{
  "ID": 2,
  "Question": "What is angular ?",
  "Answer": "<p>Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces</p>",
  "Website": "http://www.nowebsitesupermart.com"
},


];


