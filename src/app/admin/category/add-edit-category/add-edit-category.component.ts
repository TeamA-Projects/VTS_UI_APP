import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ICategory } from '../category.interface';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss']
})
export class AddEditCategoryComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  @ViewChild('addEditModal') addEditModal: ModalDirective;

  @Input() categoryID: number = 0;

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

  category: ICategory = { CategoryID: 0, CategoryName: '', AdditionalInfo: '' };

  ngOnInit(): void {
    
  }

  showPopUp(): void {
    this.getCategoryDetails();
    this.addEditModal.show();
  }

  hidePopUp(): void {
    this.addEditModal.hide();
  }

  getCategoryDetails() {
    if (this.categoryID != 0) {
      this.adminService.getCategoryByID(this.categoryID).subscribe(
        data => {
          this.category = data;
        }
      )
    }
    else {
      this.category = {CategoryID: 0, CategoryName: '', AdditionalInfo: ''};
    }
  }

  saveCategoryDetails() {
    this.adminService.postCategoryDetails(this.category).subscribe(
      data => {
        this.close();
      }
    )
  }

  close() {
    this.closePopUp.emit();
  }

}
