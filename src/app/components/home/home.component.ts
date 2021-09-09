import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { appPattern } from 'src/app/service/regex.service';
import { AngularQaServiceService } from './../../service/angular-qa-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AngularQaServiceService],
  preserveWhitespaces: true
})
export class HomeComponent implements OnInit {

  questionAnswer: any[];
  formData: any = {}
  modelPattern = appPattern;
  constructor(service: AngularQaServiceService) {
    this.questionAnswer = service.getCompanies();
  }

  ngOnInit() {
    this.formData = {
      email: '',
      question: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log("Data=", this.formData);
  }

}
