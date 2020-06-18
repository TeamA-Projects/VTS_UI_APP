import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ICourse } from '../course.interface';
import { AdminService } from '../../admin.service';
import { ICourseTypes } from '../../course-type/course-type.interface';

@Component({
  selector: 'add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss']
})
export class AddEditCourseComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  @ViewChild('addEditModal') addEditModal: ModalDirective;

  @Input() courseID: number = 0;

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

  course: ICourse = { CourseID : 0, CourseName: '', CourseTypeID: 0, CourseType: '', AdditionalInfo: ''};
  courseTypes: ICourseTypes = [];

  ngOnInit(): void {
    this.getCourseTypes();
  }

  showPopUp(): void {
    this.getCourseDetails();
    this.addEditModal.show();
  }

  hidePopUp(): void {
    this.addEditModal.hide();
  }

  getCourseTypes() {
    this.adminService.getCourseTypes().subscribe(
      data => {
        this.courseTypes = data;
      }
    )
  }

  getCourseDetails() {
    if (this.courseID != 0) {
      this.adminService.getCoursesByID(this.courseID).subscribe(
        data => {
          this.course = data;
        }
      )
    }
    else {
      this.course = { CourseID : 0, CourseName: '', CourseTypeID: 0, CourseType: '', AdditionalInfo: ''};
    }
  }

  close() {
    this.closePopUp.emit();
  }

}
