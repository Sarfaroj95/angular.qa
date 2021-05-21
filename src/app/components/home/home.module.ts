import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { DxAccordionModule, DxCheckBoxModule, DxSliderModule, DxTagBoxModule, DxTemplateModule } from 'devextreme-angular';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DxAccordionModule, 
    DxCheckBoxModule, 
    DxSliderModule, 
    DxTagBoxModule, 
    DxTemplateModule,
    RouterModule.forChild(
      [{path:'',component:HomeComponent}]
    )
  ],
})
export class HomeModule { }
