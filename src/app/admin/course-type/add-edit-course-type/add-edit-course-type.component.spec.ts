import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCourseTypeComponent } from './add-edit-course-type.component';

describe('AddEditCourseTypeComponent', () => {
  let component: AddEditCourseTypeComponent;
  let fixture: ComponentFixture<AddEditCourseTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditCourseTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCourseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
