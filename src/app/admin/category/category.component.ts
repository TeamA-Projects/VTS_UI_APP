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

  public categories : ICategories = [];

  ngOnInit(): void {
    this.adminService.getCategories().subscribe(
      data=>{
        this.categories = data;
      }
    )
  }

  addNewCategory() {
    
  }

}
