import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { CourseTypeComponent } from './course-type/course-type.component';
import { CourseComponent } from './course/course.component';

const adminRoutes: Routes = [
    {
      path: 'category',
      component: CategoryComponent
    },
    {
      path: 'coursetype',
      component: CourseTypeComponent
    },
    {
      path: 'course',
      component: CourseComponent
    },
    //{
    //   path: 'course',
    //   component: CourseComponent
    //   children: [
    //     {
    //       path: '',
    //       children: [
    //         // { path: 'crises', component: ManageCrisesComponent },
    //         // { path: 'heroes', component: ManageHeroesComponent },
    //         { path: '', component: AdminDashboardComponent }
    //       ]
    //     }
    //]
    //}
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(adminRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AdminRoutingModule {}