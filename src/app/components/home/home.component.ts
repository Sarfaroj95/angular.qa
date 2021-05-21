import { Component, OnInit } from '@angular/core';
import { AngularQaServiceService } from './../../service/angular-qa-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AngularQaServiceService],
  preserveWhitespaces: true
})
export class HomeComponent implements OnInit {

  companies: any[];

  constructor(service: AngularQaServiceService) {
      this.companies = service.getCompanies();
  }

  ngOnInit() {
  }

}
