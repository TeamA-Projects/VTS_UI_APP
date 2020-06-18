import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICategories, ICategory } from './category/category.interface';
import { ICourseTypes, ICourseType } from './course-type/course-type.interface';
import { ICourses, ICourse } from './course/course.interface';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'assets/db.json';

  private categoriesUrl = this.baseUrl+''; 

  getCategories(): Observable<ICategories> {
    return this.http.get(this.categoriesUrl).pipe(
      map(res => {
        return res["categories"];
      })
    );
  }

  getCategoryByID(id : number): Observable<ICategory> {
    return this.http.get('assets/db.json').pipe(
      map(res => {
        return res["categories"][id-1];
      })
    );
  }

  postCategoryDetails(category: ICategory): Observable<any> {
    return this.http.post('assets/db.json',category).pipe(
      map(res => {
        return "success";
      })
    );
  }

  getCourseTypes(): Observable<ICourseTypes> {
    return this.http.get('assets/db.json').pipe(
      map(res => {
        return res["courseTypes"];
      })
    );
  }

  getCourseTypeByID(id : number): Observable<ICourseType> {
    return this.http.get('assets/db.json').pipe(
      map(res => {
        return res["courseTypes"][id-1];
      })
    );
  }

  getCourses(): Observable<ICourses> {
    return this.http.get('assets/db.json').pipe(
      map(res => {
        return res["courses"];
      })
    );
  }

  getCoursesByID(id : number): Observable<ICourse> {
    return this.http.get('assets/db.json').pipe(
      map(res => {
        return res["courses"][id-1];
      })
    );
  }

}
