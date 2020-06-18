import { Component, OnInit } from '@angular/core';
import { ICourses } from './course.interface';
import { AdminService } from '../admin.service';
import { faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  faAdd = faPlus;
  faEdit = faEdit;
  faDelete = faTrashAlt;

  constructor(private adminService: AdminService) { }

  courseID : number = 0;
  isOpenPopUp : boolean = false;

  public courses : ICourses = [];

  ngOnInit(): void {
    this.adminService.getCourses().subscribe(
      data => {
        this.courses = data;
      }
    )
  }

  addNewCourse() {
    this.courseID = 0;
    this.isOpenPopUp = true;
  }

  editCourse(courseID: number) {
    this.courseID = courseID;
    this.isOpenPopUp = true;
  }

  closePopUp() {
    this.isOpenPopUp = false;
    this.courseID = 0;
  }

}
