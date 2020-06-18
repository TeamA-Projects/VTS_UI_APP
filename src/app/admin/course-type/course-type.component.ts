import { Component, OnInit } from '@angular/core';
import { ICourseTypes } from './course-type.interface';
import { AdminService } from '../admin.service';
import { faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-type',
  templateUrl: './course-type.component.html',
  styleUrls: ['./course-type.component.scss']
})
export class CourseTypeComponent implements OnInit {

  faAdd = faPlus;
  faEdit = faEdit;
  faDelete = faTrashAlt;

  constructor(private adminService: AdminService) { }

  courseTypeID : number = 0;
  isOpenPopUp : boolean = false;

  public courseTypes : ICourseTypes = [];

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.adminService.getCourseTypes().subscribe(
      data => {
        this.courseTypes = data;
      }
    )
  }

  addNewCourseType() {
    this.courseTypeID = 0;
    this.isOpenPopUp = true;
  }

  editCourseType(courseTypeID: number) {
    this.courseTypeID = courseTypeID;
    this.isOpenPopUp = true;
  }

  closePopUp() {
    this.isOpenPopUp = false;
    this.courseTypeID = 0;
  }

}
