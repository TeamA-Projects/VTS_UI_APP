import { Component, OnInit } from '@angular/core';
import { ICategories } from './category.interface';
import { AdminService } from '../admin.service';
import { faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  faAdd = faPlus;
  faEdit = faEdit;
  faDelete = faTrashAlt;

  constructor(private adminService: AdminService) { }

  categoryID : number = 0;
  isOpenPopUp : boolean = false;

  public categories : ICategories = [];

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.adminService.getCategories().subscribe(
      data => {
        this.categories = data;
      }
    )
  }

  addNewCategory() {
    this.categoryID = 0;
    this.isOpenPopUp = true;
  }

  editCategory(categoryID: number) {
    this.categoryID = categoryID;
    this.isOpenPopUp = true;
  }

  closePopUp() {
    this.isOpenPopUp = false;
    this.categoryID = 0;
  }

}
