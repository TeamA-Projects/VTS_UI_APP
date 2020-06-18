import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ICourseType } from '../course-type.interface';
import { AdminService } from '../../admin.service';
import { ICategories } from '../../category/category.interface';

@Component({
  selector: 'add-edit-course-type',
  templateUrl: './add-edit-course-type.component.html',
  styleUrls: ['./add-edit-course-type.component.scss']
})
export class AddEditCourseTypeComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  @ViewChild('addEditModal') addEditModal: ModalDirective;

  @Input() courseTypeID: number = 0;

  @Input() set isOpenPopUp(value: boolean) {
    if (this.addEditModal) {
      if (value) {
        this.showPopUp();
      } else {
        this.hidePopUp();
      }
    }
  }

  @Output() closePopUp: EventEmitter<any> = new EventEmitter();

  courseType: ICourseType = { CourseTypeID : 0, CourseType: '', CategoryID: 0, CategoryName: ''};
  categories: ICategories = [];

  ngOnInit(): void {
    this.getCategories();
  }

  showPopUp(): void {
    this.getCourseTypeDetails();
    this.addEditModal.show();
  }

  hidePopUp(): void {
    this.addEditModal.hide();
  }

  getCategories() {
    this.adminService.getCategories().subscribe(
      data => {
        this.categories = data;
      }
    )
  }

  getCourseTypeDetails() {
    if (this.courseTypeID != 0) {
      this.adminService.getCourseTypeByID(this.courseTypeID).subscribe(
        data => {
          this.courseType = data;
        }
      )
    }
    else {
      this.courseType = { CourseTypeID : 0, CourseType: '', CategoryID: 0, CategoryName: ''};
    }
  }

  close() {
    this.closePopUp.emit();
  }

}
