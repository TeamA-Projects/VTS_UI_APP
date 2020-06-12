import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './admin/category/category.component';


const routes: Routes = [
  {
    path: "", 
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: CategoryComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
