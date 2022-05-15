import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { TableUserComponent } from './table-user/table-user.component';
import { SqueletonComponent } from './squeleton/squeleton.component';


const routes:Routes =[
  {
    path: '', children: [
      { path: 'tableuser', component: TableUserComponent },
      { path: 'squeletonUser', component: SqueletonComponent },
  

    ]
  }



]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutinAdminModule { }
