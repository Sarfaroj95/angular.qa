import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { DxAccordionModule, DxCheckBoxModule, DxSliderModule, DxTagBoxModule, DxTemplateModule } from 'devextreme-angular';
import { FormsModule } from "@angular/forms"
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DxAccordionModule,
    DxCheckBoxModule,
    DxSliderModule,
    DxTagBoxModule,
    DxTemplateModule,
    FormsModule,
    RouterModule.forChild(
      [{ path: '', component: HomeComponent }]
    )
  ],
})
export class HomeModule { }
