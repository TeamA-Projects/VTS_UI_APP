import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ModalModule
  ]
})
export class AdminModule { }
