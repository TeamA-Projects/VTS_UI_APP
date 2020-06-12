import { Injectable } from '@angular/core';
import { ICategories } from './category/category.interface';
import { Observable, of } from 'rxjs';

const categories : ICategories = [
  {CategoryID: 1, CategoryName: 'Software', TrendID: 1, TrendName: 'Latest Trend'},
  {CategoryID: 2, CategoryName: 'Music', TrendID: 2, TrendName: 'Classical'},
  {CategoryID: 3, CategoryName: 'Tution', TrendID: 3, TrendName: 'Classes'}
];

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  getCategories(): Observable<ICategories> {
    return of(categories);
  }

}
