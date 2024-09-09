import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DasboardHomeComponent } from './page/dasboard-home/dasboard-home.component';



@NgModule({
  declarations: [
    DasboardHomeComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class DashboardModule { }
