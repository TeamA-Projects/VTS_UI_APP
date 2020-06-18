import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { AddEditCategoryComponent } from './category/add-edit-category/add-edit-category.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CourseTypeComponent } from './course-type/course-type.component';
import { CourseComponent } from './course/course.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEditCourseTypeComponent } from './course-type/add-edit-course-type/add-edit-course-type.component';
import { AddEditCourseComponent } from './course/add-edit-course/add-edit-course.component'


@NgModule({
  declarations: [CategoryComponent, AddEditCategoryComponent, CourseTypeComponent, CourseComponent, AddEditCourseTypeComponent, AddEditCourseComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ModalModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
